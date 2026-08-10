# Features & States — Career Launch Holding Page

_Scoped by the chosen UX philosophy in `01b-ux-philosophy.md` (The Announcement).
Scope: Holding Page feature only, per user direction._

---

## Feature: Holding Page

**User Stories:**
- As a returning educator, I want to immediately understand the 2025 event is over and a
  new edition is coming, so that I'm not confused by stale event content or broken links.
- As a visitor looking for career content now, I want an obvious path to LaunchPad, so
  that I leave with something useful instead of a dead end.
- As a sponsor or educator, I want to reach the 2025 impact stats, so that I can
  reference the event's results.
- As a privacy-conscious educator, I want to see that 2025 registration data has been
  deleted, so that I know my information is gone.

**Screens this feature spans:**
- Holding Page (`/`) — the single announcement moment; every old route redirects here.

### Screen: Holding Page

**States:**

#### Empty
Not applicable — the page has no user-generated or fetched content. Its default state is
fully authored. Stated explicitly rather than omitted.

#### Loading
Server-rendered static page; no meaningful loading state beyond normal page load. No
skeletons or spinners. The only loading concern is font/image swap — the headline should
not reflow jarringly (reserve space; system fallback font metrics close to Museo Sans).

#### Populated (default — the only real state)
Vertical hierarchy, in order of visual weight (per The Announcement philosophy):
1. **Headline (the star):** "Career Launch is returning for a new edition." — poster-
   weight display type, the single dominant element on the page.
2. **Subline:** "Stay tuned!" — supporting weight, directly under the headline.
3. **Primary CTA:** "Explore LaunchPad" — the one button on the page; opens
   https://launchpad.myblueprint.ca/ in a new tab.
4. **Secondary link:** "See the 2025 impact →" — quiet text link to `/stats`, clearly
   subordinate to the button.
5. **Small print (near footer):** "Registration data from Career Launch 2025 has been
   deleted." — legible but visually minor.

No date, no countdown, no email capture, no form, no navigation tabs.

Two layout variants of this same state:
- **Variant A — chrome baseline (primary):** content sits between the existing site
  header (myBlueprint logo | "Career Launch" wordmark, links home) and the one-line
  footer. Content area fills the viewport height between them so the page feels
  composed, not sparse.
- **Variant B — full-bleed (comparison):** header/footer hidden on `/` only; single
  dramatic full-viewport screen carrying the logo itself. Same content and hierarchy.

#### Error
Not applicable — no data fetching, no form submission, nothing to fail. If LaunchPad is
unreachable, that failure happens on LaunchPad's side in a new tab; this page holds no
error state. Stated explicitly rather than omitted.

#### Permission-denied
Not applicable — page is fully public; the site has no auth. Stated explicitly rather
than omitted.

#### Edge cases
- **Arrived via redirect:** visitors hitting old `/sessions/*` or `/booths/*` links land
  here with no explanation. The headline must carry the explanation on its own — "is
  returning for a new edition" tells them why the old page is gone.
- **Arrived from the myBlueprint app:** the existing `BackToMyBlueprintBanner` renders
  above the header for these visitors. The layout must tolerate this extra top bar
  without pushing the CTA below the fold on laptops.
- **Short/laptop viewports (~700px tall):** headline, subline, and primary CTA must all
  be visible without scrolling; the small print may sit below the fold.
- **Mobile (narrow):** headline scales down but keeps poster weight; button full-width
  or near-full-width with ≥44px touch target; secondary link spaced far enough from the
  button to avoid mis-taps.
- **Long-content locales:** copy is fixed English; no truncation handling needed.
- **Keyboard users:** focus order is button → secondary link; both with clearly visible
  focus rings.
- **Reduced motion:** any entrance animation (fade/rise on the headline) must respect
  `prefers-reduced-motion` and render instantly static.

**Interaction notes:**
- Progressive disclosure: none — the entire page is one disclosure level by design. The
  philosophy explicitly trades utility density for a single clear moment.
- Key affordances: one primary button (LaunchPad, new tab — should signal external
  destination), one secondary text link (stats, same tab), header logo links to `/`
  (self, in Variant A).
- What changes between states: nothing dynamic — hover/focus/active styling on the two
  interactive elements is the only state change on the page. Button hover should be
  noticeable (this is the page's one action); link hover is an underline-level change.
- Friction note: with no date and no notify mechanism, a visitor cannot "do" anything
  about the announcement itself. The LaunchPad CTA is what saves the visit from being a
  dead end — its prominence is load-bearing, not decorative.
