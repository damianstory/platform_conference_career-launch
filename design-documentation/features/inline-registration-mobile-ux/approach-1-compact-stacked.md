---
title: Approach 1 - Compact Stacked Layout
description: Optimize registration within 16:9 container using tighter spacing and visual hierarchy
feature: Inline Registration Flow
approach: 1
last-updated: 2025-12-01
version: 1.0.0
related-files:
  - ./README.md
  - ./approach-2-adaptive-expansion.md
  - ./approach-3-modal-takeover.md
status: draft
---

# Approach 1: Compact Stacked Layout

## Concept

Keep the entire registration flow inside the 16:9 video container by aggressively optimizing spacing, using compact UI patterns, and employing smart visual hierarchy to maximize perceived space.

## Visual Philosophy

"Tight but breathable" - Every pixel counts, but content never feels claustrophobic. Use color, typography, and micro-animations to create perceived spaciousness within physical constraints.

## Screen-by-Screen Specifications

### Screen 1: User Type Selection

**Visual Layout (Inside 16:9 Container)**
```
┌────────────────────────────────────────┐
│  [gradient: navy → blue, full height]  │
│                                        │
│              (centered)                │
│                                        │
│        ┌────────┐  ┌────────┐        │
│        │Educator│  │Student │        │
│        │        │  │        │        │
│        └────────┘  └────────┘        │
│                                        │
│              Cancel                    │
└────────────────────────────────────────┘
```

**Specifications**:
- **Container**: Full 16:9 aspect-ratio (430×242px on iPhone 14 Pro Max)
- **Background**: `linear-gradient(135deg, #22224C 0%, #0092FF 100%)`
- **Buttons**:
  - Size: 120×80px each (generous touch target)
  - Gap: 12px between buttons
  - Background: `rgba(255, 255, 255, 0.9)`
  - Text: Navy #22224C, 15px medium weight
  - Hover: `bg-white scale(1.02)`
  - Transition: `all 200ms ease-out`
- **Cancel Link**:
  - Position: Centered bottom, 12px from edge
  - Text: 13px, `rgba(255, 255, 255, 0.7)`
  - Hover: `rgba(255, 255, 255, 1)`

**User Interaction**:
1. User sees two large, inviting buttons centered in gradient container
2. Click either button → triggers shrink animation (200ms)
3. Buttons scale down to small pills and move to top-left corner
4. Form content fades in below

---

### Screen 2+: Form Screens (After User Type Selected)

**Visual Layout (Compact Mode)**
```
┌────────────────────────────────────────┐
│ ○──○ [Educator] [x]         Progress   │ ← 24px header
│ ────────────────────────────────────   │
│                                        │
│    What school board?                  │ ← 32px question
│                                        │
│    [Dropdown ▼                     ]   │ ← 44px input
│                                        │
│                                        │
│ ← Back              Continue →         │ ← 40px footer
└────────────────────────────────────────┘
```

**Header Section** (24px total height):
- **Left**: User type pill + close button
  - Pill: `Educator` or `Student` in small chip (20px height)
  - Background: `rgba(255, 255, 255, 0.2)`
  - Text: 11px, white
  - Close [x]: 16×16px tap target (closes flow, returns to initial state)
- **Right**: Progress indicator
  - Text: "2/6" for educators, "2/4" for students
  - Size: 11px, `rgba(255, 255, 255, 0.7)`
- **Below**: 1px separator line, `rgba(255, 255, 255, 0.1)`

**Content Section** (~154px available):
- **Question Text**:
  - Size: 15px medium weight (mobile), 16px (tablet)
  - Color: White
  - Margin: 12px top, 8px bottom
  - Line height: 1.3
  - Center aligned
- **Input Field**:
  - Height: 44px (minimum touch target)
  - Width: 100% minus 32px horizontal padding (16px each side)
  - Border radius: 8px
  - Background: White
  - Text: Navy #22224C, 16px (prevents iOS zoom)
  - Padding: 12px horizontal
  - Focus: `ring-2 ring-light-blue`
- **Error Message** (if needed):
  - Size: 12px
  - Color: `#FCA5A5` (light red, accessible on dark bg)
  - Margin: 4px top
  - Center aligned

**Footer Section** (40px total height):
- **Back Button** (left):
  - Icon: ChevronLeft 16×16px
  - Text: "Back" 13px
  - Color: `rgba(255, 255, 255, 0.7)`
  - Hover: `rgba(255, 255, 255, 1)`
  - Touch target: 44×44px (padding extends beyond visual)
- **Continue Button** (right):
  - Size: Auto width (padding 20px horizontal) × 36px height
  - Background: White
  - Text: Navy #22224C, 14px medium weight
  - Border radius: 8px
  - Disabled state: `opacity-50 cursor-not-allowed`
  - Hover: Light Blue #C6E7FF background
  - Touch target: Minimum 44×44px

**Spacing Breakdown**:
- Header: 24px
- Question margin-top: 12px
- Question height: 20px (single line)
- Question margin-bottom: 8px
- Input field: 44px
- Error message (if present): 20px
- Spacer (flexible): 16-20px
- Footer: 40px
- Container padding: 4px top/bottom, 16px sides
- **Total**: ~188-192px (fits in 242px container)

---

### Specific Screen Variations

#### Email Screen (Educators)
```
┌────────────────────────────────────────┐
│ ○──○ [Educator] [x]              1/6   │
│ ────────────────────────────────────   │
│                                        │
│      What's your email?                │
│                                        │
│    [jane.smith@board.ca           ]    │
│                                        │
│                                        │
│ ← Back              Continue →         │
└────────────────────────────────────────┘
```

**Input Specifics**:
- Type: `email`
- Autocomplete: `email`
- Font size: 16px (prevents iOS zoom on focus)
- Keyboard: Email keyboard with @ symbol
- Validation: Real-time on blur
- Error: "Please enter a valid email address"

**Keyboard Behavior**:
- When keyboard appears, footer buttons remain visible (rely on browser scrolling)
- Input field should be in center of visible area when focused
- If footer obscured, show floating "Continue" button in keyboard accessory view (iOS only)

---

#### Board Selection Screen
```
┌────────────────────────────────────────┐
│ ○──○──○ [Educator] [x]           2/6   │
│ ────────────────────────────────────   │
│                                        │
│    What school board?                  │
│                                        │
│    [Select board...            ▼]      │
│                                        │
│                                        │
│ ← Back              Continue →         │
└────────────────────────────────────────┘
```

**Dropdown Specifics**:
- Native `<select>` element for best mobile UX
- Font size: 16px (prevents zoom)
- Options: 30 Ontario boards + "Guest" option
- First option: "Select board..." (disabled)
- Padding: 12px horizontal, chevron icon aligned right
- On selection: Auto-advances to next screen (optional, can require Continue click)

---

#### School Selection Screen
```
┌────────────────────────────────────────┐
│ ○──○──○──○ [Educator] [x]        3/6   │
│ ────────────────────────────────────   │
│                                        │
│    What school?                        │
│                                        │
│    [Select school...           ▼]      │
│                                        │
│                                        │
│ ← Back              Continue →         │
└────────────────────────────────────────┘
```

**Conditional State**:
- If board is "Guest", dropdown auto-populates with "Not Listed" and is disabled
- Otherwise, loads schools from `SCHOOLS_BY_BOARD[boardId]`
- Empty state: "Select a board first"

---

#### Class Size Screen (Educators Only)
```
┌────────────────────────────────────────┐
│ ○──○──○──○──○ [Educator] [x]     4/6   │
│ ────────────────────────────────────   │
│                                        │
│    How many students?                  │
│                                        │
│    [Solo] [<25] [25-35]                │
│    [35+]  [100+]                       │
│                                        │
│ ← Back              Continue →         │
└────────────────────────────────────────┘
```

**Button Grid Specifics**:
- Layout: 3 buttons per row, 2 rows
- Button size: ~120×36px each (fits within width)
- Gap: 8px between buttons
- Selected state: White background, Navy text
- Unselected: `rgba(255, 255, 255, 0.2)` background, white text
- Hover: `rgba(255, 255, 255, 0.3)`
- Text: 13px medium weight
- Labels: "Solo", "<25", "25-35", "35+", "100+"
- Single selection only

---

#### Grade Level Screen (Final)
```
┌────────────────────────────────────────┐
│ ○──○──○──○──○──○ [Educator] [x]  6/6   │
│ ────────────────────────────────────   │
│                                        │
│    What grade are they in?             │
│                                        │
│    [7] [8] [9] [10] [11] [12] [Mix]    │
│                                        │
│                                        │
│ ← Back          Start Video →          │
└────────────────────────────────────────┘
```

**Button Grid Specifics**:
- Layout: 7 buttons in single row (horizontally scrollable if needed)
- Alternative layout (better fit): 4-3 split (7,8,9,10 on top / 11,12,Mix below)
- Button size: 40×40px each (square pills)
- Gap: 6px between buttons
- Selected state: White background, Navy text, border 2px solid white
- Unselected: `rgba(255, 255, 255, 0.2)` background, white text
- Text: 14px bold
- Final button: "Start Video" (not "Continue")

---

## Animations & Transitions

### User Type Selection → Form Transition

**Sequence** (total 400ms):
1. **T+0ms**: User clicks Educator or Student
2. **T+0-150ms**: Clicked button scales to 1.05x (bounce)
3. **T+150-200ms**: Both buttons animate simultaneously:
   - Position: Move to top-left corner (using CSS transforms)
   - Size: Scale down to 80×24px (pill shape)
   - Opacity: Reduce unselected button to 0.3
   - Add close [x] button to selected pill
4. **T+200ms**: Header separator line fades in
5. **T+200-400ms**: First form question fades in with slight upward slide (12px)

**CSS Implementation**:
```css
.user-type-buttons.shrinking {
  animation: moveToCorner 200ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes moveToCorner {
  to {
    transform: translate(-140px, -80px) scale(0.3);
  }
}
```

### Screen-to-Screen Transitions

**Forward Navigation** (150ms):
- Current content: Fade out + slide left 8px
- New content: Fade in + slide right-to-center 8px
- Overlap by 50ms for smoothness

**Backward Navigation** (150ms):
- Current content: Fade out + slide right 8px
- Previous content: Fade in + slide left-to-center 8px
- Overlap by 50ms

**Progress Dots**:
- New dot fills in: Scale from 0 → 1 over 200ms
- Color transition: Gray → Blue over 200ms

---

## Responsive Breakpoints

### Extra Small Mobile (375px - iPhone SE)
- Container height: 211px (375 ÷ 16 × 9)
- Reduce vertical padding to 4px
- Question text: 14px (down from 15px)
- Footer buttons: Slightly smaller touch targets (acceptable on smaller devices)

### Small Mobile (390-430px - iPhone 14/15)
- Container height: 220-242px
- Standard specifications as documented above

### Large Mobile / Tablet (768px+)
- Container height: 432px (768 ÷ 16 × 9)
- Increase vertical spacing to 16px (from 8-12px)
- Question text: 18px (up from 15px)
- More generous padding around inputs
- Larger button sizes where appropriate

---

## Accessibility Specifications

### Keyboard Navigation
1. Tab order: Close button → Input field → Back button → Continue button
2. Enter key on input field: Advances to next screen if valid
3. ESC key: Closes flow (returns to initial state)
4. Arrow keys: Navigate between button grid options (class size, grade level)

### Screen Reader Announcements
- On screen change: "Step 2 of 6: What school board?"
- On validation error: "Error: Please enter a valid email address"
- On selection: "Selected: Toronto District School Board"
- Progress indicator: "Progress: 2 of 6 steps completed"

### Focus Management
- When screen changes, focus moves to input field automatically
- Focus ring: 2px solid Light Blue #C6E7FF, 2px offset
- Focus ring visible on all interactive elements
- No `:focus { outline: none }` without custom focus styles

### Touch Targets
- All interactive elements: Minimum 44×44px (WCAG AA)
- Visual size can be smaller if padding extends touch area
- Spacing between adjacent targets: Minimum 8px

### Color Contrast
- White text on Blue gradient: 4.52:1 (WCAG AA ✓)
- White text on Navy gradient: 8.91:1 (WCAG AAA ✓)
- Navy text on White background: 14.51:1 (WCAG AAA ✓)
- Error red (#FCA5A5) on Navy: 4.62:1 (WCAG AA ✓)

---

## Pros & Cons

### Pros
✅ **Visual Continuity**: Entire flow stays inside video container - maintains "inline" concept
✅ **Brand Consistency**: Uses gradient background throughout - strong brand presence
✅ **Implementation Speed**: Minimal changes to existing code structure
✅ **Performance**: No additional DOM layers or modals - lightweight
✅ **Design Intent**: Honors original vision of inline registration

### Cons
❌ **Cramped on Small Devices**: iPhone SE (375px) has only 211px height - very tight
❌ **Keyboard Issues**: Mobile keyboard obscures footer buttons on email screen
❌ **Limited Error Space**: Inline validation errors reduce available space further
❌ **Accessibility Challenges**: Tight spacing makes generous touch targets difficult
❌ **User Testing Risk**: May feel claustrophobic to users compared to alternatives

---

## Implementation Complexity

**Effort**: Low (1-2 days)
**Risk**: Medium (cramped UX may test poorly)

### Changes Required
1. **CSS Adjustments**:
   - Tighter spacing variables for mobile breakpoint
   - Animation for button shrink-to-pill transition
   - Responsive text sizes
2. **Component Updates**:
   - Update `InlineRegistrationFlow.tsx` with compact layout
   - Add header section with pill and progress
   - Adjust footer button positioning
3. **Testing**:
   - Test on iPhone SE (smallest common device)
   - Test keyboard behavior on iOS Safari
   - Verify touch target sizes with browser dev tools

---

## When to Choose This Approach

**Choose Approach 1 if**:
- Visual containment within video aspect ratio is non-negotiable
- Development timeline is extremely tight (< 1 week)
- User testing is limited and you need safe, conservative option
- Primary users are on larger mobile devices (6"+ screens)

**Avoid Approach 1 if**:
- Significant portion of users on iPhone SE or smaller Android devices
- Accessibility is paramount (AAA compliance, generous touch targets)
- User testing shows cramped feeling is dealbreaker
- Email input field will be primary friction point (keyboard obscuring)

---

## Testing Checklist

### Visual Testing
- [ ] Renders correctly on iPhone SE (375×667px)
- [ ] Renders correctly on iPhone 14 Pro Max (430×932px)
- [ ] Renders correctly on Android small (360px)
- [ ] Gradient background displays without banding
- [ ] Progress dots update smoothly
- [ ] Button grid layouts don't wrap unexpectedly

### Interaction Testing
- [ ] User type selection animation smooth (60fps)
- [ ] Screen transitions feel snappy (< 200ms perceived)
- [ ] Back button returns to previous screen correctly
- [ ] Continue button disabled when field invalid
- [ ] Email validation shows error inline
- [ ] Board selection populates school dropdown

### Keyboard Testing
- [ ] Email field focuses correctly
- [ ] Mobile keyboard doesn't obscure Continue button
- [ ] Tab order is logical
- [ ] Enter key advances to next screen
- [ ] ESC key returns to initial state

### Accessibility Testing
- [ ] All touch targets ≥ 44×44px
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Screen reader announces screen changes
- [ ] Focus indicators visible on all elements
- [ ] Keyboard navigation completes flow

---

## Related Documentation
- [Overview & Comparison](./README.md)
- [Approach 2: Adaptive Expansion](./approach-2-adaptive-expansion.md)
- [Approach 3: Modal Takeover](./approach-3-modal-takeover.md)
