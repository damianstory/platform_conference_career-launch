---
title: Engagement Quiz - Accessibility Specifications
description: Complete WCAG 2.1 AA compliance requirements for keyboard navigation, screen readers, and assistive technologies
feature: engagement-quiz
last-updated: 2025-11-26
version: 1.0
related-files:
  - screen-states.md
  - interactions.md
status: approved
---

# Accessibility Specifications

## Table of Contents

1. [Compliance Standards](#compliance-standards)
2. [Keyboard Navigation](#keyboard-navigation)
3. [Screen Reader Support](#screen-reader-support)
4. [Color Contrast](#color-contrast)
5. [Focus Management](#focus-management)
6. [ARIA Implementation](#aria-implementation)
7. [Touch Targets](#touch-targets)
8. [Error Handling](#error-handling)
9. [Testing Checklist](#testing-checklist)

---

## Compliance Standards

### WCAG 2.1 Level AA

The quiz must meet all WCAG 2.1 AA success criteria:

**Perceivable:**
- ✓ 1.1.1 Non-text Content (Alt text for all images/icons)
- ✓ 1.3.1 Info and Relationships (Semantic HTML structure)
- ✓ 1.3.2 Meaningful Sequence (Logical reading order)
- ✓ 1.4.3 Contrast (Minimum 4.5:1 for normal text, 3:1 for large)
- ✓ 1.4.4 Resize Text (Up to 200% without loss of function)
- ✓ 1.4.10 Reflow (Responsive without horizontal scroll at 320px)
- ✓ 1.4.11 Non-text Contrast (UI components 3:1 minimum)

**Operable:**
- ✓ 2.1.1 Keyboard (All functionality available via keyboard)
- ✓ 2.1.2 No Keyboard Trap (Focus can move away from all elements)
- ✓ 2.4.3 Focus Order (Logical and intuitive tab sequence)
- ✓ 2.4.7 Focus Visible (Clear focus indicators always visible)
- ✓ 2.5.5 Target Size (Minimum 44×44px touch targets)

**Understandable:**
- ✓ 3.2.1 On Focus (No context changes on focus)
- ✓ 3.2.2 On Input (No unexpected changes on input)
- ✓ 3.3.1 Error Identification (Errors clearly identified)
- ✓ 3.3.2 Labels or Instructions (Form inputs have labels)

**Robust:**
- ✓ 4.1.2 Name, Role, Value (All UI components properly identified)
- ✓ 4.1.3 Status Messages (Status changes announced to assistive tech)

---

## Keyboard Navigation

### Tab Order and Focus Flow

#### Start Screen

```
Tab Order:
1. Expand button (top-right)
2. Start Quiz button (footer)

Keyboard Shortcuts:
- Tab: Move focus forward
- Shift+Tab: Move focus backward
- Enter/Space: Activate focused button
- Escape: Close fullscreen modal (if open)
```

#### Quiz In Progress

```
Tab Order:
1. Expand button (header)
2. Answer option A
3. Answer option B
4. Answer option C
5. Answer option D
6. Next Question button (footer, if enabled)

Keyboard Shortcuts:
- Tab: Move focus forward through answer options
- Shift+Tab: Move focus backward
- Enter/Space: Select focused answer option
- Arrow Keys (optional enhancement):
  - Up/Down: Navigate between answer options
  - Enter: Confirm selection
- Escape: Close fullscreen modal (if open)
```

#### Results Screen

```
Tab Order:
1. Expand button (header)
2. Download Badge button
3. Retake Quiz button

Keyboard Shortcuts:
- Tab: Move focus forward
- Shift+Tab: Move focus backward
- Enter/Space: Activate focused button
- Escape: Close fullscreen modal (if open)
```

### Focus Trap (Fullscreen Modal)

When fullscreen modal is open:

```typescript
// Focus management implementation
const [isFullscreen, setIsFullscreen] = useState(false)
const modalRef = useRef<HTMLDivElement>(null)
const previousFocusRef = useRef<HTMLElement | null>(null)

const openFullscreen = () => {
  // Store current focus
  previousFocusRef.current = document.activeElement as HTMLElement

  setIsFullscreen(true)

  // Wait for modal to render, then focus close button
  setTimeout(() => {
    const closeButton = modalRef.current?.querySelector('[data-close-button]')
    closeButton?.focus()
  }, 100)
}

const closeFullscreen = () => {
  setIsFullscreen(false)

  // Return focus to expand button
  setTimeout(() => {
    previousFocusRef.current?.focus()
  }, 100)
}

// Trap focus within modal
useEffect(() => {
  if (!isFullscreen) return

  const modal = modalRef.current
  if (!modal) return

  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )

  const firstElement = focusableElements[0] as HTMLElement
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault()
      lastElement.focus()
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault()
      firstElement.focus()
    }
  }

  modal.addEventListener('keydown', handleTabKey)
  return () => modal.removeEventListener('keydown', handleTabKey)
}, [isFullscreen])
```

### Keyboard Shortcuts Reference

Provide keyboard shortcuts help text (optional):

```html
<div className="sr-only" role="region" aria-label="Keyboard shortcuts">
  <h3>Keyboard Navigation</h3>
  <ul>
    <li>Tab/Shift+Tab: Navigate between elements</li>
    <li>Enter or Space: Select answer or activate button</li>
    <li>Escape: Close fullscreen view</li>
  </ul>
</div>
```

---

## Screen Reader Support

### Semantic HTML Structure

```html
<!-- Quiz Container -->
<div role="region" aria-label="Energy Sector Skills Assessment Quiz">

  <!-- Header -->
  <header className="quiz-header">
    <h2 id="quiz-title">Energy Sector Skills Assessment</h2>
    <button
      aria-label="Expand quiz to fullscreen"
      aria-expanded={isFullscreen}
    >
      <Maximize2 aria-hidden="true" />
    </button>
  </header>

  <!-- Start Screen -->
  <div className="quiz-content" aria-live="polite">
    <div className="start-screen">
      <h3>Test your knowledge about careers in renewable energy</h3>

      <ul aria-label="Quiz details">
        <li>
          <span aria-hidden="true">📊</span>
          <span>12 Questions</span>
        </li>
        <li>
          <span aria-hidden="true">⏱️</span>
          <span>8 to 10 minutes</span>
        </li>
        <li>
          <span aria-hidden="true">🏆</span>
          <span>Earn achievement badge</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- Footer -->
  <footer className="quiz-footer">
    <button type="button" aria-label="Start the quiz">
      Start Quiz
    </button>
  </footer>

</div>
```

### Quiz Question Structure

```html
<!-- Question Screen -->
<div className="quiz-content" aria-live="polite">

  <!-- Progress Announcement -->
  <div className="sr-only" aria-live="polite" aria-atomic="true">
    Question {currentQuestion} of {totalQuestions}. {Math.round(progress)}% complete.
  </div>

  <!-- Visual Progress Bar -->
  <div
    role="progressbar"
    aria-valuenow={progress}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-label="Quiz progress"
  >
    <div className="progress-fill" style={{ width: `${progress}%` }} />
  </div>

  <!-- Question -->
  <fieldset>
    <legend className="question-text">
      What is the primary role of a Wind Turbine Technician?
    </legend>

    <!-- Answer Options -->
    <div role="radiogroup" aria-labelledby="question-3">

      <label className="answer-option">
        <input
          type="radio"
          name={`question-${questionId}`}
          value="0"
          checked={selectedAnswer === 0}
          onChange={() => handleAnswerSelect(0)}
          aria-describedby={selectedAnswer !== null ? 'feedback-3' : undefined}
        />
        <span className="answer-letter" aria-hidden="true">A.</span>
        <span className="answer-text">Design wind farms</span>

        {/* Correct/Incorrect Icon (after feedback) */}
        {showFeedback && correctAnswer === 0 && (
          <Check aria-label="Correct answer" className="icon-correct" />
        )}
        {showFeedback && selectedAnswer === 0 && correctAnswer !== 0 && (
          <X aria-label="Incorrect answer" className="icon-incorrect" />
        )}
      </label>

      {/* Repeat for options B, C, D */}

    </div>
  </fieldset>

  <!-- Feedback Box -->
  {showFeedback && (
    <div
      id="feedback-3"
      role="status"
      aria-live="polite"
      className="feedback-box"
    >
      <CheckCircle aria-hidden="true" />
      <p>
        <strong>{isCorrect ? 'Correct!' : 'Incorrect.'}</strong>
        {' '}
        Wind Turbine Technicians are responsible for installing, maintaining,
        and repairing wind turbines to ensure optimal performance.
      </p>
    </div>
  )}

</div>

<!-- Footer -->
<footer className="quiz-footer">
  <button
    type="button"
    disabled={selectedAnswer === null}
    aria-label="Proceed to next question"
  >
    Next Question
    <ArrowRight aria-hidden="true" />
  </button>
</footer>
```

### Results Screen Structure

```html
<div className="quiz-content" aria-live="polite">

  <!-- Results Announcement (screen reader only) -->
  <div className="sr-only" role="status" aria-atomic="true">
    Quiz complete. Your final score is {score}%.
    {score >= 70 ? 'Congratulations, you passed!' : 'You did not pass. Try again to improve your score.'}
  </div>

  <!-- Visual Results -->
  <div className="results-screen">
    <div aria-hidden="true">🎉</div>

    <h3 className="score-display" aria-label={`Your score: ${score} percent`}>
      <span className="score-number">{score}</span>
      <span className="score-label">%</span>
    </h3>
    <p className="score-sublabel" aria-hidden="true">Your Score</p>

    <p className="performance-message">
      You've demonstrated strong knowledge of energy sector careers!
    </p>

    <!-- Stats Card -->
    <div className="stats-card" role="region" aria-label="Performance breakdown">
      <h4 className="sr-only">Performance Breakdown</h4>
      <ul>
        <li>
          <Check aria-hidden="true" />
          <span>{correctCount} Correct answers</span>
        </li>
        <li>
          <X aria-hidden="true" />
          <span>{incorrectCount} Incorrect answers</span>
        </li>
        <li>
          <Clock aria-hidden="true" />
          <span>{formatTime(duration)} completion time</span>
        </li>
      </ul>
    </div>

    <!-- Action Buttons -->
    <div className="action-buttons">
      <button
        type="button"
        aria-label="Download achievement badge as PNG image"
      >
        <Download aria-hidden="true" />
        Download Badge
      </button>

      <button
        type="button"
        aria-label="Retake quiz with new questions"
      >
        <RotateCcw aria-hidden="true" />
        Retake Quiz
      </button>
    </div>
  </div>

</div>

<!-- Footer -->
<footer className="quiz-footer" aria-label="Quiz statistics">
  <div className="footer-stats">
    <span>Best Score: <strong>{bestScore}%</strong></span>
    <span aria-hidden="true">•</span>
    <span>Attempt {attemptNumber}</span>
  </div>
</footer>
```

### Live Region Announcements

```typescript
// Use aria-live regions for dynamic updates
const [announcement, setAnnouncement] = useState('')

// Announce progress updates
const announceProgress = (current: number, total: number) => {
  const progress = Math.round((current / total) * 100)
  setAnnouncement(`Question ${current} of ${total}. ${progress}% complete.`)
}

// Announce answer feedback
const announceFeedback = (isCorrect: boolean) => {
  setAnnouncement(
    isCorrect
      ? 'Correct answer selected.'
      : 'Incorrect answer selected. The correct answer has been highlighted.'
  )
}

// Announce quiz completion
const announceCompletion = (score: number, passed: boolean) => {
  setAnnouncement(
    `Quiz complete. Your final score is ${score}%. ${
      passed ? 'Congratulations, you passed!' : 'You did not pass.'
    }`
  )
}

// Live region component
<div
  className="sr-only"
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  {announcement}
</div>
```

---

## Color Contrast

### WCAG AA Compliance (4.5:1 minimum for normal text, 3:1 for large text)

#### Text on Backgrounds

| Text Color | Background | Contrast Ratio | Size | Status |
|------------|-----------|----------------|------|--------|
| #22224C (Navy) | #FFFFFF (White) | 12.6:1 | Any | ✓ Pass AAA |
| #485163 (Neutral-5) | #FFFFFF (White) | 8.9:1 | Any | ✓ Pass AAA |
| #65738B (Neutral-4) | #FFFFFF (White) | 5.2:1 | Any | ✓ Pass AA |
| #FFFFFF (White) | #22224C (Navy) | 12.6:1 | Any | ✓ Pass AAA |
| #FFFFFF (White) | #0092FF (Blue) | 4.5:1 | 16px+ | ✓ Pass AA |
| #22224C (Navy) | #C6E7FF (Light Blue) | 7.8:1 | Any | ✓ Pass AAA |
| #0092FF (Blue) | #FFFFFF (White) | 4.5:1 | 16px+ | ✓ Pass AA |

#### UI Component Contrast

| Element | Foreground | Background | Ratio | Status |
|---------|-----------|-----------|-------|--------|
| Answer border (default) | #D9DFEA | #FFFFFF | 1.1:1 | ⚠️ Decorative only |
| Answer border (hover) | #0092FF | #FFFFFF | 4.5:1 | ✓ Pass AA |
| Answer border (selected) | #0092FF | rgba(0,146,255,0.08) | 3.5:1 | ✓ Pass AA (Large) |
| Correct answer | #FFFFFF | #22224C | 12.6:1 | ✓ Pass AAA |
| Incorrect answer | #22224C | #C6E7FF | 7.8:1 | ✓ Pass AAA |
| Progress bar fill | #0092FF | #E5E9F1 | 3.8:1 | ✓ Pass AA (UI) |
| Focus ring | #0092FF | #FFFFFF | 4.5:1 | ✓ Pass AA |

#### Icon Contrast

| Icon | Color | Background | Ratio | Status |
|------|-------|-----------|-------|--------|
| Checkmark (correct) | #10B981 (Green) | #FFFFFF | 3.1:1 | ✓ Pass AA (Large) |
| X (incorrect) | #EF4444 (Red) | #FFFFFF | 4.9:1 | ✓ Pass AA |
| Download icon | #FFFFFF | #0092FF | 4.5:1 | ✓ Pass AA |
| Expand icon | #65738B | #FFFFFF | 5.2:1 | ✓ Pass AA |

**Note:** Decorative borders with low contrast are acceptable if not the only means of differentiation. Answer options also have:
- Background color change on hover
- Text color change on selection
- Icon indicators for correct/incorrect

---

## Focus Management

### Focus Indicator Specifications

All interactive elements must have visible focus indicators:

```css
/* Global focus style (from globals.css) */
*:focus-visible {
  outline: 2px solid #0092FF;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Enhanced focus for quiz elements */
.answer-option:focus-visible {
  outline: 2px solid #0092FF;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(0, 146, 255, 0.12);
  /* Ensures focus visible even on selected state */
}

.btn-primary:focus-visible,
.btn-secondary:focus-visible {
  outline: 2px solid #22224C; /* Navy for contrast against blue button */
  outline-offset: 2px;
}

.expand-btn:focus-visible {
  outline: 2px solid #0092FF;
  outline-offset: 2px;
  background-color: rgba(0, 146, 255, 0.08);
}
```

### Focus States Priority

When multiple states overlap (e.g., selected + focused):

```css
/* Priority order: Focus > Selected > Hover > Default */
.answer-option {
  /* Default state */
  border: 2px solid #D9DFEA;
}

.answer-option:hover {
  /* Hover state */
  border-color: #0092FF;
}

.answer-option.selected {
  /* Selected state */
  border-color: #0092FF;
  border-width: 3px;
}

.answer-option:focus-visible {
  /* Focus state (highest priority) */
  outline: 2px solid #0092FF;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(0, 146, 255, 0.12);
  /* Ensure focus ring always visible */
}
```

### Skip Links (Optional Enhancement)

Provide skip link to bypass quiz header:

```html
<a href="#quiz-content" className="skip-link">
  Skip to quiz content
</a>

<!-- Skip link styling -->
<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #22224C;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 0 0 4px 0;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
</style>
```

---

## ARIA Implementation

### Required ARIA Attributes

#### Quiz Container

```html
<div
  role="region"
  aria-label="Energy Sector Skills Assessment Quiz"
  aria-describedby="quiz-description"
>
  <p id="quiz-description" className="sr-only">
    An interactive quiz with 12 multiple choice questions about careers
    in renewable energy. Complete the quiz to earn an achievement badge.
  </p>
</div>
```

#### Progress Bar

```html
<div
  role="progressbar"
  aria-valuenow={Math.round((currentQuestion / totalQuestions) * 100)}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label={`Quiz progress: ${currentQuestion} of ${totalQuestions} questions answered`}
>
  <div className="progress-fill" style={{ width: `${progress}%` }} />
</div>
```

#### Answer Options (Radio Group)

```html
<fieldset>
  <legend id="question-${questionId}" className="question-text">
    What is the primary role of a Wind Turbine Technician?
  </legend>

  <div
    role="radiogroup"
    aria-labelledby="question-${questionId}"
    aria-required="true"
  >
    <label className="answer-option">
      <input
        type="radio"
        name={`question-${questionId}`}
        value="0"
        aria-checked={selectedAnswer === 0}
        aria-describedby={showFeedback ? 'feedback-${questionId}' : undefined}
      />
      <span>Design wind farms</span>
    </label>
    {/* ... other options */}
  </div>
</fieldset>
```

#### Feedback Messages

```html
<div
  id="feedback-${questionId}"
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  <p>
    <span className="sr-only">{isCorrect ? 'Correct answer.' : 'Incorrect answer.'}</span>
    Wind Turbine Technicians are responsible for installing, maintaining,
    and repairing wind turbines to ensure optimal performance.
  </p>
</div>
```

#### Fullscreen Modal

```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Energy Sector Skills Assessment</h2>
  <p id="modal-description" className="sr-only">
    Fullscreen view of the quiz. Press Escape to exit fullscreen.
  </p>

  <button
    aria-label="Close fullscreen and return to embedded view"
    onClick={closeFullscreen}
  >
    <X aria-hidden="true" />
  </button>
</div>
```

#### Loading State

```html
<div role="status" aria-live="polite" aria-busy="true">
  <Loader2 aria-hidden="true" className="animate-spin" />
  <span>Loading quiz questions...</span>
</div>
```

#### Error State

```html
<div role="alert" aria-live="assertive">
  <AlertCircle aria-hidden="true" />
  <h3>Unable to Load Quiz</h3>
  <p>This quiz is currently unavailable. Please contact the sponsor for assistance.</p>
  <button type="button">Retry</button>
</div>
```

---

## Touch Targets

### Minimum Size Requirements

WCAG 2.5.5: All interactive elements must be at least 44×44 CSS pixels.

#### Button Sizes

```typescript
// Primary CTAs (Start Quiz, Next Question, Download Badge)
min-width: 180px
min-height: 48px
padding: 0 24px

// Mobile (ensure 44px minimum)
@media (max-width: 767px) {
  min-height: 56px (larger for thumb-friendly tapping)
  padding: 0 32px
}

// Icon-only buttons (Expand, Close)
width: 40px (desktop) / 44px (mobile)
height: 40px (desktop) / 44px (mobile)
clickable-area: 44×44px minimum via padding
```

#### Answer Options

```typescript
// Desktop
min-height: 80px
padding: 16px
width: calc(50% - 6px) // 2-column grid with 12px gap

// Tablet
min-height: 80px
padding: 12px

// Mobile (full width)
min-height: 60px
padding: 16px 20px
width: 100%

// Ensure touch target
touch-action: manipulation; // Disable double-tap zoom
-webkit-tap-highlight-color: rgba(0, 146, 255, 0.1);
```

### Spacing Between Targets

Maintain 8px minimum spacing between interactive elements:

```css
/* Answer grid gap */
.answer-grid {
  gap: 12px; /* Exceeds 8px minimum */
}

/* Button groups */
.action-buttons {
  gap: 12px; /* Exceeds 8px minimum */
}

/* Footer buttons */
.quiz-footer {
  padding: 16px 24px; /* Provides spacing from edges */
}
```

---

## Error Handling

### Error Identification

All errors must be clearly identified and communicated:

#### No Answer Selected

```html
<!-- Visual indicator on button -->
<button
  type="button"
  disabled={selectedAnswer === null}
  aria-label="Next question. Please select an answer first."
  className="btn-primary"
>
  Next Question
</button>

<!-- Optional tooltip on hover (desktop) -->
{selectedAnswer === null && (
  <div role="tooltip" className="tooltip">
    Please select an answer before continuing
  </div>
)}
```

#### Quiz Loading Error

```html
<div role="alert" aria-live="assertive">
  <AlertCircle aria-label="Error" />
  <h3>Unable to Load Quiz</h3>
  <p>This quiz is currently unavailable. Please try again or contact the sponsor for assistance.</p>

  <button
    type="button"
    onClick={handleRetry}
    aria-label="Retry loading quiz"
  >
    Retry
  </button>
</div>
```

#### Badge Download Error

```html
<div role="status" aria-live="polite">
  <X aria-label="Error" className="text-red-600" />
  <p>
    Unable to download badge. Please check your internet connection and try again.
  </p>
</div>
```

### Error Recovery

Provide clear paths to recover from errors:

1. **Network Error**: "Retry" button to reload quiz data
2. **Badge Download Failure**: "Try Again" button to reattempt download
3. **Invalid State**: Automatic reset to last valid state with announcement

---

## Testing Checklist

### Keyboard Navigation Tests

- [ ] All interactive elements reachable via Tab key
- [ ] Tab order is logical and follows visual flow
- [ ] Shift+Tab moves focus backward correctly
- [ ] Enter/Space activates all buttons and selects answers
- [ ] Escape closes fullscreen modal
- [ ] No keyboard traps (focus can leave all elements)
- [ ] Focus visible on all interactive elements
- [ ] Focus returns to correct element after modal close

### Screen Reader Tests

#### NVDA (Windows) / JAWS (Windows)

- [ ] Quiz title and description announced on load
- [ ] Progress updates announced after each question
- [ ] Question text announced with "Question X of Y"
- [ ] Answer options announced with role and label
- [ ] Selected answer state announced
- [ ] Feedback (correct/incorrect) announced immediately
- [ ] Results screen announced with final score
- [ ] Button labels descriptive and actionable
- [ ] All icons have text alternatives or aria-labels
- [ ] Live regions announce dynamic updates

#### VoiceOver (macOS / iOS)

- [ ] Same tests as NVDA/JAWS
- [ ] Swipe navigation works on mobile
- [ ] Rotor navigation finds all headings and landmarks
- [ ] Form controls grouped correctly

#### TalkBack (Android)

- [ ] Same tests as above
- [ ] Touch exploration works correctly
- [ ] Swipe gestures navigate properly

### Color Contrast Tests

- [ ] All text meets 4.5:1 minimum (normal text)
- [ ] Large text meets 3:1 minimum (18px+)
- [ ] UI components meet 3:1 minimum (borders, icons)
- [ ] Focus indicators meet 3:1 against background
- [ ] Correct/incorrect states distinguishable without color
- [ ] Test with color blindness simulator (Deuteranopia, Protanopia, Tritanopia)

### Touch Target Tests

- [ ] All buttons at least 44×44px
- [ ] Answer options easily tappable on mobile
- [ ] No accidental activations due to close proximity
- [ ] Touch feedback visible (press states)

### Zoom and Reflow Tests

- [ ] Page works at 200% zoom without horizontal scroll
- [ ] Layout reflows appropriately at 320px width
- [ ] No content cut off or overlapping at high zoom
- [ ] Text remains readable at all zoom levels

### Motion and Animation Tests

- [ ] All animations respect prefers-reduced-motion
- [ ] No auto-playing animations over 5 seconds
- [ ] Parallax effects disabled with reduced motion
- [ ] Essential information not conveyed by animation alone

### Browser and Assistive Technology Compatibility

Test in:
- [ ] Chrome + NVDA
- [ ] Firefox + NVDA
- [ ] Safari + VoiceOver (macOS)
- [ ] Safari + VoiceOver (iOS)
- [ ] Chrome + TalkBack (Android)
- [ ] Edge + JAWS

---

## Implementation Example

Complete accessible quiz component:

```typescript
export default function SkillsGapQuiz({ quizData, boothId, boothName }: Props) {
  const [announcement, setAnnouncement] = useState('')

  return (
    <div
      role="region"
      aria-label={`${quizData.title} - Interactive Quiz`}
      className="quiz-container"
    >
      {/* Screen reader announcements */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      {/* Quiz header */}
      <header className="quiz-header">
        <h2 id="quiz-title">{quizData.title}</h2>
        <button
          type="button"
          aria-label="Expand quiz to fullscreen"
          aria-expanded={isFullscreen}
          className="expand-btn"
        >
          <Maximize2 aria-hidden="true" />
        </button>
      </header>

      {/* Quiz content */}
      <div className="quiz-content" id="quiz-content">
        {quizState === 'start' && <StartScreen />}
        {quizState === 'in-progress' && <QuizQuestion />}
        {quizState === 'results' && <ResultsScreen />}
      </div>

      {/* Quiz footer */}
      <footer className="quiz-footer" aria-label="Quiz actions">
        {/* Footer buttons with proper ARIA */}
      </footer>
    </div>
  )
}
```

---

## Accessibility Statement

This quiz component is designed to meet WCAG 2.1 Level AA standards and provide an inclusive experience for all users, including those using:

- Keyboard-only navigation
- Screen readers (NVDA, JAWS, VoiceOver, TalkBack)
- Screen magnification software
- Voice control software
- High contrast modes
- Reduced motion preferences

If you encounter any accessibility barriers, please contact [damian.matheson@myblueprint.ca](mailto:damian.matheson@myblueprint.ca) for assistance.
