---
title: Primary Navigation - Implementation Guide
description: Developer handoff documentation with technical specifications and implementation guidance
feature: primary-navigation
last-updated: 2025-11-09
version: 1.0.0
related-files:
  - ./README.md
  - ./screen-states.md
  - ./user-journey.md
  - ../../design-system/components/navigation.md
status: approved
---

# Primary Navigation - Implementation Guide

## Table of Contents

1. [Component Architecture](#component-architecture)
2. [Technical Specifications](#technical-specifications)
3. [Implementation Steps](#implementation-steps)
4. [Code Examples](#code-examples)
5. [Integration Points](#integration-points)
6. [Testing Requirements](#testing-requirements)
7. [Performance Considerations](#performance-considerations)
8. [Accessibility Checklist](#accessibility-checklist)

---

## Component Architecture

### Component Hierarchy

```
<PrimaryNavigation>
├── <Container>
│   ├── <Logo>
│   │   └── href: adaptive based on currentSection
│   ├── <DesktopNav>
│   │   ├── <NavItem label="Sessions" />
│   │   ├── <NavItem label="Booths" />
│   │   └── <NavLink label="FAQ" variant="outlined" />
│   └── <MobileNav>
│       ├── <HamburgerButton />
│       └── <MobileMenu>
│           ├── <MobileNavItem label="Sessions" />
│           ├── <MobileNavItem label="Booths" />
│           └── <MobileNavItem label="FAQ" />
└── (Mobile menu overlay - conditional render)
```

### File Structure

```
/components/navigation/
├── PrimaryNavigation.tsx      # Main container component
├── Logo.tsx                   # Adaptive logo component
├── NavItem.tsx                # Desktop navigation item
├── MobileNav.tsx              # Mobile hamburger + menu
├── MobileNavItem.tsx          # Mobile menu item
├── types.ts                   # TypeScript interfaces
└── styles.module.css          # Component styles (or use Tailwind)

/hooks/
└── useActiveSection.ts        # Hook to determine active section from route

/lib/
└── navigation.ts              # Navigation configuration and utilities
```

---

## Technical Specifications

### TypeScript Interfaces

```typescript
// types.ts

export type SectionKey = 'home' | 'sessions' | 'booths' | 'session-detail' | 'booth-detail';

export interface NavigationItem {
  label: string;
  href: string;
  key: SectionKey;
  ariaLabel?: string;
}

export interface PrimaryNavigationProps {
  currentSection: SectionKey;
  className?: string;
}

export interface NavItemProps {
  label: string;
  href: string;
  isActive: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}

export interface LogoProps {
  href?: string | null;
  className?: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentSection: SectionKey;
  items: NavigationItem[];
}
```

### Navigation Configuration

```typescript
// lib/navigation.ts

export const navigationItems: NavigationItem[] = [
  {
    label: 'Sessions',
    href: '/sessions',
    key: 'sessions',
    ariaLabel: 'View all career sessions'
  },
  {
    label: 'Booths',
    href: '/booths',
    key: 'booths',
    ariaLabel: 'View all sponsor booths'
  }
];

export const faqLink: NavigationItem = {
  label: 'FAQ',
  href: '/faq',
  key: 'home', // FAQ doesn't have its own section
  ariaLabel: 'Frequently asked questions'
};

/**
 * Determines logo destination based on current section
 */
export function getLogoHref(currentSection: SectionKey): string | null {
  switch (currentSection) {
    case 'home':
      return null; // Non-interactive when already on home
    case 'sessions':
    case 'booths':
      return '/'; // Return to home from section pages
    case 'session-detail':
    case 'booth-detail':
      return null; // Detail pages use breadcrumb pattern instead
    default:
      return '/';
  }
}

/**
 * Determines if navigation should be shown (vs breadcrumb)
 */
export function shouldShowPrimaryNav(currentSection: SectionKey): boolean {
  return currentSection !== 'session-detail' && currentSection !== 'booth-detail';
}
```

### Hook: useActiveSection

```typescript
// hooks/useActiveSection.ts

import { usePathname } from 'next/navigation';
import { SectionKey } from '@/components/navigation/types';

export function useActiveSection(): SectionKey {
  const pathname = usePathname();

  // Match routes to section keys
  if (pathname === '/') {
    return 'home';
  }

  if (pathname === '/sessions') {
    return 'sessions';
  }

  if (pathname.startsWith('/sessions/')) {
    return 'session-detail';
  }

  if (pathname === '/booths') {
    return 'booths';
  }

  if (pathname.startsWith('/booths/')) {
    return 'booth-detail';
  }

  // Default fallback
  return 'home';
}
```

---

## Implementation Steps

### Step 1: Create Base Components

**1.1 NavItem Component (Desktop)**

```typescript
// components/navigation/NavItem.tsx

import Link from 'next/link';
import { NavItemProps } from './types';

export function NavItem({ label, href, isActive, ariaLabel, onClick }: NavItemProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (isActive) {
      e.preventDefault(); // Don't navigate if already on this section
    }
    onClick?.();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      aria-current={isActive ? 'page' : undefined}
      aria-label={ariaLabel || label}
      tabIndex={isActive ? -1 : 0}
      className={`
        nav-item
        relative
        px-4 py-2
        font-museo font-medium
        text-base leading-6
        tracking-wide
        rounded
        transition-all duration-200 ease-out
        ${isActive
          ? 'text-myb-blue bg-myb-blue/12 font-semibold cursor-default'
          : 'text-myb-navy bg-transparent hover:text-myb-blue hover:bg-myb-blue/8'
        }
        focus:outline-none focus:ring-2 focus:ring-myb-blue focus:ring-offset-2
      `}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-myb-blue" />
      )}
    </Link>
  );
}
```

**1.2 Logo Component**

```typescript
// components/navigation/Logo.tsx

import Link from 'next/link';
import Image from 'next/image';
import { LogoProps } from './types';

export function Logo({ href, className = '' }: LogoProps) {
  const isInteractive = href !== null;

  const logoImage = (
    <Image
      src="/images/myblueprint-logo.svg"
      alt="myBlueprint"
      width={140}
      height={32}
      className="h-8 w-auto"
      priority
    />
  );

  if (!isInteractive) {
    return (
      <div
        className={`logo ${className}`}
        role="img"
        aria-label="myBlueprint Career Launch Platform"
      >
        {logoImage}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`
        logo
        ${className}
        transition-transform duration-150 active:scale-98
        focus:outline-none focus:ring-2 focus:ring-myb-blue focus:ring-offset-2 focus:rounded
      `}
      aria-label="myBlueprint Career Launch Platform home"
    >
      {logoImage}
    </Link>
  );
}
```

**1.3 MobileNav Component**

```typescript
// components/navigation/MobileNav.tsx

import { useState, useEffect } from 'react';
import { MobileNavItem } from './MobileNavItem';
import { NavigationItem, SectionKey } from './types';

interface MobileNavProps {
  currentSection: SectionKey;
  items: NavigationItem[];
}

export function MobileNav({ currentSection, items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [currentSection]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          md:hidden
          p-2.5
          rounded
          text-myb-navy hover:text-myb-blue
          focus:outline-none focus:ring-2 focus:ring-myb-blue
          transition-colors duration-150
        "
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? (
          // Close icon (X)
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <nav
            id="mobile-menu"
            className="
              fixed top-16 left-0 right-0 bottom-0
              bg-white
              z-50
              overflow-y-auto
              shadow-lg
              md:hidden
              animate-slideDown
            "
            aria-label="Mobile navigation"
          >
            <ul role="list" className="py-2">
              {items.map((item) => (
                <li key={item.key}>
                  <MobileNavItem
                    {...item}
                    isActive={currentSection === item.key}
                    onClick={() => setIsOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
```

**1.4 MobileNavItem Component**

```typescript
// components/navigation/MobileNavItem.tsx

import Link from 'next/link';
import { NavItemProps } from './types';

export function MobileNavItem({ label, href, isActive, ariaLabel, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      aria-label={ariaLabel || label}
      className={`
        block w-full
        px-6 py-4
        font-museo font-medium
        text-lg leading-7
        border-b border-gray-100
        transition-colors duration-150
        ${isActive
          ? 'text-myb-blue bg-myb-blue/8 border-l-4 border-l-myb-blue font-semibold'
          : 'text-myb-navy hover:bg-myb-blue/4'
        }
      `}
      style={{ minHeight: '56px' }} // Ensure 56px touch target
    >
      {label}
    </Link>
  );
}
```

### Step 2: Create Main PrimaryNavigation Component

```typescript
// components/navigation/PrimaryNavigation.tsx

'use client';

import { Logo } from './Logo';
import { NavItem } from './NavItem';
import { MobileNav } from './MobileNav';
import { useActiveSection } from '@/hooks/useActiveSection';
import { navigationItems, faqLink, getLogoHref, shouldShowPrimaryNav } from '@/lib/navigation';
import { PrimaryNavigationProps } from './types';

export function PrimaryNavigation({ className = '' }: Omit<PrimaryNavigationProps, 'currentSection'>) {
  const currentSection = useActiveSection();

  // Don't show primary nav on detail pages (they use breadcrumbs)
  if (!shouldShowPrimaryNav(currentSection)) {
    return null;
  }

  const logoHref = getLogoHref(currentSection);

  return (
    <header
      className={`
        sticky top-0 z-100
        w-full
        bg-white
        border-b border-gray-200
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-20">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Logo href={logoHref} />

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-10"
            aria-label="Primary navigation"
          >
            <ul role="list" className="flex items-center gap-10">
              {navigationItems.map((item) => (
                <li key={item.key}>
                  <NavItem
                    {...item}
                    isActive={currentSection === item.key}
                  />
                </li>
              ))}
            </ul>

            {/* FAQ Link (outlined button style) */}
            <a
              href={faqLink.href}
              className="
                px-4 py-2
                font-museo font-medium
                text-base
                text-myb-navy
                border border-myb-navy
                rounded
                hover:bg-myb-navy hover:text-white
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-myb-blue focus:ring-offset-2
              "
              aria-label={faqLink.ariaLabel}
            >
              {faqLink.label}
            </a>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav
            currentSection={currentSection}
            items={[...navigationItems, faqLink]}
          />
        </div>
      </div>
    </header>
  );
}
```

### Step 3: Add to Root Layout

```typescript
// app/layout.tsx

import { PrimaryNavigation } from '@/components/navigation/PrimaryNavigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PrimaryNavigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

---

## Integration Points

### Integration with Existing Breadcrumb Pattern

**On Detail Pages (Session/Booth Detail):**
- Primary navigation should NOT render
- Existing breadcrumb pattern remains unchanged
- Conditional logic in `PrimaryNavigation` handles this

**Implementation:**
```typescript
// In PrimaryNavigation component
if (!shouldShowPrimaryNav(currentSection)) {
  return null; // Don't render on detail pages
}
```

**On Section Pages (Sessions/Booths List):**
- Primary navigation renders
- Breadcrumb is NOT needed
- Logo provides home access

### Integration with Cookie-Based User Recognition

**No direct integration needed:**
- Navigation is independent of user authentication state
- All navigation items are always visible (no auth-gated sections)
- Cookie state does not affect navigation rendering

### Integration with Analytics

**Track Navigation Clicks:**

```typescript
// lib/analytics.ts

export function trackNavigationClick(from: string, to: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'navigation_click', {
      event_category: 'Navigation',
      event_label: `${from} -> ${to}`,
      from_section: from,
      to_section: to
    });
  }
}
```

**Usage in NavItem:**
```typescript
// In NavItem onClick
onClick={() => {
  trackNavigationClick(currentSection, item.key);
}}
```

---

## Testing Requirements

### Unit Tests

**Test File: `PrimaryNavigation.test.tsx`**

```typescript
import { render, screen } from '@testing-library/react';
import { PrimaryNavigation } from './PrimaryNavigation';
import { useActiveSection } from '@/hooks/useActiveSection';

jest.mock('@/hooks/useActiveSection');

describe('PrimaryNavigation', () => {
  it('renders navigation items', () => {
    (useActiveSection as jest.Mock).mockReturnValue('home');
    render(<PrimaryNavigation />);

    expect(screen.getByText('Sessions')).toBeInTheDocument();
    expect(screen.getByText('Booths')).toBeInTheDocument();
    expect(screen.getByText('FAQ')).toBeInTheDocument();
  });

  it('marks active section correctly', () => {
    (useActiveSection as jest.Mock).mockReturnValue('sessions');
    render(<PrimaryNavigation />);

    const sessionsLink = screen.getByText('Sessions');
    expect(sessionsLink).toHaveAttribute('aria-current', 'page');
  });

  it('does not render on detail pages', () => {
    (useActiveSection as jest.Mock).mockReturnValue('session-detail');
    const { container } = render(<PrimaryNavigation />);

    expect(container.firstChild).toBeNull();
  });

  it('makes logo non-interactive on home page', () => {
    (useActiveSection as jest.Mock).mockReturnValue('home');
    render(<PrimaryNavigation />);

    const logo = screen.getByLabelText(/myBlueprint/i);
    expect(logo.tagName).not.toBe('A');
  });

  it('makes logo link to home on section pages', () => {
    (useActiveSection as jest.Mock).mockReturnValue('booths');
    render(<PrimaryNavigation />);

    const logo = screen.getByLabelText(/myBlueprint.*home/i);
    expect(logo).toHaveAttribute('href', '/');
  });
});
```

### Integration Tests

**Test navigation flow across pages:**

```typescript
// e2e/navigation.spec.ts (Playwright)

import { test, expect } from '@playwright/test';

test.describe('Primary Navigation', () => {
  test('navigates from booths to sessions directly', async ({ page }) => {
    await page.goto('/booths');

    // Click Sessions in navigation
    await page.click('text=Sessions');

    // Verify navigation occurred
    await expect(page).toHaveURL('/sessions');

    // Verify active state updated
    const sessionsLink = page.locator('a:has-text("Sessions")');
    await expect(sessionsLink).toHaveAttribute('aria-current', 'page');
  });

  test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Open menu
    await page.click('button[aria-label*="Open navigation"]');
    await expect(page.locator('#mobile-menu')).toBeVisible();

    // Close menu via backdrop
    await page.click('body', { position: { x: 10, y: 10 } });
    await expect(page.locator('#mobile-menu')).not.toBeVisible();
  });

  test('keyboard navigation works', async ({ page }) => {
    await page.goto('/');

    // Tab through navigation
    await page.keyboard.press('Tab'); // Logo
    await page.keyboard.press('Tab'); // Sessions

    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toHaveText('Sessions');

    // Activate with Enter
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL('/sessions');
  });
});
```

### Accessibility Tests

**Using axe-core:**

```typescript
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { PrimaryNavigation } from './PrimaryNavigation';

expect.extend(toHaveNoViolations);

describe('PrimaryNavigation Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<PrimaryNavigation />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has proper ARIA labels', () => {
    render(<PrimaryNavigation />);

    expect(screen.getByLabelText('Primary navigation')).toBeInTheDocument();
    expect(screen.getByLabelText(/myBlueprint/i)).toBeInTheDocument();
  });

  it('manages focus properly in mobile menu', async () => {
    const { user } = renderWithUser(<PrimaryNavigation />);

    const menuButton = screen.getByLabelText('Open navigation menu');
    await user.click(menuButton);

    // First menu item should be focusable
    await user.keyboard('{Tab}');
    expect(screen.getByText('Sessions')).toHaveFocus();
  });
});
```

---

## Performance Considerations

### Code Splitting

**Lazy load mobile menu (optional optimization):**

```typescript
import dynamic from 'next/dynamic';

const MobileNav = dynamic(() => import('./MobileNav').then(mod => mod.MobileNav), {
  ssr: false, // Only load on client
  loading: () => <div className="w-6 h-6" /> // Placeholder
});
```

### Image Optimization

**Logo should use Next.js Image component:**
- Automatic WebP conversion
- Lazy loading below the fold (but logo is above, so use `priority`)
- Responsive sizing

```typescript
<Image
  src="/images/myblueprint-logo.svg"
  alt="myBlueprint"
  width={140}
  height={32}
  priority // Logo is above the fold
/>
```

### Animation Performance

**Use GPU-accelerated properties only:**

```css
/* Good - GPU accelerated */
.mobile-menu {
  transform: translateY(0);
  opacity: 1;
  transition: transform 250ms ease-out, opacity 250ms ease-out;
}

/* Avoid - triggers layout reflow */
.mobile-menu {
  top: 64px; /* Don't animate top, use transform instead */
}
```

### Bundle Size

**Navigation bundle size target:** < 10KB gzipped
- Use tree-shaking for unused utilities
- Minimize dependencies
- Consider CSS Modules over CSS-in-JS for static styles

---

## Accessibility Checklist

### Pre-Launch Verification

- [ ] **Color Contrast:** All text meets WCAG AA (4.5:1 for normal, 3:1 for large)
- [ ] **Keyboard Navigation:** Can navigate entire menu using only keyboard
- [ ] **Focus Indicators:** Visible focus state on all interactive elements
- [ ] **Screen Reader Testing:** Tested with VoiceOver (Mac), NVDA (Windows), JAWS (Windows)
- [ ] **ARIA Labels:** All interactive elements have descriptive labels
- [ ] **Semantic HTML:** Uses `<nav>`, `<ul>`, `<li>`, proper heading structure
- [ ] **Touch Targets:** All interactive elements ≥ 44px (desktop) or 56px (mobile)
- [ ] **Reduced Motion:** Respects `prefers-reduced-motion` preference
- [ ] **Mobile Menu:** ESC key closes menu, focus management on open/close
- [ ] **Active States:** `aria-current="page"` on active navigation items
- [ ] **Skip Links:** Consider adding "Skip to main content" link

### Testing Tools

```bash
# Automated accessibility testing
npm run test:a11y

# Manual testing checklist
# 1. Navigate entire site with keyboard only (no mouse)
# 2. Test with screen reader (VoiceOver, NVDA, or JAWS)
# 3. Test with browser zoom at 200%
# 4. Test with high contrast mode enabled
# 5. Test with prefers-reduced-motion enabled
```

---

## Browser Support

**Minimum browser versions:**
- Chrome: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Edge: Last 2 versions

**Polyfills needed:**
- None (using modern Next.js with built-in polyfills)

**Graceful degradation:**
- CSS Grid → Flexbox fallback (automatic in modern browsers)
- Sticky positioning → Fixed fallback (`@supports` not needed, widely supported)
- CSS custom properties → PostCSS fallback values

---

## Deployment Checklist

### Pre-Deployment

- [ ] Run all unit tests: `npm run test`
- [ ] Run integration tests: `npm run test:e2e`
- [ ] Run accessibility audit: `npm run test:a11y`
- [ ] Verify bundle size: `npm run analyze`
- [ ] Test on real devices (iOS Safari, Android Chrome)
- [ ] Test keyboard navigation thoroughly
- [ ] Test screen reader compatibility
- [ ] Verify analytics tracking events fire correctly

### Post-Deployment

- [ ] Monitor Core Web Vitals for navigation component
- [ ] Check error logs for navigation-related issues
- [ ] Verify analytics shows navigation click events
- [ ] Collect user feedback on navigation experience
- [ ] A/B test metrics comparison (if applicable)

---

## Maintenance & Future Enhancements

### Future Considerations

**Potential Phase 2 Enhancements:**

1. **Add Primary Nav to Detail Pages:**
   - Show primary navigation alongside breadcrumbs on session/booth detail pages
   - Allows direct cross-section navigation from detail pages
   - Requires design decision on coexistence with breadcrumbs

2. **Quick Switcher (Power User Feature):**
   - Keyboard shortcut (Cmd/Ctrl + K) to open quick navigation modal
   - Fuzzy search for sessions and booths
   - Accessibility: fully keyboard navigable

3. **Navigation History:**
   - "Recently viewed" section in mobile menu
   - Quick return to last visited session or booth

4. **Search Integration:**
   - Add search icon/input to primary navigation
   - Search across both sessions and booths
   - Filter results by section

5. **Mega Menu (If Content Expands):**
   - If additional sections added in future
   - Dropdown navigation with categorized content
   - Maintains current simplicity for two-section structure

### Monitoring & Analytics

**Key metrics to track:**
```typescript
// Track these events in GA4
- navigation_click (from section, to section)
- mobile_menu_open
- mobile_menu_close
- logo_click (from section)
- cross_section_navigation_rate
- navigation_error (if any navigation fails)
```

**Dashboard queries:**
```sql
-- Cross-section navigation rate
SELECT
  COUNT(*) as total_nav_clicks,
  SUM(CASE WHEN from_section != to_section THEN 1 ELSE 0 END) as cross_section_clicks,
  (SUM(CASE WHEN from_section != to_section THEN 1 ELSE 0 END) * 100.0 / COUNT(*)) as cross_section_rate
FROM navigation_events
WHERE event_date >= '2025-12-01'
  AND event_date <= '2025-12-05';
```

---

## Support & Troubleshooting

### Common Issues

**Issue: Active state not updating after navigation**

Solution: Verify `useActiveSection` hook is correctly matching routes
```typescript
// Debug in browser console
console.log('Current pathname:', window.location.pathname);
console.log('Active section:', useActiveSection());
```

**Issue: Mobile menu not closing after navigation**

Solution: Ensure route change effect is triggering
```typescript
useEffect(() => {
  setIsOpen(false);
}, [currentSection]); // Depends on currentSection changing
```

**Issue: Focus not visible on keyboard navigation**

Solution: Check for `outline: none` overrides in global CSS
```css
/* Remove any global focus removal */
*:focus {
  outline: none; /* ❌ Remove this */
}

/* Use proper focus styles instead */
*:focus-visible {
  outline: 2px solid #0092FF;
  outline-offset: 2px;
}
```

---

## Related Documentation

- [Primary Navigation README](./README.md) - Feature overview
- [Screen States](./screen-states.md) - Complete visual specifications
- [User Journey](./user-journey.md) - User flow analysis
- [Navigation Component Spec](../../design-system/components/navigation.md) - Design system entry
- [Next.js Navigation Docs](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
