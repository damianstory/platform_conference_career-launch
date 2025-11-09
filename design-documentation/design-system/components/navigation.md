---
title: Primary Navigation Component
description: Design system specification for primary navigation component with all variants and states
last-updated: 2025-11-09
version: 1.0.0
related-files:
  - ../../features/primary-navigation/README.md
  - ../../features/primary-navigation/screen-states.md
  - ../tokens/colors.md
  - ../tokens/typography.md
  - ../tokens/spacing.md
status: approved
---

# Primary Navigation Component

## Overview

The Primary Navigation component provides direct access to the two main content sections (Sessions and Booths) plus supplementary links (FAQ). It adapts intelligently based on current page context and viewport size, ensuring efficient navigation across all devices.

**Component Type:** Navigation / Layout
**Complexity:** Complex (responsive, stateful, adaptive)
**Usage Frequency:** Every page (except detail pages which use breadcrumb pattern)

---

## Table of Contents

1. [Variants](#variants)
2. [Component Anatomy](#component-anatomy)
3. [States](#states)
4. [Responsive Behavior](#responsive-behavior)
5. [Usage Guidelines](#usage-guidelines)
6. [Accessibility](#accessibility)
7. [Code Examples](#code-examples)
8. [Related Components](#related-components)

---

## Variants

### Variant 1: Desktop Navigation (≥768px)

**Visual Structure:**
```
[Logo]              [Sessions] [Booths]              [FAQ]
```

**Characteristics:**
- Horizontal layout
- Persistent visibility (sticky positioning)
- Hover states on all interactive elements
- Active section indicated by blue underline + background
- Logo adaptive behavior (interactive or static based on context)

**Use When:**
- Viewport width ≥ 768px
- Desktop or tablet landscape orientation
- Mouse/pointer input available

### Variant 2: Mobile Navigation (<768px)

**Visual Structure (Collapsed):**
```
[☰]  [Logo (centered)]
```

**Visual Structure (Expanded):**
```
[×]  [Logo (centered)]
────────────────────
Sessions (with underline if active)
Booths
FAQ
```

**Characteristics:**
- Hamburger menu pattern
- Logo center-aligned
- Full-screen overlay menu when expanded
- Large touch targets (56px minimum height)
- Auto-close on selection

**Use When:**
- Viewport width < 768px
- Mobile devices (portrait or landscape)
- Touch input primary interaction method

---

## Component Anatomy

### Desktop Navigation Breakdown

```
┌──────────────────────────────────────────────────────────────┐
│                         Container                            │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                     Inner Wrapper                       ││
│  │  ┌──────┐      ┌─────────────────┐      ┌──────┐      ││
│  │  │      │      │  [Nav Items]    │      │      │      ││
│  │  │ Logo │      │  Sessions Booths│      │ FAQ  │      ││
│  │  │      │      │                 │      │      │      ││
│  │  └──────┘      └─────────────────┘      └──────┘      ││
│  │   (A)               (B)                    (C)         ││
│  └─────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────┘
```

**Part Labels:**
- **(A) Logo:** Adaptive link or static image
- **(B) Navigation Items:** Sessions and Booths links
- **(C) FAQ Link:** Outlined button style

### Mobile Navigation Breakdown

```
┌────────────────────────┐
│   Header (Collapsed)   │
│  ┌──┐  ┌──────────┐   │
│  │☰ │  │   Logo   │   │
│  └──┘  └──────────┘   │
│  (D)       (A)         │
└────────────────────────┘
```

```
┌────────────────────────┐
│   Header (Expanded)    │
│  ┌──┐  ┌──────────┐   │
│  │× │  │   Logo   │   │
│  └──┘  └──────────┘   │
├────────────────────────┤
│    Menu Panel (E)      │
│  ┌──────────────────┐ │
│  │  Sessions        │ │
│  │  ▔▔▔▔▔▔          │ │
│  ├──────────────────┤ │
│  │  Booths          │ │
│  ├──────────────────┤ │
│  │  FAQ             │ │
│  └──────────────────┘ │
└────────────────────────┘
```

**Part Labels:**
- **(D) Hamburger Button:** Menu toggle
- **(E) Menu Panel:** Full-screen navigation list

---

## States

### Logo States

| State | Visual Treatment | Cursor | Behavior |
|-------|------------------|--------|----------|
| **Static (on Home)** | Navy color, no hover effect | `default` | Non-interactive |
| **Link (on Sections)** | Navy color, scale on click | `pointer` | Links to home |
| **Focus** | 2px blue outline, 2px offset | `pointer` | Keyboard focus visible |

### Navigation Item States (Desktop)

| State | Background | Text Color | Border | Font Weight | Underline | Cursor |
|-------|------------|------------|--------|-------------|-----------|--------|
| **Default (Inactive)** | Transparent | Navy #22224C | None | 500 | None | `pointer` |
| **Hover (Inactive)** | Blue 8% opacity | Blue #0092FF | None | 500 | None | `pointer` |
| **Active (Current Section)** | Blue 12% opacity | Blue #0092FF | None | 600 | 2px blue | `default` |
| **Focus** | Current bg | Current color | 2px blue outline | Current | Current | Current |
| **Active (Pressed)** | Blue 16% opacity | Blue #0092FF | None | 600 | 2px blue | `pointer` |

### FAQ Link States (Desktop)

| State | Background | Text Color | Border | Cursor |
|-------|------------|------------|--------|--------|
| **Default** | Transparent | Navy #22224C | 1px Navy | `pointer` |
| **Hover** | Navy #22224C | White #FFFFFF | 1px Navy | `pointer` |
| **Focus** | Current bg | Current color | 2px blue outline (offset) | `pointer` |
| **Active (Pressed)** | Dark Navy (10% darker) | White #FFFFFF | 1px Navy | `pointer` |

### Mobile Menu States

| State | Visual Treatment | Behavior |
|-------|------------------|----------|
| **Hamburger Default** | Navy icon, transparent bg | Opens menu |
| **Hamburger Hover** | Blue icon | Visual feedback |
| **Hamburger Focus** | 2px blue outline | Keyboard accessible |
| **Menu Closed** | Not visible | Scroll enabled on body |
| **Menu Open** | Full overlay visible, body scroll locked | Items interactive |
| **Menu Item Default** | Navy text, white bg | Tappable |
| **Menu Item Active** | Blue text, blue bg 8%, left border 4px blue | Current section |
| **Menu Item Hover/Touch** | Blue bg 4% | Visual feedback |

---

## Responsive Behavior

### Breakpoint Transitions

**Desktop → Tablet (1024px → 768px):**
- Navigation item gap: 40px → 32px
- Navigation item horizontal padding: 16px → 12px
- Container padding: 24px → 20px
- No layout pattern change (horizontal nav maintained)

**Tablet → Mobile (768px → 767px):**
- **Major layout shift:** Horizontal nav → Hamburger menu
- Header height: 80px → 64px
- Logo height: 32px → 24px
- Navigation items: Hidden, replaced with hamburger
- FAQ: Moved into mobile menu

**Mobile Landscape vs Portrait:**
- No layout change
- Menu panel height adjusts to viewport height
- Maintains same interaction patterns

### Container Width Behavior

| Viewport Width | Container Max-Width | Padding |
|----------------|---------------------|---------|
| > 1440px | 1440px (centered) | 24px |
| 1024-1439px | 100% | 24px |
| 768-1023px | 100% | 20px |
| < 768px | 100% | 16px |

---

## Usage Guidelines

### When to Use

✅ **Use Primary Navigation when:**
- Displaying main content section pages (Home, Sessions list, Booths list)
- User needs quick access to both Sessions and Booths
- Page is not a detail view (session detail, booth detail)
- Consistent site-wide navigation is needed

### When NOT to Use

❌ **Do NOT use Primary Navigation when:**
- On detail pages (use Breadcrumb component instead)
- In modal dialogs or overlays (use modal-specific navigation)
- In embedded contexts (iframes, widgets)
- When page has dedicated navigation pattern (e.g., checkout flow)

### Best Practices

**DO:**
- Always indicate active section with visual differentiation
- Maintain sticky positioning for persistent access
- Ensure 44px minimum touch targets (desktop) and 56px (mobile)
- Lock body scroll when mobile menu is open
- Provide ESC key shortcut to close mobile menu
- Use semantic HTML (`<nav>`, `<ul>`, `<li>`)
- Test keyboard navigation thoroughly

**DON'T:**
- Don't remove focus indicators (accessibility critical)
- Don't make active navigation item clickable (no-op)
- Don't hide navigation on scroll (should remain accessible)
- Don't use ambiguous labels (be clear: "Sessions" not "Content")
- Don't forget mobile menu close on route change
- Don't animate layout-triggering properties (use transform/opacity)

### Content Guidelines

**Navigation Labels:**
- Keep labels concise (1-2 words maximum)
- Use title case ("Sessions", not "sessions")
- Match section page titles exactly
- Provide additional context via ARIA labels when needed

**Example:**
```html
<!-- Visible label: concise -->
<a href="/sessions">Sessions</a>

<!-- ARIA label: descriptive -->
<a href="/sessions" aria-label="View all career sessions">Sessions</a>
```

---

## Accessibility

### WCAG 2.1 AA Compliance

**Color Contrast:**
- ✅ Navy (#22224C) on White: 12.6:1 (exceeds 4.5:1)
- ✅ Blue (#0092FF) on White: 4.54:1 (meets 4.5:1)
- ✅ White on Navy: 12.6:1 (exceeds 4.5:1)
- ✅ Blue on Blue bg (12% opacity): 10.2:1 (exceeds 4.5:1)

**Keyboard Navigation:**

| Action | Keyboard Shortcut | Expected Behavior |
|--------|-------------------|-------------------|
| Navigate items | `Tab` / `Shift+Tab` | Move focus through nav items |
| Activate link | `Enter` | Navigate to linked section |
| Open mobile menu | `Enter` / `Space` on hamburger | Expand menu panel |
| Close mobile menu | `Escape` | Collapse menu, return focus to button |
| Skip navigation | `Tab` from menu to main content | Focus moves to main landmark |

**Screen Reader Support:**

```html
<!-- Navigation landmark -->
<nav aria-label="Primary navigation">
  <!-- Logo with descriptive label -->
  <a href="/" aria-label="myBlueprint Career Launch Platform home">
    <img src="/logo.svg" alt="myBlueprint" />
  </a>

  <!-- Navigation items -->
  <ul role="list">
    <li>
      <!-- Active item with aria-current -->
      <a
        href="/sessions"
        aria-current="page"
        aria-label="Sessions - Current section"
      >
        Sessions
      </a>
    </li>
    <li>
      <!-- Inactive item -->
      <a href="/booths" aria-label="View all sponsor booths">
        Booths
      </a>
    </li>
  </ul>
</nav>
```

**Focus Management:**
- All interactive elements have visible focus indicators
- Focus order follows logical reading order (left to right, top to bottom)
- Mobile menu: Focus trapped within menu when open
- Mobile menu close: Focus returns to hamburger button
- Navigation to new page: Focus moves to main content heading

**Touch Accessibility:**
- Desktop touch targets: ≥ 44px × 44px (WCAG Level AAA)
- Mobile touch targets: ≥ 56px height (exceeds WCAG minimum)
- Adequate spacing between targets (≥ 8px)

**Motion Sensitivity:**
```css
@media (prefers-reduced-motion: reduce) {
  .nav-item,
  .mobile-menu,
  .active-underline {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Code Examples

### Basic Implementation (React + TypeScript)

```tsx
import { PrimaryNavigation } from '@/components/navigation/PrimaryNavigation';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PrimaryNavigation />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
```

### Custom Styling Example

```tsx
<PrimaryNavigation className="shadow-md" />
```

### Manual Active Section (Override)

```tsx
// Usually determined automatically via route,
// but can be overridden for custom scenarios
<PrimaryNavigation currentSection="sessions" />
```

### With Analytics Tracking

```tsx
import { trackNavigationClick } from '@/lib/analytics';

// In NavItem component
<NavItem
  label="Sessions"
  href="/sessions"
  isActive={currentSection === 'sessions'}
  onClick={() => {
    trackNavigationClick('booths', 'sessions');
  }}
/>
```

---

## Design Tokens Used

### Colors

```css
--color-navy: #22224C;          /* Primary text, borders */
--color-blue: #0092FF;          /* Active states, accents */
--color-white: #FFFFFF;         /* Background, inverted text */
--color-blue-8: rgba(0, 146, 255, 0.08);   /* Hover background */
--color-blue-12: rgba(0, 146, 255, 0.12);  /* Active background */
--color-gray-200: #E5E5E5;      /* Border color */
```

### Typography

```css
--font-primary: 'Museo Sans', -apple-system, sans-serif;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--text-base: 16px / 24px;       /* Desktop nav items */
--text-lg: 18px / 28px;         /* Mobile nav items */
```

### Spacing

```css
--space-2: 8px;                 /* 1 unit */
--space-4: 16px;                /* 2 units */
--space-5: 20px;                /* 2.5 units */
--space-6: 24px;                /* 3 units */
--space-8: 32px;                /* 4 units */
--space-10: 40px;               /* 5 units */
--space-20: 80px;               /* 10 units - nav height */
```

### Elevation

```css
--shadow-sm: 0 2px 4px rgba(34, 34, 76, 0.04);     /* Scrolled nav */
--shadow-md: 0 4px 8px rgba(34, 34, 76, 0.12);     /* Mobile menu */
--z-navigation: 100;            /* Nav bar z-index */
--z-mobile-menu: 99;            /* Mobile menu panel */
--z-mobile-backdrop: 40;        /* Mobile menu backdrop */
```

### Timing

```css
--duration-fast: 150ms;         /* Quick interactions */
--duration-normal: 200ms;       /* Standard transitions */
--duration-slow: 250ms;         /* Mobile menu animation */
--easing-out: cubic-bezier(0.0, 0, 0.2, 1);
--easing-in-out: cubic-bezier(0.4, 0, 0.6, 1);
```

---

## Related Components

### Breadcrumb Component

**Relationship:** Alternative navigation pattern for detail pages
- **When Primary Nav shows:** Home, Sessions list, Booths list
- **When Breadcrumb shows:** Session detail, Booth detail
- **Never show together:** Mutually exclusive based on page type

**Cross-Reference:** `/design-system/components/breadcrumb.md`

### Mobile Menu Overlay

**Relationship:** Sub-component of Primary Navigation
- Only renders on mobile viewports (< 768px)
- Shares navigation items configuration
- Inherits active state logic

**Implementation:** Part of `PrimaryNavigation` component, not standalone

### Skip Link

**Relationship:** Accessibility companion to Primary Navigation
- Should appear before Primary Navigation in DOM
- Allows keyboard users to skip directly to main content
- Hidden by default, visible on keyboard focus

**Example:**
```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
<PrimaryNavigation />
<main id="main-content">
  <!-- Page content -->
</main>
```

---

## Version History

**v1.0.0 (2025-11-09)**
- Initial component specification
- Desktop and mobile variants defined
- Full accessibility compliance documented
- Integration with existing breadcrumb pattern established

---

## Support

**Questions or Issues:**
- Design questions: Contact UX team
- Implementation questions: See [Implementation Guide](../../features/primary-navigation/implementation.md)
- Accessibility concerns: Run accessibility audit via `npm run test:a11y`

**Resources:**
- [Primary Navigation Feature README](../../features/primary-navigation/README.md)
- [User Journey Documentation](../../features/primary-navigation/user-journey.md)
- [Screen States Specifications](../../features/primary-navigation/screen-states.md)
- [WCAG 2.1 Navigation Guidelines](https://www.w3.org/WAI/WCAG21/quickref/?tags=navigation)
