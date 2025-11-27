---
title: Engagement Quiz - Interaction & Animation Specifications
description: Detailed specifications for all micro-interactions, animations, and transitions
feature: engagement-quiz
last-updated: 2025-11-26
version: 1.0
related-files:
  - screen-states.md
  - accessibility.md
status: approved
---

# Interaction & Animation Specifications

## Table of Contents

1. [Animation Principles](#animation-principles)
2. [Timing & Easing](#timing--easing)
3. [Button Interactions](#button-interactions)
4. [Answer Selection Flow](#answer-selection-flow)
5. [Screen Transitions](#screen-transitions)
6. [Progress Animations](#progress-animations)
7. [Fullscreen Modal](#fullscreen-modal)
8. [Badge Download](#badge-download)
9. [Reduced Motion](#reduced-motion)

---

## Animation Principles

### Design Philosophy

All animations in the quiz serve functional purposes:
- **Feedback**: Confirm user actions (button clicks, answer selections)
- **Orientation**: Help users understand state changes (question progression)
- **Delight**: Celebrate achievements (correct answers, quiz completion)
- **Performance**: Never slow down interaction (60fps minimum)

### Performance Budget

```typescript
// Animation Performance Targets
- Interaction Response Time: <100ms (button hover, answer selection)
- Screen Transition Duration: 200-400ms (fade between questions)
- Progress Animation: <400ms (progress bar updates)
- Modal Open/Close: <300ms (fullscreen transitions)
- Total Interaction to Next State: <500ms (click to next question visible)

// Frame Rate Minimum
- All animations: 60fps (16.67ms per frame)
- Hardware acceleration: Use transform and opacity only
```

---

## Timing & Easing

### Duration Scale

Based on platform globals.css animation system:

```css
:root {
  /* Micro interactions */
  --duration-micro: 100ms;

  /* Short transitions */
  --duration-short: 200ms;

  /* Medium transitions */
  --duration-medium: 300ms;

  /* Long transitions */
  --duration-long: 400ms;
}
```

### Easing Functions

```css
:root {
  /* Entrances and expansions */
  --ease-out: cubic-bezier(0.0, 0, 0.2, 1);

  /* Exits and collapses */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);

  /* Transitions and movements */
  --ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);

  /* Playful interactions (quiz celebrations) */
  --ease-spring: cubic-bezier(0.32, 0.72, 0, 1);
}
```

---

## Button Interactions

### Primary CTA Buttons (Start Quiz, Next Question, Download Badge)

**Default → Hover:**
```typescript
// Timing
duration: 200ms
easing: ease-out

// Properties
background-color: #0092FF → #007ACC
box-shadow: 0 2px 4px rgba(0,146,255,0.24) → 0 4px 8px rgba(0,146,255,0.32)
transform: translateY(0) → translateY(-1px)

// Implementation
.btn-primary {
  transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1);
}

.btn-primary:hover {
  background-color: #007ACC;
  box-shadow: 0 4px 8px rgba(0, 146, 255, 0.32);
  transform: translateY(-1px);
}
```

**Hover → Active (Click):**
```typescript
// Timing
duration: 100ms
easing: ease-in

// Properties
transform: translateY(-1px) → translateY(0)
box-shadow: 0 4px 8px rgba(...) → 0 1px 2px rgba(0,146,255,0.16)

// Visual feedback
- Button "presses down" on click
- Shadow reduces (flattens to surface)
- Instant tactile response

// Implementation
.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(0, 146, 255, 0.16);
  transition: all 100ms cubic-bezier(0.4, 0, 1, 1);
}
```

**Disabled State Transition:**
```typescript
// Timing
duration: 200ms
easing: ease-out

// Properties
background-color: #0092FF → #AAB7CB (neutral-3)
opacity: 1 → 0.6
cursor: pointer → not-allowed

// Implementation
.btn-primary:disabled {
  background-color: #AAB7CB;
  opacity: 0.6;
  cursor: not-allowed;
  transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1);
}
```

### Secondary Buttons (Retake Quiz)

**Default → Hover:**
```typescript
// Timing
duration: 200ms
easing: ease-out

// Properties
background: white → rgba(0, 146, 255, 0.08)
border-color: #0092FF → #007ACC
color: #0092FF → #007ACC

// Implementation
.btn-secondary:hover {
  background-color: rgba(0, 146, 255, 0.08);
  border-color: #007ACC;
  color: #007ACC;
  transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1);
}
```

### Expand/Collapse Button (Fullscreen Toggle)

**Default → Hover:**
```typescript
// Timing
duration: 200ms
easing: ease-out

// Properties
background: transparent → rgba(0, 146, 255, 0.08)
icon-color: #65738B → #0092FF

// Implementation
.expand-btn {
  transition: all 200ms ease-out;
}

.expand-btn:hover {
  background-color: rgba(0, 146, 255, 0.08);
}

.expand-btn:hover svg {
  color: #0092FF;
}
```

---

## Answer Selection Flow

### Phase 1: Hover State (Before Selection)

**Timing:**
```typescript
duration: 200ms
easing: ease-out
```

**Visual Changes:**
```typescript
// Border
border-color: #D9DFEA → #0092FF
border-width: 2px (no change)

// Background
background: white → rgba(0, 146, 255, 0.04)

// Transform
transform: scale(1) → scale(1.02)

// Shadow
box-shadow: none → 0 2px 8px rgba(0, 146, 255, 0.12)
```

**Implementation:**
```css
.answer-option {
  transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1);
}

.answer-option:hover {
  border-color: #0092FF;
  background-color: rgba(0, 146, 255, 0.04);
  transform: scale(1.02);
  box-shadow: 0 2px 8px rgba(0, 146, 255, 0.12);
}
```

### Phase 2: Selection (Click)

**Timing:**
```typescript
duration: 150ms
easing: ease-in-out
```

**Visual Changes:**
```typescript
// Border
border-color: #0092FF (maintained)
border-width: 2px → 3px

// Background
background: rgba(0, 146, 255, 0.04) → rgba(0, 146, 255, 0.08)

// Ring (focus ring appearance)
box-shadow: 0 2px 8px rgba(...) → 0 0 0 3px rgba(0, 146, 255, 0.12)

// Text color
color: #485163 → #0092FF

// Font weight
font-weight: 400 → 600
```

**Sibling Cards (Non-selected):**
```typescript
// Simultaneously dim other options
duration: 150ms
opacity: 1 → 0.5
transition: opacity 150ms ease-out
```

**Implementation:**
```css
.answer-option.selected {
  border-color: #0092FF;
  border-width: 3px;
  background-color: rgba(0, 146, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(0, 146, 255, 0.12);
  color: #0092FF;
  font-weight: 600;
  transition: all 150ms cubic-bezier(0.4, 0, 0.6, 1);
}

.answer-option:not(.selected) {
  opacity: 0.5;
  transition: opacity 150ms ease-out;
}
```

### Phase 3: Feedback Reveal (After Next Button Clicked)

**Timing Sequence:**
```typescript
Total duration: 500ms

0ms: User clicks "Next Question"
0-150ms: Feedback box slides down (entrance)
150ms: Answer cards transition to correct/incorrect states
150-400ms: Icons fade in on answer cards
400ms: Feedback complete, next button becomes enabled
```

**Feedback Box (Slide Down):**
```typescript
// Animation
@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-12px);
    max-height: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    max-height: 200px;
  }
}

// Timing
animation: slide-down 300ms cubic-bezier(0.32, 0.72, 0, 1)
```

**Correct Answer Card:**
```typescript
// Timing
duration: 300ms
easing: ease-in-out
delay: 150ms (after feedback box appears)

// Properties
background: rgba(0, 146, 255, 0.08) → #22224C (navy)
border-color: #0092FF → #22224C
color: #0092FF → white

// Checkmark icon entrance
@keyframes icon-pop {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

animation: icon-pop 250ms cubic-bezier(0.32, 0.72, 0, 1)
animation-delay: 150ms
```

**Incorrect Answer Card:**
```typescript
// Timing
duration: 300ms
easing: ease-in-out
delay: 150ms

// Properties
background: rgba(0, 146, 255, 0.08) → #C6E7FF (light-blue)
border-color: #0092FF → #C6E7FF
color: #0092FF → #22224C (navy)

// X icon entrance (same as checkmark)
animation: icon-pop 250ms cubic-bezier(0.32, 0.72, 0, 1)
animation-delay: 150ms
```

**Other Answer Cards (Non-selected, Incorrect):**
```typescript
// Timing
duration: 200ms
easing: ease-out

// Properties
opacity: 0.5 → 0.4 (further dimmed)
cursor: not-allowed
pointer-events: none
```

### Phase 4: Next Question Transition

**Triggered by:** Click "Next Question" button after feedback shown

**Timing Sequence:**
```typescript
Total duration: 500ms

0ms: User clicks "Next Question"
0-200ms: Current question fades out
200-500ms: New question fades in
500ms: Answer cards become interactive
```

**Current Question Fade Out:**
```typescript
// Animation
@keyframes fade-out {
  to {
    opacity: 0;
    transform: translateY(-8px);
  }
}

// Timing
animation: fade-out 200ms ease-in
animation-fill-mode: forwards
```

**New Question Fade In:**
```typescript
// Animation
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Timing
animation: fade-in-up 300ms cubic-bezier(0.0, 0, 0.2, 1)
animation-delay: 200ms
animation-fill-mode: both
```

---

## Screen Transitions

### Start → Quiz (First Question)

**Triggered by:** Click "Start Quiz" button

**Timing Sequence:**
```typescript
Total duration: 500ms

0ms: Button click
0-200ms: Start screen fades out
200ms: Progress bar initializes (0% → 8.33% for first question)
200-500ms: First question fades in
500ms: Answer cards become interactive
```

**Implementation:**
```typescript
// React transition
const [quizState, setQuizState] = useState('start')

// On start click
const handleStart = () => {
  setQuizState('transitioning')

  setTimeout(() => {
    setQuizState('in-progress')
  }, 200)
}

// CSS classes
<div className={`
  transition-opacity duration-200
  ${quizState === 'transitioning' ? 'opacity-0' : 'opacity-100'}
`}>
  {/* Content */}
</div>
```

### Quiz → Results

**Triggered by:** Click "Next Question" on final question

**Timing Sequence:**
```typescript
Total duration: 800ms

0ms: Final question feedback shown
0-200ms: Quiz content fades out
200-300ms: Score calculation (visible delay shows "processing")
300-800ms: Results screen animated entrance
  300ms: Celebration icon bounces in
  400ms: Score number counts up
  600ms: Performance message fades in
  700ms: Stats card slides in
  800ms: Action buttons fade in
```

**Celebration Animation (if passed):**
```typescript
@keyframes celebrate {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-45deg);
  }
  50% {
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

animation: celebrate 600ms cubic-bezier(0.32, 0.72, 0, 1)
```

**Score Count-Up Animation:**
```typescript
// JavaScript implementation
const [displayScore, setDisplayScore] = useState(0)

useEffect(() => {
  let start = 0
  const end = finalScore
  const duration = 1000
  const increment = end / (duration / 16) // 60fps

  const timer = setInterval(() => {
    start += increment
    if (start >= end) {
      setDisplayScore(end)
      clearInterval(timer)
    } else {
      setDisplayScore(Math.floor(start))
    }
  }, 16)

  return () => clearInterval(timer)
}, [finalScore])

// CSS (smooth color transition as number changes)
.score-number {
  transition: color 200ms ease-out;
}
```

### Results → Quiz (Retake)

**Triggered by:** Click "Retake Quiz" button

**Timing Sequence:**
```typescript
Total duration: 400ms

0ms: Button click
0-200ms: Results screen fades out
200ms: Questions re-shuffled (new randomization)
200-400ms: Start screen fades in
400ms: "Start Quiz" button ready
```

---

## Progress Animations

### Progress Bar Fill

**Triggered by:** Each question advancement

**Timing:**
```typescript
duration: 400ms
easing: ease-out (cubic-bezier(0.0, 0, 0.2, 1))
```

**Visual Changes:**
```typescript
// Width transition
width: [currentProgress]% → [newProgress]%

// Example: Question 1 → Question 2 (12 total questions)
width: 8.33% → 16.66%

// Gradient animation (subtle shimmer)
background: linear-gradient(90deg, #0092FF, #007ACC)
background-size: 200% 100%
background-position: 0% 50% → 100% 50%
```

**Implementation:**
```css
.progress-bar-fill {
  width: var(--progress-width);
  transition: width 400ms cubic-bezier(0.0, 0, 0.2, 1);

  /* Optional subtle shimmer */
  background: linear-gradient(90deg, #0092FF, #007ACC, #0092FF);
  background-size: 200% 100%;
  animation: gradient-shift 2s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

### Progress Text Update

**Timing:**
```typescript
// Synchronized with progress bar
duration: 400ms
easing: ease-out
```

**Visual Changes:**
```typescript
// Fade out old text → Fade in new text
opacity: 1 → 0 (200ms)
[text change: "Question 1 of 12" → "Question 2 of 12"]
opacity: 0 → 1 (200ms)
```

**Implementation:**
```css
.progress-text {
  transition: opacity 200ms ease-out;
}

/* React implementation */
const [isUpdating, setIsUpdating] = useState(false)

const updateProgress = (newQuestion) => {
  setIsUpdating(true)
  setTimeout(() => {
    setCurrentQuestion(newQuestion)
    setIsUpdating(false)
  }, 200)
}

<span className={`progress-text ${isUpdating ? 'opacity-0' : 'opacity-100'}`}>
  Question {current} of {total}
</span>
```

---

## Fullscreen Modal

### Open Animation

**Triggered by:** Click expand button (Maximize2 icon)

**Timing Sequence:**
```typescript
Total duration: 400ms

0ms: Button click
0-300ms: Overlay fades in (black background)
0-400ms: Modal scales up and fades in
100ms: Body scroll locked
400ms: Focus trap activated, close button focused
```

**Overlay Entrance:**
```typescript
@keyframes overlay-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

animation: overlay-fade-in 300ms ease
```

**Modal Entrance:**
```typescript
@keyframes modal-scale-up {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

animation: modal-scale-up 400ms cubic-bezier(0.32, 0.72, 0, 1)
```

**Implementation:**
```typescript
// React portal with transitions
import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

const [isFullscreen, setIsFullscreen] = useState(false)
const [isAnimating, setIsAnimating] = useState(false)

const openFullscreen = () => {
  setIsFullscreen(true)
  setIsAnimating(true)
  document.body.style.overflow = 'hidden'

  setTimeout(() => {
    setIsAnimating(false)
    // Focus close button
    closeButtonRef.current?.focus()
  }, 400)
}

// Portal
{isFullscreen && createPortal(
  <div className="fixed inset-0 z-[9999] animate-fade-in">
    <div className="overlay bg-black/90 backdrop-blur-sm" />
    <div className="modal animate-slide-up">
      {/* Modal content */}
    </div>
  </div>,
  document.body
)}
```

### Close Animation

**Triggered by:** Click X, click overlay, or press ESC

**Timing Sequence:**
```typescript
Total duration: 300ms

0ms: Close trigger
0-200ms: Modal scales down and fades out
0-300ms: Overlay fades out
200ms: Body scroll unlocked
300ms: Portal unmounted, focus returns to expand button
```

**Modal Exit:**
```typescript
@keyframes modal-scale-down {
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
}

animation: modal-scale-down 200ms ease-in
animation-fill-mode: forwards
```

**Overlay Exit:**
```typescript
@keyframes overlay-fade-out {
  to {
    opacity: 0;
  }
}

animation: overlay-fade-out 300ms ease
```

---

## Badge Download

### Download Button Click

**Timing Sequence:**
```typescript
Total duration: 2000ms (badge generation + download)

0ms: Button click
0-100ms: Button active state (press down)
100ms: Loading state begins
100-1800ms: Badge generation (show spinner in button)
1800-2000ms: Success state (checkmark animation)
2000ms: Browser download triggered, button returns to default
```

**Button States:**

**Default → Loading:**
```typescript
// Visual changes
icon: Download → Loader2 (spinning)
text: "Download Badge" → "Generating..."
background: #0092FF (no change)
cursor: pointer → wait

// Spinner animation
@keyframes spin {
  to { transform: rotate(360deg); }
}

animation: spin 1s linear infinite
```

**Loading → Success:**
```typescript
// Visual changes
icon: Loader2 → Check
text: "Generating..." → "Downloaded!"
background: #10B981 (green)

// Checkmark animation
@keyframes check-pop {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

animation: check-pop 300ms cubic-bezier(0.32, 0.72, 0, 1)
```

**Success → Default (Reset):**
```typescript
// After 2 seconds in success state
duration: 200ms
easing: ease-out

// Properties
background: #10B981 → #0092FF
icon: Check → Download
text: "Downloaded!" → "Download Badge"
```

**Implementation:**
```typescript
const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'success'>('idle')

const handleDownload = async () => {
  setDownloadState('loading')

  try {
    // Generate and download badge
    const badgeBlob = await fetchBadgeImage(sponsorSlug, score)
    downloadBlob(badgeBlob, `${quizTitle}-badge.png`)

    setDownloadState('success')

    // Reset after 2 seconds
    setTimeout(() => {
      setDownloadState('idle')
    }, 2000)
  } catch (error) {
    setDownloadState('idle')
    // Show error toast
  }
}

// Button render
<button onClick={handleDownload} disabled={downloadState === 'loading'}>
  {downloadState === 'loading' && <Loader2 className="animate-spin" />}
  {downloadState === 'success' && <Check className="animate-check-pop" />}
  {downloadState === 'idle' && <Download />}

  {downloadState === 'loading' && 'Generating...'}
  {downloadState === 'success' && 'Downloaded!'}
  {downloadState === 'idle' && 'Download Badge'}
</button>
```

---

## Reduced Motion

### Accessibility Compliance

All animations must respect user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  /* Disable specific animations */
  .celebrate,
  .bounce,
  .gradient-shift,
  .spin {
    animation: none !important;
  }

  /* Instant state changes */
  .fade-in,
  .fade-out,
  .slide-up,
  .slide-down,
  .scale-up,
  .scale-down {
    animation: none !important;
    transition: none !important;
  }
}
```

### Alternative Feedback (No Animation)

When reduced motion is enabled:

**Progress Updates:**
- Instant width change (no transition)
- Text update immediate (no fade)

**Answer Feedback:**
- Instant color change (no slide/fade)
- Icons appear immediately (no pop animation)

**Screen Transitions:**
- Content swaps instantly (no cross-fade)
- Focus moves immediately to first interactive element

**Score Display:**
- Final score shows immediately (no count-up)
- Celebration icon appears without bounce

**Implementation:**
```typescript
// React hook to detect reduced motion
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

// Conditional animation classes
<div className={`
  ${!prefersReducedMotion && 'animate-fade-in'}
`}>
  {/* Content */}
</div>

// Conditional timing
const transitionDuration = prefersReducedMotion ? 0 : 300

setTimeout(() => {
  // State change
}, transitionDuration)
```

---

## Performance Optimization

### Hardware Acceleration

All animations use GPU-accelerated properties:

```css
/* ✓ GOOD: GPU accelerated */
transform: translateY(-1px);
opacity: 0.5;
filter: blur(8px);

/* ✗ BAD: CPU bound, triggers layout */
top: -1px;
width: 50%;
margin-left: 10px;
```

### Will-Change Hint

For elements with frequent animations:

```css
.answer-option,
.progress-bar-fill,
.modal-container {
  will-change: transform, opacity;
}

/* Remove after animation complete */
.answer-option.animated {
  will-change: auto;
}
```

### Debounced Analytics

Prevent analytics spam during rapid interactions:

```typescript
import { debounce } from 'lodash'

// Debounce answer hover tracking
const trackAnswerHover = debounce((questionId, answerId) => {
  QuizAnalytics.answerHovered(boothId, questionId, answerId)
}, 500)

// Immediate tracking for important events
const trackAnswerSelected = (questionId, answerId, isCorrect) => {
  QuizAnalytics.questionAnswered(boothId, questionId, isCorrect, attemptNumber)
}
```

---

## Summary

This specification ensures all quiz interactions are:

✓ **Smooth**: 60fps animations using GPU-accelerated properties
✓ **Purposeful**: Every animation provides feedback or orientation
✓ **Accessible**: Respects `prefers-reduced-motion` preferences
✓ **Performant**: Optimized timing and hardware acceleration
✓ **Consistent**: Uses platform animation tokens and patterns
✓ **Delightful**: Celebrates user achievements appropriately

All timing values align with the existing platform design system in `app/globals.css` for visual consistency across the Career Launch Platform.
