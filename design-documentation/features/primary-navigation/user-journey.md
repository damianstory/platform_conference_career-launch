---
title: Primary Navigation - User Journey Analysis
description: Complete user flow analysis for primary navigation patterns across all user scenarios
feature: primary-navigation
last-updated: 2025-11-09
version: 1.0.0
related-files:
  - ./README.md
  - ./screen-states.md
  - ./implementation.md
status: approved
---

# Primary Navigation - User Journey Analysis

## Table of Contents

1. [User Personas](#user-personas)
2. [Core Experience Flows](#core-experience-flows)
3. [Advanced Users & Edge Cases](#advanced-users--edge-cases)
4. [Journey Comparison: Before vs After](#journey-comparison-before-vs-after)
5. [User Pain Points Addressed](#user-pain-points-addressed)

---

## User Personas

### Persona 1: Classroom Teacher (Sarah)
**Background:**
- High school science teacher
- Teaching grades 9-11
- Wants to show career-related content during class time
- Limited prep time (needs efficient discovery)
- Tech-comfortable but not tech-savvy

**Goals:**
- Find 2-3 relevant sessions for her biology classes during Dec 1-5
- Understand which companies/sponsors align with STEM careers
- Quickly switch between exploring session topics and sponsor information
- Minimize time spent navigating, maximize time evaluating content

**Context:**
- Will access platform multiple times: initial exploration, detailed planning, day-of access
- Likely to bookmark specific sessions
- May share links with colleagues
- Uses both desktop (planning) and mobile (quick reference)

### Persona 2: Guidance Counselor (Marcus)
**Background:**
- Serves 250+ students across all grades
- Responsible for coordinating career education programming
- Needs to understand full breadth of offerings
- Will recommend sessions to multiple teachers

**Goals:**
- Survey all available sessions and booths comprehensively
- Create a recommended list for different teacher departments
- Match sponsor booths to curriculum areas
- Navigate quickly between sessions and sponsors to build comprehensive view

**Context:**
- Power user who will explore extensively
- Needs to cross-reference constantly: "Which sponsors align with this healthcare session?"
- Time-sensitive (5-day window to coordinate with multiple teachers)
- Desktop-primary user

### Persona 3: School Administrator (Jennifer)
**Background:**
- Vice-principal responsible for school-wide initiatives
- Wants to understand platform value for potential future partnerships
- Less interested in specific sessions, more interested in overall offering
- Limited time for exploration

**Goals:**
- Quickly understand what's available (both sessions and sponsors)
- Assess quality and relevance for student body
- Determine if this is worth promoting to teaching staff
- Minimal friction, maximum clarity

**Context:**
- First-time user, brief visit
- Needs clear navigation to understand platform structure
- May only visit once before making recommendation decision
- Desktop user

---

## Core Experience Flows

### Flow 1: First-Time Exploration (Classroom Teacher - Sarah)

#### Entry Point: Homepage

**Step 1: Landing on Platform**
- **URL:** `https://careerlaunch.myblueprint.ca/`
- **State:** Home page with full 4-block schedule visible
- **User Action:** Scans page to understand platform structure
- **System State:** Primary navigation shows "Sessions" and "Booths" options
- **Visual Hierarchy:** Large hero section, clear call-to-action areas
- **User Thought:** "I can see sessions by time block... what about the companies involved?"

**Available Actions:**
- Click "Sessions" navigation item (already viewing sessions on home)
- Click "Booths" navigation item to explore sponsors
- Click specific session card to view details
- Scroll to explore time blocks

**Decision Point:** User decides to first understand sponsor landscape before committing to specific sessions.

**Step 2: Navigate to Booths**
- **User Action:** Clicks "Booths" in primary navigation
- **Interaction Feedback:**
  - Hover state: Blue text color, light blue background
  - Click feedback: Brief active state
  - Navigation: Smooth transition (no page reload in SPA)
- **Navigation Time:** < 200ms perceived, instant actual
- **URL Change:** `/` → `/booths`

#### New Page: Booths Landing

**Step 3: Exploring Sponsor Booths**
- **State:** Booths landing page displaying all sponsor booths
- **Primary Navigation State:**
  - "Sessions" = inactive (Navy text, transparent background)
  - "Booths" = active (Blue text, light blue background, blue underline)
  - Logo = interactive (links to home)
- **User Behavior:** Scrolls through sponsor cards, reading descriptions
- **User Thought:** "I see several STEM-related companies... which sessions are they connected to?"

**Available Actions:**
- Click individual booth card to view details
- Use primary navigation to switch to "Sessions"
- Click logo to return to home
- Click FAQ for help

**Decision Point:** User wants to return to sessions to find STEM-specific content.

**Step 4: Direct Navigation to Sessions**
- **User Action:** Clicks "Sessions" in primary navigation
- **Interaction Feedback:** Hover → Click → Navigate
- **Navigation Time:** < 200ms
- **URL Change:** `/booths` → `/sessions`
- **User Satisfaction:** ✅ **One click** to switch content views

#### Sessions Landing Page

**Step 5: Cross-Referencing Sessions**
- **State:** Sessions landing page (or could return to home with schedule)
- **Primary Navigation State:**
  - "Sessions" = active
  - "Booths" = inactive
- **User Behavior:** Scans sessions, identifies 2 candidates
- **User Thought:** "These look good, let me check details before deciding."

**Available Actions:**
- Click session card to view full details
- Return to Booths to verify sponsor alignment
- Use time block filters (if available)

**Step 6: Iterative Exploration**
- **Pattern:** User navigates back and forth 2-3 more times:
  - Sessions (find interesting topic) → Booths (verify sponsor quality) → Sessions (add to plan)
- **Each Switch:** 1 click via primary navigation
- **Total Time Saved:** ~6-10 seconds per switch (compared to home-mediated navigation)
- **User Experience:** Fluid, uninterrupted exploration flow

**Success Outcome:** User selects 3 sessions for her classes, feels confident in choices.

---

### Flow 2: Return Visit (Guidance Counselor - Marcus)

#### Entry Point: Direct Link to Sessions

**Step 1: Arriving via Bookmark**
- **URL:** `https://careerlaunch.myblueprint.ca/sessions` (bookmarked from previous visit)
- **State:** Sessions landing page
- **Primary Navigation State:**
  - Logo interactive (links to home)
  - "Sessions" active
  - "Booths" inactive
- **User Context:** Marcus has already explored platform, now creating recommendations

**Step 2: Building Department-Specific Lists**
- **Task:** Create list of healthcare-related sessions for Health & Phys Ed department
- **User Action:** Opens session detail for "Nursing Careers" session
- **Navigation:** Click session card
- **URL Change:** `/sessions` → `/sessions/nursing-careers`

**Step 3: On Session Detail Page**
- **State:** Session detail page with full information
- **Navigation Pattern:** Uses existing breadcrumb (per design system)
  - Breadcrumb: "Home > Sessions > Nursing Careers"
  - Primary navigation: Not shown on detail pages (breadcrumb replaces it)
- **User Action:** Reads session description, notes sponsor involvement

**Step 4: Checking Related Sponsors**
- **User Thought:** "Which healthcare companies have booths? Let me check."
- **User Action:** Clicks breadcrumb "Home" → Returns to homepage
- **Alternative Desired Flow:** Could click "Booths" in navigation IF available on detail page
- **Current Reality:** Must go Home → Booths (2 clicks)

**Design Decision Note:**
- Detail pages use breadcrumbs (established pattern)
- Primary navigation could coexist with breadcrumbs
- Consider adding primary navigation to detail pages in future iteration

**Step 5: Navigate to Booths**
- **From:** Homepage
- **Action:** Clicks "Booths" in primary navigation
- **URL Change:** `/` → `/booths`
- **Time:** 1 click from home (vs 2 if had to go Sessions → Home → Booths)

**Step 6: Power User Pattern**
- **Behavior:** Marcus switches between Booths and Sessions 8-10 times during session
- **Each Switch:** 1 click via primary navigation
- **Alternative (Old Pattern):** Would require 16-20 clicks total
- **Time Savings:** ~30-40 seconds per session, reduced cognitive friction
- **User Satisfaction:** High - can maintain focus on content rather than navigation

---

### Flow 3: Quick Reference (Teacher on Day-Of Event)

#### Entry Point: Mobile Device, Direct Session Link

**Step 1: Accessing Session from Email/Calendar**
- **Device:** Mobile phone (iPhone, 375px viewport)
- **URL:** Direct link to session detail from calendar event
- **State:** Session detail page (existing breadcrumb pattern)
- **User Context:** In classroom, students waiting, needs to start video quickly

**Step 2: Session Loads**
- **Navigation Visible:** Breadcrumb only on detail page
- **User Action:** Clicks "Watch with Your Class" button
- **Flow:** Existing registration/viewing flow (out of scope for navigation enhancement)

**Step 3: Mid-Session Decision: Switch to Different Block**
- **Context:** Realized she booked wrong session, needs to switch to different time block
- **User Action:** Uses breadcrumb to navigate back
- **Clicks:** "Home" in breadcrumb → Returns to schedule page

**Step 4: On Homepage (Mobile)**
- **State:** Homepage with schedule blocks
- **Primary Navigation:**
  - Collapsed to hamburger menu (viewport < 768px)
  - Logo centered
  - Hamburger icon top-left
- **User Action:** Scrolls to find correct time block, but wants to verify sponsor booth first

**Step 5: Mobile Navigation to Booths**
- **User Action:** Taps hamburger icon
- **Interaction:**
  - Menu slides down from top
  - Full-screen overlay appears
  - Items: Sessions, Booths, FAQ
  - "Sessions" has blue underline (active state - currently viewing home/sessions)
- **User Action:** Taps "Booths"
- **Navigation:** Menu auto-closes, navigates to `/booths`
- **Time:** 2 taps total (hamburger + booths), < 1 second

**Step 6: Mobile Booths Experience**
- **State:** Booths landing page, mobile layout
- **Navigation:** Hamburger menu (collapsed)
- **User Action:** Finds booth, reads description, decides to return to sessions

**Step 7: Return to Sessions**
- **User Action:** Taps hamburger → Taps "Sessions"
- **Time:** 2 taps, < 1 second
- **Alternative (Old Pattern):** Hamburger → Home → Sessions (3 taps)
- **Savings:** 1 tap, ~0.5 seconds (meaningful in urgent classroom context)

**Success Outcome:** Teacher quickly verifies information and returns to correct session. Students experience minimal wait time.

---

## Advanced Users & Edge Cases

### Edge Case 1: User Who Bookmarked Specific Booth

**Scenario:**
- User bookmarked `/booths/microsoft-booth` from previous visit
- Returns directly to booth detail page
- Wants to explore sessions related to technology careers

**Current Navigation Experience:**
- Booth detail page shows breadcrumb: "Home > Booths > Microsoft"
- User must click "Home" or "Booths" in breadcrumb
- Then navigate to Sessions from home

**With Enhanced Navigation:**
- If primary navigation added to detail pages: Click "Sessions" directly (1 click)
- Current pattern (breadcrumb only): Click "Home" → Click "Sessions" (2 clicks)

**Design Consideration:**
- Maintain breadcrumb pattern for hierarchical context
- Consider adding primary navigation to detail pages for cross-section access
- Balances wayfinding (breadcrumb) with efficiency (primary nav)

### Edge Case 2: User with JavaScript Disabled

**Scenario:**
- Accessibility concern: User has JavaScript disabled or unavailable
- Relies on standard HTML navigation

**Navigation Experience:**
- All navigation items are standard `<a>` tags with href attributes
- No JavaScript required for basic navigation
- Hover states use CSS (no JS dependency)
- Active states determined server-side via route matching

**Fallback Pattern:**
- Mobile: Show text links instead of hamburger menu
- Full progressive enhancement approach
- Core navigation remains functional without JS

### Edge Case 3: Screen Reader User (Keyboard-Only Navigation)

**Scenario:**
- User navigates via keyboard and screen reader (NVDA/JAWS/VoiceOver)
- Needs clear landmarks and focus management

**Journey:**

**Step 1: Page Load**
- Screen reader announces: "Primary navigation, landmark"
- Tab order: Logo → Sessions → Booths → FAQ → (main content)

**Step 2: Exploring Navigation**
- Tab to "Sessions": SR announces "Link, Sessions, current page"
- Tab to "Booths": SR announces "Link, Booths"
- Focus indicator: Visible blue outline with shadow

**Step 3: Activating Link**
- User presses Enter on "Booths"
- Page navigates, focus management: Focus moves to main content heading
- SR announces new page title and primary navigation landmark

**Step 4: Mobile Menu (Screen Reader)**
- Tab to hamburger: SR announces "Button, Open navigation menu, collapsed"
- Activate with Enter/Space: Menu expands
- SR announces: "Navigation menu, expanded, 3 items"
- Tab through items: "Link, Sessions, current page" → "Link, Booths" → "Link, FAQ"
- Press Escape: Menu closes, focus returns to hamburger button

**Accessibility Success:**
- Clear ARIA labels and landmarks
- Logical tab order
- Focus management on navigation
- Keyboard-only operation fully supported

### Edge Case 4: User on Very Wide Display (4K Monitor)

**Scenario:**
- User on 3840px wide display
- Needs navigation to remain readable and accessible

**Layout Behavior:**
- Container max-width: 1440px (centered)
- Navigation doesn't stretch to full viewport width
- Maintains readable horizontal rhythm
- No excessive travel distance for mouse movement
- Font sizes remain optimal (no scaling beyond 1440px)

**User Experience:**
- Navigation feels appropriately sized
- No disorientation from excessive whitespace
- Consistent with modern web design conventions

### Edge Case 5: User with Reduced Motion Preference

**Scenario:**
- User has `prefers-reduced-motion: reduce` set in OS
- Motion-sensitive, needs minimal animation

**Navigation Experience:**
- Hover transitions: Reduced to < 10ms (effectively instant)
- Mobile menu slide animation: Removed, instant appearance
- Active underline animation: Instant appearance, no slide-in
- All transitions respect user preference
- Functionality unaffected, only animation timing changed

**CSS Implementation:**
```css
@media (prefers-reduced-motion: reduce) {
  .nav-item,
  .mobile-menu,
  .active-underline {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Journey Comparison: Before vs After

### Scenario: Finding Related Sessions and Sponsors (Common Flow)

#### Before (Hub-and-Spoke Pattern)

**User Goal:** Explore healthcare sessions, verify related sponsor booths, return to finalize session choice.

```
┌─────────────┐
│    Home     │ ← Starting point
└─────┬───────┘
      │ (1) Click "Sessions" card
      ▼
┌─────────────┐
│  Sessions   │ ← Find interesting session
└─────┬───────┘
      │ (2) Click logo (only option to navigate elsewhere)
      ▼
┌─────────────┐
│    Home     │ ← Forced intermediate step
└─────┬───────┘
      │ (3) Click "Booths" card
      ▼
┌─────────────┐
│   Booths    │ ← Check sponsor info
└─────┬───────┘
      │ (4) Click logo
      ▼
┌─────────────┐
│    Home     │ ← Forced intermediate step again
└─────┬───────┘
      │ (5) Click "Sessions" card
      ▼
┌─────────────┐
│  Sessions   │ ← Return to finalize choice
└─────────────┘

Total Clicks: 5
Total Page Loads: 5
Intermediate Steps: 2 (both returns to Home)
User Frustration: Moderate-High
```

#### After (Direct Navigation Pattern)

**User Goal:** Same - explore healthcare sessions, verify sponsors, return to sessions.

```
┌─────────────┐
│    Home     │ ← Starting point
└─────┬───────┘
      │ (1) Click "Sessions" in nav
      ▼
┌─────────────┐
│  Sessions   │ ← Find interesting session
└─────┬───────┘
      │ (2) Click "Booths" in nav (direct!)
      ▼
┌─────────────┐
│   Booths    │ ← Check sponsor info
└─────┬───────┘
      │ (3) Click "Sessions" in nav (direct!)
      ▼
┌─────────────┐
│  Sessions   │ ← Return to finalize choice
└─────────────┘

Total Clicks: 3
Total Page Loads: 3
Intermediate Steps: 0
User Frustration: Low
Efficiency Gain: 40% fewer clicks
```

**Impact Analysis:**
- **Clicks Reduced:** 5 → 3 (40% improvement)
- **Unnecessary Steps Eliminated:** 2 intermediate home page visits
- **Cognitive Load:** Reduced - user can focus on content, not navigation path
- **Time Savings:** ~4-6 seconds per iteration (meaningful across multiple sessions)
- **User Satisfaction:** Higher - matches user mental model of co-equal sections

### Scenario: Mobile User Switching Sections

#### Before (Hub-and-Spoke)

```
Mobile Booths Page → Hamburger → Home → Close Menu → Scroll → Sessions Card → Sessions Page

Total Taps: 4 (hamburger, home, close, sessions)
Total Time: ~3-4 seconds
Mental Model: "Why do I need to go home to get to Sessions?"
```

#### After (Direct Navigation)

```
Mobile Booths Page → Hamburger → Sessions → Sessions Page (menu auto-closes)

Total Taps: 2 (hamburger, sessions)
Total Time: ~1-2 seconds
Mental Model: "Ah, I can just switch directly between the sections"
```

**Mobile Impact:**
- **Taps Reduced:** 4 → 2 (50% improvement)
- **Time Savings:** ~2 seconds per switch (significant on mobile)
- **User Clarity:** Direct relationship between sections is clearer

---

## User Pain Points Addressed

### Pain Point 1: "I feel lost in the navigation"

**Before:**
- User unsure how to get from Booths to Sessions
- Only visible action: Logo (unclear destination without clicking)
- No indication that Sessions exists when viewing Booths

**After:**
- Clear, persistent navigation shows both sections
- Active state indicates current location
- User always knows where they are and where they can go

**User Feedback (Projected):**
- "I can see exactly where I am and what else is available"
- "Navigation feels intuitive, like other professional platforms I use"

### Pain Point 2: "Why do I keep having to go back to Home?"

**Before:**
- Home page acts as mandatory hub
- Creates artificial barrier between sibling content sections
- Doesn't match user task flow (which is exploratory and iterative)

**After:**
- Home is accessible but not mandatory
- Sections have direct connection
- Matches user mental model: Sessions and Booths are peers

**User Feedback (Projected):**
- "I can switch between sessions and sponsors easily"
- "I don't have to remember the path - it's always visible"

### Pain Point 3: "This takes too many clicks for a simple task"

**Before:**
- Every section switch: 2 clicks + 2 page loads
- Multiplied across 5-10 switches during active planning: 20+ clicks
- Friction accumulates, especially during time-sensitive event

**After:**
- Every section switch: 1 click + 1 page load
- Same 5-10 switches: 10 clicks total
- 50% reduction in effort for common task

**User Feedback (Projected):**
- "This is fast - I can explore everything without getting frustrated"
- "Way easier than I expected for an event platform"

### Pain Point 4: "Mobile navigation is clunky"

**Before:**
- Mobile users especially affected by multi-step navigation
- Tapping logo → waiting for home load → finding section → tapping again
- Small touch targets, unclear paths

**After:**
- Hamburger menu shows all primary options immediately
- Direct access to both sections
- Large touch targets (56px height) for easy tapping
- Auto-close menu after selection (one less tap)

**User Feedback (Projected):**
- "Mobile experience feels as good as desktop"
- "I can check booths quickly during class without fumbling around"

### Pain Point 5: "I can't tell where I am in the site"

**Before:**
- No active state indication on navigation
- Logo looks the same everywhere
- User must remember "Did I already click to Sessions or am I on Home?"

**After:**
- Clear active state with blue underline and background
- Visual differentiation between current section and available options
- Logo behavior adapts to provide appropriate return path

**User Feedback (Projected):**
- "I always know exactly where I am"
- "The blue underline makes it obvious which section I'm viewing"

---

## User Success Metrics

### Quantitative Metrics

**Navigation Efficiency:**
- Average clicks to complete cross-section task: **Target: ≤ 1.5 clicks**
- Time to switch between sections: **Target: < 1 second (perceived)**
- Cross-section exploration rate: **Target: 60%+ of users visit both Booths and Sessions**

**Engagement Metrics:**
- Pages per session: **Expected increase: 15-20%**
- Bounce rate from section pages: **Expected decrease: 10-15%**
- Average session duration: **Expected increase: 20-30%**

**Usability Metrics:**
- Navigation comprehension (user testing): **Target: 95%+ understand structure**
- Task completion rate: **Target: 90%+ complete "find related session and sponsor"**
- Error rate (clicking wrong nav item): **Target: < 5%**

### Qualitative Metrics

**User Satisfaction:**
- "Navigation is intuitive": **Target: 85%+ agree**
- "I can easily switch between sections": **Target: 90%+ agree**
- "I always know where I am": **Target: 85%+ agree**

**Usability Testing Observations:**
- Users complete cross-section navigation without hesitation
- Users don't express frustration with navigation
- Users can articulate relationship between Booths and Sessions
- Users complete tasks faster than benchmark (old pattern)

---

## Related Documentation

- [Primary Navigation README](./README.md) - Feature overview and strategy
- [Screen States Documentation](./screen-states.md) - Visual specifications
- [Implementation Guide](./implementation.md) - Developer handoff
- [Navigation Component Spec](../../design-system/components/navigation.md) - Component library
