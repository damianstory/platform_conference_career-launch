# Career Launch Platform - Registration System PRD

**Version:** 1.0
**Date:** January 2025
**Status:** Ready for Planning
**Priority:** P0 - Critical Path Feature

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Solution Overview](#3-solution-overview)
4. [Feature Specifications](#4-feature-specifications)
5. [User Experience Flows](#5-user-experience-flows)
6. [Technical Implementation](#6-technical-implementation)
7. [Success Metrics](#7-success-metrics)
8. [Dependencies & Risks](#8-dependencies--risks)
9. [Implementation Roadmap](#9-implementation-roadmap)

---

# 1. EXECUTIVE SUMMARY

## 1.1 Feature Overview

The **Registration System** is the core data collection mechanism for the Career Launch Platform, designed to capture educator profile information and classroom viewing context at the moment of maximum commitment—when an educator decides to watch a video with their class.

**Key Innovation:** Browse-first registration that eliminates upfront barriers and only collects information when users demonstrate high intent.

## 1.2 Business Value

### Primary Objective
Enable accurate student reach measurement without creating friction that prevents educator engagement.

### Success Criteria
- **≥95% form completion rate** (educators who start form, complete it)
- **≥60% browse-to-watch conversion** (visitors who browse sessions, click "Watch with Your Class")
- **<30 second time-to-first-video** from homepage landing
- **≥50% returning user rate** (educators who watch 2+ sessions using cookie pre-fill)

### Impact on North Star Metric
Total Student Reach = Sum of all `class_size` values from viewing_events table

Without accurate registration data:
- Cannot measure true student reach
- Cannot justify sponsor investment
- Cannot demonstrate board-level ROI
- Cannot personalize returning user experience

## 1.3 Current State vs. Future State

### Current State (As of January 2025)
- ✅ Homepage with public session browsing
- ✅ Session detail pages with trailers
- ✅ Full session data in database
- ❌ **NO registration system implemented**
- ❌ **NO "Watch with Your Class" button functionality**
- ❌ **NO form modal component**
- ❌ **NO API routes for form submission**
- ❌ **NO cookie management**
- ❌ **NO video tracking implementation**

### Future State (Post-Implementation)
- ✅ Combined 6-field registration form as modal
- ✅ Cookie-based pre-fill for returning users
- ✅ API routes for submission, video tracking, completion
- ✅ Database integration with users and viewing_events tables
- ✅ Full video playback with engagement tracking
- ✅ Seamless <1 second repeat experience for returning educators

---

# 2. PROBLEM STATEMENT

## 2.1 The Registration Paradox

### The Challenge
Traditional platforms force registration BEFORE users can see value, causing 40-60% abandonment before content exploration even begins.

**Example Traditional Flow:**
```
Landing Page → Registration Form → Email Verification → Profile Setup → Browse Content
Abandonment Points: 60% | 15% | 10% | 5% = 10% completion
```

**Our Browse-First Flow:**
```
Landing Page → Browse Content → Choose Session → Registration (at commitment point) → Watch
Abandonment Points: 5% | 5% | 5% = 85% completion
```

## 2.2 User Pain Points

### For First-Time Educators
**Pain:** "I need to evaluate if this content is worth my class time, but I'm forced to create an account before I can even see what's available."

**Our Solution:** Browse all 27 sessions immediately, watch trailers, read full descriptions—no registration required. Only when you click "Watch with Your Class" do we ask for information.

### For Returning Educators
**Pain:** "I showed one session yesterday and it was great. Now I want to show another, but I have to fill out the same form again with my school, role, class size... this is tedious."

**Our Solution:** Cookie pre-fills ALL 6 fields automatically. Click "Start Video" once, and you're watching (1 second vs. 20 seconds).

### For Platform Owners
**Pain:** "We need to know how many students actually watched each session, not just how many times the 'play' button was clicked. One teacher with 30 students is different from 30 teachers previewing alone."

**Our Solution:** Combined form captures both WHO is watching (educator profile) and HOW MANY are watching (class size, grade level) in a single submission.

---

# 3. SOLUTION OVERVIEW

## 3.1 Solution Architecture

### Single Combined Form Strategy
**One form, six fields, one submission point, zero friction for returning users**

The registration system combines traditionally separate flows into a single, streamlined experience:

**Traditional Approach (Multi-Step):**
1. Create account form (email, password, name)
2. Email verification
3. Profile setup (school, board, role)
4. Per-video context form (class size, grade level)

**Our Approach (Single Combined Form):**
1. ~~Create account~~ No account creation
2. ~~Email verification~~ No verification needed
3. ~~Profile setup~~ Collected in same form as viewing context
4. Combined form: Profile + Context in 6 fields

### The 6-Field Combined Form

| Field | Type | Purpose | Example Value |
|-------|------|---------|---------------|
| **Name** | Text input | Educator identification | "Jane Smith" |
| **Email** | Email input | Unique identifier + cookie key | "jane.smith@torontodsb.ca" |
| **School Board** | Dropdown | Organizational hierarchy | "Toronto District School Board" |
| **School** | Dependent dropdown | Organizational hierarchy | "Central High School" |
| **Role** | Dropdown | Educator type | "Teacher" / "Guidance Counselor" / "Administrator" |
| **Class Size** | Radio group | Student reach calculation | "25-to-35" / "less-than-25" / "large-group" |
| **Grade Level** | Radio group | Demographic insight | "9-10" / "11-12" / "Mixed" |

### Cookie-Based Pre-fill System

**Cookie Name:** `clp_session`
**Duration:** 7 days
**Storage:** Client-side, HTTP-only in production
**Purpose:** UX enhancement (NOT authentication)

**Cookie Payload:**
```json
{
  "email": "jane.smith@torontodsb.ca",
  "timestamp": "2025-12-01T10:30:00Z",
  "lastSubmission": {
    "name": "Jane Smith",
    "email": "jane.smith@torontodsb.ca",
    "boardId": "abc-123-uuid",
    "schoolId": "def-456-uuid",
    "role": "Teacher",
    "classSize": "25-to-35",
    "gradeLevel": "11-12"
  }
}
```

## 3.2 Key Design Principles

### 1. Browse-First, Always
**NEVER require registration to browse content**
- Homepage: No registration prompt
- Sessions list: No registration prompt
- Session detail pages: No registration prompt
- Trailers: Play without registration
- **ONLY trigger registration when:** User clicks "Watch with Your Class" button

### 2. Maximum Commitment Point
**Only collect data when users demonstrate high intent**

The moment an educator clicks "Watch with Your Class" is the highest commitment signal:
- They've browsed the schedule
- They've read the session description
- They've watched the trailer (maybe)
- They've decided this content is valuable for their students
- They're ready to commit class time

At this moment, asking for 6 fields (20 seconds) is reasonable.

### 3. Zero Friction for Returning Users
**Cookie pre-fill reduces repeat friction from 20 seconds → 1 second**

An educator who shows 5 sessions during Career Launch Week:
- Session 1: 20 seconds to fill form
- Sessions 2-5: 1 second each (just click "Start Video")
- **Total friction: 24 seconds across entire week**

Traditional platform (no pre-fill):
- Each session: 15-20 seconds
- **Total friction: 75-100 seconds**

### 4. Combined, Not Sequential
**All 6 fields in ONE form, ONE submission**

Why not separate profile and context forms?
- ❌ More abandonment points
- ❌ More friction for first-time users
- ❌ More complex state management
- ❌ Worse mobile experience (multiple modals)

✅ Single form is simpler, faster, and feels less burdensome

---

# 4. FEATURE SPECIFICATIONS

## 4.1 Feature Components

### Component 1: "Watch with Your Class" Button

**Location:** Session detail pages (`/sessions/[slug]`)

**Visual Design:**
- Large, prominent CTA button
- Primary brand color (Blue #0092FF)
- Positioned twice:
  1. Below trailer video (top of page)
  2. After session description (bottom of page)
- Mobile: Consider sticky button for always-visible CTA

**Button States:**
| State | Visual | Behavior |
|-------|--------|----------|
| Default | Blue background, white text | Clickable |
| Hover | Darker blue | Shows pointer cursor |
| Focus | Blue + focus ring | Keyboard accessible |
| Loading | Blue + spinner | Disabled during modal open |

**Interaction:**
```
User clicks "Watch with Your Class"
  → Button shows loading state (0.1s)
  → Combined registration modal opens
  → Button returns to default state
```

**Accessibility:**
- Keyboard accessible (Tab to focus, Enter/Space to activate)
- Screen reader label: "Watch [Session Title] with Your Class"
- Minimum touch target: 44x44px (mobile)
- ARIA attributes: `role="button"` `aria-label="..."`

### Component 2: Combined Registration Modal

**Trigger:** "Watch with Your Class" button click

**Modal Structure:**
```
┌─────────────────────────────────────────────┐
│  [X] Close                                  │
│                                             │
│  Who's Watching With You?                   │
│                                             │
│  Profile Information                        │
│  ┌─────────────────────────────────────┐   │
│  │ Name *                              │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │ Email *                             │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │ School Board * ▼                    │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │ School * ▼ (depends on board)       │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │ Role * ▼                            │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Class Context                              │
│  Class Size *                               │
│  ( ) Less than 25  ( ) 25-35  ( ) Large     │
│                                             │
│  Grade Level *                              │
│  ( ) 9-10  ( ) 11-12  ( ) Mixed             │
│                                             │
│  ┌───────────────────────────────────┐     │
│  │      Start Video (Disabled)       │     │
│  └───────────────────────────────────┘     │
│                                             │
│  * Required fields                          │
└─────────────────────────────────────────────┘
```

**Modal Behavior:**
- Overlay: Semi-transparent dark background (rgba(0,0,0,0.7))
- Position: Centered viewport
- Size: Max-width 600px, responsive
- Scroll: Modal content scrolls if viewport too small
- Close: Click outside, ESC key, X button (all close without submitting)
- Trap focus: Tab cycles through form fields only

**Form Validation:**

| Field | Validation Rules | Error Messages |
|-------|------------------|----------------|
| Name | Required, min 2 chars, max 100 chars | "Please enter your name" |
| Email | Required, valid email format, max 100 chars | "Please enter a valid email address" |
| School Board | Required, must select from list | "Please select your school board" |
| School | Required, depends on board selection | "Please select your school" |
| Role | Required, must select from list | "Please select your role" |
| Class Size | Required, one radio selected | "Please indicate your class size" |
| Grade Level | Required, one radio selected | "Please indicate the grade level" |

**Real-Time Validation:**
- Name: Validates on blur
- Email: Validates on blur (format check only, no existence check)
- Dropdowns: Validate on selection
- Radios: Validate when first option selected
- Submit button: Disabled until all 6 fields valid

**Pre-fill Logic (Returning Users):**
```javascript
On modal open:
  1. Check for 'clp_session' cookie
  2. If cookie exists and < 7 days old:
     - Pre-fill all 6 fields with cookie values
     - Enable "Start Video" button immediately (if all valid)
     - Show visual indicator: "Welcome back, [Name]!"
  3. If no cookie or expired:
     - Show empty form
     - Disable "Start Video" button
```

### Component 3: Form Submission & Video Transition

**Submission Flow:**
```
User clicks "Start Video"
  → Front-end validates all fields
  → If invalid: Show error messages, focus first error
  → If valid:
      → Show loading spinner on button
      → POST /api/submit-registration
      → If success:
          → Close modal (0.2s fade out)
          → Set/update cookie
          → Initialize video player
          → Start video playback
          → Begin tracking (every 5s)
      → If error:
          → Show error message in modal
          → Keep form open for retry
```

**Timing Goals:**
- Form validation: <50ms
- API response: <500ms
- Modal close animation: 200ms
- Video start: <1000ms from button click
- **Total: <2 seconds from click to video playing**

### Component 4: Cookie Management

**Cookie Creation (First Submission):**
```javascript
// After successful form submission
document.cookie = `clp_session=${JSON.stringify({
  email: formData.email,
  timestamp: new Date().toISOString(),
  lastSubmission: {
    name: formData.name,
    email: formData.email,
    boardId: formData.boardId,
    schoolId: formData.schoolId,
    role: formData.role,
    classSize: formData.classSize,
    gradeLevel: formData.gradeLevel
  }
})}; max-age=604800; path=/; SameSite=Strict; ${isProduction ? 'Secure;' : ''}`
```

**Cookie Update (Subsequent Submissions):**
- Every form submission updates the cookie with latest values
- Timestamp refreshes (extends 7-day expiration)
- Allows educators to change class context (e.g., different period)

**Cookie Expiration:**
- 7 days (604800 seconds)
- Covers 5-day event + 2-day buffer
- Auto-expires after event, no cleanup needed

**Security Considerations:**
- SameSite=Strict (prevents CSRF attacks)
- Secure flag in production (HTTPS only)
- No sensitive data (no passwords, tokens, or payment info)
- Public educator information only
- Cookie size: <1KB (well under 4KB limit)

---

# 5. USER EXPERIENCE FLOWS

## 5.1 Happy Path: First-Time Educator

**Scenario:** Ms. Johnson is a Grade 11 teacher at Central High School. She's never used Career Launch before. It's Monday morning during her prep period.

### Flow Diagram
```
┌─────────────────────────────────────────────────────────────┐
│ STEP 1: LANDING                                             │
│ Ms. Johnson types careerlaunch.myblueprint.ca in browser    │
│ Homepage loads in <1.5s                                     │
│ Sees: Hero + Split sections (Sessions | Booths)            │
│ Time: 0:00                                                  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 2: EXPLORATION                                         │
│ Clicks "Sessions" → /sessions page loads                    │
│ Sees: Conference Schedule tab (4 blocks)                    │
│ Browses Block 2: "Engineering & Technology"                 │
│ Spots: "Software Development Career Paths"                  │
│ Time: 0:00 - 2:00 (2 minutes browsing)                     │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 3: DETAIL PAGE                                         │
│ Clicks session card → /sessions/software-dev-careers        │
│ Reads: Full description, learning objectives                │
│ Watches: 90-second trailer (no form appears!)               │
│ Thinks: "Perfect for my comp sci class"                     │
│ Time: 2:00 - 4:30 (2.5 minutes on detail page)             │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 4: COMMITMENT POINT                                    │
│ Clicks: "Watch with Your Class" button                      │
│ Modal appears: "Who's Watching With You?"                   │
│ Sees: 6 fields, all empty, "Start Video" disabled          │
│ Time: 4:30                                                  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 5: FORM COMPLETION                                     │
│ Fills:                                                       │
│ - Name: "Sarah Johnson"                          (3s)       │
│ - Email: "sarah.johnson@torontodsb.ca"          (5s)       │
│ - Board: "Toronto District School Board"        (2s)       │
│ - School: "Central High School"                 (3s)       │
│ - Role: "Teacher"                                (2s)       │
│ - Class Size: "25-to-35"                         (2s)       │
│ - Grade Level: "11-12"                           (2s)       │
│ "Start Video" button enables                                │
│ Time: 4:30 - 4:49 (~19 seconds to fill)                    │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 6: SUBMISSION & TRANSITION                             │
│ Clicks: "Start Video"                                       │
│ System:                                                      │
│ - Validates fields (50ms)                                   │
│ - Submits to API (400ms)                                    │
│ - Creates user record + viewing_event                       │
│ - Sets cookie (client-side)                                 │
│ - Closes modal (200ms animation)                            │
│ - Video starts playing immediately                          │
│ Time: 4:49 - 4:50 (~1 second total)                        │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 7: VIDEO PLAYBACK                                      │
│ Full session video playing (25 minutes)                     │
│ Tracking every 5 seconds:                                   │
│ - Watch duration                                            │
│ - Completion percentage                                     │
│ Ms. Johnson shows to class (30 students)                    │
│ Students watch, engaged                                     │
│ Time: 4:50 - 5:15 (25 minutes)                             │
└─────────────────────────────────────────────────────────────┘

**Total Time Breakdown:**
- Browsing to decision: 4:30 (unrestricted exploration)
- Form completion: 0:19 (one-time investment)
- Submission to playback: 0:01 (seamless transition)
- **Total: 4:50 to watching video with class**
```

**Key Success Factors:**
- ✅ No registration required for 4.5 minutes of exploration
- ✅ Form only appears when Ms. Johnson is highly committed
- ✅ 19 seconds to fill form feels reasonable at commitment point
- ✅ Cookie now set for seamless future sessions

## 5.2 Happy Path: Returning Educator

**Scenario:** Ms. Johnson returns Wednesday morning. Yesterday's session was great. She wants to show a different session to another class.

### Flow Diagram
```
┌─────────────────────────────────────────────────────────────┐
│ STEP 1: RETURN VISIT                                        │
│ Ms. Johnson navigates to careerlaunch.myblueprint.ca        │
│ Cookie detected: clp_session (email, all form values)       │
│ No visible change (browsing still public)                   │
│ Time: 0:00                                                  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 2: QUICK BROWSE                                        │
│ Clicks "Sessions" → Conference Schedule tab                 │
│ Already knows the layout, scans quickly                     │
│ Finds: "Construction Trades Careers" in Block 3            │
│ Clicks session card                                         │
│ Time: 0:00 - 0:45 (45 seconds to find session)             │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 3: DETAIL PAGE (QUICK SCAN)                           │
│ Skims description (already trusts platform)                 │
│ Clicks "Watch with Your Class" immediately                  │
│ Time: 0:45 - 1:00 (15 seconds on detail page)              │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 4: PRE-FILLED FORM                                     │
│ Modal opens: "Welcome back, Sarah!"                         │
│ ALL 6 fields pre-filled:                                    │
│ ✓ Name: "Sarah Johnson"                                     │
│ ✓ Email: "sarah.johnson@torontodsb.ca"                     │
│ ✓ Board: "Toronto District School Board"                   │
│ ✓ School: "Central High School"                            │
│ ✓ Role: "Teacher"                                           │
│ ✓ Class Size: "25-to-35" ← Can edit if needed              │
│ ✓ Grade Level: "11-12" ← Can edit if needed                │
│ "Start Video" button ENABLED immediately                    │
│ Time: 1:00                                                  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 5: ONE-CLICK START                                     │
│ Ms. Johnson reviews pre-filled values                       │
│ Thinks: "Same class size, same grade, perfect"             │
│ Clicks: "Start Video" (NO editing needed)                   │
│ System:                                                      │
│ - Validates (50ms)                                          │
│ - Submits (400ms)                                           │
│ - Creates new viewing_event                                 │
│ - Updates cookie timestamp                                  │
│ - Video starts                                              │
│ Time: 1:00 - 1:01 (~1 second!)                             │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 6: VIDEO PLAYBACK                                      │
│ Full session playing (20 minutes)                           │
│ Different class watching (28 students)                      │
│ Tracked as separate viewing_event                           │
│ Time: 1:01 - 21:01                                          │
└─────────────────────────────────────────────────────────────┘

**Total Time Breakdown:**
- Finding session: 1:00
- Form pre-fill review + submit: 0:01
- **Total: 1:01 to watching video**

**Comparison:**
- First session: 4:50 total (19s on form)
- Second session: 1:01 total (1s on form)
- **Friction reduced by 78% for returning users**
```

**Key Success Factors:**
- ✅ Cookie recognized on return (no visual change to browsing)
- ✅ All 6 fields pre-filled automatically
- ✅ 1-second click-to-video (vs. 20 seconds first time)
- ✅ Can still edit values if context changed (e.g., larger class)

## 5.3 Edge Case: Educator Edits Pre-filled Values

**Scenario:** Mr. Lee watched a session with his Grade 11 class (30 students) on Monday. Wednesday, he wants to show the same session to his Grade 9 class (22 students).

```
┌─────────────────────────────────────────────────────────────┐
│ SITUATION                                                    │
│ Mr. Lee clicks "Watch with Your Class" on same session      │
│ Modal opens with pre-filled values from Monday:             │
│ - Class Size: "25-to-35" ← Wrong for today's class         │
│ - Grade Level: "11-12" ← Wrong for today's class           │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ USER ACTION                                                  │
│ Mr. Lee notices values don't match today's context          │
│ Changes:                                                     │
│ - Class Size: "25-to-35" → "less-than-25"   (2s)           │
│ - Grade Level: "11-12" → "9-10"             (2s)           │
│ Other fields remain: Name, Email, Board, School, Role       │
│ Time: ~4 seconds to edit                                    │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ SYSTEM RESPONSE                                              │
│ Clicks "Start Video"                                        │
│ System creates NEW viewing_event with updated context:      │
│ - Same user (by email)                                      │
│ - Same session                                              │
│ - Different class_size: "less-than-25"                      │
│ - Different grade_level: "9-10"                             │
│ Cookie updates with new values for next time                │
└─────────────────────────────────────────────────────────────┘

**Why This Matters:**
- Educators teach multiple classes with different sizes/grades
- System tracks EACH viewing event separately
- Cookie always stores MOST RECENT submission
- Accurate student reach calculation per viewing context
```

## 5.4 Edge Case: Cookie Expired (Day 8+)

**Scenario:** Ms. Johnson returns 10 days after Career Launch Week ends to review a session.

```
┌─────────────────────────────────────────────────────────────┐
│ SITUATION                                                    │
│ Cookie expired after 7 days (no longer valid)               │
│ Ms. Johnson clicks "Watch with Your Class"                  │
│ System checks cookie: expired                               │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ SYSTEM BEHAVIOR                                              │
│ Modal opens with EMPTY form (same as first-time user)       │
│ No "Welcome back" message                                   │
│ All 6 fields blank                                          │
│ "Start Video" button disabled                               │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ USER EXPERIENCE                                              │
│ Ms. Johnson fills form again (~20 seconds)                  │
│ Not ideal, but acceptable for post-event access             │
│ New cookie set with 7-day expiration                        │
└─────────────────────────────────────────────────────────────┘

**Design Rationale:**
- 7-day expiration covers 5-day event + 2-day buffer
- Post-event usage is lower priority (archive/review)
- Shorter expiration = better privacy
- Educators can re-fill if needed (known pattern)
```

---

# 6. TECHNICAL IMPLEMENTATION

## 6.1 Database Schema

### Table: `users`

Stores educator profile information (WHO is watching).

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  board_id UUID NOT NULL REFERENCES boards(id),
  school_id UUID NOT NULL REFERENCES schools(id),
  role VARCHAR(50) NOT NULL CHECK (role IN ('Teacher', 'Guidance Counselor', 'Administrator', 'Other')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_school ON users(school_id);
CREATE INDEX idx_users_board ON users(board_id);
```

**Update Logic:**
- Email is unique identifier
- If user with email exists: UPDATE name, board_id, school_id, role
- If user doesn't exist: INSERT new user
- Allows profile updates (e.g., teacher changes schools)

### Table: `viewing_events`

Stores each instance of a video being shown (HOW MANY students watched).

```sql
CREATE TABLE viewing_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  session_id UUID NOT NULL REFERENCES sessions(id),
  class_size VARCHAR(20) NOT NULL CHECK (class_size IN ('less-than-25', '25-to-35', 'large-group')),
  large_group_count INTEGER CHECK (class_size = 'large-group' AND large_group_count IS NOT NULL OR class_size != 'large-group'),
  grade_level VARCHAR(20) NOT NULL CHECK (grade_level IN ('9-10', '11-12', 'Mixed')),
  watch_duration INTEGER DEFAULT 0, -- seconds watched
  completion_percentage INTEGER DEFAULT 0, -- 0-100
  completed BOOLEAN DEFAULT FALSE, -- true if watched ≥80%
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_viewing_events_user ON viewing_events(user_id);
CREATE INDEX idx_viewing_events_session ON viewing_events(session_id);
CREATE INDEX idx_viewing_events_completed ON viewing_events(completed);
CREATE INDEX idx_viewing_events_created_at ON viewing_events(created_at);
```

**Key Design Decisions:**
- **Multiple events per user+session:** Allowed (same session, different class)
- **class_size + grade_level:** Captured per event (can vary)
- **Completion tracking:** Updated during playback, marked at 80% threshold

### Table: `boards` (Reference Data)

```sql
CREATE TABLE boards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(200) NOT NULL UNIQUE,
  region VARCHAR(100),
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed with ~70 Ontario school boards
INSERT INTO boards (name, region) VALUES
  ('Toronto District School Board', 'Greater Toronto Area'),
  ('Peel District School Board', 'Greater Toronto Area'),
  ('York Region District School Board', 'Greater Toronto Area'),
  -- ... etc
```

### Table: `schools` (Reference Data)

```sql
CREATE TABLE schools (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  board_id UUID NOT NULL REFERENCES boards(id),
  name VARCHAR(200) NOT NULL,
  city VARCHAR(100),
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(board_id, name)
);

CREATE INDEX idx_schools_board ON schools(board_id);

-- Seed with Ontario schools per board
INSERT INTO schools (board_id, name, city) VALUES
  ('toronto-dsb-uuid', 'Central High School', 'Toronto'),
  ('toronto-dsb-uuid', 'Eastview Secondary', 'Toronto'),
  -- ... etc
```

## 6.2 API Routes

### POST /api/submit-registration

**Purpose:** Process combined registration form and create viewing event.

**Request:**
```json
{
  "sessionId": "uuid",
  "name": "Jane Smith",
  "email": "jane.smith@torontodsb.ca",
  "boardId": "uuid",
  "schoolId": "uuid",
  "role": "Teacher",
  "classSize": "25-to-35",
  "gradeLevel": "11-12"
}
```

**Response (Success):**
```json
{
  "success": true,
  "userId": "uuid",
  "viewingEventId": "uuid"
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Invalid email format"
}
```

**Implementation Logic:**
```typescript
export async function POST(request: Request) {
  try {
    // 1. Parse and validate request body
    const body = await request.json()
    const { sessionId, name, email, boardId, schoolId, role, classSize, gradeLevel } = body

    // 2. Validate all fields (Zod schema)
    const validation = registrationSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json({ success: false, error: validation.error }, { status: 400 })
    }

    // 3. Check if user exists (by email)
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single()

    let userId: string

    if (existingUser) {
      // 4a. Update existing user profile
      const { data: updatedUser, error } = await supabase
        .from('users')
        .update({ name, board_id: boardId, school_id: schoolId, role, updated_at: new Date() })
        .eq('email', email)
        .select('id')
        .single()

      if (error) throw error
      userId = updatedUser.id
    } else {
      // 4b. Create new user
      const { data: newUser, error } = await supabase
        .from('users')
        .insert({ email, name, board_id: boardId, school_id: schoolId, role })
        .select('id')
        .single()

      if (error) throw error
      userId = newUser.id
    }

    // 5. Create viewing_event record
    const { data: viewingEvent, error: viewingError } = await supabase
      .from('viewing_events')
      .insert({
        user_id: userId,
        session_id: sessionId,
        class_size: classSize,
        grade_level: gradeLevel
      })
      .select('id')
      .single()

    if (viewingError) throw viewingError

    // 6. Set cookie (7 days)
    const cookieData = {
      email,
      timestamp: new Date().toISOString(),
      lastSubmission: { name, email, boardId, schoolId, role, classSize, gradeLevel }
    }

    const response = NextResponse.json({
      success: true,
      userId,
      viewingEventId: viewingEvent.id
    })

    response.cookies.set('clp_session', JSON.stringify(cookieData), {
      maxAge: 604800, // 7 days
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production'
    })

    return response

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
```

### POST /api/update-viewing-event

**Purpose:** Track video progress (called every 5 seconds during playback).

**Request:**
```json
{
  "viewingEventId": "uuid",
  "watchDuration": 120, // seconds
  "completionPercentage": 35 // 0-100
}
```

**Response:**
```json
{
  "success": true
}
```

**Implementation Logic:**
```typescript
export async function POST(request: Request) {
  try {
    const { viewingEventId, watchDuration, completionPercentage } = await request.json()

    // Update viewing_event with latest progress
    const { error } = await supabase
      .from('viewing_events')
      .update({
        watch_duration: watchDuration,
        completion_percentage: completionPercentage,
        updated_at: new Date()
      })
      .eq('id', viewingEventId)

    if (error) throw error

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Update viewing event error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
```

### POST /api/complete-viewing-event

**Purpose:** Mark video as completed (≥80% watched).

**Request:**
```json
{
  "viewingEventId": "uuid"
}
```

**Response:**
```json
{
  "success": true
}
```

**Implementation Logic:**
```typescript
export async function POST(request: Request) {
  try {
    const { viewingEventId } = await request.json()

    // Mark viewing_event as completed
    const { error } = await supabase
      .from('viewing_events')
      .update({
        completed: true,
        completed_at: new Date(),
        updated_at: new Date()
      })
      .eq('id', viewingEventId)

    if (error) throw error

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Complete viewing event error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
```

## 6.3 Frontend Components

### Component: CombinedRegistrationForm.tsx

```typescript
'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registrationSchema } from '@/lib/validation'

interface CombinedRegistrationFormProps {
  sessionId: string
  onSuccess: (viewingEventId: string) => void
  onCancel: () => void
}

export default function CombinedRegistrationForm({
  sessionId,
  onSuccess,
  onCancel
}: CombinedRegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [boards, setBoards] = useState([])
  const [schools, setSchools] = useState([])

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: getPreFillData() // Load from cookie if exists
  })

  // Watch board selection to load schools
  const selectedBoard = watch('boardId')

  useEffect(() => {
    if (selectedBoard) {
      loadSchools(selectedBoard)
    }
  }, [selectedBoard])

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/submit-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, sessionId })
      })

      const result = await response.json()

      if (result.success) {
        onSuccess(result.viewingEventId)
      } else {
        // Show error
      }
    } catch (error) {
      // Handle error
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onCancel} aria-label="Close">X</button>

        <h2>Who's Watching With You?</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <section>
            <h3>Profile Information</h3>

            <div>
              <label htmlFor="name">Name *</label>
              <input id="name" type="text" {...register('name')} />
              {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div>
              <label htmlFor="email">Email *</label>
              <input id="email" type="email" {...register('email')} />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
              <label htmlFor="boardId">School Board *</label>
              <select id="boardId" {...register('boardId')}>
                <option value="">Select board...</option>
                {boards.map(board => (
                  <option key={board.id} value={board.id}>{board.name}</option>
                ))}
              </select>
              {errors.boardId && <span>{errors.boardId.message}</span>}
            </div>

            <div>
              <label htmlFor="schoolId">School *</label>
              <select id="schoolId" {...register('schoolId')} disabled={!selectedBoard}>
                <option value="">Select school...</option>
                {schools.map(school => (
                  <option key={school.id} value={school.id}>{school.name}</option>
                ))}
              </select>
              {errors.schoolId && <span>{errors.schoolId.message}</span>}
            </div>

            <div>
              <label htmlFor="role">Role *</label>
              <select id="role" {...register('role')}>
                <option value="">Select role...</option>
                <option value="Teacher">Teacher</option>
                <option value="Guidance Counselor">Guidance Counselor</option>
                <option value="Administrator">Administrator</option>
                <option value="Other">Other</option>
              </select>
              {errors.role && <span>{errors.role.message}</span>}
            </div>
          </section>

          <section>
            <h3>Class Context</h3>

            <div>
              <label>Class Size *</label>
              <div>
                <label>
                  <input type="radio" value="less-than-25" {...register('classSize')} />
                  Less than 25
                </label>
                <label>
                  <input type="radio" value="25-to-35" {...register('classSize')} />
                  25 to 35
                </label>
                <label>
                  <input type="radio" value="large-group" {...register('classSize')} />
                  Large group
                </label>
              </div>
              {errors.classSize && <span>{errors.classSize.message}</span>}
            </div>

            <div>
              <label>Grade Level *</label>
              <div>
                <label>
                  <input type="radio" value="9-10" {...register('gradeLevel')} />
                  Grade 9-10
                </label>
                <label>
                  <input type="radio" value="11-12" {...register('gradeLevel')} />
                  Grade 11-12
                </label>
                <label>
                  <input type="radio" value="Mixed" {...register('gradeLevel')} />
                  Mixed grades
                </label>
              </div>
              {errors.gradeLevel && <span>{errors.gradeLevel.message}</span>}
            </div>
          </section>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Starting...' : 'Start Video'}
          </button>

          <p>* Required fields</p>
        </form>
      </div>
    </div>
  )
}
```

---

# 7. SUCCESS METRICS

## 7.1 Primary Metrics

### Form Completion Rate
**Definition:** % of users who see the form and successfully submit it
**Target:** ≥95%
**Measurement:** `(successful_submissions / form_modal_opens) × 100`

**Why 95%?**
- Users clicking "Watch with Your Class" are highly committed
- Form appears at maximum intent moment
- 95% completion validates low friction design

**Failure Threshold:** <85% indicates form complexity issues

### Browse-to-Watch Conversion
**Definition:** % of visitors who browse sessions and click "Watch with Your Class"
**Target:** ≥60%
**Measurement:** `(users_who_click_watch / total_visitors) × 100`

**Why 60%?**
- Industry benchmark: Traditional platforms ~20-30%
- Browse-first approach should double conversion
- 60% validates value-first strategy

**Failure Threshold:** <40% indicates content/UX issues

### Time-to-First-Video
**Definition:** Average seconds from homepage landing to video playback start
**Target:** <30 seconds
**Measurement:** `timestamp(video_start) - timestamp(page_load)`

**Why <30 seconds?**
- Traditional platforms: 90+ seconds (registration + browse)
- Our browse-first + quick form: <30 seconds possible
- Validates speed advantage

**Failure Threshold:** >45 seconds indicates friction

### Returning User Pre-fill Success Rate
**Definition:** % of returning users (with cookie) who start video within 5 seconds
**Target:** ≥80%
**Measurement:** `(users_with_cookie_who_start_in_5s / total_returning_users) × 100`

**Why 80%?**
- Pre-fill should enable 1-second click-to-watch
- 80% accounts for users who edit values
- Validates cookie-based UX enhancement

**Failure Threshold:** <60% indicates pre-fill issues

## 7.2 Secondary Metrics

### Repeat Viewing Rate
**Definition:** % of educators who watch 2+ sessions
**Target:** ≥50%
**Measurement:** `(users_with_2+_viewing_events / total_users_with_1+_events) × 100`

**Why it matters:** Cookie pre-fill should encourage repeat engagement

### Average Form Completion Time
**Definition:** Average seconds to fill and submit form (first-time users)
**Target:** 15-25 seconds
**Measurement:** `timestamp(submit) - timestamp(modal_open)`

**Why it matters:** Validates "20 seconds" estimate in PRD

### Field-Level Abandonment
**Definition:** Which fields cause users to abandon form
**Target:** <2% abandonment per field
**Measurement:** Track which field was last touched before close/cancel

**Why it matters:** Identifies problematic fields for iteration

---

# 8. DEPENDENCIES & RISKS

## 8.1 Technical Dependencies

### Critical Path Dependencies

| Dependency | Status | Risk Level | Mitigation |
|------------|--------|------------|------------|
| **Supabase Database Setup** | Not Started | High | Complete schema creation and seeding before frontend work |
| **Boards/Schools Reference Data** | Not Started | High | Seed with Ontario boards/schools (CSV import) |
| **Vimeo Video URLs** | Partial | Medium | Obtain all video IDs from Vimeo account |
| **Next.js API Routes** | Not Started | High | Core to form submission - prioritize early |
| **Cookie Management Library** | Available | Low | Use js-cookie (already in package.json) |
| **Form Validation (Zod)** | Available | Low | Use existing Zod dependency |

### External Service Dependencies

| Service | Purpose | Risk | Backup Plan |
|---------|---------|------|-------------|
| **Supabase** | Database hosting | Service outage during event | Local PostgreSQL fallback |
| **Vimeo** | Video hosting/streaming | Service outage | No realistic backup (critical dependency) |
| **Vercel** | Application hosting | Deployment issues | Cloudflare Pages alternative |

## 8.2 Risks & Mitigation Strategies

### Risk 1: Low Form Completion Rate (<85%)

**Likelihood:** Medium
**Impact:** High (blocks student reach measurement)

**Warning Signs:**
- Form abandonment rate >10% during testing
- Test users comment "form is too long"
- Time-on-form >40 seconds

**Mitigation:**
- A/B test: 6-field form vs. 4-field form (remove board/school initially)
- Progressive disclosure: Show profile first, then context
- Add "Why we ask" tooltips for each field
- Simplify school selection (autocomplete instead of dependent dropdowns)

### Risk 2: Cookie Blocking (Browser Privacy Settings)

**Likelihood:** Medium
**Impact:** Medium (returning users lose pre-fill benefit)

**Warning Signs:**
- <60% of returning users show cookie present
- Support inquiries: "Why do I have to fill form again?"

**Mitigation:**
- Detect cookie support on page load
- Show banner: "Enable cookies for easier repeat access"
- Graceful degradation: Form still works without cookie
- Consider localStorage fallback (same domain only)

### Risk 3: School/Board Dropdown Data Quality

**Likelihood:** Medium
**Impact:** Medium (form friction if schools missing)

**Warning Signs:**
- Users selecting "Other" frequently
- Support emails: "My school isn't listed"

**Mitigation:**
- Comprehensive seed data (all Ontario boards + major schools)
- "Can't find your school?" → Manual text input fallback
- Admin dashboard to add missing schools quickly
- Post-launch: Allow educators to suggest additions

### Risk 4: API Performance During Peak Traffic

**Likelihood:** Low
**Impact:** High (form submissions fail during event peak)

**Warning Signs:**
- API response time >1 second
- 500 errors in logs
- Concurrent submissions >100/second

**Mitigation:**
- Load testing before launch (simulate 500 concurrent users)
- Supabase connection pooling (increase pool size)
- Rate limiting per IP (prevent abuse)
- Queue system for form submissions (async processing)
- Monitoring + auto-scaling alerts

---

# 9. IMPLEMENTATION ROADMAP

## 9.1 Development Phases

### Phase 1: Foundation (Week 1-2)
**Goal:** Database, reference data, API routes

**Tasks:**
- [ ] Create Supabase project and configure environment variables
- [ ] Run database migrations (users, viewing_events, boards, schools)
- [ ] Seed boards table (70 Ontario school boards)
- [ ] Seed schools table (major schools per board)
- [ ] Implement POST /api/submit-registration (full logic)
- [ ] Implement POST /api/update-viewing-event
- [ ] Implement POST /api/complete-viewing-event
- [ ] Unit tests for API routes (form validation, error handling)

**Success Criteria:**
- ✅ All API routes return 200 for valid requests
- ✅ Database queries complete in <200ms
- ✅ Form validation rejects invalid inputs

### Phase 2: Form Component (Week 3-4)
**Goal:** Combined registration form modal with validation

**Tasks:**
- [ ] Create CombinedRegistrationForm component (React Hook Form + Zod)
- [ ] Implement all 6 form fields with real-time validation
- [ ] Create board/school dependent dropdown logic
- [ ] Design and style modal (mobile-responsive)
- [ ] Implement cookie reading for pre-fill
- [ ] Add loading states and error handling
- [ ] Accessibility testing (keyboard nav, screen readers)
- [ ] Component tests (form validation, submission flow)

**Success Criteria:**
- ✅ Form validates all fields before submission
- ✅ Modal opens/closes smoothly (200ms animation)
- ✅ Pre-fill works with test cookie data
- ✅ Passes WCAG 2.1 AA accessibility checks

### Phase 3: Button & Video Integration (Week 5)
**Goal:** "Watch with Your Class" button triggers form, video starts after submission

**Tasks:**
- [ ] Add "Watch with Your Class" button to session detail pages
- [ ] Implement modal open/close logic (button click, ESC, outside click)
- [ ] Create video player component (Vimeo SDK integration)
- [ ] Implement video start after successful form submission
- [ ] Add video progress tracking (every 5 seconds → update-viewing-event API)
- [ ] Add completion detection (≥80% → complete-viewing-event API)
- [ ] Integration tests (full flow: button → form → video)

**Success Criteria:**
- ✅ Button click opens modal within 100ms
- ✅ Form submission → video start in <1 second
- ✅ Video tracking calls API every 5 seconds
- ✅ Completion marked when 80% watched

### Phase 4: Cookie Management (Week 6)
**Goal:** Cookie set/read for returning user pre-fill

**Tasks:**
- [ ] Implement cookie creation on form submission (js-cookie)
- [ ] Implement cookie reading on modal open
- [ ] Implement cookie update on repeat submissions
- [ ] Add cookie expiration logic (7 days)
- [ ] Add "Welcome back" message for returning users
- [ ] Test cookie behavior across browsers (Chrome, Firefox, Safari)
- [ ] Test cookie security (SameSite, Secure flags)

**Success Criteria:**
- ✅ Cookie set after first form submission
- ✅ Cookie read and form pre-filled on return
- ✅ Cookie expires after 7 days
- ✅ Works in all major browsers

### Phase 5: Testing & Refinement (Week 7)
**Goal:** End-to-end testing, performance optimization, bug fixes

**Tasks:**
- [ ] End-to-end tests (Playwright: full user journeys)
- [ ] Load testing (simulate 500 concurrent users)
- [ ] Performance optimization (reduce bundle size, lazy loading)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS Safari, Android Chrome)
- [ ] Accessibility audit (WCAG 2.1 AA compliance)
- [ ] Fix bugs identified in testing
- [ ] User acceptance testing (5-10 educators)

**Success Criteria:**
- ✅ All E2E tests passing
- ✅ API handles 100 concurrent requests without errors
- ✅ Form completion rate ≥95% in UAT
- ✅ Time-to-first-video <30 seconds in UAT

### Phase 6: Deployment & Monitoring (Week 8)
**Goal:** Production deployment with monitoring

**Tasks:**
- [ ] Deploy to Vercel production environment
- [ ] Configure production environment variables
- [ ] Set up error monitoring (Sentry)
- [ ] Set up analytics tracking (GA4 events)
- [ ] Create monitoring dashboard (form completion, API errors)
- [ ] Prepare rollback plan (previous deployment)
- [ ] Smoke testing on production (real Ontario educators)
- [ ] Document known issues and workarounds

**Success Criteria:**
- ✅ Application deployed to production URL
- ✅ Monitoring dashboard shows real-time metrics
- ✅ Error tracking captures and alerts on issues
- ✅ Rollback plan tested and documented

## 9.2 Timeline Summary

**Total Duration:** 8 weeks (assumes 1 full-time developer)

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| Phase 1: Foundation | 2 weeks | API routes + database |
| Phase 2: Form Component | 2 weeks | Registration form modal |
| Phase 3: Button & Video | 1 week | Full integration |
| Phase 4: Cookie Management | 1 week | Pre-fill system |
| Phase 5: Testing & Refinement | 1 week | QA + optimization |
| Phase 6: Deployment | 1 week | Production launch |

**Critical Path:** Phases 1-3 must be sequential. Phase 4 (cookies) can overlap with Phase 3 (video).

## 9.3 Launch Checklist

**Pre-Launch Requirements (Must Complete):**
- [ ] All 6 form fields functional and validated
- [ ] API routes handling 100+ concurrent requests
- [ ] Cookie pre-fill working in all major browsers
- [ ] Video tracking accurate (5-second intervals)
- [ ] Completion detection at 80% threshold
- [ ] Mobile-responsive design (tested on iOS/Android)
- [ ] WCAG 2.1 AA accessibility compliance
- [ ] Error monitoring and alerting configured
- [ ] Boards/schools reference data complete
- [ ] User acceptance testing with 5+ educators

**Post-Launch Monitoring (First 48 Hours):**
- [ ] Form completion rate ≥90% (target: 95%)
- [ ] API error rate <1%
- [ ] Average form completion time 15-25 seconds
- [ ] Cookie pre-fill success rate ≥75% (target: 80%)
- [ ] Zero critical bugs reported
- [ ] No service outages or downtime

---

# 10. APPENDIX

## 10.1 Form Field Specifications

### Field: Name
- **Type:** Text input
- **Label:** "Name *"
- **Placeholder:** "Enter your full name"
- **Validation:** Required, min 2 chars, max 100 chars, letters/spaces only
- **Error Messages:**
  - Empty: "Please enter your name"
  - Too short: "Name must be at least 2 characters"
  - Invalid chars: "Name can only contain letters and spaces"

### Field: Email
- **Type:** Email input
- **Label:** "Email *"
- **Placeholder:** "your.name@schoolboard.ca"
- **Validation:** Required, valid email format, max 100 chars
- **Error Messages:**
  - Empty: "Please enter your email address"
  - Invalid: "Please enter a valid email address (e.g., name@school.ca)"

### Field: School Board
- **Type:** Dropdown (select)
- **Label:** "School Board *"
- **Options:** Dynamic (loaded from boards table, sorted alphabetically)
- **Default:** "Select your school board..."
- **Validation:** Required, must select from list
- **Error Messages:**
  - Not selected: "Please select your school board"

### Field: School
- **Type:** Dependent dropdown (select)
- **Label:** "School *"
- **Options:** Dynamic (loaded from schools table WHERE board_id = selected board, sorted alphabetically)
- **Default:** "Select your school..."
- **Validation:** Required, depends on board selection, must select from list
- **Behavior:** Disabled until board selected, resets when board changes
- **Error Messages:**
  - Not selected: "Please select your school"
  - Board not selected: "Please select a school board first"

### Field: Role
- **Type:** Dropdown (select)
- **Label:** "Role *"
- **Options:**
  - "Teacher"
  - "Guidance Counselor"
  - "Administrator"
  - "Other"
- **Default:** "Select your role..."
- **Validation:** Required, must select from list
- **Error Messages:**
  - Not selected: "Please select your role"

### Field: Class Size
- **Type:** Radio button group
- **Label:** "Class Size *"
- **Options:**
  - "Less than 25 students" (value: "less-than-25")
  - "25 to 35 students" (value: "25-to-35")
  - "Large group (35+)" (value: "large-group")
- **Validation:** Required, must select one
- **Error Messages:**
  - Not selected: "Please indicate your class size"

### Field: Grade Level
- **Type:** Radio button group
- **Label:** "Grade Level *"
- **Options:**
  - "Grade 9-10" (value: "9-10")
  - "Grade 11-12" (value: "11-12")
  - "Mixed grades" (value: "Mixed")
- **Validation:** Required, must select one
- **Error Messages:**
  - Not selected: "Please indicate the grade level"

## 10.2 Student Reach Calculation

### Conversion Logic

The platform uses `class_size` values to estimate total student reach for reporting.

| `class_size` Value | Estimated Students | Rationale |
|--------------------|-------------------|-----------|
| `"less-than-25"` | 20 | Conservative mid-point estimate |
| `"25-to-35"` | 30 | Mid-point of range |
| `"large-group"` | User-provided exact count | For assemblies, multiple classes combined |

### Example Calculations

**Scenario 1: Single Teacher, Multiple Classes**
- Teacher A shows Session X to Class Period 2 (30 students, Grade 11-12)
- Teacher A shows Session X to Class Period 4 (28 students, Grade 9-10)
- **Total for Session X from Teacher A:** 58 students

**Scenario 2: Multiple Teachers, Same Session**
- Teacher A shows Session Y to 30 students
- Teacher B shows Session Y to 22 students
- Teacher C shows Session Y to 35 students
- **Total for Session Y:** 87 students

**Scenario 3: Total Platform Reach**
```sql
SELECT
  SUM(
    CASE
      WHEN class_size = 'less-than-25' THEN 20
      WHEN class_size = '25-to-35' THEN 30
      WHEN class_size = 'large-group' THEN large_group_count
    END
  ) AS total_student_reach
FROM viewing_events;
```

### Reporting Views

**Board-Level Reach:**
```sql
SELECT
  b.name AS board_name,
  COUNT(DISTINCT u.id) AS educators,
  COUNT(ve.id) AS viewing_events,
  SUM(
    CASE
      WHEN ve.class_size = 'less-than-25' THEN 20
      WHEN ve.class_size = '25-to-35' THEN 30
      WHEN ve.class_size = 'large-group' THEN ve.large_group_count
    END
  ) AS total_students_reached
FROM boards b
JOIN schools s ON s.board_id = b.id
JOIN users u ON u.school_id = s.id
JOIN viewing_events ve ON ve.user_id = u.id
GROUP BY b.id, b.name
ORDER BY total_students_reached DESC;
```

**Session-Level Reach:**
```sql
SELECT
  sess.title AS session_title,
  COUNT(DISTINCT ve.user_id) AS unique_educators,
  COUNT(ve.id) AS total_viewings,
  SUM(
    CASE
      WHEN ve.class_size = 'less-than-25' THEN 20
      WHEN ve.class_size = '25-to-35' THEN 30
      WHEN ve.class_size = 'large-group' THEN ve.large_group_count
    END
  ) AS total_students_reached,
  ROUND(AVG(ve.completion_percentage), 1) AS avg_completion_pct,
  ROUND(100.0 * SUM(CASE WHEN ve.completed THEN 1 ELSE 0 END) / COUNT(ve.id), 1) AS completion_rate
FROM sessions sess
JOIN viewing_events ve ON ve.session_id = sess.id
GROUP BY sess.id, sess.title
ORDER BY total_students_reached DESC;
```

---

**END OF DOCUMENT**
