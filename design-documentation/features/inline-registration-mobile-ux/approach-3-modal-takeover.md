---
title: Approach 3 - Modal Takeover
description: Full-screen modal pattern for maximum usability, reusing existing MultiStepModal
feature: Inline Registration Flow
approach: 3
last-updated: 2025-12-01
version: 1.0.0
related-files:
  - ./README.md
  - ./approach-1-compact-stacked.md
  - ./approach-2-adaptive-expansion.md
dependencies:
  - MultiStepModal component (already exists)
status: draft
---

# Approach 3: Modal Takeover

## Concept

When user clicks "Watch Session", replace the inline flow with the existing bottom drawer modal pattern (`MultiStepModal.tsx`). The video container shows a static state while the modal slides up from bottom, providing maximum vertical space and a familiar mobile interaction pattern.

## Visual Philosophy

"Focused completion" - Registration deserves full-screen attention. Modal pattern is proven, accessible, and provides optimal space for form completion on any device size.

## Key Insight

**This approach already exists** in the codebase as `MultiStepModal.tsx`. The work is primarily integrating it with `VideoSection.tsx` and adjusting the trigger point.

---

## Screen-by-Screen Specifications

### Screen 1: Initial State (Video Container)

**Visual Layout**
```
┌────────────────────────────────────────┐
│  [gradient: navy → blue, full height]  │ ← 16:9 container
│                                        │
│              (centered)                │
│                                        │
│        ┌────────────────────┐         │
│        │   Watch Session    │         │
│        └────────────────────┘         │
│                                        │
│        ┌────────────────────┐         │
│        │   Watch Trailer    │         │
│        └────────────────────┘         │
│                                        │
└────────────────────────────────────────┘
```

**Specifications**:
- Container: Full 16:9 aspect-ratio (430×242px on mobile)
- Background: `linear-gradient(135deg, #22224C 0%, #0092FF 100%)`
- Buttons: Desktop shows centered in container, mobile shows below (current implementation)
- Watch Session button: Primary (blue)
- Watch Trailer button: Secondary (white outline)

**User Interaction**:
1. User sees video container with action buttons
2. Click "Watch Session" → Modal slides up from bottom
3. Container remains visible but dimmed behind modal overlay

---

### Screen 2: Modal Opened (Registration Flow)

**Visual Layout**
```
[Video container visible but dimmed behind overlay]

┌────────────────────────────────────────┐
│           [Handle indicator]           │ ← Bottom drawer handle
├────────────────────────────────────────┤
│  ○──○──○──●──○──○            Step 3/6  │ ← Progress
├────────────────────────────────────────┤
│  Who's Watching With You?              │ ← Header
│  Help us measure the impact...         │
│                                        │
│  You're about to watch:                │
│  [Session Title]                       │ ← Session info
├────────────────────────────────────────┤
│                                        │
│  [Form content for current step]       │ ← Scrollable content
│                                        │
│                                        │
├────────────────────────────────────────┤
│  [Back]              [Continue →]      │ ← Footer buttons
└────────────────────────────────────────┘
```

**Specifications** (from existing MultiStepModal):
- **Modal Container**:
  - Width: 100% on mobile, max-width 600px on tablet+
  - Height: Auto (min-height 50-55vh, max-height 90vh)
  - Border radius: 24px (top corners only)
  - Background: White
  - Shadow: `0 -8px 32px rgba(0, 0, 0, 0.12)`
  - Position: Fixed bottom, slides up from below viewport

- **Overlay**:
  - Background: `rgba(0, 0, 0, 0.4)`
  - Position: Fixed, full screen
  - Z-index: 50
  - Click to close: Yes (triggers onCancel)

- **Handle Indicator**:
  - Width: 48px, height: 4px
  - Color: #D1D5DB (gray)
  - Border radius: 2px
  - Centered horizontally
  - Margin: 12px top, 8px bottom

- **Progress Section**:
  - Educators: 3 dots (3 steps)
  - Students: 2 dots (2 steps)
  - Active dot: Blue #0092FF
  - Inactive dot: Gray #D1D5DB
  - Text: "Step X of Y" in gray
  - Padding: 12px vertical

- **Header Section**:
  - Background: Light gray #FAFBFC
  - Padding: 16px horizontal, 12px vertical
  - Border bottom: 1px solid #E5E7EB
  - Title: 20px bold, Navy #22224C
  - Subtitle: 14px regular, gray
  - Session info box: Light blue background with session title

- **Content Section**:
  - Padding: 24px horizontal, 16px vertical
  - Overflow: Auto (scrollable)
  - Max height: Calc based on viewport to prevent overflow
  - Form fields: Standard myBlueprint styling

- **Footer Section**:
  - Background: Light gray #FAFBFC
  - Padding: 12px horizontal, 16px vertical
  - Border top: 1px solid #E5E7EB
  - Buttons: Back (left), Cancel, Continue/Start Video (right)
  - Sticky: Stays at bottom even when content scrolls

---

## Modal Flow (Reusing Existing Implementation)

### User Type Selection
**Current MultiStepModal implementation** already has this screen:
- Two large buttons: "Educator" and "Student"
- Centered in modal content area
- Click triggers selection and advances to next step

### Educator Flow (3 steps)
**Step 1**: Email input (name field removed per latest implementation)
**Step 2**: Board + School dropdowns
**Step 3**: Class size + Grade level

### Student Flow (2 steps)
**Step 1**: Board + School dropdowns
**Step 2**: Grade level selection

### Returning User Flow
- Cookie detected → Shows confirmation screen with pre-filled info
- "Edit" button → Allows updating information
- "Continue" button → Submits immediately

---

## Animations & Transitions

### Modal Entry Animation

**Sequence** (600ms total):

**T+0ms**: User clicks "Watch Session"
1. Button shows pressed state (scale 0.98x)
2. Overlay fades in (0 → 0.4 opacity) over 200ms
3. Video container remains visible but dimmed

**T+200-600ms**: Modal slides up (400ms)
1. Modal starts: Below viewport (translateY(100%))
2. Modal ends: Anchored at bottom (translateY(0))
3. Timing: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)
4. Handle indicator becomes visible

**CSS Implementation** (already exists):
```css
.animate-slide-up {
  animation: slideUp 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
```

---

### Modal Exit Animation

**Sequence** (400ms total):

**T+0ms**: User clicks Cancel, X, or overlay
1. Modal slides down (translateY(0) → translateY(100%)) over 300ms
2. Opacity fades (1 → 0) over first 200ms

**T+300ms**: Overlay fades out
1. Overlay: 0.4 → 0 opacity over 100ms

**T+400ms**: Video container returns to normal state
1. Remove modal from DOM
2. Video container no longer dimmed
3. Buttons reappear (if they were hidden)

---

### Step-to-Step Transitions

**Already implemented in MultiStepModal**:
- Forward: Content slides left and fades out (200ms)
- New content: Slides in from right and fades in (200ms)
- Backward: Reverse direction
- Progress dots animate: Scale and color transition
- Smooth, polished feel with proper easing

---

## Responsive Breakpoints

### Mobile (< 768px)
- Modal width: 100%
- Modal height: Auto (min 50vh, max 90vh)
- Border radius: 24px (top only)
- Content padding: 24px
- Positioned at screen bottom

### Tablet (768px - 1023px)
- Modal width: 600px (centered)
- Modal height: Auto (min 55vh, max 90vh)
- Border radius: 24px (all corners on desktop)
- Content padding: 32px
- Positioned center-bottom with margin

### Desktop (1024px+)
- Modal width: 700px (centered)
- Modal can be vertically centered (not bottom-anchored)
- Larger padding for comfortable reading
- Hover states more pronounced

**Note**: Current implementation uses bottom drawer on all sizes. Can be enhanced for desktop with center positioning.

---

## Integration with VideoSection

### Current Flow
`VideoSection.tsx` currently uses `InlineRegistrationFlow` component rendered inside the 16:9 container.

### Proposed Change
Replace inline flow with modal trigger:

**Before** (Inline):
```tsx
{videoState === 'registration' && (
  <InlineRegistrationFlow
    sessionId={session.id}
    sessionTitle={session.title}
    onRegistrationComplete={handleRegistrationSuccess}
    onCancel={handleRegistrationCancel}
  />
)}
```

**After** (Modal):
```tsx
// In initial state, show buttons in container
{videoState === 'initial' && (
  <div className="flex flex-col gap-4 items-center">
    <button onClick={handleWatchClick} className="btn-primary">
      Watch Session
    </button>
  </div>
)}

// Modal rendered outside container
<MultiStepModal
  isOpen={videoState === 'registration'}
  onClose={handleRegistrationCancel}
  sessionTitle={session.title}
  sessionId={session.id}
  onSubmit={handleRegistrationSuccess}
/>
```

### Minimal Code Changes Required
1. Import `MultiStepModal` instead of `InlineRegistrationFlow`
2. Change state management to control modal visibility
3. Update `handleWatchClick` to set `videoState = 'registration'`
4. Modal handles entire flow, no container state changes needed

---

## Accessibility Specifications

### Modal Accessibility (Already Implemented)
**ARIA attributes**:
- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby="drawer-title"`

**Focus management**:
- On open: Focus moves to first input field
- On close: Focus returns to "Watch Session" button
- Tab trapping: Focus stays within modal while open
- ESC key: Closes modal

**Screen reader**:
- Modal opening announced: "Dialog opened: Who's Watching With You?"
- Step changes announced: "Step 2 of 6: What school board?"
- Progress updates announced: "Progress: Step 2 of 6"

**Touch targets**:
- All buttons: Minimum 44×44px (WCAG AA compliant)
- Inputs: 44px height minimum
- Adequate spacing: 8px minimum between targets

**Keyboard navigation**:
- Tab: Moves through form fields
- Enter: Submits current step / advances
- ESC: Closes modal
- Arrow keys: Navigate button grids (class size, grade)

**Color contrast**:
- All text meets WCAG AA (4.5:1 minimum)
- Error messages: Red on white (4.65:1)
- Helper text: Gray on white (5.12:1)

---

## Pros & Cons

### Pros
✅ **Already Exists**: MultiStepModal is fully implemented and tested
✅ **Maximum Space**: Full screen available on mobile (90vh)
✅ **Proven Pattern**: Bottom drawer is familiar mobile interaction
✅ **Accessibility**: Already WCAG AA compliant with full keyboard support
✅ **No Container Constraints**: Not limited by 16:9 aspect ratio
✅ **Keyboard Friendly**: Modal handles keyboard appearance perfectly
✅ **Error Handling**: Plenty of room for validation messages and helper text
✅ **Cookie Pre-fill**: Existing confirmation screen for returning users
✅ **Low Risk**: Extensively tested pattern, no usability unknowns
✅ **Quick Implementation**: 1 day to integrate (code already exists)
✅ **Platform Consistency**: Matches mobile app modal patterns

### Cons
❌ **Breaks Inline Concept**: No longer "inline" registration in video container
❌ **Context Switch**: User leaves video container context (though it stays visible)
❌ **Design Shift**: Different from original design vision
❌ **Less Novel**: Standard modal pattern (not unique or memorable)
⚠️ **Desktop Experience**: Bottom drawer less natural on large screens (could be centered)

---

## Implementation Complexity

**Effort**: Very Low (0.5-1 day)
**Risk**: Very Low (reusing existing, tested code)

### Changes Required

**1. VideoSection.tsx** (minimal changes):
```tsx
// Replace InlineRegistrationFlow import
- import InlineRegistrationFlow from '@/components/session/InlineRegistrationFlow';
+ import MultiStepModal from '@/components/registration/MultiStepModal';

// Update state handling
const handleWatchClick = () => {
  SessionAnalytics.watchClicked(session.id, session.title, 'detail');
  setVideoState('registration'); // This now opens modal instead
};

// Replace inline flow with modal
- {videoState === 'registration' && (
-   <InlineRegistrationFlow ... />
- )}

+ <MultiStepModal
+   isOpen={videoState === 'registration'}
+   onClose={handleRegistrationCancel}
+   sessionTitle={session.title}
+   sessionId={session.id}
+   onSubmit={handleRegistrationSuccess}
+ />
```

**2. Optional Enhancements**:
- Add blur effect to video container when modal open
- Adjust modal max-width for desktop (center instead of bottom)
- Enhance handle indicator visibility
- Add haptic feedback on mobile (iOS)

**3. Testing**:
- Verify modal opens correctly from video section
- Test on iPhone SE, iPhone 14 Pro Max, iPad
- Verify keyboard behavior
- Test existing cookie pre-fill functionality
- Verify accessibility with screen reader

### Migration Path
1. **Phase 1** (Day 1): Switch from inline to modal
2. **Phase 2** (Optional): Enhance modal for desktop positioning
3. **Phase 3** (Optional): A/B test vs Approach 2

---

## When to Choose This Approach

**Choose Approach 3 (Modal) if**:
- Maximum usability is top priority over design novelty
- Development timeline is very tight (< 1 week)
- You want lowest implementation risk (reuse tested code)
- Users are on diverse devices (wide range of screen sizes)
- Accessibility compliance is critical (WCAG AAA target)
- Standard patterns preferred over custom interactions
- Desktop experience is not primary concern

**Avoid Approach 3 if**:
- Inline registration within video container is hard requirement
- Visual continuity with video container is essential
- You want unique, memorable design pattern
- Desktop users are significant portion of audience (bottom drawer awkward)

---

## Testing Checklist

### Functionality Testing
- [ ] Modal opens when "Watch Session" clicked
- [ ] Overlay darkens video container
- [ ] Modal slides up smoothly from bottom
- [ ] User type selection works (Educator/Student)
- [ ] Form validation works on all steps
- [ ] Back button navigates to previous step
- [ ] Continue button advances to next step
- [ ] Final "Start Video" submits and closes modal
- [ ] Cancel button closes modal and returns to initial state
- [ ] Cookie pre-fill works for returning users
- [ ] Confirmation screen shows for returning users

### Visual Testing
- [ ] Modal renders at correct size on mobile
- [ ] Modal renders at correct size on tablet
- [ ] Modal renders at correct size on desktop
- [ ] Handle indicator visible and centered
- [ ] Progress dots display correctly
- [ ] Session title shown in info box
- [ ] Form fields properly styled
- [ ] Error messages display inline
- [ ] Footer buttons properly positioned

### Animation Testing
- [ ] Overlay fade-in smooth (200ms)
- [ ] Modal slide-up smooth (400ms at 60fps)
- [ ] Modal slide-down smooth on close
- [ ] Step transitions smooth (200ms)
- [ ] Progress dots animate correctly
- [ ] No janky animations or layout shift

### Keyboard Testing
- [ ] Focus moves to first input on modal open
- [ ] Tab order is logical
- [ ] Enter key advances steps
- [ ] ESC key closes modal
- [ ] Focus returns to button after modal closes
- [ ] Arrow keys work in button grids

### Accessibility Testing
- [ ] ARIA attributes present and correct
- [ ] Screen reader announces modal opening
- [ ] Screen reader announces step changes
- [ ] All touch targets ≥ 44×44px
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible
- [ ] Keyboard navigation completes flow

### Device Testing
- [ ] iPhone SE (375×667px)
- [ ] iPhone 14 (390×844px)
- [ ] iPhone 14 Pro Max (430×932px)
- [ ] Android small (360×640px)
- [ ] iPad (768×1024px)
- [ ] Desktop (1024px+)
- [ ] iOS Safari
- [ ] Chrome Mobile
- [ ] Samsung Internet

---

## Performance Metrics

### Target Metrics
- Modal open animation: 60fps
- Modal close animation: 60fps
- Step transitions: 60fps
- Time to interactive: < 100ms
- First render: < 50ms

### Monitoring
- Track with Chrome DevTools Performance tab
- Monitor with Lighthouse performance audit
- Use React DevTools Profiler
- Track Cumulative Layout Shift (CLS < 0.1)

---

## Success Metrics

### UX Metrics
- Form completion rate > 95%
- Average time to video start < 15 seconds (first time)
- Average time to video start < 3 seconds (returning user)
- Drop-off rate per step < 5%
- User satisfaction rating > 4.5/5

### Technical Metrics
- Zero keyboard-related bugs
- Zero focus management issues
- Zero accessibility violations
- Animation performance 60fps
- CLS < 0.1

---

## Desktop Enhancement (Optional Phase 2)

### Centered Modal for Desktop

Instead of bottom drawer on desktop, center the modal:

**Visual Layout (Desktop)**:
```
[Darkened overlay with centered modal]

        ┌────────────────────────┐
        │  [Centered Modal 600px]│
        │  ○──○──●──○──○          │
        │  Step 3 of 6            │
        │                         │
        │  What school board?     │
        │  [Dropdown ▼         ]  │
        │                         │
        │  [Back] [Continue →]    │
        └────────────────────────┘
```

**Implementation**:
```css
@media (min-width: 1024px) {
  .modal-drawer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 24px; /* All corners, not just top */
    max-width: 600px;
    max-height: 80vh;
  }

  .modal-drawer.entering {
    animation: fadeScaleIn 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes fadeScaleIn {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
}
```

---

## Related Documentation
- [Overview & Comparison](./README.md)
- [Approach 1: Compact Stacked](./approach-1-compact-stacked.md)
- [Approach 2: Adaptive Expansion](./approach-2-adaptive-expansion.md)
- [Existing MultiStepModal Component](../../../components/registration/MultiStepModal.tsx)

---

**Design Note**: This approach prioritizes proven usability over design novelty. The modal pattern is familiar, accessible, and provides optimal form completion experience on all devices. While it breaks the "inline" concept, it delivers the best user outcomes with minimal development risk.
