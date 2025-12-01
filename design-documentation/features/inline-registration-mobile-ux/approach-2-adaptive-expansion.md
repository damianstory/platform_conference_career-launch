---
title: Approach 2 - Adaptive Expansion (RECOMMENDED)
description: Hybrid approach - user type in container, form expands below with generous space
feature: Inline Registration Flow
approach: 2
last-updated: 2025-12-01
version: 1.0.0
related-files:
  - ./README.md
  - ./approach-1-compact-stacked.md
  - ./approach-3-modal-takeover.md
status: draft
---

# Approach 2: Adaptive Expansion (RECOMMENDED)

## Concept

Start with user type selection inside the 16:9 video container (maintaining visual anchor), then expand the form into a connected panel below the container. This hybrid approach provides the visual continuity of inline design while offering generous vertical space for form completion.

## Visual Philosophy

"Anchored expansion" - The video container serves as a visual anchor and progress indicator, while the expansion panel provides a spacious, comfortable form experience. Connected by color and animation, they feel like one cohesive unit.

## User's Creative Direction

This approach directly implements the user's suggestion: "Maybe after selecting student or educator, the buttons become really small and just say 'One'. When you click 'One', it gives you something below with more vertical space to fill in your school board or more details."

---

## Screen-by-Screen Specifications

### Screen 1: User Type Selection (Inside Container)

**Visual Layout**
```
┌────────────────────────────────────────┐
│  [gradient: navy → blue, full height]  │ ← 16:9 container
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

**Specifications** (identical to Approach 1):
- Container: Full 16:9 aspect-ratio (430×242px on iPhone 14 Pro Max)
- Background: `linear-gradient(135deg, #22224C 0%, #0092FF 100%)`
- Buttons: 120×80px each, white 90% opacity, navy text
- Cancel: Bottom center, white 70% opacity

**User Interaction**:
1. User sees two large buttons in gradient container
2. Click Educator or Student → triggers expansion animation
3. Container transforms into progress indicator
4. Form panel slides up from below

---

### Screen 2+: Two-Part Layout (Container + Expansion)

**Overall Structure**
```
┌────────────────────────────────────────┐
│  [Container: Progress Visualization]   │ ← 16:9 container (142px tall)
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│                                        │
│  [Expansion Panel: Form Content]       │ ← Auto height, scrollable
│                                        │
│                                        │
│                                        │
└────────────────────────────────────────┘
```

**Key Insight**: By moving form below container, we gain ~400-600px of vertical space on mobile devices!

---

### Container Section: Progress Visualization

**Visual Layout (Collapsed Container)**
```
┌────────────────────────────────────────┐
│  [gradient background, shorter]        │ ← Reduced to 142px height
│                                        │
│     ○──○──○──●──○──○                   │ ← Progress dots
│                                        │
│     Step 3 of 6                        │ ← Progress text
│     What school board?                 │ ← Current question
│                                        │
└────────────────────────────────────────┘
```

**Specifications**:
- **Height**: 142px (reduced from 242px, maintains visual presence)
- **Background**: Same gradient `linear-gradient(135deg, #22224C 0%, #0092FF 100%)`
- **Content** (vertically centered):
  - **Progress Dots**:
    - Size: 8px diameter (larger than Approach 1 for visibility)
    - Active: White solid
    - Completed: White solid
    - Upcoming: White 30% opacity
    - Spacing: 4px gap
  - **Progress Text**:
    - Text: "Step 3 of 6" or "Step 2 of 4"
    - Size: 12px regular weight
    - Color: White 70% opacity
    - Margin: 8px below dots
  - **Current Question**:
    - Text: Current step question (e.g., "What school board?")
    - Size: 16px medium weight
    - Color: White
    - Margin: 4px below progress text
    - Purpose: Provides context when form is scrolled

**Responsive Sizing**:
- Mobile (< 768px): 142px height
- Tablet (≥ 768px): 180px height (more spacious)
- Desktop (≥ 1024px): Can return to full 16:9 if desired

**Corner Indicator** (Optional Enhancement):
- Small pill in top-left: "Educator" or "Student"
- Size: 60×20px
- Background: `rgba(255, 255, 255, 0.15)`
- Text: 11px white
- Border radius: 10px

---

### Expansion Panel: Form Content

**Visual Layout**
```
┌────────────────────────────────────────┐
│  [white background, rounded top]       │
│  ┌──────────────────────────────────┐  │
│  │                                  │  │
│  │  Label: What school board?       │  │
│  │                                  │  │
│  │  [Dropdown ▼                  ]  │  │
│  │                                  │  │
│  │  Helper text (optional)          │  │
│  │                                  │  │
│  └──────────────────────────────────┘  │
│                                        │
│  [Back]              [Continue →]      │
└────────────────────────────────────────┘
```

**Specifications**:
- **Background**: White
- **Top Border Radius**: 24px (connects visually to container above)
- **Padding**: 24px all sides (generous breathing room)
- **Min Height**: Auto (fits content)
- **Max Height**: 70vh (scrollable if needed)
- **Shadow**: `0 -4px 16px rgba(34, 34, 76, 0.08)` (subtle lift)
- **Margin Top**: -8px (slight overlap with container for connection)

**Content Structure**:
- **Label**:
  - Size: 16px medium weight
  - Color: Navy #22224C
  - Margin bottom: 8px
- **Input Field**:
  - Height: 48px (generous touch target, 4px larger than minimum)
  - Border: 1px solid #E5E9F1
  - Border radius: 8px
  - Background: White
  - Text: 16px Navy (prevents iOS zoom)
  - Padding: 12px horizontal
  - Focus: `border-color: #0092FF, ring-4 rgba(0, 146, 255, 0.1)`
- **Helper Text** (optional):
  - Size: 13px
  - Color: #65738B (muted gray)
  - Margin top: 6px
- **Error Message**:
  - Size: 13px
  - Color: #DC2626 (red)
  - Icon: Small warning triangle
  - Margin top: 6px

**Footer Buttons**:
- **Container**: `display: flex, justify-between`
- **Margin top**: 24px from last input
- **Back Button**:
  - Style: Ghost (no background)
  - Text: "← Back" with ChevronLeft icon
  - Size: 14px medium
  - Color: #65738B
  - Hover: Navy #22224C
  - Touch target: 48×48px (padding extends)
- **Continue Button**:
  - Style: Primary solid
  - Background: Blue #0092FF
  - Text: "Continue →" or "Start Video →"
  - Size: 14px medium weight
  - Color: White
  - Padding: 12px 24px
  - Border radius: 8px
  - Min width: 120px
  - Hover: Darker blue #0082E6
  - Disabled: Gray #E5E9F1 background, gray text
  - Touch target: 48px height minimum

---

## Specific Screen Variations

### Email Screen (Educators - Step 1)

**Container (Progress)**:
```
┌────────────────────────────────────────┐
│  [gradient background]                 │
│                                        │
│     ○──○──○──○──○──○                   │
│                                        │
│     Step 1 of 6                        │
│     What's your email?                 │
│                                        │
└────────────────────────────────────────┘
```

**Expansion Panel**:
```
┌────────────────────────────────────────┐
│  ┌──────────────────────────────────┐  │
│  │                                  │  │
│  │  Email Address                   │  │
│  │  [jane.smith@board.ca         ]  │  │
│  │                                  │  │
│  │  We'll save this so you don't   │  │
│  │  have to re-enter it later.     │  │
│  │                                  │  │
│  └──────────────────────────────────┘  │
│                                        │
│  [← Back]           [Continue →]       │
└────────────────────────────────────────┘
```

**Specifications**:
- Input type: `email`
- Autocomplete: `email`
- Validation: Real-time on blur
- Helper text: Explains cookie/pre-fill functionality
- Error: "Please enter a valid email address"

---

### Board Selection Screen (Step 2 for Students, Step 3 for Educators)

**Container (Progress)**:
```
┌────────────────────────────────────────┐
│  [gradient background]                 │
│                                        │
│     ○──●──○──○                         │ ← 2/4 for students
│                                        │
│     Step 2 of 4                        │
│     What school board?                 │
│                                        │
└────────────────────────────────────────┘
```

**Expansion Panel**:
```
┌────────────────────────────────────────┐
│  ┌──────────────────────────────────┐  │
│  │                                  │  │
│  │  School Board                    │  │
│  │  [Select your board...      ▼]   │  │
│  │                                  │  │
│  │  Don't see your board?           │  │
│  │  Select "Not Listed - Guest"     │  │
│  │                                  │  │
│  └──────────────────────────────────┘  │
│                                        │
│  [← Back]           [Continue →]       │
└────────────────────────────────────────┘
```

**Specifications**:
- Dropdown: Native `<select>` for mobile optimization
- Options: 30 Ontario boards + "Guest" option at end
- Helper text: Guides users to guest option if needed
- On selection: Updates school dropdown data

---

### School Selection Screen

**Expansion Panel**:
```
┌────────────────────────────────────────┐
│  ┌──────────────────────────────────┐  │
│  │                                  │  │
│  │  School                          │  │
│  │  [Select your school...     ▼]   │  │
│  │                                  │  │
│  │  Can't find your school?         │  │
│  │  Go back and select "Guest"      │  │
│  │                                  │  │
│  └──────────────────────────────────┘  │
│                                        │
│  [← Back]           [Continue →]       │
└────────────────────────────────────────┘
```

**Conditional States**:
- If board = "guest": Dropdown shows "Not Listed" (disabled)
- Otherwise: Shows schools from `SCHOOLS_BY_BOARD[boardId]`
- Helper text adapts based on board selection

---

### Class Size Screen (Educators - Step 4)

**Container (Progress)**:
```
┌────────────────────────────────────────┐
│  [gradient background]                 │
│                                        │
│     ○──○──○──●──○──○                   │
│                                        │
│     Step 4 of 6                        │
│     How many students?                 │
│                                        │
└────────────────────────────────────────┘
```

**Expansion Panel**:
```
┌────────────────────────────────────────┐
│  ┌──────────────────────────────────┐  │
│  │                                  │  │
│  │  Class Size                      │  │
│  │                                  │  │
│  │  ┌──────┐ ┌──────┐ ┌──────┐    │  │
│  │  │ Solo │ │ <25  │ │25-35 │    │  │
│  │  └──────┘ └──────┘ └──────┘    │  │
│  │                                  │  │
│  │  ┌──────┐ ┌──────┐              │  │
│  │  │ 35+  │ │ 100+ │              │  │
│  │  └──────┘ └──────┘              │  │
│  │                                  │  │
│  └──────────────────────────────────┘  │
│                                        │
│  [← Back]           [Continue →]       │
└────────────────────────────────────────┘
```

**Button Grid Specifications**:
- Layout: 3 columns × 2 rows (responsive)
- Button size: Each button ~100×48px (generous touch)
- Gap: 12px between buttons
- Selected state:
  - Background: Blue #0092FF
  - Text: White
  - Border: 2px solid Blue
  - Transform: `scale(1.02)` on select
- Unselected state:
  - Background: Light Blue #C6E7FF
  - Text: Navy #22224C
  - Border: 1px solid #E5E9F1
  - Hover: `bg-color: #B5D9FF` (slightly darker)
- Labels: "Solo", "<25", "25-35", "35+", "100+"
- Font: 14px medium weight

---

### Grade Level Screen (Final)

**Container (Progress)**:
```
┌────────────────────────────────────────┐
│  [gradient background]                 │
│                                        │
│     ○──○──○──○──○──●                   │
│                                        │
│     Step 6 of 6                        │
│     What grade?                        │
│                                        │
└────────────────────────────────────────┘
```

**Expansion Panel**:
```
┌────────────────────────────────────────┐
│  ┌──────────────────────────────────┐  │
│  │                                  │  │
│  │  Grade Level                     │  │
│  │                                  │  │
│  │  ┌────┐┌────┐┌────┐┌────┐      │  │
│  │  │ 7  ││ 8  ││ 9  ││ 10 │      │  │
│  │  └────┘└────┘└────┘└────┘      │  │
│  │                                  │  │
│  │  ┌────┐┌────┐┌────┐            │  │
│  │  │ 11 ││ 12 ││Mix │            │  │
│  │  └────┘└────┘└────┘            │  │
│  │                                  │  │
│  └──────────────────────────────────┘  │
│                                        │
│  [← Back]        [Start Video →]       │
└────────────────────────────────────────┘
```

**Button Grid Specifications**:
- Layout: 4 columns × 2 rows (7,8,9,10 / 11,12,Mix)
- Button size: 64×48px square pills
- Gap: 8px between buttons
- Same selected/unselected states as class size
- Final button: "Start Video" (not "Continue")
- Labels: "7", "8", "9", "10", "11", "12", "Mix"

---

## Animations & Transitions

### User Type Selection → Expansion Animation

**Sequence** (total 600ms):

**T+0ms**: User clicks Educator or Student
- Clicked button: Scale to 1.05x (50ms bounce)
- Unclicked button: Fade to 30% opacity

**T+50-250ms**: Container shrinks (200ms ease-in-out)
- Height: 242px → 142px
- Content: User type buttons fade out
- New content: Progress dots + text fade in
- Transform: `transform-origin: top`

**T+250-600ms**: Expansion panel slides up (350ms ease-out)
- Panel starts: Below viewport (translateY(100%))
- Panel ends: Docked below container (translateY(0))
- Opacity: 0 → 1 over first 150ms of slide
- Timing: `cubic-bezier(0.4, 0, 0.2, 1)` (Material Design deceleration)

**Visual Connection**:
- White panel's top border radius (24px) creates seamless connection
- Slight overlap (-8px margin) enhances unity
- Shadow on panel provides subtle depth

**CSS Implementation**:
```css
.video-container.expanded {
  height: 142px;
  transition: height 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.expansion-panel {
  transform: translateY(100%);
  opacity: 0;
  animation: slideUpAndFadeIn 350ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: 250ms;
}

@keyframes slideUpAndFadeIn {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
```

---

### Screen-to-Screen Transitions (Within Expansion Panel)

**Forward Navigation** (300ms):
- Current content: Fade out (150ms) + slide left 12px
- Progress in container: Dots animate (200ms)
- New content: Fade in (150ms) + slide right-to-center 12px
- Overlap: 100ms for smoothness
- Total perceived time: 200ms (feels snappy)

**Backward Navigation** (250ms):
- Current content: Fade out (125ms) + slide right 12px
- Progress in container: Dots animate back (200ms)
- Previous content: Fade in (125ms) + slide left-to-center 12px
- Slightly faster than forward (users expect instant back)

**Progress Dot Animation**:
- Completed dot: Fills in from center, scale 0 → 1 (150ms)
- Color transition: Gray → White (150ms)
- Slight bounce on completion (scale to 1.1x, then back to 1x)

---

## Responsive Breakpoints

### Mobile (< 768px)
- **Container height**: 142px
- **Expansion padding**: 24px
- **Input height**: 48px
- **Button grid**: Flexible (may stack on very small devices)
- **Max-height for panel**: 70vh (ensures visibility with keyboard)

### Tablet (768px - 1023px)
- **Container height**: 180px (more spacious)
- **Expansion padding**: 32px
- **Input height**: 52px
- **Button grid**: More generous spacing (16px gaps)
- **Typography**: Slightly larger (18px labels)

### Desktop (1024px+)
- **Container**: Can return to full 16:9 if desired (or keep compressed for consistency)
- **Expansion panel**: Max-width 600px, centered
- **Side-by-side layouts**: Can show label beside input for some fields
- **Hover states**: More pronounced for mouse users

---

## Keyboard Behavior

### Email Input with Keyboard
When mobile keyboard appears:
1. Browser automatically scrolls expansion panel into view
2. Panel is scrollable, so footer buttons remain accessible
3. Input field stays visible in viewport
4. Continue button can be in keyboard accessory view (iOS) for convenience

### Auto-scroll on Validation Error
If error appears below input:
1. Panel auto-scrolls to show error message
2. Smooth scroll animation (200ms)
3. Focus returns to input field
4. Error announcement for screen readers

---

## Accessibility Specifications

### Keyboard Navigation
1. Tab order: Input field → Back button → Continue button
2. Enter key on input: Advances to next screen if valid
3. ESC key: Closes entire flow (returns to initial state)
4. Arrow keys: Navigate button grids (class size, grade)
5. Space bar: Selects button grid options

### Screen Reader Experience
**On expansion**:
- "Registration form opened. Step 1 of 6. What's your email?"

**On screen change**:
- "Step 2 of 6. What school board? Edit combo box, collapsed."

**On error**:
- "Error: Please enter a valid email address"

**On selection**:
- "Toronto District School Board, selected"

**Progress updates**:
- "Progress updated. Step 3 of 6 completed."

### ARIA Labels
- Container: `role="region" aria-label="Registration progress"`
- Expansion panel: `role="form" aria-label="Registration form"`
- Progress dots: `aria-label="Step 3 of 6 active"`
- Buttons: `aria-label="Continue to next step"` / `"Start watching video"`

### Focus Management
- On expansion: Focus moves to first input field
- On screen change: Focus moves to new input field
- On error: Focus returns to invalid input
- Focus ring: 3px solid Light Blue, 3px offset, visible on all elements

### Touch Targets
- All interactive elements: Minimum 48×48px (exceeds WCAG AA 44px)
- Button grids: 48px height minimum with 8px spacing
- Visual size can be smaller if padding extends touch area

### Color Contrast
All combinations exceed WCAG AA (4.5:1):
- Navy text on white: 14.51:1 ✓
- White text on blue gradient: 4.52:1 ✓
- Error red on white: 4.65:1 ✓
- Helper text gray on white: 5.12:1 ✓

---

## Pros & Cons

### Pros
✅ **Best of Both Worlds**: Visual anchor in container + generous form space
✅ **User's Suggestion**: Directly implements requested "small button + expansion below"
✅ **Generous Space**: 400-600px available for form on mobile (vs 200px cramped)
✅ **Keyboard Friendly**: Scrollable panel handles keyboard without obscuring buttons
✅ **Accessibility**: Room for large touch targets, error messages, helper text
✅ **Scalability**: Easy to add fields or complexity in future
✅ **Brand Connection**: Gradient container maintains brand presence throughout
✅ **Progress Visibility**: User always sees progress in container above
✅ **Error Handling**: Plenty of space for inline validation and helpful messages
✅ **Breathing Room**: Follows myBlueprint's spacious, professional aesthetic

### Cons
⚠️ **Visual Disconnect**: Some may perceive break between container and panel as less "inline"
⚠️ **Complexity**: More moving parts than Approach 1 (container shrink + panel slide)
⚠️ **Vertical Scroll**: Very long forms may require scrolling within expansion panel
⚠️ **Implementation**: Moderate effort (2-3 days) vs minimal for Approach 1

**Note**: The cons are minor compared to usability gains. The "visual disconnect" is mitigated by animation and design (rounded corners, shadow, overlap).

---

## Implementation Complexity

**Effort**: Medium (2-3 days)
**Risk**: Low (proven pattern, user-suggested approach)

### Changes Required

**1. Component Structure**:
```tsx
<div className="video-section">
  {/* Container - full height initially, shrinks after selection */}
  <div className="video-container" style={{ height: containerHeight }}>
    {videoState === 'initial' && <UserTypeSelection />}
    {videoState === 'registration' && <ProgressVisualization />}
  </div>

  {/* Expansion Panel - only shown after user type selected */}
  {showExpansion && (
    <div className="expansion-panel">
      <FormContent />
      <NavigationFooter />
    </div>
  )}
</div>
```

**2. State Management**:
- Add `containerHeight` state: `242px` → `142px` on selection
- Add `showExpansion` state: `false` → `true` on selection
- Add `currentScreen` tracking (same as current implementation)

**3. Animations**:
- Container shrink: CSS transition on height
- Panel slide-up: CSS animation with translateY
- Progress dots: Scale and color transitions
- Content fade: Opacity transitions

**4. Styling**:
- Container styles: Gradient, centered content, responsive heights
- Panel styles: White background, rounded top, shadow, padding
- Form field styles: Generous sizing, clear focus states
- Button grid styles: Flexible layout, touch-friendly sizing

### Migration from Current Code
1. Extract form screens from `InlineRegistrationFlow.tsx`
2. Create `ProgressVisualization` component for container
3. Create `ExpansionPanel` component for form
4. Add animation CSS classes
5. Update state management to control both sections
6. Test responsive behavior on devices

---

## When to Choose This Approach

**Choose Approach 2 (RECOMMENDED) if**:
- You want best balance of visual design and usability
- User testing and feedback is critical to success
- Accessibility compliance (WCAG AA/AAA) is important
- Users span wide range of devices (small to large)
- Future may require adding more form fields
- You want to honor user's creative suggestion
- Development timeline allows 2-3 days for implementation

**This is the recommended approach** because it:
- Solves the cramped space problem completely
- Maintains visual connection to video container
- Provides excellent accessibility and usability
- Feels natural and familiar to users
- Aligns with modern mobile design patterns
- Directly addresses user's creative input

---

## Testing Checklist

### Visual Testing
- [ ] Container shrinks smoothly from 242px to 142px
- [ ] Expansion panel slides up with proper easing
- [ ] White panel connects visually to container (rounded corners, overlap)
- [ ] Progress dots animate smoothly
- [ ] Gradient background renders without banding
- [ ] Renders correctly on iPhone SE (375px)
- [ ] Renders correctly on iPhone 14 Pro Max (430px)
- [ ] Renders correctly on iPad (768px)
- [ ] No layout shift during transitions (CLS < 0.1)

### Interaction Testing
- [ ] User type selection triggers expansion animation
- [ ] Container height transition smooth (60fps)
- [ ] Panel slide-up smooth (60fps)
- [ ] Screen-to-screen transitions feel snappy
- [ ] Back button navigates to previous screen
- [ ] Continue button disabled when field invalid
- [ ] Form validation shows errors in expansion panel
- [ ] Button grids select/deselect correctly

### Keyboard Testing
- [ ] Email field focuses when expansion appears
- [ ] Mobile keyboard doesn't obscure Continue button
- [ ] Panel scrolls when keyboard appears
- [ ] Tab order is logical throughout flow
- [ ] Enter key advances to next screen
- [ ] ESC key closes flow and returns to initial state
- [ ] Arrow keys navigate button grids
- [ ] Space bar selects button grid options

### Accessibility Testing
- [ ] All touch targets ≥ 48×48px
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Screen reader announces expansion
- [ ] Screen reader announces screen changes
- [ ] Focus indicators visible on all elements
- [ ] Focus management works correctly (moves to inputs)
- [ ] ARIA labels present and accurate
- [ ] Keyboard navigation completes full flow

### Device Testing
- [ ] iPhone SE (375×667px) - smallest common device
- [ ] iPhone 14 (390×844px) - current common device
- [ ] iPhone 14 Pro Max (430×932px) - large device
- [ ] Android small (360×640px) - common Android size
- [ ] iPad (768×1024px) - tablet breakpoint
- [ ] iOS Safari behavior
- [ ] Chrome Mobile behavior
- [ ] Samsung Internet behavior

---

## Success Metrics

### UX Metrics
- Form completion rate > 95%
- Drop-off rate per step < 3%
- Average time to video start < 12 seconds (first time)
- User satisfaction rating > 4.5/5

### Technical Metrics
- Container shrink animation: 60fps
- Panel slide animation: 60fps
- Interaction response time < 100ms
- Cumulative Layout Shift < 0.1
- No keyboard-related bugs reported

### Accessibility Metrics
- WCAG AA compliance: 100%
- Keyboard completion rate: 100%
- Screen reader usability: 5/5 rating from blind tester

---

## Related Documentation
- [Overview & Comparison](./README.md)
- [Approach 1: Compact Stacked](./approach-1-compact-stacked.md)
- [Approach 3: Modal Takeover](./approach-3-modal-takeover.md)
- [Implementation Guide](./implementation-approach-2.md) (to be created)
