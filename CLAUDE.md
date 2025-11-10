# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Career Launch Platform** - A video platform for Ontario high school educators to show career education content to students with accurate student reach measurement.

- **Launch Date:** December 1-5, 2025
- **Target Users:** Ontario high school educators (teachers, guidance counselors, administrators)
- **Content:** 25 career sessions across 4 time blocks
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
1. **First Visit:** Combined form collects profile (name, email, school, role) + viewing context (class size, grade level)
2. **Return Visits:** Cookie pre-fills all 6 fields for 1-click submission
3. **Cookie Duration:** 7 days
4. **No Traditional Auth:** No login/logout, no passwords

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
├── page.tsx                 # Homepage with hero and 4-block schedule (PUBLIC)
├── globals.css              # Tailwind base + design tokens + animations
├── sessions/
│   ├── page.tsx            # Sessions page with tab navigation (PUBLIC)
│   └── [slug]/
│       └── page.tsx        # Session detail page (PUBLIC)
└── api/                     # API routes (to be implemented)
    ├── submit-registration/
    ├── update-viewing-event/
    └── complete-viewing-event/

/components
├── Accordion.tsx            # Reusable accordion with 'blocks' variant
├── SessionCard.tsx          # Session card with hover effects
├── Header.tsx               # Navigation header
├── sessions/
│   └── AllSessionsView.tsx # Flat list view for "All Sessions" tab
└── ui/
    └── SessionTabs.tsx      # Tab navigation (Conference/All Sessions)

/data
└── sample-sessions.ts       # Hardcoded session data (27 sessions)

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
- **sessions:** 25 career sessions with metadata
- **viewing_events:** Each time an educator shows a video (includes class_size, grade_level)
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
- **Homepage (`/`)**: Hero section with event info + 4-block accordion schedule
- **Sessions Page (`/sessions`)**: Two-tab navigation system
  - **Conference Schedule Tab** (default): Original 4-block accordion view
  - **All Sessions Tab** (`?view=all`): Flat list of all 27 sessions (sorted alphabetically)
  - URL param-based navigation with `useSearchParams` and `useRouter`
  - Centered tab design with background highlight for active state
  - 200ms fade-in animation when switching views
- **Session Detail Pages (`/sessions/[slug]`)**: Individual session pages with metadata and descriptions
- **Design System**: Complete myBlueprint brand compliance with custom Tailwind tokens
- **Sample Data**: 27 hardcoded sessions in `/data/sample-sessions.ts` (Block 1: 6, Block 2: 6, Block 3: 7, Block 4: 8)

### Component Patterns

#### Client vs Server Components
- **Server Components** (default): Homepage, session detail pages
- **Client Components** (`'use client'`):
  - Sessions page (uses URL params)
  - SessionTabs (router navigation)
  - Accordion (interactive state)

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

## Important Concepts

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
- ~6 sessions per block
- Manual curation ensures industry diversity in each block

### Video Tracking
- Trailers: No tracking (preview only)
- Full sessions: Track every 5 seconds (watch duration, completion %)
- Completion threshold: ≥80% watched = "completed"

## Critical User Flows

### First-Time User Flow
1. Land on homepage → See full 4-block schedule immediately
2. Browse sessions → Click card → Session detail page
3. Watch trailer (optional, no tracking)
4. Click "Watch with Your Class" → Combined form modal appears
5. Fill 6 fields → Submit → Video starts immediately
6. Cookie set (7 days) for future visits

### Returning User Flow
1. Land on homepage (cookie detected)
2. Browse sessions → Click "Watch with Your Class"
3. Form appears with ALL 6 fields pre-filled
4. Click "Start Video" (1 second) → Video starts immediately

## API Routes

### POST /api/submit-registration
**Purpose:** Process combined registration form
**Payload:** `{ email, name, boardId, schoolId, role, classSize, gradeLevel, sessionId }`
**Logic:**
- Check if user exists (by email)
- If new: INSERT into users table
- If existing: UPDATE user profile
- Always: INSERT new viewing_event record
- Set 7-day cookie with email
**Response:** `{ userId, viewingEventId }`

### POST /api/update-viewing-event
**Purpose:** Track video progress (called every 5 seconds)
**Payload:** `{ viewingEventId, watchDuration, completionPercentage }`
**Logic:** UPDATE viewing_events SET watch_duration, completion_percentage

### POST /api/complete-viewing-event
**Purpose:** Mark video as completed (≥80% watched)
**Payload:** `{ viewingEventId }`
**Logic:** UPDATE viewing_events SET completed = true, completed_at = NOW()

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

- **PRD:** `.claude/PRD_CareerLaunch.md` - Complete product requirements
- **Tech Specs:** `.claude/TechSpecs_CareerLaunch.md` - Technical implementation details
- **Design Specs:** `.claude/DesignSpecs_CareerLaunch.md` - UX/UI style guide with all design tokens

## Key Constraints

1. **No Traditional Auth:** Cookie-based recognition only, no login/logout system
2. **Public Content:** Schedule and session details must be accessible without registration
3. **One Form Only:** Combined 6-field form is the ONLY data collection point
4. **Vimeo Dependency:** All video hosting/streaming via Vimeo Pro
5. **Brand Strict:** Must use only myBlueprint colors and Museo Sans/Open Sans fonts
6. **Mobile-First Responsive:** Desktop-optimized but must work on all devices
7. **5-Day Event Window:** Platform must handle concentrated traffic Dec 1-5, 2025

## Success Metrics to Track

- **Conversion Rate:** % of visitors who watch ≥1 video (target: 50%)
- **Session Completion Rate:** % of started videos watched ≥80% (target: 70%)
- **Average Sessions per Educator:** Number of videos shown per active educator (target: 3)
- **Total Student Reach:** Sum of all class sizes across viewing events (target: 40,000+)
- **Form Completion Rate:** % of modal opens that result in submission (target: 95%)
