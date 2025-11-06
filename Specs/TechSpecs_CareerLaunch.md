# Career Launch Platform - Technical Specification

**Version:** 1.0  
**Date:** October 29, 2025  
**Event Launch:** December 1-5, 2025  
**Target:** Development Implementation with Claude Code

---

## Document Purpose

This technical specification translates the Career Launch PRD and UX/UI Style Guide into actionable implementation guidance for development. It provides complete architectural details, data models, feature specifications, and deployment procedures necessary to build the MVP platform.

---

# 1. Executive Summary

## 1.1 Project Overview

Career Launch is a week-long virtual career education event (December 1-5, 2025) connecting Ontario high school students with career professionals through curated video sessions. The platform enables educators to browse 25 career sessions, show videos to their classes, and automatically track student reach for reporting to school boards and sponsors.

**Core Value Proposition:** Zero-friction access to career education content with accurate student reach measurement.

**Target Users:**
- **Primary:** Ontario high school educators (teachers, guidance counselors, administrators)
- **Secondary:** School board administrators (reporting recipients)
- **Tertiary:** Session sponsors (ROI reporting recipients)

**Event Scale:**
- 20 Ontario school boards
- ~500-1000 educators
- ~40,000-100,000 students (estimated reach)
- 25 career sessions across 4 time blocks
- 5-day live event window

## 1.2 Key Technical Decisions

### Architecture Pattern: Jamstack with Server-Side Rendering
- **Frontend:** Next.js 14 (App Router) for optimal performance and SEO
- **Backend:** Supabase (PostgreSQL) for database and real-time capabilities
- **Video:** Vimeo Pro for reliable video delivery and analytics
- **Hosting:** Vercel for automatic deployments, global CDN, and edge functions

**Rationale:** Jamstack architecture provides excellent performance, scalability, and developer experience while minimizing operational complexity. Server-side rendering ensures fast initial page loads and good SEO for session discovery.

### Data Strategy: Browse-First Registration
- Public schedule page (no authentication required)
- Combined registration form at point of video watch
- Cookie-based user recognition for returning visits
- Progressive data collection (minimize friction)

**Rationale:** Traditional upfront registration creates abandonment. Showing value first (browsing sessions) increases conversion and engagement.

### Video Delivery: Embedded Vimeo Player
- Vimeo hosts all video content (trailers and full sessions)
- Embedded player with JavaScript SDK for tracking
- Adaptive bitrate streaming handled by Vimeo
- No video storage or encoding infrastructure needed

**Rationale:** Vimeo provides enterprise-grade video delivery with built-in analytics, reducing development complexity and ensuring reliable playback across devices.

## 1.3 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   Next.js    │  │   Cookie     │  │   Vimeo Player SDK   │  │
│  │   Frontend   │  │   (Email)    │  │   (Video Playback)   │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTPS
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      VERCEL HOSTING                              │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │         Next.js Server-Side Rendering (Edge)             │  │
│  │  • Page rendering                                         │  │
│  │  • API routes for form submission                        │  │
│  │  • Cookie management                                      │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ API Calls
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SUPABASE (PostgreSQL)                         │
│  ┌────────────┐  ┌────────────┐  ┌──────────────────────┐     │
│  │   Users    │  │  Sessions  │  │  ViewingEvents       │     │
│  │   Table    │  │   Table    │  │     Table            │     │
│  └────────────┘  └────────────┘  └──────────────────────┘     │
│                                                                  │
│  ┌────────────┐  ┌────────────┐                               │
│  │   Boards   │  │  Schools   │                               │
│  │   Table    │  │   Table    │                               │
│  └────────────┘  └────────────┘                               │
└─────────────────────────────────────────────────────────────────┘
                              
┌─────────────────────────────────────────────────────────────────┐
│                     VIMEO PRO ACCOUNT                            │
│  • 25 session videos (full length)                              │
│  • 25 trailer videos (1-2 min previews)                         │
│  • Embedded player with privacy controls                        │
│  • Built-in analytics (engagement, drop-off)                    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    EXTERNAL SERVICES                             │
│  • Google Analytics 4 (page views, user flows)                  │
│  • Sentry (optional error tracking)                             │
└─────────────────────────────────────────────────────────────────┘
```

## 1.4 Technology Stack Summary

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|----------|
| **Frontend Framework** | Next.js | 14.x (App Router) | React framework with SSR |
| **UI Library** | React | 18.x | Component-based UI |
| **Styling** | Tailwind CSS | 3.x | Utility-first CSS framework |
| **Form Management** | React Hook Form | 7.x | Form validation and state |
| **Database** | Supabase (PostgreSQL) | Latest | Data persistence and real-time |
| **Video Platform** | Vimeo Pro | Latest | Video hosting and streaming |
| **Video Player** | @vimeo/player | 2.x | Embedded player with SDK |
| **Hosting** | Vercel | Latest | Deployment and CDN |
| **Analytics** | Google Analytics | 4 | Web analytics |
| **Font Loading** | next/font | Built-in | Optimized font loading |
| **State Management** | React Context | Built-in | Simple global state |
| **TypeScript** | TypeScript | 5.x | Type safety |

---

# 2. System Architecture

## 2.1 Architecture Overview

### Application Architecture Pattern

**Jamstack with Server-Side Rendering (SSR)**

The application follows a modern Jamstack architecture with Next.js providing server-side rendering for optimal performance and SEO. This pattern separates the presentation layer (Next.js frontend) from the data layer (Supabase), with Vercel's edge network providing global distribution.

**Key Architectural Principles:**

1. **Server-Side Rendering First**
   - Initial page loads are server-rendered for speed and SEO
   - Critical content (session schedule) rendered on the server
   - Progressive enhancement with client-side interactions

2. **API Routes for Sensitive Operations**
   - Form submissions go through Next.js API routes
   - Cookie management handled server-side
   - Supabase credentials never exposed to client

3. **Static Generation Where Possible**
   - Session detail pages can be pre-generated (ISR)
   - Schedule page can be incrementally regenerated
   - Reduces database load during high traffic

4. **Client-Side Interactivity**
   - Video player interactions (play, pause, tracking)
   - Form validation and user feedback
   - Modal management and UI state

### Component Architecture

```
/app (Next.js App Router)
├── layout.tsx (Root layout with providers)
├── page.tsx (Schedule landing page - PUBLIC)
├── sessions/
│   └── [slug]/
│       └── page.tsx (Session detail - PUBLIC)
├── api/
│   ├── submit-registration/
│   │   └── route.ts (Handle combined form submission)
│   ├── update-viewing-event/
│   │   └── route.ts (Track video progress)
│   └── complete-viewing-event/
│       └── route.ts (Mark video completed)
└── error.tsx (Global error boundary)

/components
├── schedule/
│   ├── BlockSection.tsx (Single time block)
│   ├── SessionCard.tsx (Individual session card)
│   └── ScheduleGrid.tsx (4-block layout)
├── session/
│   ├── SessionHero.tsx (Session header)
│   ├── TrailerPlayer.tsx (Trailer embed)
│   ├── SessionDetails.tsx (Description, objectives)
│   └── WatchButton.tsx (CTA to open form)
├── forms/
│   ├── CombinedRegistrationForm.tsx (6-field form)
│   ├── FormField.tsx (Reusable field wrapper)
│   └── FormValidation.ts (Validation logic)
├── video/
│   ├── VideoPlayer.tsx (Full video with tracking)
│   └── VideoModal.tsx (Modal wrapper)
└── ui/
    ├── Button.tsx
    ├── Modal.tsx
    ├── Input.tsx
    ├── Select.tsx
    └── RadioGroup.tsx

/lib
├── supabase/
│   ├── client.ts (Browser client)
│   ├── server.ts (Server client)
│   ├── queries.ts (Database queries)
│   └── types.ts (TypeScript types from DB)
├── analytics/
│   ├── googleAnalytics.ts (GA4 tracking)
│   └── events.ts (Custom event tracking)
├── cookies/
│   └── userCookie.ts (Cookie management)
└── utils/
    ├── classSize.ts (Calculate estimated students)
    └── validation.ts (Form validation helpers)

/styles
├── globals.css (Tailwind base, design tokens)
└── design-tokens.css (CSS custom properties)

/public
├── images/
│   └── session-thumbnails/ (Session card images)
└── fonts/ (If self-hosting Museo Sans)
```

## 2.2 Data Flow Diagrams

### User Flow 1: First-Time Visitor Browsing and Watching

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. USER LANDS ON SITE                                           │
│    URL: https://careerlaunch.myblueprint.ca                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 2. NEXT.JS SSR                                                   │
│    • Server renders schedule page                               │
│    • Fetches all 25 sessions from Supabase                      │
│    • Groups sessions by block (1, 2, 3, 4)                      │
│    • No cookie check needed (public page)                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 3. USER SEES SCHEDULE                                            │
│    • 4 blocks with session cards                                │
│    • Thumbnails, titles, durations visible                      │
│    • No registration prompts                                    │
│    • Clicks session card → Navigate to detail page              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 4. SESSION DETAIL PAGE                                           │
│    • Server renders session detail                              │
│    • Embeds trailer video (Vimeo)                               │
│    • Shows description, objectives, presenter bio               │
│    • User watches trailer (no tracking)                         │
│    • Clicks "Watch with Your Class" button                      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 5. COMBINED REGISTRATION FORM MODAL                              │
│    • Modal opens client-side                                    │
│    • Shows 6 empty fields (no pre-fill)                         │
│    • Real-time validation as user types                         │
│    • "Start Video" button disabled until valid                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 6. USER SUBMITS FORM                                             │
│    POST /api/submit-registration                                │
│    Body: {                                                       │
│      email, name, boardId, schoolId, role,                      │
│      classSize, gradeLevel, sessionId                           │
│    }                                                             │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 7. API ROUTE PROCESSING                                          │
│    • Check if user exists (by email)                            │
│    • If NOT exists: INSERT into Users table                     │
│    • If exists: UPDATE user profile with new data               │
│    • INSERT into ViewingEvents table                            │
│    • Set 7-day cookie with email                                │
│    • Return: { userId, viewingEventId }                         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 8. VIDEO PLAYBACK BEGINS                                         │
│    • Modal closes                                                │
│    • Full session video loads (Vimeo embed)                     │
│    • Vimeo Player SDK initialized                               │
│    • Tracking events start firing                               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 9. VIDEO TRACKING (Every 5 seconds)                              │
│    POST /api/update-viewing-event                               │
│    Body: {                                                       │
│      viewingEventId,                                            │
│      watchDuration: seconds,                                    │
│      completionPercentage: percent                              │
│    }                                                             │
│    UPDATE ViewingEvents SET watch_duration, completion_%        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 10. VIDEO COMPLETION (If ≥80% watched)                           │
│    POST /api/complete-viewing-event                             │
│    Body: { viewingEventId }                                     │
│    UPDATE ViewingEvents SET completed = true, completed_at      │
└─────────────────────────────────────────────────────────────────┘
```

### User Flow 2: Returning Visitor (Has Cookie)

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. RETURNING USER LANDS ON SITE                                 │
│    • Cookie present: user_email=jane@example.com                │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 2. USER BROWSES AND SELECTS SESSION                              │
│    • Same public schedule browsing                              │
│    • Clicks "Watch with Your Class" on different session        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 3. COMBINED FORM WITH PRE-FILL                                   │
│    • Client detects cookie (user_email)                         │
│    • Fetch user profile from Supabase:                          │
│      GET Users WHERE email = cookie.email                       │
│    • Pre-fill all 6 fields with existing data:                  │
│      - Name ✓                                                    │
│      - Email ✓                                                   │
│      - Board ✓                                                   │
│      - School ✓                                                  │
│      - Role ✓                                                    │
│      - Last Class Size ✓                                         │
│      - Last Grade Level ✓                                        │
│    • User can modify any field                                  │
│    • "Start Video" button enabled (already valid)               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 4. USER SUBMITS (1 click if no changes)                         │
│    • Same API flow as first-time                                │
│    • Updates last_class_size, last_grade_level if changed       │
│    • Creates new ViewingEvent for this session                  │
│    • Video starts immediately                                   │
└─────────────────────────────────────────────────────────────────┘
```

## 2.3 Infrastructure Requirements

### Hosting Environment

**Vercel (Production)**
- **Plan:** Pro or Team tier (for production SLA)
- **Regions:** Auto-distributed via global edge network
- **Features Used:**
  - Automatic deployments from Git
  - Preview deployments for testing
  - Environment variable management
  - Edge functions for API routes
  - Analytics and monitoring
  - Custom domain with SSL

**Vercel Configuration:**
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1", "sfo1"],
  "env": {
    "NEXT_PUBLIC_SUPABASE_URL": "@supabase-url",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY": "@supabase-anon-key",
    "SUPABASE_SERVICE_ROLE_KEY": "@supabase-service-key",
    "NEXT_PUBLIC_GA_MEASUREMENT_ID": "@ga-measurement-id",
    "COOKIE_DOMAIN": "careerlaunch.myblueprint.ca",
    "CONTACT_EMAIL": "damian.matheson@myblueprint.ca"
  }
}
```

### Database Infrastructure

**Supabase (Cloud-Hosted PostgreSQL)**
- **Plan:** Pro tier (for production support)
- **Region:** North America (closest to target users)
- **Features Used:**
  - PostgreSQL 15
  - Row-Level Security (RLS)
  - Automatic backups
  - Connection pooling
  - Built-in CSV export
  - Real-time subscriptions (optional for admin dashboard)

**Database Specifications:**
- **Max Connections:** 100 (default, sufficient for load)
- **Storage:** 8GB (more than enough for text data)
- **Backups:** Daily automatic, 7-day retention
- **SSL:** Enforced on all connections

### Video Infrastructure

**Vimeo Pro Account**
- **Plan:** Vimeo Pro or Business
- **Storage:** ~50GB for 50 videos (25 sessions + 25 trailers)
- **Privacy Settings:**
  - Domain-level privacy (only embed on careerlaunch.myblueprint.ca)
  - Disable Vimeo.com viewing
  - Disable download buttons
  - Hide "Watch Later" and social sharing
- **Player Customization:**
  - Custom color: #0092FF (myBlueprint blue)
  - No Vimeo branding (Pro/Business feature)
  - Custom controls layout

**Video Specifications:**
- **Resolution:** 1080p (Full HD)
- **Encoding:** Adaptive bitrate (Vimeo handles automatically)
- **Format:** MP4/H.264 (uploaded by content team)
- **Duration:** Trailers (1-2 min), Full sessions (30-45 min)

### CDN and Asset Delivery

**Vercel Edge Network**
- Automatic CDN for Next.js static assets
- Image optimization via `next/image`
- Font optimization via `next/font`

**Performance Targets:**
- **TTFB (Time to First Byte):** <200ms
- **FCP (First Contentful Paint):** <1.5s
- **LCP (Largest Contentful Paint):** <2.5s
- **CLS (Cumulative Layout Shift):** <0.1

### Domain Configuration

**Primary Domain:** `careerlaunch.myblueprint.ca`

**DNS Records:**
```
Type    Name                    Value                           TTL
A       careerlaunch            76.76.21.21 (Vercel IP)        3600
AAAA    careerlaunch            [Vercel IPv6]                   3600
CNAME   www.careerlaunch        cname.vercel-dns.com           3600
TXT     _vercel                 [verification code]             3600
```

**SSL Certificate:** Automatic via Vercel (Let's Encrypt)

---

# 3. Feature Specifications

The MVP includes 5 P0 (Priority 0) features that are launch blockers. All features are built with the browse-first registration approach.

## 3.1 Feature 1: Public Schedule Landing Page

### Feature Overview

**User Story:**
> As a visitor, I want to immediately browse all 25 career sessions organized by time block, so that I can explore content and find relevant sessions for my students without any registration barriers.

**Priority:** P0 - Must Have  
**Development Estimate:** 3 days  
**Dependencies:** Sessions table populated in Supabase

### Technical Requirements

**URL:** `/` (homepage)  
**Rendering:** Server-Side Rendering (SSR)  
**Authentication:** None required (public page)

### Implementation Approach

**1. Data Fetching (Server Component)**

```typescript
// app/page.tsx
import { getSessionsByBlock } from '@/lib/supabase/queries';

export default async function SchedulePage() {
  // Fetch all sessions grouped by block (server-side)
  const sessionsByBlock = await getSessionsByBlock();
  
  return (
    <main>
      <Hero />
      <ScheduleGrid sessionsByBlock={sessionsByBlock} />
    </main>
  );
}

// Revalidate every hour during event week
export const revalidate = 3600;
```

**2. Database Query**

```typescript
// lib/supabase/queries.ts
import { createServerClient } from '@/lib/supabase/server';

export async function getSessionsByBlock() {
  const supabase = createServerClient();
  
  const { data, error } = await supabase
    .from('sessions')
    .select('*')
    .order('block_number', { ascending: true })
    .order('title', { ascending: true });
  
  if (error) throw error;
  
  // Group by block number
  const grouped = data.reduce((acc, session) => {
    const block = session.block_number;
    if (!acc[block]) acc[block] = [];
    acc[block].push(session);
    return acc;
  }, {} as Record<number, Session[]>);
  
  return grouped;
}
```

**3. UI Components**

```typescript
// components/schedule/ScheduleGrid.tsx
'use client';

import { BlockSection } from './BlockSection';
import type { Session } from '@/lib/supabase/types';

interface Props {
  sessionsByBlock: Record<number, Session[]>;
}

const BLOCK_TIMES = {
  1: '8:30 AM - 9:50 AM',
  2: '10:00 AM - 11:20 AM',
  3: '12:30 PM - 1:50 PM',
  4: '2:00 PM - 3:20 PM'
};

export function ScheduleGrid({ sessionsByBlock }: Props) {
  return (
    <div className="container mx-auto px-4 py-10">
      {[1, 2, 3, 4].map(blockNum => (
        <BlockSection
          key={blockNum}
          blockNumber={blockNum}
          timeRange={BLOCK_TIMES[blockNum]}
          sessions={sessionsByBlock[blockNum] || []}
        />
      ))}
    </div>
  );
}
```

```typescript
// components/schedule/BlockSection.tsx
import { SessionCard } from './SessionCard';
import type { Session } from '@/lib/supabase/types';

interface Props {
  blockNumber: number;
  timeRange: string;
  sessions: Session[];
}

export function BlockSection({ blockNumber, timeRange, sessions }: Props) {
  return (
    <section className="mb-20">
      {/* Block Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-black text-myb-navy mb-2">
          Block {blockNumber}
        </h2>
        <p className="text-xl text-myb-neutral-4">
          {timeRange}
        </p>
      </div>
      
      {/* Session Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sessions.map(session => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>
    </section>
  );
}
```

```typescript
// components/schedule/SessionCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Session } from '@/lib/supabase/types';

interface Props {
  session: Session;
}

export function SessionCard({ session }: Props) {
  return (
    <Link 
      href={`/sessions/${session.slug}`}
      className="group block"
    >
      <div className="
        bg-white rounded-lg overflow-hidden 
        shadow-md hover:shadow-xl
        transition-all duration-300
        border border-myb-neutral-2
      ">
        {/* Thumbnail */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={session.thumbnail_url}
            alt={session.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-black text-myb-navy mb-2 line-clamp-2">
            {session.title}
          </h3>
          
          <p className="text-sm text-myb-neutral-4 mb-4 line-clamp-2">
            {session.description}
          </p>
          
          {/* Metadata */}
          <div className="flex items-center justify-between text-xs text-myb-neutral-4">
            <span>{session.duration} min</span>
            <span>{session.grade_level}</span>
          </div>
          
          {/* Presenter */}
          <div className="mt-4 pt-4 border-t border-myb-neutral-2">
            <p className="text-sm font-medium text-myb-navy">
              {session.presenter_name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
```

### User Flow

```
1. User lands on homepage
   ↓
2. Server fetches sessions from Supabase (SSR)
   ↓
3. Page renders with 4 blocks (8-10 sessions each)
   ↓
4. User scrolls through sessions
   ↓
5. User clicks session card
   ↓
6. Navigate to /sessions/[slug]
```

### Performance Considerations

- **Image Optimization:** Use `next/image` with priority for above-fold cards
- **Lazy Loading:** Images below fold load lazily
- **ISR (Incremental Static Regeneration):** Revalidate every hour during event
- **Prefetching:** Session detail pages prefetch on hover (Next.js default)

### Error Handling

**Database Connection Failure:**
```typescript
export default async function SchedulePage() {
  try {
    const sessionsByBlock = await getSessionsByBlock();
    return <ScheduleGrid sessionsByBlock={sessionsByBlock} />;
  } catch (error) {
    return <ErrorState message="Unable to load sessions. Please try again." />;
  }
}
```

### Acceptance Criteria

- [ ] Homepage loads in <2 seconds on 3G connection
- [ ] All 25 sessions display correctly grouped by block
- [ ] Session cards show: thumbnail, title, description (truncated), duration, grade level, presenter
- [ ] Cards are clickable and navigate to session detail page
- [ ] Responsive layout: 1 column (mobile), 3 columns (tablet), 4 columns (desktop)
- [ ] Images lazy load below fold
- [ ] Hover state adds shadow and scales thumbnail
- [ ] No authentication required to view page
- [ ] Page works with JavaScript disabled (progressive enhancement)
- [ ] Lighthouse score ≥90

---

## 3.2 Feature 2: Session Detail Pages

### Feature Overview

**User Story:**
> As a visitor, I want to view detailed information about a career session including a preview trailer, so that I can decide if it's relevant for my students before showing the full video.

**Priority:** P0 - Must Have  
**Development Estimate:** 2 days  
**Dependencies:** Sessions table, Vimeo videos uploaded

### Technical Requirements

**URL:** `/sessions/[slug]`  
**Rendering:** Server-Side Rendering (SSR) with ISR  
**Authentication:** None required (public page)

### Implementation Approach

**1. Dynamic Route with SSR**

```typescript
// app/sessions/[slug]/page.tsx
import { getSessionBySlug } from '@/lib/supabase/queries';
import { notFound } from 'next/navigation';
import { SessionHero } from '@/components/session/SessionHero';
import { TrailerPlayer } from '@/components/session/TrailerPlayer';
import { SessionDetails } from '@/components/session/SessionDetails';
import { WatchButton } from '@/components/session/WatchButton';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const session = await getSessionBySlug(params.slug);
  if (!session) return {};
  
  return {
    title: `${session.title} | Career Launch`,
    description: session.description.substring(0, 160),
    openGraph: {
      title: session.title,
      description: session.description,
      images: [session.thumbnail_url],
    }
  };
}

export default async function SessionPage({ params }: { params: { slug: string } }) {
  const session = await getSessionBySlug(params.slug);
  
  if (!session) {
    notFound();
  }
  
  return (
    <main>
      <SessionHero session={session} />
      <TrailerPlayer trailerUrl={session.trailer_url} />
      <SessionDetails session={session} />
      <WatchButton sessionId={session.id} />
    </main>
  );
}

// Revalidate every hour
export const revalidate = 3600;

// Generate static params for all sessions at build time
export async function generateStaticParams() {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('sessions')
    .select('slug');
  
  return data?.map(session => ({
    slug: session.slug
  })) || [];
}
```

**2. Database Query**

```typescript
// lib/supabase/queries.ts
export async function getSessionBySlug(slug: string) {
  const supabase = createServerClient();
  
  const { data, error } = await supabase
    .from('sessions')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error('Error fetching session:', error);
    return null;
  }
  
  return data;
}
```

**3. UI Components**

```typescript
// components/session/SessionHero.tsx
import Image from 'next/image';
import type { Session } from '@/lib/supabase/types';

interface Props {
  session: Session;
}

export function SessionHero({ session }: Props) {
  return (
    <section className="relative h-96 bg-myb-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={session.thumbnail_url}
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            {session.title}
          </h1>
          
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5" />
              {session.duration} minutes
            </span>
            <span className="flex items-center gap-2">
              <UserGroupIcon className="w-5 h-5" />
              Grades {session.grade_level}
            </span>
            <span className="flex items-center gap-2">
              <TagIcon className="w-5 h-5" />
              {session.industry}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
```

```typescript
// components/session/TrailerPlayer.tsx
'use client';

import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

interface Props {
  trailerUrl: string;
}

export function TrailerPlayer({ trailerUrl }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const player = new Player(containerRef.current, {
      url: trailerUrl,
      responsive: true,
      color: '0092FF', // myBlueprint blue
    });
    
    // Optional: Track trailer views (not required for MVP)
    player.on('play', () => {
      // Could send to analytics if needed
    });
    
    return () => {
      player.destroy();
    };
  }, [trailerUrl]);
  
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-myb-navy mb-6">
          Session Preview
        </h2>
        
        <div 
          ref={containerRef}
          className="aspect-video rounded-lg overflow-hidden shadow-lg"
        />
        
        <p className="mt-4 text-sm text-myb-neutral-4">
          Watch the 2-minute preview to see what this session covers.
        </p>
      </div>
    </section>
  );
}
```

```typescript
// components/session/SessionDetails.tsx
import type { Session } from '@/lib/supabase/types';

interface Props {
  session: Session;
}

export function SessionDetails({ session }: Props) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Main Content - 2/3 width */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black text-myb-navy mb-6">
            About This Session
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-myb-neutral-5 leading-relaxed">
              {session.description}
            </p>
          </div>
          
          {/* Learning Objectives */}
          {session.learning_objectives && (
            <div className="mt-8">
              <h3 className="text-2xl font-black text-myb-navy mb-4">
                What Students Will Learn
              </h3>
              <ul className="space-y-3">
                {session.learning_objectives.map((objective, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-myb-primary-blue flex-shrink-0 mt-1" />
                    <span className="text-myb-neutral-5">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Sidebar - 1/3 width */}
        <div>
          {/* Presenter Card */}
          <div className="bg-myb-off-white rounded-lg p-6">
            <h3 className="text-xl font-black text-myb-navy mb-4">
              Presented By
            </h3>
            
            {session.presenter_photo_url && (
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={session.presenter_photo_url}
                  alt={session.presenter_name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            )}
            
            <p className="font-bold text-myb-navy mb-2">
              {session.presenter_name}
            </p>
            
            {session.presenter_bio && (
              <p className="text-sm text-myb-neutral-5">
                {session.presenter_bio}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
```

```typescript
// components/session/WatchButton.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CombinedRegistrationModal } from '@/components/forms/CombinedRegistrationModal';

interface Props {
  sessionId: string;
}

export function WatchButton({ sessionId }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <section className="bg-myb-primary-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Ready to Share This with Your Class?
          </h2>
          
          <Button
            size="lg"
            variant="secondary"
            onClick={() => setIsModalOpen(true)}
          >
            Watch with Your Class
          </Button>
        </div>
      </section>
      
      <CombinedRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sessionId={sessionId}
      />
    </>
  );
}
```

### User Flow

```
1. User clicks session card from schedule
   ↓
2. Navigate to /sessions/[slug]
   ↓
3. Server renders session detail page (SSR)
   ↓
4. User sees: hero image, title, metadata
   ↓
5. Trailer video loads (Vimeo embed)
   ↓
6. User watches trailer (optional)
   ↓
7. User scrolls to read description, objectives, presenter bio
   ↓
8. User clicks "Watch with Your Class" button
   ↓
9. Combined Registration Modal opens
```

### Error Handling

**Session Not Found:**
```typescript
// app/sessions/[slug]/not-found.tsx
export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-black text-myb-navy mb-4">
        Session Not Found
      </h1>
      <p className="text-myb-neutral-5 mb-8">
        This session doesn't exist or may have been removed.
      </p>
      <Link href="/" className="text-myb-primary-blue hover:underline">
        ← Back to Schedule
      </Link>
    </div>
  );
}
```

### Acceptance Criteria

- [ ] Session detail page loads in <1.5 seconds
- [ ] Dynamic route works for all 25 session slugs
- [ ] Hero section displays title, thumbnail, duration, grade level, industry
- [ ] Trailer video embeds and plays correctly
- [ ] Description, learning objectives, and presenter bio display correctly
- [ ] "Watch with Your Class" button is prominent and accessible
- [ ] Clicking button opens Combined Registration Modal
- [ ] Page is responsive on all screen sizes
- [ ] SEO meta tags are correct (title, description, OG image)
- [ ] 404 page shows for invalid slugs
- [ ] Lighthouse score ≥90

---

## 3.3 Feature 3: Combined Registration Form

### Feature Overview

**User Story:**
> As a visitor ready to watch a video, I want to provide my profile information and class context in a single form, so that I can start watching immediately without multiple steps.

**Priority:** P0 - Must Have  
**Development Estimate:** 4 days  
**Dependencies:** Users table, ViewingEvents table, cookie management

### Technical Requirements

**Trigger:** Clicking "Watch with Your Class" button  
**Display:** Modal overlay (focus trap, backdrop)  
**Submission:** POST to `/api/submit-registration`  
**Form Fields:** 6 required fields  
**Validation:** Real-time client-side + server-side

### Implementation Approach

**1. Modal Component**

```typescript
// components/forms/CombinedRegistrationModal.tsx
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '@/components/ui/Modal';
import { FormField } from './FormField';
import { Button } from '@/components/ui/Button';
import { getUserFromCookie } from '@/lib/cookies/userCookie';
import { submitRegistration } from '@/lib/api/registration';
import type { RegistrationFormData } from '@/lib/types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  sessionId: string;
  onSuccess: (viewingEventId: string) => void;
}

export function CombinedRegistrationModal({ isOpen, onClose, sessionId, onSuccess }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors, isValid }, setValue, watch } = useForm<RegistrationFormData>({
    mode: 'onChange', // Real-time validation
  });
  
  // Pre-fill form for returning users
  useEffect(() => {
    if (isOpen) {
      const existingUser = getUserFromCookie();
      if (existingUser) {
        // Fetch user profile from database
        fetchUserProfile(existingUser.email).then(profile => {
          if (profile) {
            setValue('name', profile.name);
            setValue('email', profile.email);
            setValue('boardId', profile.board_id);
            setValue('schoolId', profile.school_id);
            setValue('role', profile.role);
            setValue('classSize', profile.last_class_size);
            setValue('gradeLevel', profile.last_grade_level);
          }
        });
      }
    }
  }, [isOpen, setValue]);
  
  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const result = await submitRegistration({
        ...data,
        sessionId
      });
      
      if (result.success) {
        onSuccess(result.viewingEventId);
        onClose();
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Unable to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Watch with Your Class">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <FormField
          label="Your Name"
          error={errors.name?.message}
          required
        >
          <input
            type="text"
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })}
            placeholder="Jane Smith"
            className="input"
          />
        </FormField>
        
        {/* Email */}
        <FormField
          label="School Email Address"
          error={errors.email?.message}
          required
        >
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email'
              }
            })}
            placeholder="jane.smith@board.ca"
            className="input"
          />
        </FormField>
        
        {/* Board Selection */}
        <FormField
          label="School Board"
          error={errors.boardId?.message}
          required
        >
          <select
            {...register('boardId', { required: 'Please select your board' })}
            className="select"
          >
            <option value="">Select your board...</option>
            {ONTARIO_BOARDS.map(board => (
              <option key={board.id} value={board.id}>
                {board.name}
              </option>
            ))}
          </select>
        </FormField>
        
        {/* School Selection (dynamic based on board) */}
        <FormField
          label="School"
          error={errors.schoolId?.message}
          required
        >
          <select
            {...register('schoolId', { required: 'Please select your school' })}
            className="select"
            disabled={!watch('boardId')}
          >
            <option value="">Select your school...</option>
            {getSchoolsForBoard(watch('boardId')).map(school => (
              <option key={school.id} value={school.id}>
                {school.name}
              </option>
            ))}
            <option value="not-listed">My school isn't listed</option>
          </select>
        </FormField>
        
        {/* Role */}
        <FormField
          label="Your Role"
          error={errors.role?.message}
          required
        >
          <div className="space-y-2">
            {['Guidance Counsellor', 'Subject Teacher', 'Administrator', 'Other'].map(role => (
              <label key={role} className="radio-option">
                <input
                  type="radio"
                  {...register('role', { required: 'Please select your role' })}
                  value={role}
                />
                <span>{role}</span>
              </label>
            ))}
          </div>
        </FormField>
        
        {/* Class Size */}
        <FormField
          label="Class Size for This Viewing"
          error={errors.classSize?.message}
          required
        >
          <div className="grid grid-cols-3 gap-3">
            {['1-20', '21-30', '31+'].map(size => (
              <label key={size} className="radio-card">
                <input
                  type="radio"
                  {...register('classSize', { required: 'Please select class size' })}
                  value={size}
                />
                <span>{size}</span>
              </label>
            ))}
          </div>
        </FormField>
        
        {/* Grade Level */}
        <FormField
          label="Grade Level(s)"
          error={errors.gradeLevel?.message}
          required
        >
          <div className="grid grid-cols-3 gap-3">
            {['9-10', '11-12', 'Mixed'].map(grade => (
              <label key={grade} className="radio-card">
                <input
                  type="radio"
                  {...register('gradeLevel', { required: 'Please select grade level' })}
                  value={grade}
                />
                <span>Grade {grade}</span>
              </label>
            ))}
          </div>
        </FormField>
        
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-800">
            {error}
          </div>
        )}
        
        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          fullWidth
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
        >
          {isSubmitting ? 'Starting Video...' : 'Start Video'}
        </Button>
        
        <p className="text-xs text-myb-neutral-4 text-center">
          Your information helps us report student reach to school boards and sponsors.
        </p>
      </form>
    </Modal>
  );
}
```

**2. API Route for Form Submission**

```typescript
// app/api/submit-registration/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';
import { setUserCookie } from '@/lib/cookies/userCookie';
import { calculateEstimatedStudents } from '@/lib/utils/classSize';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, boardId, schoolId, role, classSize, gradeLevel, sessionId } = body;
    
    // Validate required fields
    if (!email || !name || !boardId || !schoolId || !role || !classSize || !gradeLevel || !sessionId) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const supabase = createServerClient();
    
    // Check if user exists
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email.toLowerCase())
      .single();
    
    let userId: string;
    
    if (existingUser) {
      // Update existing user
      const { data: updatedUser, error: updateError } = await supabase
        .from('users')
        .update({
          name,
          board_id: boardId,
          school_id: schoolId,
          role,
          last_class_size: classSize,
          last_grade_level: gradeLevel,
          last_login: new Date().toISOString()
        })
        .eq('id', existingUser.id)
        .select('id')
        .single();
      
      if (updateError) throw updateError;
      userId = updatedUser.id;
    } else {
      // Create new user
      const { data: newUser, error: createError } = await supabase
        .from('users')
        .insert({
          email: email.toLowerCase(),
          name,
          board_id: boardId,
          school_id: schoolId,
          role,
          last_class_size: classSize,
          last_grade_level: gradeLevel,
          registered_at: new Date().toISOString(),
          last_login: new Date().toISOString()
        })
        .select('id')
        .single();
      
      if (createError) throw createError;
      userId = newUser.id;
    }
    
    // Create viewing event
    const estimatedStudents = calculateEstimatedStudents(classSize);
    
    const { data: viewingEvent, error: eventError } = await supabase
      .from('viewing_events')
      .insert({
        user_id: userId,
        session_id: sessionId,
        class_size: classSize,
        grade_level: gradeLevel,
        estimated_students: estimatedStudents,
        started_at: new Date().toISOString()
      })
      .select('id')
      .single();
    
    if (eventError) throw eventError;
    
    // Set cookie for future visits
    const response = NextResponse.json({
      success: true,
      userId,
      viewingEventId: viewingEvent.id
    });
    
    setUserCookie(response, email.toLowerCase());
    
    return response;
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

**3. Cookie Management**

```typescript
// lib/cookies/userCookie.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'career_launch_user';
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

export function setUserCookie(response: NextResponse, email: string) {
  response.cookies.set(COOKIE_NAME, email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/'
  });
}

export function getUserFromCookie(): { email: string } | null {
  const cookieStore = cookies();
  const userCookie = cookieStore.get(COOKIE_NAME);
  
  if (!userCookie?.value) {
    return null;
  }
  
  return { email: userCookie.value };
}

export function clearUserCookie(response: NextResponse) {
  response.cookies.delete(COOKIE_NAME);
}
```

**4. Helper Functions**

```typescript
// lib/utils/classSize.ts
export function calculateEstimatedStudents(classSize: string): number {
  const ranges: Record<string, number> = {
    '1-20': 10,
    '21-30': 25,
    '31+': 40
  };
  
  return ranges[classSize] || 25; // Default to 25 if unknown
}
```

```typescript
// lib/api/registration.ts
export async function fetchUserProfile(email: string) {
  const response = await fetch(`/api/user-profile?email=${encodeURIComponent(email)}`);
  if (!response.ok) return null;
  return response.json();
}

export async function submitRegistration(data: RegistrationFormData & { sessionId: string }) {
  const response = await fetch('/api/submit-registration', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  
  return response.json();
}
```

### User Flow

```
FIRST-TIME USER:
1. Clicks "Watch with Your Class"
   ↓
2. Modal opens with empty form
   ↓
3. Types in all 6 fields with real-time validation
   ↓
4. "Start Video" button enables when form is valid
   ↓
5. Clicks "Start Video"
   ↓
6. POST to /api/submit-registration
   ↓
7. Server: CREATE User + CREATE ViewingEvent + SET Cookie
   ↓
8. Response: { userId, viewingEventId }
   ↓
9. Modal closes, video starts playing

RETURNING USER:
1. Clicks "Watch with Your Class"
   ↓
2. Client detects cookie (has email)
   ↓
3. Fetch user profile from database
   ↓
4. Modal opens with all fields pre-filled
   ↓
5. User can modify any field or click "Start Video" immediately
   ↓
6. Clicks "Start Video" (1 click if no changes)
   ↓
7. POST to /api/submit-registration
   ↓
8. Server: UPDATE User + CREATE ViewingEvent
   ↓
9. Modal closes, video starts playing
```

### Validation Rules

**Client-Side (React Hook Form):**
- **Name:** Required, min 2 characters
- **Email:** Required, valid email format
- **Board:** Required, must select from dropdown
- **School:** Required, must select from dropdown (or "not listed")
- **Role:** Required, one of 4 options
- **Class Size:** Required, one of 3 options
- **Grade Level:** Required, one of 3 options

**Server-Side:**
- All fields present and non-empty
- Email matches regex pattern
- Board ID exists in boards table
- School ID exists in schools table (or is "not-listed")

### Error Handling

**Network Error:**
```typescript
// Show error message in modal
setError('Unable to connect. Please check your internet connection.');
```

**Database Error:**
```typescript
// Log error server-side, show generic message to user
console.error('Database error:', error);
return NextResponse.json(
  { success: false, error: 'Something went wrong. Please try again.' },
  { status: 500 }
);
```

**Critical Failure (Database Down):**
```typescript
// Show modal with contact information
<ErrorModal isOpen={true}>
  <p>We're experiencing technical difficulties.</p>
  <p>Please email <a href="mailto:damian.matheson@myblueprint.ca">
    damian.matheson@myblueprint.ca
  </a> for assistance.</p>
</ErrorModal>
```

### Acceptance Criteria

- [ ] Modal opens when "Watch with Your Class" is clicked
- [ ] Modal is accessible (focus trap, Esc to close)
- [ ] All 6 fields are present and labeled clearly
- [ ] Real-time validation provides helpful error messages
- [ ] School dropdown filters based on selected board
- [ ] "Start Video" button is disabled until form is valid
- [ ] Form submission creates User (or updates existing)
- [ ] Form submission creates ViewingEvent
- [ ] 7-day cookie is set with user email
- [ ] Returning users see pre-filled form
- [ ] Pre-filled form allows modifications
- [ ] Form works on all major browsers (Chrome, Firefox, Safari, Edge)
- [ ] Form is responsive on mobile devices
- [ ] Error messages are clear and actionable
- [ ] Loading state shows during submission
- [ ] Success triggers video playback

---

## 3.4 Feature 4: Video Player with Tracking

### Feature Overview

**User Story:**
> As an educator, I want to show the full career session video to my class and have my viewing automatically tracked, so that student reach is accurately measured without any manual reporting.

**Priority:** P0 - Must Have  
**Development Estimate:** 3 days  
**Dependencies:** ViewingEvents table, Vimeo Player SDK

### Technical Requirements

**Trigger:** Successful form submission  
**Display:** Full-screen or large embedded player  
**Tracking:** Progress updates every 5 seconds  
**Completion:** Mark complete at 80% watched  
**API Endpoints:** `/api/update-viewing-event`, `/api/complete-viewing-event`

### Implementation Approach

**1. Video Player Component**

```typescript
// components/video/VideoPlayer.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import type { VimeoPlayer } from '@vimeo/player';

interface Props {
  videoUrl: string;
  viewingEventId: string;
  onComplete?: () => void;
}

export function VideoPlayer({ videoUrl, viewingEventId, onComplete }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<VimeoPlayer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!containerRef.current || !viewingEventId) return;
    
    try {
      // Initialize Vimeo player
      const player = new Player(containerRef.current, {
        url: videoUrl,
        responsive: true,
        color: '0092FF', // myBlueprint blue
        byline: false,
        portrait: false,
        title: false
      });
      
      playerRef.current = player;
      
      // Track when video starts playing
      player.on('play', () => {
        setIsLoading(false);
        trackEvent('video_play', { viewingEventId });
      });
      
      // Track progress every 5 seconds
      let lastUpdate = 0;
      player.on('timeupdate', async (data) => {
        const now = Date.now();
        
        // Throttle updates to every 5 seconds
        if (now - lastUpdate < 5000) return;
        lastUpdate = now;
        
        const percentage = (data.seconds / data.duration) * 100;
        
        // Update viewing event
        await updateViewingProgress(viewingEventId, {
          watchDuration: Math.floor(data.seconds),
          completionPercentage: Math.floor(percentage)
        });
        
        // Check if should mark complete (80% threshold)
        if (percentage >= 80) {
          await markViewingComplete(viewingEventId);
        }
      });
      
      // Track completion
      player.on('ended', async () => {
        await markViewingComplete(viewingEventId);
        trackEvent('video_complete', { viewingEventId });
        onComplete?.();
      });
      
      // Handle errors
      player.on('error', (error) => {
        console.error('Vimeo player error:', error);
        setError('Unable to load video. Please try again.');
      });
      
      player.ready().then(() => {
        setIsLoading(false);
      });
      
    } catch (err) {
      console.error('Failed to initialize player:', err);
      setError('Unable to load video player.');
    }
    
    // Cleanup
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoUrl, viewingEventId, onComplete]);
  
  if (error) {
    return (
      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-red-600 mb-4">{error}</p>
          <p className="text-sm text-gray-600">
            Please email{' '}
            <a href="mailto:damian.matheson@myblueprint.ca" className="text-myb-primary-blue">
              damian.matheson@myblueprint.ca
            </a>{' '}
            for assistance.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded-lg">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-myb-primary-blue border-t-transparent" />
        </div>
      )}
      
      <div 
        ref={containerRef}
        className="aspect-video rounded-lg overflow-hidden shadow-xl"
      />
    </div>
  );
}
```

**2. Video Modal Wrapper**

```typescript
// components/video/VideoModal.tsx
'use client';

import { useEffect } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  sessionTitle: string;
  viewingEventId: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, sessionTitle, viewingEventId }: Props) {
  // Prevent body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-myb-navy truncate pr-4">
            {sessionTitle}
          </h2>
          
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Video Player */}
        <div className="p-4 bg-black">
          <VideoPlayer
            videoUrl={videoUrl}
            viewingEventId={viewingEventId}
            onComplete={() => {
              // Optional: Show completion message
              console.log('Video completed!');
            }}
          />
        </div>
      </div>
    </div>
  );
}
```

**3. API Routes for Tracking**

```typescript
// app/api/update-viewing-event/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const { viewingEventId, watchDuration, completionPercentage } = await request.json();
    
    if (!viewingEventId || watchDuration === undefined || completionPercentage === undefined) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const supabase = createServerClient();
    
    const { error } = await supabase
      .from('viewing_events')
      .update({
        watch_duration: watchDuration,
        completion_percentage: completionPercentage
      })
      .eq('id', viewingEventId);
    
    if (error) throw error;
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Update viewing event error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

```typescript
// app/api/complete-viewing-event/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const { viewingEventId } = await request.json();
    
    if (!viewingEventId) {
      return NextResponse.json(
        { success: false, error: 'Missing viewingEventId' },
        { status: 400 }
      );
    }
    
    const supabase = createServerClient();
    
    // Only update if not already marked complete
    const { error } = await supabase
      .from('viewing_events')
      .update({
        completed: true,
        completed_at: new Date().toISOString()
      })
      .eq('id', viewingEventId)
      .eq('completed', false); // Only update if not already complete
    
    if (error) throw error;
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Complete viewing event error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

**4. Integration with Registration Form**

```typescript
// Update CombinedRegistrationModal.tsx to handle successful submission

const [videoState, setVideoState] = useState<{
  isPlaying: boolean;
  videoUrl: string;
  sessionTitle: string;
  viewingEventId: string;
} | null>(null);

const onSubmit = async (data: RegistrationFormData) => {
  // ... existing submission logic ...
  
  if (result.success) {
    // Get session details for video
    const session = await getSessionById(sessionId);
    
    setVideoState({
      isPlaying: true,
      videoUrl: session.full_video_url,
      sessionTitle: session.title,
      viewingEventId: result.viewingEventId
    });
    
    onClose(); // Close form modal
  }
};

// Render video modal after form
return (
  <>
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Form content */}
    </Modal>
    
    {videoState && (
      <VideoModal
        isOpen={videoState.isPlaying}
        onClose={() => setVideoState(null)}
        videoUrl={videoState.videoUrl}
        sessionTitle={videoState.sessionTitle}
        viewingEventId={videoState.viewingEventId}
      />
    )}
  </>
);
```

**5. Helper Functions**

```typescript
// lib/api/tracking.ts
export async function updateViewingProgress(
  viewingEventId: string,
  progress: { watchDuration: number; completionPercentage: number }
) {
  try {
    const response = await fetch('/api/update-viewing-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        viewingEventId,
        ...progress
      })
    });
    
    if (!response.ok) {
      console.error('Failed to update viewing progress');
    }
  } catch (error) {
    // Fail silently - don't interrupt video playback
    console.error('Tracking error:', error);
  }
}

export async function markViewingComplete(viewingEventId: string) {
  try {
    const response = await fetch('/api/complete-viewing-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ viewingEventId })
    });
    
    if (!response.ok) {
      console.error('Failed to mark viewing complete');
    }
  } catch (error) {
    console.error('Completion tracking error:', error);
  }
}
```

### User Flow

```
1. User submits Combined Registration Form successfully
   ↓
2. API returns viewingEventId
   ↓
3. Form modal closes
   ↓
4. Video modal opens with full session video
   ↓
5. Vimeo Player SDK initializes
   ↓
6. Video starts playing
   ↓
7. Every 5 seconds:
   - Calculate watch_duration (total seconds watched)
   - Calculate completion_percentage (% of video watched)
   - POST to /api/update-viewing-event
   - UPDATE ViewingEvents table
   ↓
8. When completionPercentage >= 80%:
   - POST to /api/complete-viewing-event
   - UPDATE ViewingEvents SET completed = true, completed_at
   ↓
9. When video ends (100%):
   - Ensure marked as complete
   - Track completion event in analytics
   ↓
10. User can close modal or watch another session
```

### Tracking Logic

**Progress Tracking (Every 5 seconds):**
```typescript
{
  viewingEventId: "uuid",
  watchDuration: 123, // Total seconds watched
  completionPercentage: 42 // % of video watched (0-100)
}
```

**Completion Logic:**
```typescript
// Mark as "completed" when user watches ≥80% of video
if (completionPercentage >= 80) {
  markViewingComplete(viewingEventId);
}

// Rationale: 80% threshold means educator showed most of the content
// Example: 32 minutes of a 40-minute video = meaningful engagement
```

**Database Updates:**
```sql
-- Progress updates (every 5 seconds)
UPDATE viewing_events
SET 
  watch_duration = 123,
  completion_percentage = 42
WHERE id = 'viewing-event-uuid';

-- Completion (at 80% threshold)
UPDATE viewing_events
SET 
  completed = true,
  completed_at = NOW()
WHERE id = 'viewing-event-uuid'
  AND completed = false; -- Only update once
```

### Error Handling

**Video Loading Failure:**
```typescript
// Show error message with contact info
<div className="text-center p-8">
  <p className="text-red-600 mb-4">Unable to load video.</p>
  <p className="text-sm text-gray-600">
    Please email{' '}
    <a href="mailto:damian.matheson@myblueprint.ca">
      damian.matheson@myblueprint.ca
    </a>{' '}
    for assistance.
  </p>
</div>
```

**Tracking API Failure:**
```typescript
// Fail silently - don't interrupt video playback
try {
  await updateViewingProgress(viewingEventId, progress);
} catch (error) {
  console.error('Tracking error:', error);
  // Video continues playing
}
```

**Network Issues During Playback:**
- Vimeo handles buffering and adaptive bitrate automatically
- Player shows buffering indicator
- Video resumes when connection restored

### Acceptance Criteria

- [ ] Video player loads after successful form submission
- [ ] Video plays in modal with Vimeo controls
- [ ] Progress tracking updates every 5 seconds
- [ ] Completion marked when ≥80% watched
- [ ] Completion marked when video ends (100%)
- [ ] Player works on all major browsers (Chrome, Firefox, Safari, Edge)
- [ ] Player works on mobile devices (iOS Safari, Android Chrome)
- [ ] Modal closes when X button clicked
- [ ] Modal closes when Escape key pressed
- [ ] Tracking failures don't interrupt playback
- [ ] Error messages provide contact information
- [ ] Video player is accessible (keyboard navigation)
- [ ] Loading state shows while video initializes
- [ ] Player uses myBlueprint brand color (#0092FF)

---

## 3.5 Feature 5: Viewing Event Tracking & Data Export

### Feature Overview

**User Story:**
> As a school board administrator, I want accurate data on which educators showed which sessions to how many students, so that I can report on program reach and justify continued investment.

**Priority:** P0 - Must Have  
**Development Estimate:** 2 days  
**Dependencies:** ViewingEvents table populated

### Technical Requirements

**Data Export:** Manual CSV export from Supabase dashboard  
**Post-Event:** Export after December 5, 2025  
**Format:** CSV with all relevant fields  
**Recipients:** School boards, sponsors, internal team

### Implementation Approach

Since this is a manual export, the primary implementation is ensuring the database schema captures all necessary data and providing query templates for generating reports.

**1. Database Schema (Already Defined)**

The `viewing_events` table captures everything needed:
```sql
CREATE TABLE viewing_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  session_id UUID NOT NULL REFERENCES sessions(id),
  class_size TEXT NOT NULL,
  grade_level TEXT NOT NULL,
  estimated_students INTEGER NOT NULL,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  watch_duration INTEGER DEFAULT 0,
  completion_percentage INTEGER DEFAULT 0 CHECK (completion_percentage BETWEEN 0 AND 100),
  completed BOOLEAN DEFAULT FALSE,
  device_type TEXT,
  browser_type TEXT
);
```

**2. Reporting Queries**

```sql
-- QUERY 1: Overall Event Summary
SELECT 
  COUNT(DISTINCT user_id) AS total_educators,
  COUNT(DISTINCT session_id) AS sessions_watched,
  COUNT(*) AS total_viewing_events,
  SUM(estimated_students) AS total_student_reach,
  ROUND(AVG(completion_percentage), 2) AS avg_completion_rate,
  COUNT(CASE WHEN completed = true THEN 1 END) AS completed_viewings
FROM viewing_events;

-- QUERY 2: Viewing Events with Full Context (Main Export)
SELECT 
  ve.id AS viewing_event_id,
  u.email AS educator_email,
  u.name AS educator_name,
  u.role AS educator_role,
  b.name AS board_name,
  s.name AS school_name,
  sess.title AS session_title,
  sess.presenter_name,
  sess.industry AS session_industry,
  ve.class_size,
  ve.grade_level,
  ve.estimated_students,
  ve.started_at,
  ve.completed_at,
  ve.watch_duration AS watch_duration_seconds,
  ve.completion_percentage,
  ve.completed AS fully_completed
FROM viewing_events ve
JOIN users u ON ve.user_id = u.id
JOIN boards b ON u.board_id = b.id
JOIN schools s ON u.school_id = s.id
JOIN sessions sess ON ve.session_id = sess.id
ORDER BY ve.started_at DESC;

-- QUERY 3: Report by School Board
SELECT 
  b.name AS board_name,
  COUNT(DISTINCT u.id) AS educators,
  COUNT(ve.id) AS viewing_events,
  SUM(ve.estimated_students) AS student_reach,
  ROUND(AVG(ve.completion_percentage), 2) AS avg_completion_rate
FROM viewing_events ve
JOIN users u ON ve.user_id = u.id
JOIN boards b ON u.board_id = b.id
GROUP BY b.name
ORDER BY student_reach DESC;

-- QUERY 4: Report by Session (For Sponsors)
SELECT 
  sess.title AS session_title,
  sess.presenter_name,
  sess.industry,
  COUNT(ve.id) AS total_viewings,
  SUM(ve.estimated_students) AS student_reach,
  ROUND(AVG(ve.completion_percentage), 2) AS avg_completion_rate,
  COUNT(CASE WHEN ve.completed = true THEN 1 END) AS completed_viewings
FROM viewing_events ve
JOIN sessions sess ON ve.session_id = sess.id
GROUP BY sess.id, sess.title, sess.presenter_name, sess.industry
ORDER BY student_reach DESC;

-- QUERY 5: Viewing Events by Day (Event Timeline)
SELECT 
  DATE(ve.started_at) AS event_date,
  COUNT(ve.id) AS viewing_events,
  COUNT(DISTINCT ve.user_id) AS unique_educators,
  SUM(ve.estimated_students) AS student_reach
FROM viewing_events ve
GROUP BY DATE(ve.started_at)
ORDER BY event_date;

-- QUERY 6: Completion Rate by Block
SELECT 
  sess.block_number,
  COUNT(ve.id) AS total_viewings,
  ROUND(AVG(ve.completion_percentage), 2) AS avg_completion_rate,
  COUNT(CASE WHEN ve.completed = true THEN 1 END) AS fully_completed
FROM viewing_events ve
JOIN sessions sess ON ve.session_id = sess.id
GROUP BY sess.block_number
ORDER BY sess.block_number;
```

**3. CSV Export Process (Manual)**

**Steps for Post-Event Export:**

1. **Log into Supabase Dashboard**
   - Navigate to SQL Editor
   - Run Query 2 (Main Export) for comprehensive data
   
2. **Export to CSV**
   - Click "Export" button
   - Save as: `career-launch-viewing-events-YYYY-MM-DD.csv`
   
3. **Generate Additional Reports**
   - Run Query 3 for board-level summary → `career-launch-board-summary.csv`
   - Run Query 4 for sponsor reports → `career-launch-session-summary.csv`
   
4. **Share with Stakeholders**
   - Email board-level reports to each school board
   - Email session reports to each sponsor
   - Keep master export for internal analysis

**4. Optional: Automated Email Reports**

If time allows, create a simple API endpoint to generate and email reports:

```typescript
// app/api/generate-reports/route.ts (Optional - Post-MVP)
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
  // Verify authorization (admin only)
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.ADMIN_API_KEY}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const supabase = createServerClient();
  
  // Run reporting queries
  const { data: viewingEvents } = await supabase
    .from('viewing_events')
    .select(`
      *,
      users (email, name, role, board_id, school_id),
      sessions (title, presenter_name, industry)
    `);
  
  // Generate CSV (using a library like 'csv-stringify')
  const csv = generateCSV(viewingEvents);
  
  // Send email with attachment (using a service like SendGrid)
  await sendReportEmail({
    to: 'damian.matheson@myblueprint.ca',
    subject: 'Career Launch Event Report',
    body: 'Attached is the complete viewing events report.',
    attachment: csv
  });
  
  return NextResponse.json({ success: true });
}
```

**5. Data Validation**

Before exporting, validate data integrity:

```sql
-- Check for missing data
SELECT 
  COUNT(*) AS total_events,
  COUNT(user_id) AS has_user,
  COUNT(session_id) AS has_session,
  COUNT(class_size) AS has_class_size,
  COUNT(grade_level) AS has_grade_level,
  COUNT(estimated_students) AS has_estimated_students
FROM viewing_events;

-- Check for orphaned records
SELECT COUNT(*) FROM viewing_events ve
LEFT JOIN users u ON ve.user_id = u.id
WHERE u.id IS NULL;

SELECT COUNT(*) FROM viewing_events ve
LEFT JOIN sessions s ON ve.session_id = s.id
WHERE s.id IS NULL;

-- Check for invalid values
SELECT COUNT(*) FROM viewing_events
WHERE estimated_students < 1 OR estimated_students > 100;

SELECT COUNT(*) FROM viewing_events
WHERE completion_percentage < 0 OR completion_percentage > 100;
```

### Data Fields in CSV Export

**Main Export Columns:**
1. `viewing_event_id` - Unique identifier
2. `educator_email` - Educator's email
3. `educator_name` - Educator's full name
4. `educator_role` - Role (teacher, counselor, etc.)
5. `board_name` - School board name
6. `school_name` - School name
7. `session_title` - Session title
8. `presenter_name` - Presenter's name
9. `session_industry` - Industry category
10. `class_size` - Size range (1-20, 21-30, 31+)
11. `grade_level` - Grade level(s)
12. `estimated_students` - Estimated # of students
13. `started_at` - When viewing started
14. `completed_at` - When viewing completed (if applicable)
15. `watch_duration_seconds` - Total watch time
16. `completion_percentage` - % of video watched
17. `fully_completed` - Whether marked complete (boolean)

### Report Types

**1. Board-Level Reports**
- Total educators from board
- Total viewing events
- Total student reach
- Average completion rate

**2. Session-Level Reports (For Sponsors)**
- Total viewings of their session
- Student reach for their session
- Completion rate
- Geographic distribution (which boards watched)

**3. Executive Summary**
- Overall event metrics
- Day-by-day breakdown
- Most popular sessions
- Block-level engagement

### Acceptance Criteria

- [ ] ViewingEvents table captures all required data
- [ ] Reporting queries execute without errors
- [ ] CSV export includes all necessary fields
- [ ] Board-level reports can be generated
- [ ] Session-level reports can be generated
- [ ] Data validation queries confirm integrity
- [ ] Documentation exists for manual export process
- [ ] CSV format is compatible with Excel and Google Sheets
- [ ] Exported data includes proper headers
- [ ] Timestamps are in human-readable format

---

# 4. Data Architecture

## 4.1 Database Schema

### Technology: Supabase (PostgreSQL 15)

**Connection Details:**
- **Host:** Provided by Supabase (e.g., `db.xxxx.supabase.co`)
- **Port:** 5432 (PostgreSQL default)
- **SSL:** Required
- **Connection String:** Stored in environment variables

### Tables Overview

```
users (educators)
  ├─── viewing_events (1:many)
  │     └─── sessions (many:1)
  │
  ├─── boards (many:1)
  └─── schools (many:1)
```

## 4.2 Table Definitions

### users Table

Stores educator profiles and registration information.

```sql
CREATE TABLE users (
  -- Primary Key
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Profile Information
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN (
    'Guidance Counsellor',
    'Subject Teacher',
    'Administrator',
    'Other'
  )),
  subject_area TEXT, -- Optional, for potential filtering
  
  -- Organizational Affiliation
  board_id TEXT NOT NULL,
  school_id TEXT NOT NULL,
  custom_school TEXT, -- If user selected "My school isn't listed"
  
  -- Pre-fill Data (Last values used)
  last_class_size TEXT,
  last_grade_level TEXT,
  
  -- Timestamps
  registered_at TIMESTAMPTZ DEFAULT NOW(),
  last_login TIMESTAMPTZ,
  
  -- Constraints
  CONSTRAINT valid_email CHECK (email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$')
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_board ON users(board_id);
CREATE INDEX idx_users_school ON users(school_id);
CREATE INDEX idx_users_registered_at ON users(registered_at);

-- Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own profile
CREATE POLICY "Users can view own profile"
ON users FOR SELECT
USING (auth.email() = email);

-- Policy: Public insert for registration
CREATE POLICY "Allow public insert"
ON users FOR INSERT
WITH CHECK (true);

-- Policy: Users can update their own profile
CREATE POLICY "Users can update own profile"
ON users FOR UPDATE
USING (auth.email() = email);
```

**Data Example:**
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "email": "jane.smith@torontodsb.ca",
  "name": "Jane Smith",
  "role": "Subject Teacher",
  "subject_area": "Science",
  "board_id": "toronto-dsb",
  "school_id": "central-tech-456",
  "custom_school": null,
  "last_class_size": "21-30",
  "last_grade_level": "11-12",
  "registered_at": "2025-12-01T09:15:32.123Z",
  "last_login": "2025-12-03T11:42:18.456Z"
}
```

### sessions Table

Stores all career session metadata.

```sql
CREATE TABLE sessions (
  -- Primary Key
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL, -- URL-friendly identifier

  -- Content
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  learning_objectives JSONB, -- Array of strings

  -- Presenter
  presenter_name TEXT NOT NULL,
  presenter_bio TEXT,
  presenter_photo_url TEXT,

  -- Media
  thumbnail_url TEXT NOT NULL,
  video_url TEXT NOT NULL, -- Vimeo URL (single video, trailers removed)
  duration INTEGER NOT NULL, -- Minutes

  -- Classification
  category TEXT NOT NULL CHECK (category IN (
    'Healthcare & Medicine',
    'Technology & Engineering',
    'Skilled Trades',
    'Business & Entrepreneurship',
    'Creative Industries',
    'Public Service'
  )),
  grade_level TEXT NOT NULL,

  -- Related Content
  related_booth_ids JSONB, -- Array of booth UUIDs for cross-linking
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_sessions_slug ON sessions(slug);
CREATE INDEX idx_sessions_category ON sessions(category);
CREATE INDEX idx_sessions_grade ON sessions(grade_level);

-- Row Level Security
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read sessions (public content)
CREATE POLICY "Public read access"
ON sessions FOR SELECT
TO public
USING (true);
```

**Data Example:**
```json
{
  "id": "f9e8d7c6-b5a4-3210-fedc-ba9876543210",
  "slug": "nursing-career-pathways",
  "title": "Nursing: Pathways to Healthcare Leadership",
  "description": "Explore the diverse career paths in nursing...",
  "learning_objectives": [
    "Understand different nursing specializations",
    "Learn about education requirements",
    "Discover career advancement opportunities"
  ],
  "presenter_name": "Dr. Sarah Johnson",
  "presenter_bio": "Registered Nurse with 15 years experience...",
  "presenter_photo_url": "https://vimeo.com/photos/sarah-johnson.jpg",
  "thumbnail_url": "/images/sessions/nursing-thumbnail.jpg",
  "video_url": "https://vimeo.com/123456789",
  "duration": 35,
  "category": "Healthcare & Medicine",
  "grade_level": "9-12",
  "related_booth_ids": ["booth-uuid-123", "booth-uuid-456"],
  "created_at": "2025-11-01T10:00:00.000Z",
  "updated_at": "2025-11-15T14:30:00.000Z"
}
```

### viewing_events Table

Tracks each instance of an educator showing a video to their class.

```sql
CREATE TABLE viewing_events (
  -- Primary Key
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Foreign Keys
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  session_id UUID NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
  
  -- Context Data
  class_size TEXT NOT NULL,
  grade_level TEXT NOT NULL,
  estimated_students INTEGER NOT NULL,
  
  -- Viewing Metadata
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  watch_duration INTEGER DEFAULT 0, -- Total seconds watched
  completion_percentage INTEGER DEFAULT 0 CHECK (completion_percentage BETWEEN 0 AND 100),
  completed BOOLEAN DEFAULT FALSE,
  
  -- Device/Browser Info (Optional)
  device_type TEXT,
  browser_type TEXT
);

-- Indexes
CREATE INDEX idx_viewing_events_user ON viewing_events(user_id);
CREATE INDEX idx_viewing_events_session ON viewing_events(session_id);
CREATE INDEX idx_viewing_events_started_at ON viewing_events(started_at);
CREATE INDEX idx_viewing_events_completed ON viewing_events(completed);

-- Composite index for reporting
CREATE INDEX idx_viewing_events_reporting 
ON viewing_events(user_id, session_id, started_at);

-- Row Level Security
ALTER TABLE viewing_events ENABLE ROW LEVEL SECURITY;

-- Policy: Public insert (anyone can create viewing events)
CREATE POLICY "Allow public insert"
ON viewing_events FOR INSERT
WITH CHECK (true);

-- Policy: Public update (for tracking progress)
CREATE POLICY "Allow public update"
ON viewing_events FOR UPDATE
USING (true);
```

**Data Example:**
```json
{
  "id": "x1y2z3a4-b5c6-7890-wxyz-ab1234567890",
  "user_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "session_id": "f9e8d7c6-b5a4-3210-fedc-ba9876543210",
  "class_size": "21-30",
  "grade_level": "11-12",
  "estimated_students": 25,
  "started_at": "2025-12-02T10:05:15.789Z",
  "completed_at": "2025-12-02T10:42:33.456Z",
  "watch_duration": 1823, // 30 minutes 23 seconds
  "completion_percentage": 87,
  "completed": true,
  "device_type": "desktop",
  "browser_type": "Chrome"
}
```

### boards Table

Reference data for Ontario school boards.

```sql
CREATE TABLE boards (
  -- Primary Key
  id TEXT PRIMARY KEY, -- e.g., "toronto-dsb"
  
  -- Board Information
  name TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('Public', 'Catholic', 'French')),
  website TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE boards ENABLE ROW LEVEL SECURITY;

-- Policy: Public read access
CREATE POLICY "Public read access"
ON boards FOR SELECT
TO public
USING (true);
```

**Data Example:**
```json
{
  "id": "toronto-dsb",
  "name": "Toronto District School Board",
  "type": "Public",
  "website": "https://www.tdsb.on.ca",
  "created_at": "2025-10-15T09:00:00.000Z"
}
```

### schools Table

Reference data for schools within boards.

```sql
CREATE TABLE schools (
  -- Primary Key
  id TEXT PRIMARY KEY, -- e.g., "central-tech-456"
  
  -- Foreign Key
  board_id TEXT NOT NULL REFERENCES boards(id) ON DELETE CASCADE,
  
  -- School Information
  name TEXT NOT NULL,
  address TEXT,
  city TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Composite unique constraint (school name unique within board)
  CONSTRAINT unique_school_per_board UNIQUE (board_id, name)
);

-- Indexes
CREATE INDEX idx_schools_board ON schools(board_id);

-- Row Level Security
ALTER TABLE schools ENABLE ROW LEVEL SECURITY;

-- Policy: Public read access
CREATE POLICY "Public read access"
ON schools FOR SELECT
TO public
USING (true);
```

### booths Table

Stores virtual expo booth information for sponsor organizations.

```sql
CREATE TABLE booths (
  -- Primary Key
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL, -- URL-friendly identifier

  -- Organization
  organization_name TEXT NOT NULL,
  booth_title TEXT NOT NULL,
  description TEXT NOT NULL,

  -- Media
  logo_url TEXT NOT NULL,
  banner_url TEXT,

  -- Resources (flexible JSON structure)
  resources JSONB, -- Array of { type, title, url }
  contact_info JSONB, -- { email, website, phone, linkedin, etc. }

  -- Classification
  related_category TEXT, -- Link to session category
  display_order INTEGER DEFAULT 0, -- For custom ordering

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_booths_slug ON booths(slug);
CREATE INDEX idx_booths_category ON booths(related_category);
CREATE INDEX idx_booths_order ON booths(display_order);

-- Row Level Security
ALTER TABLE booths ENABLE ROW LEVEL SECURITY;

-- Policy: Public read access
CREATE POLICY "Public read access"
ON booths FOR SELECT
TO public
USING (true);
```

**Data Example:**
```json
{
  "id": "central-tech-456",
  "board_id": "toronto-dsb",
  "name": "Central Technical School",
  "address": "725 Bathurst Street",
  "city": "Toronto",
  "created_at": "2025-10-15T09:05:00.000Z"
}
```

## 4.3 Relationships

```
users 1:many viewing_events
  └─ users.id = viewing_events.user_id

sessions 1:many viewing_events
  └─ sessions.id = viewing_events.session_id

boards 1:many users
  └─ boards.id = users.board_id

boards 1:many schools
  └─ boards.id = schools.board_id

schools 1:many users
  └─ schools.id = users.school_id
```

## 4.4 Data Seeding

### Initial Data Requirements

**Before Launch, Populate:**

1. **boards table** - 20 Ontario school boards
2. **schools table** - Schools for all 20 boards (~500-1000 schools)
3. **sessions table** - All 25 career sessions with metadata

### Seed Data Scripts

```typescript
// lib/supabase/seed.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role for seeding
);

// Seed boards
export async function seedBoards() {
  const boards = [
    { id: 'toronto-dsb', name: 'Toronto District School Board', type: 'Public' },
    { id: 'toronto-cdsb', name: 'Toronto Catholic District School Board', type: 'Catholic' },
    { id: 'peel-dsb', name: 'Peel District School Board', type: 'Public' },
    // ... 17 more boards
  ];
  
  const { error } = await supabase
    .from('boards')
    .insert(boards);
  
  if (error) console.error('Error seeding boards:', error);
  else console.log('✅ Boards seeded successfully');
}

// Seed schools
export async function seedSchools() {
  const schools = [
    { id: 'central-tech-456', board_id: 'toronto-dsb', name: 'Central Technical School', city: 'Toronto' },
    { id: 'earl-haig-789', board_id: 'toronto-dsb', name: 'Earl Haig Secondary School', city: 'Toronto' },
    // ... ~500-1000 schools
  ];
  
  const { error } = await supabase
    .from('schools')
    .insert(schools);
  
  if (error) console.error('Error seeding schools:', error);
  else console.log('✅ Schools seeded successfully');
}

// Seed sessions
export async function seedSessions() {
  const sessions = [
    {
      slug: 'nursing-career-pathways',
      title: 'Nursing: Pathways to Healthcare Leadership',
      description: 'Explore diverse nursing specializations...',
      learning_objectives: ['Understand nursing specializations', 'Learn education requirements'],
      presenter_name: 'Dr. Sarah Johnson',
      presenter_bio: 'RN with 15 years experience...',
      thumbnail_url: '/images/sessions/nursing-thumbnail.jpg',
      trailer_url: 'https://vimeo.com/987654321',
      full_video_url: 'https://vimeo.com/123456789',
      duration: 35,
      block_number: 1,
      industry: 'Healthcare',
      grade_level: '9-12'
    },
    // ... 24 more sessions
  ];
  
  const { error } = await supabase
    .from('sessions')
    .insert(sessions);
  
  if (error) console.error('Error seeding sessions:', error);
  else console.log('✅ Sessions seeded successfully');
}

// Run all seeds
export async function seedDatabase() {
  await seedBoards();
  await seedSchools();
  await seedSessions();
}
```

**Run Seeding:**
```bash
npm run seed
```

```json
// package.json
{
  "scripts": {
    "seed": "tsx lib/supabase/seed.ts"
  }
}
```

## 4.5 Database Migrations

### Migration Strategy

Use Supabase CLI for managing schema changes:

```bash
# Initialize Supabase locally
supabase init

# Create new migration
supabase migration new create_tables

# Apply migrations
supabase db push

# Generate TypeScript types from schema
supabase gen types typescript --local > lib/supabase/types.ts
```

### Example Migration File

```sql
-- supabase/migrations/20251028_create_tables.sql

-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  board_id TEXT NOT NULL,
  school_id TEXT NOT NULL,
  custom_school TEXT,
  last_class_size TEXT,
  last_grade_level TEXT,
  registered_at TIMESTAMPTZ DEFAULT NOW(),
  last_login TIMESTAMPTZ,
  CONSTRAINT valid_email CHECK (email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$')
);

CREATE INDEX idx_users_email ON users(email);

-- Create sessions table
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  learning_objectives JSONB,
  presenter_name TEXT NOT NULL,
  presenter_bio TEXT,
  presenter_photo_url TEXT,
  thumbnail_url TEXT NOT NULL,
  trailer_url TEXT NOT NULL,
  full_video_url TEXT NOT NULL,
  duration INTEGER NOT NULL,
  block_number INTEGER NOT NULL CHECK (block_number BETWEEN 1 AND 4),
  industry TEXT NOT NULL,
  grade_level TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_sessions_slug ON sessions(slug);
CREATE INDEX idx_sessions_block ON sessions(block_number);

-- Create viewing_events table
CREATE TABLE viewing_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  session_id UUID NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
  class_size TEXT NOT NULL,
  grade_level TEXT NOT NULL,
  estimated_students INTEGER NOT NULL,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  watch_duration INTEGER DEFAULT 0,
  completion_percentage INTEGER DEFAULT 0 CHECK (completion_percentage BETWEEN 0 AND 100),
  completed BOOLEAN DEFAULT FALSE,
  device_type TEXT,
  browser_type TEXT
);

CREATE INDEX idx_viewing_events_user ON viewing_events(user_id);
CREATE INDEX idx_viewing_events_session ON viewing_events(session_id);
CREATE INDEX idx_viewing_events_started_at ON viewing_events(started_at);

-- Create boards table
CREATE TABLE boards (
  id TEXT PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('Public', 'Catholic', 'French')),
  website TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create schools table
CREATE TABLE schools (
  id TEXT PRIMARY KEY,
  board_id TEXT NOT NULL REFERENCES boards(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  address TEXT,
  city TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_school_per_board UNIQUE (board_id, name)
);

CREATE INDEX idx_schools_board ON schools(board_id);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE viewing_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE boards ENABLE ROW LEVEL SECURITY;
ALTER TABLE schools ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies
CREATE POLICY "Public read sessions" ON sessions FOR SELECT TO public USING (true);
CREATE POLICY "Public read boards" ON boards FOR SELECT TO public USING (true);
CREATE POLICY "Public read schools" ON schools FOR SELECT TO public USING (true);
CREATE POLICY "Public insert viewing_events" ON viewing_events FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update viewing_events" ON viewing_events FOR UPDATE USING (true);
```

## 4.6 TypeScript Types

### Generate Types from Database

```bash
supabase gen types typescript --project-id "your-project-id" > lib/supabase/types.ts
```

### Example Generated Types

```typescript
// lib/supabase/types.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          role: string
          board_id: string
          school_id: string
          custom_school: string | null
          last_class_size: string | null
          last_grade_level: string | null
          registered_at: string
          last_login: string | null
        }
        Insert: {
          id?: string
          email: string
          name: string
          role: string
          board_id: string
          school_id: string
          custom_school?: string | null
          last_class_size?: string | null
          last_grade_level?: string | null
          registered_at?: string
          last_login?: string | null
        }
        Update: {
          id?: string
          email?: string
          name?: string
          role?: string
          board_id?: string
          school_id?: string
          custom_school?: string | null
          last_class_size?: string | null
          last_grade_level?: string | null
          registered_at?: string
          last_login?: string | null
        }
      }
      // ... other tables
    }
  }
}

// Convenience types
export type User = Database['public']['Tables']['users']['Row'];
export type Session = Database['public']['Tables']['sessions']['Row'];
export type ViewingEvent = Database['public']['Tables']['viewing_events']['Row'];
export type Board = Database['public']['Tables']['boards']['Row'];
export type School = Database['public']['Tables']['schools']['Row'];
```

---

# 5. Security & Privacy

## 5.1 Authentication & Authorization

### Authentication Strategy: Cookie-Based (No Passwords)

**Approach:** Simple email-based identification without traditional authentication.

**Why This Works:**
- Target users are trusted educators with .edu or board domain emails
- Event duration is only 5 days (limited exposure window)
- No sensitive personal data or payment information
- Trust model: educators wouldn't abuse the system
- Post-event data cleanup minimizes risk

**Cookie Implementation:**
```typescript
// Cookie Settings
{
  name: 'career_launch_user',
  value: email, // Just the email address
  httpOnly: true, // Not accessible via JavaScript (XSS protection)
  secure: true, // HTTPS only in production
  sameSite: 'lax', // CSRF protection
  maxAge: 7 * 24 * 60 * 60, // 7 days
  path: '/' // Available across entire site
}
```

**Security Considerations:**
- Cookie is HttpOnly (prevents XSS attacks from stealing it)
- Secure flag ensures transmission only over HTTPS
- SameSite=lax prevents CSRF attacks
- Short expiration (7 days) limits exposure
- No sensitive data in cookie (just email identifier)

### Authorization Model

**Public Access:**
- Schedule page (viewing all sessions)
- Session detail pages
- Trailer videos

**No Access Control Needed:**
- No user roles or permissions
- No admin vs. regular user distinction
- All authenticated users have same access

**Database Access:**
- Row Level Security (RLS) policies on Supabase
- Public read on sessions, boards, schools tables
- Public insert/update on viewing_events table
- Users table protected (can only read/update own record)

## 5.2 Data Security

### Data Encryption

**In Transit:**
- All API calls over HTTPS (TLS 1.3)
- Supabase connections use SSL/TLS
- Vimeo embeds over HTTPS
- Force HTTPS redirect on Vercel

**At Rest:**
- Supabase encrypts database at rest (AES-256)
- Backups are encrypted
- No additional application-level encryption needed

### PII (Personally Identifiable Information) Handling

**PII Collected:**
- Email addresses (required for identification)
- Full names (required for reporting)
- School affiliation (required for board-level reports)

**PII Protection:**
- Email addresses stored in lowercase (consistency)
- No email verification (trust model)
- No storage of IP addresses or precise geolocation
- Device/browser type optional and non-identifying

**Data Retention:**
- During event: All data retained for real-time tracking
- Post-event: Retain for 6 months for reporting
- After 6 months: Anonymize or delete educator PII
- Keep aggregate metrics only (no PII)

### Compliance

**PIPEDA (Canada):**
- Collect only necessary data (minimal data principle)
- Clear purpose: student reach measurement and reporting
- Obtain implicit consent through form submission
- Allow data access/correction requests
- Secure data storage and transmission

**School Board Data Agreements:**
- Data shared only with contracting school boards
- Session sponsor reports contain aggregate data only
- No selling or third-party sharing of educator data

### Data Sharing Policy

**Who Gets Access:**
1. **School Boards:** Data for their educators and students only
2. **Session Sponsors:** Aggregate metrics (no PII) for their sessions
3. **myBlueprint Team:** Full access for platform administration
4. **Not Shared:** Third parties, advertisers, other vendors

**Reporting Data Format:**
- Board reports: Email, name, school (for their board only)
- Sponsor reports: Total views, student reach (no educator names/emails)
- Public metrics: Aggregate totals only (no individual data)

## 5.3 Application Security

### Input Validation & Sanitization

**Client-Side Validation (React Hook Form):**
```typescript
// Example validation rules
const validationRules = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email'
    },
    maxLength: {
      value: 254,
      message: 'Email too long'
    }
  },
  name: {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters'
    },
    maxLength: {
      value: 100,
      message: 'Name too long'
    }
  }
};
```

**Server-Side Validation:**
```typescript
// app/api/submit-registration/route.ts
export async function POST(request: NextRequest) {
  const body = await request.json();
  
  // Validate all required fields present
  const requiredFields = ['email', 'name', 'boardId', 'schoolId', 'role', 'classSize', 'gradeLevel'];
  for (const field of requiredFields) {
    if (!body[field]) {
      return NextResponse.json({ error: `Missing ${field}` }, { status: 400 });
    }
  }
  
  // Sanitize email (lowercase, trim whitespace)
  const email = body.email.toLowerCase().trim();
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }
  
  // Sanitize name (trim, remove special characters)
  const name = body.name.trim().substring(0, 100);
  
  // Validate role is from allowed list
  const allowedRoles = ['Guidance Counsellor', 'Subject Teacher', 'Administrator', 'Other'];
  if (!allowedRoles.includes(body.role)) {
    return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
  }
  
  // Proceed with database insertion...
}
```

### OWASP Top 10 Mitigations

**1. Injection (SQL Injection):**
- ✅ Use Supabase client library (parameterized queries)
- ✅ No raw SQL from user input
- ✅ Input validation on all fields

**2. Broken Authentication:**
- ✅ Cookie-based identification (not full auth)
- ✅ HttpOnly cookies (XSS protection)
- ✅ Secure cookies (HTTPS only)
- ✅ Short expiration (7 days)

**3. Sensitive Data Exposure:**
- ✅ HTTPS everywhere
- ✅ Database encrypted at rest
- ✅ No sensitive data in client-side code
- ✅ Environment variables for secrets

**4. XML External Entities (XXE):**
- ✅ N/A - no XML processing

**5. Broken Access Control:**
- ✅ Row Level Security on database
- ✅ Public endpoints properly scoped
- ✅ No admin/user privilege escalation possible

**6. Security Misconfiguration:**
- ✅ Production environment variables
- ✅ Disable Vercel preview for sensitive pages
- ✅ Supabase RLS policies enabled
- ✅ Error messages don't expose system details

**7. Cross-Site Scripting (XSS):**
- ✅ React auto-escapes output
- ✅ Content Security Policy headers
- ✅ HttpOnly cookies
- ✅ Sanitize user input

**8. Insecure Deserialization:**
- ✅ N/A - no object serialization from untrusted sources

**9. Using Components with Known Vulnerabilities:**
- ✅ Dependabot alerts enabled
- ✅ Regular `npm audit`
- ✅ Update dependencies before launch

**10. Insufficient Logging & Monitoring:**
- ✅ Vercel logs all requests
- ✅ Console.error for server errors
- ✅ Optional: Sentry for error tracking

### Security Headers

**Next.js Configuration:**
```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY' // Prevent clickjacking
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff' // Prevent MIME type sniffing
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' player.vimeo.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self' data:;
      connect-src 'self' *.supabase.co player.vimeo.com;
      frame-src player.vimeo.com;
    `.replace(/\s+/g, ' ').trim()
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders
      }
    ];
  }
};
```

### Rate Limiting

**API Route Protection:**
```typescript
// lib/rateLimit.ts
import { LRUCache } from 'lru-cache';

type RateLimitConfig = {
  interval: number; // Time window in ms
  uniqueTokenPerInterval: number; // Max unique users
};

export function rateLimit(config: RateLimitConfig) {
  const tokenCache = new LRUCache({
    max: config.uniqueTokenPerInterval || 500,
    ttl: config.interval || 60000,
  });

  return {
    check: (limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;

        return isRateLimited ? reject() : resolve();
      }),
  };
}

// Usage in API route
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
});

export async function POST(request: NextRequest) {
  const ip = request.ip ?? 'anonymous';
  
  try {
    await limiter.check(10, ip); // 10 requests per minute
  } catch {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      { status: 429 }
    );
  }
  
  // Process request...
}
```

### Environment Variables

**Required Secrets:**
```env
# .env.local (Never commit to Git)

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... # SECRET

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Application
COOKIE_DOMAIN=careerlaunch.myblueprint.ca
CONTACT_EMAIL=damian.matheson@myblueprint.ca

# Optional
SENTRY_DSN=https://xxx@sentry.io/xxx
```

**Vercel Environment Variable Configuration:**
- Set all variables in Vercel dashboard
- Separate values for Development, Preview, Production
- Never log or expose in client code
- Use `NEXT_PUBLIC_` prefix only for safe public variables

---

# 6. User Interface Specifications

## 6.1 Design System Reference

This project follows the **Career Launch UX/UI Style Guide** located at:
`/mnt/project/career-launch-ux-ui-style-guide.md`

### Key Design Principles

1. **Balanced Hybrid Aesthetic**
   - Professional foundation for educators (trustworthy, efficient)
   - Energetic accents for student appeal (engaging, modern)

2. **myBlueprint Brand Adherence**
   - Strict color palette compliance
   - Museo Sans (primary) / Open Sans (fallback) typography
   - Established voice and tone

3. **Desktop-First Approach**
   - Optimized for classroom projection
   - Mobile responsive as secondary priority
   - Large touch targets for mobile

### Design Token Implementation

**Create CSS Custom Properties File:**
```css
/* styles/design-tokens.css */
:root {
  /* Brand Colors */
  --myb-primary-blue: #0092FF;
  --myb-navy: #22224C;
  --myb-light-blue: #C6E7FF;
  --myb-off-white: #F6F6FF;
  
  /* Neutrals */
  --myb-neutral-1: #E5E9F1;
  --myb-neutral-2: #D9DFEA;
  --myb-neutral-3: #AAB7CB;
  --myb-neutral-4: #65738B;
  --myb-neutral-5: #485163;
  --myb-neutral-6: #252A33;
  
  /* Semantic Colors */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: var(--myb-primary-blue);
  
  /* Spacing Scale (8px grid) */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
  --space-8: 64px;
  --space-10: 80px;
  --space-12: 96px;
  
  /* Typography */
  --font-primary: 'Museo Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-fallback: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(34, 34, 76, 0.05);
  --shadow-md: 0 4px 8px rgba(34, 34, 76, 0.08);
  --shadow-lg: 0 8px 24px rgba(34, 34, 76, 0.12);
  --shadow-xl: 0 16px 48px rgba(34, 34, 76, 0.15);
  --shadow-hover: 0 8px 24px rgba(0, 146, 255, 0.2);
  --shadow-focus: 0 0 0 3px rgba(0, 146, 255, 0.15);
  
  /* Transitions */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --transition-fast: 150ms var(--ease-default);
  --transition-base: 200ms var(--ease-default);
  --transition-slow: 300ms var(--ease-default);
}
```

## 6.2 Tailwind CSS Configuration

**Extend Tailwind with Design Tokens:**
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'myb-primary-blue': '#0092FF',
        'myb-navy': '#22224C',
        'myb-light-blue': '#C6E7FF',
        'myb-off-white': '#F6F6FF',
        'myb-neutral': {
          1: '#E5E9F1',
          2: '#D9DFEA',
          3: '#AAB7CB',
          4: '#65738B',
          5: '#485163',
          6: '#252A33',
        },
      },
      fontFamily: {
        sans: ['var(--font-museo-sans)', 'var(--font-open-sans)', 'system-ui', 'sans-serif'],
        museo: ['var(--font-museo-sans)', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
      },
      fontSize: {
        // Desktop sizes
        'display': ['64px', { lineHeight: '80px', letterSpacing: '-0.02em', fontWeight: '900' }],
        'h1': ['64px', { lineHeight: '80px', letterSpacing: '-0.02em', fontWeight: '900' }],
        'h2': ['40px', { lineHeight: '56px', letterSpacing: '-0.01em', fontWeight: '900' }],
        'h3': ['32px', { lineHeight: '48px', fontWeight: '900' }],
        'h4': ['24px', { lineHeight: '36px', fontWeight: '900' }],
        'subheader': ['22px', { lineHeight: '32px', fontWeight: '500' }],
        'body-1': ['20px', { lineHeight: '32px', fontWeight: '300' }],
        'body-2': ['16px', { lineHeight: '28px', fontWeight: '300' }],
        'compact': ['14px', { lineHeight: '20px', fontWeight: '300' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(34, 34, 76, 0.05)',
        'DEFAULT': '0 4px 8px rgba(34, 34, 76, 0.08)',
        'md': '0 4px 8px rgba(34, 34, 76, 0.08)',
        'lg': '0 8px 24px rgba(34, 34, 76, 0.12)',
        'xl': '0 16px 48px rgba(34, 34, 76, 0.15)',
        'hover': '0 8px 24px rgba(0, 146, 255, 0.2)',
        'focus': '0 0 0 3px rgba(0, 146, 255, 0.15)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

export default config;
```

## 6.3 Component Library

### Base UI Components

All base components should be created in `/components/ui/`:

**Button Component:**
```typescript
// components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-lg font-bold transition-all',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          
          // Variants
          variant === 'primary' && 'bg-myb-primary-blue text-white hover:bg-blue-600 focus:ring-myb-primary-blue',
          variant === 'secondary' && 'bg-myb-navy text-white hover:bg-opacity-90 focus:ring-myb-navy',
          variant === 'outline' && 'border-2 border-myb-primary-blue text-myb-primary-blue hover:bg-myb-light-blue',
          variant === 'ghost' && 'text-myb-navy hover:bg-myb-neutral-1',
          
          // Sizes
          size === 'sm' && 'px-3 py-2 text-sm',
          size === 'md' && 'px-6 py-3 text-base',
          size === 'lg' && 'px-8 py-4 text-lg',
          
          // Width
          fullWidth && 'w-full',
          
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

**Input Component:**
```typescript
// components/ui/Input.tsx
import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full px-4 py-3 rounded-lg border-2 transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-myb-primary-blue focus:border-myb-primary-blue',
          'placeholder:text-myb-neutral-3',
          error ? 'border-red-500' : 'border-myb-neutral-2',
          'disabled:bg-myb-neutral-1 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
```

**Select Component:**
```typescript
// components/ui/Select.tsx
import { SelectHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          'w-full px-4 py-3 rounded-lg border-2 transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-myb-primary-blue focus:border-myb-primary-blue',
          'bg-white appearance-none',
          'bg-[url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")]',
          'bg-no-repeat bg-right-4 bg-[length:1.25rem] pr-12',
          error ? 'border-red-500' : 'border-myb-neutral-2',
          'disabled:bg-myb-neutral-1 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';
```

**Modal Component:**
```typescript
// components/ui/Modal.tsx
'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Prevent body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  
  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
      
      firstElement?.focus();
      
      const handleTab = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
      };
      
      document.addEventListener('keydown', handleTab);
      return () => document.removeEventListener('keydown', handleTab);
    }
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div
        ref={modalRef}
        className={cn(
          'relative bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto',
          size === 'sm' && 'w-full max-w-md',
          size === 'md' && 'w-full max-w-2xl',
          size === 'lg' && 'w-full max-w-4xl',
          size === 'xl' && 'w-full max-w-6xl'
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-myb-neutral-2">
            <h2 id="modal-title" className="text-2xl font-black text-myb-navy">
              {title}
            </h2>
            
            <button
              onClick={onClose}
              className="p-2 hover:bg-myb-neutral-1 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-myb-neutral-5" />
            </button>
          </div>
        )}
        
        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
```

## 6.4 Typography System

**Next.js Font Loading:**
```typescript
// app/layout.tsx
import { Open_Sans } from 'next/font/google';
import localFont from 'next/font/local';

// Open Sans (fallback)
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

// Museo Sans (primary - if self-hosting)
const museoSans = localFont({
  src: [
    {
      path: '../public/fonts/MuseoSans-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/MuseoSans-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/MuseoSans-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/MuseoSans-900.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-museo-sans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${museoSans.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

**Typography Classes:**
```css
/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .heading-display {
    @apply font-museo text-display font-black text-myb-navy;
  }
  
  .heading-1 {
    @apply font-museo text-h1 font-black text-myb-navy;
  }
  
  .heading-2 {
    @apply font-museo text-h2 font-black text-myb-navy;
  }
  
  .heading-3 {
    @apply font-museo text-h3 font-black text-myb-navy;
  }
  
  .heading-4 {
    @apply font-museo text-h4 font-black text-myb-navy;
  }
  
  .body-large {
    @apply font-museo text-body-1 font-light text-myb-neutral-5;
  }
  
  .body-regular {
    @apply font-museo text-body-2 font-light text-myb-neutral-5;
  }
  
  .body-compact {
    @apply font-museo text-compact font-light text-myb-neutral-4;
  }
}
```

## 6.5 Responsive Design

**Breakpoints:**
- Mobile: `< 640px`
- Tablet: `640px - 1023px`
- Desktop: `≥ 1024px`

**Mobile-Specific Considerations:**
- Touch targets minimum 44px × 44px
- Larger font sizes for readability on small screens
- Simplified layouts (single column)
- Bottom-sheet modals instead of centered modals (optional)

**Example Responsive Component:**
```typescript
<div className="
  grid grid-cols-1 gap-4
  sm:grid-cols-2 sm:gap-6
  lg:grid-cols-4 lg:gap-8
">
  {/* Session cards */}
</div>
```

## 6.6 Accessibility

### WCAG 2.1 Level AA Compliance

**Color Contrast:**
- Text on background: minimum 4.5:1
- Large text (≥24px): minimum 3:1
- UI components: minimum 3:1

**Keyboard Navigation:**
- All interactive elements focusable
- Visible focus indicators
- Logical tab order
- Skip links for main content

**Screen Reader Support:**
- Semantic HTML (headings, landmarks, lists)
- ARIA labels where needed
- Alt text for all images
- Form labels properly associated

**Example Accessible Form:**
```typescript
<form>
  <label htmlFor="email" className="block text-sm font-medium mb-2">
    Email Address
    <span className="text-red-500" aria-label="required">*</span>
  </label>
  
  <input
    id="email"
    type="email"
    aria-required="true"
    aria-invalid={hasError}
    aria-describedby={hasError ? "email-error" : undefined}
    className="input"
  />
  
  {hasError && (
    <p id="email-error" className="text-red-600 text-sm mt-2" role="alert">
      Please enter a valid email address.
    </p>
  )}
</form>
```

---

# 7. Infrastructure & Deployment

## 7.1 Development Environment

### Local Development Setup

**Prerequisites:**
- Node.js 18+ (LTS)
- npm or yarn
- Git
- Supabase CLI (optional, for migrations)

**Initial Setup:**
```bash
# Clone repository
git clone https://github.com/myblueprint/career-launch.git
cd career-launch

# Install dependencies
npm install

# Copy environment variables template
cp .env.example .env.local

# Fill in environment variables
# Edit .env.local with your Supabase credentials

# Run development server
npm run dev

# Open http://localhost:3000
```

**Environment Variables (.env.local):**
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Google Analytics (optional for development)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Application
COOKIE_DOMAIN=localhost
CONTACT_EMAIL=damian.matheson@myblueprint.ca
```

### Development Scripts

```json
// package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,md}\"",
    "test": "jest",
    "seed": "tsx lib/supabase/seed.ts",
    "generate-types": "supabase gen types typescript --project-id your-project > lib/supabase/types.ts"
  }
}
```

## 7.2 Hosting Configuration

### Vercel Setup

**1. Connect Repository**
- Go to vercel.com
- Import Git repository
- Select `career-launch` repository
- Framework Preset: Next.js (auto-detected)

**2. Configure Build Settings**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

**3. Environment Variables (Vercel Dashboard)**

**Production:**
```
NEXT_PUBLIC_SUPABASE_URL = https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (SECRET)
NEXT_PUBLIC_GA_MEASUREMENT_ID = G-XXXXXXXXXX
COOKIE_DOMAIN = careerlaunch.myblueprint.ca
CONTACT_EMAIL = damian.matheson@myblueprint.ca
NODE_ENV = production
```

**Preview (same as production except):**
```
COOKIE_DOMAIN = preview.careerlaunch.myblueprint.ca
```

**Development (same as local .env.local):**
```
COOKIE_DOMAIN = localhost
```

**4. Domain Configuration**
- Add custom domain: `careerlaunch.myblueprint.ca`
- Vercel provides DNS instructions
- SSL certificate auto-provisioned (Let's Encrypt)
- Force HTTPS redirect enabled

**5. Deployment Settings**
- Auto-deploy from `main` branch (production)
- Auto-deploy from PR branches (preview environments)
- Build command: `npm run build`
- Install command: `npm install`

## 7.3 CI/CD Pipeline

### GitHub Actions Workflow

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint

  type-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run type-check

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build
          path: .next/
```

### Vercel Automatic Deployments

- **Production:** Auto-deploy from `main` branch
- **Preview:** Auto-deploy from PR branches
- **Rollback:** One-click rollback to previous deployment
- **Logs:** Real-time build and runtime logs
- **Analytics:** Built-in Vercel Analytics

## 7.4 Database Deployment

### Supabase Setup

**1. Create Supabase Project**
- Go to supabase.com
- Create new project: "career-launch-prod"
- Region: North America (closest to users)
- Plan: Pro (for production support)

**2. Apply Database Schema**
```bash
# Using Supabase CLI
supabase link --project-ref your-project-ref
supabase db push

# OR manually via SQL Editor in Supabase Dashboard
# Run migrations/20251028_create_tables.sql
```

**3. Configure Connection Pooling**
- Mode: Transaction
- Max connections: 100
- Timeout: 30 seconds

**4. Set up Automatic Backups**
- Daily backups enabled (default)
- Retention: 7 days
- Point-in-time recovery: Enabled

**5. Seed Reference Data**
```bash
npm run seed
```

## 7.5 Monitoring & Logging

### Vercel Analytics

**Built-in Metrics:**
- Page views
- Unique visitors
- Top pages
- Geographic distribution
- Device types
- Performance metrics (Core Web Vitals)

**Access:** Vercel Dashboard > Analytics tab

### Error Tracking (Optional: Sentry)

**Setup Sentry:**
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

**Configure Sentry:**
```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1, // 10% of transactions
  beforeSend(event, hint) {
    // Filter out non-critical errors
    if (event.level === 'warning') return null;
    return event;
  },
});
```

**Monitor:**
- JavaScript errors
- API route errors
- Performance issues
- User feedback

### Application Logging

**Server-Side Logs:**
```typescript
// lib/logger.ts
export function logError(context: string, error: unknown) {
  console.error(`[${context}]`, {
    message: error instanceof Error ? error.message : 'Unknown error',
    stack: error instanceof Error ? error.stack : undefined,
    timestamp: new Date().toISOString()
  });
}

export function logInfo(context: string, message: string, data?: any) {
  console.log(`[${context}]`, message, data || '');
}
```

**Usage:**
```typescript
// In API routes
try {
  // ... code
} catch (error) {
  logError('submit-registration', error);
  return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
}
```

## 7.6 Performance Monitoring

### Core Web Vitals

**Target Metrics:**
- **LCP (Largest Contentful Paint):** <2.5s
- **FID (First Input Delay):** <100ms
- **CLS (Cumulative Layout Shift):** <0.1

**Monitoring:**
- Vercel Analytics (built-in)
- Lighthouse CI (GitHub Actions)
- Real User Monitoring (Vercel Speed Insights)

### Lighthouse CI

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            http://localhost:3000
            http://localhost:3000/sessions/example-session
          uploadArtifacts: true
```

## 7.7 Deployment Checklist

### Pre-Launch Checklist

**Environment Setup:**
- [ ] Vercel project created and connected to Git
- [ ] Environment variables set for all environments
- [ ] Custom domain configured with SSL
- [ ] Supabase project created (Pro tier)
- [ ] Database schema deployed and tested
- [ ] Reference data seeded (boards, schools, sessions)

**Security:**
- [ ] Security headers configured in next.config.js
- [ ] Row Level Security policies enabled on Supabase
- [ ] API rate limiting implemented
- [ ] Environment variables never exposed to client
- [ ] HTTPS enforced (Vercel automatic)

**Performance:**
- [ ] Image optimization with next/image
- [ ] Font optimization with next/font
- [ ] Code splitting implemented
- [ ] Lighthouse score ≥90 on all pages
- [ ] ISR configured for session pages

**Functionality:**
- [ ] All 25 sessions populated with correct metadata
- [ ] Video URLs tested and working
- [ ] Combined registration form submits successfully
- [ ] Viewing events tracked correctly
- [ ] Cookie-based pre-fill working for returning users
- [ ] Video player loads and tracks progress

**Analytics:**
- [ ] Google Analytics configured and tracking
- [ ] Vimeo analytics enabled
- [ ] Error tracking configured (Sentry optional)

**Testing:**
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] Accessibility audit passed
- [ ] Load testing completed (1000 concurrent users)

**Documentation:**
- [ ] README.md updated with setup instructions
- [ ] Environment variables documented
- [ ] Deployment process documented
- [ ] Post-event CSV export process documented

### Launch Day Checklist

**Morning of Dec 1, 2025:**
- [ ] Verify all 25 videos are accessible
- [ ] Check database connection and performance
- [ ] Monitor Vercel logs for errors
- [ ] Test registration flow end-to-end
- [ ] Confirm analytics tracking
- [ ] Have Damian's contact ready for support

**During Event Week:**
- [ ] Monitor error rates (Sentry dashboard)
- [ ] Check performance metrics (Vercel Analytics)
- [ ] Respond to support emails promptly
- [ ] Track viewing events in real-time (Supabase dashboard)

**Post-Event (After Dec 5):**
- [ ] Export viewing events CSV from Supabase
- [ ] Generate board-level reports
- [ ] Generate session-level reports for sponsors
- [ ] Send reports to stakeholders
- [ ] Collect user feedback
- [ ] Document lessons learned

### Rollback Procedure

**If Critical Issue Occurs:**

1. **Identify Issue**
   - Check Vercel logs
   - Check Sentry errors
   - Check Supabase logs

2. **Decide on Action**
   - Minor issue: Hot fix and deploy
   - Major issue: Rollback to previous deployment

3. **Rollback Steps (Vercel)**
   - Go to Vercel Dashboard
   - Navigate to Deployments
   - Find last known good deployment
   - Click "..." menu → "Promote to Production"
   - Deployment rolls back in ~30 seconds

4. **Communicate**
   - Email users if downtime occurred
   - Post incident report
   - Plan fix for next deployment

---

# 8. Development Timeline

## 8.1 Sprint Breakdown

**Total Development Time:** 22 days (4.5 weeks)  
**Launch Date:** December 1, 2025  
**Start Date:** November 4, 2025

### Week 1: Foundation (Nov 4-8)

**Days 1-2 (Nov 4-5): Infrastructure Setup**
- [ ] Create Git repository
- [ ] Initialize Next.js project
- [ ] Configure Tailwind CSS with design tokens
- [ ] Set up Supabase project
- [ ] Create database schema and run migrations
- [ ] Configure Vercel project and deployment pipeline
- [ ] Set up environment variables

**Days 3-4 (Nov 6-7): Data Population**
- [ ] Populate boards table (20 Ontario school boards)
- [ ] Populate schools table (~500-1000 schools)
- [ ] Upload videos to Vimeo (25 trailers + 25 full sessions)
- [ ] Populate sessions table with metadata
- [ ] Test Vimeo embeds and privacy settings

**Day 5 (Nov 8): Foundation Testing**
- [ ] Verify database connections
- [ ] Test Supabase queries
- [ ] Verify Vimeo API integration
- [ ] Review and test design token implementation

**Deliverables:** Infrastructure ready, all data populated

---

### Week 2: Core Features (Nov 11-15)

**Days 6-7 (Nov 11-12): Schedule Page**
- [ ] Build layout component with header/footer
- [ ] Create ScheduleGrid component
- [ ] Create BlockSection component
- [ ] Create SessionCard component
- [ ] Implement SSR data fetching
- [ ] Add responsive styles (mobile, tablet, desktop)
- [ ] Test performance (Lighthouse audit)

**Days 8-9 (Nov 13-14): Session Detail Pages**
- [ ] Create dynamic [slug] route
- [ ] Build SessionHero component
- [ ] Integrate TrailerPlayer with Vimeo SDK
- [ ] Build SessionDetails component
- [ ] Add "Watch with Your Class" CTA button
- [ ] Implement ISR (Incremental Static Regeneration)
- [ ] Test all 25 session pages

**Day 10 (Nov 15): Week 2 Review**
- [ ] Test navigation flow (schedule → session detail)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness check
- [ ] Performance audit

**Deliverables:** Public schedule and session detail pages complete

---

### Week 3: Registration & Video (Nov 18-22)

**Days 11-13 (Nov 18-20): Combined Registration Form**
- [ ] Build Modal component
- [ ] Build CombinedRegistrationForm with React Hook Form
- [ ] Implement client-side validation
- [ ] Create API route `/api/submit-registration`
- [ ] Implement cookie management
- [ ] Build user profile pre-fill logic
- [ ] Test form submission and error handling
- [ ] Test returning user experience

**Days 14-15 (Nov 21-22): Video Player & Tracking**
- [ ] Build VideoPlayer component with Vimeo SDK
- [ ] Build VideoModal wrapper
- [ ] Create API route `/api/update-viewing-event`
- [ ] Create API route `/api/complete-viewing-event`
- [ ] Implement progress tracking (every 5 seconds)
- [ ] Implement completion logic (80% threshold)
- [ ] Test video playback and tracking

**Deliverables:** Full user flow working (browse → register → watch)

---

### Week 4: Polish & Testing (Nov 25-29)

**Days 16-17 (Nov 25-26): Error Handling & Edge Cases**
- [ ] Add error boundaries
- [ ] Implement error modals with contact info
- [ ] Handle database connection failures gracefully
- [ ] Handle Vimeo API failures
- [ ] Test with network throttling (slow 3G)
- [ ] Add loading states to all components

**Days 18-19 (Nov 27-28): Analytics & Monitoring**
- [ ] Configure Google Analytics 4
- [ ] Add event tracking (page views, form submissions, video plays)
- [ ] Set up Sentry error tracking (optional)
- [ ] Test analytics tracking end-to-end
- [ ] Create reporting query templates

**Day 20 (Nov 29): Final Testing**
- [ ] Full end-to-end testing
- [ ] Load testing (1000 concurrent users)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Security audit
- [ ] Performance audit (all pages Lighthouse ≥90)
- [ ] Mobile device testing
- [ ] Cross-browser testing

**Deliverables:** Production-ready application

---

### Week 5: Launch Week (Dec 1-5)

**Day 21 (Nov 30): Pre-Launch**
- [ ] Final deployment to production
- [ ] DNS propagation check
- [ ] SSL certificate verification
- [ ] Smoke test all critical paths
- [ ] Monitor for errors
- [ ] Brief team on launch day procedures

**Days 22-26 (Dec 1-5): Event Week**
- [ ] Monitor application health
- [ ] Respond to support emails
- [ ] Track viewing events in real-time
- [ ] Make hot fixes if critical issues arise
- [ ] Collect user feedback

**Post-Event (Dec 6+):**
- [ ] Export viewing events CSV
- [ ] Generate reports for boards and sponsors
- [ ] Send reports to stakeholders
- [ ] Retrospective meeting
- [ ] Plan Phase 2 features

---

## 8.2 Risk Mitigation

**Technical Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Database performance issues under load | Low | High | Load test early, use connection pooling, add indexes |
| Vimeo API rate limiting | Low | High | Cache video metadata, use Vimeo's recommended limits |
| Cookie not persisting across sessions | Medium | Medium | Test across browsers, use correct cookie attributes |
| Video tracking fails silently | Medium | Low | Fail gracefully, log errors, don't block playback |

**Content Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Videos not ready by Nov 7 | Medium | High | Start video production early, have backup sessions |
| Session metadata incomplete | Medium | Medium | Create template, review all sessions by Nov 1 |
| School lists inaccurate | Low | Medium | Verify with board contacts, allow "not listed" option |

**Timeline Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Developer unavailable | Low | High | Have backup developer, good documentation |
| Scope creep (adding features) | Medium | Medium | Strict scope control, defer non-P0 features to Phase 2 |
| Testing reveals critical bugs | Medium | High | Build in 2-day buffer before launch, prioritize P0 fixes |

---

## 8.3 Success Criteria

**Technical Success:**
- [ ] All pages load in <2 seconds on 3G
- [ ] Lighthouse score ≥90 on all pages
- [ ] Zero critical bugs during event week
- [ ] 99.9% uptime during event week
- [ ] All viewing events tracked successfully

**User Success:**
- [ ] ≥40% of eligible educators register
- [ ] ≥60% of registered educators watch ≥1 session
- [ ] Average completion rate ≥70%
- [ ] ≥90% provide class context data
- [ ] ≥40,000 students reached

**Business Success:**
- [ ] Reports delivered to all 20 school boards
- [ ] Reports delivered to all session sponsors
- [ ] Positive feedback from educators
- [ ] Platform positioned for Phase 2 expansion

---

# 9. Appendix

## 9.1 Glossary

**Browse-First:** Design pattern where users explore content before providing information

**Combined Form:** Single form collecting both educator profile and class context

**ISR (Incremental Static Regeneration):** Next.js feature for rebuilding static pages on-demand

**RLS (Row Level Security):** Supabase feature for database-level access control

**SSR (Server-Side Rendering):** Rendering pages on the server before sending to client

**ViewingEvent:** Single instance of an educator showing a session to their class

**Cookie-Based Authentication:** Simple identification using HTTP cookies (no passwords)

**Estimated Students:** Calculated student reach based on class size ranges

**Completion Threshold:** 80% of video watched = considered "completed"

**Pre-Fill:** Auto-populating form fields for returning users

## 9.2 File Structure Reference

```
career-launch/
├── app/
│   ├── layout.tsx (Root layout)
│   ├── page.tsx (Schedule landing page)
│   ├── sessions/
│   │   └── [slug]/
│   │       └── page.tsx (Session detail pages)
│   ├── api/
│   │   ├── submit-registration/
│   │   │   └── route.ts
│   │   ├── update-viewing-event/
│   │   │   └── route.ts
│   │   └── complete-viewing-event/
│   │       └── route.ts
│   ├── error.tsx
│   └── not-found.tsx
├── components/
│   ├── schedule/
│   │   ├── BlockSection.tsx
│   │   ├── SessionCard.tsx
│   │   └── ScheduleGrid.tsx
│   ├── session/
│   │   ├── SessionHero.tsx
│   │   ├── TrailerPlayer.tsx
│   │   ├── SessionDetails.tsx
│   │   └── WatchButton.tsx
│   ├── forms/
│   │   ├── CombinedRegistrationForm.tsx
│   │   └── FormField.tsx
│   ├── video/
│   │   ├── VideoPlayer.tsx
│   │   └── VideoModal.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       └── Modal.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   ├── queries.ts
│   │   ├── seed.ts
│   │   └── types.ts
│   ├── cookies/
│   │   └── userCookie.ts
│   ├── api/
│   │   ├── registration.ts
│   │   └── tracking.ts
│   ├── analytics/
│   │   └── googleAnalytics.ts
│   └── utils/
│       ├── classSize.ts
│       ├── validation.ts
│       └── cn.ts
├── styles/
│   ├── globals.css
│   └── design-tokens.css
├── public/
│   ├── images/
│   │   └── session-thumbnails/
│   └── fonts/ (if self-hosting)
├── supabase/
│   └── migrations/
│       └── 20251028_create_tables.sql
├── .env.example
├── .env.local (not committed)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 9.3 Environment Variables

```env
# .env.example (Template for developers)

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here # SECRET - Server-side only

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Application Configuration
COOKIE_DOMAIN=careerlaunch.myblueprint.ca # localhost for development
CONTACT_EMAIL=damian.matheson@myblueprint.ca

# Optional: Error Tracking
NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx
SENTRY_AUTH_TOKEN=your-sentry-auth-token # SECRET

# Node Environment (automatically set by platform)
NODE_ENV=production
```

## 9.4 Key Dependencies

```json
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "react-dom": "18.x",
    "@supabase/supabase-js": "^2.x",
    "@vimeo/player": "^2.x",
    "react-hook-form": "^7.x",
    "tailwindcss": "^3.x",
    "lucide-react": "^0.x", // Icons
    "clsx": "^2.x", // Utility for className
    "tailwind-merge": "^2.x" // Merge Tailwind classes
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/node": "^20.x",
    "@types/react": "^18.x",
    "eslint": "^8.x",
    "eslint-config-next": "14.x",
    "prettier": "^3.x",
    "tsx": "^4.x" // For running TypeScript scripts
  }
}
```

## 9.5 Support & Contacts

**Technical Issues During Event:**
- Email: damian.matheson@myblueprint.ca
- Response Time: <1 hour during event hours (8am-4pm EST)

**Platform Administration:**
- Supabase Dashboard: https://supabase.com/dashboard
- Vercel Dashboard: https://vercel.com/dashboard
- Vimeo Account: https://vimeo.com/manage

**Escalation Path:**
1. Check Vercel logs for errors
2. Check Supabase logs for database issues
3. Email Damian with error details
4. If critical: Rollback to previous Vercel deployment

---

**Document End**

*This technical specification provides complete implementation guidance for building the Career Launch MVP platform. It should be used in conjunction with the PRD and UX/UI Style Guide for comprehensive project understanding.*