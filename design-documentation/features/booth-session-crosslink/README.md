---
title: Booth-to-Session Cross-Link Feature
description: Full-width banner component enabling seamless navigation from sponsor booths to their associated career sessions
feature: booth-session-crosslink
last-updated: 2025-11-22
version: 1.0.0
related-files:
  - ../../../components/booths/SessionCrossLink.tsx
  - ../../../types/booth.ts
  - user-journey.md
  - screen-states.md
  - implementation.md
dependencies:
  - Existing booth layout structure
  - Session detail page navigation
  - myBlueprint design system
status: approved
---

# Booth-to-Session Cross-Link Feature

## Overview

This feature creates a seamless connection between sponsor booths and their associated career sessions through a prominent full-width banner component. The component appears on booth detail pages when an organization has presented a session at the conference, driving educators from booth exploration to session viewing.

## Problem Statement

**Current Gap**: Educators browsing sponsor booths may not realize that some organizations have also presented career sessions at the conference. This disconnection creates missed opportunities for:
- Session views from engaged booth visitors
- Deeper engagement with sponsoring organizations
- Comprehensive understanding of sponsor contributions to the platform

**Impact**: Organizations investing in both booth sponsorship and session presentation lose potential audience reach, while educators miss valuable educational content from organizations they're already interested in.

## Solution

A **single-session cross-link banner** positioned between the Resources section and About Us/Get in Touch sections. The banner:
- Displays prominently without overwhelming booth content
- Uses familiar conference schedule design language (block badges, metadata)
- Provides one-click navigation to the session detail page
- Works on both Platinum and Standard tier booths
- Maintains responsive design across all breakpoints

## Key Design Decisions

### 1. Placement Strategy

**Location**: Between Resources section and About Us/Get in Touch sections

**Rationale**:
- Creates natural content progression: promotional video → resources → **session discovery** → organizational context → contact
- Acts as a "value bridge" connecting practical content (resources) with relationship-building content (about/contact)
- Sufficient visual prominence without competing with booth header or video
- Late enough in scroll depth to capture engaged visitors
- Early enough that it's not buried at bottom of page

**Alternative Considered**: Placing below BoothHeader as first content
- **Rejected**: Too aggressive, interrupts video-first browsing flow
- Would compete with video section for attention
- Feels like exit prompt before user engages with booth content

### 2. Single Session Constraint

**Decision**: Design for exactly 1 session per booth (no multi-session support)

**Rationale**:
- Business constraint: Each booth has max 1 associated session
- Simplifies UX: No carousel/selection complexity needed
- Enables full-width banner treatment with generous spacing
- Allows larger typography and touch targets

### 3. Visual Treatment

**Decision**: Elevated card-style banner with subtle gradient background

**Rationale**:
- **Gradient** (blue-50 to white): Creates visual separation without overwhelming
- **Shadow on hover**: Provides interactive feedback (clickable surface)
- **Block badge integration**: Leverages existing conference schedule visual language
- **Professional aesthetic**: Matches myBlueprint brand standards
- **Not a "promotional banner"**: Feels like organic platform functionality, not advertising

### 4. Interaction Model

**Decision**: Entire banner clickable on desktop, button-only on mobile

**Rationale**:
- **Desktop**: Larger touch area reduces friction, common pattern for card-based navigation
- **Mobile**: Button-only prevents accidental activation during scrolling
- **Accessibility**: Entire component wrapped in semantic `<a>` tag with descriptive ARIA label
- **Feedback**: Shadow elevation on hover clearly communicates interactivity

### 5. Content Strategy

**Decision**: Emphasize organizational connection over generic session promotion

**Rationale**:
- Label: "CAREER SESSION FROM THIS ORGANIZATION" (not "FEATURED SESSION")
  - Makes explicit connection to current booth context
  - Reduces cognitive load: "This is their session" vs. "Why is this here?"
- CTA: "Watch Session" (not "View Details" or "Learn More")
  - Action-focused, sets clear expectation
  - Shorter text works better on mobile
  - Aligns with primary user goal (watching video)

## Feature Scope

### In Scope
- ✅ Single session cross-link banner component
- ✅ Full-width responsive layout (mobile through desktop)
- ✅ Integration with existing booth detail pages (Platinum and Standard tiers)
- ✅ Block badge visual system integration
- ✅ Hover state interactions and accessibility features
- ✅ Type definitions for booth-session associations
- ✅ Session thumbnail display (desktop only)

### Out of Scope
- ❌ Multi-session carousels or grids
- ❌ Session filtering or search within booth
- ❌ Inline video playback within booth page
- ❌ Session registration from booth page (must navigate to session detail)
- ❌ Reverse link (session page → booth page) - handled by existing OrganizationSection component

## Success Metrics

### Primary Metrics
- **Click-through rate**: % of booth visitors who click session cross-link
  - **Target**: 15-20% CTR (benchmark: related content modules average 12-18%)
- **Session views from booths**: Count of session views with referrer = booth page
  - **Target**: 10% of total session views originate from booth navigation

### Secondary Metrics
- **Time on booth page**: Does session link increase or decrease average time?
  - **Hypothesis**: May decrease (users find content faster), which is positive
- **Booth-to-session conversion**: % of users who visit both booth and session
  - **Target**: 25% of booth visitors also watch the session

### Validation Criteria
- Component renders correctly on all booth pages with `associatedSessionSlug` field
- Component does not render on booths without associated sessions (graceful degradation)
- All accessibility standards met (WCAG AA keyboard navigation, screen reader support)
- Mobile performance: No layout shift, smooth loading

## Implementation Status

- [x] Component created (`/components/booths/SessionCrossLink.tsx`)
- [x] Type definitions updated (`/types/booth.ts`)
- [ ] Sample booth data updated with `associatedSessionSlug` values
- [ ] Integration into booth detail page layout
- [ ] Session data helper function for slug-based lookup
- [ ] Responsive design testing across breakpoints
- [ ] Accessibility testing (keyboard, screen reader)

## Related Documentation

- **User Journey**: [user-journey.md](./user-journey.md) - Complete user flow from booth to session
- **Screen States**: [screen-states.md](./screen-states.md) - All visual states and responsive behaviors
- **Implementation Guide**: [implementation.md](./implementation.md) - Developer integration instructions
- **Component Code**: [SessionCrossLink.tsx](../../../components/booths/SessionCrossLink.tsx)

## Questions & Considerations

### Open Questions
1. Should session thumbnail image be required or optional?
   - **Current**: Optional, hidden on mobile
   - **Consideration**: Adds visual interest but increases layout complexity
2. Should we track hover events or just clicks?
   - **Current**: Click tracking only via navigation
   - **Consideration**: Hover tracking could measure interest vs. commitment

### Future Enhancements
- Analytics dashboard showing booth-to-session conversion funnel
- A/B testing different CTA copy variants
- "You watched this session" indicator for returning users
- Session completion badge ("Completed" or "18 minutes watched")

## Last Updated

**2025-11-22** - Initial feature documentation created with component specifications and integration guidance.
