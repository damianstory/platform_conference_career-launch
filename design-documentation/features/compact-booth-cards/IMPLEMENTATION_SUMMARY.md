---
title: Compact Booth Cards - Implementation Summary
description: Executive summary for frontend engineers with quick-start implementation guide
feature: Compact Booth Cards
last-updated: 2025-11-07
version: 1.0.0
status: approved
---

# Compact Booth Cards - Implementation Summary

## TL;DR for Engineers

**File to modify**: `/components/expo/BoothCard.tsx`

**Changes required**:
1. Remove "Industry Immersion Series" badge (lines 165-170)
2. Remove organization type + industry tag pills (lines 234-262)
3. Change card height: `min-h-[360px]` → `h-[224px]`
4. Change padding: `p-6` → `p-4`
5. Change logo size: `w-24 h-24` → `w-16 h-16`
6. Remove logo top margin: `mt-12` → remove
7. Add strict 2-line clamp to title with fixed 48px height
8. Add strict 2-line clamp to description with fixed 44px height

**Time estimate**: 30-45 minutes
**Testing time**: 1-2 hours
**Risk level**: Low (visual changes only, no logic changes)

## Quick Reference Card

```
┌─────────────────────────────────────────────────────┐
│  COMPACT BOOTH CARD SPECIFICATIONS                  │
├─────────────────────────────────────────────────────┤
│  Total Height:    224px (fixed, not min-height)     │
│  Padding:         16px all sides (p-4)              │
│  Logo:            64×64px (w-16 h-16)               │
│  Logo Gap:        12px to title (mb-3)              │
│  Title:           18px / 800 weight / 2-line clamp  │
│  Title Height:    48px (h-12)                       │
│  Title Gap:       8px to description (mb-2)         │
│  Description:     14px / 400 weight / 2-line clamp  │
│  Desc Height:     44px (h-11)                       │
│  Grid Span:       Platinum: 2 cols, Standard: 1 col │
├─────────────────────────────────────────────────────┤
│  REMOVED ELEMENTS:                                  │
│  ❌ "Industry Immersion Series" badge               │
│  ❌ Organization type pill                          │
│  ❌ Industry pill                                   │
└─────────────────────────────────────────────────────┘
```

## Critical Code Changes

### 1. Card Container Height & Padding

**Before:**
```tsx
className="... min-h-[360px] p-6 ..."
```

**After:**
```tsx
className="... h-[224px] p-4 ..."
```

### 2. Remove Badge (Delete Entire Block)

**Before (lines 165-170):**
```tsx
{/* Industry Immersion Series branding */}
<div className="absolute top-4 left-4 z-10">
  <div className="inline-flex items-center justify-center px-3 py-1 bg-brand-navy/90 text-white text-subtitle-1 rounded-md font-medium tracking-wide">
    Industry Immersion Series
  </div>
</div>
```

**After:**
```tsx
{/* DELETED - Badge removed */}
```

### 3. Logo Size & Margin

**Before:**
```tsx
<motion.div className="mb-4 flex-shrink-0 mt-12">
  <div className="... w-24 h-24 ...">
```

**After:**
```tsx
<motion.div className="mb-3 flex-shrink-0">
  <div className="... w-16 h-16 ...">
```

### 4. Title with Line Clamp

**Before:**
```tsx
<h3 className="text-body-1 font-black text-brand-navy">
  {booth.name}
</h3>
```

**After:**
```tsx
<h3
  className="text-[18px] leading-6 font-extrabold text-brand-navy line-clamp-2 h-12 mb-2 tracking-tight break-words hyphens-auto"
  title={booth.name}
  aria-label={booth.name}
>
  {booth.name}
</h3>
```

### 5. Description with Line Clamp

**Before:**
```tsx
<p className="text-body-2 font-light text-neutral-5 flex-grow">
  {booth.tagline}
</p>
```

**After:**
```tsx
<p
  className="text-compact leading-[22px] font-normal text-neutral-5 line-clamp-2 h-11 break-words"
  title={booth.tagline}
  aria-label={booth.tagline}
>
  {booth.tagline}
</p>
```

### 6. Remove Tag Pills (Delete Entire Block)

**Before (lines 234-262):**
```tsx
{/* Tags */}
<div className="flex flex-wrap gap-2 mt-auto pt-3">
  <motion.span className={`... ${orgTypeBadgeColor}`}>
    {/* Organization type pill */}
  </motion.span>
  <motion.span className="...">
    {/* Industry pill */}
  </motion.span>
</div>
```

**After:**
```tsx
{/* DELETED - Tag pills removed */}
```

### 7. Remove Unused Variable (lines 37-42)

**Before:**
```tsx
const orgTypeBadgeColor = {
  'employer': 'bg-blue-500/10 text-blue-700',
  'post-secondary': 'bg-purple-500/10 text-purple-700',
  'gap-year': 'bg-green-500/10 text-green-700'
}[booth.organizationType]
```

**After:**
```tsx
{/* DELETED - Variable no longer needed */}
```

### 8. Adjust Content Container

**Before:**
```tsx
<motion.div className="flex-grow flex flex-col space-y-3">
```

**After:**
```tsx
<motion.div className="flex flex-col">
```

## Height Calculation Verification

After implementation, verify this calculation adds up to 224px:

```
Padding Top:         16px  (p-4)
Logo:                64px  (w-16 h-16)
Logo Gap:            12px  (mb-3)
Title:               48px  (h-12: 2 lines × 24px)
Title Gap:            8px  (mb-2)
Description:         44px  (h-11: 2 lines × 22px)
Reserved (hover):    16px  (space for CTA overlay)
Padding Bottom:      16px  (p-4)
─────────────────────────
TOTAL:              224px  ✅
```

## Testing Checklist

### Visual Testing

Test with these edge cases:

- [ ] **Short name**: "IBM" (single line, card stays 224px)
- [ ] **Long name**: "Ontario College of Trades and Advanced Manufacturing" (2 lines with ellipsis)
- [ ] **Very long name**: 80+ characters (truncates at 2 lines with ellipsis)
- [ ] **Short description**: "Leading innovation" (single line, card stays 224px)
- [ ] **Long description**: 100+ characters (truncates at 2 lines with ellipsis)
- [ ] **Missing logo**: Shows fallback (2-letter abbreviation in neutral colors)

### Responsive Testing

Test on these viewports:

- [ ] **Mobile (375px)**: Single column, all cards full width, 2-3 visible
- [ ] **Tablet (768px)**: 2 columns, all cards span full (2 columns), 3-4 visible
- [ ] **Desktop (1440px)**: 4 columns, platinum spans 2, standard spans 1, 7-8 visible

### Accessibility Testing

- [ ] **Keyboard nav**: Tab through cards, focus indicator visible
- [ ] **Screen reader**: Full name/description announced (via title/aria-label)
- [ ] **Color contrast**: All text meets 4.5:1 minimum
- [ ] **Touch targets**: Cards exceed 44×44px minimum (entire card is clickable)

### Performance Testing

- [ ] **Render time**: All 37 cards render in <500ms
- [ ] **Smooth scrolling**: 60fps scrolling through all cards
- [ ] **No layout shifts**: Cards maintain 224px even while images load
- [ ] **Animations**: Hover effects smooth and responsive

## Before/After Comparison

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Card Height | 360px | 224px | -38% |
| Elements | 7 | 4 | -43% |
| Visible Booths (desktop) | 4-5 | 7-8 | +60% |
| Scrolling Required | 5.2x viewport | 3.7x viewport | -29% |
| DOM Nodes/Card | ~25 | ~15 | -40% |

## Common Mistakes to Avoid

1. **Using min-height instead of fixed height**
   - ❌ `min-h-[224px]` (allows growth)
   - ✅ `h-[224px]` (enforces fixed height)

2. **Forgetting to remove orgTypeBadgeColor variable**
   - Results in unused variable warning

3. **Not adding title/aria-label attributes**
   - Breaks accessibility for truncated text

4. **Removing hover CTA accidentally**
   - CTA overlay should remain (it appears in reserved space)

5. **Not testing with long content**
   - Always test with 80+ character names and descriptions

## Files Changed

Only one file requires modification:

```bash
M  components/expo/BoothCard.tsx
```

No changes required to:
- `components/expo/ExpoHall.tsx` (grid already correct)
- `types/booth.ts` (types unchanged)
- `data/sample-booths.ts` (data structure unchanged)

## Git Commit Strategy

Recommended commit message:

```bash
git add components/expo/BoothCard.tsx
git commit -m "Refactor: Implement compact booth card design

- Reduce card height from 360px to 224px (38% reduction)
- Remove 'Industry Immersion Series' badge
- Remove organization type and industry tag pills
- Reduce logo from 96x96 to 64x64
- Add strict 2-line clamping to title and description
- Improve information density by 60%
- Maintain WCAG AA accessibility standards

Addresses: Display 27 platinum booths effectively
"
```

## Deployment Checklist

Before deploying to production:

- [ ] Local testing complete with all edge cases
- [ ] Responsive testing on mobile/tablet/desktop
- [ ] Accessibility testing (keyboard, screen reader, contrast)
- [ ] Performance testing (render time, animations)
- [ ] Code review approved
- [ ] QA validation on staging environment
- [ ] Design team approval
- [ ] Stakeholder sign-off

## Rollback Plan

If issues arise after deployment:

```bash
# Option 1: Revert the commit
git revert <commit-hash>
git push origin main

# Option 2: Create backup branch first
git checkout -b backup-booth-cards-360px
# Then implement changes on main
# If needed, restore from backup:
git checkout main
git checkout backup-booth-cards-360px -- components/expo/BoothCard.tsx
```

## Performance Impact

Expected improvements:

- **Render time**: -22% (fewer elements to render)
- **DOM nodes**: -40% (simpler component structure)
- **Layout shifts**: Eliminated (fixed heights)
- **Memory usage**: Slightly lower (fewer elements)

## Support Resources

If you encounter issues during implementation:

1. **Complete specifications**: See other .md files in this folder
   - `card-dimensions.md` - Exact pixel measurements
   - `typography-hierarchy.md` - Font specifications
   - `visual-system.md` - Colors, borders, shadows
   - `grid-layout.md` - Responsive grid configurations
   - `implementation-guide.md` - Detailed step-by-step guide

2. **Design tokens**: `/styles/design-tokens.css`

3. **Tailwind config**: `/tailwind.config.ts`

4. **Current implementation**: `/components/expo/BoothCard.tsx`

## Timeline Estimate

| Task | Time Estimate |
|------|---------------|
| Code changes | 30-45 minutes |
| Local testing | 30-45 minutes |
| Responsive testing | 30 minutes |
| Accessibility testing | 15-30 minutes |
| Code review | 30 minutes |
| QA on staging | 1 hour |
| **Total** | **3-4 hours** |

## Questions to Ask Before Starting

1. Do I have the complete context about why we're making these changes?
   - **Answer**: Yes - read README.md in this folder

2. Are there any dependencies or related features being developed?
   - **Answer**: No - this is isolated to BoothCard component

3. Do I need to coordinate with other team members?
   - **Answer**: Inform QA team for testing, design team for approval

4. Is there a feature flag needed for gradual rollout?
   - **Answer**: Optional - see implementation-guide.md for feature flag approach

5. What's the rollback strategy if issues arise?
   - **Answer**: Git revert or restore from backup branch

## Success Criteria

Implementation is successful when:

- ✅ All 27 platinum booths display in compact 224px cards
- ✅ Cards maintain fixed height with all edge-case content
- ✅ No "Industry Immersion Series" badges visible
- ✅ No organization type or industry pills visible
- ✅ Title and description truncate cleanly at 2 lines
- ✅ Hover CTA still appears and functions correctly
- ✅ All color contrasts meet WCAG AA (4.5:1 minimum)
- ✅ Responsive behavior correct on all breakpoints
- ✅ No console errors or warnings
- ✅ Performance metrics maintained or improved
- ✅ Design team approval received
- ✅ QA validation passed

## Next Steps After Implementation

1. **Monitor user engagement**: Track click-through rates on booth cards
2. **Gather feedback**: Solicit user feedback on information density
3. **Performance monitoring**: Watch for any performance regressions
4. **A/B testing** (optional): Compare old vs new design metrics
5. **Documentation update**: Update Storybook with new card variants

---

## Contact & Support

**Design Specifications**: This folder (`/design-documentation/features/compact-booth-cards/`)
**UX Designer**: For visual/interaction questions
**Frontend Lead**: For implementation approach questions
**QA Team**: For testing strategy questions

---

Last Updated: 2025-11-07 | Version: 1.0.0 | Status: Approved

## Remember

**This is a straightforward refactoring with low risk.** The changes are entirely visual with no logic modifications. Fixed heights eliminate the most common source of layout bugs. Line clamping is well-supported in all modern browsers. You've got this!

🚀 Ready to implement? Start with the code changes in section "Critical Code Changes" above.
