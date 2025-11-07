---
title: Booth Detail Page - Design Specifications
description: Complete design specifications for modular booth detail pages with bento grid layout system
feature: Booth Detail Page
last-updated: 2025-11-07
version: 1.0.0
status: approved
related-files:
  - ./tier-differentiation.md
  - ./bento-grid-layout.md
  - ./section-specifications.md
  - ./responsive-behavior.md
  - ./interaction-specifications.md
  - ./accessibility-requirements.md
dependencies:
  - Career Launch Design System (design-tokens.css)
  - Tailwind CSS configuration
  - TypeScript booth data interfaces
---

# Booth Detail Page - Design Specifications

## Executive Summary

This document provides comprehensive design specifications for implementing a modular booth detail page system for the Career Launch Platform's virtual expo hall. The system uses a **bento grid layout** with **tier-based content differentiation** to create immersive sponsor experiences.

### Key Design Principles

1. **Modular Architecture** - 7 distinct section components that compose into cohesive booth experiences
2. **Tier Differentiation** - Platinum booths receive premium features (7 sections) vs Standard booths (5 sections)
3. **Bento Grid System** - 12-column responsive grid with asymmetric layouts for visual interest
4. **Brand Compliance** - Strict adherence to myBlueprint colors, typography, and 8px spacing grid
5. **Performance First** - Lazy loading, efficient rendering, and progressive enhancement
6. **Accessibility** - WCAG 2.1 AA compliance with keyboard navigation and screen reader support

### Timeline Context

**Launch Date**: December 1-5, 2025
**Development Timeline**: 1-2 weeks (URGENT)
**Design Phase**: Days 1-2

---

## Tier Differentiation Strategy

### Platinum Booths (27 booths) - 7 Sections

**Premium sections included:**
1. BoothHeader (full width)
2. VideoSection (4 cols)
3. **EngagementActivity** (8 cols) - PLATINUM EXCLUSIVE
4. ResourceCards (6 cols)
5. **SessionSlides** (6 cols) - PLATINUM EXCLUSIVE
6. CompanyStory (About Us - 8 cols)
7. ContactInfo (4 cols)

**Rationale:**
- Interactive engagement activities provide unique value proposition
- Session slides showcase thought leadership and educational content
- Premium positioning justifies additional investment in content creation
- Creates clear differentiation for sponsorship tiers

### Standard Booths (2 booths) - 5 Sections

**Core sections included:**
1. BoothHeader (full width)
2. VideoSection (4 cols)
3. ResourceCards (6 cols)
4. CompanyStory (About Us - 8 cols)
5. ContactInfo (4 cols)

**What's excluded:**
- EngagementActivity (requires custom interactive content)
- SessionSlides (requires presentation materials)

**Rationale:**
- All essential information still accessible
- Focus on core value: video, resources, story, contact
- Reduces content creation burden for standard sponsors
- Maintains professional appearance with simpler structure

---

## Quick Navigation

- **Tier Strategy**: [./tier-differentiation.md](./tier-differentiation.md)
- **Layout Architecture**: [./bento-grid-layout.md](./bento-grid-layout.md)
- **Section Components**: [./section-specifications.md](./section-specifications.md)
- **Responsive Behavior**: [./responsive-behavior.md](./responsive-behavior.md)
- **Interactions & Animations**: [./interaction-specifications.md](./interaction-specifications.md)
- **Accessibility**: [./accessibility-requirements.md](./accessibility-requirements.md)
- **Developer Handoff**: [./implementation.md](./implementation.md)

---

## Design System Integration

### Colors (from design-tokens.css)
```css
--primary-blue: #0092FF     /* CTAs, interactive elements */
--brand-navy: #22224C       /* Text, headers */
--light-blue: #C6E7FF       /* Backgrounds, highlights */
--off-white: #F6F6FF        /* Section backgrounds */
--neutral-1 to --neutral-6  /* Blue-gray palette for hierarchy */
```

### Typography (Open Sans fallback for Museo Sans)
```css
Header 1: 64px / 80px, black (900)
Header 2: 40px / 56px, black (900)
Header 3: 32px / 48px, black (900)
Header 4: 24px / 36px, black (900)
Subheader: 22px / 32px, medium (500)
Body 1: 20px / 32px, regular (400)
Body 2: 16px / 28px, regular (400)
Compact: 14px / 20px, regular (400)
```

### Spacing (8px grid system)
```
space-1: 8px
space-2: 16px
space-3: 24px (default gap between sections)
space-4: 32px
space-5: 40px
space-6: 48px
```

### Border Radius
```
radius-md: 8px (cards, sections)
radius-lg: 12px (booth header, major containers)
```

### Shadows
```
shadow-sm: 0 1px 2px rgba(34, 34, 76, 0.05)
shadow-md: 0 4px 6px rgba(34, 34, 76, 0.1)
shadow-lg: 0 10px 15px rgba(34, 34, 76, 0.15)
```

---

## Page Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Navigation                          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │         BOOTH HEADER (12 cols, full width)        │ │
│  │    Logo | Title | Tagline | Primary CTA |         │ │
│  │              Secondary CTA                         │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  ┌─────────────┐ ┌───────────────────────────────────┐ │
│  │   VIDEO     │ │   ENGAGEMENT ACTIVITY (Platinum)  │ │
│  │  (4 cols)   │ │         (8 cols)                  │ │
│  │  500px ht   │ │        500px ht                   │ │
│  └─────────────┘ └───────────────────────────────────┘ │
│                                                         │
│  ┌─────────────────────────┐ ┌───────────────────────┐ │
│  │   RESOURCE CARDS        │ │   SESSION SLIDES      │ │
│  │      (6 cols)           │ │   (6 cols, Platinum)  │ │
│  │      450px ht           │ │      450px ht         │ │
│  └─────────────────────────┘ └───────────────────────┘ │
│                                                         │
│  ┌───────────────────────────────────┐ ┌─────────────┐ │
│  │      COMPANY STORY (About Us)     │ │   CONTACT   │ │
│  │           (8 cols)                │ │  (4 cols)   │ │
│  │          220px ht                 │ │  220px ht   │ │
│  └───────────────────────────────────┘ └─────────────┘ │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                       Footer                            │
└─────────────────────────────────────────────────────────┘
```

**Standard Booth Layout**: Same structure minus EngagementActivity and SessionSlides sections

---

## Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1

**Optimization Strategies:**
- Lazy load video iframes (only load when scrolled into view)
- Progressive image loading with blur-up placeholders
- Defer non-critical JavaScript
- Use CSS transforms for animations (GPU acceleration)
- Skeleton screens for loading states

---

## Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions (macOS and iOS)
- **Edge**: Latest 2 versions

**Progressive Enhancement:**
- Core functionality works without JavaScript
- Animations gracefully degrade with `prefers-reduced-motion`
- Hover effects have touch-friendly alternatives

---

## Next Steps for Developers

1. **Read Layout Specifications**: [./bento-grid-layout.md](./bento-grid-layout.md) - Exact grid column spans and heights
2. **Review Section Components**: [./section-specifications.md](./section-specifications.md) - Detailed specs for all 7 sections
3. **Understand Responsive Behavior**: [./responsive-behavior.md](./responsive-behavior.md) - Breakpoint adjustments
4. **Implement Interactions**: [./interaction-specifications.md](./interaction-specifications.md) - Animations and transitions
5. **Verify Accessibility**: [./accessibility-requirements.md](./accessibility-requirements.md) - WCAG compliance checklist
6. **Follow Implementation Guide**: [./implementation.md](./implementation.md) - Developer handoff notes

---

## Success Criteria

- All booth content sections render correctly on desktop, tablet, and mobile
- Platinum vs Standard tier differentiation is visually clear
- Page loads in under 2.5s on 3G connection
- WCAG 2.1 AA compliance verified
- All interactive elements keyboard accessible
- Video playback works across all supported browsers
- Smooth 60fps animations on modern devices

---

## Change Log

| Date | Version | Changes |
|------|---------|---------|
| 2025-11-07 | 1.0.0 | Initial comprehensive design specifications |

---

## Contact

For design questions or clarifications:
- **Product Manager**: Damian Matheson (damian.matheson@myblueprint.ca)
- **Design System**: Refer to `/styles/design-tokens.css`
- **Component Examples**: See `/components/expo/BoothCard.tsx` for tier styling patterns
