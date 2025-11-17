---
title: Dual User Type Registration Modal
description: UX/UI design recommendations for supporting both educator and student paths in the session registration modal
feature: dual-user-registration
last-updated: 2025-11-17
version: 1.0.0
related-files:
  - ./user-journey.md
  - ./screen-states.md
  - ./interactions.md
  - ./implementation.md
dependencies:
  - /components/registration/BottomDrawerModal.tsx
  - /lib/hooks/useRegistrationForm.ts
status: draft
---

# Dual User Type Registration Modal

## Executive Summary

This document provides comprehensive UX/UI design recommendations for extending the existing registration modal to support two distinct user types: **Educators** (existing flow) and **Students** (new flow). The goal is to create a seamless experience that feels natural for both user types while collecting appropriate data for each.

## Business Context

School boards have requested the ability for students to watch sessions independently during:
- Virtual professional development days
- Remote learning scenarios
- Independent study periods
- Home-based career exploration

This requires the modal to branch based on user type, with students providing minimal, non-PII data.

## Design Philosophy

The dual-user modal adheres to the platform's core principles:
- **Browse-first registration**: No barriers to content exploration
- **Minimal friction**: Collect only what's necessary for each user type
- **Privacy-conscious**: Students provide no personally identifiable information
- **Brand consistent**: Uses myBlueprint design system throughout

## Key Design Decisions

### 1. Entry Point: Rename to "Watch Session"
**Recommendation**: Change button from "Watch with Your Class" to **"Watch Session"**

**Rationale**:
- More inclusive, works for both educators and students
- Removes assumption about class context
- Action-focused, clear intent
- Shorter text improves button appearance

### 2. User Type Selection: Card-Based Choice
**Recommendation**: Large clickable cards with icons, not radio buttons

**Rationale**:
- Feels like a branching choice, not a form question
- Higher affordance with clear visual hierarchy
- Accessible tap targets (cards are 100% of available width)
- Professional yet friendly aesthetic

### 3. Progressive Modal States
The modal employs a multi-step wizard pattern:
1. **Step 1**: User type selection (new initial state)
2. **Step 2a**: Educator form (6 fields, existing)
3. **Step 2b**: Student form (3 fields, simplified)
4. **Step 3**: Video playback begins

### 4. Cookie Strategy
- **Educators**: Full cookie persistence (7 days) with all form data
- **Students**: No cookie storage (privacy-first approach)

### 5. Mobile-First Student Experience
**Critical**: Students are likely to access the platform from mobile devices. The student path includes comprehensive mobile optimizations:

**Touch Optimization**:
- Minimum 48px touch targets (above WCAG 44px minimum)
- Font size 16px on inputs (prevents iOS auto-zoom)
- Generous spacing between fields (20px gap)
- Full-width stacked buttons in footer (easy thumb reach)

**Keyboard Handling**:
- Auto-scroll to keep focused field visible above keyboard
- Uses `visualViewport` API for keyboard detection
- No form obscuring when select dropdowns open

**Network Resilience**:
- Offline detection with banner notification
- Loading spinners for school list population
- Retry mechanism for failed submissions
- Form data preserved during network issues

**Gestures**:
- Swipe-down-to-close on modal drawer handle
- Momentum scrolling with iOS rubber-band effect contained
- Haptic feedback support (where available)

**Safe Areas**:
- iOS home indicator padding (safe-area-inset-bottom)
- Footer buttons positioned for one-handed use

See [implementation.md](./implementation.md#mobile-specific-implementation) for complete code patterns.

## Quick Navigation

- [User Journey Mapping](./user-journey.md) - Complete flow diagrams for both paths
- [Screen States & Specifications](./screen-states.md) - Detailed visual specs for all states
- [Interaction Patterns](./interactions.md) - Animations, transitions, and feedback
- [Implementation Guide](./implementation.md) - Developer handoff and technical notes

## Success Metrics

- **Form completion rate**: Target 95% (maintain current baseline)
- **Time to video**:
  - First-time educator: ~25 seconds (was ~20s, +5s for type selection)
  - Returning educator: ~3 seconds (was ~1s, +2s for type selection)
  - Student: ~12 seconds (faster than educator due to fewer fields)
- **User type selection accuracy**: Monitor any "back" navigation to correct selection

## Accessibility Highlights

- All interactive elements keyboard navigable
- WCAG 2.1 AA color contrast compliance
- Clear focus indicators using existing design system
- Screen reader optimized with ARIA labels
- Respects `prefers-reduced-motion` preference
