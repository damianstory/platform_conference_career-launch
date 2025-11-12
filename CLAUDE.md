# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Career Launch Platform** - A video platform for Ontario high school educators to show career education content to students with accurate student reach measurement, plus an interactive expo hall featuring sponsor booths.

- **Launch Date:** December 1-5, 2025
- **Target Users:** Ontario high school educators (teachers, guidance counselors, administrators)
- **Content:** 27 career sessions across 4 time blocks + sponsor booths with resources
- **Key Innovation:** Browse-first registration (show value before asking for commitment)

## Architecture & Tech Stack

### Core Technologies
- **Frontend:** Next.js 14 (App Router) with React 18
- **Styling:** Tailwind CSS with custom design tokens
- **Backend:** Supabase (PostgreSQL)
- **Video:** Vimeo Pro with Player SDK
- **Hosting:** Vercel
- **Forms:** React Hook Form
- **Analytics:** Google Analytics 4

### Architecture Pattern
Jamstack with Server-Side Rendering (SSR):
- Server-rendered pages for optimal performance and SEO
- API routes for sensitive operations (form submission, tracking)
- Cookie-based user recognition (no traditional authentication)
- Static generation with ISR where possible

## Key Design Principles

### Browse-First Registration
**Critical:** Users must be able to explore all content WITHOUT registration barriers.
- Homepage shows full 4-block schedule immediately
- Session detail pages are public (no auth gate)
- Registration only triggered when clicking "Watch with Your Class"
- Combined form (6 fields) appears as modal at commitment point

### Data Collection Strategy
**Critical Philosophy: Browse-First Registration**
- **NEVER** require registration to browse content
- **NEVER** show registration forms on homepage or session listings
- **ONLY** collect data at maximum commitment point: when user clicks "Watch with Your Class"

**Single Combined Form (6 Fields):**
1. **First Visit:** Modal appears with empty form collecting:
   - Profile: name, email, school, role (WHO is watching)
   - Context: class size, grade level (HOW MANY students are watching)
2. **Return Visits:** Cookie pre-fills all 6 fields for 1-click submission
3. **Cookie Duration:** 7 days (covers event week + buffer)
4. **No Traditional Auth:** No login/logout, no passwords, no email verification

**Why This Matters:**
- Traditional platforms force registration upfront → 40-60% drop-off
- We show value first (browse all content) → collect at peak commitment
- One form, one time, then seamless for all future sessions
- Cookie reduces friction from 20 seconds → 1 second for returning users

### Brand Requirements
**Strict myBlueprint Compliance:**
- Colors: Use only official palette (Navy #22224C, Blue #0092FF, Light Blue #C6E7FF, Off-White #F6F6FF)
- Typography: Museo Sans (primary) with Open Sans fallback
- 8px spacing grid (all spacing must be multiples of 8)
- Professional aesthetic with strategic energy (balanced for educators + students)

## Project Structure

```
/app                          # Next.js App Router
├── layout.tsx               # Root layout with providers
├── page.tsx                 # Homepage with split hero (Sessions/Booths) (PUBLIC)
├── globals.css              # Tailwind base + design tokens + animations
├── sessions/
│   ├── page.tsx            # Sessions page with tab navigation (PUBLIC)
│   └── [slug]/
│       └── page.tsx        # Session detail page (PUBLIC)
├── booths/
│   ├── page.tsx            # Booths expo hall with filtering (PUBLIC)
│   └── [slug]/
│       └── page.tsx        # Booth detail page with bento layout (PUBLIC)
└── api/                     # API routes (to be implemented)
    ├── submit-registration/
    ├── update-viewing-event/
    └── complete-viewing-event/

/components
├── Accordion.tsx            # Reusable accordion with 'blocks' variant
├── SessionCard.tsx          # Session card with hover effects
├── Header.tsx               # Navigation header
├── Footer.tsx               # Footer with FAQ
├── FAQ.tsx                  # FAQ accordion component
├── sessions/
│   ├── AllSessionsView.tsx # Flat list view for "All Sessions" tab
│   ├── ConferenceScheduleTable.tsx # Table view for conference schedule
│   ├── SessionTableRow.tsx  # Individual session row
│   ├── SessionFilters.tsx   # Filtering interface
│   └── IndustryBadge.tsx    # Industry tag component
├── booths/
│   ├── BoothLayout.tsx      # Main booth detail layout (12-col bento grid)
│   ├── BoothsHero.tsx       # Booths section hero
│   └── sections/            # Modular booth sections
│       ├── BoothHeader.tsx
│       ├── VideoSection.tsx
│       ├── EngagementActivity.tsx  # Platinum tier only
│       ├── ResourceCards.tsx
│       ├── SessionSlides.tsx       # Platinum tier only
│       ├── CompanyStory.tsx
│       └── ContactInfo.tsx
├── expo/
│   ├── ExpoHall.tsx         # Grid layout for booth cards
│   ├── BoothCard.tsx        # Individual booth card
│   ├── BoothCardSkeleton.tsx
│   └── FilterBar.tsx        # Industry/tier filtering
├── layout/
│   ├── Navigation.tsx       # Main navigation
│   ├── ConditionalHeader.tsx
│   ├── SessionDetailHeader.tsx
│   └── BoothDetailHeader.tsx
├── session/
│   ├── VideoSection.tsx
│   ├── DescriptionSection.tsx
│   └── SpeakerSection.tsx
└── ui/
    ├── SessionTabs.tsx      # Tab navigation (Conference/All Sessions)
    ├── LoadingSpinner.tsx
    ├── ErrorBoundary.tsx
    ├── NetworkError.tsx
    └── EmptyStateIllustration.tsx

/data
├── sample-sessions.ts       # Hardcoded session data (27 sessions)
└── sample-booths.ts         # Hardcoded booth data (Platinum/Standard tiers)

/lib
├── supabase/                # Database client and queries
│   ├── client.ts           # Browser client
│   └── server.ts           # Server client
└── utils.ts                 # Utility functions (cn, formatters)

/types
└── index.ts                 # TypeScript type definitions

/styles
└── design-tokens.css        # CSS custom properties

/supabase
├── migrations/
│   └── 001_initial_schema.sql
└── seeds/
    └── 001_sample_data.sql
```

## Database Schema

### Core Tables
- **users:** Educator profile (name, email, board, school, role)
- **sessions:** 27 career sessions with metadata
- **viewing_events:** Each time an educator shows a video (includes class_size, grade_level)
- **booths:** Sponsor booth data with tier (platinum/standard)
- **booth_interactions:** Track educator engagement with booths
- **boards:** Ontario school boards
- **schools:** Schools within boards

### Key Relationships
- Users belong to schools, schools belong to boards
- ViewingEvents link users to sessions with viewing context
- No traditional auth tables (cookie-based recognition)

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev              # Starts at http://localhost:3000

# Build production
npm run build

# Type checking
npm run type-check       # Run TypeScript compiler without emitting files

# Linting
npm run lint             # Run ESLint for code quality

# Testing
npm run test             # Run Jest test suite
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage report
```

## Current Implementation State

### Completed Features
- **Homepage (`/`)**:
  - Hero section with background image and gradient overlay
  - Split full-width clickable sections: Sessions (blue) and Booths (navy)
  - Hover effects with arrows and gradient overlays
  - FAQ section at bottom
- **Sessions Page (`/sessions`)**: Two-tab navigation system
  - **Conference Schedule Tab** (default): 4-block table view with "Watch Session" buttons
  - **All Sessions Tab** (`?view=all`): Flat list of all 27 sessions (sorted alphabetically)
  - URL param-based navigation with `useSearchParams` and `useRouter`
  - Centered tab design with background highlight for active state
  - 200ms fade-in animation when switching views
- **Session Detail Pages (`/sessions/[slug]`)**: Individual session pages with metadata and descriptions
- **Booths Page (`/booths`)**: Expo hall with grid layout
  - Filter by industry (Agriculture, Construction, Energy, Launch, Trades)
  - Filter by tier (All, Platinum, Standard)
  - Responsive grid (1/2/3 columns)
  - Skeleton loading states
- **Booth Detail Pages (`/booths/[slug]`)**: 12-column bento grid layout
  - **All Tiers:** Header, Video, Resources, Company Story, Contact Info
  - **Platinum Exclusive:** Engagement Activity, Session Slides
  - Responsive breakpoints with proper stacking
- **Design System**: Complete myBlueprint brand compliance with custom Tailwind tokens
- **Sample Data**:
  - 27 sessions in `/data/sample-sessions.ts` (Block 1: 6, Block 2: 6, Block 3: 7, Block 4: 8)
  - Multiple booths in `/data/sample-booths.ts` (Platinum and Standard tiers)

### Component Patterns

#### Client vs Server Components
- **Server Components** (default): Homepage, session detail pages, booth detail pages
- **Client Components** (`'use client'`):
  - Sessions page (uses URL params)
  - Booths page (filtering state)
  - SessionTabs (router navigation)
  - Accordion (interactive state)
  - BoothLayout (bento grid with interactive sections)
  - ExpoHall (filtering and search)
  - All booth sections (video, engagement, resources, etc.)

#### URL Navigation Pattern
```typescript
// Sessions page uses URL params for view state
// Default: /sessions (shows Conference Schedule)
// Alternate: /sessions?view=all (shows All Sessions)

const searchParams = useSearchParams();
const activeView = searchParams.get('view') === 'all' ? 'all' : 'conference';
```

#### Accordion Pattern
```typescript
// Accordion component supports two variants
<Accordion items={accordionItems} variant="blocks" />
// 'default': Standard accordion with white background
// 'blocks': Colored backgrounds (block1-4 colors from design system)
```

#### Session Data Access
```typescript
// Sessions are imported from centralized data file
import { allSessions } from '@/data/sample-sessions';
// Helper functions available:
// - getSessionBySlug(slug: string)
// - getSessionsByBlock(blockNumber: BlockNumber)
// - getSessionsByIndustry(industry: string)
// - getAllIndustries()
```

#### Booth Data Access
```typescript
// Booths are imported from centralized data file
import { sampleBooths } from '@/data/sample-booths';
// Types: PlatinumBoothData | StandardBoothData
// - Platinum booths include: engagementActivity and sessionSlides
// - Standard booths: header, video, resources, story, contact only
// Helper functions:
// - getBoothBySlug(slug: string)
// - getBoothsByIndustry(industry: BoothIndustry)
// - getBoothsByTier(tier: 'platinum' | 'standard')
```

#### Bento Grid Layout Pattern
```typescript
// Booth detail pages use 12-column bento grid
// Components span different columns based on tier:
<div className="grid grid-cols-12 gap-4 sm:gap-6">
  {/* Full width items: col-span-12 */}
  {/* Platinum layout: video 4 cols, engagement 8 cols */}
  {/* Standard layout: video 8 cols */}
  {/* Responsive with lg: breakpoint changes */}
</div>
```

## Important Concepts

### Cookie-Based Pre-fill System
**Cookie Name:** `clp_session`
**Duration:** 7 days from last activity
**Purpose:** Store educator info for seamless repeat watching (UX enhancement, NOT authentication)

**Cookie Structure:**
```javascript
{
  email: "jane.smith@torontodsb.ca",
  timestamp: "2025-12-01T10:30:00Z",
  lastSubmission: {
    name: "Jane Smith",
    email: "jane.smith@torontodsb.ca",
    boardId: "uuid",
    schoolId: "uuid",
    role: "Teacher",
    classSize: "25-to-35",
    gradeLevel: "11-12"
  }
}
```

**Pre-fill Logic:**
1. When "Watch with Your Class" clicked, check for `clp_session` cookie
2. If cookie exists and < 7 days old → pre-fill ALL 6 fields
3. If no cookie or expired → show empty form
4. On form submit → create/update cookie with latest values
5. Cookie updates on EVERY submission (captures latest class context)

**Security Notes:**
- No passwords or tokens in cookie (public educator info only)
- SameSite protection prevents CSRF
- Secure flag in production (HTTPS only)
- Short 7-day expiration appropriate for event context

### Student Reach Calculation
**North Star Metric:** Total Student Reach = Sum of all class sizes across viewing events

```typescript
// class_size options in viewing_events:
"less-than-25"     → estimate 20 students
"25-to-35"         → estimate 30 students
"large-group"      → use exact count from large_group_count field
```

### 4-Block Structure
Sessions organized into 4 time blocks matching Ontario high school schedules:
- Prevents students from seeing duplicate content across classes
- ~6-8 sessions per block (Block 1: 6, Block 2: 6, Block 3: 7, Block 4: 8)
- Manual curation ensures industry diversity in each block

### Booth Tiers
Two-tier sponsor booth system:
- **Platinum Tier:** Full feature access (video, engagement activity, resources, session slides, story, contact)
- **Standard Tier:** Essential features (video, resources, story, contact)
- Bento grid layout adapts based on tier

### Video Tracking
- Trailers: No tracking (preview only)
- Full sessions: Track every 5 seconds (watch duration, completion %)
- Completion threshold: ≥80% watched = "completed"

## Critical User Flows

### First-Time User Flow (Sessions)
1. Land on homepage → See split hero (Sessions/Booths)
2. Click "Sessions" → Navigate to sessions page with 2-tab view
3. Browse schedule (no registration barrier)
4. Click session card → Session detail page
5. Watch trailer video (optional, no form appears, no tracking)
6. Click "Watch with Your Class" button → Combined form modal appears
7. Fill 6 required fields → Click "Start Video" → Form validates
8. Video starts playing immediately (<1 second transition)
9. Cookie set (7 days) with all form values for future visits

**Form Modal Behavior:**
- Modal title: "Who's Watching With You?"
- Overlay darkens background (accessible modal)
- Clicking outside modal or ESC key closes modal (video does NOT start)
- "Start Video" button disabled until all 6 fields valid
- Real-time validation as user types
- First time: ~20 seconds to complete form
- On success: Seamless transition to video playback

### First-Time User Flow (Booths)
1. Land on homepage → Click "Booths" → Navigate to expo hall
2. Filter by industry or tier (optional)
3. Browse booth cards → Click booth → Booth detail page
4. Explore booth sections (video, resources, activities)
5. Download resources, visit links, engage with content
6. No registration required for browsing (fully public)

### Returning User Flow (Cookie Detected)
1. Land on homepage (cookie recognized but no visible change)
2. Browse sessions exactly like first-time user (no difference)
3. Click "Watch with Your Class" → Form modal appears
4. ALL 6 fields automatically pre-filled from cookie
5. User reviews pre-filled values (can edit if context changed)
6. Click "Start Video" (takes ~1 second) → Video starts immediately
7. Cookie updated with any changed values

**Key Difference for Returning Users:**
- First video: ~20 seconds (fill form)
- Subsequent videos: ~1 second (just click "Start Video")
- Educator showing 5 sessions: 20s + 1s + 1s + 1s + 1s = 24 seconds total
- vs. traditional platforms requiring 15-20 seconds PER video = 75-100 seconds

## API Routes

### POST /api/submit-registration
**Purpose:** Process combined registration form (THE ONLY form in the entire platform)
**Trigger:** User clicks "Start Video" button in modal after filling all 6 required fields
**Payload:** `{ email, name, boardId, schoolId, role, classSize, gradeLevel, sessionId }`
**Logic:**
1. Validate all 6 fields are present and valid
2. Check if user exists (by email)
3. If new user: INSERT into users table
4. If existing user: UPDATE user profile (name, board, school, role can change)
5. Always: INSERT new viewing_event record (even for same session - captures different class contexts)
6. Set/update 7-day cookie with all form values
7. Return success with IDs
**Response:** `{ success: true, userId, viewingEventId }`
**Error Cases:**
- Missing required fields → 400 Bad Request
- Invalid email format → 400 Bad Request
- Invalid boardId/schoolId → 400 Bad Request
- Database error → 500 Internal Server Error

### POST /api/update-viewing-event
**Purpose:** Track video progress (called every 5 seconds)
**Payload:** `{ viewingEventId, watchDuration, completionPercentage }`
**Logic:** UPDATE viewing_events SET watch_duration, completion_percentage

### POST /api/complete-viewing-event
**Purpose:** Mark video as completed (≥80% watched)
**Payload:** `{ viewingEventId }`
**Logic:** UPDATE viewing_events SET completed = true, completed_at = NOW()

### POST /api/track-booth-interaction
**Purpose:** Track educator engagement with booth content
**Payload:** `{ boothId, interactionType, resourceId? }`
**Logic:** INSERT into booth_interactions (educator_id, booth_id, type)
**Interaction Types:** view, resource_download, video_watch, link_click

## Accessibility Requirements

**WCAG 2.1 AA Compliance:**
- Color contrast: 4.5:1 for normal text, 3:1 for large text
- All interactive elements keyboard accessible
- Focus indicators always visible (never removed)
- Semantic HTML with proper heading hierarchy
- ARIA labels for complex components
- Touch targets ≥44px on mobile
- Respect prefers-reduced-motion preference

## Performance Targets

**Desktop:**
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3s
- Cumulative Layout Shift: <0.1

**Mobile:**
- First Contentful Paint: <2s
- Largest Contentful Paint: <3.5s
- Time to Interactive: <4s

## Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
COOKIE_DOMAIN=careerlaunch.myblueprint.ca
CONTACT_EMAIL=damian.matheson@myblueprint.ca
```

## Documentation References

- **PRD:** `Specs/PRD_CareerLaunch.md` - Complete product requirements with browse-first registration strategy
- **Tech Specs:** `Specs/TechSpecs_CareerLaunch.md` - Technical implementation details
- **Design Specs:** `Specs/DesignSpecs_CareerLaunch.md` - UX/UI style guide with all design tokens

## Key Constraints

1. **No Traditional Auth:** Cookie-based recognition only, no login/logout system
2. **Public Content:** Schedule and session details must be accessible without registration
3. **One Form Only:** Combined 6-field form is the ONLY data collection point
   - **CRITICAL:** Form ONLY appears when "Watch with Your Class" button clicked on session detail page
   - **NEVER** show form on homepage, sessions list, booths pages, or anywhere else
   - Trailer videos on session detail pages play WITHOUT triggering form
   - Only FULL session videos (after form submission) are tracked
4. **Vimeo Dependency:** All video hosting/streaming via Vimeo Pro
5. **Brand Strict:** Must use only myBlueprint colors and Museo Sans/Open Sans fonts
6. **Mobile-First Responsive:** Desktop-optimized but must work on all devices
7. **5-Day Event Window:** Platform must handle concentrated traffic Dec 1-5, 2025

## Success Metrics to Track

### Session Metrics
- **Conversion Rate:** % of visitors who watch ≥1 video (target: 50%)
- **Session Completion Rate:** % of started videos watched ≥80% (target: 70%)
- **Average Sessions per Educator:** Number of videos shown per active educator (target: 3)
- **Total Student Reach:** Sum of all class sizes across viewing events (target: 40,000+)
- **Form Completion Rate:** % of modal opens that result in submission (target: 95%)

### Booth Metrics
- **Booth Visit Rate:** % of educators who visit ≥1 booth
- **Resource Download Rate:** % of booth visitors who download resources
- **Average Booths per Educator:** Number of booths visited per educator
- **Engagement Activity Completion:** % of platinum booth visitors who complete activities
- **Time Spent per Booth:** Average duration on booth detail pages
