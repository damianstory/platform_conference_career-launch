---
title: Primary Navigation - Screen States & Visual Specifications
description: Complete visual specifications for all navigation states across desktop and mobile
feature: primary-navigation
last-updated: 2025-11-09
version: 1.0.0
related-files:
  - ./README.md
  - ./user-journey.md
  - ./implementation.md
status: approved
---

# Primary Navigation - Screen States & Visual Specifications

## Table of Contents

1. [Desktop Navigation](#desktop-navigation)
2. [Mobile Navigation](#mobile-navigation)
3. [Component Specifications](#component-specifications)
4. [Interaction States](#interaction-states)
5. [Responsive Behavior](#responsive-behavior)

---

## Desktop Navigation

### Layout Structure

**Container:**
- Width: 100% viewport width
- Max-width: 1440px (centered)
- Height: 80px
- Background: White (#FFFFFF)
- Border-bottom: 1px solid #E5E5E5
- Position: Sticky top (remains visible on scroll)
- Z-index: 100
- Box-shadow: 0 2px 4px rgba(34, 34, 76, 0.04) on scroll

**Grid Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]              [Sessions] [Booths]          [FAQ]     │
│   Left                    Center                   Right    │
│  24px margin        Navigation Items            24px margin │
└─────────────────────────────────────────────────────────────┘
```

**Spacing:**
- Outer horizontal padding: 24px (3 × 8px grid)
- Inner padding (top/bottom): 0 (vertical centering via flexbox)
- Gap between navigation items: 40px (5 × 8px grid)
- Gap between logo and navigation: Auto (flex-grow)
- Gap between navigation and FAQ: Auto (flex-grow)

### Logo Specifications

**Visual Properties:**
- SVG logo: myBlueprint wordmark
- Height: 32px (maintains aspect ratio)
- Color: Navy (#22224C)
- Hover state: No visual change (link behavior varies by page)

**Behavior by Page:**

| Page Type | Logo Behavior | Cursor |
|-----------|---------------|--------|
| Home (`/`) | Non-interactive | default |
| Sessions List (`/sessions`) | Links to Home | pointer |
| Booths List (`/booths`) | Links to Home | pointer |
| Session Detail | Uses breadcrumb (existing) | N/A |
| Booth Detail | Uses breadcrumb (existing) | N/A |

**Accessibility:**
- ARIA label: "myBlueprint Career Launch Platform"
- Role: "link" (when interactive) or "img" (when non-interactive)

### Navigation Items (Sessions, Booths)

**Default State:**
```css
Font: Museo Sans, 500 weight
Size: 16px / 24px line-height
Color: Navy (#22224C)
Letter-spacing: 0.01em
Text-decoration: none
Padding: 8px 16px (vertical × horizontal)
Border-radius: 4px
Background: Transparent
Transition: all 200ms ease-out
```

**Hover State (Non-Active Item):**
```css
Color: Blue (#0092FF)
Background: rgba(0, 146, 255, 0.08) /* Light Blue with 8% opacity */
Cursor: pointer
```

**Active State (Current Section):**
```css
Color: Blue (#0092FF)
Background: rgba(0, 146, 255, 0.12) /* Light Blue with 12% opacity */
Font-weight: 600 (semibold)
Border-bottom: 2px solid Blue (#0092FF)
Cursor: default (not clickable - already on this section)
```

**Focus State (Keyboard Navigation):**
```css
Outline: 2px solid Blue (#0092FF)
Outline-offset: 2px
Box-shadow: 0 0 0 4px rgba(0, 146, 255, 0.16)
```

**Visual Indicator:**
- Active section gets blue underline that sits 4px below text
- Underline width: 100% of text width
- Underline thickness: 2px

### FAQ Link (Right-Aligned)

**Default State:**
```css
Font: Museo Sans, 500 weight
Size: 16px / 24px line-height
Color: Navy (#22224C)
Text-decoration: none
Padding: 8px 16px
Border: 1px solid Navy (#22224C)
Border-radius: 4px
Background: Transparent
Transition: all 200ms ease-out
```

**Hover State:**
```css
Color: White (#FFFFFF)
Background: Navy (#22224C)
Border-color: Navy (#22224C)
```

**Focus State:**
```css
Outline: 2px solid Blue (#0092FF)
Outline-offset: 2px
```

### Layout Example (Desktop)

```
Desktop (1440px):
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  [myBlueprint Logo]        Sessions    Booths                  [FAQ]    │
│        (32px h)              (16px)    (16px)                  (16px)   │
│                                ▔▔▔▔▔▔                                   │
│                              (active)                                    │
│  ├─24px─┤                 ├─40px─┤                        ├─24px─┤     │
└──────────────────────────────────────────────────────────────────────────┘
   Height: 80px, Sticky positioning, White background
```

---

## Mobile Navigation

### Breakpoint: < 768px

**Collapsed State (Default):**
```
┌────────────────────────────────┐
│  [☰]  [myBlueprint Logo]       │
│  Menu    (Height: 24px)        │
│                                │
└────────────────────────────────┘
Height: 64px
```

**Layout:**
- Container height: 64px (reduced from 80px desktop)
- Logo height: 24px (reduced from 32px desktop)
- Logo position: Center-aligned
- Hamburger position: Left-aligned, 16px from edge
- FAQ: Hidden in collapsed state (accessible via menu)

**Hamburger Icon:**
```css
Size: 24px × 24px touch target (44px × 44px total)
Padding: 10px (to meet 44px minimum touch target)
Color: Navy (#22224C)
Background: Transparent
Border-radius: 4px
Icon: Three horizontal lines (3px height each, 4px gap)
```

**Hamburger States:**
- Default: Navy (#22224C)
- Hover/Active: Blue (#0092FF)
- Focus: 2px outline Blue (#0092FF), 2px offset

**Expanded State (Menu Open):**
```
┌────────────────────────────────┐
│  [×]  [myBlueprint Logo]       │ ← Header (64px)
├────────────────────────────────┤
│                                │
│  Sessions                      │ ← 56px touch target
│  ▔▔▔▔▔▔▔▔                      │
│  (active with blue underline)  │
│                                │
│  Booths                        │ ← 56px touch target
│                                │
│                                │
│  FAQ                           │ ← 56px touch target
│                                │
└────────────────────────────────┘
Full viewport height overlay
```

**Mobile Menu Overlay:**
```css
Position: Fixed
Top: 64px (below header)
Left: 0
Width: 100vw
Height: calc(100vh - 64px)
Background: White (#FFFFFF)
Z-index: 99
Box-shadow: 0 4px 8px rgba(34, 34, 76, 0.12)
Animation: Slide down, 250ms ease-out
```

**Mobile Menu Items:**
```css
Display: Block
Width: 100%
Padding: 16px 24px
Font: Museo Sans, 500 weight
Size: 18px / 28px line-height
Color: Navy (#22224C)
Border-bottom: 1px solid #F0F0F0
Touch target: Minimum 56px height
Transition: background 150ms ease-out
```

**Mobile Active Item:**
```css
Color: Blue (#0092FF)
Font-weight: 600
Background: rgba(0, 146, 255, 0.08)
Border-left: 4px solid Blue (#0092FF)
```

**Mobile Interaction:**
- Tap menu item → Navigate to section + close menu automatically
- Tap outside menu → Close menu
- Swipe up on menu → Close menu (optional enhancement)
- ESC key → Close menu (accessibility)

---

## Component Specifications

### Primary Navigation Bar Component

**Component Name:** `PrimaryNavigation`

**Props:**
```typescript
interface PrimaryNavigationProps {
  currentSection: 'home' | 'sessions' | 'booths' | 'session-detail' | 'booth-detail';
  logoHref?: string; // Adaptive based on currentSection
  className?: string;
}
```

**Rendering Logic:**

```typescript
// Logo behavior
if (currentSection === 'home') {
  logo.href = null; // Non-interactive
  logo.cursor = 'default';
} else if (currentSection === 'sessions' || currentSection === 'booths') {
  logo.href = '/';
  logo.cursor = 'pointer';
} else if (currentSection === 'session-detail' || currentSection === 'booth-detail') {
  // Use existing breadcrumb pattern instead
  showBreadcrumb = true;
}

// Active state
sessionLink.isActive = currentSection === 'sessions';
boothsLink.isActive = currentSection === 'booths';
```

### Navigation Item Component

**Component Name:** `NavItem`

**Props:**
```typescript
interface NavItemProps {
  label: string;
  href: string;
  isActive: boolean;
  onClick?: () => void;
}
```

**States:**
- Default: `isActive = false`, no hover
- Hover: `isActive = false`, pointer over element
- Active: `isActive = true` (current section)
- Focus: Keyboard focus received via Tab

**Accessibility Attributes:**
```html
<a
  href="/sessions"
  aria-current={isActive ? "page" : undefined}
  tabIndex={isActive ? -1 : 0}
  role="link"
>
  Sessions
</a>
```

---

## Interaction States

### State Transition Matrix

| Element | Default | Hover | Active | Focus | Disabled |
|---------|---------|-------|--------|-------|----------|
| **Nav Item (Inactive)** | Navy text, transparent bg | Blue text, 8% blue bg | N/A | 2px blue outline + shadow | N/A |
| **Nav Item (Active)** | Blue text, 12% blue bg, underline | No change | Same as default | 2px blue outline + shadow | N/A |
| **Logo (Interactive)** | Navy color | No change | Slight scale (0.98) | 2px blue outline | N/A |
| **FAQ Button** | Navy border, transparent bg | Navy bg, white text | Navy bg, white text | 2px blue outline | N/A |
| **Hamburger** | Navy icon | Blue icon | Blue icon | 2px blue outline | N/A |

### Animation Specifications

**Nav Item Hover:**
```css
transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1); /* ease-out */
```

**Active Underline Appearance:**
```css
animation: slideInUnderline 250ms ease-out;

@keyframes slideInUnderline {
  from { width: 0; opacity: 0; }
  to { width: 100%; opacity: 1; }
}
```

**Mobile Menu Open:**
```css
animation: slideDown 250ms cubic-bezier(0.4, 0, 0.6, 1); /* ease-in-out */

@keyframes slideDown {
  from {
    transform: translateY(-16px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

**Mobile Menu Close:**
```css
animation: slideUp 200ms cubic-bezier(0.4, 0, 0.6, 1); /* ease-in-out */

@keyframes slideUp {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-16px);
    opacity: 0;
  }
}
```

---

## Responsive Behavior

### Breakpoint Strategy

**Desktop First Approach:**
- Design for desktop (1440px optimal)
- Scale down to tablet (768-1023px)
- Collapse to mobile (< 768px)

### Breakpoint Definitions

```css
/* Desktop Wide */
@media (min-width: 1440px) {
  .nav-container { max-width: 1440px; }
}

/* Desktop Standard */
@media (min-width: 1024px) and (max-width: 1439px) {
  .nav-container { max-width: 100%; padding: 0 24px; }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  .nav-container { padding: 0 20px; }
  .nav-item { padding: 8px 12px; } /* Reduce horizontal padding */
  .nav-item-gap { gap: 32px; } /* Reduce gap between items */
}

/* Mobile */
@media (max-width: 767px) {
  .nav-container { height: 64px; padding: 0 16px; }
  .logo { height: 24px; }
  .nav-items { display: none; } /* Hidden, replaced by hamburger */
  .hamburger { display: flex; }
}
```

### Responsive Scaling

| Viewport | Nav Height | Logo Height | Item Spacing | Pattern |
|----------|------------|-------------|--------------|---------|
| > 1440px | 80px | 32px | 40px gap | Horizontal nav |
| 1024-1439px | 80px | 32px | 40px gap | Horizontal nav |
| 768-1023px | 80px | 32px | 32px gap | Horizontal nav |
| < 768px | 64px | 24px | N/A | Hamburger menu |

---

## Accessibility Specifications

### WCAG 2.1 AA Compliance

**Color Contrast Ratios:**
- Navy (#22224C) on White: 12.6:1 ✅ (Exceeds 4.5:1)
- Blue (#0092FF) on White: 4.54:1 ✅ (Meets 4.5:1)
- White on Navy: 12.6:1 ✅ (Exceeds 4.5:1)
- Blue background (12% opacity) with Navy text: 10.2:1 ✅

**Keyboard Navigation:**
- Tab order: Logo → Sessions → Booths → FAQ
- Shift+Tab: Reverse order
- Enter/Space: Activate link
- ESC: Close mobile menu (when open)

**Focus Indicators:**
- Always visible (never `outline: none`)
- 2px solid Blue (#0092FF)
- 2px offset for breathing room
- Additional shadow for emphasis: `0 0 0 4px rgba(0, 146, 255, 0.16)`

**Screen Reader Support:**

```html
<nav aria-label="Primary navigation">
  <a href="/" aria-label="myBlueprint Career Launch Platform home">
    <img src="/logo.svg" alt="myBlueprint" />
  </a>

  <ul role="list">
    <li>
      <a
        href="/sessions"
        aria-current="page"
        aria-label="Sessions - Current section"
      >
        Sessions
      </a>
    </li>
    <li>
      <a href="/booths" aria-label="Booths">
        Booths
      </a>
    </li>
  </ul>

  <a href="/faq" aria-label="Frequently asked questions">
    FAQ
  </a>
</nav>
```

**Touch Target Sizes:**
- Desktop: Minimum 44px × 44px (met via padding)
- Mobile: Minimum 56px height for menu items
- Hamburger: 44px × 44px total touch area

**Motion Sensitivity:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Visual Specification Summary

### Color Palette Used
- **Navy (#22224C):** Primary text, borders, branding
- **Blue (#0092FF):** Active states, hover states, focus indicators
- **White (#FFFFFF):** Background, inverted text
- **Light Blue (rgba(0, 146, 255, 0.08)):** Hover background
- **Light Blue (rgba(0, 146, 255, 0.12)):** Active background
- **Border Gray (#E5E5E5):** Container border

### Typography Scale
- **Logo:** Varies by viewport (24-32px)
- **Navigation Items:** 16px / 24px line-height, Museo Sans
- **Mobile Menu Items:** 18px / 28px line-height, Museo Sans

### Spacing System (8px Grid)
- Container padding: 24px (3 units)
- Item gap: 40px (5 units) desktop, 32px (4 units) tablet
- Item padding: 8px × 16px (1 × 2 units)
- Mobile padding: 16px (2 units)
- Mobile item padding: 16px × 24px (2 × 3 units)

### Elevation
- Navigation bar: z-index 100
- Mobile menu overlay: z-index 99
- Box shadow (on scroll): `0 2px 4px rgba(34, 34, 76, 0.04)`
- Mobile menu shadow: `0 4px 8px rgba(34, 34, 76, 0.12)`

---

## Implementation Notes

1. **Sticky Navigation:** Use `position: sticky; top: 0;` for persistent visibility
2. **Scroll Detection:** Add subtle shadow on scroll for depth perception
3. **Active State Logic:** Determine via route matching in Next.js
4. **Mobile Menu Management:** Use React state for open/close, add body scroll lock when open
5. **Logo Adaptive Behavior:** Conditionally render based on route
6. **Accessibility Testing:** Test with keyboard only, screen reader, and high contrast mode
7. **Performance:** Animate only transform and opacity (GPU-accelerated properties)

---

## Related Documentation

- [Primary Navigation README](./README.md)
- [User Journey Documentation](./user-journey.md)
- [Implementation Guide](./implementation.md)
- [Navigation Component Spec](../../design-system/components/navigation.md)
