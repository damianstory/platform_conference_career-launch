---
title: Implementation Guide - Expo Booth Cards
description: Step-by-step implementation guide with code examples and testing procedures
feature: Expo Booth Cards Redesign
last-updated: 2025-11-07
related-files:
  - ./README.md
  - ./card-specifications.md
  - ./responsive-layout.md
  - ./visual-hierarchy.md
status: approved
---

# Implementation Guide

## Overview

This document provides step-by-step instructions for implementing the booth card redesign, including code examples, testing procedures, and rollback strategies.

## Implementation Priority

### P0 - Critical (Must implement together)
1. Update grid configuration in `ExpoHall.tsx`
2. Remove tier badge from `BoothCard.tsx`
3. Update card height from fixed to minimum
4. Fix text truncation issues

### P1 - High (Implement next)
1. Implement new tier differentiation styling
2. Update typography to prevent truncation
3. Add Industry Immersion Series badge (optional)
4. Update hover states

### P2 - Medium (Nice to have)
1. Enhance animation timing
2. Add decorative background elements
3. Optimize loading states
4. Performance optimizations

## File Changes Required

### Files to Modify
1. `/components/expo/ExpoHall.tsx` - Grid configuration
2. `/components/expo/BoothCard.tsx` - Card component redesign
3. `/components/expo/BoothCardSkeleton.tsx` - Loading state updates

### Files to Reference
1. `/styles/globals.css` - Design tokens and animations
2. `/tailwind.config.ts` - Color and spacing configuration
3. `/types/booth.ts` - Type definitions (no changes needed)

## Step-by-Step Implementation

### Step 1: Update ExpoHall Grid Configuration

**File:** `/components/expo/ExpoHall.tsx`

**Changes Required:**

1. **Update grid class (lines 366, 402):**

**OLD:**
```jsx
<div className="expo-booth-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
```

**NEW:**
```jsx
<div className="expo-booth-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
```

2. **Update container max-width (line 284):**

**OLD:**
```jsx
<div id="booths" className="max-w-7xl mx-auto px-4 py-6">
```

**NEW:**
```jsx
<div id="booths" className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-6">
```

3. **Remove wrapper classes from BoothCardWithHighlight (line 196):**

**OLD:**
```jsx
<motion.div
  ref={(el) => {
    boothRefs.current[booth.id] = el
  }}
  className={`relative ${isHighlighted ? 'z-20' : ''}`}
>
```

**NEW:** (No change - keep as is, wrapping div is fine)

**Testing Step 1:**
- Verify 1 column on mobile (320px-767px)
- Verify 2 columns on tablet (768px-1023px)
- Verify 3 columns on desktop (1024px-1439px)
- Verify 4 columns on wide (1440px+)
- Confirm container centers on screens >1440px

### Step 2: Remove Tier Badge from BoothCard

**File:** `/components/expo/BoothCard.tsx`

**Changes Required:**

1. **Remove tier badge section (lines 165-173):**

**DELETE THIS CODE:**
```jsx
{/* Tier badge */}
<div className="absolute top-4 left-4 z-10">
  <div className={`
    inline-flex items-center justify-center px-2 py-1 rounded-full text-subtitle-2 uppercase tracking-wide
    ${styles.badge}
  `}>
    {booth.tier}
  </div>
</div>
```

2. **Update getTierStyles function (lines 45-79):**

**Remove badge property from return objects:**

**OLD:**
```jsx
badge: 'bg-gradient-to-r from-primary-blue to-brand-navy text-white shadow-lg shadow-primary-blue/30',
```

**NEW:**
Remove this line entirely from both platinum and standard style objects.

3. **Adjust logo margin to compensate (line 177):**

**OLD:**
```jsx
<motion.div className="mb-4 flex-shrink-0 mt-8">
```

**NEW:**
```jsx
<motion.div className="mb-6 flex-shrink-0">
```

**Testing Step 2:**
- Verify no tier badges visible on any cards
- Confirm logo positioning looks correct
- Check that visual hierarchy is maintained through styling

### Step 3: Update Card Height and Structure

**File:** `/components/expo/BoothCard.tsx`

**Changes Required:**

1. **Update card height (line 116):**

**OLD:**
```jsx
className={`
  booth-card group relative rounded-xl p-6 cursor-pointer flex flex-col
  ${styles.card} ${styles.glow}
  ${booth.tier === 'platinum' ? 'animate-float' : ''}
  ${isHighlighted ? 'ring-4 ring-primary-blue ring-offset-4 ring-offset-background-light' : ''}
  h-[320px]
`}
```

**NEW:**
```jsx
className={`
  booth-card group relative rounded-xl p-6 cursor-pointer flex flex-col
  ${styles.card} ${styles.glow}
  ${booth.tier === 'platinum' ? 'animate-float' : ''}
  ${isHighlighted ? 'ring-4 ring-primary-blue ring-offset-4 ring-offset-background-light' : ''}
  min-h-[360px]
`}
```

**Testing Step 3:**
- Verify cards have minimum height of 360px
- Confirm cards can grow taller if content requires
- Check that shorter content cards still look balanced

### Step 4: Update Tier Differentiation Styling

**File:** `/components/expo/BoothCard.tsx`

**Changes Required:**

1. **Update platinum card styles (lines 47-61):**

**OLD:**
```jsx
case 'platinum':
  return {
    wrapper: 'col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-3',
    card: `
      bg-gradient-to-br from-light-blue/30 via-off-white to-light-blue/30
      border-2 border-primary-blue/20 hover:border-primary-blue
      relative overflow-hidden
      before:absolute before:inset-0
      before:bg-gradient-to-r before:from-primary-blue/10 before:via-brand-navy/10 before:to-primary-blue/10
      before:opacity-0 hover:before:opacity-100 before:transition-opacity
    `,
    glow: 'hover:shadow-2xl hover:shadow-primary-blue/25 transform hover:scale-[1.02]',
    animation: 'animate-float',
    priority: 1
  }
```

**NEW:**
```jsx
case 'platinum':
  return {
    wrapper: '', // Empty - no column span needed
    card: `
      bg-gradient-to-br from-light-blue/40 via-off-white to-light-blue/40
      border-[3px] border-primary-blue/30 hover:border-primary-blue/50
      relative overflow-hidden
      shadow-lg shadow-primary-blue/10
    `,
    glow: 'hover:shadow-xl hover:shadow-primary-blue/25 transition-all duration-300',
    animation: 'animate-float',
    priority: 1
  }
```

2. **Update standard card styles (lines 63-70):**

**OLD:**
```jsx
case 'standard':
  return {
    wrapper: 'col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-2',
    card: 'bg-white border-2 border-neutral-2 hover:border-neutral-3',
    badge: 'bg-neutral-4 text-white',
    glow: 'hover:shadow-lg',
    priority: 2
  }
```

**NEW:**
```jsx
case 'standard':
  return {
    wrapper: '', // Empty - no column span needed
    card: 'bg-white border-2 border-neutral-2 hover:border-neutral-3 shadow-md',
    glow: 'hover:shadow-lg transition-shadow duration-300',
    priority: 2
  }
```

3. **Update logo sizes (lines 186-189):**

**OLD:**
```jsx
<div className={`
  bg-white rounded-lg flex items-center justify-center overflow-hidden relative
  w-20 h-20 shadow-sm
`}>
```

**NEW:**
```jsx
<div className={`
  bg-white rounded-lg flex items-center justify-center overflow-hidden relative
  ${booth.tier === 'platinum' ? 'w-24 h-24' : 'w-20 h-20'}
  shadow-sm
`}>
```

**Testing Step 4:**
- Verify platinum cards have gradient background
- Confirm platinum border is thicker and blue-tinted
- Check standard cards remain clean white
- Validate shadow differences are subtle but perceivable
- Test that logo sizes differ appropriately

### Step 5: Fix Text Truncation

**File:** `/components/expo/BoothCard.tsx`

**Changes Required:**

1. **Update company name line clamp (line 230):**

**OLD:**
```jsx
<h3 className="text-body-1 font-black text-brand-navy line-clamp-2">
```

**NEW:** (No change needed - already correct)

2. **Update tagline line clamp (line 233):**

**OLD:**
```jsx
<p className="text-body-2 font-light text-neutral-5 flex-grow line-clamp-2">
```

**NEW:**
```jsx
<p className="text-body-2 font-light text-neutral-5 flex-grow line-clamp-3">
```

3. **Verify flexbox structure (lines 220-266):**

**Ensure this structure:**
```jsx
<motion.div className="flex-grow flex flex-col space-y-2">
  <h3 className="text-body-1 font-black text-brand-navy line-clamp-2">
    {booth.name}
  </h3>
  <p className="text-body-2 font-light text-neutral-5 flex-grow line-clamp-3">
    {booth.tagline}
  </p>

  {/* Tags */}
  <div className="flex flex-wrap gap-2 mt-auto pt-4">
    {/* Tag content */}
  </div>
</motion.div>
```

**Testing Step 5:**
- Test with short names (10-15 chars)
- Test with medium names (20-30 chars)
- Test with long names (40-50 chars)
- Verify no truncation on typical names
- Confirm taglines can use 3 lines

### Step 6: Update BoothCardSkeleton

**File:** `/components/expo/BoothCardSkeleton.tsx`

**Changes Required:**

1. **Update skeleton card height:**

**Find and replace:**
```jsx
h-[320px]  →  min-h-[360px]
```

2. **Remove tier badge skeleton:**

**Delete the tier badge skeleton div** (if present)

3. **Update skeleton structure to match new layout:**

```jsx
<div className={`
  min-h-[360px] rounded-xl p-6
  bg-off-white border-2 border-neutral-1
  flex flex-col
`}>
  {/* Logo skeleton */}
  <div className="flex-shrink-0 mb-6">
    <div className="w-20 h-20 skeleton rounded-lg"></div>
  </div>

  {/* Content skeleton */}
  <div className="flex-grow flex flex-col space-y-2">
    {/* Name skeleton */}
    <div className="h-5 w-4/5 skeleton rounded mb-2"></div>

    {/* Tagline skeleton (3 lines) */}
    <div className="flex-grow space-y-2">
      <div className="h-4 w-full skeleton rounded"></div>
      <div className="h-4 w-full skeleton rounded"></div>
      <div className="h-4 w-3/4 skeleton rounded"></div>
    </div>

    {/* Tags skeleton */}
    <div className="flex gap-2 mt-auto pt-4">
      <div className="h-6 w-20 skeleton rounded-full"></div>
      <div className="h-6 w-20 skeleton rounded-full"></div>
    </div>
  </div>
</div>
```

**Testing Step 6:**
- Verify skeleton matches new card layout
- Confirm smooth transition from skeleton to real content
- Test that skeleton prevents layout shift

## Optional Enhancements

### Add Industry Immersion Series Badge

**File:** `/components/expo/BoothCard.tsx`

**Add after opening motion.div, before logo:**

```jsx
{/* Optional: Industry Immersion Series badge for platinum */}
{booth.tier === 'platinum' && (
  <div className="mb-4 flex items-center justify-between">
    <span className="
      inline-flex items-center gap-1.5
      px-3 py-1.5
      bg-primary-blue/10
      text-primary-blue
      text-subtitle-1
      font-medium
      rounded-full
      border border-primary-blue/20
    ">
      <Sparkles className="w-3 h-3" />
      Industry Immersion Series
    </span>
  </div>
)}
```

**Note:** Requires importing Sparkles icon from lucide-react

### Enhanced Decorative Elements

**Keep existing decorative blur orbs** (lines 276-281) - they work well.

**Optional: Add subtle shimmer effect on platinum hover:**

Add to platinum styles:
```jsx
before:absolute before:inset-0
before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
before:opacity-0 before:group-hover:opacity-100
before:transition-opacity before:duration-700
before:shimmer-effect before:group-hover:animate-shimmer
```

## Testing Procedures

### Visual Regression Testing

**Checklist:**
- [ ] Cards render at correct widths on mobile
- [ ] Cards render at correct widths on tablet
- [ ] Cards render at correct widths on desktop
- [ ] Cards render at correct widths on wide screens
- [ ] No tier badges visible
- [ ] Platinum cards have gradient background
- [ ] Standard cards have white background
- [ ] All text readable without truncation
- [ ] Tags display correctly
- [ ] Hover states work properly
- [ ] Animations respect reduced motion

### Responsive Testing

**Test at these exact widths:**
- 320px (iPhone SE)
- 375px (iPhone 12/13)
- 768px (iPad Portrait)
- 1024px (iPad Landscape)
- 1440px (Desktop)
- 1920px (Large Desktop)
- 2560px (4K)

**Verify at each width:**
- Correct number of columns
- No horizontal scroll
- Text fully visible
- Cards properly aligned
- Gaps appropriate

### Content Testing

**Test with these scenarios:**

1. **Short Content:**
   - Name: "Google"
   - Tagline: "Search the world"

2. **Medium Content:**
   - Name: "Tech Innovators Inc."
   - Tagline: "Building the Future of AI & Cloud Computing"

3. **Long Content:**
   - Name: "Ontario Skilled Trades College and Training Center"
   - Tagline: "Comprehensive hands-on training in high-demand trades with partnerships across 500 employers"

4. **Very Long Content:**
   - Name: "International Federation of Technology and Innovation Centers"
   - Tagline: "We provide world-class education and training programs for students seeking careers in emerging technologies with a focus on sustainable development and community impact"

**Expected Results:**
- Short: No truncation, ample whitespace
- Medium: No truncation, balanced layout
- Long: Possible truncation but readable
- Very Long: Graceful truncation with ellipsis

### Accessibility Testing

**Automated Testing:**
```bash
# Run axe accessibility tests
npm run test:a11y

# Check contrast ratios
# Use browser DevTools or online tools
```

**Manual Testing:**
- [ ] Keyboard navigation works (Tab through cards)
- [ ] Focus indicators visible on all backgrounds
- [ ] Screen reader announces card content correctly
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Touch targets ≥44px (entire card is tappable)
- [ ] Zoom to 200% doesn't break layout

### Performance Testing

**Metrics to Monitor:**
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Time to Interactive (TTI)

**Test Commands:**
```bash
# Build production
npm run build

# Run Lighthouse
npm run lighthouse

# Check bundle size
npm run analyze
```

**Performance Targets:**
- FCP: <1.5s (desktop), <2s (mobile)
- LCP: <2.5s (desktop), <3.5s (mobile)
- CLS: <0.1
- TTI: <3s (desktop), <4s (mobile)

### Browser Testing

**Test in these browsers:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 15+)
- Chrome Mobile (Android 11+)

**Specific items to verify:**
- Gradient backgrounds render correctly
- Border styles consistent
- Shadows display properly
- Animations smooth
- Grid layout correct
- Font rendering acceptable

## Rollback Strategy

### If Issues Arise

**Quick Rollback:**
1. Revert ExpoHall.tsx grid changes
2. Revert BoothCard.tsx height change
3. Keep tier badge removed (optional)

**Partial Rollback:**
- Keep grid changes, revert styling changes
- Keep tier badge removal, revert other changes
- Implement changes individually, test each

**Git Commands:**
```bash
# Create backup branch
git checkout -b booth-cards-backup

# If need to rollback
git checkout main
git reset --hard HEAD~1  # Rollback one commit
```

### Emergency Fixes

**If cards too narrow:**
```jsx
// Quick fix: Reduce columns temporarily
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
```

**If text truncating:**
```jsx
// Quick fix: Increase line clamp
className="line-clamp-4"  // Instead of line-clamp-3
```

**If tier distinction unclear:**
```jsx
// Quick fix: Increase background opacity
className="from-light-blue/60 via-off-white to-light-blue/60"
```

## Code Review Checklist

### Before Submitting PR

- [ ] All file changes documented
- [ ] Code follows project conventions
- [ ] TypeScript types correct (no `any`)
- [ ] Tailwind classes used (no inline styles)
- [ ] Accessibility attributes present
- [ ] No console.logs or debug code
- [ ] Comments added for complex logic
- [ ] Performance considered (no unnecessary re-renders)

### PR Description Template

```markdown
## Expo Booth Cards Redesign

### Changes
- Updated grid from 5 columns to 4 columns max
- Removed tier badges from cards
- Changed card height from fixed 320px to minimum 360px
- Enhanced tier differentiation with subtle styling
- Fixed text truncation issues

### Testing
- [x] Tested on mobile (320px-767px)
- [x] Tested on tablet (768px-1023px)
- [x] Tested on desktop (1024px-1439px)
- [x] Tested on wide screens (1440px+)
- [x] Verified no text truncation
- [x] Checked accessibility with keyboard
- [x] Ran Lighthouse performance tests

### Screenshots
[Include before/after screenshots at each breakpoint]

### Related Documentation
- Design Specs: /design-documentation/features/expo-booth-cards/
- Card Specifications: ./card-specifications.md
- Responsive Layout: ./responsive-layout.md
- Visual Hierarchy: ./visual-hierarchy.md
```

## Post-Implementation

### Monitoring

**Metrics to Track:**
- Card click-through rate
- Time spent on expo hall page
- Mobile vs desktop usage
- Performance metrics (Vercel Analytics)

**User Feedback:**
- Collect feedback from educators
- Monitor support tickets for confusion
- A/B test if possible

### Documentation Updates

After successful implementation:
- [ ] Update component README
- [ ] Add Storybook stories (if applicable)
- [ ] Update design system documentation
- [ ] Create video walkthrough for team
- [ ] Document any deviations from spec

## Related Files
- [README](./README.md)
- [Card Specifications](./card-specifications.md)
- [Responsive Layout](./responsive-layout.md)
- [Visual Hierarchy](./visual-hierarchy.md)
- [Typography & Spacing](./typography-spacing.md)
