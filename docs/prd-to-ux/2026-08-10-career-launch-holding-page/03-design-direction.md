# Design Direction — Career Launch Holding Page

## Mood & Personality

Confident tease — bold, big-type, a touch theatrical. "Something good is coming."
A theater marquee between shows, not a closed sign. The page should feel intentional
and composed, never sparse or abandoned; generous space reads as confidence, not
emptiness.

## Tone

Confident with a playful edge. Never corporate-stiff, never apologetic. The energy
leans on the brand's bright blue; the professionalism leans on its deep navy. Balanced
for an audience of educators: strategic energy, not hype.

## Inspirations

None supplied — user skipped. Direction leans on the marquee metaphor and the
myBlueprint brand system (user has the full design-system assets, including the UI kit
and logo files, in the `career-launch-design` skill).

## Key Principles

- Strict myBlueprint brand compliance, per client mandate. Official palette only: deep
  navy (#22224C), bright blue (#0092FF), light blue (#C6E7FF), off-white (#F6F6FF) —
  hex values supplied by the user's brand documentation. Museo Sans for type (Open Sans
  fallback). All spacing on an 8px grid.
- The headline is the star. One dominant element; everything else supports it.
- One action rules: LaunchPad's prominence is load-bearing — it is the only thing a
  visitor can *do*, so the button must be unmissable.
- Accessible by default: WCAG 2.1 AA contrast, visible focus rings, ≥44px touch
  targets, `prefers-reduced-motion` respected.
- Restraint over decoration: no countdowns, no confetti, no illustration clutter. If
  motion is used, one subtle entrance (e.g., headline fade/rise) is the ceiling.

## Must-Have Affordances

- "Explore LaunchPad" as the single, unambiguous primary button (opens in a new tab,
  with an external-destination cue).
- "See the 2025 impact →" as a quiet secondary text link — present but clearly
  subordinate.
- The data-deletion small print — legible, findable, visually minor.
- No date, no email capture, no form of any kind (client mandate).
- Variant A keeps the existing site header (logo + "Career Launch" wordmark) and
  one-line footer intact.
