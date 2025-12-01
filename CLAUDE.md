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
- **Frontend:** Next.js 15 (App Router) with React 18
- **Styling:** Tailwind CSS with custom design tokens
- **Backend:** Supabase (PostgreSQL) - credentials hardcoded in `lib/supabase/client.ts`
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
└── api/
    └── submit-registration/
        └── route.ts         # Registration API with spam protection (IMPLEMENTED)

/components
├── Accordion.tsx            # Reusable accordion with 'blocks' variant
├── Header.tsx               # Navigation header
├── Footer.tsx               # Footer with FAQ
├── FAQ.tsx                  # FAQ accordion component
├── registration/
│   └── MultiStepModal.tsx # Multi-step registration modal (educator + student flows)
├── sessions/
│   ├── AllSessionsView.tsx # Flat list view for "All Sessions" tab
│   ├── ConferenceScheduleTable.tsx # Table view for conference schedule
│   ├── SessionTableRow.tsx  # Individual session row (navigates to detail page)
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
│   └── OrganizationSection.tsx
└── ui/
    ├── SessionTabs.tsx      # Tab navigation (Conference/All Sessions)
    └── EmptyStateIllustration.tsx

/data
├── sample-sessions.ts       # Hardcoded session data (27 sessions)
└── sample-booths.ts         # Hardcoded booth data (Platinum/Standard tiers)

/lib
├── supabase/                # Database client and queries
│   ├── client.ts           # Browser client
│   └── server.ts           # Server client
├── hooks/
│   └── useRegistrationForm.ts # Registration form state and validation
├── mock-data/
│   └── registration.ts     # Ontario boards, schools, class sizes, grade levels
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

## Database Schema (Supabase)

### Core Tables
- **registrations:** Each form submission (user_type, name, email, board, school, class_size, grade_level, session_id)
- **viewing_events:** Video watch tracking (registration_id, watch_duration, completion_percentage, completed)

### Key Fields in `registrations`
- `user_type`: 'educator' | 'student'
- `board_id`, `board_name`: School board selection
- `school_id`, `school_name`: School selection
- `is_guest`: Boolean for "Not Listed - Watching as Guest" selections
- `class_size`: For educators only
- `grade_level`: For both user types
- `session_id`, `session_title`: Which session they registered for

### RLS Policies
Both tables have Row Level Security enabled with **INSERT-only** policies for the anon key:
- ✅ Public can INSERT new registrations (required for form submission)
- ❌ Public cannot SELECT/read any data (protects educator privacy)
- ❌ Public cannot UPDATE or DELETE (data integrity)

Only the Service Role Key (server-side only) can read data for reporting.

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
    - Block headers show session count only (e.g., "7 sessions") without industry names
    - Sessions organized by display_order within each block
  - **All Sessions Tab** (`?view=all`): Flat list of all 27 sessions (sorted alphabetically)
  - URL param-based navigation with `useSearchParams` and `useRouter`
  - Centered tab design with background highlight for active state
  - 200ms fade-in animation when switching views
  - "Watch Session" buttons navigate to session detail pages
- **Session Detail Pages (`/sessions/[slug]`)**: Individual session pages with metadata and descriptions
  - "Watch with Your Class" button triggers registration modal
  - Session title, description, presenter information
  - Trailer video support (no registration required)
- **Registration Modal (`/components/registration/MultiStepModal.tsx`)**: **COMPLETED**
  - Multi-step wizard with user type selection (educator vs student)
  - **Educator flow (3 steps):** Step 1: Personal Info (name, email) → Step 2: School Info (board, school) → Step 3: Class Context (size, grade)
  - **Student flow (2 steps):** Step 1: School Info (board, school) → Step 2: Grade Level
  - Bottom drawer slide-up animation with smooth step transitions
  - Cookie-based pre-fill (7-day expiration) with confirmation screen for returning users
  - Real-time validation with inline error messages
  - Smart field dependencies (school dropdown updates based on board)
  - **Guest option:** "Not Listed - Watching as Guest" available in both educator and student flows
    - Appears as last option in board dropdown
    - When selected, school dropdown automatically disables and shows "Not Listed"
    - Form validation accepts guest/not-listed as valid values
  - Progress indicator for multi-step navigation
  - Keyboard accessible (Tab, Enter, ESC) with back/next navigation
  - Mobile-responsive with optimized layouts per step
  - Session title reminder: "You're about to watch: [Session Title]"
- **Registration Form Logic (`/lib/hooks/useRegistrationForm.ts`)**: **COMPLETED**
  - Form state management with validation
  - Cookie read/write functionality
  - Pre-fill detection and field population
  - **API Route integration**: Form submissions go through `/api/submit-registration` with spam protection
  - Honeypot field and timing-based spam detection (school-friendly, no IP blocking)
  - Fallback: Direct Supabase code commented out with revert instructions
- **Mock Registration Data (`/lib/mock-data/registration.ts`)**: **COMPLETED**
  - 29 Ontario school boards with hundreds of schools (comprehensive coverage)
  - **Guest option:** "Not Listed - Watching as Guest" at bottom of boards dropdown
  - When guest selected: school dropdown automatically disabled showing "Not Listed"
  - Class size options (exploring-solo, less-than-25, 25-to-35, large-group, assembly)
  - Grade level options (7, 8, 9, 10, 11, 12, mixed)
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
  - 27 sessions in `/data/sample-sessions.ts` (Block 1: 7, Block 2: 7, Block 3: 7, Block 4: 6)
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

#### Registration Modal Pattern
```typescript
// Modal is integrated into VideoSection component on session detail pages
import MultiStepModal from '@/components/registration/MultiStepModal';

// State management
const [isModalOpen, setIsModalOpen] = useState(false);

// Open modal when "Watch with Your Class" clicked
<button onClick={() => setIsModalOpen(true)}>
  Watch with Your Class
</button>

// Modal component with required props
<MultiStepModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  sessionTitle={session.title}
  sessionId={session.id}
  onSubmit={(data) => {
    console.log('Form data:', data);
    // Backend integration goes here
    setIsModalOpen(false);
  }}
/>

// Modal behavior:
// - User type selection (educator vs student) on first screen
// - Multi-step wizard with back/next navigation
// - Cookie name: 'clp_registration' (7-day expiration)
// - Returning users see confirmation screen to skip steps
// - Validates each step before allowing progression
// - ESC key, overlay click, or Cancel button closes modal
```

## Important Concepts

### Cookie-Based Pre-fill System
**Cookie Name:** `clp_registration`
**Duration:** 7 days from last activity
**Purpose:** Store educator info for seamless repeat watching (UX enhancement, NOT authentication)

**Cookie Structure:**
```javascript
{
  firstName: "Jane",
  email: "jane.smith@torontodsb.ca",
  boardId: "tdsb",
  schoolId: "nss",
  classSize: "25-to-35",
  gradeLevel: "12",
  timestamp: "2025-12-01T10:30:00Z"
}
```

**Pre-fill Logic:**
1. When "Watch with Your Class" clicked, check for `clp_registration` cookie
2. If cookie exists and < 7 days old → pre-fill ALL 6 fields
3. If no cookie or expired → show empty form
4. On form submit → create/update cookie with latest values
5. Cookie updates on EVERY submission (captures latest class context)
6. Welcome back banner appears when cookie detected

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
- ~6-7 sessions per block (Block 1: 7, Block 2: 7, Block 3: 7, Block 4: 6)
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

### POST /api/submit-registration (IMPLEMENTED)
**Purpose:** Process registration form with spam protection
**Trigger:** User clicks "Start Video" button in modal after filling required fields

**Payload:**
```typescript
{
  user_type: 'educator' | 'student',
  session_id: string,
  session_title?: string,
  board_id: string,
  board_name: string,
  school_id: string,
  school_name: string,
  is_guest?: boolean,
  grade_level: string,
  // Educator-only fields:
  first_name?: string,
  email?: string,
  class_size?: string,
  // Spam protection (stripped before DB insert):
  _honeypot?: string,    // Should be empty (bots fill this)
  _timestamp?: number,   // When form was loaded
}
```

**Spam Protection (non-IP-based, school-friendly):**
1. **Honeypot field:** Hidden field that bots fill but humans never see
   - If filled → silently return fake success (don't tip off bots)
2. **Timing check:** Reject submissions faster than 1 second
   - Real users take several seconds to review/submit
   - If < 1 second → silently return fake success

**Logic:**
1. Check honeypot field (reject if filled)
2. Check timing (reject if < 1 second)
3. Validate required fields (user_type, session_id, board_id, school_id, grade_level)
4. Validate educator-specific fields if user_type === 'educator'
5. INSERT into `registrations` table (no SELECT due to RLS)
6. Set secure cookie for educators (7-day expiration)
7. Return success

**Response:** `{ success: true, userType: string }`

**Error Cases:**
- Validation failed → 400 with `{ success: false, error: 'Validation failed', details: [...] }`
- Database error → 500 with `{ success: false, error: 'Failed to save registration' }`

**Revert Instructions:** If issues occur, the old direct Supabase code is commented out in `/lib/hooks/useRegistrationForm.ts` with "OLD DIRECT SUPABASE VERSION" label.

### Video Tracking (GA4 Only)
Video progress tracking is handled via Google Analytics 4 in `/lib/analytics.ts`:
- `SessionAnalytics.videoStarted()` - When video begins playing
- `SessionAnalytics.videoProgress()` - At 25%, 50%, 75% milestones
- `SessionAnalytics.videoCompleted()` - At 80%+ watched or video ended

**Note:** The `viewing_events` Supabase table exists but is not currently populated. Video tracking goes to GA4 only.

### Future API Routes (Not Yet Implemented)
The following routes were planned but not yet built:
- `POST /api/update-viewing-event` - Track video progress to Supabase
- `POST /api/complete-viewing-event` - Mark video as completed
- `POST /api/track-booth-interaction` - Track booth engagement

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

**Note:** Supabase credentials are HARDCODED in `lib/supabase/client.ts` due to Next.js 15 env var caching issues (see Known Issues below).

Other vars in `.env.local`:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=
COOKIE_DOMAIN=careerlaunch.myblueprint.ca
CONTACT_EMAIL=damian.matheson@myblueprint.ca
```

## Known Issues

### Next.js 15 Environment Variable Caching
Next.js 15 aggressively caches `NEXT_PUBLIC_*` environment variables at build time into webpack chunks. If you update `.env.local` while the dev server is running, the changes will NOT take effect until you:
1. Kill ALL Node/Next.js processes (`pkill -9 -f "next"`)
2. Delete `.next` folder (`rm -rf .next`)
3. Delete node_modules cache (`rm -rf node_modules/.cache`)
4. Restart the dev server

**Current solution:** Supabase credentials are hardcoded in `lib/supabase/client.ts` to avoid this issue. This is acceptable because:
- These are public values (exposed in browser bundle anyway)
- Security is enforced via Supabase RLS policies, not key secrecy
- The anon key is designed to be public

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
