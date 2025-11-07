---
title: Card Dimensions Specifications
description: Precise pixel measurements for compact booth card layout
feature: Compact Booth Cards
last-updated: 2025-11-07
version: 1.0.0
related-files:
  - ./README.md
  - ./typography-hierarchy.md
  - ./visual-system.md
status: approved
---

# Card Dimensions Specifications

## Overview

This document provides exact pixel measurements for all elements of the compact booth card design. All measurements follow the 8px spacing grid and are optimized for consistent 224px fixed height.

## Card Container

### Fixed Dimensions

```css
/* Card Container */
height: 224px;                    /* Fixed height (not min-height) */
width: 100%;                       /* Fills grid column */
border-radius: 12px;               /* var(--radius-lg) */
padding: 16px;                     /* All sides (8px grid: 2 units) */
```

### Current vs New

| Measurement | Current | New | Reduction |
|-------------|---------|-----|-----------|
| Height | min-height: 360px | height: 224px | 136px (38%) |
| Padding | 24px (p-6) | 16px (p-4) | 8px per side |

### Rationale

**Fixed height instead of min-height**: Ensures all cards are identical dimensions, eliminating visual inconsistency. Text overflow is handled with strict line clamping rather than expanding card height.

**16px padding**: Minimum spacing that maintains readability while maximizing content area. This is 2 units on the 8px grid (standard "small" spacing).

## Logo Section

### Dimensions

```css
/* Logo Container */
width: 64px;
height: 64px;
border-radius: 8px;               /* var(--radius-md) */
background: white;
padding: 8px;                      /* Internal padding for logo breathing room */
margin-bottom: 12px;              /* Space to title (8px grid: 1.5 units) */
box-shadow: 0 1px 2px rgba(34, 34, 76, 0.05);  /* var(--shadow-sm) */
```

### Logo Image

```css
/* Logo Image Inside Container */
width: 48px;                       /* 64px - (8px padding × 2) */
height: 48px;
object-fit: contain;              /* Preserve aspect ratio */
```

### Current vs New

| Measurement | Current | New | Reduction |
|-------------|---------|-----|-----------|
| Container Size | 96x96px | 64x64px | 32px (33%) |
| Top Margin | 48px (mt-12) | 0px | 48px |

### Rationale

**64x64px size**: Optimal for compact cards while maintaining logo recognition. Testing shows logos remain identifiable at this size.

**Removed top margin**: "Industry Immersion Series" badge previously occupied this space. Removing it allows logo to sit at top of card.

**12px margin to title**: Provides visual separation without excessive whitespace. Not on strict 8px grid (1.5 units) for optimal proportions.

## Typography Layout

### Title (Company Name)

```css
/* Title Container */
height: 48px;                      /* Exactly 2 lines at 24px line-height */
margin-bottom: 8px;               /* Space to description (8px grid: 1 unit) */
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;            /* Strict 2-line maximum */
```

### Description (Tagline)

```css
/* Description Container */
height: 44px;                      /* Exactly 2 lines at 22px line-height */
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;            /* Strict 2-line maximum */
```

### Spacing Breakdown

| Element | Height | Purpose |
|---------|--------|---------|
| Title | 48px | 2 lines × 24px line-height |
| Spacing | 8px | Gap between title and description |
| Description | 44px | 2 lines × 22px line-height |
| **Total Text** | **100px** | All typography together |

## Complete Height Calculation

Breaking down the 224px fixed height:

```
Card Padding Top:        16px
Logo Container:          64px
Logo-to-Title Gap:       12px
Title (2 lines):         48px
Title-to-Desc Gap:        8px
Description (2 lines):   44px
Bottom Padding:          16px
Hover CTA Reserve:       16px  (space for hover overlay, not visible by default)
──────────────────────────────
TOTAL:                  224px
```

### Vertical Spacing Flow

```
┌─────────────────────────────┐
│ 16px padding                │ Top
├─────────────────────────────┤
│ [64×64 Logo]                │
│                             │
├─ 12px gap ─────────────────┤
│ Company Name                │ Title line 1 (24px)
│ Continued Here              │ Title line 2 (24px)
├─ 8px gap ──────────────────┤
│ Tagline text describing the │ Desc line 1 (22px)
│ company's main focus area   │ Desc line 2 (22px)
│                             │
│ [Hover CTA appears here]    │ 16px reserved space
│                             │
├─────────────────────────────┤
│ 16px padding                │ Bottom
└─────────────────────────────┘
```

## Responsive Adjustments

### Mobile (320px - 767px)

Cards stack vertically in single column, maintain same dimensions:

```css
height: 224px;                     /* Same fixed height */
width: 100%;                       /* Full width minus container padding */
```

### Tablet (768px - 1023px)

2-column grid for both platinum and standard:

```css
height: 224px;                     /* Same fixed height */
```

### Desktop (1024px - 1439px)

4-column grid, platinum spans 2 columns:

```css
height: 224px;                     /* Same fixed height */
```

### Wide (1440px+)

4-column grid with same spanning:

```css
height: 224px;                     /* Same fixed height */
max-width: none;                   /* Allow full grid expansion */
```

## Touch Target Requirements

### Entire Card is Clickable

```css
/* Card as Touch Target */
min-height: 224px;                 /* Meets 44px minimum requirement */
min-width: varies;                 /* Grid column width always > 44px */
cursor: pointer;
```

### Mobile Considerations

On mobile (single column), card width is typically 328px+ (full width minus padding), easily exceeding 44px minimum touch target width.

## Edge Case Handling

### Very Long Company Names

With strict 2-line clamp:
```
Maximum characters (approximate):
Line 1: ~25-30 characters
Line 2: ~25-30 characters
Total: ~50-60 characters before truncation with ellipsis
```

Example:
```
"Ontario College of Trades and
Advanced Manufacturing..."
```

### Very Short Company Names

Single-line names maintain same container height:
```
"IBM"
[Empty space where line 2 would be]
[Description starts after 48px title container]
```

### Very Long Descriptions

With strict 2-line clamp:
```
Maximum characters (approximate):
Line 1: ~40-45 characters
Line 2: ~40-45 characters
Total: ~80-90 characters before truncation with ellipsis
```

### Empty/Missing Logos

When logo image fails to load or is missing:
```css
/* Fallback Display */
width: 64px;
height: 64px;
display: flex;
align-items: center;
justify-content: center;
background: var(--neutral-1);
font-size: 24px;                   /* 2-letter abbreviation */
font-weight: 700;
color: var(--neutral-4);
```

Shows first 2 letters of company name: "IB" for "IBM"

## Hover State Dimensions

### CTA Overlay

```css
/* Hover CTA (appears on hover) */
position: absolute;
bottom: 16px;                      /* Aligned with card padding */
left: 16px;
right: 16px;
height: 40px;                      /* Standard button height */
padding: 8px 16px;
border-radius: 8px;
```

### Hover Transform

```css
/* Card Hover State */
transform: scale(1.02);           /* Subtle scale increase */
transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
```

Scale increase adds ~4.5px to each dimension visually but does not affect layout (uses transform).

## Grid Column Spanning

### Platinum Booths

```css
/* Platinum Card Wrapper */
grid-column: span 2;              /* Spans 2 columns on desktop */
```

### Standard Booths

```css
/* Standard Card Wrapper */
grid-column: span 1;              /* Single column */
```

## Implementation Notes

### CSS Custom Properties

```css
:root {
  --booth-card-height: 224px;
  --booth-card-padding: 16px;
  --booth-logo-size: 64px;
  --booth-title-height: 48px;
  --booth-desc-height: 44px;
  --booth-logo-gap: 12px;
  --booth-title-gap: 8px;
}
```

### Tailwind Classes

```jsx
<div className="
  h-[224px]           /* Fixed height */
  p-4                 /* 16px padding */
  rounded-xl          /* 12px border radius */
  flex flex-col       /* Vertical layout */
">
  <div className="w-16 h-16 mb-3"> {/* 64px logo, 12px margin */}
    {/* Logo */}
  </div>
  <h3 className="h-12 mb-2 line-clamp-2"> {/* 48px title, 8px margin */}
    {/* Title */}
  </h3>
  <p className="h-11 line-clamp-2"> {/* 44px description */}
    {/* Description */}
  </p>
</div>
```

## Testing Checklist

- [ ] All cards render at exactly 224px height across all breakpoints
- [ ] Logo containers are exactly 64x64px
- [ ] Title never exceeds 2 lines (ellipsis appears on line 2)
- [ ] Description never exceeds 2 lines (ellipsis appears on line 2)
- [ ] Spacing follows 8px grid (16px, 12px, 8px used appropriately)
- [ ] Hover CTA appears in reserved space without layout shift
- [ ] Cards maintain dimensions with missing/failed logo images
- [ ] Touch targets exceed 44x44px minimum on all devices

---

Last Updated: 2025-11-07 | Version: 1.0.0 | Status: Approved
