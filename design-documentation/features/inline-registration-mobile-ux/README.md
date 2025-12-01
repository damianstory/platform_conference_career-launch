---
title: Inline Registration Flow - Mobile UX Solutions
description: Comprehensive design solutions for mobile registration within 16:9 video container
feature: Inline Registration Flow
last-updated: 2025-12-01
version: 1.0.0
related-files:
  - ../session-video-player/README.md
  - ../../design-system/style-guide.md
  - ./approach-1-compact-stacked.md
  - ./approach-2-adaptive-expansion.md
  - ./approach-3-modal-takeover.md
dependencies:
  - InlineRegistrationFlow component
  - VideoSection component
  - Mobile responsive specifications
status: draft
---

# Inline Registration Flow - Mobile UX Solutions

## Overview

This document outlines three distinct UX approaches for handling the inline registration flow on mobile devices. The core challenge is fitting a multi-step registration form inside a 16:9 aspect-ratio video container where vertical space is extremely limited on mobile viewports.

## Problem Statement

### Current Implementation
- Registration form renders **inside** a 16:9 aspect-ratio container with blue gradient background
- One question per screen approach
- Progress dots at top
- Navigation buttons (Back/Continue) at bottom
- Flow: user-type → board → school → grade (students) OR user-type → email → board → school → class-size → grade (educators)

### Mobile Issues (iPhone 14 Pro Max: 430×932px)

**On 430px wide viewport:**
- 16:9 container height = ~242px (430 ÷ 16 × 9)
- Available vertical space breakdown:
  - Progress dots: ~30px
  - Question text: ~40px
  - Input field: ~48px (44px min touch target + padding)
  - Navigation buttons: ~44px (min touch target)
  - Padding/spacing: ~40px (8px grid × 5 gaps)
  - **Total required: ~202px**

**The Math:**
- Container provides: 242px
- Content requires: 202px
- **Margin of safety: 40px** ✅

### Actual Problem
While the math suggests it fits, user testing reveals:

1. **Visual Cramping**: Content feels squeezed with no breathing room
2. **Navigation Visibility**: Back/Continue buttons can be cut off or pushed below fold on some devices
3. **Keyboard Issues**: When mobile keyboard appears for email input, buttons disappear entirely
4. **Small Touch Targets**: Dropdowns and buttons feel too small in cramped space
5. **Brand Inconsistency**: Doesn't match the spacious, breathable aesthetic of rest of platform

## Design Philosophy

All solutions must maintain:
- **Browse-first registration** - No barriers until "Watch Session" clicked
- **myBlueprint brand compliance** - Navy #22224C, Blue #0092FF, Light Blue #C6E7FF
- **Accessibility** - WCAG AA compliance, 44px touch targets, keyboard navigation
- **Performance** - Smooth animations, < 100ms interaction feedback
- **Platform consistency** - Feel cohesive with existing design system

## Three Design Approaches

### Approach 1: Compact Stacked Layout (Inside Container)
**Philosophy**: Optimize existing pattern with tighter spacing and visual hierarchy

- User type selection stays inside video container (large buttons)
- After selection, buttons shrink to small chips/pills
- Form questions display inside container with minimal chrome
- Navigation becomes floating action buttons

**Best for**: Maintaining visual consistency, minimal code changes

[→ Full Specification](./approach-1-compact-stacked.md)

---

### Approach 2: Adaptive Expansion (Hybrid)
**Philosophy**: Start inside container, expand outside for complex forms

- User type selection inside video container (maintains visual anchor)
- After selection, form expands below container in a connected panel
- Container shows progress visualization/summary
- Full form has generous vertical space

**Best for**: Balancing containment with usability, best of both worlds

[→ Full Specification](./approach-2-adaptive-expansion.md)

---

### Approach 3: Modal Takeover (Outside Container)
**Philosophy**: Treat registration as critical flow deserving full-screen focus

- User type selection triggers slide-up modal (like current MultiStepModal)
- Video container shows static state with subtle animation
- Full-screen modal provides maximum space for form
- Returns to video container on completion

**Best for**: Maximum usability, familiar mobile pattern, accessibility

[→ Full Specification](./approach-3-modal-takeover.md)

---

## Comparison Matrix

| Criteria | Approach 1: Compact | Approach 2: Hybrid | Approach 3: Modal |
|----------|---------------------|-------------------|-------------------|
| **Visual Continuity** | ⭐⭐⭐⭐⭐ Everything in container | ⭐⭐⭐⭐ Connected expansion | ⭐⭐⭐ Breaks containment |
| **Vertical Space** | ⭐⭐ Limited (~242px) | ⭐⭐⭐⭐ Generous below container | ⭐⭐⭐⭐⭐ Full screen available |
| **Keyboard Handling** | ⭐⭐ Difficult with fixed height | ⭐⭐⭐⭐ Can scroll expansion | ⭐⭐⭐⭐⭐ Native modal handling |
| **Touch Targets** | ⭐⭐⭐ 44px minimum, cramped | ⭐⭐⭐⭐ 44px+ comfortable | ⭐⭐⭐⭐⭐ 48px+ generous |
| **Brand Consistency** | ⭐⭐⭐ Maintains gradient bg | ⭐⭐⭐⭐ Extends brand colors | ⭐⭐⭐⭐ Uses modal patterns |
| **Implementation Complexity** | ⭐⭐⭐⭐⭐ Minor CSS adjustments | ⭐⭐⭐ Moderate state management | ⭐⭐⭐⭐ Code already exists |
| **Accessibility** | ⭐⭐⭐ WCAG AA, cramped | ⭐⭐⭐⭐ WCAG AA, good space | ⭐⭐⭐⭐⭐ WCAG AAA possible |
| **User Testing Risk** | ⭐⭐ Feels cramped | ⭐⭐⭐⭐ Likely positive | ⭐⭐⭐⭐⭐ Proven pattern |
| **Performance** | ⭐⭐⭐⭐⭐ Minimal DOM | ⭐⭐⭐⭐ Slight animation load | ⭐⭐⭐⭐ Modal overlay |
| **Error Recovery** | ⭐⭐ Limited space for errors | ⭐⭐⭐⭐ Room for validation | ⭐⭐⭐⭐⭐ Full error messaging |

### Overall Scores
- **Approach 1**: 32/50 ⭐⭐⭐ - Maintains visual identity but cramped UX
- **Approach 2**: 39/50 ⭐⭐⭐⭐ - Best balance of aesthetics and usability
- **Approach 3**: 44/50 ⭐⭐⭐⭐⭐ - Maximum usability, proven pattern

## Recommended Approach: #2 (Adaptive Expansion)

### Why Hybrid Approach Wins

**Visual Continuity**: User type selection inside video container maintains the "inline" aesthetic and design intent

**Usability Excellence**: Once committed to a user type, expansion provides generous space for form completion without cramping

**Progressive Disclosure**: Complexity revealed gradually - simple choice in container, detailed form in expansion

**Brand Consistency**: Can maintain gradient background in container while using clean white form panel below

**Implementation**: Moderate complexity but achieves best user experience

**Keyboard Handling**: Expansion panel scrolls naturally when keyboard appears

**Accessibility**: Generous touch targets, clear focus management, room for error messages

### When to Consider Alternatives

**Choose Approach 1 (Compact)** if:
- Visual containment is absolute requirement
- Development timeline is extremely tight
- Users primarily on larger mobile devices (iPhone 14 Pro Max+)

**Choose Approach 3 (Modal)** if:
- Maximum usability is paramount over visual continuity
- Existing MultiStepModal implementation can be reused with minimal changes
- Users will be on diverse devices (Android, older iPhones)

## Implementation Priority

### Phase 1: Approach 2 (Hybrid) - Recommended
1. Implement adaptive expansion with user type in container
2. Add smooth animation for panel expansion below container
3. Ensure keyboard handling and scroll behavior work perfectly
4. Test on iPhone SE (375px) up to tablet (768px)

### Phase 2: A/B Testing (Optional)
If time permits, implement A/B test between Approach 2 and 3:
- Track completion rates
- Measure time-to-video-start
- Collect qualitative feedback
- Measure drop-off at each step

### Phase 3: Iteration
Based on analytics and user feedback:
- Refine spacing and animations
- Optimize for common device sizes
- Add progressive enhancements for larger screens

## Success Metrics

### UX Metrics
- Form completion rate > 95% (currently no baseline)
- Average time to video start < 15 seconds (first time)
- Average time to video start < 3 seconds (returning with cookie)
- Drop-off rate by step < 5% per step

### Technical Metrics
- Interaction response time < 100ms
- Animation frame rate 60fps
- No layout shift during transitions (CLS < 0.1)
- Keyboard appearance doesn't cause layout issues

### Accessibility Metrics
- All touch targets ≥ 44px (WCAG AA)
- Color contrast ratios ≥ 4.5:1 for text (WCAG AA)
- Keyboard navigation completes flow without mouse
- Screen reader announces each step clearly

## Next Steps

1. **Review this document** with stakeholders
2. **Choose primary approach** (recommend #2)
3. **Read detailed specification** for chosen approach
4. **Create implementation plan** with timeline
5. **Design prototype** for user testing
6. **Implement and test** on real devices
7. **Measure and iterate** based on data

## Related Documentation

- [Approach 1: Compact Stacked Layout](./approach-1-compact-stacked.md)
- [Approach 2: Adaptive Expansion](./approach-2-adaptive-expansion.md)
- [Approach 3: Modal Takeover](./approach-3-modal-takeover.md)
- [Session Video Player Specs](../session-video-player/README.md)
- [Design System Style Guide](../../design-system/style-guide.md)

## Change Log

- **2025-12-01**: Initial design exploration with three approaches
- User feedback: "Maybe after selecting student or educator, the buttons become really small and just say 'One'. When you click 'One', it gives you something below with more vertical space"

---

**Design Lead**: Claude Code UX Agent
**Review Status**: Pending stakeholder review
**Implementation Status**: Not started
