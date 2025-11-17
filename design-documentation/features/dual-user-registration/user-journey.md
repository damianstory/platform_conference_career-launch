---
title: User Journey Mapping - Dual User Registration
description: Complete user flow diagrams for educator and student registration paths
feature: dual-user-registration
last-updated: 2025-11-17
version: 1.0.0
related-files:
  - ./README.md
  - ./screen-states.md
  - ./interactions.md
dependencies:
  - Previous modal implementation
status: draft
---

# User Journey Mapping

## Overview

This document maps the complete user journeys for both educator and student paths through the registration modal, including entry points, decision trees, and all possible states.

## Table of Contents

1. [High-Level Flow Diagram](#high-level-flow-diagram)
2. [Educator Journey (Detailed)](#educator-journey-detailed)
3. [Student Journey (Detailed)](#student-journey-detailed)
4. [Edge Cases and Error States](#edge-cases-and-error-states)
5. [Journey Metrics](#journey-metrics)

---

## High-Level Flow Diagram

```
Session Detail Page
        |
        v
[Watch Session Button]
        |
        v
    Modal Opens
        |
        v
+---------------------------+
|   User Type Selection     |
|   "Who's watching?"       |
|                           |
|  [I'm an Educator]        |
|  [I'm a Student]          |
+---------------------------+
        |
        +----------------+----------------+
        |                                 |
        v                                 v
+-------------------+          +-------------------+
|  EDUCATOR PATH    |          |   STUDENT PATH    |
|                   |          |                   |
|  6-Field Form:    |          |  3-Field Form:    |
|  - First Name     |          |  - School Board   |
|  - Email          |          |  - School         |
|  - School Board   |          |  - Grade Level    |
|  - School         |          |                   |
|  - Class Size     |          |  (No PII)         |
|  - Grade Level    |          |                   |
+-------------------+          +-------------------+
        |                                 |
        v                                 v
    [Start Video]                  [Start Video]
        |                                 |
        +----------------+----------------+
                         |
                         v
                  Video Playback
                      Begins
```

---

## Educator Journey (Detailed)

### Entry Point
**Trigger**: User clicks "Watch Session" button on session detail page

### Step 1: User Type Selection

**User sees**:
- Modal slides up from bottom (400ms animation)
- Header: "Who's watching today?"
- Subtext: "Help us measure the impact of Career Launch Week"
- Session reminder box (blue background): "You're about to watch: [Session Title]"
- Two large cards:
  - **Educator Card**: Icon of teacher, "I'm an Educator", description text
  - **Student Card**: Icon of student, "I'm a Student", description text

**User action**: Clicks "I'm an Educator" card

**System response**:
- Card briefly highlights with press state (scale 0.98)
- Content area cross-fades (300ms) to educator form
- If returning user (cookie detected), welcome back banner appears

### Step 2: Educator Form

**First-Time User sees**:
- Section header: "YOUR INFORMATION"
- Fields: First Name, Email (2-column grid on desktop)
- Fields: School Board, School (2-column grid on desktop)
- Section header: "CLASS CONTEXT"
- Fields: Class Size, Grade Level (2-column grid on desktop)
- Pre-selected defaults: "25 to 35 students", "Grade 12"
- "Back" link (top-left corner) to return to type selection
- Footer: Cancel button (left), "Start Video" button (right, disabled until valid)

**Returning User sees** (cookie detected):
- Welcome back banner: "Welcome back! We've pre-filled your info from your last visit."
- All 6 fields pre-populated from cookie
- "Start Video" button immediately enabled
- Can edit any field before submitting

**User actions**:
1. Fill/review all fields (real-time validation)
2. Click "Start Video" when ready

**System response**:
- Validates all 6 fields
- Sets/updates cookie (7-day expiration)
- Logs viewing event with class context
- Modal closes with fade-out
- Video begins playback immediately

### Step 3: Video Playback
- Modal dismissed
- Full session video loads and plays
- Progress tracking begins (every 5 seconds)
- Educator can show to their class

---

## Student Journey (Detailed)

### Entry Point
**Trigger**: User clicks "Watch Session" button on session detail page

### Step 1: User Type Selection

**User sees**: Same as educator journey (identical initial state)

**User action**: Clicks "I'm a Student" card

**System response**:
- Card briefly highlights with press state
- Content area cross-fades (300ms) to student form
- No cookie check or welcome back banner (students don't get cookies)

### Step 2: Student Form

**User sees**:
- Friendly header: "Tell us a bit about you"
- Encouraging subtext: "No personal info needed - just help us understand who's watching"
- Privacy assurance badge: Lock icon + "We don't collect your name or email"
- Fields: School Board (dropdown)
- Fields: School (dropdown, dependent on board selection)
- Fields: Grade Level (dropdown, pre-selected "Grade 12")
- "Back" link (top-left corner) to return to type selection
- Footer: Cancel button (left), "Start Video" button (right, disabled until valid)

**User actions**:
1. Select school board from dropdown
2. Select school from filtered dropdown
3. Confirm or change grade level
4. Click "Start Video"

**System response**:
- Validates 3 required fields
- NO cookie is set (privacy protection for minors)
- Logs anonymous viewing event with school/grade context
- Modal closes with fade-out
- Video begins playback immediately

### Step 3: Video Playback
- Modal dismissed
- Full session video loads and plays
- Progress tracking begins (anonymous, by school/grade only)
- Student watches independently

---

## Edge Cases and Error States

### Case 1: User Clicks Wrong Type
**Scenario**: User selects "Student" but meant to select "Educator"

**Solution**:
- "Back" link clearly visible at top of form
- Clicking "Back" returns to type selection screen
- Previous form state is cleared when switching types
- No penalty for changing selection

**UX Copy**: "Not you? Go back to change your selection"

### Case 2: Returning Educator Wants to Watch as Student
**Scenario**: Teacher's child borrowing their laptop, cookie pre-fills educator data

**Solution**:
- On type selection screen, both options always visible
- If they select "Student", cookie data is NOT applied
- Clean slate for student form
- Original educator cookie remains untouched

### Case 3: Network Error During Form Submission
**Scenario**: Internet connection drops when clicking "Start Video"

**Solution**:
- Show inline error message: "Unable to start video. Please check your connection and try again."
- Keep form data intact (don't clear fields)
- "Start Video" button re-enables for retry
- After 3 failed attempts, suggest refreshing page

### Case 4: User Closes Modal Accidentally
**Scenario**: User clicks outside modal or presses ESC before completing

**Solution** (Existing behavior maintained):
- Modal closes immediately (respect user intent)
- No data is submitted or saved
- User must click "Watch Session" button again
- Form state resets to type selection screen

### Case 5: School Not in List
**Scenario**: Student's school is not in the dropdown

**Solution**:
- Add "Other" option at end of school list
- When "Other" selected, show text input: "Please enter your school name"
- Still requires board selection first
- Captures data for future expansion

### Case 6: Student on Shared/Educator Computer
**Scenario**: Student using school computer where educator previously registered

**Solution**:
- Type selection always appears first (no automatic path)
- Student path never reads educator cookies
- Clear separation of concerns
- Educator cookie only affects educator form pre-fill

---

## Journey Metrics

### Time to Video Completion

| User Type | First Time | Return Visit |
|-----------|-----------|--------------|
| Educator | ~25 seconds | ~3 seconds |
| Student | ~12 seconds | ~12 seconds |

**Breakdown - First-Time Educator**:
- Modal animation: 0.4s
- Type selection: ~3s
- Form completion: ~20s
- Button click to video: 1s
- **Total: ~25 seconds**

**Breakdown - Returning Educator**:
- Modal animation: 0.4s
- Type selection: ~2s
- Review pre-filled data: ~0.5s
- Button click to video: 1s
- **Total: ~4 seconds** (improved from original 1s due to type selection)

**Breakdown - Student (always "first time")**:
- Modal animation: 0.4s
- Type selection: ~3s
- Board selection: ~3s
- School selection: ~2s
- Grade confirmation: ~1s
- Button click to video: 1s
- **Total: ~11-12 seconds**

### Conversion Funnel

```
Session Detail Page Views    100%
        |
        v
"Watch Session" Click         75%  (target)
        |
        v
Type Selection Completed      98%  (target)
        |
        v
Form Completed                95%  (target, matches current)
        |
        v
Video Started                 94%  (target)
```

### Key Performance Indicators

1. **Type Selection Abandonment Rate**: Target < 2%
   - Measure: Users who open modal but don't select a type

2. **Form Abandonment by Type**:
   - Educator: Target < 5%
   - Student: Target < 3% (simpler form)

3. **Back Navigation Rate**: Monitor but no target
   - High rate may indicate confusing initial choice

4. **Student vs Educator Split**: Monitor distribution
   - Adjust messaging if unexpected ratio
