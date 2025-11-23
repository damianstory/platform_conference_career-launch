---
title: Session Video Player - Responsive Design Improvements
description: UX/UI specifications for responsive video player behavior on session detail pages
feature: Session Video Player
last-updated: 2025-11-23
version: 1.0
related-files:
  - ./screen-states.md
  - ./implementation.md
  - ./responsive-specifications.md
dependencies:
  - myBlueprint Design System (8px grid, brand colors)
  - Tailwind CSS responsive utilities
  - Vimeo Player SDK integration
status: approved
---

# Session Video Player - Responsive Design Improvements

## Overview

This document provides comprehensive UX/UI specifications for improving the responsive behavior of the video player section on Career Launch Platform session detail pages. The current implementation displays poorly on smaller/mobile screens with a fixed-height container (384px / h-96) that doesn't adapt proportionally to viewport width.

## Problem Statement

**Current Issue:** The video player container maintains a fixed height of 384px across all screen sizes, causing:
- Awkward proportions on mobile (320px-768px wide) where the container appears cramped
- Poor visual hierarchy with the "Watch Session" button inside a constrained space
- Suboptimal video aspect ratio that doesn't match standard 16:9 video formats
- Inconsistent spacing that violates the 8px grid system on smaller screens

**User Impact:** Ontario high school educators browsing on tablets or mobile devices experience a degraded viewing experience that undermines the professional aesthetic and browse-first registration philosophy.

## Design Objectives

1. **Maintain Standard Video Aspect Ratio:** Implement 16:9 aspect ratio (standard for educational video content) that scales proportionally across all devices
2. **Optimize Touch Targets:** Ensure CTA buttons meet 44px minimum height on mobile per accessibility guidelines
3. **Preserve Brand Aesthetic:** Apply myBlueprint color system and 8px spacing grid consistently
4. **Responsive Scaling:** Create fluid layouts that adapt gracefully from 320px (mobile) to 1440px+ (wide desktop)
5. **Performance:** Maintain fast load times and smooth transitions on all devices

## Key Design Decisions

### 1. Aspect Ratio Strategy: 16:9 with Responsive Padding

**Rationale:** The 16:9 aspect ratio is the industry standard for video content and provides:
- Optimal viewing experience for educational presentations
- Consistent proportions across devices (not distorted)
- Matches Vimeo player native dimensions
- Familiar user expectations from YouTube, Vimeo, and other video platforms

**Implementation Approach:** Use CSS aspect-ratio property with Tailwind's `aspect-video` utility (16:9)

### 2. Button Positioning: Context-Aware Placement

**Mobile (320px-768px):**
- Button positioned **below** video container
- Full-width layout for maximum touch target size
- 16px vertical spacing from video container (--space-2)

**Desktop (768px+):**
- Button can be **centered within** video placeholder area (pre-registration state)
- Transitions to full-screen video player after registration (post-registration state)
- Maintains visual hierarchy with adequate whitespace

**Rationale:** Mobile users need external button placement to avoid cramped touch targets, while desktop users benefit from centered CTA within the video area for visual focus.

### 3. Responsive Breakpoint Strategy

**Mobile Portrait (320px-480px):**
- Container: Full width minus 16px horizontal padding
- Video: aspect-video (16:9) with max-width constraint
- Button: Full-width, 56px height (--space-7)
- Typography: Scaled down to body-2 (16px)

**Mobile Landscape / Small Tablet (481px-768px):**
- Container: Full width minus 24px horizontal padding
- Video: aspect-video with increased max-width
- Button: Full-width or centered with min-width 320px
- Typography: body-1 (20px)

**Tablet (769px-1024px):**
- Container: Full width minus 32px horizontal padding
- Video: aspect-video with max-width 800px
- Button: Centered within video area (pre-reg) or full video (post-reg)
- Typography: body-1 (20px)

**Desktop (1025px+):**
- Container: max-width 1280px (5xl in Tailwind)
- Video: aspect-video with max-width 960px
- Button: Centered within video area with optimal sizing
- Typography: Subheader (22px)

### 4. Spacing System Compliance (8px Grid)

All spacing values must use multiples of 8px:

| Element | Mobile (px) | Tablet (px) | Desktop (px) | CSS Variable |
|---------|-------------|-------------|--------------|--------------|
| Container Padding (horizontal) | 16 | 24 | 32 | --space-2, --space-3, --space-4 |
| Container Padding (vertical) | 24 | 32 | 32 | --space-3, --space-4 |
| Video Bottom Margin | 16 | 16 | 24 | --space-2, --space-3 |
| Button Height | 56 | 56 | 56 | --space-7 |
| Button Horizontal Padding | 32 | 40 | 48 | --space-4, --space-5, --space-6 |
| Helper Text Top Margin | 16 | 16 | 16 | --space-2 |

### 5. Visual Hierarchy Optimization

**Information Architecture (Top to Bottom):**
1. Section Title: "Watch Session" (H2, Navy, 32px/40px depending on screen)
2. Video Player Area: 16:9 aspect ratio with blue-to-navy gradient background
3. Primary CTA: "Watch with Your Class" button (Blue, high contrast)
4. Helper Text: Small gray text explaining action (14px, Gray-600)

**Color Application:**
- Container Background: White (#FFFFFF)
- Container Border: Neutral-1 (#E5E9F1)
- Video Placeholder: Gradient from Blue (#0092FF) to Navy (#22224C)
- Button Background: Blue (#0092FF)
- Button Text: White (#FFFFFF)
- Helper Text: Neutral-4 (#65738B)

### 6. Accessibility Compliance

**WCAG 2.1 AA Requirements:**
- Color Contrast: 4.5:1 for body text, 3:1 for large text (verified)
- Touch Targets: Minimum 44px × 44px (button exceeds at 56px height)
- Keyboard Navigation: Tab order flows logically (title → video → button)
- Focus Indicators: 2px blue outline with 2px offset (Tailwind default)
- Screen Readers: Semantic HTML with proper ARIA labels
- Motion Sensitivity: Respect `prefers-reduced-motion` for transitions

## User Experience Flow

### Pre-Registration State (First-Time User)
1. User lands on session detail page
2. Hero section displays session title
3. Video section appears with:
   - "Watch Session" heading
   - 16:9 gradient placeholder (indicates video content)
   - Centered "Watch with Your Class" button (desktop) or below video (mobile)
   - Helper text: "Click 'Watch with Your Class' to register and start the video."
4. User clicks button → Registration modal appears
5. User completes form → Modal closes
6. Video player loads and begins playback immediately

### Post-Registration State (Cookie Detected)
1. User returns to any session detail page
2. Video section appears with pre-filled registration
3. User clicks "Watch with Your Class" button
4. Modal shows confirmation screen (1-click flow)
5. Video player loads and begins playback

### Loading State
1. Skeleton loader with shimmer effect during video initialization
2. Maintains 16:9 aspect ratio during loading
3. Smooth transition to video player (300ms fade)

## Performance Considerations

**Optimization Targets:**
- Video section renders in <100ms (static content)
- Aspect ratio calculation: CSS-only (no JavaScript)
- Button click response: <50ms to modal trigger
- Video player initialization: <2s on 3G connection
- Layout shift (CLS): <0.1 throughout interaction

**Implementation Notes:**
- Use CSS aspect-ratio property (modern browser support)
- Avoid inline styles; prefer Tailwind utilities
- Lazy-load Vimeo SDK until user clicks "Watch with Your Class"
- Preconnect to Vimeo CDN for faster video loading

## Next Steps

1. Review responsive specifications in `./responsive-specifications.md`
2. Examine detailed screen states in `./screen-states.md`
3. Follow implementation guidance in `./implementation.md`
4. Test across devices and validate against accessibility checklist

## Related Documentation

- [Responsive Specifications](./responsive-specifications.md) - Detailed breakpoint specifications
- [Screen States](./screen-states.md) - Visual specifications for all states
- [Implementation Guide](./implementation.md) - Developer handoff documentation
- [Design System](../../design-system/style-guide.md) - myBlueprint brand guidelines

## Success Metrics

**User Experience Metrics:**
- Modal open rate: >90% of video section views
- Form completion rate: >95% of modal opens
- Video play rate: >90% of form completions
- Mobile bounce rate: <10% (improved from current)

**Technical Metrics:**
- Layout Shift (CLS): <0.1
- Largest Contentful Paint (LCP): <2.5s
- First Input Delay (FID): <100ms
- Accessibility audit score: 100/100

---

Last Updated: 2025-11-23
Version: 1.0
Status: Approved for Implementation
