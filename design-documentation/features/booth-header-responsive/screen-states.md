---
title: BoothHeader Screen States Specification
description: Comprehensive visual specifications for all responsive states of the BoothHeader component
feature: booth-header-responsive-fix
last-updated: 2025-11-09
version: 1.0
related-files:
  - ./README.md
  - ./implementation.md
  - ../../design-system/components/buttons.md
status: approved
---

# BoothHeader Screen States Specification

## Overview

This document provides pixel-perfect specifications for every responsive state of the BoothHeader component across all supported breakpoints. Each state includes layout structure, spacing, typography, color application, and interaction patterns.

## Table of Contents

1. [Mobile State (0-767px)](#mobile-state-0-767px)
2. [Tablet State (768-1023px)](#tablet-state-768-1023px)
3. [Desktop State (1024-1439px)](#desktop-state-1024-1439px)
4. [Wide Desktop State (1440px+)](#wide-desktop-state-1440px)
5. [Interaction States](#interaction-states)
6. [Transition Specifications](#transition-specifications)

---

## Mobile State (0-767px)

### Layout Structure

**Container:**
- Display: `flex flex-col`
- Direction: Vertical stacking
- Gap: `24px` (gap-6) between major sections
- Padding: `24px` all sides (p-6)
- Background: White
- Border: 2px solid #0092FF (border-primary-blue)
- Border Radius: 12px (rounded-xl)
- Shadow: `0 1px 2px rgba(34, 34, 76, 0.05)` (shadow-sm)

**Layout Order (Top to Bottom):**
1. Logo section
2. Company info section (name + tagline)
3. CTA buttons section

### Logo Section

**Specifications:**
- Container: `flex-shrink-0`
- Dimensions:
  - Mobile (0-639px): `80px × 80px` (w-20 h-20)
  - Small Mobile (640-767px): `96px × 96px` (w-24 h-24)
- Background: White
- Border Radius: 8px (rounded-lg)
- Shadow: `0 4px 6px rgba(34, 34, 76, 0.1)` (shadow-md)
- Image: Object-fit contain, full width/height

**Fallback (No Logo):**
- Display: First 2 characters of company name in uppercase
- Font: Bold, 24px
- Color: #AAB7CB (neutral-3)

### Company Info Section

**Container:**
- Display: `flex-grow space-y-2`
- Spacing: 8px gap between name and tagline (space-y-2)

**Company Name (H1):**
- **Mobile (0-639px):**
  - Font Size: `28px`
  - Line Height: `36px` (tight)
  - Font Weight: 900 (font-black)
  - Color: #22224C (brand-navy)
  - Letter Spacing: -0.02em (tracking-tight)

- **Small Mobile (640-767px):**
  - Font Size: `32px`
  - Line Height: `40px` (tight)
  - Font Weight: 900 (font-black)
  - Color: #22224C (brand-navy)
  - Letter Spacing: -0.02em (tracking-tight)

**Tagline:**
- **Mobile (0-639px):**
  - Font Size: `16px`
  - Line Height: `24px`
  - Font Weight: 400 (normal)
  - Color: #485163 (neutral-5)

- **Small Mobile (640-767px):**
  - Font Size: `18px`
  - Line Height: `28px`
  - Font Weight: 400 (normal)
  - Color: #485163 (neutral-5)

### CTA Buttons Section

**Container:**
- Display: `flex flex-col`
- Direction: Vertical stacking
- Gap: `12px` between buttons (gap-3)
- Width: `100%` (w-full)

**Individual Button Specifications:**

**Primary Button (Default State):**
- Display: `inline-flex items-center justify-center`
- Width: `100%` (w-full)
- Height: `56px` (h-[56px])
- Padding: `16px 16px` (px-4 on mobile)
- Background: #0092FF (bg-primary-blue)
- Color: White
- Border: None
- Border Radius: 8px (rounded-lg)
- Font Size: 16px (text-body-2)
- Font Weight: 600 (font-semibold)
- Shadow: `0 4px 6px rgba(34, 34, 76, 0.1)` (shadow-md)
- Cursor: pointer

**Button Content Layout:**
- Display: `flex items-center justify-center gap-2`
- Text: `truncate` (prevents overflow)
- Icon: ExternalLink, 12px × 12px (w-3 h-3)
- Icon Position: Right side
- Icon: `flex-shrink-0` (prevents icon from shrinking)

**Secondary Button (Default State):**
- All specifications same as Primary, except:
- Background: White (bg-white)
- Color: #0092FF (text-primary-blue)
- Border: 2px solid #0092FF (border-2 border-primary-blue)

### Spacing Breakdown (Mobile)

```
┌─────────────────────────────────┐
│  Padding: 24px                  │  ← Container padding
│  ┌──────────────────────────┐   │
│  │  Logo (80px × 80px)      │   │
│  └──────────────────────────┘   │
│                                  │
│  ↓ 24px gap                      │
│                                  │
│  ┌──────────────────────────┐   │
│  │  Company Name (28px)     │   │
│  │  ↓ 8px gap               │   │
│  │  Tagline (16px)          │   │
│  └──────────────────────────┘   │
│                                  │
│  ↓ 24px gap                      │
│                                  │
│  ┌──────────────────────────┐   │
│  │  Primary Button (56px)   │   │
│  └──────────────────────────┘   │
│  ↓ 12px gap                      │
│  ┌──────────────────────────┐   │
│  │  Secondary Button (56px) │   │
│  └──────────────────────────┘   │
│                                  │
│  Padding: 24px                  │
└─────────────────────────────────┘
```

---

## Tablet State (768-1023px)

### Layout Structure

**Container:**
- Display: `flex flex-row` (CHANGES at md: breakpoint)
- Direction: Horizontal layout
- Alignment: `items-center` (vertically centered)
- Gap: `24px` between sections (gap-6)
- Padding: `24px` all sides (p-6)
- Background: White
- Border: 2px solid #0092FF
- Border Radius: 12px
- Shadow: `0 1px 2px rgba(34, 34, 76, 0.05)`

**Layout Order (Left to Right):**
1. Logo section (fixed width)
2. Company info section (flex-grow)
3. CTA buttons section (auto width)

### Logo Section

**Specifications:**
- Container: `flex-shrink-0`
- Dimensions: `96px × 96px` (w-24 h-24)
- Background: White
- Border Radius: 8px
- Shadow: `0 4px 6px rgba(34, 34, 76, 0.1)`
- Image: Object-fit contain

### Company Info Section

**Container:**
- Display: `flex-grow space-y-2`
- Flex: `1` (takes available space)
- Max Width: None (allows natural expansion)

**Company Name (H1):**
- Font Size: `40px` (full desktop size at md:)
- Line Height: `48px` (tight)
- Font Weight: 900 (font-black)
- Color: #22224C (brand-navy)
- Letter Spacing: -0.02em (tracking-tight)

**Tagline:**
- Font Size: `20px` (full size at md:)
- Line Height: `30px`
- Font Weight: 400 (normal)
- Color: #485163 (neutral-5)

### CTA Buttons Section

**Container Layout (768-900px - Constrained Space):**
- Display: `flex flex-col` (may stack if horizontal space tight)
- Direction: Vertical stacking
- Gap: `12px` between buttons (gap-3)
- Width: `auto` (md:w-auto)

**Container Layout (900-1023px - Adequate Space):**
- Display: `flex flex-row` (horizontal if space permits)
- Direction: Horizontal layout
- Gap: `12px` between buttons (gap-3)
- Width: `auto`

**Individual Button Specifications:**

**Primary Button:**
- Width:
  - Minimum: `180px` (md:min-w-[180px])
  - Maximum: `240px` (md:max-w-[240px])
  - Actual: `auto` (md:w-auto) - flexible within constraints
- Height: `56px` (unchanged)
- Padding: `24px horizontal` (px-6 on tablet/desktop)
- All other specs same as mobile

**Secondary Button:**
- Same width constraints as Primary
- All other specs same as mobile

### Spacing Breakdown (Tablet - Horizontal)

```
┌──────────────────────────────────────────────────────────────────┐
│  Padding: 24px                                                   │
│  ┌────┐     ┌──────────────────┐     ┌─────────────────────┐   │
│  │Logo│ 24px│  Company Name    │ 24px│   Primary Button    │   │
│  │96px│ gap │  Tagline         │ gap │   Secondary Button  │   │
│  │×96 │     │                  │     │                     │   │
│  └────┘     └──────────────────┘     └─────────────────────┘   │
│                                                                  │
│  Padding: 24px                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## Desktop State (1024-1439px)

### Layout Structure

**Container:**
- Display: `flex flex-row`
- Direction: Horizontal layout (locked at this breakpoint)
- Alignment: `items-center`
- Gap: `24px` between sections
- Padding: `24px` all sides
- All other container specs same as Tablet

**Layout Behavior:**
- Logo: Fixed 96px × 96px
- Company Info: Flex-grow with comfortable expansion
- Buttons: **Always horizontal** at this breakpoint (sufficient space guaranteed)

### CTA Buttons Section

**Container:**
- Display: `flex flex-row` (LOCKED horizontal)
- Direction: Horizontal layout
- Gap: `12px` between buttons
- Width: `auto`

**Button Specifications:**
- Width:
  - Minimum: `220px` (lg:min-w-[220px])
  - Maximum: `280px` (comfortable upper limit)
  - Actual: `auto` within constraints
- Height: `56px`
- Padding: `24px horizontal` (px-6)
- All other specs same as previous states

**Visual Hierarchy:**
- Buttons have adequate breathing room
- Clear separation between Primary and Secondary actions
- Balanced proportions relative to company name/tagline

### Spacing Breakdown (Desktop)

```
┌────────────────────────────────────────────────────────────────────────┐
│  Padding: 24px                                                         │
│  ┌────┐       ┌──────────────────────┐       ┌──────────────────┐    │
│  │Logo│  24px │  Company Name (40px) │  24px │  Primary (220px) │    │
│  │96px│  gap  │  ↓ 8px gap           │  gap  │  ↓ 0px (inline)  │    │
│  │×96 │       │  Tagline (20px)      │       │  Secondary(220px)│    │
│  └────┘       └──────────────────────┘       └──────────────────┘    │
│                                                                        │
│  Padding: 24px                                                         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Wide Desktop State (1440px+)

### Layout Structure

Same as Desktop State with enhanced spacing and proportions:

- Container max-width may be constrained by parent
- Buttons maintain 220px minimum but can grow to 280px comfortably
- Increased breathing room between all sections
- Company name and tagline have optimal line lengths

**Optimal Proportions:**
- Logo: ~8% of total width
- Company Info: ~55% of total width
- Buttons: ~35% of total width
- Gaps: ~2% total

---

## Interaction States

### Button Hover States

**Primary Button - Hover:**
- Background: #22224C (bg-brand-navy) - transitions from blue to navy
- Transform: `translateY(-2px)` (hover:-translate-y-0.5)
- Shadow: Enhanced elevation (slightly stronger shadow)
- Transition: `all 200ms ease-out`
- Cursor: pointer

**Secondary Button - Hover:**
- Background: #0092FF (bg-primary-blue) - fills with blue
- Color: White (text-white) - inverts from blue to white
- Border: Remains 2px solid #0092FF
- Transform: `translateY(-2px)`
- Shadow: Enhanced elevation
- Transition: `all 200ms ease-out`
- Cursor: pointer

### Button Focus States

**Focus-Visible (Keyboard Navigation):**
- Outline: 2px solid #3B82F6 (blue-500)
- Outline Offset: 2px
- Outline Style: Solid
- Background: Maintains default or hover state
- No transform on focus alone (only on hover)

**Focus-Not-Visible (Mouse Click):**
- Outline: None
- Prevents double-outline on mouse interaction

### Button Active States

**Primary Button - Active (Pressed):**
- Background: Darker shade of navy (#1a1a3a)
- Transform: `translateY(0)` (returns to original position)
- Shadow: Reduced (appears "pressed down")
- Transition: Immediate (no delay)

**Secondary Button - Active (Pressed):**
- Background: Darker blue (#0077CC)
- Transform: `translateY(0)`
- Shadow: Reduced
- Transition: Immediate

### Button Disabled States

**Visual Treatment:**
- Opacity: 0.5
- Cursor: `not-allowed`
- Background: Greyed out (neutral-2 for primary, neutral-1 for secondary)
- Color: neutral-4
- Border: 2px solid neutral-3 (secondary button)
- No hover effects
- No transform animations
- ARIA: `aria-disabled="true"`

---

## Transition Specifications

### Layout Transitions (Responsive)

**Breakpoint Transition (767px → 768px):**
- Property: `flex-direction`
- Duration: 300ms
- Easing: `ease-in-out`
- Affected elements: Main container, button container
- No layout shift: Elements reflow smoothly without jumping

**Smooth Reflow Strategy:**
```css
transition-property: flex-direction, gap, padding, width;
transition-duration: 300ms;
transition-timing-function: ease-in-out;
```

### Button Transitions

**Hover/Active Transitions:**
```css
transition-property: background-color, color, transform, box-shadow;
transition-duration: 200ms;
transition-timing-function: ease-out;
```

**Focus Transitions:**
```css
transition-property: outline, outline-offset;
transition-duration: 150ms;
transition-timing-function: ease-out;
```

### Typography Transitions

**Font Size Scaling (Responsive):**
- Property: `font-size`, `line-height`
- Duration: 200ms
- Easing: `ease-in-out`
- Prevents jarring size jumps during resize

### Reduced Motion Compliance

**When `prefers-reduced-motion: reduce`:**
```css
@media (prefers-reduced-motion: reduce) {
  .booth-header * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- All transitions effectively disabled
- Layout changes instant
- Focus indicators still visible (no motion)
- Maintains full functionality without animation

---

## Edge Cases & Special States

### Very Long Company Names

**Behavior:**
- Company name wraps naturally (no truncation)
- Line height maintains readability
- Container expands vertically to accommodate
- No horizontal overflow

**Example (Mobile):**
```
Long Company Name That
Extends to Multiple Lines
```

### Very Long Taglines

**Behavior:**
- Tagline wraps to multiple lines
- Max recommended: 2 lines for readability
- Line height: 1.5× for comfortable reading
- Container expands as needed

### Missing Logo

**Fallback Display:**
- Shows first 2 characters of company name
- All caps, centered
- Neutral-3 color (#AAB7CB)
- Same container dimensions and styling

### Single CTA Button

**Layout Adjustment:**
- If only one button provided, maintains same width constraints
- No gap calculation needed
- Centers within button section on desktop
- Full width on mobile

### External Link Icons

**Specifications:**
- Icon: Lucide React `ExternalLink`
- Size: 12px × 12px (w-3 h-3)
- Color: Inherits from button text color
- Position: Right side of text
- Spacing: 8px gap from text (gap-2)
- ARIA: `aria-hidden="true"` (decorative)

---

## Accessibility State Indicators

### Keyboard Focus

**Visual Indicators:**
- 2px solid blue outline
- 2px offset from element edge
- Visible in all states (never removed)
- Contrasts with all background colors
- Minimum 3:1 contrast ratio with adjacent colors

### Screen Reader Announcements

**Button ARIA Labels:**
```html
aria-label="Visit [Company Name] Career Resources (opens in new tab)"
```

**External Link Context:**
- External link icon paired with `rel="noopener noreferrer"`
- ARIA label provides full context
- Screen reader announces destination and new tab behavior

### Touch Target Size

**All Interactive Elements:**
- Minimum: 44px × 44px (WCAG AAA)
- Current: 56px height (exceeds requirement by 27%)
- Width: Full width on mobile (generous tap area)
- Spacing: Minimum 8px between targets

---

## Design Token Reference

### Colors Used

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-navy` | #22224C | Company name, hover states |
| `primary-blue` | #0092FF | Primary button, borders, secondary text |
| `neutral-5` | #485163 | Tagline text |
| `neutral-3` | #AAB7CB | Logo fallback text |
| `white` | #FFFFFF | Button text, backgrounds |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `gap-2` | 8px | Icon-text spacing, internal gaps |
| `gap-3` | 12px | Button vertical spacing |
| `gap-6` | 24px | Major section spacing |
| `p-4` | 16px | Mobile button padding |
| `p-6` | 24px | Container padding, desktop button padding |

### Typography Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| Mobile H1 | 28px | 36px | Company name (0-639px) |
| Tablet H1 | 32px | 40px | Company name (640-767px) |
| Desktop H1 | 40px | 48px | Company name (768px+) |
| Mobile Tagline | 16px | 24px | Tagline (0-639px) |
| Desktop Tagline | 20px | 30px | Tagline (768px+) |
| Button Text | 16px | 28px | CTA text all breakpoints |

---

## Developer Handoff Notes

### Critical Implementation Details

1. **Breakpoint Changes:**
   - Change `sm:flex-row` to `md:flex-row` (line 28)
   - Change `sm:items-center` to `md:items-center` (line 28)
   - Update all button breakpoints from `sm:` to `md:`

2. **Typography Scaling:**
   - Add responsive classes to H1: `text-[28px] sm:text-[32px] md:text-[40px]`
   - Add responsive classes to tagline: `text-[16px] sm:text-[18px] md:text-[20px]`

3. **Button Width Strategy:**
   - Mobile: `w-full` (no changes)
   - Tablet/Desktop: `md:w-auto md:min-w-[180px] md:max-w-[240px]`
   - Large Desktop: `lg:min-w-[220px]`

4. **Testing Priority:**
   - Test at exact breakpoint transitions (767px → 768px)
   - Verify no layout shift during resize
   - Confirm all buttons visible and clickable at all widths

### Code Diff Preview

```diff
- className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
+ className="flex flex-col md:flex-row items-start md:items-center gap-6"

- <h1 className="text-[40px] font-black text-brand-navy leading-tight tracking-tight">
+ <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-black text-brand-navy leading-tight tracking-tight">

- <p className="text-[20px] text-neutral-5 font-normal">
+ <p className="text-[16px] sm:text-[18px] md:text-[20px] text-neutral-5 font-normal">

- className="flex flex-col gap-3 w-full md:w-auto md:flex-row"
+ className="flex flex-col gap-3 w-full md:w-auto md:flex-row"

- className="... flex-1 sm:flex-initial sm:min-w-[220px] ..."
+ className="... w-full md:w-auto md:min-w-[180px] md:max-w-[240px] lg:min-w-[220px] ..."
```

---

## Last Updated

**Version**: 1.0
**Date**: 2025-11-09
**Author**: UX/UI Design Team
**Status**: Approved for Implementation
