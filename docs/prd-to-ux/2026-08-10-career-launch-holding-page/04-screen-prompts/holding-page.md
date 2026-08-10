# Holding Page — Screen Prompts

_Each block below is self-contained. Copy one block, paste into Claude Design (or
Stitch / Figma AI / Pencil)._

_State coverage note: the Step 2 brief marks Empty, Loading, Error, and
Permission-denied as inapplicable for this screen (fully authored static page, no data,
no auth, no forms), so no prompt blocks exist for them. The blocks below cover the
populated state in its two layout variants, the mobile rendering, and the two
layout-affecting edge cases._

---

## Holding Page — Populated, Variant A (chrome baseline, desktop)

````
**What this screen is for:**
A visitor to the Career Launch site learns in one glance that the 2025 event is over
and a new edition is coming, and is offered LaunchPad as the place to go now.

**What's visible:**
A single announcement page for a career-education event platform, framed by the site's
existing minimal chrome: a clean white header bar at the top containing the myBlueprint
logo beside a "Career Launch" wordmark, and a one-line footer at the bottom with a
copyright notice ("© 2025 myBlueprint Career Launch. myBlueprint Special Projects.").
Between them, the content fills the viewport like a poster:

1. The headline "Career Launch is returning for a new edition." — the single dominant
   element on the page, set in poster-weight display type. This is the star; everything
   else supports it.
2. Directly beneath, the subline "Stay tuned!" at a clearly supporting weight.
3. Below that, one button: "Explore LaunchPad" — the only button on the page, styled to
   be unmissable, with a subtle cue that it leads to an external destination.
4. Under the button, a quiet text link: "See the 2025 impact →" — clearly subordinate
   to the button, an underline-on-hover kind of element.
5. Near the footer, in small but legible print: "Registration data from Career Launch
   2025 has been deleted."

No date, no countdown, no email field, no form, no navigation tabs. The content area
should feel composed and intentional, never sparse — generous space reads as
confidence, not emptiness.

**What the user can do:**
- Primary: click "Explore LaunchPad" (opens the LaunchPad site in a new tab).
- Secondary: click "See the 2025 impact →" (goes to the site's stats pages).
- The header logo links back to this same homepage.

**Feel:**
Confident tease — a theater marquee between shows, not a closed sign. Bold,
big-type, a touch theatrical: "something good is coming." Confident with a playful
edge; never corporate-stiff, never apologetic. Energy comes from the brand's bright
blue (user-supplied #0092FF); professionalism from its deep navy (user-supplied
#22224C); backgrounds draw on off-white (user-supplied #F6F6FF) and light blue
(user-supplied #C6E7FF) as an accent. Type is Museo Sans (Open Sans as fallback).
Spacing keeps a consistent, even rhythm throughout. Restraint over decoration: no
confetti, no illustration clutter; at most one subtle entrance animation (a quiet
fade/rise on the headline), which must be skipped entirely for users who prefer
reduced motion. The audience is educators — strategic energy, not hype.

**State context:**
This is the page's only state — a fully authored static announcement. Every old link
on the site redirects here, so the headline must carry the explanation of why the old
content is gone all on its own.

**Critical affordances:**
- The headline is the one star of the page — nothing may compete with it.
- The "Explore LaunchPad" button's prominence is load-bearing: it is the only thing a
  visitor can actually do, and it is what saves the visit from being a dead end.
- The stats link must stay visually quiet and subordinate — present, but never
  mistakable for a second primary action.
- The data-deletion line must be findable and legible while remaining visually minor.
- High contrast throughout and clearly visible keyboard focus styling on the button
  and link; focus order is button first, then link.
- Absolutely no date, no email capture, no form of any kind.
````

---

## Holding Page — Populated, Variant B (full-bleed, desktop)

````
**What this screen is for:**
Same goal as the baseline: a visitor learns the 2025 event is over and a new edition
is coming, with LaunchPad as the place to go now — rendered as a single dramatic
full-screen moment for comparison against the chrome-framed version.

**What's visible:**
One full-viewport screen with no site header and no footer. A rich background built
from the brand's deep navy (user-supplied #22224C), optionally deepening toward the
brand's bright blue (user-supplied #0092FF) as a gradient, with light text on top.
The myBlueprint logo sits quietly at the top of the composition, taking over the
header's job. Then, as the centerpiece:

1. The headline "Career Launch is returning for a new edition." in poster-weight
   display type — the dominant element, theatrical in scale.
2. The subline "Stay tuned!" beneath it at supporting weight.
3. One unmissable button: "Explore LaunchPad", with a subtle external-destination cue.
   On the dark background it should read as the brightest interactive element on
   screen.
4. A quiet text link below it: "See the 2025 impact →".
5. At the very bottom of the screen, in small light-on-dark print: "Registration data
   from Career Launch 2025 has been deleted."

No date, no countdown, no email field, no form, no navigation.

**What the user can do:**
- Primary: click "Explore LaunchPad" (opens the LaunchPad site in a new tab).
- Secondary: click "See the 2025 impact →" (goes to the site's stats pages).

**Feel:**
The most theatrical rendering of the confident-tease direction — a lit marquee at
night. Bold and cinematic but still restrained: the drama comes from scale, color
depth, and space, not from decoration or effects. Museo Sans type (Open Sans
fallback), consistent even spacing rhythm, at most one subtle entrance animation
(skipped for reduced-motion users). Small text on the dark background must remain
comfortably readable — high contrast is non-negotiable.

**State context:**
This is the same single authored state as Variant A, in an alternate layout being
explored for comparison. The site's other surviving pages keep the normal white
header, so this variant trades cross-page consistency for drama — the rendering
should make that trade-off visible so the two can be judged side by side.

**Critical affordances:**
- Identical content and hierarchy to Variant A: headline star, one primary button,
  quiet stats link, minor data-deletion line.
- The logo must remain clearly visible against the dark background.
- Same accessibility bar: high contrast, visible keyboard focus styling on both
  interactive elements, button before link in focus order.
- Absolutely no date, no email capture, no form of any kind.
````

---

## Holding Page — Populated, mobile

````
**What this screen is for:**
The same announcement moment on a phone: a visitor immediately understands the event
is between editions and can reach LaunchPad with one thumb tap.

**What's visible:**
The same content stack as the desktop page (either variant), reflowed for a narrow
portrait screen:

1. Headline "Career Launch is returning for a new edition." — scaled down to fit but
   still unmistakably poster-weight; it may break across several lines and that
   should look intentional.
2. Subline "Stay tuned!" beneath it.
3. The "Explore LaunchPad" button at full width or close to it — generous, easy to
   tap without precision.
4. The "See the 2025 impact →" text link, spaced far enough below the button that a
   thumb aiming for one cannot accidentally hit the other.
5. The data-deletion small print at the bottom of the page.

In the chrome variant, the compact site header (logo + "Career Launch" wordmark) sits
on top and the one-line footer below; the copyright line may wrap to two lines.

**What the user can do:**
- Primary: tap "Explore LaunchPad" (opens in a new tab).
- Secondary: tap "See the 2025 impact →" (goes to the stats pages).

**Feel:**
Same confident tease as desktop — the poster energy must survive the small screen
rather than collapsing into a generic centered-text mobile page. Brand palette as
supplied: deep navy #22224C, bright blue #0092FF, light blue #C6E7FF, off-white
#F6F6FF (all user-supplied). Museo Sans (Open Sans fallback). Comfortable tap sizing
on everything interactive.

**State context:**
Same single authored state, mobile rendering. Many educators will open this from an
old email link on their phone; the redirect lands them here with no explanation
beyond the headline.

**Critical affordances:**
- Headline, subline, and the LaunchPad button should all be visible on the first
  screenful without scrolling; the small print may fall below the fold.
- Button and link must be comfortably tappable and well separated.
- No horizontal scrolling, no content clipped off-screen.
- Absolutely no date, no email capture, no form of any kind.
````

---

## Holding Page — Edge case: short laptop viewport

````
**What this screen is for:**
The same desktop announcement on a short, letterbox-shaped laptop screen — verifying
the marquee moment survives limited vertical room.

**What's visible:**
The chrome-baseline desktop layout (header, poster content, footer) compressed
vertically. The headline, subline, and "Explore LaunchPad" button all remain visible
without scrolling; the stats link ideally stays visible too; the data-deletion small
print and footer may fall below the fold. Vertical spacing tightens gracefully — the
composition should compress like a well-set poster, not squash or overlap.

**What the user can do:**
- Same as the desktop populated state: primary button to LaunchPad, secondary link to
  stats.

**Feel:**
Identical to the desktop chrome variant — confident tease, brand palette
(user-supplied: navy #22224C, blue #0092FF, light blue #C6E7FF, off-white #F6F6FF),
Museo Sans. The only change is tighter vertical rhythm.

**State context:**
Same single authored state viewed on a short, wide screen — common on school-issued
laptops, which are this audience's default hardware.

**Critical affordances:**
- Headline + subline + primary button above the fold, always.
- Nothing overlaps, clips, or forces horizontal scrolling.
- The headline may scale down but must remain the dominant element.
````

---

## Holding Page — Edge case: arrived from the myBlueprint app

````
**What this screen is for:**
The same announcement for a visitor who clicked through from the myBlueprint app —
the site shows an extra return-navigation banner above everything else, and the page
must tolerate it.

**What's visible:**
The chrome-baseline layout with one addition: a slim horizontal banner pinned above
the site header offering a way back to myBlueprint (e.g., "← Back to myBlueprint").
It is functional chrome, not part of the announcement. Below it, the normal header,
then the poster content: headline, subline, LaunchPad button, stats link, small
print, footer.

**What the user can do:**
- Primary: click "Explore LaunchPad" (new tab).
- Secondary: click "See the 2025 impact →".
- Tertiary: use the top banner to return to myBlueprint.

**Feel:**
Identical to the desktop chrome variant. The banner should read as quiet utility —
it must not compete with the headline or the primary button for attention.

**State context:**
Same single authored state with an extra top bar present. This banner already exists
on the site; the design question is only whether the poster composition still works
with the extra vertical strip.

**Critical affordances:**
- With the banner present, the headline and primary button must still fit on the
  first screenful of a typical laptop display.
- The banner must not visually merge with the site header — two distinct slim bars.
- Hierarchy is unchanged: headline star, one primary button, quiet stats link.
````
