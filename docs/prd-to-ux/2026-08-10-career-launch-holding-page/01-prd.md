# PRD — Career Launch Holding Page

## Elevator Pitch

The Career Launch 2025 event is over and a new edition is coming next year. The live site
(careerlaunch.myblueprint.ca) is being converted in place into a single holding page that
announces the return of Career Launch, points visitors to LaunchPad as the current
destination, and preserves access to the 2025 stats pages — the only surviving record of
the event's numbers now that the database is gone.

## Context

- The domain already points at this site; updating in place was chosen over building a
  new landing page.
- Nothing is deleted from the codebase — sessions, booths, and FAQ are hidden (routes
  redirect to `/`, components stay in the repo) so they can be revived for the next
  edition.
- Client constraints: no date shown, no email capture or notify-me form, FAQ removed,
  one line noting that 2025 registration data has been deleted.

## Target Platforms

- Web (desktop and mobile browsers). Desktop-first audience (educators on school
  machines) but must be fully responsive.

## Target Audience

- Ontario high school educators (teachers, guidance counselors, administrators) who
  attended or heard about Career Launch 2025.
- Sponsors/partners checking the 2025 results.
- Anyone landing from old links, bookmarks, or emails (all old routes redirect here).

## Features List

### 1. Holding Page (replaces homepage)

**Description:** A single page at `/` announcing the next edition of Career Launch.

**User Stories:**
- As a returning educator, I land on the site and immediately understand the 2025 event
  is over and a new edition is coming, without seeing broken or stale event content.
- As a visitor looking for career content now, I can click through to LaunchPad.
- As a sponsor or educator, I can view the 2025 impact stats.
- As a privacy-conscious educator, I can see that 2025 registration data has been deleted.

**Content (exact copy, locked):**
- Headline: "Career Launch is returning for a new edition."
- Subline: "Stay tuned!"
- Primary CTA button: "Explore LaunchPad" → https://launchpad.myblueprint.ca/ (new tab)
- Secondary link: "See the 2025 impact →" → `/stats`
- Small print (above footer): "Registration data from Career Launch 2025 has been
  deleted."

**UX/UI Considerations:**
- No date, no countdown, no email capture, no form of any kind.
- Two layout variants will be explored in Claude Design:
  - **Variant A (baseline):** page content sits within the existing site chrome —
    myBlueprint logo header ("myBlueprint | Career Launch" wordmark) on top, one-line
    footer below. Visually consistent with the surviving /stats pages.
  - **Variant B (full-bleed):** a single dramatic screen with no header/footer —
    brand gradient background, logo, headline, two actions.
- Strict myBlueprint brand: Navy #22224C, Blue #0092FF, Light Blue #C6E7FF,
  Off-White #F6F6FF; Museo Sans (Open Sans fallback); 8px spacing grid.
- WCAG 2.1 AA: contrast, keyboard focus, ≥44px touch targets.

### 2. Stats Access (surviving pages, unchanged)

**Description:** `/stats` hub plus `/stats/general`, `/stats/boards`, `/stats/companies`
remain live and unchanged. The holding page links to the hub. Not being redesigned —
in scope only as the destination of the secondary link.

### 3. Route Redirects (invisible)

**Description:** `/sessions/*` and `/booths/*` issue temporary redirects to `/`. No UI;
listed here because it guarantees every old deep link lands on the holding page.

## Primary User Journeys

1. **Returning educator:** An educator who showed sessions in December visits a
   bookmarked session page in the new school year. The old URL silently redirects to the
   holding page; they read that Career Launch is returning, and click through to
   LaunchPad for current career content.
2. **Sponsor checking results:** A sponsor contact visits the site to reference the 2025
   numbers. From the holding page they click "See the 2025 impact" and browse the stats
   hub and subpages exactly as before.
3. **Cold visitor:** Someone hears about Career Launch and types the URL. They see the
   announcement, understand no action is available yet (no date, no signup), and either
   leave informed or explore LaunchPad.

## Out of Scope

- Email capture / notify-me functionality (explicitly excluded by client).
- Any redesign of the stats pages.
- Deleting any existing code, data files, or components.
- Backend/database work (database already decommissioned).
