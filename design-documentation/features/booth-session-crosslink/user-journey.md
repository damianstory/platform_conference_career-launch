---
title: Booth-to-Session User Journey
description: Complete user flow analysis for educators discovering and navigating from sponsor booths to career sessions
feature: booth-session-crosslink
last-updated: 2025-11-22
version: 1.0.0
related-files:
  - README.md
  - screen-states.md
dependencies:
  - Booth detail page structure
  - Session detail page navigation
status: approved
---

# Booth-to-Session User Journey

## User Personas

### Primary Persona: Engaged Explorer
**Profile**: Sarah Thompson, Grade 10 Science Teacher
- **Context**: Browsing booths during prep period, looking for resources to supplement career education
- **Tech Comfort**: High (uses educational platforms daily)
- **Time Constraint**: 15-20 minutes available
- **Goal**: Find 2-3 high-quality resources to share with students

**Pain Points**:
- Overwhelmed by number of resources available
- Unsure which organizations offer video content vs. just PDFs
- Wants to preview content quality before committing class time

### Secondary Persona: Resource Collector
**Profile**: Michael Chen, Guidance Counselor
- **Context**: Building resource library for upcoming career fair
- **Tech Comfort**: Medium (comfortable with basic navigation)
- **Time Constraint**: Longer sessions (30-45 minutes), multiple visits
- **Goal**: Collect comprehensive materials across all industries

**Pain Points**:
- Hard to track which booths have video sessions vs. just static content
- Wants to watch sessions later but needs to bookmark/remember them
- Looking for organizations that offer both resources AND live/recorded content

## Core User Flow

### Entry Point: Booth Discovery

**Step 1A: From Homepage → Expo Hall**
1. User lands on homepage
2. Clicks "Explore Booths" button (navy section, right side of split hero)
3. Navigates to `/booths` expo hall view
4. Filters by industry or browses grid of booth cards
5. Clicks booth card → navigates to booth detail page

**Step 1B: Direct Booth Access**
1. User receives direct link to booth (e.g., from sponsor email, social media)
2. Navigates directly to `/booths/[slug]`
3. Lands on booth detail page

**User State**: Browsing mode, exploring booth content

---

### Primary Journey: Booth Content Exploration

**Step 2: Booth Content Engagement**

**Visual State**: Booth detail page loads with full layout
- **Header**: Organization logo, name, industry tags, "Learn More" CTA
- **Video Section**: Promotional video player (YouTube/Vimeo embed)
- **Session Slides**: Google Slides deck embed (right column, Platinum only)
- **Resources Section**: 2x3 grid of downloadable resources and links

**User Actions** (typical browsing pattern):
1. **Scan header** (2-3 seconds): Recognize organization name, industry alignment
2. **Watch video** (30-90 seconds): Preview or partial watch of promotional content
   - **Engagement Signal**: User who watches >30s is highly engaged
3. **Browse resources** (1-2 minutes): Click through cards, open PDFs in new tabs
   - **Engagement Signal**: Downloads indicate intent to use materials
4. **Scroll to session slides** (Platinum only): Preview session deck if visible
   - **Engagement Signal**: Slide interaction shows interest in deeper content

**Decision Point**: User has engaged with 2-3 booth elements. What's next?

---

### Critical Moment: Session Discovery

**Step 3: Session Cross-Link Encounter**

**Visual Trigger**: User scrolls past Resources section, encounters full-width banner

**Component State**: SessionCrossLink banner appears
```
┌──────────────────────────────────────────────────────────┐
│  [Blue Block 2 Badge]  CAREER SESSION FROM THIS ORG      │
│                                                           │
│  [Thumbnail]  Introduction to Skilled Trades Pathways    │
│               Block 2 · 18 minutes · Construction        │
│               [Watch Session →]                           │
└──────────────────────────────────────────────────────────┘
```

**User Cognitive Process** (~2-5 seconds):
1. **Recognition**: "CAREER SESSION FROM THIS ORGANIZATION" label creates explicit connection
2. **Evaluation**: Session title, duration, and industry alignment assessed for relevance
3. **Decision**: Is this worth 18 minutes of class time?

**User Mental Models**:
- **Engaged Explorer (Sarah)**: "Oh, they presented a session? If their booth resources are this good, the session is probably high-quality."
- **Resource Collector (Michael)**: "I didn't realize they had a video session. Let me bookmark this for later."

**Friction Points**:
- ❌ If banner appears too early (above resources): Feels pushy, interrupts browsing
- ❌ If banner is below About Us: User may never scroll far enough to see it
- ✅ Current placement (between Resources and About): Natural discovery after engagement

---

### Conversion: Session Navigation

**Step 4: Click-Through to Session**

**User Action**: Clicks anywhere on banner (desktop) or "Watch Session" button (mobile)

**Interaction Feedback**:
- **Hover** (desktop): Shadow elevation increases (sm → md), button background lightens
- **Click**: Immediate navigation to `/sessions/[session-slug]`
- **Navigation Type**: Same window (not new tab)
  - **Rationale**: Maintains single-browsing context
  - **Exit Path**: Browser back button returns to booth page

**User State**: Transitions from "browsing booth" to "evaluating session"

---

### Session Detail Page Experience

**Step 5: Session Evaluation & Commitment**

**Visual State**: Session detail page loads
- **Hero Section**: Session title, presenter info, block number, duration
- **Trailer Video**: Preview video (plays without registration)
- **Description**: Learning objectives, session overview
- **Organization Section**: Links back to booth (bidirectional navigation)

**User Actions** (decision funnel):
1. **Watch trailer** (30-60 seconds): Preview content quality and teaching style
   - **Engagement Signal**: Trailer completion = high intent
2. **Read description** (30 seconds): Confirm alignment with curriculum needs
3. **Check duration** (5 seconds): Ensure fits within class period

**Decision Point**: Watch with class or return to browsing?

**Outcome A - High Engagement**: User clicks "Watch with Your Class"
- **Next Step**: Registration modal appears (6-field form)
- **User Journey Continues**: Standard session viewing flow

**Outcome B - Defer Decision**: User bookmarks page or takes note
- **Next Step**: Returns to booth via browser back or clicks booth link in Organization Section
- **User State**: Still engaged, may convert later

**Outcome C - Low Interest**: User navigates away
- **Next Step**: Returns to expo hall or sessions list
- **Analytics Value**: Still captured engagement (booth → session), even without conversion

---

## Advanced User Flows

### Flow A: Multi-Booth Session Discovery

**Scenario**: User discovers multiple sessions while browsing booths

**Journey**:
1. Browse Booth A (Construction industry) → discover session → click
2. Watch session trailer, bookmark for later
3. Return to expo hall (breadcrumb or back button)
4. Browse Booth B (Energy industry) → discover different session → click
5. Repeat pattern across 3-4 booths in 20-minute browsing session

**User Behavior Pattern**: Session cross-link acts as discovery mechanism
- User may not watch immediately, but awareness created
- Builds mental list of "sessions to watch later"
- Booth exploration becomes session curation activity

**Success Metric**: Multiple booth visits → multiple session bookmarks → future session views

---

### Flow B: Return Visitor Session Recognition

**Scenario**: User has already watched session, now visiting booth

**Journey**:
1. User watched session yesterday (Block 2, 9:00 AM class)
2. Today, browsing booths for supplementary resources
3. Encounters booth for same organization
4. Scrolls to session cross-link, recognizes session title

**User Reaction**: "Oh, I already watched this yesterday!"
- **Positive Sentiment**: Reinforces booth credibility ("I know this organization")
- **No Click**: User continues browsing booth resources instead
- **Potential Enhancement**: Show "✓ Watched" badge on cross-link for returning users

**Analytics Impact**: Low CTR from this user, but high engagement with booth content
- **Interpretation**: Cross-link still valuable for context, even without click

---

### Flow C: Mobile Browsing & Deferred Action

**Scenario**: Teacher browsing on phone during lunch, plans class viewing later

**Journey**:
1. Mobile user browses booth on phone (smaller screen, vertical layout)
2. Scrolls through content, session cross-link appears
3. Reads session title, duration, block number
4. **Does NOT click** (not at desk, not ready to commit)
5. Mental note: "I'll watch this with my Period 3 class tomorrow"
6. Later: Opens platform on desktop, searches for session, watches with class

**Mobile UX Considerations**:
- Session thumbnail hidden on mobile (simplifies layout)
- Full-width "Watch Session" button (easy thumb reach)
- Block badge and metadata still visible (decision-making info)
- **No expectation of immediate conversion**: Mobile is browsing, desktop is action

**Success Metric**: Mobile booth view → desktop session view (cross-device funnel)

---

## Edge Cases & Error States

### Edge Case 1: Booth Without Associated Session

**Scenario**: User visits booth that has no session (most booths)

**Component Behavior**: SessionCrossLink does not render
```typescript
{booth.associatedSessionSlug && (
  <SessionCrossLink session={getSessionBySlug(booth.associatedSessionSlug)} />
)}
```

**User Experience**: No visual indication of missing content
- **Rationale**: Session link is enhancement, not core booth feature
- **No empty state needed**: Absence doesn't create confusion

---

### Edge Case 2: Invalid Session Slug

**Scenario**: Booth has `associatedSessionSlug` but session doesn't exist in database

**Component Behavior**: Component should handle gracefully
```typescript
const session = getSessionBySlug(booth.associatedSessionSlug);
if (!session) return null; // Don't render broken component
```

**Developer Experience**: Console warning in development mode
- "Warning: Booth '[booth-name]' references non-existent session '[slug]'"

---

### Edge Case 3: Session Changed/Removed

**Scenario**: Organization had session in conference, but it was removed post-event

**Data Management**: Update booth data to remove `associatedSessionSlug`
- **Manual**: Edit booth data file, remove field
- **Automated**: Admin dashboard toggle (future enhancement)

**User Impact**: No component renders, no broken experience

---

## Accessibility Journey

### Keyboard Navigation Flow

**Tab Order**:
1. User tabs through booth header elements (logo, learn more button)
2. Video player controls receive focus
3. Resource cards receive focus (6 tab stops)
4. **SessionCrossLink receives focus**
   - **Visual**: 2px blue outline with 4px offset
   - **Screen reader**: "Watch career session: Introduction to Skilled Trades Pathways from Block 2"
5. About Us / Get in Touch sections receive focus

**Activation**:
- **Enter** or **Space**: Navigates to session detail page (same as click)
- **Escape**: No modal behavior (component is link, not modal trigger)

**Screen Reader Experience**:
```
"Article. Link. Career session from this organization.
Heading level 3: Introduction to Skilled Trades Pathways.
Block 2, 18 minutes, Construction and Trades.
Button: Watch Session with arrow right icon."
```

---

## Performance Considerations

### Component Load Timing

**Scenario**: Booth page loads with many sections (video, slides, resources, cross-link, about, contact)

**Loading Strategy**:
1. **Above-fold content** loads first (header, video, session slides)
2. **Resources section** loads (lazy-loaded images)
3. **SessionCrossLink** loads (no heavy assets, just session data lookup)
4. **Below-fold content** loads (about, contact)

**Performance Target**: SessionCrossLink visible within 2 seconds of page load
- **No lazy loading needed**: Component is lightweight (<1KB), no external images required
- **Session data**: Pre-loaded with booth page (single data fetch)

---

## Conversion Funnel Summary

```
Expo Hall → Booth Card Click → Booth Detail Page
  ↓
Booth Content Engagement (video, resources)
  ↓
Session Cross-Link Scroll (exposure)
  ↓
Session Cross-Link Click (CTR: 15-20% target)
  ↓
Session Detail Page → Trailer Watch → Registration → Video View
```

**Funnel Metrics**:
- **Booth visitors**: 1,000
- **Session cross-link exposures**: 800 (80% scroll depth)
- **Session cross-link clicks**: 120-160 (15-20% CTR)
- **Session trailer watches**: 80-120 (60-75% of clicks)
- **Registration completions**: 60-90 (75% of trailer watches)
- **Full video views**: 50-70 (80-90% of registrations)

**Overall Conversion**: 5-7% of booth visitors convert to full session views
- **Benchmark**: Comparable to "related content" modules on educational platforms

---

## Last Updated

**2025-11-22** - Initial user journey documentation created with core flows, edge cases, and conversion funnel analysis.
