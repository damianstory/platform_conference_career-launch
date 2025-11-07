---
title: Implementation Guide for Frontend Engineers
description: Developer handoff with code examples, migration strategy, and testing requirements
feature: Compact Booth Cards
last-updated: 2025-11-07
version: 1.0.0
related-files:
  - ./README.md
  - ./card-dimensions.md
  - ./typography-hierarchy.md
  - ./visual-system.md
  - ./grid-layout.md
status: approved
---

# Implementation Guide for Frontend Engineers

## Overview

This document provides complete implementation guidance for migrating from the current booth card design (360px with badges/tags) to the compact design (224px with essential elements only).

## Files to Modify

### Primary File

**`/components/expo/BoothCard.tsx`**
- Remove "Industry Immersion Series" badge (lines 165-170)
- Remove organization type and industry tag pills (lines 234-262)
- Change logo size from 96x96 to 64x64
- Add strict line clamping to title and description
- Change min-height from 360px to fixed height 224px
- Adjust internal padding from 24px to 16px
- Remove top margin from logo (mt-12 → mt-0)

### Secondary File (Optional)

**`/components/expo/ExpoHall.tsx`**
- Grid configuration already correct (line 366, 402)
- Gap spacing already correct (gap-6 = 24px)
- No changes required unless adjusting responsive breakpoints

## Step-by-Step Implementation

### Step 1: Update Card Container Dimensions

**Current code (line 116):**
```tsx
min-h-[360px]
```

**New code:**
```tsx
h-[224px]
```

**Change padding (line 112):**
```tsx
// Current
className="... p-6 ..."

// New
className="... p-4 ..."
```

### Step 2: Remove "Industry Immersion Series" Badge

**Delete lines 165-170 entirely:**
```tsx
{/* DELETE THIS ENTIRE BLOCK */}
<div className="absolute top-4 left-4 z-10">
  <div className="inline-flex items-center justify-center px-3 py-1 bg-brand-navy/90 text-white text-subtitle-1 rounded-md font-medium tracking-wide">
    Industry Immersion Series
  </div>
</div>
```

### Step 3: Remove Top Margin from Logo

**Current code (line 174):**
```tsx
className="mb-4 flex-shrink-0 mt-12"
```

**New code:**
```tsx
className="mb-3 flex-shrink-0"
```

**Update margin-bottom from 16px to 12px (mb-4 → mb-3)**

### Step 4: Reduce Logo Size

**Current code (line 183-186):**
```tsx
className={`
  bg-white rounded-lg flex items-center justify-center overflow-hidden relative
  w-24 h-24 shadow-sm
`}
```

**New code:**
```tsx
className={`
  bg-white rounded-lg flex items-center justify-center overflow-hidden relative
  w-16 h-16 shadow-sm
`}
```

**Changes: w-24 h-24 (96px) → w-16 h-16 (64px)**

### Step 5: Add Strict Line Clamping to Title

**Current code (line 227-229):**
```tsx
<h3 className="text-body-1 font-black text-brand-navy">
  {booth.name}
</h3>
```

**New code:**
```tsx
<h3
  className="
    text-[18px] leading-6 font-extrabold text-brand-navy
    line-clamp-2 h-12 mb-2
    tracking-tight break-words hyphens-auto
  "
  title={booth.name}
  aria-label={booth.name}
>
  {booth.name}
</h3>
```

**Key changes:**
- `text-body-1` → `text-[18px] leading-6` (custom size)
- `font-black` → `font-extrabold` (800 weight)
- Add `line-clamp-2 h-12 mb-2` for strict 2-line clamping with fixed height
- Add `tracking-tight break-words hyphens-auto` for better text wrapping
- Add `title` and `aria-label` attributes for accessibility

### Step 6: Add Strict Line Clamping to Description

**Current code (line 230-232):**
```tsx
<p className="text-body-2 font-light text-neutral-5 flex-grow">
  {booth.tagline}
</p>
```

**New code:**
```tsx
<p
  className="
    text-compact leading-[22px] font-normal text-neutral-5
    line-clamp-2 h-11
    break-words
  "
  title={booth.tagline}
  aria-label={booth.tagline}
>
  {booth.tagline}
</p>
```

**Key changes:**
- `text-body-2` → `text-compact` (14px)
- `font-light` → `font-normal` (400 weight)
- `flex-grow` removed (no longer needed with fixed heights)
- Add `leading-[22px]` for custom line-height (44px total)
- Add `line-clamp-2 h-11` for strict 2-line clamping with fixed height
- Add `title` and `aria-label` attributes for accessibility

### Step 7: Remove Tag Pills Section

**Delete lines 234-262 entirely:**
```tsx
{/* DELETE THIS ENTIRE BLOCK */}
<div className="flex flex-wrap gap-2 mt-auto pt-3">
  <motion.span
    className={`inline-block px-2 py-1 text-subtitle-1 font-medium rounded-full ${orgTypeBadgeColor}`}
    {/* ... */}
  >
    {/* Organization type pill */}
  </motion.span>
  <motion.span
    className="inline-block px-2 py-1 bg-primary-blue/10 text-primary-blue text-subtitle-1 font-medium rounded-full"
    {/* ... */}
  >
    {/* Industry pill */}
  </motion.span>
</div>
```

### Step 8: Remove Unused Variable

**Delete lines 37-42 (orgTypeBadgeColor variable):**
```tsx
// DELETE THIS BLOCK - No longer used
const orgTypeBadgeColor = {
  'employer': 'bg-blue-500/10 text-blue-700',
  'post-secondary': 'bg-purple-500/10 text-purple-700',
  'gap-year': 'bg-green-500/10 text-green-700'
}[booth.organizationType]
```

### Step 9: Adjust Layout Container

**Update line 217-226 (parent container for title/description):**

**Current:**
```tsx
<motion.div
  className="flex-grow flex flex-col space-y-3"
  {/* ... */}
>
```

**New:**
```tsx
<motion.div
  className="flex flex-col"
  {/* ... */}
>
```

**Remove `flex-grow` and `space-y-3` as we now use explicit spacing with `mb-2`**

## Complete Updated Component Structure

### Simplified Card Layout

```tsx
<motion.div className="h-[224px] p-4 rounded-xl ...">
  {/* Logo - 64x64px */}
  <div className="w-16 h-16 mb-3">
    <img src={booth.logo} alt={`${booth.name} logo`} />
  </div>

  {/* Content Container */}
  <div className="flex flex-col">
    {/* Title - 48px fixed height, 2-line clamp */}
    <h3 className="text-[18px] leading-6 font-extrabold text-brand-navy line-clamp-2 h-12 mb-2 ...">
      {booth.name}
    </h3>

    {/* Description - 44px fixed height, 2-line clamp */}
    <p className="text-compact leading-[22px] font-normal text-neutral-5 line-clamp-2 h-11 ...">
      {booth.tagline}
    </p>
  </div>

  {/* Hover CTA (unchanged) */}
  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 ...">
    <div className="bg-primary-blue text-white text-center py-2 px-4 rounded-lg ...">
      Visit Booth →
    </div>
  </div>
</motion.div>
```

## Height Breakdown Verification

After implementation, verify height calculation:

```
Top Padding:         16px (p-4)
Logo Container:      64px (w-16 h-16)
Logo-to-Title Gap:   12px (mb-3)
Title:               48px (h-12: 2 lines × 24px line-height)
Title-to-Desc Gap:    8px (mb-2)
Description:         44px (h-11: 2 lines × 22px line-height)
Bottom Reserve:      16px (hover CTA space)
Bottom Padding:      16px (p-4)
─────────────────────────
TOTAL:              224px ✅
```

## Testing Requirements

### Visual Regression Testing

Test with these company names and taglines:

#### Short Names (Single Line)
```typescript
{ name: "IBM", tagline: "Leading innovation" }
{ name: "Nike", tagline: "Just do it" }
```

**Expected**: Title uses 1 line, empty space where line 2 would be. Card height remains 224px.

#### Long Names (2 Lines)
```typescript
{ name: "Ontario College of Trades and Advanced Manufacturing", tagline: "..." }
{ name: "The Canadian Association of Technology Professionals", tagline: "..." }
```

**Expected**: Title uses exactly 2 lines, truncates with ellipsis if needed. Card height remains 224px.

#### Very Long Names (Truncation)
```typescript
{
  name: "The International Federation of Professional Technical Service Organizations of Canada",
  tagline: "..."
}
```

**Expected**: Title truncates at 2 lines with ellipsis: "The International Federation of / Professional Technical Service..."

#### Long Descriptions
```typescript
{
  name: "Example Corp",
  tagline: "We provide comprehensive career pathways for students exploring technology, engineering, and advanced manufacturing careers through immersive experiences"
}
```

**Expected**: Description truncates at 2 lines with ellipsis.

#### Missing Logo
```typescript
{ name: "Test Corp", tagline: "Testing", logo: null }
```

**Expected**: Displays "TE" in neutral-1 background with neutral-4 text.

### Responsive Testing

Test on these viewport sizes:

| Device | Viewport | Grid Columns | Card Width | Expected Cards Visible |
|--------|----------|--------------|------------|----------------------|
| iPhone SE | 375×667 | 1 | 343px | 2-3 cards (scroll) |
| iPad Mini | 768×1024 | 2 | 720px | 3-4 cards (scroll) |
| MacBook Air | 1440×900 | 4 | 660px (plat), 318px (std) | 3 rows (~12 cards) |
| 4K Display | 3840×2160 | 4 | 660px (plat), 318px (std) | Many rows visible |

### Accessibility Testing

#### Keyboard Navigation
- [ ] Tab through all booth cards in visual order
- [ ] Focus indicator visible (2px blue outline with 2px offset)
- [ ] Enter/Space activates card link
- [ ] No keyboard traps

#### Screen Reader Testing
- [ ] Card announced as link with booth name
- [ ] Full title announced (even if visually truncated)
- [ ] Full description announced (even if visually truncated)
- [ ] Tier announced (platinum vs standard)
- [ ] Industry announced for context

#### Color Contrast
- [ ] Title (Navy #22224C on White): 13.2:1 ratio ✅
- [ ] Title (Navy on Off-white #F6F6FF): 12.8:1 ratio ✅
- [ ] Description (Neutral-5 #485163 on White): 7.2:1 ratio ✅
- [ ] CTA (White on Primary-blue #0092FF): 4.9:1 ratio ✅

Use WebAIM Contrast Checker or browser DevTools to verify.

### Performance Testing

#### Rendering Performance
- [ ] Initial render of 37 cards completes in <500ms
- [ ] Smooth 60fps scrolling with animations
- [ ] No layout shifts after images load
- [ ] Hover animations smooth and responsive

#### Image Loading
- [ ] Logos lazy load outside viewport
- [ ] Skeleton states show during logo loading
- [ ] Failed images show fallback (2-letter abbreviation)
- [ ] No FOUC (flash of unstyled content)

## Migration Strategy

### Recommended Approach

**Option 1: Direct Replacement (Recommended)**
1. Create backup branch: `git checkout -b backup-booth-cards-360px`
2. Implement all changes in `BoothCard.tsx`
3. Test thoroughly with all edge cases
4. Deploy to staging for QA review
5. Deploy to production after approval

**Option 2: Feature Flag (Conservative)**
1. Add feature flag: `ENABLE_COMPACT_BOOTH_CARDS`
2. Duplicate `BoothCard.tsx` as `BoothCardCompact.tsx`
3. Implement compact design in new component
4. Toggle between old/new components via flag
5. Test both versions in production
6. Remove old component after validation

### Rollback Plan

If issues arise after deployment:

```bash
# Revert commit
git revert <commit-hash>

# Or restore from backup branch
git checkout backup-booth-cards-360px -- components/expo/BoothCard.tsx

# Rebuild and deploy
npm run build && npm run deploy
```

## CSS Custom Properties (Optional Enhancement)

For easier future adjustments, consider adding CSS custom properties:

```css
/* In globals.css or design-tokens.css */
:root {
  --booth-card-height: 224px;
  --booth-card-padding: 16px;
  --booth-logo-size: 64px;
  --booth-logo-gap: 12px;
  --booth-title-size: 18px;
  --booth-title-height: 48px;
  --booth-title-gap: 8px;
  --booth-desc-size: 14px;
  --booth-desc-height: 44px;
}
```

Then use in Tailwind config:

```typescript
// tailwind.config.ts
theme: {
  extend: {
    height: {
      'booth-card': 'var(--booth-card-height)',
      'booth-title': 'var(--booth-title-height)',
      'booth-desc': 'var(--booth-desc-height)',
    },
    width: {
      'booth-logo': 'var(--booth-logo-size)',
    }
  }
}
```

This allows design system updates without modifying component code.

## Tailwind Configuration Requirements

### Ensure Line Clamp Support

Tailwind v3.3+ includes line-clamp utilities by default. Verify in `tailwind.config.ts`:

```typescript
// No additional configuration needed for line-clamp
// These utilities work out-of-box:
// line-clamp-2, line-clamp-3, line-clamp-none
```

### Custom Height Values

If using custom heights frequently, add to Tailwind config:

```typescript
// tailwind.config.ts
theme: {
  extend: {
    height: {
      '11': '44px',    // For description (h-11)
      '12': '48px',    // For title (h-12)
    }
  }
}
```

Tailwind already includes these by default, but verify they exist.

## Common Implementation Pitfalls

### Pitfall 1: Using min-height Instead of Fixed Height

**Wrong:**
```tsx
className="min-h-[224px]"  // ❌ Allows cards to grow
```

**Correct:**
```tsx
className="h-[224px]"      // ✅ Fixed height enforced
```

### Pitfall 2: Forgetting overflow:hidden on Line Clamp

**Wrong:**
```tsx
className="line-clamp-2"   // ❌ Missing overflow handling
```

**Correct:**
```tsx
className="line-clamp-2 overflow-hidden"  // ✅ Explicitly hidden
```

Note: `line-clamp-2` includes `overflow:hidden` automatically, but adding explicitly improves clarity.

### Pitfall 3: Not Testing with Long Content

Always test with edge-case content:
- 80+ character company names
- 120+ character descriptions
- Special characters and emoji
- URLs in text
- Non-breaking spaces

### Pitfall 4: Removing Hover CTA by Accident

The hover CTA (lines 265-270) should remain unchanged. It appears in reserved space at bottom and does not affect card height.

### Pitfall 5: Breaking Grid Span Logic

Platinum cards must span 2 columns on desktop:

```tsx
// Correct wrapper (in ExpoHall.tsx)
<div className={booth.tier === 'platinum' ? 'col-span-2' : 'col-span-1'}>
  <BoothCard booth={booth} />
</div>
```

Don't remove this logic or all booths will span 1 column.

## Browser Compatibility

### Line Clamp Support

`-webkit-line-clamp` supported in:
- Chrome/Edge: All versions
- Firefox: 68+
- Safari: 5+
- iOS Safari: 5+
- Android Chrome: All versions

**Fallback for older browsers:**
```css
@supports not (-webkit-line-clamp: 2) {
  .line-clamp-2 {
    max-height: 48px;      /* Approximate 2-line height */
    overflow: hidden;
  }
}
```

### CSS Grid Support

CSS Grid supported in all modern browsers (IE11 requires -ms- prefixes, but project targets modern browsers only).

## Performance Optimization

### Image Optimization

Ensure booth logos are optimized:

```typescript
// Recommended logo specifications
- Format: WebP with PNG fallback
- Dimensions: 128x128px (2x for retina)
- File size: <50KB per logo
- Lazy loading: loading="lazy" attribute
```

### Animation Performance

Use `transform` and `opacity` for animations (GPU-accelerated):

```css
/* Good - GPU accelerated */
transform: scale(1.02);
opacity: 0;

/* Avoid - Causes reflow */
width: 100px → 110px;
height: 224px → 230px;
```

## QA Checklist

Before marking implementation complete:

- [ ] All "Industry Immersion Series" badges removed
- [ ] All organization type pills removed
- [ ] All industry pills removed
- [ ] Card height fixed at 224px (not min-height)
- [ ] Card padding reduced to 16px (p-4)
- [ ] Logo size reduced to 64x64px (w-16 h-16)
- [ ] Logo top margin removed (mt-0)
- [ ] Title font size: 18px, weight: 800, line-clamp: 2, height: 48px
- [ ] Description font size: 14px, weight: 400, line-clamp: 2, height: 44px
- [ ] Title and description have `title` attributes for full text on hover
- [ ] Title and description have `aria-label` for screen readers
- [ ] Hover CTA still appears and functions correctly
- [ ] Focus indicators visible for keyboard navigation
- [ ] All color contrasts meet WCAG AA (4.5:1 minimum)
- [ ] Grid layout maintains platinum 2-column, standard 1-column spanning
- [ ] Responsive behavior correct on mobile/tablet/desktop
- [ ] Edge cases tested (long names, missing logos, special characters)
- [ ] Performance acceptable (smooth animations, fast rendering)
- [ ] No console errors or warnings
- [ ] Design approved by stakeholders

## Post-Launch Monitoring

After deployment, monitor these metrics:

- **User engagement**: Click-through rate on booth cards
- **Performance**: Page load time and rendering performance
- **Error tracking**: Any JavaScript errors from BoothCard component
- **User feedback**: Comments about readability or information density
- **A/B testing** (optional): Compare old vs new design metrics

## Support and Questions

If issues arise during implementation:

1. **Review documentation**: All specifications in this feature folder
2. **Check design system**: Verify color/spacing tokens match
3. **Test isolation**: Create isolated Storybook story for BoothCard
4. **Browser DevTools**: Inspect computed styles to debug layout issues
5. **Reach out**: Contact UX designer for clarification on visual specifications

---

Last Updated: 2025-11-07 | Version: 1.0.0 | Status: Approved

## Quick Reference: Key Measurements

```
Card Height: 224px (fixed)
Card Padding: 16px
Logo Size: 64x64px
Logo Gap: 12px
Title: 18px / 24px line-height / 800 weight / 48px container / 2-line clamp
Description: 14px / 22px line-height / 400 weight / 44px container / 2-line clamp
Grid Gap: 24px (desktop), 20px (tablet), 16px (mobile)
Platinum Span: 2 columns (desktop/wide)
Standard Span: 1 column (desktop/wide)
```
