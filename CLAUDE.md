# CLAUDE.md

This file describes the current Career Launch Platform implementation for agents working in this repository.

## Product overview

Career Launch is a public, on-demand career video and sponsor-booth platform. It launched for Ontario high-school audiences on December 1–5, 2025. The event is over, but all 27 sessions and booth resources remain available.

The current post-event model is direct access:

- Never require registration or an account to browse or watch.
- Never collect viewer email, school, board, class size, grade, or user type.
- Every **Watch Session** entry point should reach the full Vimeo player without another user decision.
- Keep Google Analytics product-usage events, but do not recreate profile-level registration reporting.

Historical files under `Specs/` and `design-documentation/` may describe the retired event-week registration flow. Current code and this file take precedence.

## Technology

- Next.js 15 App Router with React 18
- TypeScript
- Tailwind CSS and myBlueprint design tokens
- Vimeo Pro and `@vimeo/player`
- Google Analytics 4
- Jest and Testing Library
- Vercel

There is no active Supabase or other application-database integration.

## Commands

```bash
npm install
npm run dev
npm run type-check
npm test
npm run build
```

## Repository structure

```text
app/
  page.tsx                    Homepage
  sessions/                  Public session list and detail routes
  booths/                    Public expo and booth detail routes
  stats/                     Historical event reporting
components/
  session/                   Full player, trailer, descriptions, organization context
  sessions/                  Schedule/list components
  booths/                    Expo and booth-detail components
  stats/                     Historical reporting slides and charts
  layout/                    Shared navigation and detail headers
data/
  sample-sessions.ts         Session source of truth
  sample-booths.ts           Booth source of truth
lib/
  analytics.ts               GA event definitions
  sessionPlayback.ts         Cross-page playback request and Vimeo URL helpers
  hooks/useSessionContext.ts Booth-to-session back-link context
types/                       Shared TypeScript types
```

## Session playback architecture

`components/session/VideoSection.tsx` owns the detail-page player state:

- `checking` renders a neutral frame during hydration.
- `initial` shows Watch Session and Watch Trailer.
- `playing` renders the Vimeo iframe.
- `error` shows Video unavailable when the full URL is absent or invalid.

Cross-page entry points call `requestSessionPlayback(session.slug)` before navigating. `VideoSection` consumes and clears an exact slug match in an effect. Playback URLs are built with the `URL` API so Vimeo privacy parameters are preserved while `autoplay=1` is added.

Entry points that must preserve this contract:

- `components/sessions/SessionTableRow.tsx`
- `components/session/TrailerModal.tsx`
- `components/booths/sections/SessionBanner.tsx`
- The detail-page Watch Session button

The booth banner must continue calling `useSessionContext().saveContext(...)` so the session detail header can provide a Back to Booth route.

## Analytics

Google Analytics is loaded conditionally from `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `app/layout.tsx`.

Session analytics include:

- Detail views and Watch clicks
- Trailer views, closures, and conversions
- Vimeo playback start
- 25%, 50%, and 75% progress milestones
- Completion at 80% or video end

`session_video_started` fires from Vimeo’s first `play` event, not from displaying the iframe. A ref prevents duplicate starts after pause/resume. No registration or user-type analytics remain.

## Content access

- Homepage, schedules, session details, trailers, full sessions, booths, and resources are public.
- Session content is hardcoded through `data/sample-sessions.ts`.
- Booth content is hardcoded through `data/sample-booths.ts`.
- Full sessions use Vimeo embed URLs; trailers currently use Descript embeds.
- Browser autoplay may be blocked. Vimeo controls must remain usable as fallback.

## Brand requirements

- Navy `#22224C`
- Blue `#0092FF`
- Light Blue `#C6E7FF`
- Off-White `#F6F6FF`
- Museo Sans primary with Open Sans fallback
- Use the existing 8px-oriented spacing system and established components

## Accessibility and security

- Maintain WCAG 2.1 AA contrast targets.
- Keep keyboard interaction and visible focus indicators.
- Use semantic HTML and descriptive iframe/button labels.
- Keep touch targets at least 44px on mobile.
- Respect reduced-motion preferences.
- Preserve the Content Security Policy and other headers in `middleware.ts`.
- Vimeo iframes need `allow="autoplay; fullscreen; picture-in-picture"` and `allowFullScreen`.

## Environment variables

```text
NEXT_PUBLIC_GA_MEASUREMENT_ID=
CONTACT_EMAIL=damian.matheson@myblueprint.ca
```

Supabase and registration-cookie variables are no longer part of the runtime.

## Historical documentation

- `MODAL_IMPLEMENTATION_SUMMARY.md` and `TESTING_GUIDE.md` describe the retired registration flow and carry a historical banner.
- `SECURITY_IMPLEMENTATION_SUMMARY.md`, `SECURITY_TESTING_REPORT.md`, and `IMMEDIATE_ACTION_CHECKLIST.md` document a separate security incident and remain unchanged.
- Original product/design specifications remain for historical context and are not current requirements for session access.
