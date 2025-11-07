---
title: Quick Reference - Expo Booth Cards Redesign
description: Fast reference guide for developers implementing the booth card improvements
feature: Expo Booth Cards Redesign
last-updated: 2025-11-07
status: approved
---

# Quick Reference Guide

## TL;DR - What Changed

### The Problem
- Cards too narrow (5-column grid on XL screens)
- Company names truncating ("Tech Innovat...")
- Tier badges adding clutter
- Fixed 320px height too constraining

### The Solution
- Reduce to 4-column grid max (wider cards)
- Remove tier badges (replace with subtle styling)
- Increase to 360px minimum height (flexible)
- Ensure full text visibility

## Quick Implementation Steps

### 1. Update Grid (ExpoHall.tsx)

**OLD:**
```jsx
grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6
```

**NEW:**
```jsx
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8
```

### 2. Remove Tier Badge (BoothCard.tsx)

**DELETE lines 165-173:**
```jsx
{/* Tier badge */}
<div className="absolute top-4 left-4 z-10">
  <div className="...">
    {booth.tier}
  </div>
</div>
```

### 3. Update Card Height (BoothCard.tsx)

**OLD:**
```jsx
h-[320px]
```

**NEW:**
```jsx
min-h-[360px]
```

### 4. Update Platinum Styling (BoothCard.tsx)

**NEW platinum styles:**
```jsx
card: `
  bg-gradient-to-br from-light-blue/40 via-off-white to-light-blue/40
  border-[3px] border-primary-blue/30 hover:border-primary-blue/50
  shadow-lg shadow-primary-blue/10
`
```

### 5. Fix Tagline Line Clamp (BoothCard.tsx)

**OLD:**
```jsx
line-clamp-2
```

**NEW:**
```jsx
line-clamp-3
```

## Grid Breakpoints

| Screen | Columns | Card Width | Gap |
|--------|---------|------------|-----|
| Mobile (320-767px) | 1 | ~288-720px | 24px |
| Tablet (768-1023px) | 2 | ~348-463px | 24px |
| Desktop (1024-1439px) | 3 | ~304-435px | 32px |
| Wide (1440px+) | 4 | ~325-340px | 32px |

## Tier Differentiation

### Platinum
- **Background:** Gradient (light-blue/40 to off-white)
- **Border:** 3px, primary-blue/30
- **Shadow:** Deep + blue glow
- **Logo:** 96x96px
- **Animation:** Float effect
- **Hover:** 3D rotation

### Standard
- **Background:** Solid white
- **Border:** 2px, neutral-2
- **Shadow:** Standard depth
- **Logo:** 80x80px
- **Animation:** None
- **Hover:** 2D scale

## Typography Reference

```jsx
// Company Name
className="text-body-1 font-black text-brand-navy line-clamp-2"
// 20px / 32px line-height / weight 900

// Tagline
className="text-body-2 font-light text-neutral-5 line-clamp-3 flex-grow"
// 16px / 28px line-height / weight 300

// Tags
className="text-subtitle-1 font-medium px-2 py-1 rounded-full"
// 12px / 20px line-height / weight 500
```

## Spacing Reference (8px grid)

```jsx
Card padding:          p-6        (24px)
Logo margin bottom:    mb-6       (24px)
Name to tagline gap:   space-y-2  (8px)
Tags padding top:      pt-4       (16px)
Tag gap:               gap-2      (8px)
```

## Color Reference

```css
/* Primary Brand */
--primary-blue: #0092FF
--brand-navy: #22224C
--light-blue: #C6E7FF
--off-white: #F6F6FF

/* Neutrals */
--neutral-2: #D9DFEA
--neutral-5: #485163
```

## Files to Modify

1. **`/components/expo/ExpoHall.tsx`**
   - Lines 366, 402: Update grid classes
   - Line 284: Update container max-width

2. **`/components/expo/BoothCard.tsx`**
   - Lines 165-173: Delete tier badge
   - Lines 47-70: Update getTierStyles()
   - Line 116: Change h-[320px] to min-h-[360px]
   - Line 177: Remove mt-8 from logo
   - Line 188: Conditional logo size
   - Line 233: Change line-clamp-2 to line-clamp-3

3. **`/components/expo/BoothCardSkeleton.tsx`**
   - Update height to min-h-[360px]
   - Remove tier badge skeleton

## Testing Checklist

Quick tests to run:

- [ ] View at 320px - 1 column, no horizontal scroll
- [ ] View at 768px - 2 columns, cards ~350px wide
- [ ] View at 1024px - 3 columns, cards ~320px wide
- [ ] View at 1440px+ - 4 columns, cards ~340px wide
- [ ] Verify no tier badges visible
- [ ] Check "Tech Innovators Inc." displays fully (no truncation)
- [ ] Check "HealthCare Plus" displays fully
- [ ] Confirm platinum cards have blue gradient
- [ ] Confirm standard cards are white
- [ ] Tab through cards with keyboard (focus visible)
- [ ] Test hover states work on both tiers

## Before/After Comparison

### Grid Layout

**Before:**
```
XL: 5 columns → Cards ~240px wide → Text truncating
Desktop: 4 cols → Cards ~260px wide → Too narrow
Tablet: 3 cols → Cards ~240px wide → Too narrow
Mobile: 2 cols → Cards ~160px wide → Way too narrow
```

**After:**
```
XL: 4 columns → Cards ~340px wide → Perfect
Desktop: 3 cols → Cards ~320px wide → Comfortable
Tablet: 2 cols → Cards ~360px wide → Great
Mobile: 1 col → Cards ~288px+ wide → Excellent
```

### Visual Hierarchy

**Before:**
```
Prominent tier badges at top
Fixed 320px height
Standard shadow for all
Same logo sizes
```

**After:**
```
No tier badges (clean)
Flexible 360px+ height
Differentiated shadows (subtle)
Platinum logos larger (96px vs 80px)
Gradient vs solid backgrounds
```

## Common Pitfalls to Avoid

1. Don't use `col-span` classes - let grid handle sizing
2. Don't set fixed heights - use `min-h-[360px]`
3. Don't forget to update skeleton loading state
4. Don't add tier badges back in (even as "featured")
5. Don't reduce line-clamp below 3 for taglines
6. Don't forget to test keyboard navigation
7. Don't skip mobile testing (most critical)

## Need More Details?

- Full specifications: [README.md](./README.md)
- Card specs: [card-specifications.md](./card-specifications.md)
- Grid system: [responsive-layout.md](./responsive-layout.md)
- Visual hierarchy: [visual-hierarchy.md](./visual-hierarchy.md)
- Typography: [typography-spacing.md](./typography-spacing.md)
- Implementation: [implementation.md](./implementation.md)

## Questions?

Contact the UX/UI Designer or refer to the comprehensive documentation in this directory.
