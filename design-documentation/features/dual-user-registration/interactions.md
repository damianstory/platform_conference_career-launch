---
title: Interaction Patterns & Animations
description: Detailed specifications for animations, transitions, and interactive behaviors in the dual-user registration flow
feature: dual-user-registration
last-updated: 2025-11-17
version: 1.0.0
related-files:
  - ./README.md
  - ./user-journey.md
  - ./screen-states.md
dependencies:
  - /app/globals.css (animation keyframes)
status: draft
---

# Interaction Patterns & Animations

## Overview

This document specifies all micro-interactions, state transitions, and animation choreography for the dual-user registration modal. All animations respect the existing design system and `prefers-reduced-motion` user preferences.

## Table of Contents

1. [Animation Philosophy](#animation-philosophy)
2. [Modal Entry & Exit](#modal-entry-and-exit)
3. [State Transitions](#state-transitions)
4. [Card Interactions](#card-interactions)
5. [Form Interactions](#form-interactions)
6. [Button States](#button-states)
7. [Error Handling Animations](#error-handling-animations)
8. [Reduced Motion Alternatives](#reduced-motion-alternatives)

---

## Animation Philosophy

### Core Principles

1. **Purpose-driven**: Every animation serves a functional purpose (feedback, guidance, or spatial continuity)
2. **Performance-first**: 60fps minimum, hardware-accelerated transforms preferred
3. **Consistent timing**: Similar actions use similar durations and easing
4. **Respectful**: Honor user preferences for reduced motion
5. **Brand-aligned**: Motion should feel professional yet energetic

### Timing Reference

| Duration | Use Case | CSS Value |
|----------|----------|-----------|
| 100-150ms | State changes, micro-feedback | 150ms |
| 200-300ms | Local transitions, hovers | 200ms-250ms |
| 400-500ms | Page transitions, modals | 400ms |
| 600-800ms | Complex sequences | Not used in this feature |

### Easing Reference

| Name | Use Case | CSS Cubic-Bezier |
|------|----------|------------------|
| Ease-out | Entrances, expansions | cubic-bezier(0.0, 0, 0.2, 1) |
| Ease-in-out | Smooth transitions | cubic-bezier(0.4, 0, 0.6, 1) |
| Custom (slide) | Modal entrance | cubic-bezier(0.32, 0.72, 0, 1) |

---

## Modal Entry and Exit

### Entry Animation (existing, maintained)

**Overlay Fade-In**:
```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.overlay {
  animation: fade-in 300ms ease;
}
```

**Drawer Slide-Up**:
```css
@keyframes slide-up {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

.drawer {
  animation: slide-up 400ms cubic-bezier(0.32, 0.72, 0, 1);
}
```

**Timing**: Overlay begins immediately, drawer follows with slight delay (~50ms)

### Exit Animation

**Trigger**: Cancel button, ESC key, or overlay click

**Drawer Slide-Down**:
```css
@keyframes slide-down {
  from { transform: translateY(0); }
  to { transform: translateY(100%); }
}

.drawer-exit {
  animation: slide-down 300ms cubic-bezier(0.4, 0, 1, 1);
}
```

**Overlay Fade-Out**:
```css
.overlay-exit {
  animation: fade-in 200ms ease reverse;
}
```

**Timing**: Both animate simultaneously, drawer leads visually

**Note**: After video starts, modal should exit cleanly without abrupt disappearance

---

## State Transitions

### Type Selection to Form Transition

**Trigger**: User clicks Educator or Student card

**Sequence**:

1. **Card Selection Feedback** (0-150ms)
   - Selected card scales to 0.98 (pressed state)
   - Border color changes to #0092FF
   - Background fills with #E6F4FF

2. **Content Fade-Out** (150-450ms)
   ```css
   @keyframes content-exit {
     from {
       opacity: 1;
       transform: translateX(0);
     }
     to {
       opacity: 0;
       transform: translateX(-20px);
     }
   }

   .type-selection-exit {
     animation: content-exit 300ms ease-in-out forwards;
   }
   ```

3. **Height Adjustment** (300-500ms)
   ```css
   .modal-container {
     transition: height 400ms cubic-bezier(0.32, 0.72, 0, 1);
   }
   ```
   - Type Selection: ~600px
   - Educator Form: ~900px
   - Student Form: ~550px

4. **Content Fade-In** (400-700ms)
   ```css
   @keyframes content-enter {
     from {
       opacity: 0;
       transform: translateX(20px);
     }
     to {
       opacity: 1;
       transform: translateX(0);
     }
   }

   .form-enter {
     animation: content-enter 300ms ease-out forwards;
   }
   ```

**Total Duration**: ~700ms

**Implementation Note**: Consider using React Transition Group or Framer Motion for orchestration

### Form Back to Type Selection

**Trigger**: User clicks "Change selection" link

**Sequence**:

1. **Form Content Fade-Out** (0-300ms)
   - Same as content-exit animation
   - Form state is NOT preserved (reset)

2. **Height Adjustment** (200-400ms)
   - Modal shrinks to type selection height
   - Smooth transition without jarring jumps

3. **Type Selection Fade-In** (300-600ms)
   - Cards re-appear with entrance animation
   - Both cards in unselected state

**Total Duration**: ~600ms

---

## Card Interactions

### Hover State

**Trigger**: Mouse enters card area

**Properties to Animate**:
```css
.type-card {
  transition: all 200ms ease-in-out;
}

.type-card:hover {
  border-color: #0092FF;
  box-shadow: 0 4px 12px rgba(0, 146, 255, 0.15);
  background: #FAFBFC;
}

.type-card:hover .arrow-icon {
  transform: translateX(4px);
}
```

**Timing**: 200ms for all property changes

**Easing**: ease-in-out for balanced entrance/exit

### Focus State (Keyboard Navigation)

**Trigger**: Tab focus lands on card

**Properties**:
```css
.type-card:focus-visible {
  outline: 2px solid #0092FF;
  outline-offset: 2px;
  border-color: #0092FF;
  background: #FAFBFC;
}
```

**Animation**: Immediate (no transition needed for outline)

### Active/Pressed State

**Trigger**: Mouse down or Enter/Space key press

**Properties**:
```css
.type-card:active {
  transform: scale(0.98);
  background: #E6F4FF;
  border-color: #0092FF;
}
```

**Timing**: 150ms

**Feel**: Provides tactile feedback, indicates selection registered

### Selection Confirmation

**After press, before transition**:

Optional: Checkmark icon briefly appears in card corner
```css
@keyframes check-pop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.selection-check {
  animation: check-pop 200ms ease-out forwards;
}
```

---

## Form Interactions

### Field Focus

**Trigger**: Click or tab into input/select

**Properties**:
```css
.form-field {
  transition: all 200ms ease;
}

.form-field:focus {
  border-color: #0092FF;
  box-shadow: 0 0 0 3px rgba(0, 146, 255, 0.1);
}
```

**Visual Feedback**: Blue ring expands outward, indicating active state

### Field Validation (Real-time)

**Success State** (field valid):
```css
.field-valid {
  border-color: #10B981; /* green-500 */
}

.field-valid::after {
  /* Optional: Small checkmark indicator */
}
```

**Error State** (field invalid after blur):
```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

.field-error {
  border-color: #EF4444;
  animation: shake 300ms ease-in-out;
}
```

### School Dropdown Update

**Trigger**: User changes school board selection

**Sequence**:
1. School dropdown briefly disabled
2. Options update (instant, no visual animation needed)
3. Placeholder text changes: "Select a board first" → "Select your school..."
4. Dropdown re-enables

**Visual Indicator**:
```css
@keyframes loading-pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.school-loading {
  animation: loading-pulse 600ms ease infinite;
}
```

**Duration**: 200-400ms (simulated delay for visual consistency)

---

## Button States

### Disabled State

**Appearance**:
```css
.btn-disabled {
  background: #D1D5DB; /* gray-300 */
  cursor: not-allowed;
  opacity: 0.7;
}
```

**No hover or focus animations**

### Enabling Transition

**Trigger**: Form becomes valid

**Animation**:
```css
@keyframes button-enable {
  from {
    background: #D1D5DB;
    transform: scale(1);
  }
  to {
    background: #0092FF;
    transform: scale(1);
  }
}

.btn-enabling {
  animation: button-enable 300ms ease forwards;
}
```

**Optional Enhancement**: Subtle pulse when enabled
```css
@keyframes enable-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 146, 255, 0); }
  50% { box-shadow: 0 0 0 8px rgba(0, 146, 255, 0.3); }
}

.btn-just-enabled {
  animation: enable-pulse 600ms ease;
}
```

### Hover State (Enabled)

```css
.btn-primary:hover {
  background: #0082E6; /* Slightly darker blue */
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 146, 255, 0.25);
}

.btn-primary:hover .arrow-icon {
  transform: translateX(2px);
}
```

**Timing**: 200ms

### Active/Pressed State

```css
.btn-primary:active {
  transform: translateY(0);
  background: #0072CC; /* Even darker */
  box-shadow: 0 2px 4px rgba(0, 146, 255, 0.2);
}
```

**Timing**: 100ms (quick response)

### Loading State (During Submission)

**Trigger**: User clicks "Start Video"

**Animation**:
```css
@keyframes spinner {
  to { transform: rotate(360deg); }
}

.btn-loading .spinner {
  animation: spinner 800ms linear infinite;
}

.btn-loading {
  pointer-events: none;
  opacity: 0.8;
}
```

**Visual**: Replace arrow icon with circular spinner

**Duration**: Until API response (typically <1s)

---

## Error Handling Animations

### Inline Field Error

**Appearance Animation**:
```css
@keyframes error-slide-in {
  from {
    opacity: 0;
    transform: translateY(-8px);
    max-height: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    max-height: 40px;
  }
}

.error-message {
  animation: error-slide-in 200ms ease-out forwards;
}
```

**Disappearance**: Reverse of above, or instant removal

### Shake Animation (Invalid Submit Attempt)

**Trigger**: User clicks "Start Video" when form is invalid

**Animation**:
```css
@keyframes form-shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
}

.form-invalid-submit {
  animation: form-shake 500ms ease-in-out;
}
```

**Accompaniment**: Scroll to first invalid field

### Network Error

**Trigger**: API call fails during submission

**Animation**:
```css
@keyframes error-banner-enter {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.network-error-banner {
  animation: error-banner-enter 300ms ease-out;
}
```

**Position**: Below header, above form content

**Auto-dismiss**: After 5 seconds, or manual close

---

## Reduced Motion Alternatives

### Detecting User Preference

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Specific Adjustments

**Modal Entry**:
- Instead of slide-up: Instant appearance with opacity only
- Fade-in reduced to 100ms

**State Transitions**:
- Instead of cross-fade: Immediate content swap
- No horizontal translation, opacity only

**Card Interactions**:
- Hover: Border color change only (no shadow animation)
- Active: Background change only (no scale)

**Button States**:
- Enabling: Background color change only
- Hover: Color change only (no transform)

**Error Animations**:
- No shake effect
- Error messages appear instantly
- Red border applied immediately

### JavaScript Detection

```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Use shorter durations or skip animations entirely
  transitionDuration = 0;
} else {
  transitionDuration = 400;
}
```

---

## Performance Considerations

### Hardware Acceleration

**Force GPU rendering on animated elements**:
```css
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0);
}
```

**Note**: Remove `will-change` after animation completes to free GPU memory

### Avoid Animating These Properties

- `width` / `height` (trigger layout recalculation)
- `top` / `left` / `right` / `bottom` (layout shift)
- `box-shadow` with large blur radius (paint expensive)

### Prefer These Properties

- `transform` (GPU accelerated)
- `opacity` (GPU accelerated)
- `background-color` (paint only)
- `border-color` (paint only)

### Frame Budget

**Target**: 60fps = 16.67ms per frame

**Monitor performance**:
- Use Chrome DevTools Performance tab
- Check for "Long Tasks" during animations
- Ensure no layout thrashing

### Debouncing Validation

**Form validation during typing**:
```javascript
const debouncedValidate = debounce(validateField, 300);

// Don't validate on every keystroke
input.addEventListener('input', debouncedValidate);
```

**Prevents**: Jank during rapid typing

---

## Animation State Machine

### Modal States

```
CLOSED
  ↓ [User clicks "Watch Session"]
OPENING (400ms)
  ↓
TYPE_SELECTION
  ↓ [User clicks Educator card]
TRANSITIONING_TO_EDUCATOR (700ms)
  ↓
EDUCATOR_FORM
  ↓ [User clicks "Change selection"]
TRANSITIONING_TO_TYPE_SELECTION (600ms)
  ↓
TYPE_SELECTION
  ↓ [User clicks Student card]
TRANSITIONING_TO_STUDENT (700ms)
  ↓
STUDENT_FORM
  ↓ [User clicks "Start Video"]
SUBMITTING (loading state)
  ↓ [API success]
CLOSING (300ms)
  ↓
CLOSED
```

### State Transition Guards

- Prevent double-clicks during transitions
- Disable form submission during state changes
- Block ESC key during critical animations
- Queue cancel actions to occur after current transition

```javascript
const [isTransitioning, setIsTransitioning] = useState(false);

const handleTypeSelection = (type) => {
  if (isTransitioning) return; // Guard

  setIsTransitioning(true);
  // Perform transition
  setTimeout(() => setIsTransitioning(false), 700);
};
```
