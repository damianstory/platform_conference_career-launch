---
title: Engagement Quiz - Screen States Specification
description: Detailed visual specifications for all quiz UI states and layouts
feature: engagement-quiz
last-updated: 2025-11-26
version: 1.0
related-files:
  - README.md
  - interactions.md
  - accessibility.md
status: approved
---

# Screen States Specification

## Table of Contents

1. [Container Specifications](#container-specifications)
2. [Start Screen](#start-screen)
3. [Quiz In Progress](#quiz-in-progress)
4. [Results Screen](#results-screen)
5. [Fullscreen Modal](#fullscreen-modal)
6. [Loading & Error States](#loading--error-states)

---

## Container Specifications

### Embedded Mode (Default)

**Desktop (lg breakpoint: 1024px+)**
```css
.quiz-container {
  grid-column: span 8 / span 12; /* col-span-8 in 12-column grid */
  height: 500px;
  border-radius: 0.75rem; /* 12px */
  overflow: hidden;
  background: white;
  box-shadow: 0 3px 10px rgba(34, 34, 76, 0.08),
              0 1px 3px rgba(34, 34, 76, 0.04);
  border: 1px solid rgba(209, 223, 234, 0.5); /* neutral-2 */
  transition: box-shadow 200ms ease-out;
}

.quiz-container:hover {
  box-shadow: 0 4px 14px rgba(34, 34, 76, 0.12),
              0 2px 6px rgba(34, 34, 76, 0.06);
}
```

**Tablet (md breakpoint: 768-1023px)**
```css
.quiz-container {
  grid-column: span 12; /* col-span-12 full width */
  height: 500px;
}
```

**Mobile (sm breakpoint: <768px)**
```css
.quiz-container {
  grid-column: span 12;
  height: 450px; /* Reduced height for mobile */
}
```

### Layout Structure

All quiz screens follow this 3-section layout:

```
┌─────────────────────────────────────────┐
│ HEADER (60px fixed)                     │ ← Quiz title, expand button
├─────────────────────────────────────────┤
│                                         │
│ CONTENT (flex-1, scrollable)            │ ← Question/Results/Start
│                                         │
│                                         │
├─────────────────────────────────────────┤
│ FOOTER (72px fixed)                     │ ← CTA buttons, progress
└─────────────────────────────────────────┘
```

**Header Section:**
- Height: `60px` fixed
- Padding: `px-6 py-4`
- Border-bottom: `1px solid neutral-2`
- Background: `white`
- Flex layout: `justify-between items-center`

**Content Section:**
- Height: `calc(100% - 132px)` (total height - header - footer)
- Padding: `p-6` (24px all sides)
- Overflow: `overflow-y-auto` with custom scrollbar
- Background: `bg-off-white` (#F6F6FF)

**Footer Section:**
- Height: `72px` fixed
- Padding: `px-6 py-4`
- Border-top: `1px solid neutral-2`
- Background: `white`
- Flex layout: `justify-between items-center`

---

## Start Screen

### Purpose
Welcome students to the quiz, explain what to expect, and provide clear entry point.

### Layout Structure

```
┌─────────────────────────────────────────┐
│ Energy Sector Skills Assessment    [↗]  │ ← Header
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────────────────────────────┐  │
│  │  🎯 Energy Sector Skills Quiz    │  │ ← Title card
│  │                                   │  │
│  │  Test your knowledge about       │  │
│  │  careers in renewable energy...  │  │
│  │                                   │  │
│  │  📊 12 Questions                 │  │
│  │  ⏱️  8-10 minutes               │  │
│  │  🏆 Earn achievement badge       │  │
│  └──────────────────────────────────┘  │
│                                         │
├─────────────────────────────────────────┤
│                         [Start Quiz →]  │ ← Footer with CTA
└─────────────────────────────────────────┘
```

### Visual Design Specifications

**Header Section:**
```typescript
// Quiz Title
font-size: 1.125rem (18px)
font-weight: 700 (bold)
color: #22224C (navy)
line-height: 1.5

// Expand Button (top-right)
size: 40px × 40px
icon: Maximize2 (lucide-react)
icon-size: 16px
color: #65738B (neutral-4)
hover-color: #0092FF (blue)
background: transparent
hover-background: rgba(0, 146, 255, 0.08)
border-radius: 8px
transition: all 200ms ease
```

**Content Section - Title Card:**
```typescript
// Container
background: white
border-radius: 12px
padding: 32px
box-shadow: 0 2px 8px rgba(34, 34, 76, 0.06)
max-width: 480px
margin: auto (center aligned)

// Icon + Title
icon: 🎯 (emoji, 32px)
title-font: 1.5rem (24px) bold
title-color: #22224C (navy)
margin-bottom: 16px

// Description
font-size: 1rem (16px)
line-height: 1.75 (28px)
color: #485163 (neutral-5)
margin-bottom: 24px

// Metadata List (3 items)
layout: vertical stack, 12px gap
each-item: icon (16px) + text (14px)
icon-color: #0092FF (blue)
text-color: #65738B (neutral-4)
```

**Footer Section:**
```typescript
// Start Quiz Button (primary CTA)
width: auto (min-width: 200px)
height: 48px
padding: 0 32px
background: #0092FF (blue)
color: white
font-size: 1rem (16px)
font-weight: 600 (semibold)
border-radius: 8px
box-shadow: 0 2px 4px rgba(0, 146, 255, 0.24)

// Hover State
background: #007ACC (darker blue)
box-shadow: 0 4px 8px rgba(0, 146, 255, 0.32)
transform: translateY(-1px)
transition: all 200ms ease-out

// Active State (click)
transform: translateY(0)
box-shadow: 0 1px 2px rgba(0, 146, 255, 0.16)
transition: all 100ms ease-in

// Focus State
outline: 2px solid #0092FF
outline-offset: 2px
```

### Responsive Behavior

**Desktop (lg: 1024px+)**
- Title card: max-width 480px, centered
- Button: right-aligned in footer
- Icon size: 32px

**Tablet (md: 768-1023px)**
- Title card: max-width 100%, full width
- Padding reduced: 24px
- Button: full-width stretched

**Mobile (sm: <768px)**
- Title card: padding 20px
- Font sizes: title 1.25rem (20px), body 0.875rem (14px)
- Icon size: 24px
- Button: full-width, height 56px (larger touch target)

---

## Quiz In Progress

### Purpose
Display one question at a time with 4 answer options, provide immediate feedback, and show progress.

### Layout Structure

```
┌─────────────────────────────────────────┐
│ Energy Sector Skills Assessment    [↗]  │ ← Header
├─────────────────────────────────────────┤
│ ▓▓▓▓▓▓▓▓░░░░░░░░ Question 3 of 12      │ ← Progress bar
│                                         │
│  What is the primary role of a Wind    │ ← Question text
│  Turbine Technician?                    │
│                                         │
│  ┌─────────────────┬─────────────────┐ │
│  │ A. Design wind  │ B. Install and  │ │ ← Answer grid
│  │    farms        │    maintain...  │ │   (2×2 layout)
│  └─────────────────┴─────────────────┘ │
│  ┌─────────────────┬─────────────────┐ │
│  │ C. Sell renew.  │ D. Conduct env. │ │
│  │    energy       │    impact...    │ │
│  └─────────────────┴─────────────────┘ │
│                                         │
│  ┌─────────────────────────────────┐   │ ← Feedback (after selection)
│  │ ✓ Correct! Wind Turbine Techs.. │   │
│  └─────────────────────────────────┘   │
│                                         │
├─────────────────────────────────────────┤
│                      [Next Question →]  │ ← Footer with nav
└─────────────────────────────────────────┘
```

### Visual Design Specifications

**Progress Bar:**
```typescript
// Container
height: 8px
background: #E5E9F1 (neutral-1)
border-radius: 4px
margin: 16px 24px 0 24px (top of content area)

// Progress Fill
background: linear-gradient(90deg, #0092FF, #007ACC)
height: 8px
border-radius: 4px
transition: width 400ms cubic-bezier(0.4, 0, 0.2, 1)

// Progress Text
position: below bar
font-size: 0.75rem (12px)
color: #65738B (neutral-4)
text-align: right
margin-top: 4px
```

**Question Text:**
```typescript
// Container
margin: 24px 0
padding: 0 8px

// Text
font-size: 1.25rem (20px)
font-weight: 600 (semibold)
line-height: 1.6 (32px)
color: #22224C (navy)
text-align: left
```

**Answer Options Grid:**
```typescript
// Grid Container
display: grid
grid-template-columns: 1fr 1fr (2 columns)
gap: 12px
margin: 24px 0

// Individual Answer Card (Default State)
background: white
border: 2px solid #D9DFEA (neutral-2)
border-radius: 8px
padding: 16px
min-height: 80px
cursor: pointer
transition: all 200ms ease-out

// Answer Letter (A, B, C, D)
font-size: 0.875rem (14px)
font-weight: 700 (bold)
color: #0092FF (blue)
margin-bottom: 4px

// Answer Text
font-size: 0.875rem (14px)
line-height: 1.5 (21px)
color: #485163 (neutral-5)
```

**Answer States:**

**Hover (Before Selection):**
```typescript
border-color: #0092FF (blue)
background: rgba(0, 146, 255, 0.04)
transform: scale(1.02)
box-shadow: 0 2px 8px rgba(0, 146, 255, 0.12)
```

**Selected (After Click, Before Feedback):**
```typescript
border-color: #0092FF (blue)
border-width: 3px
background: rgba(0, 146, 255, 0.08)
box-shadow: 0 0 0 3px rgba(0, 146, 255, 0.12)

// Answer text color
color: #0092FF (blue)
font-weight: 600
```

**Correct Answer (After Feedback Shown):**
```typescript
background: #22224C (navy)
border-color: #22224C (navy)
border-width: 3px

// Answer letter
color: white

// Answer text
color: white
font-weight: 600

// Checkmark icon
position: top-right corner
icon: Check (lucide-react, 20px)
color: #10B981 (green)
background: white
border-radius: 50%
padding: 4px
```

**Incorrect Answer (After Feedback Shown):**
```typescript
background: #C6E7FF (light-blue)
border-color: #C6E7FF (light-blue)
border-width: 2px

// Answer letter
color: #22224C (navy)

// Answer text
color: #22224C (navy)

// X icon
position: top-right corner
icon: X (lucide-react, 20px)
color: #EF4444 (red)
background: white
border-radius: 50%
padding: 4px
```

**Disabled (Non-selected After Answer):**
```typescript
opacity: 0.5
cursor: not-allowed
pointer-events: none
```

**Feedback Box:**
```typescript
// Container (slides down from top, 300ms)
margin-top: 16px
padding: 16px
border-radius: 8px
border-left: 4px solid [color]

// Correct Feedback
background: rgba(16, 185, 129, 0.08) (green tint)
border-left-color: #10B981 (green)

// Incorrect Feedback
background: rgba(239, 68, 68, 0.08) (red tint)
border-left-color: #EF4444 (red)

// Feedback Text
font-size: 0.875rem (14px)
line-height: 1.6 (22px)
color: #485163 (neutral-5)

// Icon (left side)
icon: CheckCircle or XCircle (20px)
margin-right: 12px
vertical-align: top
```

**Footer - Next Button:**
```typescript
// Disabled State (no answer selected)
background: #AAB7CB (neutral-3)
color: white
cursor: not-allowed
opacity: 0.6

// Enabled State (answer selected)
background: #0092FF (blue)
color: white
width: auto (min-width: 180px)
height: 48px
padding: 0 24px
border-radius: 8px
font-size: 1rem (16px)
font-weight: 600

// Hover (enabled)
background: #007ACC
transform: translateY(-1px)
box-shadow: 0 4px 8px rgba(0, 146, 255, 0.24)
```

### Responsive Behavior

**Desktop (lg: 1024px+)**
- Answer grid: 2 columns (2×2 layout)
- Answer card min-height: 80px
- Question font: 1.25rem (20px)

**Tablet (md: 768-1023px)**
- Answer grid: 2 columns maintained
- Answer card padding: 12px
- Question font: 1.125rem (18px)

**Mobile (sm: <768px)**
- Answer grid: 1 column (stacked vertical)
- Answer card: full width, min-height 60px
- Question font: 1rem (16px)
- Progress text: hidden (show only bar)
- Footer button: full-width stretched

---

## Results Screen

### Purpose
Display final score, performance feedback, badge download option, and retake option.

### Layout Structure

```
┌─────────────────────────────────────────┐
│ Quiz Complete!                     [↗]  │ ← Header
├─────────────────────────────────────────┤
│                                         │
│         🎉 Congratulations!             │
│                                         │
│              85%                        │ ← Score display
│         Your Score                      │
│                                         │
│  You've demonstrated strong knowledge  │
│  of energy sector careers!              │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Performance Breakdown:          │   │ ← Stats
│  │ ✓ 10 Correct                    │   │
│  │ ✗ 2 Incorrect                   │   │
│  │ ⏱  6 minutes 32 seconds        │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [Download Badge]  [Retake Quiz]       │ ← Action buttons
│                                         │
├─────────────────────────────────────────┤
│ Best Score: 85% • Attempt 1             │ ← Footer stats
└─────────────────────────────────────────┘
```

### Visual Design Specifications

**Header:**
```typescript
// Title (dynamic based on score)
// If score >= 70%: "Quiz Complete! 🎉"
// If score < 70%: "Quiz Complete"
font-size: 1.125rem (18px)
font-weight: 700
color: #22224C (navy)
```

**Content Section:**

**Celebration Icon:**
```typescript
// Top element (if passed)
emoji: 🎉 or 🏆
font-size: 48px
text-align: center
margin-bottom: 16px
animation: bounce 600ms ease-out (on mount)
```

**Score Display:**
```typescript
// Score Number
font-size: 4rem (64px)
font-weight: 800 (extrabold)
line-height: 1
text-align: center
margin-bottom: 8px

// Color (based on performance tier)
// 90-100%: #10B981 (green) - Excellent
// 70-89%: #0092FF (blue) - Good
// 50-69%: #F59E0B (amber) - Fair
// <50%: #EF4444 (red) - Needs Review

// "Your Score" Label
font-size: 1rem (16px)
font-weight: 500
color: #65738B (neutral-4)
text-align: center
margin-bottom: 24px
```

**Performance Message:**
```typescript
// Container
background: white
border-radius: 12px
padding: 20px
margin: 24px 0
text-align: center

// Message Text (dynamic based on score)
// Examples:
// 90-100%: "Outstanding! You're an energy sector expert!"
// 70-89%: "Great job! You've demonstrated strong knowledge..."
// 50-69%: "Good effort! Review the feedback and try again."
// <50%: "Keep learning! Retake the quiz to improve your score."

font-size: 1rem (16px)
line-height: 1.6 (25px)
color: #485163 (neutral-5)
```

**Stats Card:**
```typescript
// Container
background: #F6F6FF (off-white)
border: 1px solid #D9DFEA (neutral-2)
border-radius: 8px
padding: 20px
margin: 24px 0

// Stats List
layout: vertical stack, 12px gap

// Each Stat Item
icon: emoji or lucide icon (16px)
icon-margin-right: 12px
font-size: 0.875rem (14px)
color: #485163 (neutral-5)

// Stat Values
font-weight: 600 (semibold)
color: #22224C (navy)
```

**Action Buttons:**
```typescript
// Button Container
display: flex
gap: 12px
justify-content: center
margin-top: 32px

// Download Badge Button (primary)
background: #0092FF (blue)
color: white
width: 180px
height: 48px
border-radius: 8px
font-size: 0.875rem (14px)
font-weight: 600
icon: Download (lucide, 16px, left side)
gap: 8px

hover:
  background: #007ACC
  box-shadow: 0 4px 8px rgba(0, 146, 255, 0.24)
  transform: translateY(-1px)

// Retake Quiz Button (secondary)
background: white
color: #0092FF (blue)
border: 2px solid #0092FF
width: 180px
height: 48px
border-radius: 8px
font-size: 0.875rem (14px)
font-weight: 600
icon: RotateCcw (lucide, 16px, left side)
gap: 8px

hover:
  background: rgba(0, 146, 255, 0.08)
  border-color: #007ACC
  color: #007ACC
```

**Footer Stats:**
```typescript
// Container
display: flex
justify-content: center
gap: 16px
font-size: 0.75rem (12px)
color: #65738B (neutral-4)

// Best Score (if not first attempt)
font-weight: 600
color: #0092FF (blue)

// Separator
content: "•"
margin: 0 8px

// Attempt Counter
font-weight: 500
```

### Responsive Behavior

**Desktop (lg: 1024px+)**
- Score: 4rem (64px)
- Buttons: side-by-side, 180px each
- Stats card: max-width 400px, centered

**Tablet (md: 768-1023px)**
- Score: 3.5rem (56px)
- Buttons: side-by-side, flex-grow
- Stats card: full width

**Mobile (sm: <768px)**
- Score: 3rem (48px)
- Buttons: stacked vertical, full-width
- Button gap: 12px vertical
- Stats card: padding 16px
- Footer stats: stack vertical, center-aligned

---

## Fullscreen Modal

### Purpose
Provide immersive quiz experience with larger layout and no distractions.

### Trigger
Click "Expand" button (Maximize2 icon) in header of any quiz screen.

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Overlay: black 90% opacity, blur backdrop]               │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Energy Sector Skills Assessment               [X]   │   │ Header (white/10% bg)
│  ├─────────────────────────────────────────────────────┤   │
│  │                                                     │   │
│  │                                                     │   │
│  │         [QUIZ CONTENT - SAME AS EMBEDDED]          │   │ Content area
│  │                                                     │   │
│  │                                                     │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │                        [Footer Buttons]            │   │ Footer (white/10% bg)
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Visual Design Specifications

**Overlay:**
```typescript
// Portal rendered to document.body
position: fixed
inset: 0
z-index: 9999
background: rgba(0, 0, 0, 0.9)
backdrop-filter: blur(8px)

// Animation (entrance)
animation: fade-in 300ms ease
```

**Modal Container:**
```typescript
position: fixed
top: 50%
left: 50%
transform: translate(-50%, -50%)
width: 90vw (max: 1200px)
height: 85vh (max: 900px)
background: white
border-radius: 16px
box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4)
overflow: hidden

// Animation (entrance)
animation: scale-up 400ms cubic-bezier(0.32, 0.72, 0, 1)

@keyframes scale-up {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
```

**Header (Fullscreen):**
```typescript
background: rgba(255, 255, 255, 0.1)
backdrop-filter: blur(12px)
border-bottom: 1px solid rgba(255, 255, 255, 0.2)
padding: 20px 32px
height: 72px

// Title
font-size: 1.25rem (20px)
font-weight: 700
color: #22224C (navy)

// Close Button (X icon)
size: 44px × 44px (larger touch target)
background: rgba(255, 255, 255, 0.2)
hover-background: rgba(255, 255, 255, 0.3)
border-radius: 8px
icon: X (lucide, 20px)
color: #22224C (navy)
transition: all 200ms ease
```

**Content Area (Fullscreen):**
```typescript
// Same content as embedded mode
// But with more generous spacing:
padding: 48px 64px
max-width: 800px
margin: 0 auto

// Question text larger:
font-size: 1.5rem (24px)

// Answer cards larger:
min-height: 100px
padding: 20px
font-size: 1rem (16px)
```

**Footer (Fullscreen):**
```typescript
background: rgba(255, 255, 255, 0.1)
backdrop-filter: blur(12px)
border-top: 1px solid rgba(255, 255, 255, 0.2)
padding: 20px 32px
height: 80px

// Buttons same as embedded mode
// But centered with more space
```

### Close Behavior

**Triggers:**
1. Click X button in header
2. Click overlay outside modal
3. Press ESC key

**Animation (exit):**
```typescript
// Fade out overlay + scale down modal
overlay: fade-out 200ms ease
modal: scale-down 200ms ease

@keyframes scale-down {
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
}
```

**Focus Management:**
- When opening: Focus trap activated, focus moves to close button
- When closing: Focus returns to expand button in embedded view
- Tab navigation: cycles within modal only

### Responsive Behavior

**Desktop (lg: 1024px+)**
- Modal width: 90vw (max 1200px)
- Modal height: 85vh (max 900px)
- Content padding: 48px 64px

**Tablet (md: 768-1023px)**
- Modal width: 95vw
- Modal height: 90vh
- Content padding: 32px 40px

**Mobile (sm: <768px)**
- Modal width: 100vw (full width)
- Modal height: 100vh (full height)
- Border-radius: 0 (no rounded corners)
- Content padding: 24px 20px
- Header padding: 16px 20px
- Footer: fixed bottom, full-width

---

## Loading & Error States

### Loading State (Quiz Initialization)

**Purpose:** Show while quiz data is loading or questions are shuffling.

```typescript
// Container
background: white
border-radius: 12px
padding: 48px
text-align: center

// Spinner
icon: Loader2 (lucide-react, 40px)
color: #0092FF (blue)
animation: spin 1s linear infinite

// Loading Text
margin-top: 16px
font-size: 0.875rem (14px)
color: #65738B (neutral-4)
text: "Loading quiz..."
```

### Error State (Failed to Load Quiz)

**Purpose:** Show if quiz data is missing or failed to load.

```typescript
// Container
background: rgba(239, 68, 68, 0.08) (red tint)
border: 1px solid #EF4444 (red)
border-radius: 12px
padding: 32px
text-align: center

// Error Icon
icon: AlertCircle (lucide-react, 48px)
color: #EF4444 (red)
margin-bottom: 16px

// Error Title
font-size: 1.125rem (18px)
font-weight: 600
color: #22224C (navy)
margin-bottom: 8px
text: "Unable to Load Quiz"

// Error Message
font-size: 0.875rem (14px)
line-height: 1.6
color: #485163 (neutral-5)
margin-bottom: 24px
text: "This quiz is currently unavailable. Please contact the sponsor for assistance."

// Retry Button
background: #0092FF (blue)
color: white
padding: 12px 24px
border-radius: 8px
font-size: 0.875rem (14px)
font-weight: 600
text: "Retry"
```

### No Quiz Data State

**Purpose:** Show if booth has no quiz configured (fallback for missing quizData).

```typescript
// Container
background: #F6F6FF (off-white)
border: 1px dashed #AAB7CB (neutral-3)
border-radius: 12px
padding: 32px
text-align: center

// Icon
emoji: 📝 (48px)
margin-bottom: 16px

// Message
font-size: 0.875rem (14px)
line-height: 1.6
color: #65738B (neutral-4)
text: "This booth doesn't have an interactive quiz yet. Check back soon!"
```

---

## Custom Scrollbar Styling

All scrollable content areas use custom scrollbar:

```css
.quiz-content::-webkit-scrollbar {
  width: 8px;
}

.quiz-content::-webkit-scrollbar-track {
  background: #E5E9F1; /* neutral-1 */
  border-radius: 4px;
}

.quiz-content::-webkit-scrollbar-thumb {
  background: #AAB7CB; /* neutral-3 */
  border-radius: 4px;
}

.quiz-content::-webkit-scrollbar-thumb:hover {
  background: #65738B; /* neutral-4 */
}

/* Firefox */
.quiz-content {
  scrollbar-width: thin;
  scrollbar-color: #AAB7CB #E5E9F1;
}
```

---

## Accessibility Considerations

All screen states must include:

1. **Semantic HTML**: Proper heading hierarchy (h1 > h2 > h3)
2. **ARIA Labels**: All interactive elements have descriptive labels
3. **Keyboard Focus**: Visible focus indicators on all states
4. **Color Contrast**: All text meets WCAG AA (4.5:1 minimum)
5. **Screen Reader**: State changes announced via aria-live
6. **Touch Targets**: Minimum 44×44px on all buttons
7. **Reduced Motion**: Animations disabled with prefers-reduced-motion

See [accessibility.md](./accessibility.md) for complete specifications.
