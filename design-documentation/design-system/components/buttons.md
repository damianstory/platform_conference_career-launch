---
title: Button Component Specifications
description: Comprehensive design specifications for all button variants and states
last-updated: 2025-11-09
version: 1.0
related-files:
  - ../../features/booth-header-responsive/README.md
  - ../tokens/colors.md
  - ../tokens/spacing.md
status: approved
---

# Button Component Specifications

## Overview

This document defines the complete button design system for the Career Launch Platform, including all variants, states, sizing strategies, and responsive behaviors. Buttons are critical interactive elements that must maintain consistency, accessibility, and usability across all breakpoints and contexts.

## Design Philosophy

Buttons in the Career Launch Platform embody these principles:

- **Clear Affordance**: Visual design clearly signals interactivity
- **Hierarchy**: Primary, secondary, and tertiary actions visually distinguished
- **Touch-Friendly**: All buttons meet or exceed 44px minimum touch target
- **Responsive**: Adapt gracefully to viewport constraints
- **Accessible**: WCAG AA compliant with clear focus indicators
- **Branded**: myBlueprint color palette and typography

---

## Button Variants

### Primary Button

**Use Case:** Main call-to-action, highest priority actions

**Visual Specifications:**
```css
background: #0092FF (primary-blue)
color: #FFFFFF (white)
border: none
border-radius: 8px (rounded-lg)
font-size: 16px (text-body-2)
font-weight: 600 (semibold)
height: 56px
padding: 16px 24px (px-4 md:px-6)
box-shadow: 0 4px 6px rgba(34, 34, 76, 0.1) (shadow-md)
```

**States:**

**Default:**
- Background: #0092FF
- Color: White
- Cursor: pointer

**Hover:**
- Background: #22224C (brand-navy)
- Transform: translateY(-2px)
- Shadow: Enhanced (0 6px 10px rgba(34, 34, 76, 0.15))
- Transition: all 200ms ease-out

**Active (Pressed):**
- Background: #1a1a3a (darker navy)
- Transform: translateY(0)
- Shadow: Reduced (0 2px 4px rgba(34, 34, 76, 0.08))

**Focus-Visible (Keyboard):**
- Outline: 2px solid #3B82F6 (blue-500)
- Outline-offset: 2px
- Maintains hover state if also hovered

**Disabled:**
- Background: #D9DFEA (neutral-2)
- Color: #AAB7CB (neutral-3)
- Cursor: not-allowed
- Opacity: 0.6
- No hover/active effects

**Code Example:**
```tsx
<button className="inline-flex items-center justify-center gap-2 px-4 md:px-6 h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-body-2 shadow-md hover:bg-brand-navy hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">
  Button Text
</button>
```

---

### Secondary Button

**Use Case:** Supporting actions, alternative options to primary CTA

**Visual Specifications:**
```css
background: #FFFFFF (white)
color: #0092FF (primary-blue)
border: 2px solid #0092FF
border-radius: 8px (rounded-lg)
font-size: 16px (text-body-2)
font-weight: 600 (semibold)
height: 56px
padding: 14px 22px (accounts for 2px border)
box-shadow: none (or very subtle)
```

**States:**

**Default:**
- Background: White
- Color: #0092FF
- Border: 2px solid #0092FF
- Cursor: pointer

**Hover:**
- Background: #0092FF (inverts - fills with blue)
- Color: White
- Border: 2px solid #0092FF (unchanged)
- Transform: translateY(-2px)
- Shadow: 0 4px 6px rgba(34, 34, 76, 0.1)
- Transition: all 200ms ease-out

**Active (Pressed):**
- Background: #0077CC (darker blue)
- Color: White
- Transform: translateY(0)
- Shadow: None

**Focus-Visible (Keyboard):**
- Outline: 2px solid #3B82F6
- Outline-offset: 2px
- Maintains hover state if also hovered

**Disabled:**
- Background: White
- Color: #AAB7CB (neutral-3)
- Border: 2px solid #D9DFEA (neutral-2)
- Cursor: not-allowed
- Opacity: 0.6

**Code Example:**
```tsx
<button className="inline-flex items-center justify-center gap-2 px-4 md:px-6 h-[56px] bg-white text-primary-blue border-2 border-primary-blue rounded-lg font-semibold text-body-2 hover:bg-primary-blue hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">
  Button Text
</button>
```

---

### Tertiary Button (Ghost/Text Button)

**Use Case:** Low-priority actions, navigation, "cancel" options

**Visual Specifications:**
```css
background: transparent
color: #0092FF (primary-blue)
border: none
border-radius: 8px
font-size: 16px (text-body-2)
font-weight: 600 (semibold)
height: 48px (slightly smaller than primary/secondary)
padding: 12px 16px
box-shadow: none
```

**States:**

**Default:**
- Background: Transparent
- Color: #0092FF
- Cursor: pointer

**Hover:**
- Background: rgba(0, 146, 255, 0.08) (light blue tint)
- Color: #22224C (brand-navy)
- Transition: all 200ms ease-out

**Active (Pressed):**
- Background: rgba(0, 146, 255, 0.15)
- Color: #22224C

**Focus-Visible:**
- Outline: 2px solid #3B82F6
- Outline-offset: 2px

**Disabled:**
- Background: Transparent
- Color: #AAB7CB (neutral-3)
- Cursor: not-allowed
- Opacity: 0.6

**Code Example:**
```tsx
<button className="inline-flex items-center justify-center gap-2 px-4 h-[48px] bg-transparent text-primary-blue rounded-lg font-semibold text-body-2 hover:bg-primary-blue/8 hover:text-brand-navy transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">
  Button Text
</button>
```

---

## Responsive Button Sizing

### Mobile-First Strategy (BoothHeader Pattern)

**Mobile (0-767px):**
- Width: `w-full` (100% of container)
- Height: `h-[56px]` (fixed)
- Padding: `px-4` (16px horizontal)
- Layout: Vertical stacking (gap-3)
- Rationale: Maximum touch target, easy thumb access

**Tablet (768-1023px):**
- Width: `md:w-auto md:min-w-[180px] md:max-w-[240px]`
- Height: `h-[56px]` (unchanged)
- Padding: `md:px-6` (24px horizontal)
- Layout: Can be horizontal or vertical depending on space
- Rationale: Flexible within constraints, prevents overflow

**Desktop (1024px+):**
- Width: `lg:min-w-[220px]` (comfortable minimum)
- Height: `h-[56px]` (unchanged)
- Padding: `px-6` (24px horizontal)
- Layout: Horizontal (side-by-side)
- Rationale: Optimal sizing for desktop interactions

**Width Constraints Explained:**

```
Mobile:     [================================]  (full-width)
            w-full

Tablet:     [=========]  to  [=============]   (flexible)
            180px min       240px max

Desktop:    [============]  or  [==============] (comfortable)
            220px min           280px max
```

**Implementation Pattern:**
```tsx
className="w-full md:w-auto md:min-w-[180px] md:max-w-[240px] lg:min-w-[220px]"
```

---

## Button Content Patterns

### Text-Only Buttons

**Specifications:**
- Content: Text only, concise (1-3 words ideal)
- Alignment: Center
- Truncation: Use `truncate` class for very long text
- Line height: Single line preferred

**Example:**
```tsx
<button className="...">
  <span className="truncate">View Opportunities</span>
</button>
```

---

### Icon + Text Buttons

**Specifications:**
- Layout: `inline-flex items-center justify-center gap-2`
- Icon size: 12px × 12px (w-3 h-3) for 16px text
- Icon position: Usually right for external links, left for actions
- Icon: `flex-shrink-0` (prevents icon from shrinking)

**Example (External Link):**
```tsx
<button className="inline-flex items-center justify-center gap-2 ...">
  <span className="truncate">Visit Website</span>
  <ExternalLink className="w-3 h-3 flex-shrink-0" />
</button>
```

**Example (Action Icon Left):**
```tsx
<button className="inline-flex items-center justify-center gap-2 ...">
  <Download className="w-4 h-4 flex-shrink-0" />
  <span className="truncate">Download PDF</span>
</button>
```

---

### Icon-Only Buttons

**Specifications:**
- Size: 44px × 44px minimum (square)
- Icon: 20px × 20px (w-5 h-5)
- Padding: Even padding to create square
- ARIA: `aria-label` required (describe action)

**Example:**
```tsx
<button
  className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary-blue text-white hover:bg-brand-navy transition-all duration-200"
  aria-label="Close modal"
>
  <X className="w-5 h-5" />
</button>
```

---

## Accessibility Requirements

### Touch Targets (WCAG 2.5.5 - Level AAA)

**Minimum Size:**
- Touch devices: 44px × 44px (WCAG Level AAA)
- Current implementation: 56px height ✅ (exceeds by 27%)
- Mobile width: Full-width ✅ (generous)
- Desktop width: Minimum 180px ✅

**Spacing Between Targets:**
- Minimum: 8px gap (current: 12px gap-3) ✅
- Prevents accidental taps on adjacent buttons

---

### Keyboard Navigation

**Requirements:**
- All buttons focusable via Tab key
- Logical tab order (primary before secondary)
- Activation: Enter key or Space bar
- Focus indicators always visible (never `outline: none`)

**Focus Indicator Specs:**
```css
outline: 2px solid #3B82F6 (blue-500)
outline-offset: 2px
```

**Contrast:** Focus indicator must have 3:1 contrast ratio with adjacent colors ✅

---

### Screen Reader Support

**Link Buttons (External Links):**
```tsx
<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit [Destination] (opens in new tab)"
>
  Button Text <ExternalLink aria-hidden="true" />
</a>
```

**Action Buttons:**
```tsx
<button
  onClick={handleClick}
  aria-label="Download session slides as PDF"
>
  Download Slides
</button>
```

**Icon-Only Buttons:**
```tsx
<button aria-label="Close dialog">
  <X aria-hidden="true" />
</button>
```

**Best Practices:**
- External link icons: `aria-hidden="true"` (decorative)
- ARIA labels: Describe action + context + new tab warning
- Disabled state: `aria-disabled="true"` (not just visual)

---

### Color Contrast

**Text Contrast (WCAG 2.1 Level AA):**

| Button Type | Text Color | Background | Contrast Ratio | Status |
|-------------|------------|------------|----------------|--------|
| Primary | White | #0092FF | 4.5:1 | ✅ Pass AA |
| Primary Hover | White | #22224C | 10.2:1 | ✅ Pass AAA |
| Secondary | #0092FF | White | 4.5:1 | ✅ Pass AA |
| Secondary Hover | White | #0092FF | 4.5:1 | ✅ Pass AA |
| Tertiary | #0092FF | Transparent | N/A (on white bg: 4.5:1) | ✅ Pass AA |
| Disabled | #AAB7CB | #D9DFEA | 2.8:1 | ⚠️ Intentional (disabled state) |

**Focus Indicator Contrast:**
- Blue outline (#3B82F6) on all backgrounds: 3:1+ ✅

---

## Button Sizing Reference

### Height Scale

| Size | Height | Use Case | Touch-Friendly |
|------|--------|----------|----------------|
| Small | 40px | Compact UI, dense layouts | ⚠️ Close to minimum |
| Medium | 48px | Standard UI, tertiary buttons | ✅ Yes (48px) |
| Large | 56px | Primary/secondary CTAs | ✅ Yes (exceeds 44px) |
| Extra Large | 64px | Hero CTAs, landing pages | ✅ Very generous |

**Current Standard:** 56px (Large) for all primary and secondary CTAs ✅

### Width Strategies

| Strategy | Mobile | Tablet | Desktop | Use Case |
|----------|--------|--------|---------|----------|
| Full-Width | `w-full` | `w-full` | `w-full` | Mobile-first forms, modals |
| Auto | `w-auto` | `w-auto` | `w-auto` | Inline buttons, navigation |
| Responsive (BoothHeader) | `w-full` | `md:w-auto` + constraints | `lg:min-w-[220px]` | Complex responsive layouts |
| Fixed | `w-[200px]` | `w-[200px]` | `w-[200px]` | Rare, use with caution |

---

## Transition Specifications

### Hover Transitions

**Properties:**
```css
transition-property: background-color, color, transform, box-shadow;
transition-duration: 200ms;
transition-timing-function: ease-out;
```

**Effects:**
- Background color change (blue → navy)
- Text color change (blue → white for secondary)
- Transform: `translateY(-2px)` (subtle lift)
- Shadow enhancement (increased elevation)

**Rationale:** 200ms feels responsive without being jarring

---

### Focus Transitions

**Properties:**
```css
transition-property: outline, outline-offset;
transition-duration: 150ms;
transition-timing-function: ease-out;
```

**Effects:**
- Outline appearance (keyboard focus)
- Smooth outline rendering

**Rationale:** Faster than hover (150ms) for immediate feedback

---

### Active (Press) Transitions

**Properties:**
```css
transition-duration: 0ms; /* Immediate */
```

**Effects:**
- Instant background darkening
- Instant transform return to origin (appears "pressed")
- Instant shadow reduction

**Rationale:** Immediate feedback feels more tactile and responsive

---

### Reduced Motion

**When `prefers-reduced-motion: reduce`:**
```css
@media (prefers-reduced-motion: reduce) {
  button {
    transition-duration: 0.01ms !important;
    transform: none !important;
  }
}
```

- All transitions effectively instant
- No transform animations (no lift effect)
- Focus indicators still visible
- Maintains functionality without motion

---

## Button Composition Patterns

### Horizontal Button Groups

**Use Case:** Primary + Secondary CTA side-by-side

**Layout:**
```tsx
<div className="flex flex-col md:flex-row gap-3">
  <button className="...primary...">Primary Action</button>
  <button className="...secondary...">Secondary Action</button>
</div>
```

**Responsive Behavior:**
- Mobile: Stacked vertically (gap-3 = 12px)
- Desktop: Side-by-side (gap-3 = 12px horizontal)

**Visual Hierarchy:**
- Primary always first in tab order
- Equal visual weight (same height)
- Differentiated by color/style

---

### Vertical Button Stacks

**Use Case:** Modal actions, mobile CTAs

**Layout:**
```tsx
<div className="flex flex-col gap-3 w-full">
  <button className="w-full ...">Primary Action</button>
  <button className="w-full ...">Secondary Action</button>
  <button className="w-full ...">Cancel</button>
</div>
```

**Best Practices:**
- Most important action first (top)
- Consistent width (w-full for alignment)
- Adequate spacing (gap-3 minimum)

---

### Button + Icon Patterns

**External Links:**
```tsx
<a className="..." target="_blank" rel="noopener noreferrer">
  <span className="truncate">Visit Website</span>
  <ExternalLink className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
</a>
```

**Download Actions:**
```tsx
<button className="...">
  <Download className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
  <span className="truncate">Download PDF</span>
</button>
```

**Navigation:**
```tsx
<button className="...">
  <ArrowLeft className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
  <span>Back to Booths</span>
</button>
```

---

## Don'ts - Common Mistakes to Avoid

### ❌ Don't: Remove Focus Indicators
```tsx
/* NEVER DO THIS */
button:focus {
  outline: none;
}
```
**Why:** Breaks keyboard navigation accessibility

**Do Instead:**
```tsx
button:focus-visible {
  outline: 2px solid blue;
  outline-offset: 2px;
}
```

---

### ❌ Don't: Use Arbitrary Minimum Widths Too Early
```tsx
/* PROBLEMATIC - causes overflow at mid-range widths */
className="sm:min-w-[220px]"
```

**Why:** Forces width before there's space, causes responsive gaps

**Do Instead:**
```tsx
/* BETTER - waits until adequate space */
className="w-full md:w-auto md:min-w-[180px] md:max-w-[240px]"
```

---

### ❌ Don't: Create Buttons Smaller Than 44px Touch Target
```tsx
/* PROBLEMATIC - accessibility violation */
className="h-[36px]"
```

**Why:** Violates WCAG AAA touch target requirements

**Do Instead:**
```tsx
/* BETTER - meets accessibility standards */
className="h-[48px]" /* or h-[56px] */
```

---

### ❌ Don't: Use Color Alone to Communicate State
```tsx
/* PROBLEMATIC - disabled state only indicated by color */
<button className="bg-gray-300 text-gray-500">Disabled</button>
```

**Why:** Color-blind users may not perceive difference

**Do Instead:**
```tsx
/* BETTER - multiple indicators */
<button
  className="bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
  aria-disabled="true"
  disabled
>
  Disabled
</button>
```

---

### ❌ Don't: Nest Interactive Elements
```tsx
/* PROBLEMATIC - button inside link */
<a href="...">
  <button>Click Me</button>
</a>
```

**Why:** Invalid HTML, breaks keyboard navigation

**Do Instead:**
```tsx
/* BETTER - link styled as button */
<a href="..." className="btn btn-primary">Click Me</a>
```

---

## Usage Guidelines

### When to Use Primary Button
✅ **Use for:**
- Main call-to-action on a page or section
- Highest priority action user should take
- Single most important action (ideally one per section)

❌ **Don't use for:**
- Multiple equal-priority actions
- Navigation (use tertiary instead)
- Destructive actions (use semantic color like red)

---

### When to Use Secondary Button
✅ **Use for:**
- Alternative action to primary CTA
- Second-priority actions
- "Learn More" type actions
- Pairing with primary for choice scenarios

❌ **Don't use for:**
- More than 2-3 on a single screen (dilutes hierarchy)
- Cancel actions (use tertiary)

---

### When to Use Tertiary Button
✅ **Use for:**
- Low-priority actions
- Navigation between pages/sections
- "Cancel" or "Go Back" actions
- Actions that shouldn't dominate visually

❌ **Don't use for:**
- Primary conversion actions
- Critical user actions (use primary instead)

---

## Code Examples Library

### Basic Primary Button
```tsx
<button className="inline-flex items-center justify-center px-6 h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-body-2 shadow-md hover:bg-brand-navy hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">
  Get Started
</button>
```

### Responsive BoothHeader Button (Current Best Practice)
```tsx
<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit Career Resources (opens in new tab)"
  className="inline-flex items-center justify-center gap-2 px-4 md:px-6 h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-body-2 shadow-md hover:bg-brand-navy hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 w-full md:w-auto md:min-w-[180px] md:max-w-[240px] lg:min-w-[220px]"
>
  <span className="truncate">Visit Website</span>
  <ExternalLink className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
</a>
```

### Icon-Only Button
```tsx
<button
  onClick={handleClose}
  aria-label="Close modal"
  className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-transparent text-brand-navy hover:bg-primary-blue/8 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
>
  <X className="w-5 h-5" aria-hidden="true" />
</button>
```

### Loading State Button
```tsx
<button
  disabled
  className="inline-flex items-center justify-center gap-2 px-6 h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-body-2 opacity-60 cursor-not-allowed"
  aria-label="Loading..."
  aria-busy="true"
>
  <Loader className="w-4 h-4 animate-spin" aria-hidden="true" />
  <span>Loading...</span>
</button>
```

---

## Related Documentation

- [BoothHeader Responsive Fix](../../features/booth-header-responsive/README.md) - Real-world application of responsive button strategy
- [Color Tokens](../tokens/colors.md) - Complete color palette specifications
- [Spacing Tokens](../tokens/spacing.md) - Spacing scale and usage guidelines
- [Typography Tokens](../tokens/typography.md) - Typography system specifications

---

## Last Updated

**Version:** 1.0
**Date:** 2025-11-09
**Author:** UX/UI Design Team
**Status:** Approved
**Next Review:** Post-BoothHeader implementation (2025-11-23)
