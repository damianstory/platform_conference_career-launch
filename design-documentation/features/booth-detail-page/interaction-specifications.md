---
title: Interaction & Animation Specifications
description: Complete specifications for animations, transitions, and interactive behaviors
feature: Booth Detail Page - Interactions
last-updated: 2025-11-07
version: 1.0.0
status: approved
---

# Interaction & Animation Specifications

## Overview

This document specifies all animations, transitions, and interactive behaviors for booth detail page components. All animations use performance-optimized CSS transforms and respect user motion preferences.

---

## Animation Principles

### Core Guidelines

1. **Purpose-Driven** - Every animation serves a functional purpose (feedback, guidance, delight)
2. **Performance-First** - Use `transform` and `opacity` for GPU acceleration
3. **Consistent Timing** - Use standardized durations and easing functions
4. **Accessible** - Respect `prefers-reduced-motion` preference
5. **Subtle** - Animations enhance without distracting

### Timing Scale

| Duration | Use Case | Examples |
|----------|----------|----------|
| **100-150ms** | Micro-interactions | Button hover, focus indicators |
| **200-300ms** | State changes | Card hover, dropdown open |
| **400-500ms** | Local transitions | Modal open, section reveal |
| **600-800ms** | Page transitions | Loading screens, onboarding |

### Easing Functions

```css
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);     /* Material Design standard */
--ease-accelerate: cubic-bezier(0.4, 0, 1, 1);     /* Speed up (exit) */
--ease-decelerate: cubic-bezier(0, 0, 0.2, 1);     /* Slow down (entrance) */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Playful bounce */
```

---

## Page Load Animations

### Initial Page Load

**Sequence:**
1. Header fades in from top (0-300ms)
2. Sections stagger in from bottom (100ms delay between each)
3. Total duration: ~800ms

```css
@keyframes fadeInFromTop {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* BoothHeader */
.booth-header {
  animation: fadeInFromTop 0.4s var(--ease-decelerate) forwards;
}

/* Sections with stagger */
.booth-section {
  opacity: 0;
  animation: fadeInUp 0.6s var(--ease-decelerate) forwards;
}

.booth-section:nth-child(2) { animation-delay: 0.1s; }
.booth-section:nth-child(3) { animation-delay: 0.2s; }
.booth-section:nth-child(4) { animation-delay: 0.3s; }
.booth-section:nth-child(5) { animation-delay: 0.4s; }
.booth-section:nth-child(6) { animation-delay: 0.5s; }
.booth-section:nth-child(7) { animation-delay: 0.6s; }
```

---

## Section-Specific Interactions

### 1. BoothHeader Interactions

**Logo Hover:**
```css
.booth-header-logo {
  transition: transform 0.2s var(--ease-standard);
}

.booth-header-logo:hover {
  transform: scale(1.05);
}
```

**Primary CTA Button:**
```css
.btn-primary {
  transition: all 0.2s var(--ease-standard);
  position: relative;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 146, 255, 0.35);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 146, 255, 0.25);
}

/* Ripple effect on click */
.btn-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: white;
  opacity: 0;
  transform: scale(0);
  transition: transform 0.4s, opacity 0.4s;
}

.btn-primary:active::after {
  opacity: 0.3;
  transform: scale(1);
  transition: none;
}
```

**Secondary CTA Button:**
```css
.btn-secondary {
  transition: all 0.2s var(--ease-standard);
}

.btn-secondary:hover {
  transform: translateY(-2px);
  background: var(--light-blue);
  border-color: var(--brand-navy);
  color: var(--brand-navy);
}

.btn-secondary:active {
  transform: translateY(0);
}
```

---

### 2. VideoSection Interactions

**Play Button Hover:**
```css
.video-play-button {
  transition: all 0.3s var(--ease-standard);
}

.video-play-button:hover {
  transform: scale(1.15);
  background: var(--brand-navy);
  box-shadow: 0 8px 24px rgba(0, 146, 255, 0.5);
}

.video-play-button:active {
  transform: scale(1.05);
}
```

**Play Button Icon Pulse:**
```css
@keyframes iconPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.video-play-button svg {
  animation: iconPulse 2s var(--ease-standard) infinite;
}

.video-play-button:hover svg {
  animation: none;
}
```

**Thumbnail to Video Transition:**
```css
@keyframes videoTransition {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.video-iframe {
  animation: videoTransition 0.4s var(--ease-decelerate);
}

.video-thumbnail {
  transition: opacity 0.3s;
}

.video-thumbnail.exiting {
  opacity: 0;
}
```

**Loading Spinner:**
```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.video-loading-spinner {
  animation: spin 1s linear infinite;
}
```

---

### 3. EngagementActivity Interactions (Platinum)

**Floating Background Blobs:**
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-10px) translateX(5px);
  }
  50% {
    transform: translateY(0) translateX(10px);
  }
  75% {
    transform: translateY(10px) translateX(5px);
  }
}

.engagement-activity::before {
  animation: float 8s ease-in-out infinite;
}

.engagement-activity::after {
  animation: float 6s ease-in-out infinite reverse;
}
```

**Badge Shimmer:**
```css
@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

.platinum-badge {
  background: linear-gradient(
    90deg,
    var(--primary-blue) 0%,
    var(--brand-navy) 50%,
    var(--primary-blue) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
}
```

**CTA Button Hover:**
```css
.activity-cta {
  transition: all 0.2s var(--ease-standard);
  position: relative;
  overflow: hidden;
}

.activity-cta::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.activity-cta:hover::before {
  width: 300px;
  height: 300px;
}

.activity-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 146, 255, 0.4);
}
```

**Prize Card Entrance:**
```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.prize-card {
  animation: slideInUp 0.5s var(--ease-decelerate) 0.3s backwards;
}
```

---

### 4. ResourceCards Interactions

**Card Hover with 3D Tilt:**
```css
.resource-card {
  transition: all 0.3s var(--ease-standard);
  transform-style: preserve-3d;
}

.resource-card:hover {
  transform: translateY(-6px) scale(1.02) rotateX(2deg);
  box-shadow: 0 12px 28px rgba(0, 146, 255, 0.2);
  border-color: var(--primary-blue);
  z-index: 10;
}

.resource-card:active {
  transform: translateY(-4px) scale(1.01);
}
```

**Icon Container Hover:**
```css
.resource-icon-container {
  transition: all 0.2s var(--ease-standard);
}

.resource-card:hover .resource-icon-container {
  transform: scale(1.1) rotate(5deg);
}
```

**Sequential Card Entrance:**
```css
@keyframes cardEntrance {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.resource-card {
  animation: cardEntrance 0.4s var(--ease-decelerate) backwards;
}

/* Stagger delays based on position */
.resource-card:nth-child(1) { animation-delay: 0.1s; }
.resource-card:nth-child(2) { animation-delay: 0.15s; }
.resource-card:nth-child(3) { animation-delay: 0.2s; }
.resource-card:nth-child(4) { animation-delay: 0.25s; }
.resource-card:nth-child(5) { animation-delay: 0.3s; }
.resource-card:nth-child(6) { animation-delay: 0.35s; }
```

**File Size Badge Appear:**
```css
.file-size-badge {
  transition: all 0.2s var(--ease-standard);
  opacity: 0.7;
}

.resource-card:hover .file-size-badge {
  opacity: 1;
  transform: scale(1.05);
}
```

---

### 5. SessionSlides Interactions (Platinum)

**Fullscreen Button Hover:**
```css
.fullscreen-toggle {
  transition: all 0.2s var(--ease-standard);
}

.fullscreen-toggle:hover {
  transform: scale(1.1) rotate(5deg);
  border-color: var(--primary-blue);
  background: var(--light-blue);
  color: var(--primary-blue);
}
```

**Fullscreen Mode Transition:**
```css
@keyframes expandFullscreen {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.slides-fullscreen {
  animation: expandFullscreen 0.3s var(--ease-decelerate);
}

.slides-fullscreen-close {
  animation: fadeInUp 0.4s var(--ease-decelerate) 0.2s backwards;
}
```

**Close Button Hover:**
```css
.slides-fullscreen-close {
  transition: all 0.2s var(--ease-standard);
}

.slides-fullscreen-close:hover {
  transform: scale(1.1) rotate(90deg);
  background: var(--primary-blue);
  color: white;
}
```

**Loading State:**
```css
.slides-loading-spinner {
  animation: spin 1s linear infinite;
}

.slides-loading-text {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

---

### 6. CompanyStory Interactions

**Section Expansion (if needed):**
```css
.story-content {
  transition: max-height 0.3s var(--ease-standard);
  overflow: hidden;
}

.story-content.collapsed {
  max-height: 100px;
}

.story-content.expanded {
  max-height: 500px;
}
```

**Quick Fact Icon Hover:**
```css
.quick-fact-icon {
  transition: transform 0.2s var(--ease-standard);
}

.quick-fact:hover .quick-fact-icon {
  transform: scale(1.2) rotate(10deg);
}
```

**Read More Button (if applicable):**
```css
.read-more-button {
  transition: all 0.2s var(--ease-standard);
}

.read-more-button:hover {
  transform: translateX(4px);
  color: var(--brand-navy);
}

.read-more-button svg {
  transition: transform 0.2s var(--ease-standard);
}

.read-more-button:hover svg {
  transform: translateX(4px);
}
```

---

### 7. ContactInfo Interactions

**Social Link Hover:**
```css
.social-link {
  transition: all 0.3s var(--ease-standard);
}

.social-link:hover {
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.social-link svg {
  transition: transform 0.2s var(--ease-standard);
}

.social-link:hover svg {
  transform: scale(1.1);
}
```

**Email/Phone Link Hover:**
```css
.contact-item-link {
  position: relative;
  transition: color 0.2s var(--ease-standard);
}

.contact-item-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-blue);
  transition: width 0.3s var(--ease-standard);
}

.contact-item-link:hover::after {
  width: 100%;
}
```

**Internship Badge Pulse:**
```css
@keyframes badgePulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 146, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(0, 146, 255, 0);
  }
}

.internship-badge {
  animation: badgePulse 2s ease-in-out infinite;
}
```

---

## Loading States

### Skeleton Loader Animation

```css
@keyframes shimmerLoad {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--neutral-2) 0%,
    var(--neutral-1) 50%,
    var(--neutral-2) 100%
  );
  background-size: 1000px 100%;
  animation: shimmerLoad 2s infinite linear;
}
```

### Spinner Animation

```css
@keyframes spinnerRotate {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--neutral-3);
  border-top-color: var(--primary-blue);
  border-radius: 50%;
  animation: spinnerRotate 1s linear infinite;
}
```

### Progress Bar (if applicable)

```css
@keyframes progressFill {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.progress-bar {
  transform-origin: left;
  animation: progressFill 2s var(--ease-decelerate) forwards;
}
```

---

## Scroll Animations

### Scroll-Triggered Section Reveal

```typescript
// Use IntersectionObserver for performance
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)

// Apply to sections
document.querySelectorAll('.booth-section').forEach(section => {
  observer.observe(section)
})
```

```css
.booth-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s var(--ease-decelerate),
              transform 0.6s var(--ease-decelerate);
}

.booth-section.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Focus Indicators

### Keyboard Navigation Focus

```css
/* Global focus style */
*:focus-visible {
  outline: 3px solid var(--primary-blue);
  outline-offset: 4px;
  border-radius: 4px;
  transition: outline-offset 0.2s var(--ease-standard);
}

/* Remove focus for mouse users */
*:focus:not(:focus-visible) {
  outline: none;
}

/* Enhanced focus for buttons */
button:focus-visible,
a:focus-visible {
  outline: 3px solid var(--primary-blue);
  outline-offset: 4px;
  box-shadow: 0 0 0 6px rgba(0, 146, 255, 0.2);
}
```

### Focus Movement Animation

```css
.focus-ring {
  position: relative;
}

.focus-ring::after {
  content: '';
  position: absolute;
  inset: -4px;
  border: 3px solid var(--primary-blue);
  border-radius: inherit;
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.2s var(--ease-decelerate);
  pointer-events: none;
}

.focus-ring:focus-visible::after {
  opacity: 1;
  transform: scale(1);
}
```

---

## Platinum-Specific Enhancements

### Floating Animation (Platinum Cards)

```css
@keyframes floatPlatinum {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(1deg);
  }
  50% {
    transform: translateY(-5px) rotate(0deg);
  }
  75% {
    transform: translateY(-10px) rotate(-1deg);
  }
}

.booth-section.platinum {
  animation: floatPlatinum 6s ease-in-out infinite;
}
```

### Gradient Border Animation

```css
@keyframes gradientBorder {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.platinum-border {
  position: relative;
}

.platinum-border::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(
    90deg,
    var(--primary-blue),
    var(--brand-navy),
    var(--primary-blue)
  );
  background-size: 200% 100%;
  animation: gradientBorder 3s linear infinite;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
```

### Glow Pulse Effect

```css
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 146, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 146, 255, 0.5);
  }
}

.platinum-glow {
  animation: glowPulse 3s ease-in-out infinite;
}
```

---

## Performance Optimization

### GPU Acceleration

```css
/* Force GPU acceleration for animated elements */
.animated-element {
  transform: translateZ(0);
  will-change: transform, opacity;
}

/* Remove will-change after animation completes */
.animated-element.animation-complete {
  will-change: auto;
}
```

### Reduce Motion Support

```css
/* Respect user preference for reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Keep essential transitions but make them instant */
  .btn-primary:hover,
  .resource-card:hover {
    transition-duration: 0ms;
  }
}
```

### Reduced Motion Alternative

```css
@media (prefers-reduced-motion: reduce) {
  /* Replace animations with simple opacity/color changes */
  .booth-section {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .platinum-border::before {
    animation: none;
    background: var(--primary-blue);
  }

  /* Keep micro-interactions but simplify */
  .btn-primary:hover {
    background-color: var(--brand-navy);
    transform: none;
  }
}
```

---

## Transition Choreography

### Page Exit Transitions

```css
@keyframes fadeOutDown {
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}

.page-exit {
  animation: fadeOutDown 0.3s var(--ease-accelerate) forwards;
}
```

### Modal Open/Close

```css
@keyframes modalFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modalSlideUp {
  from {
    transform: translateY(50px) scale(0.95);
  }
  to {
    transform: translateY(0) scale(1);
  }
}

.modal-backdrop {
  animation: modalFadeIn 0.2s var(--ease-standard);
}

.modal-content {
  animation: modalSlideUp 0.3s var(--ease-decelerate);
}
```

---

## Interaction State Machine

### Button State Transitions

```typescript
enum ButtonState {
  Default = 'default',
  Hover = 'hover',
  Active = 'active',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
  Disabled = 'disabled'
}

// CSS for each state
.btn[data-state="default"] { /* default styles */ }
.btn[data-state="hover"] { transform: translateY(-2px); }
.btn[data-state="active"] { transform: translateY(0); }
.btn[data-state="loading"] { pointer-events: none; opacity: 0.7; }
.btn[data-state="success"] { background: #22C55E; }
.btn[data-state="error"] { background: #EF4444; }
.btn[data-state="disabled"] { opacity: 0.5; cursor: not-allowed; }
```

---

## Testing Checklist

### Animation Testing

- [ ] All animations run at 60fps on target devices
- [ ] Animations respect `prefers-reduced-motion`
- [ ] No layout shift during animations (CLS < 0.1)
- [ ] Hover effects work on desktop
- [ ] Touch interactions work on mobile (no hover dependency)
- [ ] Focus indicators visible for keyboard navigation
- [ ] Animations complete before user can interact
- [ ] Loading states prevent premature interaction
- [ ] Stagger delays feel natural (not too slow or fast)
- [ ] Exit animations complete before element removal

### Performance Testing

- [ ] GPU acceleration active for transform/opacity
- [ ] No memory leaks from infinite animations
- [ ] `will-change` removed after animation completes
- [ ] Intersection Observer used for scroll reveals
- [ ] No forced synchronous layouts
- [ ] Debounced scroll/resize handlers

---

## Developer Implementation Notes

1. **Use Framer Motion for React**: Consider using Framer Motion library for complex animations
2. **CSS Variables for Timing**: Store durations in CSS variables for easy global adjustment
3. **Animation Hooks**: Create reusable hooks for common animation patterns
4. **Test on Real Devices**: Desktop browser animations may not reflect mobile performance
5. **Measure Performance**: Use Chrome DevTools Performance tab to profile animations

---

## Related Documentation

- [Section Component Specifications](./section-specifications.md)
- [Accessibility Requirements](./accessibility-requirements.md)
- [Responsive Behavior](./responsive-behavior.md)
