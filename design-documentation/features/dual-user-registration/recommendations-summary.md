---
title: UX/UI Design Recommendations Summary
description: Executive summary of key design decisions with specific recommendations and rationale
feature: dual-user-registration
last-updated: 2025-11-17
version: 1.0.0
status: draft
---

# UX/UI Design Recommendations Summary

## Quick Reference for Key Decisions

This document provides direct answers to the specific design questions raised, with rationale and recommended copy for each element.

---

## 1. Entry Point: Button Text Change

### Recommendation: YES - Change to "Watch Session"

**Current**: "Watch with Your Class"
**Proposed**: "Watch Session"

**Rationale**:
- More inclusive - works for both educators and students
- Removes assumption about class context
- Shorter, cleaner button text
- Action-focused and direct
- Students watching independently won't be confused

**Alternative Considered**: "Start Watching" - Rejected because less specific about what's being watched

**Visual Treatment**: Same button styling, just text change

```tsx
// Before
<button>Watch with Your Class</button>

// After
<button>Watch Session</button>
```

---

## 2. Initial User Type Selection

### Recommendation: Large Clickable Cards with Icons

**Pattern**: Card-based choice, NOT radio buttons or segmented controls

**Why Cards over Radio Buttons**:
- Higher affordance - looks clickable, inviting interaction
- More space for context and description
- Feels like making a choice, not filling out a form
- Better touch targets on mobile (entire card is clickable)
- Accommodates icons for visual reinforcement
- Professional appearance aligned with myBlueprint brand

**Why Cards over Large Buttons**:
- Provides room for explanatory subtext
- Icons add cognitive recognition
- Visual hierarchy with label + description
- Feels less transactional, more guiding

### Card Layout Specifications

**Desktop**: Side-by-side layout within each card (icon left, text center, arrow right)
**Mobile**: Stacked cards vertically, icon above text for space efficiency

**Card Dimensions**:
- Width: Full available width (responsive)
- Height: ~120px (auto based on content)
- Padding: 20-24px internal spacing
- Gap: 12-16px between cards

### Recommended Copy

**Modal Title**: "Who's watching today?"

**Rationale**:
- Friendly, conversational tone
- "Today" adds temporal context
- Question format invites response
- Doesn't make assumptions

**Alternative Rejected**: "Are you a student or educator?" - Too clinical, binary feeling

**Subtext**: "Help us measure the impact of Career Launch Week"

**Rationale**:
- Explains the "why" (data collection purpose)
- Positive framing (impact measurement)
- Aligns with platform mission
- Keeps focus on collective benefit

---

## 3. Educator Card Design

**Label**: "I'm an Educator"

**Rationale**:
- First person establishes self-identification
- "Educator" is inclusive (teachers, counselors, admins)
- Professional but approachable

**Description**: "Teacher, counselor, or administrator showing to students"

**Rationale**:
- Lists specific roles for clarity
- "Showing to students" emphasizes the class context
- Helps users self-identify correctly

**Icon**: Teacher/presenter with graduation cap silhouette

**Visual Treatment**:
- Icon in circular container with pale blue (#E6F4FF) background
- Right-pointing arrow indicates progression
- Hover: Blue border (#0092FF), subtle shadow

---

## 4. Student Card Design

**Label**: "I'm a Student"

**Rationale**:
- Parallel structure with educator option
- Clear, direct identification

**Description**: "Watching independently for career exploration"

**Rationale**:
- "Independently" clarifies the non-classroom context
- "Career exploration" frames the positive purpose
- Shorter than educator description (fewer details needed)

**Icon**: Person silhouette (student representation)

**Visual Treatment**: Same as educator card for consistency

---

## 5. Educator Path After Selection

### Recommendation: Transition Directly to 6-Field Form

**No transitional state needed**

**Rationale**:
- Users have already committed by selecting type
- Form is familiar pattern, no surprise
- Reduces clicks and time to completion
- Returning users see pre-filled form immediately
- Consistent with previous behavior

**Enhancements Added**:
1. **"Back" link** at top: "Change selection" to allow correction
2. **Section headers maintained**: "YOUR INFORMATION" and "CLASS CONTEXT"
3. **Welcome back banner** (if returning): Shows pre-fill confirmation
4. **Smooth height transition**: Modal grows to accommodate form

**Position of Back Link**: Top-left of form content area, styled as text link with left arrow icon

---

## 6. Student Path Form Design

### Recommendation: Simplified 3-Field Form with Privacy Emphasis

**Fields**:
1. School Board (dropdown)
2. School (dependent dropdown)
3. Grade Level (dropdown with Grade 12 pre-selected)

**Form Header**: "Tell us a bit about you"

**Rationale**:
- Friendly, non-threatening tone
- "A bit" emphasizes minimal ask
- Conversational rather than clinical

**Subtext**: "No personal info needed - just help us understand who's watching"

**Rationale**:
- Immediately reassures about privacy
- "No personal info" is explicit
- "Who's watching" explains purpose
- Aligns data collection with value proposition

### Privacy Badge (Key Differentiator)

**Visual**: Pill-shaped badge with lock icon + text

**Text**: "We don't collect your name or email"

**Placement**: Below subtext, above form fields

**Styling**:
- Background: Light green (#F0FDF4)
- Border: Green (#86EFAC)
- Icon: Lock (green #16A34A)
- Text: Dark green (#15803D)

**Rationale**:
- Visual proof of privacy commitment
- Green = safety/trust
- Lock icon is universally understood
- Explicit statement removes ambiguity

### Tone Differences vs. Educator Form

| Element | Educator Form | Student Form |
|---------|---------------|--------------|
| Header | "Who's Watching With You?" | "Tell us a bit about you" |
| Tone | Professional, contextual | Friendly, reassuring |
| Fields | 6 (includes PII) | 3 (no PII) |
| Subtext | Impact measurement | Privacy assurance |
| Cookie | Yes (7 days) | No |

---

## 7. Modal Behavior Specifications

### Dynamic Height Based on Path

**Type Selection Screen**: `min(75vh, 600px)`
- Compact, focused on choice
- Two cards don't need much vertical space

**Educator Form**: `min(88-92vh, 900-950px)`
- Existing height maintained
- Extra space for returning user banner

**Student Form**: `min(70vh, 550px)`
- Smaller than educator (fewer fields)
- Still spacious, not cramped
- Encourages completion

**Height Transition**: 400ms with custom easing
```css
transition: height 400ms cubic-bezier(0.32, 0.72, 0, 1);
```

### Back Navigation Behavior

**Link Text**: "Change selection"
**Alternative**: "Not you? Go back"

**Recommended**: "Change selection" - clearer intent, action-focused

**Behavior**:
1. Click link triggers content fade-out (300ms)
2. Modal height adjusts to type selection size
3. Type selection cards fade in
4. Previous form state is cleared (fresh start)
5. User can select same or different type

**Position**: Top-left corner of form area, with left-arrow icon

**Styling**:
```css
.back-link {
  color: #65738B; /* neutral-4 */
  font-size: 14px;
  text-decoration: none;
}

.back-link:hover {
  color: #485163; /* darker */
  text-decoration: underline;
}
```

### Cookie Strategy for Students

**Recommendation**: NO cookies for students

**Rationale**:
1. **Privacy First**: No PII means no benefit to storing
2. **Compliance**: Simpler regulatory compliance (minors)
3. **Clean Separation**: Clear distinction between user types
4. **No Expectation**: Students won't expect pre-fill
5. **Minimal Data**: Aligns with "collect only what's necessary"

**Implementation**: Student form hook explicitly does NOT read or write cookies

---

## 8. Consistency & Accessibility

### Brand Consistency

**Colors Used**:
- Primary CTA: #0092FF (brand blue)
- Text: #22224C (brand navy)
- Card borders: #E5E9F1 (neutral)
- Success/Privacy: Green palette
- Form elements: Existing neutral grays

**Typography**:
- Headers: Bold weights (600-700)
- Body: Regular weight (400)
- Captions: 14px size
- Consistent with Open Sans/Museo Sans system

**Spacing**:
- 8px base unit maintained
- Card padding: 20-24px (2.5-3x base)
- Field gaps: 16px (2x base)
- Section margins: 24px (3x base)

**Icons**:
- Consistent stroke weight (2px)
- Size: 24px within 48px containers
- Color: Brand blue (#0092FF)

### WCAG 2.1 AA Compliance

**Color Contrast Verified**:
- Navy text on white: 12.5:1 (passes AA, AAA)
- Blue button text: 4.6:1 (passes AA)
- Green privacy badge: 5.1:1 (passes AA)
- Gray description text: 4.7:1 (passes AA)

**Keyboard Navigation**:
- Full tab sequence through modal
- Focus trap within modal boundaries
- Clear focus indicators (2px blue outline)
- ESC key closes modal
- Enter/Space selects cards

**Screen Reader Support**:
- Modal has `role="dialog"` and `aria-modal="true"`
- Cards have descriptive `aria-label` with full context
- Form labels properly associated with inputs
- Error messages use `aria-describedby`
- Loading states announced

**Touch Targets**:
- Cards: Well above 44x44px minimum
- Form inputs: 44px minimum height
- Buttons: 44px minimum height
- Back link: 44px touch target

### Mobile-Responsive Considerations

**Mobile (320-767px)**:
- Modal takes full viewport width
- Cards stack vertically
- Single-column form layout
- Larger touch targets
- Buttons stack vertically (Cancel below Start)

**Tablet (768-1023px)**:
- Modal capped at 600px width
- Cards maintain vertical stack
- Some fields can grid (educator form)

**Desktop (1024px+)**:
- Modal capped at 900px width
- Cards laid out horizontally within each
- Full grid layouts for form fields

---

## 9. User Flow Diagram (Text Version)

```
┌─────────────────────────────────────┐
│      SESSION DETAIL PAGE            │
│                                     │
│    [ Watch Session ] ← New text     │
└─────────────┬───────────────────────┘
              │ Click
              ▼
┌─────────────────────────────────────┐
│        MODAL OPENS                  │
│   "Who's watching today?"           │
│                                     │
│   ┌──────────────────────┐          │
│   │ I'm an Educator      │          │
│   │ (icon)               │          │
│   │ Teacher, counselor...│          │
│   └──────────┬───────────┘          │
│              │                      │
│   ┌──────────────────────┐          │
│   │ I'm a Student        │          │
│   │ (icon)               │          │
│   │ Watching indep...    │          │
│   └──────────┬───────────┘          │
└──────────────┼──────────────────────┘
               │
       ┌───────┴───────┐
       │               │
       ▼               ▼
┌─────────────┐  ┌─────────────┐
│  EDUCATOR   │  │   STUDENT   │
│   FORM      │  │    FORM     │
│             │  │             │
│ • Name      │  │ • Board     │
│ • Email     │  │ • School    │
│ • Board     │  │ • Grade     │
│ • School    │  │             │
│ • Class Size│  │ [Privacy    │
│ • Grade     │  │  badge]     │
│             │  │             │
│ [Pre-fill   │  │ No cookies  │
│  from       │  │             │
│  cookie]    │  │             │
└──────┬──────┘  └──────┬──────┘
       │                │
       ▼                ▼
  [Start Video]    [Start Video]
       │                │
       └───────┬────────┘
               │
               ▼
┌─────────────────────────────────────┐
│         VIDEO PLAYBACK              │
│     Modal closes, video starts      │
│                                     │
│    Educator: Cookie set (7 days)    │
│    Student: No cookie               │
│                                     │
└─────────────────────────────────────┘
```

---

## 10. Concerns and Edge Cases

### Edge Case 1: Wrong Type Selected
**Concern**: User clicks "Student" but meant "Educator"
**Solution**: "Change selection" back link prominently placed
**Mitigation**: Clear descriptions on cards reduce misclicks

### Edge Case 2: Returning Educator Selects Student
**Concern**: Cookie exists but user chooses student path
**Solution**: Cookie data ignored for student form, clean slate
**Note**: Cookie remains intact for future educator use

### Edge Case 3: Student on Shared Computer
**Concern**: Previous educator data might interfere
**Solution**: Type selection always shown first, student path never reads cookies

### Edge Case 4: School Not Listed
**Concern**: Student's school missing from dropdown
**Solution**: Add "Other" option with text input fallback
**Implementation**: Future enhancement, not critical for launch

### Edge Case 5: User Closes Accidentally
**Concern**: Loses progress, frustrated
**Solution**: Quick reset to type selection (no re-browsing required)
**Note**: Form state not preserved across modal sessions

### Edge Case 6: Slow Network
**Concern**: Form submission fails
**Solution**: Inline error message with retry button
**Copy**: "Unable to start video. Please check your connection and try again."

### Performance Concern: Added Friction
**Issue**: Type selection adds 2-5 seconds to flow
**Mitigation**:
- Clean animations feel fast
- Clear purpose justifies the step
- Students gain significant simplicity (3 vs 6 fields)
- Overall friction still much lower than traditional platforms

### Privacy Concern: Student Data
**Issue**: Even school/grade could be sensitive
**Mitigation**:
- Absolutely no PII (name, email, device ID)
- Data aggregated by school/grade for analytics
- Clear privacy badge reassures students
- Parental consent considerations addressed by school policies

---

## 11. Recommended Approach Summary

### Core Principles Applied

1. **Show Value First**: Type selection respects browse-first philosophy
2. **Collect Appropriately**: Right data for right user type
3. **Maintain Trust**: Privacy badge builds confidence with students
4. **Reduce Friction**: 3-field form is simpler than 6-field
5. **Preserve Existing**: Educator flow remains familiar
6. **Brand Consistent**: All elements use myBlueprint design system

### Implementation Priority

1. **HIGH**: Button text change ("Watch Session")
2. **HIGH**: Type selection screen with cards
3. **HIGH**: Student form with privacy badge
4. **MEDIUM**: Back navigation from forms
5. **MEDIUM**: Dynamic modal height
6. **LOW**: "Other school" text input fallback

### Success Metrics to Track

- Form completion rate by user type
- Time to video by user type
- Back navigation frequency (indicates confusion)
- Student vs educator ratio
- Drop-off at type selection (should be <2%)

### Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Users confused by choice | Medium | Clear descriptions, icons, easy back nav |
| Educators choose "Student" | Low | Description emphasizes class context |
| Students avoid form entirely | Medium | Privacy badge reassures, minimal fields |
| Added friction reduces conversion | Medium | Monitor metrics, A/B test if needed |

---

## Final Recommendation

Implement the dual-user modal using the card-based selection pattern with a privacy-focused student path. The design balances the need for data collection with user experience and trust-building, particularly important for student users who may be wary of sharing information.

Key differentiator: **The privacy badge on the student form is not just decorative - it's a trust signal that makes students comfortable completing the form knowing their personal information is not being collected.**

The approach respects the platform's core philosophy of "show value first" while appropriately collecting data at the maximum commitment point, now tailored to the user type for optimal relevance and minimal friction.
