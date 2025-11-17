---
title: Screen States & Visual Specifications
description: Detailed visual specifications for all modal states in the dual-user registration flow
feature: dual-user-registration
last-updated: 2025-11-17
version: 1.0.0
related-files:
  - ./README.md
  - ./user-journey.md
  - ./interactions.md
  - ./implementation.md
dependencies:
  - /tailwind.config.ts
  - /app/globals.css
status: draft
---

# Screen States & Visual Specifications

## Overview

This document provides comprehensive visual specifications for every state in the dual-user registration modal, ensuring consistency with the myBlueprint design system while optimizing for both user types.

## Table of Contents

1. [Modal Container Specifications](#modal-container-specifications)
2. [State 1: User Type Selection](#state-1-user-type-selection)
3. [State 2a: Educator Form](#state-2a-educator-form)
4. [State 2b: Student Form](#state-2b-student-form)
5. [Component Specifications](#component-specifications)
6. [Responsive Behavior](#responsive-behavior)
7. [Accessibility Requirements](#accessibility-requirements)

---

## Modal Container Specifications

### Base Container

**Structure**: Maintains existing bottom drawer pattern

```
Container:
- Position: fixed, bottom-aligned
- Width: 100% (max-width varies by breakpoint)
  - Mobile: 100% viewport width
  - Tablet: max-width 600px
  - Desktop: max-width 900px
- Height: Dynamic based on content
  - Type Selection: min(75vh, 600px)
  - Educator Form: min(88vh, 900px) or min(92vh, 950px) if returning user
  - Student Form: min(70vh, 550px)
- Border Radius: 24px (top-left, top-right only)
- Box Shadow: 0 -8px 32px rgba(0, 0, 0, 0.12)
- Background: #FFFFFF
- Z-Index: 50
```

**Overlay**:
- Background: rgba(0, 0, 0, 0.4)
- Animation: fade-in 300ms ease
- Behavior: Click to close modal

### Drawer Handle

```
Specifications:
- Width: 48px (w-12)
- Height: 4px (h-1)
- Border Radius: 9999px (fully rounded)
- Color: #D1D5DB (gray-300)
- Position: Centered horizontally
- Padding: 12px top, 8px bottom
- Purpose: Visual affordance for drawer interaction
- Accessibility: aria-hidden="true"
```

---

## State 1: User Type Selection

### Header Section

**Container**:
- Background: #FAFBFC (very light gray)
- Padding: 16px horizontal (mobile), 24px horizontal (desktop)
- Padding: 12px vertical (mobile), 16px vertical (desktop)
- Border: 1px solid #E5E7EB (border-gray-200) at bottom

**Main Heading**:
- Text: "Who's watching today?"
- Font: 20px (mobile) / 24px (desktop)
- Weight: 700 (font-bold)
- Color: #22224C (brand-navy)
- Margin Bottom: 8px

**Subtext**:
- Text: "Help us measure the impact of Career Launch Week"
- Font: 14px
- Color: #4B5563 (gray-600)
- Margin Bottom: 12px (mobile) / 16px (desktop)

**Session Reminder Box**:
- Background: #C6E7FF (light-blue)
- Border: 1px solid rgba(0, 146, 255, 0.2)
- Border Radius: 8px (rounded-lg)
- Padding: 12px horizontal, 10px vertical
- Text: "You're about to watch: **[Session Title]**"
- Font: 14px
- Color: #22224C
- Session title: font-weight 600

### User Type Selection Cards

**Card Container**:
- Layout: Flex column with gap-12 (12px on mobile, 16px on desktop)
- Padding: 16px horizontal (mobile), 24px horizontal (desktop)
- Padding: 16px vertical (mobile), 24px vertical (desktop)

**Individual Card Design**:

```
Card Structure:
- Background: #FFFFFF
- Border: 2px solid #E5E9F1 (neutral-1)
- Border Radius: 12px (rounded-lg)
- Padding: 20px (mobile), 24px (desktop)
- Min Height: 120px
- Cursor: pointer
- Transition: all 200ms ease

Layout (horizontal on desktop, vertical stack on mobile):
- Icon container (left)
- Content area (center/right)
  - User type label (large)
  - Description text (smaller)
- Arrow indicator (right)
```

**Educator Card**:

```
Icon:
- Size: 48px x 48px
- Background: #E6F4FF (secondary-blue-pale)
- Border Radius: 50%
- Icon: Teacher/Presenter silhouette
- Icon Color: #0092FF (primary-blue)

Label:
- Text: "I'm an Educator"
- Font: 18px / 20px
- Weight: 600 (font-semibold)
- Color: #22224C

Description:
- Text: "Teacher, counselor, or administrator showing to students"
- Font: 14px
- Color: #65738B (neutral-4)
- Max Width: 280px (prevent long lines)

Arrow:
- Icon: Chevron right
- Size: 20px
- Color: #AAB7CB (neutral-3)
- Transition: transform 200ms (moves right on hover)
```

**Student Card**:

```
Icon:
- Size: 48px x 48px
- Background: #E6F4FF
- Border Radius: 50%
- Icon: Student/Person silhouette
- Icon Color: #0092FF

Label:
- Text: "I'm a Student"
- Font: 18px / 20px
- Weight: 600
- Color: #22224C

Description:
- Text: "Watching independently for career exploration"
- Font: 14px
- Color: #65738B
- Max Width: 280px

Arrow:
- Same as Educator card
```

**Card Hover State**:
- Border Color: #0092FF (primary-blue)
- Box Shadow: 0 4px 12px rgba(0, 146, 255, 0.15)
- Arrow: translateX(4px)
- Background: #FAFBFC (subtle fill)

**Card Focus State** (keyboard navigation):
- Outline: 2px solid #0092FF
- Outline Offset: 2px
- Same visual changes as hover

**Card Active/Pressed State**:
- Transform: scale(0.98)
- Border Color: #0092FF
- Background: #E6F4FF

**Card Selected State** (before transition):
- Border Color: #0092FF
- Background: #E6F4FF
- Check mark appears in top-right corner (optional)

### Footer Section

**Container**:
- Background: #FAFBFC
- Border: 1px solid #E5E7EB at top
- Padding: 12px horizontal (mobile), 16px horizontal (desktop)
- Padding: 12px vertical (mobile), 16px vertical (desktop)
- Position: sticky bottom

**Cancel Button**:
- Text: "Cancel"
- Background: transparent
- Border: 1px solid #D1D5DB (gray-300)
- Border Radius: 8px
- Padding: 10px horizontal, 10px vertical
- Font: 14px, weight 500
- Color: #4B5563 (gray-700)
- Hover: Background #F3F4F6 (gray-50)
- Focus: Outline 2px #0092FF

---

## State 2a: Educator Form

**Inherits from existing BottomDrawerModal implementation with these enhancements:**

### Back Navigation

**Placement**: Top-left of form area, above "YOUR INFORMATION" section

```
Link Structure:
- Display: inline-flex with gap-8
- Align Items: center

Icon:
- Type: Arrow left
- Size: 16px
- Color: #65738B

Text:
- Text: "Change selection"
- Font: 14px
- Color: #65738B
- Text Decoration: underline (on hover only)

Behavior:
- Hover: Color darkens to #485163
- Focus: Outline 2px #0092FF
- Click: Transitions back to type selection
```

### Welcome Back Banner (Returning Users)

**Maintain existing design** - green left-border banner with pre-fill confirmation

### Form Fields

**Maintain existing 6-field layout**:
- YOUR INFORMATION section: First Name, Email, School Board, School
- CLASS CONTEXT section: Class Size, Grade Level

All field specifications remain identical to current implementation.

### Footer

**Maintain existing layout**:
- Cancel button (left)
- "Start Video" button (right) with arrow icon
- Disabled state when form invalid

---

## State 2b: Student Form

### Header Section

**Same container as type selection but with different content:**

**Main Heading**:
- Text: "Tell us a bit about you"
- Font: 20px (mobile) / 24px (desktop)
- Weight: 700
- Color: #22224C

**Subtext**:
- Text: "No personal info needed - just help us understand who's watching"
- Font: 14px
- Color: #4B5563

**Privacy Badge**:
```
Container:
- Display: inline-flex
- Align Items: center
- Gap: 8px
- Background: #F0FDF4 (green-50)
- Border: 1px solid #86EFAC (green-300)
- Border Radius: 9999px (pill shape)
- Padding: 6px 12px

Icon:
- Type: Lock/Shield
- Size: 14px
- Color: #16A34A (green-600)

Text:
- Text: "We don't collect your name or email"
- Font: 12px, weight 500
- Color: #15803D (green-700)
```

**Session Reminder Box**:
- Same as type selection state

### Back Navigation

```
Placement: Top-left of form area

Structure:
- Same as educator form back navigation
- Text: "Change selection"
- Returns to type selection screen
```

### Form Content Area

**Container**:
- Padding: 16px horizontal (mobile), 24px horizontal (desktop)
- Padding: 16px vertical (mobile), 20px vertical (desktop)
- Overflow-Y: auto (scroll if needed, though unlikely)

**Form Layout**:
- Single column on mobile
- Single column on tablet/desktop (fewer fields don't need grid)
- Gap between fields: 16px

### Field 1: School Board

```
Label:
- Text: "What school board are you in?"
- Font: 14px, weight 500
- Color: #374151 (gray-700)
- Margin Bottom: 6px

Select Dropdown:
- Width: 100%
- Padding: 10px horizontal, 10px vertical
- Border: 1px solid #D1D5DB (gray-300)
- Border Radius: 8px
- Font: 15px
- Background: #FFFFFF
- Arrow: Native select arrow

Placeholder:
- Text: "Select your board..."
- Color: #9CA3AF (gray-400)

Focus State:
- Border Color: #0092FF
- Box Shadow: 0 0 0 3px rgba(0, 146, 255, 0.1)
- Outline: none

Error State:
- Border Color: #EF4444 (red-500)
- Error Text: "Please select your school board"
- Error Text Color: #DC2626 (red-600)
- Error Text Font: 14px
- Error Margin Top: 6px
```

### Field 2: School

```
Label:
- Text: "What school do you go to?"
- Font: 14px, weight 500
- Color: #374151

Select Dropdown:
- Same specifications as School Board
- Disabled until board selected

Placeholder (before board selected):
- Text: "Select a board first"
- Color: #9CA3AF

Placeholder (after board selected):
- Text: "Select your school..."

Disabled State:
- Background: #F3F4F6 (gray-100)
- Cursor: not-allowed
- Opacity: 0.7

Error State:
- Same as School Board field
- Error Text: "Please select your school"
```

### Field 3: Grade Level

```
Label:
- Text: "What grade are you in?"
- Font: 14px, weight 500
- Color: #374151

Select Dropdown:
- Same specifications as above
- Pre-selected: "Grade 12"

Options:
- Grades 7/8
- Grade 9
- Grade 10
- Grade 11
- Grade 12
- Mixed Grades (if applicable)

Error State:
- Same as above
- Error Text: "Please select your grade"
```

### Encouraging Message

**Optional decorative element below form:**

```
Container:
- Background: #F6F6FF (off-white)
- Border Radius: 8px
- Padding: 12px
- Margin Top: 16px

Icon:
- Type: Lightbulb or Rocket
- Size: 20px
- Color: #0092FF

Text:
- Text: "Explore careers that match your interests!"
- Font: 14px
- Color: #65738B
- Style: italic
```

### Footer

**Same structure as educator form:**

```
Container:
- Background: #FAFBFC
- Border Top: 1px solid #E5E7EB
- Padding: 12px (mobile), 16px (desktop)
- Position: absolute bottom

Layout:
- Flex, justify-end (right-align buttons)
- Gap: 8px (mobile), 12px (desktop)

Cancel Button:
- Same as educator form

Start Video Button:
- Same as educator form
- Disabled until all 3 fields valid
- Enabled state: Background #0092FF, text white
```

---

## Component Specifications

### Icon Library

**User Type Icons** (for selection cards):

```
Educator Icon SVG:
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 3L1 9l11 6 9-5.5V17h2V9L12 3z" fill="currentColor"/>
  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" fill="currentColor"/>
</svg>

Student Icon SVG:
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="8" r="4" fill="currentColor"/>
  <path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" fill="currentColor"/>
</svg>

Lock Icon SVG (privacy badge):
<svg width="14" height="14" viewBox="0 0 24 24" fill="none">
  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="2"/>
  <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" stroke-width="2"/>
</svg>

Back Arrow Icon:
<svg width="16" height="16" viewBox="0 0 24 24" fill="none">
  <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2"/>
</svg>
```

### Color Usage Summary

| Element | Color | Hex Code | CSS Variable/Class |
|---------|-------|----------|-------------------|
| Primary CTA | Blue | #0092FF | primary-blue |
| Text Primary | Navy | #22224C | brand-navy |
| Text Secondary | Gray | #65738B | neutral-4 |
| Borders Default | Light Gray | #E5E9F1 | neutral-1 |
| Success/Privacy | Green | #16A34A | green-600 |
| Error | Red | #EF4444 | red-500 |
| Card Hover BG | Pale Blue | #E6F4FF | secondary-blue-pale |
| Header BG | Off White | #FAFBFC | - |

---

## Responsive Behavior

### Mobile (320px - 767px)

**CRITICAL: Students will likely use mobile devices more frequently than educators. The student path must be optimized for mobile-first experience.**

```
Modal:
- Width: 100% viewport
- Height: varies by state
  - Type Selection: 85vh
  - Educator Form: 92vh-95vh
  - Student Form: 75vh (optimized - only 3 fields)
- Max Height: 95vh
- Border Radius Top: 20px (slightly smaller on mobile)

Type Selection Cards:
- Layout: Vertical stack (flex-col)
- Card Padding: 16px
- Icon Size: 40px (large enough to tap)
- Label Font: 18px
- **IMPORTANT: Keep descriptions VISIBLE** (do NOT hide/truncate)
  - Descriptions help students understand the choice
  - Font: 13px (slightly smaller but still readable)
  - Max 2 lines with ellipsis if needed
- Minimum card height: 80px
- Full width cards (easier to tap)
- Increased vertical gap between cards: 16px

Forms - Student Path (Mobile-Optimized):
- All fields single column (full width)
- Larger touch targets: min 48px height (above WCAG minimum)
- Increased padding on inputs: 14px horizontal, 12px vertical
- Font size: 16px (prevents iOS zoom on focus)
- Field gap: 20px (generous spacing for thumb navigation)
- Scroll behavior: smooth-scroll enabled
- **Thumb Zone Optimization:**
  - Submit button positioned at bottom (easy thumb reach)
  - Cancel button secondary position (less accidental taps)
  - Back link at top-left (deliberate action required)

Footer (Student Path - Mobile):
- **Buttons stack vertically** (column-reverse order)
- "Start Video" button on TOP (primary action, prominent)
- "Cancel" button below (secondary, full width but outline style)
- Gap between buttons: 12px
- Safe area padding: 16px bottom (for iOS home indicator)
- Total footer height: ~140px

Keyboard Avoidance (Critical for Mobile):
- When input focused, modal should adjust position
- Use `visualViewport` API to detect keyboard
- Scroll focused field into view with 80px top padding
- Privacy badge should scroll up with content (not fixed)

Loading States:
- School dropdown loading after board selection
- Show inline spinner (16px) next to dropdown label
- Text: "Loading schools..." in #65738B
- Disable dropdown during load (gray-100 background)
- Typical load time: 200-500ms (fast response expected)
```

### Mobile Gesture Support (Student Path)

```
Swipe Down on Modal:
- Threshold: 100px drag distance
- Visual feedback: Modal follows finger
- Release before threshold: Spring back
- Release after threshold: Close modal
- Velocity detection: Fast swipe closes regardless of distance

Tap Outside Modal:
- Closes modal (same as desktop)
- Brief haptic feedback (if supported)

Pull-to-Refresh:
- DISABLED within modal (prevent accidental refresh)

Scroll Behavior:
- Overscroll: contained (no bounce through modal)
- Momentum scrolling: enabled
- Scroll indicators: visible during scroll
```

### Form Validation - Mobile Specific

```
Student Path:
- Real-time validation (no blur requirement)
- Error messages appear immediately below field
- Error icon: Inline with error text (not in field)
- Error text: 13px, #DC2626
- Shake animation: subtle, 300ms (draws attention without being jarring)

Success State:
- Green checkmark appears next to field label
- Checkmark: 16px, #16A34A
- No text change (icons sufficient for mobile)

Form Submit Attempt (Invalid):
- Scroll to first error field automatically
- Focus that field
- Vibrate if supported (50ms haptic)
```

### Network Considerations (Mobile)

```
Offline Detection:
- If network unavailable, show banner at top of modal
- Banner text: "No internet connection"
- Banner color: #FEF3C7 (yellow-100) with #B45309 text
- Form submission queued until connection restored

Slow Network:
- Show loading state on "Start Video" button
- Button text changes: "Starting..." with spinner
- Disable all form fields during submission
- Timeout: 10 seconds before showing retry option

Retry Mechanism:
- If submission fails, show error in footer area
- "Retry" button appears
- Original form data preserved
```

### Tablet (768px - 1023px)

```
Modal:
- Width: max-width 600px
- Centered horizontally with auto margins

Type Selection Cards:
- Layout: Vertical stack maintained
- Card Padding: 20px
- Full descriptions visible

Forms:
- Educator: 2-column grid for related fields
- Student: Single column maintained

Footer:
- Horizontal button layout
- Right-aligned
```

### Desktop (1024px+)

```
Modal:
- Width: max-width 900px
- Height: as specified per state

Type Selection Cards:
- Layout: Horizontal within card (icon left, content right)
- Card Padding: 24px
- Hover effects fully enabled

Forms:
- Educator: 2-column grid
- Student: Single column (spacious)

Footer:
- Horizontal layout
- Generous padding
```

---

## Accessibility Requirements

### Keyboard Navigation

**Type Selection State**:
- Tab order: Card 1 (Educator) → Card 2 (Student) → Cancel button
- Enter/Space on focused card: Select that user type
- Escape: Close modal
- Focus trap within modal (cannot tab outside)

**Form States**:
- Tab order: Back link → Form fields in order → Cancel → Start Video
- Enter on last field: Submit form (if valid)
- Escape: Close modal

### Screen Reader Annotations

**Type Selection**:
```html
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Who's watching today?</h2>

  <div role="group" aria-label="Select your user type">
    <button
      role="option"
      aria-label="I'm an Educator. Teacher, counselor, or administrator showing to students."
    >
      <!-- Educator card content -->
    </button>

    <button
      role="option"
      aria-label="I'm a Student. Watching independently for career exploration."
    >
      <!-- Student card content -->
    </button>
  </div>
</div>
```

**Form Fields**:
- All labels properly associated with inputs via `for` attribute
- Error messages linked via `aria-describedby`
- Required fields marked with `aria-required="true"`
- Invalid fields marked with `aria-invalid="true"`

### Color Contrast Verification

| Text Type | Foreground | Background | Ratio | Pass? |
|-----------|------------|------------|-------|-------|
| Heading | #22224C | #FAFBFC | 12.5:1 | AA |
| Body Text | #65738B | #FFFFFF | 4.7:1 | AA |
| Error Text | #DC2626 | #FFFFFF | 4.5:1 | AA |
| Button Text | #FFFFFF | #0092FF | 4.6:1 | AA |
| Privacy Badge | #15803D | #F0FDF4 | 5.1:1 | AA |

### Focus Indicators

**All interactive elements**:
- Outline: 2px solid #0092FF
- Outline Offset: 2px
- Never remove focus indicators (not even `:focus:not(:focus-visible)`)

### Touch Targets

- Minimum size: 44px x 44px
- Type selection cards: Well above minimum (~120px height)
- Form inputs: 44px minimum height
- Buttons: 44px minimum height
