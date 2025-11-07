---
title: Compact Booth Cards - Design Specifications
description: Complete design specifications for simplified, compact booth cards optimized for displaying 27+ platinum booths
feature: Compact Booth Cards
last-updated: 2025-11-07
version: 1.0.0
related-files:
  - ./card-dimensions.md
  - ./typography-hierarchy.md
  - ./visual-system.md
  - ./grid-layout.md
  - ./implementation-guide.md
dependencies:
  - ../../design-system/tokens/colors.md
  - ../../design-system/tokens/spacing.md
  - ../../design-system/tokens/typography.md
status: approved
---

# Compact Booth Cards - Design Overview

## Problem Statement

The current booth cards are **too tall** (min-height: 360px) and contain unnecessary visual elements that make it difficult to display 27 platinum booths effectively. Cards have inconsistent heights due to unclamped text, leading to a disorganized grid layout.

### Current Issues:
- Cards are 360px minimum height - too tall for displaying 27+ booths
- "Industry Immersion Series" badge takes up 32px at top
- Two tag pills at bottom (organization type + industry) add 28px + padding
- Unclamped title and description text creates variable card heights
- Excessive whitespace reduces information density
- Logo is 96x96px - larger than necessary for compact design

## Solution Overview

Create compact, consistent booth cards with:
- **Fixed height**: 224px (38% reduction from 360px)
- **Only essential elements**: Logo, Title (2 lines max), Description (2 lines max)
- **Strict line clamping**: Prevents variable heights
- **Smaller logo**: 64x64px for better proportions
- **Minimal spacing**: Following 8px grid but optimized for compactness
- **Subtle tier differentiation**: Through background gradients and borders only

## Key Design Goals

1. **Compactness**: Reduce card height by 38% while maintaining readability
2. **Consistency**: All cards identical height with strict overflow handling
3. **Scalability**: Support 27+ platinum cards without overwhelming UI
4. **Clarity**: Remove visual clutter while preserving information hierarchy
5. **Accessibility**: Maintain WCAG AA standards despite reduced size

## Card Comparison

| Element | Current | New | Change |
|---------|---------|-----|--------|
| Total Height | 360px min | 224px fixed | -136px (-38%) |
| "Industry Immersion" Badge | 32px + 16px margin | Removed | -48px |
| Logo Size | 96x96px | 64x64px | -32px |
| Title | Unclamped | 2 lines max | Fixed |
| Description | Unclamped | 2 lines max | Fixed |
| Tag Pills | 2 pills (28px) | Removed | -28px |
| Internal Padding | 24px (p-6) | 16px (p-4) | -8px per side |

## Visual Elements Removed

1. "Industry Immersion Series" badge at top
2. Organization type pill (e.g., "Post-Secondary")
3. Industry pill (e.g., "Education")

## Visual Elements Retained

1. Logo (reduced to 64x64px)
2. Company name (strict 2-line clamp)
3. Tagline/description (strict 2-line clamp)
4. Tier differentiation through subtle background/border treatments
5. Hover state with "Visit Booth" CTA

## Design Philosophy

This design embraces **bold simplicity** through aggressive reduction of decorative elements. Information density is optimized through:

- **Strategic negative space**: Minimal but breathable padding
- **Typography hierarchy**: Font weight and size differentiation only
- **Subtle color theory**: Background gradients for tier distinction
- **Content-first layout**: Every pixel serves user goals
- **Consistent dimensions**: Fixed heights eliminate cognitive load from scanning

## Implementation Priority

**P0 (Critical)**: Must be implemented before displaying 27 platinum booths
- Fixed card height (224px)
- Remove "Industry Immersion Series" badge
- Remove organization type and industry tags
- Implement strict 2-line clamping on title and description
- Reduce logo to 64x64px
- Adjust grid layout for optimal density

## Success Metrics

- All 27 platinum cards visible in viewport scroll (desktop 1440px+ width)
- All cards maintain identical 224px height
- No text overflow or layout breaks with edge-case content
- WCAG AA color contrast maintained (4.5:1 minimum)
- Touch targets meet 44x44px minimum on mobile
- Reduced motion preferences respected

## Documentation Structure

This feature documentation includes:

1. **card-dimensions.md** - Exact pixel specifications for all card measurements
2. **typography-hierarchy.md** - Font sizes, weights, line heights, and clamping
3. **visual-system.md** - Colors, borders, shadows, and tier differentiation
4. **grid-layout.md** - Responsive grid configurations and spacing
5. **implementation-guide.md** - Developer handoff with code examples

## Related Design System Components

- [Color Tokens](../../design-system/tokens/colors.md)
- [Typography Scale](../../design-system/tokens/typography.md)
- [Spacing Grid](../../design-system/tokens/spacing.md)
- [Button Components](../../design-system/components/buttons.md)

## Accessibility Considerations

Despite compactness, design maintains:
- 4.5:1 minimum contrast ratio for all text
- 44x44px touch targets on mobile (entire card is clickable)
- Keyboard focus indicators with 2px visible outline
- Screen reader accessible content with proper semantic HTML
- Reduced motion support for animations

## Next Steps

1. Review complete specifications in linked documentation files
2. Implement changes in `/components/expo/BoothCard.tsx`
3. Update grid layout in `/components/expo/ExpoHall.tsx`
4. Test with 27+ platinum cards for overflow handling
5. Validate accessibility with automated and manual testing
6. Gather user feedback on information density

---

Last Updated: 2025-11-07 | Version: 1.0.0 | Status: Approved
