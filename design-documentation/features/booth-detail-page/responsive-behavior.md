---
title: Responsive Behavior Matrix
description: Complete responsive specifications for all breakpoints
feature: Booth Detail Page - Responsive Design
last-updated: 2025-11-07
version: 1.0.0
status: approved
---

# Responsive Behavior Matrix

## Overview

This document provides comprehensive responsive design specifications for booth detail pages across all supported breakpoints. The design follows a mobile-first approach with progressive enhancement.

---

## Breakpoint System

### Defined Breakpoints

```css
/* Mobile First Approach */
:root {
  --breakpoint-mobile: 0px;      /* 320px - 767px */
  --breakpoint-tablet: 768px;    /* 768px - 1023px */
  --breakpoint-desktop: 1024px;  /* 1024px - 1439px */
  --breakpoint-wide: 1440px;     /* 1440px+ */
}
```

### Media Query Mixins

```css
/* Mobile (default styles, no media query needed) */

/* Tablet and up */
@media (min-width: 768px) {
  /* Tablet styles */
}

/* Desktop and up */
@media (min-width: 1024px) {
  /* Desktop styles */
}

/* Wide screens */
@media (min-width: 1440px) {
  /* Wide screen styles */
}

/* Tablet only */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Tablet-specific overrides */
}

/* Mobile only */
@media (max-width: 767px) {
  /* Mobile-specific overrides */
}
```

---

## Complete Responsive Matrix

### Page Container

| Breakpoint | Max Width | Padding | Grid Gaps |
|------------|-----------|---------|-----------|
| **Mobile** (<768px) | 100% | 16px | 16px vert / 16px horiz |
| **Tablet** (768-1023px) | 100% | 24px | 24px vert / 16px horiz |
| **Desktop** (1024-1439px) | 1400px | 32px 24px | 24px vert / 16px horiz |
| **Wide** (1440px+) | 1400px | 32px 24px | 24px vert / 16px horiz |

```css
.booth-container {
  width: 100%;
  margin: 0 auto;
  padding: 16px;
}

@media (min-width: 768px) {
  .booth-container {
    padding: 24px;
  }
}

@media (min-width: 1024px) {
  .booth-container {
    max-width: 1400px;
    padding: 32px 24px;
  }
}
```

---

### Section-by-Section Responsive Behavior

## 1. BoothHeader

### Desktop (1024px+)
```css
.booth-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 24px;
  align-items: center;
  padding: 32px;
  min-height: 160px;
}

.booth-header-logo {
  width: 80px;
  height: 80px;
}

.booth-header-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.booth-header-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.booth-header-cta {
  padding: 12px 32px;
  font-size: 16px;
}
```

### Tablet (768-1023px)
```css
@media (max-width: 1023px) and (min-width: 768px) {
  .booth-header {
    gap: 20px;
    padding: 24px;
    min-height: 140px;
  }

  .booth-header-logo {
    width: 64px;
    height: 64px;
  }

  .booth-header-actions {
    flex-direction: column;
    gap: 8px;
  }

  .booth-header-cta {
    padding: 10px 24px;
    font-size: 15px;
  }
}
```

### Mobile (<768px)
```css
@media (max-width: 767px) {
  .booth-header {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 24px;
    text-align: center;
  }

  .booth-header-logo {
    width: 64px;
    height: 64px;
    margin: 0 auto;
  }

  .booth-header-content {
    gap: 12px;
  }

  .booth-header-title {
    font-size: 24px;
    line-height: 32px;
  }

  .booth-header-tagline {
    font-size: 16px;
    line-height: 24px;
  }

  .booth-header-actions {
    flex-direction: column;
    gap: 12px;
  }

  .booth-header-cta {
    width: 100%;
    padding: 14px 24px;
    font-size: 16px;
  }
}
```

---

## 2. VideoSection

### Responsive Sizing

| Breakpoint | Grid Column | Height | Aspect Ratio |
|------------|-------------|--------|--------------|
| Desktop | span 4 | 500px | Auto |
| Tablet | span 12 | 400px | 16:9 |
| Mobile | span 12 | 300px | 16:9 |

```css
.video-section {
  grid-column: 1 / 5; /* span 4 on desktop */
  height: 500px;
  border-radius: 8px;
}

@media (max-width: 1023px) {
  .video-section {
    grid-column: 1 / -1; /* full width */
    height: 400px;
  }
}

@media (max-width: 767px) {
  .video-section {
    height: 300px;
  }

  .video-play-button {
    width: 64px;
    height: 64px;
  }

  .video-play-button svg {
    width: 24px;
    height: 24px;
  }
}
```

---

## 3. EngagementActivity (Platinum)

### Responsive Layout

| Breakpoint | Grid Column | Height | Padding |
|------------|-------------|--------|---------|
| Desktop | span 8 | 500px | 32px |
| Tablet | span 12 | 450px | 24px |
| Mobile | span 12 | 350px | 20px |

```css
.engagement-activity {
  grid-column: 5 / -1; /* span 8 on desktop */
  height: 500px;
  padding: 32px;
}

@media (max-width: 1023px) {
  .engagement-activity {
    grid-column: 1 / -1; /* full width */
    height: 450px;
    padding: 24px;
  }
}

@media (max-width: 767px) {
  .engagement-activity {
    height: 350px;
    padding: 20px;
  }

  .engagement-activity-title {
    font-size: 20px;
    line-height: 28px;
  }

  .engagement-activity-description {
    font-size: 14px;
    line-height: 22px;
  }

  .activity-cta {
    width: 100%;
    padding: 12px 24px;
    font-size: 16px;
  }

  /* Reduce decorative blob sizes */
  .engagement-activity::before,
  .engagement-activity::after {
    display: none; /* Hide on mobile for performance */
  }
}
```

---

## 4. ResourceCards

### Responsive Grid Strategy

**Desktop (1024px+)**: 6x6 mosaic grid with variable card sizes
**Tablet (768-1023px)**: 3-column equal grid
**Mobile (<768px)**: Single column stack with horizontal cards

```css
/* Desktop */
.resource-cards-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 12px;
  height: 450px;
  padding: 20px;
}

/* Tablet */
@media (max-width: 1023px) and (min-width: 768px) {
  .resource-cards-container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    height: auto;
    min-height: 400px;
    gap: 16px;
    padding: 16px;
  }

  /* Reset all cards to span 1 column/row */
  .resource-card {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
    aspect-ratio: 1 / 1;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .resource-cards-container {
    grid-template-columns: 1fr;
    gap: 12px;
    height: auto;
    padding: 16px;
  }

  .resource-card {
    grid-column: 1 !important;
    grid-row: auto !important;
    aspect-ratio: auto;
    flex-direction: row; /* Horizontal layout */
    gap: 12px;
    padding: 12px;
  }

  .resource-icon-container {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }

  .resource-icon {
    width: 20px;
    height: 20px;
  }

  .resource-card-content {
    flex: 1;
    min-width: 0;
  }

  .resource-title {
    font-size: 14px;
    line-height: 20px;
    -webkit-line-clamp: 2;
  }

  .resource-description {
    font-size: 12px;
    line-height: 18px;
    -webkit-line-clamp: 2;
  }
}
```

---

## 5. SessionSlides (Platinum)

### Responsive Adjustments

| Breakpoint | Grid Column | Height | Features |
|------------|-------------|--------|----------|
| Desktop | span 6 | 450px | Full controls |
| Tablet | span 6 | 400px | Full controls |
| Mobile | span 12 | 350px | Simplified header |

```css
.session-slides {
  grid-column: 7 / -1; /* span 6 on desktop */
  height: 450px;
  padding: 20px;
}

@media (max-width: 1023px) {
  .session-slides {
    grid-column: 7 / -1; /* maintain half width on tablet */
    height: 400px;
    padding: 16px;
  }
}

@media (max-width: 767px) {
  .session-slides {
    grid-column: 1 / -1; /* full width */
    height: 350px;
    padding: 12px;
  }

  .slides-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .slides-title {
    font-size: 16px;
  }

  .slides-metadata {
    flex-direction: column;
    gap: 4px;
    font-size: 11px;
  }

  .fullscreen-toggle {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 36px;
    height: 36px;
  }
}
```

---

## 6. CompanyStory (About Us)

### Responsive Text & Layout

| Breakpoint | Grid Column | Height | Line Clamp |
|------------|-------------|--------|------------|
| Desktop | span 8 | 220px | 4 lines |
| Tablet | span 12 | auto | No limit |
| Mobile | span 12 | auto | No limit |

```css
.company-story {
  grid-column: 1 / 9; /* span 8 on desktop */
  height: 220px;
  padding: 24px;
}

.story-description {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 1023px) {
  .company-story {
    grid-column: 1 / -1; /* full width */
    height: auto;
    padding: 20px;
  }

  .story-description {
    -webkit-line-clamp: unset;
  }
}

@media (max-width: 767px) {
  .company-story {
    padding: 20px;
  }

  .story-title {
    font-size: 18px;
  }

  .story-description {
    font-size: 15px;
    line-height: 26px;
  }

  .quick-facts {
    flex-direction: column;
    gap: 12px;
  }

  .quick-fact {
    font-size: 13px;
  }
}
```

---

## 7. ContactInfo

### Responsive Stacking

| Breakpoint | Grid Column | Height | Layout |
|------------|-------------|--------|--------|
| Desktop | span 4 | 220px | Vertical compact |
| Tablet | span 12 | auto | Horizontal sections |
| Mobile | span 12 | auto | Vertical stack |

```css
.contact-info {
  grid-column: 9 / -1; /* span 4 on desktop */
  height: 220px;
  padding: 24px;
}

@media (max-width: 1023px) and (min-width: 768px) {
  .contact-info {
    grid-column: 1 / -1; /* full width */
    height: auto;
    padding: 20px;
  }

  .contact-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 24px;
  }

  .social-links {
    justify-content: flex-start;
  }
}

@media (max-width: 767px) {
  .contact-info {
    grid-column: 1 / -1;
    height: auto;
    padding: 20px;
  }

  .contact-title {
    font-size: 18px;
  }

  .contact-item {
    font-size: 14px;
  }

  .contact-item-icon {
    width: 18px;
    height: 18px;
  }

  .social-link {
    width: 44px; /* Minimum touch target */
    height: 44px;
  }

  .internship-info {
    padding-top: 16px;
  }
}
```

---

## Typography Scaling

### Font Size Responsive Adjustments

```css
/* Desktop (Base Sizes) */
:root {
  --header-1: 64px;
  --header-2: 40px;
  --header-3: 32px;
  --header-4: 24px;
  --subheader: 22px;
  --body-1: 20px;
  --body-2: 16px;
  --compact: 14px;
}

/* Tablet Scaling (90%) */
@media (max-width: 1023px) and (min-width: 768px) {
  :root {
    --header-1: 56px;
    --header-2: 36px;
    --header-3: 28px;
    --header-4: 22px;
    --subheader: 20px;
    --body-1: 18px;
    --body-2: 16px;
    --compact: 14px;
  }
}

/* Mobile Scaling (80%) */
@media (max-width: 767px) {
  :root {
    --header-1: 48px;
    --header-2: 32px;
    --header-3: 24px;
    --header-4: 20px;
    --subheader: 18px;
    --body-1: 16px;
    --body-2: 15px;
    --compact: 13px;
  }
}
```

---

## Touch Target Sizing

### Mobile Touch Requirements

**Minimum Touch Target**: 44px × 44px (WCAG 2.1 Level AAA)

```css
/* Ensure all interactive elements meet minimum size */
@media (max-width: 767px) {
  button,
  a,
  input,
  select,
  textarea {
    min-height: 44px;
    min-width: 44px;
  }

  /* Buttons with text should be wider */
  .btn {
    min-height: 48px;
    padding: 12px 24px;
  }

  /* Social links */
  .social-link {
    width: 44px;
    height: 44px;
  }

  /* Icon buttons */
  .icon-button {
    width: 44px;
    height: 44px;
    padding: 10px;
  }
}
```

---

## Image & Media Optimization

### Responsive Images

```css
/* Responsive image loading */
.booth-logo {
  width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 767px) {
  .booth-logo {
    max-width: 64px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .booth-logo {
    max-width: 72px;
  }
}

@media (min-width: 1024px) {
  .booth-logo {
    max-width: 80px;
  }
}
```

### Video Aspect Ratios

```css
/* Maintain 16:9 aspect ratio across breakpoints */
.video-container {
  position: relative;
  width: 100%;
}

/* Fixed height on desktop */
@media (min-width: 1024px) {
  .video-container {
    height: 500px;
  }
}

/* Aspect ratio on smaller screens */
@media (max-width: 1023px) {
  .video-container {
    aspect-ratio: 16 / 9;
    height: auto;
  }
}
```

---

## Navigation & Scrolling

### Scroll Behavior

```css
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

### Sticky Header (if applicable)

```css
@media (min-width: 1024px) {
  .booth-header-sticky {
    position: sticky;
    top: 0;
    z-index: 100;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}

/* Don't make sticky on mobile (saves screen space) */
@media (max-width: 1023px) {
  .booth-header-sticky {
    position: static;
  }
}
```

---

## Performance Considerations

### Mobile Performance Optimizations

```css
/* Reduce animation complexity on mobile */
@media (max-width: 767px) {
  /* Disable expensive animations */
  .animate-float,
  .animate-gradient,
  .platinum-border::before {
    animation: none;
  }

  /* Simplify shadows */
  .card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  /* Reduce backdrop blur */
  .backdrop-blur {
    backdrop-filter: none;
    background: rgba(255, 255, 255, 0.95);
  }
}
```

### Lazy Loading Breakpoints

```typescript
// Load lower resolution images on mobile
const getImageSrc = (baseUrl: string, breakpoint: string) => {
  if (breakpoint === 'mobile') {
    return `${baseUrl}?w=800&q=70` // 800px wide, 70% quality
  } else if (breakpoint === 'tablet') {
    return `${baseUrl}?w=1200&q=80` // 1200px wide, 80% quality
  } else {
    return `${baseUrl}?w=1600&q=90` // 1600px wide, 90% quality
  }
}
```

---

## Print Styles

### Print-Friendly Layout

```css
@media print {
  .booth-container {
    max-width: 100%;
    padding: 0;
  }

  .booth-grid {
    display: block;
  }

  .booth-section {
    page-break-inside: avoid;
    margin-bottom: 20px;
  }

  /* Hide interactive elements */
  .btn,
  .social-link,
  .fullscreen-toggle {
    display: none;
  }

  /* Flatten videos to thumbnails */
  .video-iframe {
    display: none;
  }

  .video-thumbnail {
    display: block !important;
  }

  /* Ensure text is readable */
  body {
    color: black;
    background: white;
  }

  /* Show links inline */
  a[href^="http"]::after {
    content: " (" attr(href) ")";
    font-size: 12px;
    color: #666;
  }
}
```

---

## Testing Matrix

### Device Testing Checklist

**Mobile Devices:**
- [ ] iPhone SE (375px width)
- [ ] iPhone 12/13 Pro (390px width)
- [ ] iPhone 14 Pro Max (428px width)
- [ ] Samsung Galaxy S21 (360px width)
- [ ] Google Pixel 5 (393px width)

**Tablet Devices:**
- [ ] iPad Mini (768px width)
- [ ] iPad Air (820px width)
- [ ] iPad Pro 11" (834px width)
- [ ] iPad Pro 12.9" (1024px width)
- [ ] Surface Pro (912px width)

**Desktop Sizes:**
- [ ] 1024px (small laptop)
- [ ] 1280px (standard laptop)
- [ ] 1440px (large laptop)
- [ ] 1920px (desktop monitor)
- [ ] 2560px (4K monitor)

### Orientation Testing

```css
/* Landscape mobile specific */
@media (max-width: 767px) and (orientation: landscape) {
  .booth-header {
    min-height: auto;
    padding: 16px;
  }

  .video-section {
    height: 250px;
  }

  .engagement-activity {
    height: 300px;
  }
}
```

---

## Responsive Testing Tools

### Browser DevTools

1. Chrome DevTools Device Toolbar
2. Firefox Responsive Design Mode
3. Safari Web Inspector
4. Microsoft Edge DevTools

### Testing Commands

```bash
# Test at specific viewport widths
# Mobile
npm run dev -- --port 3000 & open "http://localhost:3000?viewport=375x667"

# Tablet
npm run dev -- --port 3000 & open "http://localhost:3000?viewport=768x1024"

# Desktop
npm run dev -- --port 3000 & open "http://localhost:3000?viewport=1440x900"
```

---

## Implementation Notes

1. **Mobile-First CSS**: Write base styles for mobile, then use `min-width` media queries for larger screens
2. **Container Queries**: Consider using CSS Container Queries for component-level responsiveness
3. **Viewport Units**: Be cautious with `vh` on mobile (toolbar issues); prefer fixed heights or `svh`
4. **Touch vs Hover**: Use `@media (hover: hover)` to detect hover-capable devices
5. **Responsive Images**: Use `srcset` and `sizes` attributes for optimal image delivery

---

## Related Documentation

- [Bento Grid Layout](./bento-grid-layout.md)
- [Section Component Specifications](./section-specifications.md)
- [Interaction Specifications](./interaction-specifications.md)
- [Accessibility Requirements](./accessibility-requirements.md)
