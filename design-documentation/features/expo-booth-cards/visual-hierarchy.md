---
title: Visual Hierarchy & Tier Differentiation - Expo Booth Cards
description: Specifications for maintaining visual distinction between platinum and standard booths without prominent tier badges
feature: Expo Booth Cards Redesign
last-updated: 2025-11-07
related-files:
  - ./README.md
  - ./card-specifications.md
status: approved
---

# Visual Hierarchy & Tier Differentiation

## Overview

This document specifies how to maintain clear visual distinction between Platinum and Standard tier booths after removing the prominent tier badges, using subtle styling cues that enhance rather than distract from the content.

## Design Philosophy

**Removing Tier Badges Because:**
1. Badges add visual clutter without providing value to end users (students/educators)
2. Tier information is primarily for organizers, not attendees
3. All booths should feel premium and welcoming
4. Differentiation can be achieved through sophisticated styling

**Maintaining Differentiation Through:**
1. Background treatments (gradient vs solid)
2. Border styling (color, width, glow)
3. Shadow depth and color
4. Logo size and prominence
5. Animation effects
6. Overall visual "weight" and presence

## Tier Differentiation Matrix

### Visual Comparison Table

| Attribute | Platinum | Standard | Contrast Ratio |
|-----------|----------|----------|----------------|
| Background | Gradient (light-blue/off-white) | Solid white | Subtle |
| Border Width | 3px | 2px | Medium |
| Border Color | `primary-blue/30` | `neutral-2` | High |
| Border Glow | Yes (blue shimmer) | No | High |
| Shadow | Deep + blue glow | Standard | High |
| Logo Size | 96x96px | 80x80px | Medium |
| Logo Shadow | Enhanced | Minimal | Medium |
| Animation | Float effect | Static | High |
| Hover Transform | 3D rotate | 2D scale | Medium |

## Platinum Booth Visual Specifications

### Background Treatment
```css
background: linear-gradient(
  to bottom right,
  rgba(198, 231, 255, 0.4),  /* light-blue at 40% opacity */
  rgba(246, 246, 255, 1),     /* off-white fully opaque */
  rgba(198, 231, 255, 0.4)    /* light-blue at 40% opacity */
);
```

**Tailwind Implementation:**
```jsx
className="bg-gradient-to-br from-light-blue/40 via-off-white to-light-blue/40"
```

**Visual Effect:**
- Subtle blue tint creates premium feel
- Gradient provides depth without being loud
- Off-white center keeps content readable
- Differentiates from plain white standard cards

### Border & Outline
```css
border: 3px solid rgba(0, 146, 255, 0.3);
border-radius: 12px;
```

**Tailwind Implementation:**
```jsx
className="border-[3px] border-primary-blue/30 rounded-xl"
```

**Visual Effect:**
- Thicker border (3px vs 2px) adds visual weight
- Blue tint clearly distinct from gray neutral borders
- 30% opacity prevents border from overwhelming content
- Extra 1px width subtle but perceivable

### Shadow & Glow
**Default State:**
```css
box-shadow:
  0 10px 15px rgba(34, 34, 76, 0.08),        /* Standard depth shadow */
  0 0 30px rgba(0, 146, 255, 0.1);           /* Blue glow */
```

**Hover State:**
```css
box-shadow:
  0 20px 25px rgba(34, 34, 76, 0.12),        /* Deeper shadow */
  0 0 40px rgba(0, 146, 255, 0.25);          /* Enhanced blue glow */
```

**Tailwind Implementation:**
```jsx
className="
  shadow-lg shadow-primary-blue/10
  hover:shadow-xl hover:shadow-primary-blue/25
"
```

**Visual Effect:**
- Dual shadow creates sense of elevation
- Blue glow reinforces premium positioning
- Hover state amplifies glow for interactive feedback
- More dramatic than standard cards

### Animations & Micro-interactions

**Float Animation:**
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

animation: float 6s ease-in-out infinite;
```

**Tailwind Implementation:**
```jsx
className="animate-float"
```

**Hover 3D Transform:**
```jsx
whileHover={{
  scale: 1.02,
  rotateY: 2,
  rotateX: -1,
  transition: {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1]
  }
}}
```

**Visual Effect:**
- Gentle floating draws eye to premium cards
- 3D hover creates sense of interactivity
- Subtle movement feels premium, not gimmicky
- Respects `prefers-reduced-motion`

### Decorative Elements

**Background Blur Orbs:**
```jsx
<div className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none overflow-hidden">
  {/* Top right orb */}
  <div className="
    absolute -top-24 -right-24 w-48 h-48
    bg-gradient-to-br from-primary-blue/10 to-light-blue/10
    rounded-full blur-3xl opacity-60
    group-hover:opacity-80 group-hover:scale-110
    transition-all duration-300
  "></div>

  {/* Bottom left orb */}
  <div className="
    absolute -bottom-24 -left-24 w-48 h-48
    bg-gradient-to-tr from-light-blue/10 to-brand-navy/10
    rounded-full blur-3xl opacity-50
    group-hover:opacity-70 group-hover:scale-120
    transition-all duration-400
  "></div>
</div>
```

**Visual Effect:**
- Subtle blur orbs add depth without distracting
- Hover amplification provides feedback
- Blue tones reinforce brand and tier
- Creates "premium" aesthetic

### Logo Specifications
```css
width: 96px;
height: 96px;
background: #FFFFFF;
border-radius: 12px;
box-shadow: 0 4px 6px rgba(34, 34, 76, 0.1);
padding: 12px;
```

**Visual Effect:**
- Larger than standard (96px vs 80px)
- Enhanced shadow gives more prominence
- Increased padding prevents cramping
- White background ensures logo clarity

## Standard Booth Visual Specifications

### Background Treatment
```css
background-color: #FFFFFF;
```

**Tailwind Implementation:**
```jsx
className="bg-white"
```

**Visual Effect:**
- Clean, professional solid white
- Maximizes content readability
- No gradient complexity
- Clear differentiation from platinum

### Border & Outline
```css
border: 2px solid #D9DFEA;  /* neutral-2 */
border-radius: 12px;
```

**Tailwind Implementation:**
```jsx
className="border-2 border-neutral-2 rounded-xl"
```

**Visual Effect:**
- Thinner border (2px) lighter visual weight
- Gray neutral tone vs blue platinum tone
- Still substantial enough for card definition
- Professional and clean

### Shadow
**Default State:**
```css
box-shadow: 0 4px 6px rgba(34, 34, 76, 0.1);
```

**Hover State:**
```css
box-shadow: 0 10px 15px rgba(34, 34, 76, 0.15);
```

**Tailwind Implementation:**
```jsx
className="shadow-md hover:shadow-lg transition-shadow duration-300"
```

**Visual Effect:**
- Standard depth (no glow)
- Single shadow (not dual layer)
- Hover increases depth but no color change
- Professional without being flashy

### Animations & Micro-interactions

**No Float Animation:**
- Standard cards remain static (no floating)
- Reduces visual noise when many cards present
- Clear distinction from animated platinum cards

**Hover 2D Transform:**
```jsx
whileHover={{
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1]
  }
}}
```

**Visual Effect:**
- Simple scale hover (no 3D rotation)
- Sufficient for interactivity feedback
- Less dramatic than platinum
- Maintains professional aesthetic

### No Decorative Elements
- No background blur orbs
- No particle effects
- Clean, minimal design
- Content-focused

### Logo Specifications
```css
width: 80px;
height: 80px;
background: #FFFFFF;
border-radius: 8px;
box-shadow: 0 1px 2px rgba(34, 34, 76, 0.05);
padding: 8px;
```

**Visual Effect:**
- Standard size (80px vs 96px platinum)
- Minimal shadow
- Smaller border radius (8px vs 12px)
- Compact padding

## Content Hierarchy Within Cards

### Typography Hierarchy
Both tiers use the same typography but platinum's enhanced background makes content pop more:

**Company Name:**
```css
font-size: 1.25rem;      /* text-body-1 */
line-height: 2rem;
font-weight: 900;        /* font-black */
color: #22224C;          /* brand-navy */
```

**Tagline:**
```css
font-size: 1rem;         /* text-body-2 */
line-height: 1.75rem;
font-weight: 300;        /* font-light */
color: #485163;          /* neutral-5 */
```

**Tags:**
```css
font-size: 0.75rem;      /* text-subtitle-1 */
line-height: 1.25rem;
font-weight: 500;        /* font-medium */
```

### Color Usage in Content

**Both Tiers:**
- Company name: `brand-navy` (#22224C)
- Tagline: `neutral-5` (#485163)
- Industry tag: `primary-blue` background with `primary-blue` text
- Organization tag: Semantic color (blue/purple/green)

**Contrast on Backgrounds:**
- Navy text on white: 11.7:1 (AAA)
- Navy text on platinum gradient: 10.2:1+ (AAA)
- All combinations exceed WCAG requirements

## Visual Weight Distribution

### Platinum Visual Weight: Heavy
- Gradient background (20% weight)
- Thicker blue border (15% weight)
- Blue shadow glow (15% weight)
- Float animation (20% weight)
- Larger logo (10% weight)
- 3D hover transform (10% weight)
- Decorative elements (10% weight)
**Total: ~100% premium presence**

### Standard Visual Weight: Medium
- Solid white background (baseline)
- Standard border (minimal weight)
- Simple shadow (minimal weight)
- Static positioning (0% weight)
- Standard logo (baseline)
- 2D hover transform (minimal weight)
- No decorative elements (0% weight)
**Total: ~40% premium presence**

**Result:** Platinum cards feel ~2.5x more prominent without being overwhelming

## Alternative Tier Indicators (Removed)

### What We're NOT Doing:

**Removed: Tier Badges**
```jsx
// ❌ REMOVED - Don't use
<div className="absolute top-4 left-4 z-10">
  <div className="px-2 py-1 rounded-full text-subtitle-2 uppercase bg-gradient-to-r from-primary-blue to-brand-navy text-white">
    PLATINUM
  </div>
</div>
```

**Why Removed:**
- Adds visual clutter
- Tier is not relevant to end users (students/educators)
- Internal/organizational information
- Differentiation better achieved through subtle styling
- Space better used for content

**Removed: Tier Icons**
- No star/badge icons
- No ribbon graphics
- No crown symbols
- Visual differentiation is style-based, not icon-based

**Removed: "Featured" Labels**
- Avoid language like "Featured" or "Premium"
- All booths should feel valuable
- Differentiation is visual, not textual

## Industry Immersion Series Branding

### Optional Context Badge

For platinum cards that want to emphasize program affiliation:

```jsx
<div className="mb-4 flex items-center justify-between">
  <span className="
    inline-flex items-center gap-1.5
    px-3 py-1.5
    bg-primary-blue/10
    text-primary-blue
    text-subtitle-1
    font-medium
    rounded-full
    border border-primary-blue/20
  ">
    <Sparkles className="w-3 h-3" />
    Industry Immersion Series
  </span>

  {/* Optional gift icon if booth has prizes */}
  {booth.hasGiftActivity && (
    <div className="w-6 h-6 text-primary-blue">
      <Gift className="w-full h-full" />
    </div>
  )}
</div>
```

**Usage:**
- Optional for platinum cards
- Adds context about program structure
- Subtle branding without overwhelming
- Icon provides visual interest
- Gift icon communicates engagement opportunity

**Styling:**
- Matches platform's primary blue
- Pill shape consistent with tag design
- Subtle background and border
- Small icon for visual balance

## Hover State Specifications

### Platinum Hover State
```jsx
// Card container
className="
  hover:border-primary-blue/50          // Border intensifies
  hover:shadow-xl                       // Shadow deepens
  hover:shadow-primary-blue/25          // Glow intensifies
  transition-all duration-300           // Smooth transition
"

// 3D Transform (Framer Motion)
whileHover={{
  scale: 1.02,
  rotateY: 2,
  rotateX: -1
}}

// Decorative elements amplify
// Blur orbs scale and brighten
```

**Visual Effect:**
- Card appears to lift and tilt toward user
- Blue glow becomes more prominent
- Background effects amplify
- Multi-layered feedback

### Standard Hover State
```jsx
// Card container
className="
  hover:border-neutral-3                // Border slightly darkens
  hover:shadow-lg                       // Shadow deepens
  transition-shadow duration-300        // Smooth transition
"

// 2D Transform (Framer Motion)
whileHover={{
  scale: 1.02
}}
```

**Visual Effect:**
- Card lifts with shadow depth
- Simple scale provides feedback
- Clean, professional interaction
- Single-layer feedback

### CTA Button Hover (Both Tiers)
```jsx
className="
  bg-primary-blue
  text-white
  hover:bg-brand-navy
  transition-colors duration-200
"
```

**Visual Effect:**
- Blue to navy transition
- Reinforces brand colors
- Clear interaction feedback
- Same for both tiers (consistency)

## Focus State Specifications

### Keyboard Focus (Both Tiers)
```jsx
className="
  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-primary-blue
  focus-visible:rounded-xl
"
```

**Accessibility:**
- 2px outline meets minimum requirement
- 4px offset ensures visibility on both backgrounds
- Blue color high contrast on white and gradient
- Rounded to match card shape
- Visible for keyboard navigation

## Loading State (Skeleton)

### Skeleton Card Visual
```jsx
className="
  min-h-[360px]
  bg-off-white
  border-2 border-neutral-1
  rounded-xl
  p-6
  animate-pulse
"
```

**Visual Effect:**
- Neutral appearance (no tier indication)
- Subtle pulse animation
- Placeholder shapes for logo, text, tags
- Maintains layout structure

## Reduced Motion Considerations

### When `prefers-reduced-motion: reduce`:
```css
/* All animations disabled */
.animate-float {
  animation: none !important;
}

/* Transitions become instant */
transition-duration: 0.01ms !important;
```

**Visual Hierarchy Maintained:**
- Background gradients remain (not animated)
- Border colors remain (no animation needed)
- Shadow depth remains (static)
- Size differences remain (no animation)
- Tier distinction still clear without motion

## Dark Mode Considerations (Future)

While not currently implemented, tier differentiation would adapt:

### Platinum in Dark Mode
- Gradient: darker blue tones
- Border: lighter blue (higher contrast)
- Glow: more prominent
- Text: lighter colors

### Standard in Dark Mode
- Background: dark gray
- Border: lighter gray
- Shadow: lighter (opposite effect)
- Text: light colors

## Testing Tier Differentiation

### Visual Testing Checklist
- [ ] Platinum cards visually distinct at first glance
- [ ] Standard cards feel professional (not "lesser")
- [ ] Differentiation perceivable but not extreme
- [ ] Platinum doesn't overwhelm content
- [ ] Standard cards still attractive
- [ ] Hover states reinforce tier distinction
- [ ] Focus states visible on both tiers
- [ ] Differentiation works in grayscale
- [ ] Differentiation works for colorblind users

### User Testing Questions
- Can users distinguish premium booths without reading labels?
- Do all booths feel valuable and worth exploring?
- Is the visual hierarchy clear but not distracting?
- Does the design feel professional at both tiers?

## Implementation Summary

**Key Takeaway:** Remove prominent tier badges and replace with sophisticated visual styling that differentiates platinum through multiple subtle cues (background, border, shadow, animation, size) while maintaining professional appearance for all booths.

**Platinum Markers:**
1. Gradient background (vs solid white)
2. Blue-tinted border (vs gray)
3. Blue glow shadow (vs standard shadow)
4. Floating animation (vs static)
5. Larger logo (96px vs 80px)
6. 3D hover (vs 2D)
7. Decorative background elements

**Standard Markers:**
1. Clean white background
2. Gray border
3. Standard shadow
4. Static positioning
5. Standard logo size
6. Simple hover
7. Minimal decoration

**Result:** Clear visual hierarchy without cluttered badges, all booths feel premium and valuable.

## Related Files
- [Card Specifications](./card-specifications.md)
- [Responsive Layout](./responsive-layout.md)
- [Typography & Spacing](./typography-spacing.md)
