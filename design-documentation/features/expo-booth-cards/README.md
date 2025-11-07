---
title: Expo Booth Cards - Design Specifications
description: Comprehensive design specifications for booth card improvements in the Career Launch Platform expo hall
feature: Expo Booth Cards Redesign
last-updated: 2025-11-07
version: 2.0
related-files:
  - ./card-specifications.md
  - ./responsive-layout.md
  - ./visual-hierarchy.md
  - ../../design-system/components/cards.md
dependencies:
  - myBlueprint Brand Guidelines
  - Tailwind CSS Design Tokens
status: approved
---

# Expo Booth Cards - Design Specifications

## Overview

This document provides comprehensive design specifications for improving the expo hall booth cards in the Career Launch Platform. The redesign addresses critical usability issues with card proportions, text truncation, and visual hierarchy while maintaining brand compliance with myBlueprint design standards.

## Problem Statement

### Current Issues
1. **Card Aspect Ratio Problem**: Cards are too narrow, causing visual imbalance and text truncation
2. **Tier Badge Clutter**: Platinum/Standard badges at top of cards add visual noise without meaningful value
3. **Text Truncation**: Company names ("Tech Innovat...", "HealthCare Plus") are being cut off despite available space
4. **Fixed Height Constraint**: 320px fixed height combined with narrow width creates cramped layouts
5. **Grid Density**: 5-column grid on XL screens creates excessively narrow cards

### Design Goals
1. Remove tier badges and replace with subtle visual differentiation
2. Increase card width through smarter grid configuration
3. Ensure full text visibility for names and taglines
4. Maintain "Industry Immersion Series" branding visibility
5. Preserve accessibility and responsive design principles

## Quick Reference

**Current Implementation:**
- Grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`
- Card Height: 320px (fixed)
- Tier Badges: Visible at top
- Card Spans: Platinum (2-3 cols), Standard (1-2 cols)

**New Specifications:**
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- Card Height: 360px minimum (flexible based on content)
- Tier Badges: Removed (replaced with subtle visual cues)
- Card Spans: All cards span 1 column, uniform width
- Minimum Card Width: 280px (mobile), 320px (desktop)

## Table of Contents
1. [Card Dimensions & Layout](./card-specifications.md)
2. [Grid System & Responsive Behavior](./responsive-layout.md)
3. [Visual Hierarchy & Tier Differentiation](./visual-hierarchy.md)
4. [Typography & Spacing](./typography-spacing.md)
5. [Interactive States](./interactive-states.md)
6. [Accessibility Compliance](./accessibility.md)
7. [Implementation Checklist](./implementation.md)

## Key Changes Summary

### 1. Grid Configuration
**Mobile (320-767px):**
- Columns: 1
- Gap: 24px (3 in Tailwind scale)
- All cards full width

**Tablet (768-1023px):**
- Columns: 2
- Gap: 24px
- All cards equal width

**Desktop (1024-1439px):**
- Columns: 3
- Gap: 32px (4 in Tailwind scale)
- All cards equal width

**Wide (1440px+):**
- Columns: 4
- Gap: 32px
- All cards equal width
- Maximum container width: 1440px

### 2. Tier Differentiation Without Badges

**Platinum Booths:**
- Enhanced gradient background: `from-light-blue/40 via-off-white to-light-blue/40`
- Thicker border: `border-[3px] border-primary-blue/30`
- Subtle glow: `shadow-lg shadow-primary-blue/10`
- Animated float effect maintained
- Logo size: 96x96px (increased from 80x80px)

**Standard Booths:**
- Clean white background: `bg-white`
- Standard border: `border-2 border-neutral-2`
- Minimal shadow: `shadow-md`
- No float animation
- Logo size: 80x80px

### 3. Content Hierarchy

**Top Section (56px):**
- "Industry Immersion Series" badge (optional, contextual)
- Right-aligned gift icon (if applicable)

**Logo Section (120px):**
- Platinum: 96x96px logo in rounded container
- Standard: 80x80px logo in rounded container
- 24px margin below

**Content Section (flexible):**
- Company Name: 2 lines max, no truncation on standard widths
- Tagline: 2-3 lines, descriptive
- Spacing between elements: 16px

**Footer Section (auto):**
- Organization type badge
- Industry tag
- Wrapped layout, 8px gap between tags

**Hover CTA (56px):**
- Absolute positioned at bottom
- Slides up on hover
- Full width minus 32px padding

## Design Token Reference

### Colors
```css
/* Primary Brand Colors */
--primary-blue: #0092FF
--brand-navy: #22224C
--light-blue: #C6E7FF
--off-white: #F6F6FF

/* Neutral Palette */
--neutral-1: #E5E9F1
--neutral-2: #D9DFEA
--neutral-3: #AAB7CB
--neutral-4: #65738B
--neutral-5: #485163
--neutral-6: #252A33
```

### Typography Scale
```css
/* Card Typography */
--company-name: 1.25rem / 2rem (text-body-1)
--tagline: 1rem / 1.75rem (text-body-2)
--tags: 0.75rem / 1.25rem (text-subtitle-1)
```

### Spacing (8px Grid)
```css
--card-padding: 24px (3 units)
--element-gap: 16px (2 units)
--tag-gap: 8px (1 unit)
--section-margin: 24px (3 units)
```

## Related Documentation

- [Design System - Card Components](../../design-system/components/cards.md)
- [Brand Guidelines](../../design-system/style-guide.md)
- [Typography System](../../design-system/tokens/typography.md)
- [Accessibility Guidelines](../../accessibility/guidelines.md)

## Implementation Notes

### Priority Changes
1. **P0 - Critical**: Update grid configuration and remove tier badges
2. **P0 - Critical**: Fix card height and width ratios
3. **P1 - High**: Implement new tier differentiation styling
4. **P1 - High**: Update typography to prevent truncation
5. **P2 - Medium**: Add "Industry Immersion Series" branding

### Testing Requirements
- Verify text visibility across all card widths (280px-400px)
- Test tier differentiation is perceivable but subtle
- Validate WCAG AA contrast ratios on all backgrounds
- Confirm responsive behavior at all breakpoints
- Test keyboard navigation and focus states

## Approval & Sign-off

**Design Approved By:** UX/UI Designer
**Date:** 2025-11-07
**Status:** Ready for Implementation

---

For detailed specifications on each aspect, refer to the linked documents in the Table of Contents above.
