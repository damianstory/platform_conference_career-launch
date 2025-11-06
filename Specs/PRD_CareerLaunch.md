# Career Launch Platform - Complete Product Requirements Document

**Version:** 2.0 (Browse-First)  
**Date:** October 28, 2025  
**Event Launch:** December 1-5, 2025  
**Status:** Ready for Development

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Vision & Value Proposition](#2-product-vision--value-proposition)
3. [User Flows & Core Functionality](#3-user-flows--core-functionality)
4. [Technical Architecture](#4-technical-architecture)
5. [Feature Specifications](#5-feature-specifications)
6. [Success Metrics & KPIs](#6-success-metrics--kpis)
7. [Development Timeline](#7-development-timeline)
8. [Risk Assessment & Mitigation](#8-risk-assessment--mitigation)

---

# 1. EXECUTIVE SUMMARY

## 1.1 Product Overview

**Career Launch Platform** is a video platform designed for Ontario high school educators to easily show career education content to their students while accurately measuring student reach for reporting and sponsor engagement. The platform includes both curated video sessions and virtual expo booths where students can explore career resources from sponsor organizations.

### Elevator Pitch
A video platform that makes it easy for teachers to show career videos to their students, explore virtual sponsor booths, and tells presenters exactly how many students watched their session.

### Event Details
- **Name:** Career Launch Week
- **Dates:** December 1-5, 2025
- **Participating Boards:** 20+ Ontario school boards
- **Content:** 25 career sessions organized by industry categories
- **Expo Booths:** Virtual booths from session sponsors and partner organizations
- **Target Audience:** Grades 9-12 educators and students

---

## 1.2 Problem Statement

### For School Boards & Event Organizers
Traditional event platforms can't distinguish between "1 teacher previewing a video" and "1 teacher showing it to 30 students," making it impossible to measure true student impact or justify the cost of career education programming.

### For Educators
Participating in career events means yet another login, another password to remember, and cumbersome registration flows—creating friction that busy teachers simply don't have time for during a packed school week.

### For Sponsors/Presenters
Industry professionals donating their time to create career education content have no way to demonstrate the real-world impact of their contribution, making it hard to justify continued participation or secure organizational buy-in.

---

## 1.3 Solution: Browse-First Video Platform

### The Key Innovation
**Show value BEFORE asking for commitment.**

Instead of forcing registration before browsing, educators can explore all 25 sessions immediately. We only collect information when they're highly committed (clicked "Watch with Your Class" on a specific session).

### Core Flow
```
Homepage → Choose Sessions or Booths → Browse Sessions (Category Accordions) → Click Session → View Session Page → Click Play → Registration Modal → Watch Video
Time to browse: <1 second (vs 60+ seconds with traditional registration)
Time to first video: <30 seconds (vs 90+ seconds with traditional registration)
```

### What Makes This Different

#### 1. Zero-Friction Browsing
- **No registration required to explore content**
- All 25 sessions and expo booths visible immediately
- Browse sessions by industry category using accordion interface
- One-time information collection only when clicking play on a video

#### 2. Honest Impact Measurement
- **Captures actual student reach, not just "views"**
- Combined form collects: class size, grade level, educator profile
- Distinguishes between educator previews and classroom viewing
- Tracks completion rates and engagement patterns

#### 3. Smart Category-Based Organization
- **Industry-focused categories** for easier discovery
- Categories: Healthcare & Medicine, Technology & Engineering, Skilled Trades, Business & Entrepreneurship, Creative Industries, Public Service
- Accordion UI pattern allows focused browsing (expand one category at a time)
- Each session appears in only one category for clarity

#### 4. Built for Real Teaching Contexts
- **Pre-fills previous selections** (1-second for repeat users)
- All recorded content = works with any school's schedule
- No live timing constraints or scheduling conflicts
- Cookie-based memory for returning educators

---

## 1.4 Target Audience

### Primary: Ontario High School Educators
- Teachers, guidance counselors, administrators (Grades 9-12)
- Teaching 4 periods per day across various subjects
- Limited prep time, device-agnostic access needs
- Avoid tools requiring complex setup or login
- Need classroom-ready content with minimal friction

### Secondary: School Board Administrators
- Decision-makers who purchase access for their entire board
- Need participation data to justify investment and renewal
- Want insights on which schools engaged and how
- Require evidence of student reach beyond simple view counts

### Tertiary: Session Sponsors/Presenters
- Industry professionals and organizations providing career content
- Need evidence of impact to justify time and resources invested
- Want concrete metrics for internal reporting
- Seek understanding of audience demographics and engagement

---

## 1.5 Success Metrics at a Glance

**North Star Metric:** Total Student Reach = Sum of all class sizes across all viewing sessions

**Launch Targets (Dec 1-5):**
- 50% of visitors watch ≥1 video
- 3 average sessions per active educator
- 70% session completion rate (watch ≥80%)
- 95% form completion rate
- 40,000+ total student reach

---

# 2. PRODUCT VISION & VALUE PROPOSITION

## 2.1 Unique Selling Propositions

### Browse-First Access
**No registration barrier prevents educators from seeing value**

- Explore all 25 sessions and expo booths instantly
- Browse sessions organized by industry category
- Read full session descriptions and details without any barriers
- Only register when clicking play on a video (maximum commitment point)
- Access to virtual expo booths for additional career resources

**Why this matters:** Traditional platforms force registration upfront, causing 40-60% drop-off before educators even see the content. We show value first, collect information at peak commitment (the moment they click play).

### Honest Impact Measurement
**Transform raw view counts into meaningful student reach data**

- Capture actual class size (not just "1 view")
- Track grade level distribution
- Measure completion rates
- Distinguish educator previews from classroom viewing

**Why this matters:** Sponsors need proof of impact. Boards need ROI justification. "12,500 students reached across 8 schools" is infinitely more valuable than "437 video views."

### Smart Content Organization
**Category-based structure enables intuitive discovery**

Sessions are organized by industry categories (Healthcare & Medicine, Technology & Engineering, Skilled Trades, Business & Entrepreneurship, Creative Industries, Public Service) making it easy for educators to find content aligned with student interests and curriculum connections.

Accordion UI pattern allows educators to focus on one category at a time, reducing cognitive load and improving the browsing experience.

**Why this matters:** Industry-based organization aligns with how students think about careers and makes discovery more intuitive than arbitrary time blocks.

### Returning User Magic
**Cookie-based pre-fill makes repeat watching effortless**

First watch: Fill 6-field form once (~20 seconds)  
Subsequent watches: Click "Start Video" immediately (~1 second)

**Why this matters:** Educators who have positive first experience will show multiple sessions. Low friction = higher engagement = more student reach.

---

## 2.2 What Success Looks Like

### For Educators
> "I browsed all the sessions during my prep period, found three perfect for my classes. When I showed the first one, I filled out a quick form. The next two sessions? One click and we were watching. Easiest professional development integration I've ever done."

### For School Boards
> "We reached 2,100 students across 15 schools with 78% educator participation. Teachers loved how easy it was—let's expand to more schools next year and renew for Career Launch 2026."

### For Sponsors
> "My session reached 1,800 students across Ontario with an 85% completion rate. I showed my CEO the data and secured budget for next year's sessions. This is exactly the impact measurement we needed."

---

## 2.3 Competitive Positioning

### vs. YouTube/Open Access
**We provide:** Structured pathways, engagement tracking, professional presentation  
**They lack:** Any measurement, organized discovery, ROI justification

### vs. Traditional Event Platforms
**We provide:** No registration barriers, actual student reach measurement  
**They force:** Complex registration, only track "views" not impact

### vs. Live Webinars
**We provide:** Flexible timing, no scheduling conflicts, always accessible  
**They require:** Fixed schedules, technical coordination, limited replay options

### vs. Static Resource Sites
**We provide:** Engagement tracking, structured discovery, actionable reporting  
**They lack:** Any analytics, organized browsing, measurable outcomes

---

# 3. USER FLOWS & CORE FUNCTIONALITY

## 3.1 Primary User Flow: First-Time Educator

```
┌─────────────────────────────────────────────────────────┐
│ STEP 1: LANDING & CHOOSING PATH                         │
│                                                          │
│ User visits homepage                                     │
│ ↓                                                        │
│ Sees two main options:                                  │
│ - Browse Sessions (video content)                       │
│ - Explore Booths (sponsor resources)                    │
│ - No login prompt                                        │
│ - No registration form                                   │
│                                                          │
│ User clicks "Browse Sessions"                           │
│ Time: <1 second to full content access                  │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ STEP 2: BROWSING SESSIONS BY CATEGORY                   │
│                                                          │
│ User sees category-based accordion interface            │
│ ↓                                                        │
│ Categories visible (collapsed by default):              │
│ - Healthcare & Medicine                                 │
│ - Technology & Engineering                              │
│ - Skilled Trades                                        │
│ - Business & Entrepreneurship                           │
│ - Creative Industries                                   │
│ - Public Service                                        │
│ ↓                                                        │
│ User clicks category → Accordion expands                │
│ Shows session cards in that category                    │
│ Clicks interesting session card                         │
│                                                          │
│ Time: 1-3 minutes browsing (self-paced)                 │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ STEP 3: SESSION DETAIL PAGE                             │
│                                                          │
│ Views session detail page:                              │
│ - Mini hero navigation bar visible (myB Logo | Sessions)│
│ - Full session description                              │
│ - Learning objectives                                   │
│ - Presenter bio                                         │
│ - Video player with play button overlay                │
│ - Links to related sponsor booths (if applicable)      │
│                                                          │
│ Time: 1-2 minutes reading (self-paced)                  │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ STEP 4: COMMITMENT POINT (PLAY BUTTON)                  │
│                                                          │
│ User decides: "I want to show this to my class"         │
│ ↓                                                        │
│ Clicks PLAY button on video                             │
│ ↓                                                        │
│ Modal appears: "Who's Watching With You?"               │
│ Combined registration form (This is the ONLY form)      │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ STEP 5: ONE-TIME REGISTRATION                           │
│                                                          │
│ Modal: "Who's Watching With You?"                       │
│ Combined Form (6 fields in ONE submission):             │
│                                                          │
│ PROFILE SECTION:                                         │
│ 1. Name (text input)                                    │
│ 2. Email (text input)                                   │
│ 3. School (dropdown - auto-populated by board)          │
│ 4. Role (radio: Guidance / Teacher / Admin / Other)     │
│                                                          │
│ VIEWING CONTEXT SECTION:                                │
│ 5. Class Size (radio: <25 / 25-35 / Large group)        │
│    [If Large: number input for exact count]             │
│ 6. Grade Level (radio: 9-10 / 11-12 / Mixed)            │
│                                                          │
│ All fields required. "Start Video" button enabled       │
│ only when form is complete.                             │
│                                                          │
│ Time: ~20 seconds to complete (first time)              │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ STEP 6: IMMEDIATE VIDEO PLAYBACK                        │
│                                                          │
│ User clicks "Start Video"                               │
│ ↓                                                        │
│ System:                                                  │
│ - Validates all 6 fields                                │
│ - Creates User record in database                       │
│ - Creates ViewingEvent record                           │
│ - Sets 7-day cookie with user data                      │
│ ↓                                                        │
│ Video starts playing IMMEDIATELY                        │
│ - No "thank you" page                                   │
│ - No loading screens                                    │
│ - Seamless transition from form to video                │
│                                                          │
│ Time: <1 second from submit to playback                 │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ STEP 7: ENGAGEMENT TRACKING                             │
│                                                          │
│ While video plays:                                       │
│ - Track watch duration (updated every 5 seconds)        │
│ - Monitor completion percentage                         │
│ - Mark as "completed" if user watches ≥80%              │
│ - Log device type and browser                           │
│                                                          │
│ Data captured:                                           │
│ - Educator: name, email, school, role                   │
│ - Context: class size, grade level, estimated students  │
│ - Engagement: duration, completion, timestamp           │
└─────────────────────────────────────────────────────────┘
```

**Total time from landing to watching first video: ~2-6 minutes**
(Browse categories 1-3 min + Read session details 1-2 min + Form 20 sec + Video start <1 sec)

---

## 3.2 Returning User Flow: The Magic of Pre-fill

```
┌─────────────────────────────────────────────────────────┐
│ RETURNING USER LANDS ON SITE                            │
│                                                          │
│ Cookie detected: email + last submission values         │
│ ↓                                                        │
│ User browses sessions by category (accordion interface) │
│ (No difference in experience - still public)            │
│ ↓                                                        │
│ Clicks on different session → Views detail page         │
│ ↓                                                        │
│ Clicks PLAY button on video                             │
│ ↓                                                        │
│ "Who's Watching With You?" modal appears                │
│ Form shows ALL 6 FIELDS PRE-FILLED:                     │
│ ✓ Name: Jane Smith                                      │
│ ✓ Email: jane.smith@torontodsb.ca                       │
│ ✓ School: Central High School                           │
│ ✓ Role: Teacher (selected)                              │
│ ✓ Class Size: 25 to 35 (selected)                       │
│ ✓ Grade Level: 11-12 (selected)                         │
│                                                          │
│ "Start Video" button is ALREADY ENABLED                 │
│ ↓                                                        │
│ User can:                                                │
│ - Click "Start Video" immediately (if info unchanged)   │
│ - OR change any field before starting                   │
│                                                          │
│ Time: ~1 second if no changes needed                    │
└─────────────────────────────────────────────────────────┘
```

**Result:** Educator who shows 5 sessions during the week:
- First session: 20 seconds to fill form
- Sessions 2-5: 1 second each (just click Start Video)
- Total friction: ~24 seconds across entire event week

**vs Old Registration Flow:**
- Email entry: 10 seconds
- Profile setup: 30 seconds
- Context form: 15 seconds × 5 sessions = 75 seconds
- Total friction: 115 seconds (nearly 5x more)

---

## 3.3 Decision Tree: What Happens When

```
                    USER LANDS ON SITE
                           │
                           ↓
                   Check for cookie?
                           │
        ┌──────────────────┴──────────────────┐
        │                                     │
    NO COOKIE                            HAS COOKIE
        │                                     │
        ↓                                     ↓
Browse schedule              Browse schedule (same experience)
(public, no barrier)         (public, no barrier)
        │                                     │
        └──────────────────┬──────────────────┘
                           │
                           ↓
              Clicks "Watch with Your Class"
                           │
                           ↓
                 Combined form appears
                           │
        ┌──────────────────┴──────────────────┐
        │                                     │
    NO COOKIE                            HAS COOKIE
        │                                     │
        ↓                                     ↓
    Empty form                         All fields pre-filled
    (new user)                         (returning user)
        │                                     │
        └──────────────────┬──────────────────┘
                           │
                           ↓
              User fills/reviews form
                           │
                           ↓
                  All 6 fields valid?
                           │
        ┌──────────────────┴──────────────────┐
        │                                     │
       NO                                    YES
        │                                     │
        ↓                                     ↓
"Start Video" disabled          "Start Video" enabled
Show inline errors              User clicks button
        │                                     │
        └──────────────────┐                 │
                           ↓                 ↓
                      User corrects    Form submitted
                      errors           │
                           │            ↓
                           └────────→  Database writes:
                                       - User record
                                       - ViewingEvent record
                                       - Set/update cookie
                                       │
                                       ↓
                                    Video plays
```

---

## 3.4 Key User Interactions

### Browsing Sessions by Category
**Trigger:** User lands on sessions page
**Action:** Displays category-based accordion interface
**Result:** User can explore all 25 sessions organized by industry without any barriers

**Interaction Details:**
- Categories displayed as accordion items (collapsed by default)
- Categories: Healthcare & Medicine, Technology & Engineering, Skilled Trades, Business & Entrepreneurship, Creative Industries, Public Service
- Click category header → Accordion expands to show sessions in that category
- Session cards show: thumbnail, title, duration, grade level, presenter
- Click card → Navigate to session detail page

### Viewing Session Details
**Trigger:** User clicks session card
**Action:** Navigate to session detail page with full description
**Result:** User can read all information about session before committing

**Interaction Details:**
- Mini hero navigation bar (myB Logo | Sessions link for easy return)
- Full session description and learning objectives
- Presenter bio and credentials
- Video player with play button overlay
- Links to related sponsor booths (if applicable)
- No registration required to view this page

### Initiating Video Playback
**Trigger:** User clicks PLAY button on video player
**Action:** "Who's Watching With You?" modal appears
**Result:** User provides viewing context, then video plays immediately

**Interaction Details:**
- Modal appears with title "Who's Watching With You?"
- All 6 fields required before submission
- Real-time validation as user types/selects
- Pre-filled if returning user (cookie exists)
- "Start Video" button disabled until form is valid
- Clicking outside modal closes it (video does NOT play)
- Can click PLAY button again to retry

### Video Playback & Tracking
**Trigger:** User submits valid combined form  
**Action:** Video starts playing immediately  
**Result:** Full session video plays with engagement tracking

**Interaction Details:**
- Seamless transition from form to video (<1 second)
- Vimeo player with standard controls
- Background tracking: duration, completion percentage
- 80% threshold marks viewing as "completed"
- Can pause, scrub, rewatch without restrictions

---

# 4. TECHNICAL ARCHITECTURE

## 4.1 Technology Stack

### Frontend
- **Framework:** Next.js 14 (React) or Astro (for static generation)
- **Styling:** Tailwind CSS (rapid development, consistent design)
- **State Management:** React Context API or Zustand (lightweight)
- **Forms:** React Hook Form (validation, error handling)
- **Video Player:** Vimeo Player SDK

**Rationale:** Modern, performant, easy to deploy. Static generation where possible for speed.

### Backend
- **Database:** Supabase (Postgres with real-time capabilities)
- **Authentication:** Custom cookie-based (no auth library needed)
- **API:** Supabase client library (no custom backend required)

**Rationale:** Supabase free tier handles expected load, includes built-in CSV export for reporting, real-time updates if needed.

### Hosting & Infrastructure
- **Frontend:** Vercel or Netlify (automatic deploys, global CDN, fast)
- **Database:** Supabase cloud (North America region)
- **Video:** Vimeo Pro (reliable streaming, analytics included)
- **CDN:** Cloudflare or Vercel Edge (for images and assets)

**Rationale:** Serverless architecture = minimal ops overhead, scales automatically, excellent performance.

### Analytics & Monitoring
- **Web Analytics:** Google Analytics 4 (user flows, page views)
- **Video Analytics:** Vimeo built-in analytics (engagement, drop-off)
- **Error Tracking:** Sentry (optional but recommended)
- **Performance:** Lighthouse CI (automated performance monitoring)

---

## 4.2 Data Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  board_id TEXT NOT NULL,           -- e.g., "toronto-dsb"
  school_id TEXT NOT NULL,           -- e.g., "central-high-123"
  custom_school TEXT,                -- If "My school isn't listed"
  role TEXT NOT NULL CHECK (role IN ('Guidance Counsellor', 'Subject Teacher', 'Administrator', 'Other')),
  subject_area TEXT,                 -- Optional, for future filtering
  last_class_size TEXT,              -- For pre-fill
  last_grade_level TEXT,             -- For pre-fill
  registered_at TIMESTAMPTZ DEFAULT NOW(),
  last_login TIMESTAMPTZ,
  CONSTRAINT valid_email CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$')
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_board ON users(board_id);
CREATE INDEX idx_users_school ON users(school_id);
```

**Key Design Decisions:**
- `email` is unique but not verified (trust model)
- `last_class_size` and `last_grade_level` enable pre-fill
- `board_id` and `school_id` for post-event reporting by board/school
- `custom_school` captures educators from unlisted schools

### Sessions Table
```sql
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,         -- URL-friendly identifier
  title TEXT NOT NULL,
  description TEXT NOT NULL,         -- Full description (3-4 paragraphs)
  presenter_name TEXT NOT NULL,
  presenter_bio TEXT,
  presenter_photo_url TEXT,
  duration INTEGER NOT NULL,         -- Duration in minutes
  category TEXT NOT NULL CHECK (category IN (
    'Healthcare & Medicine',
    'Technology & Engineering',
    'Skilled Trades',
    'Business & Entrepreneurship',
    'Creative Industries',
    'Public Service'
  )),
  grade_level TEXT NOT NULL,         -- "9-10", "11-12", "9-12"
  thumbnail_url TEXT NOT NULL,
  video_url TEXT NOT NULL,           -- Vimeo embed URL (single video)
  learning_objectives JSONB,         -- Array of bullet points
  related_booth_ids JSONB,           -- Array of booth IDs this session links to
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_sessions_category ON sessions(category);
CREATE INDEX idx_sessions_slug ON sessions(slug);
CREATE INDEX idx_sessions_grade ON sessions(grade_level);
```

**Key Design Decisions:**
- `category` enforces industry-based organization (replaces block_number)
- `slug` for clean URLs (/sessions/nursing-career-pathways)
- `learning_objectives` as JSONB for flexibility
- Single `video_url` (trailers removed for simpler flow)
- `related_booth_ids` enables linking sessions to sponsor booths

### ViewingEvents Table
```sql
CREATE TABLE viewing_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  session_id UUID NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
  class_size TEXT NOT NULL,          -- "Less than 25", "25 to 35", "Large group"
  custom_student_count INTEGER,      -- Only if class_size = "Large group"
  grade_level TEXT NOT NULL,         -- "9-10", "11-12", "Mixed"
  estimated_students INTEGER NOT NULL, -- Calculated from class_size
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  watch_duration INTEGER DEFAULT 0,  -- Total seconds watched
  completion_percentage INTEGER DEFAULT 0 CHECK (completion_percentage BETWEEN 0 AND 100),
  completed BOOLEAN DEFAULT FALSE,   -- True if watched >= 80%
  device_type TEXT,                  -- "desktop", "mobile", "tablet"
  browser_type TEXT,                 -- "Chrome", "Firefox", etc.
  user_agent TEXT                    -- Full user agent string
);

CREATE INDEX idx_viewing_events_user ON viewing_events(user_id);
CREATE INDEX idx_viewing_events_session ON viewing_events(session_id);
CREATE INDEX idx_viewing_events_started ON viewing_events(started_at);
CREATE INDEX idx_viewing_events_completed ON viewing_events(completed);
```

**Key Design Decisions:**
- Links both `user_id` and `session_id` for rich querying
- `estimated_students` is the key metric for "student reach"
- `completion_percentage` tracks engagement quality
- `watch_duration` in seconds for precision
- Device/browser tracking for post-event analysis

### Boards Table (Reference Data)
```sql
CREATE TABLE boards (
  id TEXT PRIMARY KEY,               -- "toronto-dsb"
  name TEXT NOT NULL,                -- "Toronto District School Board"
  domain_pattern TEXT NOT NULL,      -- "@torontodsb.ca"
  contact_email TEXT,
  participating BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_boards_domain ON boards(domain_pattern);
```

### Schools Table (Reference Data)
```sql
CREATE TABLE schools (
  id TEXT PRIMARY KEY,               -- "central-high-123"
  name TEXT NOT NULL,                -- "Central High School"
  board_id TEXT NOT NULL REFERENCES boards(id),
  address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_schools_board ON schools(board_id);
CREATE INDEX idx_schools_name ON schools(name);
```

### Booths Table (Expo Hall)
```sql
CREATE TABLE booths (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,          -- URL-friendly identifier
  organization_name TEXT NOT NULL,    -- Sponsor/organization name
  booth_title TEXT NOT NULL,          -- Display title
  description TEXT NOT NULL,          -- Full booth description
  logo_url TEXT NOT NULL,             -- Organization logo
  banner_url TEXT,                    -- Optional banner image
  resources JSONB,                    -- Array of downloadable resources
  contact_info JSONB,                 -- Contact information (email, website, etc.)
  related_category TEXT,              -- Link to session category
  display_order INTEGER DEFAULT 0,    -- For custom ordering
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_booths_category ON booths(related_category);
CREATE INDEX idx_booths_slug ON booths(slug);
```

**Key Design Decisions:**
- `slug` for clean URLs (/booths/hospital-careers-ontario)
- `resources` as JSONB for flexible resource types (PDFs, links, videos)
- `contact_info` as JSONB to handle varying contact methods
- `related_category` links booths to session categories for cross-navigation
- `display_order` allows manual curation of booth presentation order

---

## 4.3 Cookie Structure & Management

### Cookie Schema
```javascript
{
  name: "clp_session",
  value: {
    email: "jane.smith@torontodsb.ca",
    lastSubmission: {
      name: "Jane Smith",
      schoolId: "central-high-123",
      role: "Subject Teacher",
      classSize: "25 to 35",
      customStudentCount: null,
      gradeLevel: "11-12"
    },
    timestamp: "2025-12-01T09:15:00Z"
  },
  expires: 7 days from last update,
  secure: true (production only),
  sameSite: "lax",
  httpOnly: false  // JavaScript needs access for pre-fill
}
```

### Cookie Lifecycle
1. **Creation:** When user first submits combined form
2. **Update:** Every time user submits form (even for same session)
3. **Read:** When combined form modal opens (for pre-fill)
4. **Expiration:** 7 days from last activity (covers event week + buffer)

### Pre-fill Logic
```javascript
function getPreFillData() {
  const cookie = getCookie('clp_session');
  
  if (!cookie) {
    return null;  // New user, show empty form
  }
  
  const age = Date.now() - new Date(cookie.timestamp).getTime();
  const sevenDays = 7 * 24 * 60 * 60 * 1000;
  
  if (age > sevenDays) {
    return null;  // Cookie expired, show empty form
  }
  
  return cookie.lastSubmission;  // Return pre-fill data
}

function renderCombinedForm(sessionId) {
  const preFillData = getPreFillData();
  
  return (
    <CombinedForm
      sessionId={sessionId}
      initialValues={preFillData}  // Will be null or object
      onSubmit={handleFormSubmit}
    />
  );
}
```

### Security Considerations
- **No sensitive data in cookie:** Only user-provided info (name, school, preferences)
- **No authentication token:** Cookie is for UX (pre-fill), not security
- **SameSite protection:** Prevents CSRF attacks
- **Secure flag in production:** HTTPS only
- **Short expiration:** 7 days is reasonable for event context

---

## 4.4 API Endpoints (via Supabase Client)

### Create/Update User
```javascript
// POST to users table
async function upsertUser(userData) {
  const { data, error } = await supabase
    .from('users')
    .upsert({
      email: userData.email,
      name: userData.name,
      board_id: userData.boardId,
      school_id: userData.schoolId,
      role: userData.role,
      last_class_size: userData.classSize,
      last_grade_level: userData.gradeLevel,
      last_login: new Date().toISOString()
    }, {
      onConflict: 'email',  // Update if email exists
      ignoreDuplicates: false
    });
    
  return { data, error };
}
```

### Create ViewingEvent
```javascript
// POST to viewing_events table
async function createViewingEvent(eventData) {
  const estimatedStudents = calculateStudents(
    eventData.classSize,
    eventData.customStudentCount
  );
  
  const { data, error } = await supabase
    .from('viewing_events')
    .insert({
      user_id: eventData.userId,
      session_id: eventData.sessionId,
      class_size: eventData.classSize,
      custom_student_count: eventData.customStudentCount,
      grade_level: eventData.gradeLevel,
      estimated_students: estimatedStudents,
      device_type: getDeviceType(),
      browser_type: getBrowserType(),
      user_agent: navigator.userAgent
    });
    
  return { data, error };
}

function calculateStudents(classSize, customCount) {
  const mapping = {
    "Less than 25": 20,        // Conservative estimate
    "25 to 35": 30,            // Midpoint
    "Large group": customCount // Use exact number
  };
  return mapping[classSize];
}
```

### Update ViewingEvent (Tracking)
```javascript
// PATCH to viewing_events table
async function updateViewingProgress(eventId, progressData) {
  const { data, error } = await supabase
    .from('viewing_events')
    .update({
      watch_duration: progressData.duration,
      completion_percentage: progressData.percentage,
      completed: progressData.percentage >= 80,
      completed_at: progressData.percentage >= 80 
        ? new Date().toISOString() 
        : null
    })
    .eq('id', eventId);
    
  return { data, error };
}
```

### Fetch Sessions (Public)
```javascript
// GET from sessions table
async function fetchSessionsByBlock(blockNumber) {
  const { data, error } = await supabase
    .from('sessions')
    .select('*')
    .eq('block_number', blockNumber)
    .order('title', { ascending: true });
    
  return { data, error };
}

async function fetchAllSessions() {
  const { data, error } = await supabase
    .from('sessions')
    .select('*')
    .order('block_number', { ascending: true });
    
  return { data, error };
}
```

---

## 4.5 Video Player Integration (Vimeo SDK)

### Player Initialization
```javascript
import Player from '@vimeo/player';

function initializePlayer(videoUrl, viewingEventId) {
  const iframe = document.querySelector('iframe');
  const player = new Player(iframe);
  
  // Track play event
  player.on('play', () => {
    trackEvent('video_play', { viewingEventId });
  });
  
  // Track progress every 5 seconds
  player.on('timeupdate', throttle((data) => {
    const percentage = (data.seconds / data.duration) * 100;
    updateViewingProgress(viewingEventId, {
      duration: Math.floor(data.seconds),
      percentage: Math.floor(percentage)
    });
  }, 5000));
  
  // Track completion
  player.on('ended', () => {
    trackEvent('video_complete', { viewingEventId });
    updateViewingProgress(viewingEventId, {
      duration: data.duration,
      percentage: 100
    });
  });
  
  return player;
}
```

### Completion Tracking Logic
```javascript
function shouldMarkComplete(percentage) {
  return percentage >= 80;  // 80% threshold
}

async function checkAndMarkComplete(viewingEventId, currentPercentage) {
  if (shouldMarkComplete(currentPercentage)) {
    await supabase
      .from('viewing_events')
      .update({
        completed: true,
        completed_at: new Date().toISOString()
      })
      .eq('id', viewingEventId)
      .eq('completed', false);  // Only update if not already marked
  }
}
```

---

# 5. FEATURE SPECIFICATIONS

## 5.1 Feature 1: Public Schedule Landing Page

### User Story
**As a visitor**, I want to browse all career sessions immediately without any registration, so that I can explore content and decide what's relevant for my students before committing any time or information.

### Priority
**P0 - Must Have** (This is the landing page - the entire platform starts here)

### Acceptance Criteria

#### Happy Path
- **Given** I visit the homepage URL
- **When** the page loads
- **Then** I see the 4-block schedule with all 25 sessions displayed
- **And** I see no login prompt, no registration form, no barriers
- **And** I can browse, scroll, and click without providing any information

#### Session Card Display
- **Given** I am viewing the schedule page
- **When** I look at a session card
- **Then** I see:
  - Thumbnail image (high quality, optimized for web)
  - Session title
  - Presenter name
  - Duration in minutes
  - Grade level tags (9-10, 11-12, or 9-12)
  - Industry category (Healthcare, Tech, Trades, etc.)
- **And** the card is clickable
- **And** optional: star icon for favorites (if P1 feature built)

#### Block Organization
- **Given** I am viewing the schedule
- **When** I scroll down
- **Then** I see 4 distinct blocks clearly labeled:
  - "Block 1 - Choose any session from this block"
  - "Block 2 - Choose any session from this block"
  - "Block 3 - Choose any session from this block"
  - "Block 4 - Choose any session from this block"
- **And** each block contains 5-7 sessions
- **And** no session appears in multiple blocks
- **And** blocks are visually separated (whitespace, dividers, or distinct backgrounds)

#### Mobile Responsiveness
- **Given** I am viewing on a mobile device (320px-767px width)
- **When** I scroll through the schedule
- **Then** blocks stack vertically
- **And** session cards are 1-2 per row (depending on device width)
- **And** all text remains readable without horizontal scrolling
- **And** images scale appropriately
- **And** touch targets are ≥44x44px

#### Performance
- **Given** I visit the homepage on a 3G connection
- **When** the page loads
- **Then** First Contentful Paint occurs in <1.5 seconds
- **And** all session cards are visible in <2 seconds
- **And** images lazy-load as I scroll (not all 25 at once)
- **And** the page is interactive before all images finish loading

### Edge Cases

#### Empty Favorites
- **Given** I have not favorited any sessions (or favorites feature not built)
- **When** I view the schedule
- **Then** no "My Favorites" section appears
- **And** I see all 4 blocks normally

#### Large Screen (>1920px)
- **Given** I am viewing on a large desktop monitor
- **When** the page renders
- **Then** session cards do not stretch excessively
- **And** maximum container width is enforced (e.g., 1400px)
- **And** content remains centered and readable

#### Slow Image Loading
- **Given** some session thumbnails are slow to load
- **When** the page renders
- **Then** I see skeleton loaders or placeholder images
- **And** the page layout does not shift when images load (reserved space)
- **And** other content is still interactive while images load

#### Browser Back Button
- **Given** I am on the schedule page (which is the homepage)
- **When** I click browser back
- **Then** I navigate to my previous site (before arriving at Career Launch)
- **Or** nothing happens if I arrived directly at the URL

### Technical Constraints
- Must work on all major browsers (Chrome, Firefox, Safari, Edge)
- Must work on iOS Safari and Android Chrome
- Must handle 25 session thumbnails efficiently (lazy loading)
- Must maintain performance on low-end devices (3-year-old smartphones)
- Must support keyboard navigation (Tab through session cards)
- Must meet WCAG 2.1 AA accessibility standards

### UX Considerations

**Visual Hierarchy:**
- Event branding and dates prominent at top
- Clear block headers (larger font, bold, distinct color)
- Session cards have consistent sizing within blocks
- Thumbnail images high quality but not overwhelming file size

**Layout:**
```
┌──────────────────────────────────────────────────┐
│        CAREER LAUNCH WEEK: December 1-5          │
│           25+ Career Sessions Available           │
└──────────────────────────────────────────────────┘

[Optional: My Favorites (collapsed by default)]

┌─ BLOCK 1 - Choose any session ─────────────────┐
│                                                  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐  │
│  │[Thumb] │ │[Thumb] │ │[Thumb] │ │[Thumb] │  │
│  │Title   │ │Title   │ │Title   │ │Title   │  │
│  │35 min  │ │40 min  │ │38 min  │ │42 min  │  │
│  │Gr 9-12 │ │Gr11-12 │ │Gr 9-10 │ │Gr11-12 │  │
│  │        │ │        │ │        │ │        │  │
│  └────────┘ └────────┘ └────────┘ └────────┘  │
│                                                  │
│  [+ 2 more sessions...]                          │
└──────────────────────────────────────────────────┘

[Similar for Blocks 2, 3, 4]
```

**Interaction Patterns:**
- Hover on session card: Slight elevation and shadow
- Click anywhere on card: Navigate to session detail page
- Star icon (if implemented): Click to favorite (doesn't navigate away)
- Scroll is smooth and natural
- No jarring transitions or animations

**Accessibility:**
- Semantic HTML: `<main>`, `<section>`, `<article>` for structure
- Each block has proper heading hierarchy (`<h2>` for block titles)
- Session cards have descriptive alt text on thumbnails
- Keyboard focus indicators visible on all interactive elements
- Screen reader announces "25 career sessions available, organized in 4 blocks"

---

## 5.2 Feature 2: Session Detail Pages

### User Story
**As an educator**, I want to view detailed information about a session including a trailer video, full description, and presenter bio, so that I can make an informed decision about whether this content is appropriate for my students before committing class time.

### Priority
**P0 - Must Have** (Essential for informed decision-making)

### Acceptance Criteria

#### Happy Path
- **Given** I click on a session card from the schedule
- **When** the session detail page loads
- **Then** I see:
  - Session title (large, prominent)
  - Session metadata (duration, grade level, industry, presenter name)
  - Embedded trailer video (1-2 minutes, Vimeo player)
  - Full description (3-4 paragraphs)
  - Learning objectives (bullet list)
  - Presenter bio (2-3 paragraphs)
  - Presenter photo (if available)
  - Prominent "Watch with Your Class" button

#### Trailer Video Behavior
- **Given** I am on a session detail page
- **When** I view the trailer section
- **Then** I see a Vimeo embedded player
- **And** I can click play to watch the 1-2 minute trailer
- **And** the video plays inline (no modal, no navigation away)
- **And** I have access to standard Vimeo controls (play, pause, volume, fullscreen)
- **And** watching the trailer does NOT trigger the registration form
- **And** trailer views are NOT tracked (preview only)

#### Watch with Your Class Button
- **Given** I have reviewed the session details
- **When** I decide to show this to my class
- **Then** I see a large, prominent "Watch with Your Class" button
- **And** clicking it opens the combined registration form as a modal
- **And** the button is accessible at both top and bottom of page (optional: sticky on mobile)

#### Content Layout
- **Given** I am viewing the session detail page
- **When** I scroll down
- **Then** I see sections in this order:
  1. Hero section: Title, metadata, visual branding
  2. Trailer video (embedded Vimeo player)
  3. Session description (3-4 paragraphs about the session)
  4. Learning objectives (bulleted list: "What you'll learn")
  5. Presenter bio and photo (who is teaching this session)
  6. "Watch with Your Class" button (repeated at bottom)

#### Direct URL Access
- **Given** I have a direct link to a session (e.g., from an email)
- **When** I visit the URL
- **Then** I land directly on the session detail page
- **And** I see all session information immediately (no authentication required)
- **And** I can watch the trailer and read details
- **And** when I click "Watch with Your Class", the combined form appears

### Edge Cases

#### Missing Trailer
- **Given** a session does not have a trailer video
- **When** the page loads
- **Then** the trailer section is hidden
- **And** the description section moves up
- **And** there is no broken video embed or error message

#### Very Long Description
- **Given** a session description is >1000 words
- **When** the page loads
- **Then** the full description is displayed
- **Or** description is truncated with "Read more" expansion link
- **And** page performance is not impacted

#### No Presenter Photo
- **Given** a presenter has no photo available
- **When** the page loads
- **Then** a placeholder avatar or initials circle is shown
- **And** the bio text is still displayed normally

#### Browser Back Button
- **Given** I am on a session detail page
- **When** I click browser back
- **Then** I return to the schedule page
- **And** my scroll position is preserved (I'm at the block I came from)

#### Slow Trailer Video Load
- **Given** the trailer video is slow to buffer
- **When** the page loads
- **Then** I see a loading indicator in the video player area
- **And** the rest of the page content is visible and readable
- **And** I can scroll and read while video loads

### Technical Constraints
- Vimeo embed must work in all major browsers
- Page must render in <1.5 seconds (3G connection)
- URLs must be shareable (e.g., /session/nursing-career-pathways)
- Must work with browser back/forward navigation
- Trailer videos hosted on Vimeo (not self-hosted)
- Must support keyboard navigation (tab through interactive elements)

### UX Considerations

**Hero Section:**
```
┌──────────────────────────────────────────────────┐
│  [< Back to Schedule]                            │
│                                                  │
│      NURSING CAREER PATHWAYS                     │
│      Healthcare | 35 minutes | Grades 9-12      │
│      Presented by Dr. Sarah Johnson, RN          │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Content Hierarchy:**
- Large, eye-catching session title
- Metadata clearly visible (duration, grade level, presenter)
- Breadcrumb navigation (Schedule > Block 2 > Session Title)
- Visual branding or industry-specific colors/icons

**Trailer Video Section:**
- 16:9 aspect ratio (standard video format)
- Responsive width (scales to container, max 800px)
- Vimeo player controls visible
- No autoplay (educator chooses when to watch)
- Optional: "Preview this session" subheading

**Description & Learning Objectives:**
- Clear section headers: "About This Session", "What You'll Learn"
- Short, scannable paragraphs (3-4 sentences each)
- Learning objectives as bulleted list (3-5 items)
- Professional but approachable tone

**Presenter Section:**
- Presenter photo (circular, 150x150px)
- Name and credentials clearly displayed
- Bio in 2-3 short paragraphs
- Optional: Links to presenter's professional profiles

**Call-to-Action:**
- "Watch with Your Class" button large and prominent
- Primary brand color (high contrast)
- Repeated at both top and bottom of page
- Optional: Sticky button on mobile (always visible)

**Accessibility:**
- Semantic HTML: `<article>` for session, `<section>` for each area
- Proper heading hierarchy (H1 for title, H2 for sections)
- Alt text on presenter photo
- Video player has captions/subtitles (if available from Vimeo)
- Focus indicators on interactive elements

---

## 5.3 Feature 3: Combined Registration Form (Profile + Context)

### User Story
**As an educator ready to watch a video**, I want to provide my information and class context in a single, streamlined form, so that I can start watching immediately without multiple steps or unnecessary friction.

### Priority
**P0 - Must Have** (This is the ONLY data collection point in the entire flow)

### Acceptance Criteria

#### Happy Path: First-Time User
- **Given** I click "Watch with Your Class" for the first time
- **When** the combined form modal appears
- **Then** I see 6 required fields in one form:
  1. Name (text input)
  2. Email (text input)
  3. School (dropdown, pre-populated by board)
  4. Role (radio buttons: Guidance Counsellor / Subject Teacher / Administrator / Other)
  5. Class Size (radio buttons: Less than 25 / 25 to 35 / Large group)
  6. Grade Level (radio buttons: Grade 9-10 / Grade 11-12 / Mixed)
- **And** all fields are empty (no pre-fill)
- **And** "Start Video" button is disabled (grayed out)
- **And** I see friendly copy: "Quick info before we start the video"

#### Happy Path: Returning User (Pre-fill)
- **Given** I have watched a video before (cookie exists)
- **When** I click "Watch with Your Class" on a different session
- **Then** the combined form modal appears with ALL 6 fields pre-filled:
  - Name: "Jane Smith"
  - Email: "jane.smith@torontodsb.ca"
  - School: "Central High School" (selected)
  - Role: "Subject Teacher" (selected)
  - Class Size: "25 to 35" (selected)
  - Grade Level: "Grade 11-12" (selected)
- **And** "Start Video" button is ENABLED immediately
- **And** I can click "Start Video" without changing anything (~1 second)
- **Or** I can change any field before clicking

#### Form Validation: Real-Time
- **Given** I am filling out the form
- **When** I complete each field
- **Then** validation occurs on blur (when I leave the field)
- **And** error messages appear inline if validation fails:
  - Name: "Please enter your full name" (if <2 characters)
  - Email: "Please enter a valid email address" (if invalid format)
  - School: "Please select your school" (if not selected)
  - Role: (radio group, can't be invalid once selected)
  - Class Size: (radio group, can't be invalid once selected)
  - Grade Level: (radio group, can't be invalid once selected)
- **And** error messages disappear as soon as field becomes valid

#### Progressive Disclosure: Large Group
- **Given** I select "Large group" for class size
- **When** the selection changes
- **Then** a number input field appears below the class size options
- **And** the label reads: "How many students? (36-500)"
- **And** the field requires a number ≥36 and ≤500
- **And** the "Start Video" button remains disabled until valid number entered

#### Form Submission
- **Given** I have filled all 6 required fields correctly
- **When** I click "Start Video"
- **Then** the form submits immediately
- **And** I see a brief loading state (<500ms)
- **And** the modal closes
- **And** the video starts playing immediately (no intermediate screens)
- **And** my data is saved to the database (User + ViewingEvent records)
- **And** a cookie is set with my submission data (for pre-fill)

#### Button State Management
- **Given** I am filling out the form
- **When** ANY required field is empty or invalid
- **Then** "Start Video" button is disabled (grayed out, cursor: not-allowed)
- **And** button shows: "Start Video (Fill all fields)"

- **Given** I have filled all 6 required fields correctly
- **When** validation passes
- **Then** "Start Video" button is enabled (primary color, cursor: pointer)
- **And** button shows: "Start Video"

### Edge Cases

#### Modal Close Without Submitting
- **Given** the modal is open
- **When** I click outside the modal OR press Escape key
- **Then** the modal closes
- **And** the video does NOT start playing
- **And** I remain on the session detail page
- **And** I can click "Watch with Your Class" again to retry

#### Incomplete Selection
- **Given** I have filled some fields but not all
- **When** I try to click "Start Video" (button is disabled)
- **Then** button does not respond (no click event)
- **And** I see inline errors on empty/invalid fields

#### Changing Pre-filled Values
- **Given** my previous selection was "25 to 35" and "Grade 11-12"
- **When** the form opens with these pre-filled
- **And** I change class size to "Large group"
- **Then** the number input field appears
- **And** I must enter a valid number (36-500)
- **And** when I submit, cookie updates with new values
- **And** next time, "Large group" + my number will be pre-filled

#### Database Write Failure
- **Given** I submit the form
- **When** the database is temporarily unavailable
- **Then** the system retries up to 3 times
- **And** if all retries fail, the video STILL plays (don't block user)
- **And** the failed submission is queued for later sync
- **And** an error is logged (but NOT shown to user)

#### Cookie Blocked by Browser
- **Given** my browser blocks third-party cookies
- **When** I submit the form
- **Then** form submission succeeds (database writes still work)
- **And** cookie fails to set (pre-fill won't work next time)
- **And** user is NOT notified (graceful degradation)
- **And** next time, form appears empty (user must fill again)

### Technical Constraints
- All 6 fields required (no optional fields in MVP)
- Email format validation: must contain @, must have domain
- Name validation: 2-100 characters, letters/spaces/hyphens/apostrophes only
- School dropdown: Must be dynamically populated based on email domain
- Large group: number must be integer between 36-500
- Form must work on mobile (touch-friendly, keyboard optimized)
- Modal must trap focus (Tab only cycles through modal elements)
- Database writes must complete in <500ms (95th percentile)

### UX Considerations

**Modal Design:**
```
┌──────────────────────────────────────────────────┐
│  Quick info before we start the video            │
│                                                  │
│  Your Name                                       │
│  ┌────────────────────────────────────────────┐ │
│  │ Jane Smith                                 │ │
│  └────────────────────────────────────────────┘ │
│                                                  │
│  Your Email                                      │
│  ┌────────────────────────────────────────────┐ │
│  │ jane.smith@torontodsb.ca                   │ │
│  └────────────────────────────────────────────┘ │
│                                                  │
│  Your School                                     │
│  ┌────────────────────────────────────────────┐ │
│  │ [Select from dropdown...]                  │ │
│  └────────────────────────────────────────────┘ │
│                                                  │
│  Your Role                                       │
│  [Guidance] [Teacher] [Admin] [Other]            │
│                                                  │
│  ─────────────────────────────────────────────── │
│                                                  │
│  How many students are watching?                 │
│  [Less than 25] [25 to 35] [Large group]         │
│                                                  │
│  What grade level?                               │
│  [Grade 9-10] [Grade 11-12] [Mixed]              │
│                                                  │
│         [Start Video] ← Primary CTA              │
│                                                  │
│  Note: We'll remember this info for next time.   │
└──────────────────────────────────────────────────┘
```

**Visual Design:**
- Clean, single-column layout
- Large, touch-friendly inputs (min 44x44px)
- Radio buttons are large and clearly labeled
- Clear visual separation between profile and context sections (divider line)
- Friendly, encouraging copy throughout
- Professional but approachable tone

**Field Layout:**
- Tab order follows visual flow (name → email → school → role → class size → grade level → submit)
- Each field has clear label above input
- Placeholder text provides examples where helpful
- Error messages appear below field in red text
- Green checkmark appears when field is valid (optional)

**Interaction Details:**
- Auto-focus on first empty field when modal opens
- Enter key submits form (if all fields valid)
- Escape key closes modal
- Click outside modal closes it (video does not play)
- Form remembers values if user closes and reopens (within session)

**Mobile Optimization:**
- Modal appears as bottom sheet (easier thumb access)
- Email keyboard on mobile (@ and . easily accessible)
- Number keyboard for "Large group" input
- Larger touch targets (radio buttons ≥48x48px on mobile)
- Reduced font size on small screens (but still readable)

**Accessibility:**
- Focus trap within modal (can't tab outside)
- First field receives focus on open
- All form fields have associated labels
- Error messages announced by screen readers (role="alert")
- "Start Video" button announces state (enabled/disabled)
- Semantic HTML: `<form>`, `<fieldset>`, `<legend>` for structure

---

## 5.4 Feature 4: Video Player & Engagement Tracking

### User Story
**As an educator**, I want the video to start playing immediately after submitting my information, with reliable streaming and progress tracking, so that my students can watch the session without technical difficulties or delays.

### Priority
**P0 - Must Have** (This is the core content delivery mechanism)

### Acceptance Criteria

#### Happy Path: Video Playback
- **Given** I have submitted the combined form successfully
- **When** the form closes
- **Then** the Vimeo player appears on the page
- **And** the video begins playing automatically
- **And** transition from form to video takes <1 second
- **And** I have access to standard Vimeo controls:
  - Play/Pause
  - Volume control
  - Timeline scrubbing
  - Fullscreen mode
  - Quality settings
  - Captions/subtitles (if available)

#### Playback Tracking: Duration
- **Given** the video is playing
- **When** playback progresses
- **Then** the system tracks total watch duration
- **And** updates the ViewingEvent record every 5 seconds
- **And** accurately captures:
  - Current playback position (seconds)
  - Total time spent watching (cumulative seconds)
  - Timestamp of last update

#### Playback Tracking: Completion
- **Given** I am watching a video
- **When** I reach 80% of the video duration
- **Then** the system marks this viewing as "completed"
- **And** sets `completed = true` in ViewingEvent record
- **And** records `completed_at` timestamp
- **And** completion is based on "furthest point reached" not "time spent"

- **Example:** 40-minute video
  - Watching 32+ minutes = completed (80%)
  - Even if I scrub forward and backward, as long as I hit 32-minute mark = completed

#### Playback Tracking: Scrubbing
- **Given** I am watching a video
- **When** I scrub from minute 5 to minute 30
- **Then** the system updates `completion_percentage` to highest point reached
- **And** watch_duration reflects only time actively watching (not skipped time)
- **And** completion is still based on highest point (I'm 75% complete after scrubbing to min 30 of 40-min video)

#### Playback Tracking: Pause & Resume
- **Given** I pause the video at minute 15
- **When** I resume 2 minutes later
- **Then** tracking resumes from minute 15
- **And** the 2-minute pause is NOT counted in watch_duration
- **And** the system continues updating completion_percentage as I watch

### Edge Cases

#### Video Load Failure
- **Given** the Vimeo video fails to load
- **When** the player attempts to initialize
- **Then** I see an error message: "Video temporarily unavailable. Please refresh the page."
- **And** I have option to return to session detail page
- **And** ViewingEvent is still recorded (with 0 duration and 0% completion)
- **And** error is logged to monitoring service

#### Multiple Pauses
- **Given** I pause the video 10 times during playback
- **When** I resume each time
- **Then** the system continues tracking cumulative watch duration
- **And** total duration is sum of all play periods (not pause periods)
- **And** completion_percentage updates correctly

#### Exiting Before Completion
- **Given** I have watched 20 minutes of a 40-minute video (50%)
- **When** I close the browser or navigate away
- **Then** the system saves my progress
- **And** ViewingEvent shows:
  - watch_duration: 1200 seconds (20 minutes)
  - completion_percentage: 50
  - completed: false
- **And** data is preserved (not lost)

#### Refreshing Page During Playback
- **Given** I am watching a video at minute 25
- **When** I refresh the page
- **Then** the video player resets to the beginning
- **And** a NEW ViewingEvent is created (separate from first)
- **And** the previous ViewingEvent is saved as-is (incomplete)
- **Note:** Multiple ViewingEvents for same user/session are acceptable

#### Network Interruption
- **Given** I am watching and my internet disconnects
- **When** the video buffer runs out
- **Then** Vimeo's native error handling displays
- **And** I can retry when connection returns
- **And** tracking resumes when video resumes
- **And** system logs network error

#### Rewatching Same Session
- **Given** I have already watched Session A to completion
- **When** I click "Watch with Your Class" on Session A again
- **Then** the combined form appears again (not bypassed)
- **And** I can provide different class context (e.g., different class period)
- **And** a NEW ViewingEvent is created
- **And** both viewings count toward student reach totals

### Technical Constraints
- Vimeo embed must work in all major browsers
- Must handle various network speeds (Vimeo adaptive bitrate)
- Tracking updates every 5 seconds (balance between accuracy and performance)
- Database updates must not impact playback performance
- Must respect Vimeo rate limits for API calls
- Must work on mobile devices (iOS Safari, Android Chrome)

### UX Considerations

**Player Placement Options:**

**Option A: Embedded on Session Detail Page**
```
[User clicks "Start Video"]
↓
[Form closes]
↓
[Page scrolls to video player section]
↓
[Video appears and auto-plays]
```

**Option B: Modal/Overlay**
```
[User clicks "Start Video"]
↓
[Form closes]
↓
[Video opens in fullscreen overlay]
↓
[User can exit overlay to return to session page]
```

**Recommendation for MVP:** Option A (simpler, works on all devices)

**Player Controls:**
- All standard Vimeo controls visible and functional
- Fullscreen button prominent (especially important on mobile)
- Quality selector available (if multiple qualities provided)
- Captions/subtitles button visible (if available)
- Timeline is scrubbable (user can jump to any point)

**Loading States:**
- Spinner or skeleton loader while video buffers
- Smooth transition from form close to video start
- No jarring UI shifts or blank screens
- Progress indicator if buffering takes >2 seconds

**Post-Playback:**
- When video ends, show "Session Complete! 🎉" message
- Provide clear CTA: "Back to Schedule" button
- Optional: "Watch Another Session" button
- DO NOT auto-play next video (educator should control)

**Error States:**
- Clear, actionable error messages
- Option to retry or report issue
- Contact information for technical support
- Fallback: Return to session detail page

**Accessibility:**
- Video player has keyboard controls (Space = play/pause, arrows = scrub)
- Captions/subtitles available (if provided by Vimeo)
- Screen reader announces video status ("Playing", "Paused", "Complete")
- Focus management (focus returns to appropriate element after playback)

---

## 5.5 Feature 5: Session Favorites (P1 - Optional)

### User Story
**As an educator**, I want to bookmark sessions I'm interested in showing, so that I can easily find them later when planning my week.

### Priority
**P1 - Important but Not Blocking** (Nice-to-have that enhances UX)

### Acceptance Criteria

#### Happy Path: Adding Favorite
- **Given** I am viewing the schedule page
- **When** I click the star icon on a session card
- **Then** the session is added to my favorites
- **And** the star icon fills in (visual feedback: outline → filled)
- **And** a "My Favorites" section appears at the top of the schedule (if it wasn't already visible)
- **And** favorites are stored in browser localStorage

#### Happy Path: Removing Favorite
- **Given** I have favorited a session
- **When** I click the filled star icon
- **Then** the session is removed from favorites
- **And** the star icon becomes outlined (filled → outline)
- **And** if no favorites remain, the "My Favorites" section disappears

#### My Favorites Section
- **Given** I have 3 favorited sessions
- **When** I view the schedule
- **Then** I see "My Favorites (3)" at the top of the page
- **And** clicking/tapping expands to show my favorited session cards
- **And** these cards link directly to session detail pages
- **And** cards show same info as schedule: thumbnail, title, duration, grade level

### Edge Cases

#### Favorites Across Devices
- **Given** I favorite sessions on my laptop
- **When** I visit the site on my phone
- **Then** favorites do NOT sync (localStorage is device-specific)
- **And** I must re-favorite on the new device
- **Note:** Phase 2 could sync via database if needed

#### Browser Clear/Incognito Mode
- **Given** I am using incognito mode
- **When** I favorite sessions
- **Then** favorites persist during my session
- **And** favorites are lost when I close the browser
- **And** I see a subtle note: "Favorites are saved to this device only"

#### Maximum Favorites
- **Given** there is no technical limit on favorites
- **When** I favorite all 25 sessions
- **Then** all 25 appear in "My Favorites" section
- **And** the section may become scrollable or paginated
- **And** performance remains acceptable

#### localStorage Unavailable
- **Given** my browser has localStorage disabled or blocked
- **When** I try to favorite a session
- **Then** star icon still toggles (visual feedback)
- **But** favorite is NOT persisted (lost on page refresh)
- **And** user is NOT notified (graceful degradation)

### Technical Constraints
- localStorage has ~5-10MB limit (plenty for storing session IDs)
- Must handle localStorage being unavailable (private browsing, disabled)
- Must not break if localStorage is cleared mid-session
- Star icon click should NOT trigger navigation to session detail
- Favorites should load quickly (no performance impact)

### UX Considerations

**Visual Design:**
- Star icon: Gold/yellow when filled, gray outline when empty
- Hover state: Tooltip appears ("Add to favorites" or "Remove from favorites")
- Click animation: Subtle scale up/down or color transition
- Icon size: 24x24px (large enough for touch, small enough to not dominate)

**Star Icon Placement:**
- Top-right corner of each session card
- Positioned absolutely so it doesn't affect card layout
- Click area extends beyond icon for easier targeting
- Clear visual separation from card click area

**My Favorites Section:**
- Appears above Block 1 when favorites exist
- Collapsible on mobile (collapsed by default, expand on tap)
- Shows count badge: "My Favorites (5)"
- Same session card design as schedule blocks
- Clear visual distinction (different background color or border)

**Interaction Timing:**
- Instant visual feedback on star click (<100ms)
- localStorage write happens asynchronously (doesn't block UI)
- Smooth animation when adding/removing from favorites
- No page reload or navigation on favorite toggle

**Mobile Optimization:**
- Larger touch target for star icon (48x48px touch area)
- "My Favorites" section collapses to save screen space
- Tap to expand, shows count badge
- Swipe to dismiss (optional enhancement)

**Accessibility:**
- Star icon has aria-label: "Add to favorites" or "Remove from favorites"
- Screen reader announces action: "Added [Session Title] to favorites"
- Keyboard accessible (Tab to focus, Enter/Space to toggle)
- Focus indicator visible on star icon
- "My Favorites" section has proper heading (h2)

**Time to Build:** ~2-4 hours  
**Risk:** Minimal (pure localStorage, no backend complexity)  
**User Value:** Medium-High (helps with planning, increases engagement)

**Recommendation:** Include in MVP if time permits (it's cheap and polishes the experience)

---

# 6. SUCCESS METRICS & KPIs

## 6.1 North Star Metric

**Total Student Reach** = Sum of all class sizes across all viewing sessions

This is our primary measure of impact because it represents the actual number of students exposed to career education content—which is what school boards pay for and what sponsors care about.

**Calculation Example:**
- Educator A watches Session 1 with 30 students (Grade 11-12)
- Educator A watches Session 2 with 28 students (Grade 9-10, different class)
- Educator B watches Session 1 with 25 students (Grade 11-12)
- Educator C watches Session 3 with 22 students (Mixed)

**Total Student Reach = 30 + 28 + 25 + 22 = 105 students**

**Why this metric matters:**
- Directly ties to event value proposition (student exposure to careers)
- Justifies school board investment ("We reached X students")
- Proves sponsor impact ("Your session reached Y students")
- More meaningful than "views" or "registered users"

---

## 6.2 Launch Success Indicators (Dec 1-5)

### Primary Metrics

| Metric | Target | Stretch Goal | Failure Threshold | Why It Matters |
|--------|--------|--------------|-------------------|----------------|
| **First Video Watch Rate** | 50% of visitors | 65% | <30% | Validates browse-first approach |
| **Active Participation** | 60% of watchers see ≥3 sessions | 75% | <40% | Indicates platform stickiness |
| **Avg Sessions per Active Educator** | 3 sessions | 5 sessions | <2 | Measures repeat engagement |
| **Session Completion Rate** | 70% watch ≥80% | 85% | <50% | Quality/relevance of content |
| **Form Completion Rate** | 95% complete combined form | 98% | <85% | Validates single-form approach |
| **Total Student Reach** | 40,000+ students | 75,000+ students | <20,000 | North Star metric |

### Conversion Funnel Metrics

```
Homepage Visitors (100%)
    ↓
Browse Schedule (95%+)        [Target: 95% browse at least 1 block]
    ↓
View Session Detail (75%)     [Target: 75% click on at least 1 session]
    ↓
Click "Watch with Your Class" (60%)  [Target: 60% initiate watch flow]
    ↓
Complete Form (95% of above)   [Target: 95% complete the 6-field form]
    ↓
Watch Video (100% of above)    [Target: 100% start playback]
    ↓
Watch ≥80% (70% of above)      [Target: 70% complete the video]
```

**Key Conversion Insights:**
- **Browse-to-Detail:** 75% click through = good content discoverability
- **Detail-to-Watch:** 60% initiate = strong interest/relevance
- **Form-to-Playback:** 95% complete = single form at high commitment works
- **Playback-to-Completion:** 70% finish = quality content, appropriate length

---

## 6.3 Secondary Success Indicators

### Engagement Quality Metrics

**Time-to-First-Video**
- **Target:** <30 seconds from homepage landing to first video playing
- **Measurement:** Average time from page load to video player initialized
- **Why:** Validates that browse-first approach is faster than traditional registration
- **Comparison:** Old flow would be 90+ seconds (email → profile → browse → watch)

**Browse-to-Watch Conversion**
- **Target:** 60% of visitors who browse click "Watch with Your Class" on ≥1 session
- **Measurement:** (Users who click "Watch") / (Total unique visitors)
- **Why:** Measures effectiveness of browse-first value delivery

**Returning User Pre-fill Success**
- **Target:** 80% of returning users start video within 5 seconds
- **Measurement:** Time from "Watch with Your Class" click to video start for users with cookies
- **Why:** Validates that cookie-based pre-fill is working well and reducing friction

**Repeat Viewing Rate**
- **Target:** 60% of educators who watch 1 session watch ≥3 sessions
- **Measurement:** (Users with 3+ ViewingEvents) / (Users with 1+ ViewingEvent)
- **Why:** Indicates content quality, platform usability, and low friction for repeat use

### Content Discovery Metrics

**Peak Participation Day**
- **Measure:** Which day of the week (Mon-Fri) has highest viewing activity
- **Use:** Informs future event scheduling and content release strategy
- **Expected:** Monday or Tuesday (early week energy)

**Block-Level Engagement**
- **Measure:** Distribution of views across 4 blocks
- **Target:** Roughly equal distribution (20-30% per block)
- **Use:** Validates 4-block structure, identifies if one block is underperforming

**Most Popular Sessions**
- **Measure:** Which 5 sessions have highest view counts
- **Use:** Informs future content curation, sponsor renewal decisions
- **Expected:** Mix of industries (not all healthcare or all tech)

**Session Completion by Content Type**
- **Measure:** Completion rate by industry (Healthcare vs Tech vs Trades, etc.)
- **Use:** Identifies which industries resonate best with students/educators
- **Action:** Double down on high-performing industries in future events

---

## 6.4 Business Outcome Metrics

### School Board Satisfaction
**Measurement:** Post-event survey (sent within 1 week)

**Key Questions:**
1. How satisfied were you with educator participation levels? (1-5 scale)
2. Did the platform provide the data you need to justify the investment? (Yes/No/Partially)
3. Would you renew for next year's Career Launch Week? (Yes/No/Maybe)
4. What was the biggest benefit? (Open text)
5. What should we improve? (Open text)

**Success Criteria:**
- Average satisfaction: ≥4.0/5.0
- Data sufficiency: ≥80% say "Yes" or "Partially"
- Renewal intent: ≥70% say "Yes" or "Maybe"

### Sponsor Satisfaction
**Measurement:** Follow-up conversations with session presenters (2-3 weeks post-event)

**Key Questions:**
1. Were you satisfied with the student reach data provided? (Yes/No)
2. Was the reach data useful for internal reporting? (Yes/No/Partially)
3. Would you participate in future Career Launch events? (Yes/No/Maybe)
4. What additional data would be helpful? (Open text)

**Success Criteria:**
- Data satisfaction: ≥85% say "Yes"
- Internal usefulness: ≥75% say "Yes" or "Partially"
- Future participation: ≥90% say "Yes" or "Maybe"

### Board Renewal Rate
**Measurement:** 6 months post-event

**Target:** ≥70% of boards commit to next year's Career Launch Week

**Factors:**
- Student reach numbers (higher = more likely to renew)
- Educator satisfaction (positive feedback = more likely to renew)
- Ease of implementation (less board overhead = more likely to renew)
- Quality of reporting data (better insights = more likely to renew)

---

## 6.5 Long-Term Success (6 months post-event)

### Expansion Metrics
**New Board Sign-Ups**
- **Target:** 5+ new school boards (25% growth)
- **Source:** Peer recommendations, word-of-mouth
- **Validation:** Platform value is being recognized beyond initial participants

**Content Growth**
- **Target:** 10+ new sponsors/presenters interested for next year
- **Indication:** Platform provides value to content providers
- **Enables:** Event scaling, more diverse session offerings

### Platform Reuse
**Additional Events**
- **Target:** 2+ additional career events using the platform (beyond Career Launch Week)
- **Examples:** Subject-specific career days, industry showcase events
- **Validation:** Platform is flexible enough for various use cases

**On-Demand Access**
- **Target:** School boards request on-demand catalog mode
- **Indication:** Value extends beyond event week
- **Phase 2 Feature:** On-demand access with different UX

---

## 6.6 How We'll Measure Everything

### During Event (Real-Time Monitoring)

**Google Analytics 4:**
- Page traffic and user flows
- Device and browser usage
- Geographic distribution across Ontario
- Time on site and bounce rates
- Conversion funnel drop-off points

**Vimeo Analytics:**
- Video engagement metrics (play rate, drop-off points)
- Average view duration
- Completion rates by session
- Device-specific viewing patterns
- Peak viewing times

**Custom Database Tracking (Supabase):**
- Viewing events with full context
- Class size and grade level distribution
- Real-time participation monitoring
- Educator-level engagement patterns
- School-by-school breakdowns

**Monitoring Dashboard (Optional but Recommended):**
- Real-time view counter
- Current active viewers
- Today's student reach tally
- Most popular sessions (live)
- Alert if any critical metrics tank

### Post-Event Analysis (Within 1 Week)

**CSV Exports from Supabase:**
- Full ViewingEvents table export
- User table export (educators)
- Session-level aggregations

**Reports Generated:**
1. **Board-Level Reports** (one per board)
   - Total student reach
   - Participating schools
   - Educator engagement summary
   - Most popular sessions among their educators

2. **School-Level Reports** (on request)
   - Participating educators
   - Sessions watched
   - Total student reach for this school

3. **Sponsor Reports** (one per session)
   - Total student reach
   - Grade level distribution
   - Completion rate
   - Geographic spread (which boards watched)
   - Device breakdown

4. **Executive Summary**
   - Overall student reach
   - Total participating educators
   - Average sessions per educator
   - Top 5 sessions by reach
   - Recommendations for next year

**Report Format:**
- PDF for email distribution
- Interactive dashboard for board admins (Phase 2)
- CSV exports for custom analysis

---

## 6.7 Validation Questions We'll Answer

### Did browse-first registration work?
**Metrics to check:**
- Homepage bounce rate (<20% = success)
- Browse-to-watch conversion (>60% = success)
- Time-to-first-video (<30 seconds = success)
- Form completion rate (>95% = success)

**Conclusion:** If these metrics hit targets, browse-first approach is validated

### Was the 4-block structure effective?
**Metrics to check:**
- Block-level view distribution (roughly equal = success)
- Educator feedback about content variety
- Evidence of students seeing multiple different sessions

**Conclusion:** If no one block dominates and educators report good variety, structure works

### Was the class context form a barrier or did educators comply willingly?
**Metrics to check:**
- Form completion rate (>95% = not a barrier)
- Time spent on form (avg <30 seconds = low friction)
- Form abandonment rate (<5% = willing compliance)

**Conclusion:** If >95% complete form quickly, it's not a barrier

### Which sessions had highest completion rates?
**Analysis:**
- Rank all 25 sessions by completion rate
- Identify patterns (industry, duration, presenter style)
- Use for future content curation

**Action Items:**
- Renew high-performing presenters
- Analyze low-completion sessions for lessons learned
- Adjust session length recommendations for next year

### Did email-only entry reduce friction vs traditional login?
**Comparison:**
- Time-to-first-video: <30 sec (vs 90+ with traditional registration)
- Registration completion rate: N/A (no upfront registration)
- First-video-watch rate: 50% (vs ~30-40% with forced registration)

**Conclusion:** If time metrics are faster and watch rates are higher, approach is validated

---

# 7. DEVELOPMENT TIMELINE

## 7.1 Overview

**Total Development Time:** ~22 days (4.5 weeks)  
**Developer Resources:** 1-2 full-stack developers  
**Launch Date:** December 1, 2025  
**Current Date:** October 28, 2025  
**Days until launch:** 34 days  
**Buffer:** ~12 days (good buffer for testing and refinement)

---

## 7.2 Week-by-Week Breakdown

### Week 1 (Nov 4-8): Foundation & Setup
**Focus:** Infrastructure, data, and tooling

**Tasks:**
- [ ] Set up Supabase account and database
  - Create tables (Users, Sessions, ViewingEvents, Boards, Schools)
  - Define indexes and constraints
  - Set up Row-Level Security policies
  - Configure database backups
- [ ] Configure Vimeo Pro account
  - Upload trailer videos
  - Upload full session videos
  - Configure privacy settings
  - Test embed codes
- [ ] Domain setup and hosting
  - Purchase/configure domain
  - Set up Vercel/Netlify account
  - Configure DNS
  - Set up SSL certificates
- [ ] Finalize session metadata
  - Collect all 25 session descriptions, bios, learning objectives
  - Assign sessions to blocks (manual curation for diversity)
  - Create/optimize session thumbnails
  - Review all video content for quality
- [ ] Populate database with session data
  - Insert all 25 sessions into Sessions table
  - Insert all boards into Boards table
  - Insert all schools into Schools table
  - Verify data integrity

**Deliverable:** Database live, videos uploaded, domain configured  
**Time:** 5 days (1 developer)

---

### Week 2 (Nov 11-15): Core Features
**Focus:** Public schedule, session details, basic navigation

**Tasks:**
- [ ] Build homepage/schedule page
  - Fetch all sessions from database
  - Group sessions by block (1, 2, 3, 4)
  - Render session cards with thumbnails, titles, metadata
  - Implement responsive grid layout (desktop, tablet, mobile)
  - Add basic styling with Tailwind CSS
  - Optimize image loading (lazy load, WebP format)
- [ ] Build session detail pages
  - Dynamic routing (/session/[slug])
  - Fetch session data by slug
  - Render hero section with title and metadata
  - Embed trailer video (Vimeo player)
  - Render description, learning objectives, presenter bio
  - Add "Watch with Your Class" button
  - Mobile-responsive layout
- [ ] Implement basic navigation
  - Back to schedule link
  - Breadcrumb navigation
  - Browser back button handling
  - Smooth scroll behavior
- [ ] Add Google Analytics
  - Set up GA4 property
  - Install tracking code
  - Configure page view tracking
  - Set up custom events (session_view, watch_initiated)

**Deliverable:** Users can browse schedule and view session details  
**Time:** 5 days (1-2 developers)

---

### Week 3 (Nov 18-22): Registration Form & Video Playback
**Focus:** Combined form, cookie management, video player integration

**Tasks:**
- [ ] Build combined registration form
  - Create modal component
  - Implement 6-field form (name, email, school, role, class size, grade level)
  - Add real-time validation (React Hook Form)
  - Implement progressive disclosure (Large group → number input)
  - Style form with Tailwind (mobile-first)
  - Add inline error messages
  - Implement "Start Video" button state management
- [ ] Implement cookie management
  - Set cookie on form submission (7-day expiration)
  - Read cookie on form open (for pre-fill)
  - Handle cookie expiration gracefully
  - Test across browsers (Chrome, Firefox, Safari)
- [ ] Integrate Vimeo player
  - Embed full video on form submission
  - Initialize Vimeo Player SDK
  - Attach event listeners (play, pause, timeupdate, ended)
  - Implement autoplay on form submission
  - Test video playback on all devices
- [ ] Implement viewing event tracking
  - Create ViewingEvent record on form submission
  - Calculate estimated students from class size
  - Update watch duration every 5 seconds
  - Track completion percentage
  - Mark as completed at 80% threshold
  - Handle database write failures gracefully (retry logic)

**Deliverable:** Users can submit form and watch videos with tracking  
**Time:** 5 days (1-2 developers)

---

### Week 4 (Nov 25-29): Polish, Testing, & Optimization
**Focus:** Bug fixes, performance, accessibility, final refinements

**Tasks:**
- [ ] Performance optimization
  - Run Lighthouse audits (target ≥90 score)
  - Optimize images (compression, sizing, format)
  - Minimize JavaScript bundle size
  - Implement code splitting
  - Add loading states and skeleton loaders
  - Test on 3G connection (simulated slow network)
- [ ] Accessibility improvements
  - Run WAVE and axe DevTools audits
  - Fix any WCAG 2.1 AA violations
  - Test with keyboard navigation
  - Test with screen reader (NVDA or VoiceOver)
  - Ensure proper focus management
  - Add ARIA labels where needed
- [ ] Cross-browser testing
  - Test on Chrome, Firefox, Safari, Edge
  - Test on iOS Safari and Android Chrome
  - Fix any browser-specific bugs
  - Verify Vimeo player works on all browsers
- [ ] User testing with real educators
  - Recruit 3-5 educators from participating boards
  - Conduct remote usability tests (video calls)
  - Ask them to complete full flow (browse → watch)
  - Gather feedback on form, navigation, overall experience
  - Identify any pain points or confusion
- [ ] Bug fixes based on testing
  - Prioritize and fix critical bugs
  - Address usability issues from user testing
  - Refine copy and messaging based on feedback
- [ ] Final QA checklist
  - Test all user flows (first-time, returning user)
  - Test all edge cases (form abandonment, video failure, etc.)
  - Verify all data is being tracked correctly
  - Test CSV export from Supabase
  - Verify all metrics are measurable

**Optional (if time permits):**
- [ ] Favorites feature (~4 hours)
  - Add star icons to session cards
  - Implement localStorage-based favorites
  - Create "My Favorites" section on schedule page
  - Test across devices

**Deliverable:** Polished, tested platform ready for launch  
**Time:** 5 days (1-2 developers)

---

### Week 5 (Dec 1-5): Launch Week & Monitoring
**Focus:** Live event, real-time monitoring, quick fixes

**Day 1 (Dec 1): Launch Day**
- [ ] Final production deployment
- [ ] Verify all systems operational
- [ ] Monitor real-time analytics (GA, Vimeo, database)
- [ ] Watch for error spikes (Sentry if configured)
- [ ] Be ready for quick-fix deployments
- [ ] Respond to any urgent issues from educators/boards

**Days 2-5 (Dec 2-5): Event Week**
- [ ] Daily monitoring of key metrics
  - Student reach tally
  - Active users
  - Most popular sessions
  - Any technical issues
- [ ] Quick bug fixes if needed
  - Hot-fix deployments for critical issues
  - Performance tweaks if bottlenecks discovered
- [ ] Stakeholder communication
  - Daily updates to school board administrators
  - Quick responses to educator questions
- [ ] Data validation
  - Spot-check viewing events in database
  - Verify tracking is accurate
  - Ensure no data corruption

**Deliverable:** Successful event week with minimal issues  
**Time:** 5 days (light monitoring, on-call for issues)

---

## 7.3 Development Estimates by Feature

| Feature | Time Estimate | Developer(s) |
|---------|---------------|--------------|
| Database setup & configuration | 1 day | 1 dev |
| Vimeo account & video uploads | 1 day | 1 dev |
| Domain & hosting setup | 0.5 days | 1 dev |
| Session metadata collection | 1 day | 1 dev |
| Schedule page (4-block view) | 2 days | 1-2 devs |
| Session detail pages | 2 days | 1-2 devs |
| Combined registration form | 2 days | 1 dev |
| Cookie management & pre-fill | 1 day | 1 dev |
| Vimeo player integration | 1.5 days | 1 dev |
| Viewing event tracking | 1.5 days | 1 dev |
| Google Analytics setup | 0.5 days | 1 dev |
| Performance optimization | 2 days | 1-2 devs |
| Accessibility improvements | 1 day | 1 dev |
| Cross-browser testing | 1 day | 1-2 devs |
| User testing & feedback | 1 day | 1 dev |
| Bug fixes & refinement | 2 days | 1-2 devs |
| Favorites (optional) | 0.5 days | 1 dev |
| **Total** | **~22 days** | **1-2 devs** |

**Notes:**
- Assumes 1-2 experienced full-stack developers
- Some tasks can be parallelized (e.g., frontend + backend)
- Buffer built into Week 4 for unexpected issues
- Week 5 is mostly monitoring, not active development

---

## 7.4 Critical Path Dependencies

```
Week 1: Foundation
  ↓
Database & Videos Ready
  ↓
Week 2: Core Features
  ↓
Browse & Detail Pages Working
  ↓
Week 3: Registration & Playback
  ↓
Full User Flow Functional
  ↓
Week 4: Polish & Testing
  ↓
Launch-Ready Platform
  ↓
Week 5: Live Event
```

**Critical dependencies:**
1. Database must be set up before any feature development
2. Videos must be uploaded to Vimeo before player integration
3. Schedule page must exist before session detail pages
4. Combined form must work before video playback can be tested
5. Tracking must work before reporting can be validated

**No blockers expected** - all dependencies are sequential and manageable

---

## 7.5 Risk Buffer & Contingency

**Built-in Buffer:** ~12 days between launch readiness (Nov 19) and actual launch (Dec 1)

**If ahead of schedule:**
- Build favorites feature (adds polish)
- Build basic filtering on schedule page (by industry, grade level)
- Create admin dashboard for real-time monitoring
- Write more comprehensive automated tests
- Create educator onboarding video/guide

**If behind schedule:**
- Cut favorites feature (nice-to-have)
- Simplify form styling (functionality over aesthetics)
- Reduce cross-browser testing scope (focus on Chrome + Safari)
- Skip optional performance optimizations
- Defer admin dashboard to post-event

**Absolute Must-Haves for Launch:**
- Schedule page loads and displays all 25 sessions
- Session detail pages work with trailers
- Combined form collects all 6 fields correctly
- Video playback works on major browsers
- Viewing events are tracked to database
- Cookie-based pre-fill works for returning users

---

# 8. RISK ASSESSMENT & MITIGATION

## 8.1 Technical Risks

### Risk: Database Performance Under Load
**Likelihood:** Low  
**Impact:** High (platform unusable if database fails)

**Indicators:**
- Slow query response times (>1 second)
- Connection pool exhausted
- Timeouts on form submission or tracking updates

**Mitigation:**
- Use Supabase's connection pooling (handles up to 500 concurrent connections)
- Add database indexes on frequently queried fields (email, sessionId, startedAt)
- Implement retry logic for failed database writes (up to 3 retries)
- Cache session data (changes infrequently, can be cached for 1 hour)
- Load test with 1000 concurrent users before launch

**Fallback Plan:**
- If database becomes unavailable, video playback continues (don't block users)
- Queue failed tracking events in browser localStorage for later sync
- Upgrade Supabase plan if free tier limits are hit (unlikely but possible)

### Risk: Vimeo Video Playback Issues
**Likelihood:** Low (Vimeo is reliable)  
**Impact:** High (core content delivery fails)

**Indicators:**
- Videos fail to load or buffer excessively
- Playback errors in browser console
- User reports of "video unavailable"

**Mitigation:**
- Test all 25 videos thoroughly before launch
- Use Vimeo Pro account (higher reliability than free tier)
- Ensure videos are set to correct privacy settings (embed-only, no password)
- Have backup embed codes ready
- Vimeo provides adaptive bitrate streaming (handles various network speeds)

**Fallback Plan:**
- If specific video fails, display error message with support contact
- If Vimeo has widespread outage, postpone event day (communicate to boards)
- Have video files backed up locally (can re-upload to Vimeo if needed)

### Risk: Cookie Blocking Breaks Pre-fill
**Likelihood:** Medium (some users have strict privacy settings)  
**Impact:** Low (graceful degradation)

**Indicators:**
- High percentage of returning users reporting "form not pre-filled"
- Cookie writes failing in browser console
- Users in incognito mode

**Mitigation:**
- Use first-party cookies (not third-party) - less likely to be blocked
- Set SameSite=Lax (balance between security and functionality)
- Test cookie behavior in various privacy modes
- Provide clear messaging: "Cookies help us remember your info"

**Fallback Plan:**
- If cookies fail, users simply fill form each time (still acceptable)
- Form is only 6 fields, takes ~20 seconds even without pre-fill
- Consider server-side session storage in Phase 2 (not needed for MVP)

---

## 8.2 User Experience Risks

### Risk: Users Abandon 6-Field Form
**Likelihood:** Low (form appears at high commitment point)  
**Impact:** Medium (lose some potential watchers)

**Indicators:**
- Form abandonment rate >10%
- Users click "Watch with Your Class" but don't complete form
- Time-on-form is very long (>60 seconds)

**Mitigation:**
- Clear, friendly copy: "Quick info before we start the video"
- Large, touch-friendly inputs (especially on mobile)
- Real-time validation with helpful error messages
- Progressive disclosure (number input only appears if needed)
- Pre-fill for returning users (1-second subsequent watches)

**Fallback Plan:**
- If abandonment is high (>15%), consider optional "Skip for now" with anonymous viewing
- Simplify form to 4 fields (remove role and custom school input)
- Add incentive messaging: "This helps presenters see their impact!"

### Risk: Educators Can't Find Relevant Sessions
**Likelihood:** Low (good filtering by block structure)  
**Impact:** Medium (lower engagement)

**Indicators:**
- Low click-through rate from schedule to detail pages (<50%)
- Short time-on-site (<2 minutes)
- User feedback about "too hard to find what I need"

**Mitigation:**
- Clear block headers explaining the structure
- Industry tags visible on each session card
- Grade level tags visible on each session card
- Session descriptions are concise and scannable
- Optional: Add search/filter by industry, grade level (if time permits)

**Fallback Plan:**
- Post-event, add search and filter functionality for next year
- Create curated "recommended for you" based on role (Phase 2)
- Provide printable PDF schedule educators can review offline

### Risk: Low First-Video-Watch Rate (<30%)
**Likelihood:** Low (browse-first should increase conversion)  
**Impact:** High (event fails if no one watches)

**Indicators:**
- Week 1 pre-event traffic is low
- High bounce rate on schedule page (>40%)
- Low click-through to session detail pages

**Mitigation:**
- Clear pre-event communication from school boards
- Provide ready-to-send email templates for boards
- Create quick "how-to" video for educators (30 seconds)
- Emphasize "no registration required" in all messaging
- Show sample session in promotional materials

**Fallback Plan:**
- If participation is low by Day 2, open access directly to students
- Promote video clips/highlights on social media for broader reach
- Extend event by 1-2 days to capture more participation
- Create supplemental educator guides to drive post-event adoption

---

## 8.3 Data & Reporting Risks

### Risk: Low Class Context Compliance (<70%)
**Likelihood:** Low (form is blocking, required for video)  
**Impact:** Medium (can't measure student reach accurately)

**Indicators:**
- High video playback without form submission (shouldn't happen - form is blocking)
- Educators finding workarounds to skip form (e.g., directly accessing video URL)
- Many "unknown" or "0 students" entries in database

**Mitigation:**
- Form blocks video playback (no workaround in UI)
- Positive framing: "Help presenters understand their impact"
- Pre-fill reduces burden for repeat users
- Form is simple and quick (6 fields, ~20 seconds)

**Fallback Plan:**
- Can still report "views" and "participating educators"
- Use completion rates as engagement proxy
- Acknowledge limitation in sponsor reports: "Minimum of X students reached"
- Phase 2: Explore different incentive structures or gamification

### Risk: Inaccurate Student Reach Estimates
**Likelihood:** Medium (estimates based on ranges, not exact counts)  
**Impact:** Low (acceptable margin of error)

**Indicators:**
- Wide variance in class size selections
- Many "Large group" selections with unclear numbers
- Feedback that estimates don't match reality

**Mitigation:**
- Use conservative estimates (Less than 25 → 20 students)
- Encourage exact numbers for "Large group" option
- Validate that estimates are reasonable (20-35 is typical class size)
- Accept margin of error as inherent to estimation

**Fallback Plan:**
- Report as "estimated student reach" with disclaimer
- Focus on trends rather than precise numbers
- Phase 2: Add optional "exact count" field for all selections

---

## 8.4 Business & Stakeholder Risks

### Risk: School Board Dissatisfaction
**Likelihood:** Low (platform provides clear value)  
**Impact:** High (renewals depend on satisfaction)

**Indicators:**
- Post-event survey scores <3.5/5.0
- Negative feedback about data quality
- Boards say reporting was insufficient

**Mitigation:**
- Proactive communication throughout event week
- Provide clear, actionable reports within 1 week post-event
- Include specific metrics boards care about (student reach, school participation)
- Offer to do 15-minute debrief calls with each board

**Fallback Plan:**
- If data is insufficient, supplement with qualitative feedback from educators
- Create case studies highlighting success stories
- Offer discounted renewal for boards willing to try again

### Risk: Sponsor/Presenter Dissatisfaction
**Likelihood:** Low (engagement data is valuable)  
**Impact:** Medium (future content pipeline)

**Indicators:**
- Sponsors say impact data isn't useful for their needs
- Low interest in participating in future events
- Requests for different metrics we can't provide

**Mitigation:**
- Proactive communication about what data will be provided
- Share sample reports before event (set expectations)
- Highlight specific metrics that matter: student reach, completion rate, geographic distribution
- Follow up personally with each sponsor post-event

**Fallback Plan:**
- Supplement quantitative data with qualitative testimonials
- Gather educator feedback about specific sessions
- Phase 2: Add more granular analytics (time-of-day patterns, device types, etc.)

---

## 8.5 Launch Day Risks

### Risk: Server/Hosting Outage
**Likelihood:** Very Low (Vercel/Netlify are reliable)  
**Impact:** Critical (platform completely unavailable)

**Indicators:**
- Site returns 502/503 errors
- Homepage won't load
- Database connection fails

**Mitigation:**
- Use enterprise-grade hosting (Vercel or Netlify with paid plan)
- Monitor uptime with status page (e.g., UptimeRobot)
- Have backup hosting ready (can redeploy to different provider in ~1 hour)
- Static site generation = minimal server-side dependencies

**Fallback Plan:**
- If hosting goes down, communicate immediately to boards
- Activate backup hosting (deploy to Netlify if Vercel fails, or vice versa)
- Update DNS if needed (propagation takes 1-24 hours)
- Extend event by 1 day to compensate for downtime

### Risk: Overwhelming Traffic (1000+ Concurrent Users)
**Likelihood:** Low (20 boards, ~1000 educators total)  
**Impact:** Medium (slow performance, not complete failure)

**Indicators:**
- Page load times spike to >5 seconds
- Database connection pool exhausted
- Vimeo player buffers excessively

**Mitigation:**
- Static site = infinitely scalable frontend (CDN)
- Database = Supabase handles 500 connections (should be sufficient)
- Videos = Vimeo handles unlimited concurrent streams
- Load test before launch (simulate 1000 users)

**Fallback Plan:**
- If database struggles, cache more aggressively (trade freshness for performance)
- If video buffering is an issue, it's a Vimeo problem (not ours) - communicate to users
- Upgrade Supabase plan if connection limit is hit (takes ~5 minutes)

### Risk: Critical Bug Discovered on Launch Day
**Likelihood:** Medium (bugs happen)  
**Impact:** High (depends on bug severity)

**Indicators:**
- Form submission fails
- Video player doesn't initialize
- Tracking isn't saving to database

**Mitigation:**
- Comprehensive testing in Week 4 (reduce likelihood)
- Have developers on-call during launch day
- Quick-fix deployment pipeline ready (Vercel = instant deploys)
- Error monitoring (Sentry) alerts team immediately

**Fallback Plan:**
- Triage: Critical (blocks watching) vs Non-critical (tracking fails)
- If critical: Fix and deploy immediately (within 1-2 hours)
- If non-critical: Fix by end of day, communicate to affected users
- Have fallback contact method (email, phone) for urgent issues

---

## 8.6 Risk Summary Matrix

| Risk Category | Risk | Likelihood | Impact | Priority |
|---------------|------|------------|--------|----------|
| **Technical** | Database performance | Low | High | High |
| **Technical** | Video playback fails | Low | High | High |
| **Technical** | Cookie blocking | Medium | Low | Low |
| **UX** | Form abandonment | Low | Medium | Medium |
| **UX** | Can't find sessions | Low | Medium | Low |
| **UX** | Low watch rate | Low | High | High |
| **Data** | Low compliance | Low | Medium | Medium |
| **Data** | Inaccurate estimates | Medium | Low | Low |
| **Business** | Board dissatisfaction | Low | High | High |
| **Business** | Sponsor dissatisfaction | Low | Medium | Medium |
| **Launch** | Server outage | Very Low | Critical | High |
| **Launch** | Overwhelming traffic | Low | Medium | Medium |
| **Launch** | Critical bug | Medium | High | High |

**High Priority Risks to Monitor Closely:**
1. Database performance under load
2. Video playback reliability
3. Low overall watch rate
4. School board satisfaction
5. Critical bugs on launch day

---

## 8.7 Daily Monitoring During Event Week

**Daily Checklist (Dec 1-5):**

**Morning (9:00 AM):**
- [ ] Check overnight viewing activity (any spike or drop?)
- [ ] Review error logs (any new errors?)
- [ ] Confirm database is healthy (connection count, query performance)
- [ ] Check Vimeo analytics (any playback issues?)
- [ ] Review Google Analytics (traffic patterns as expected?)

**Midday (12:00 PM):**
- [ ] Check current student reach tally (on track to hit target?)
- [ ] Review most popular sessions (any surprises?)
- [ ] Monitor form completion rate (above 90%?)
- [ ] Check for any user-reported issues (email, phone, board contacts)

**End of Day (4:00 PM):**
- [ ] Generate daily summary report (share with stakeholders)
- [ ] Review key metrics vs targets
- [ ] Identify any issues to address overnight
- [ ] Prepare for next day (any anticipated spikes?)

**On-Call:**
- [ ] Respond to critical issues within 1 hour
- [ ] Deploy hot-fixes if needed
- [ ] Communicate with boards if any downtime

---

**Status:** Complete PRD ready for development  
**Next Step:** Begin Week 1 foundation work (database setup, video uploads)  
**Owner:** Product & Development Teams  
**Approval Required:** Stakeholder sign-off on this document