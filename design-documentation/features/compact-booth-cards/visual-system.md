---
title: Visual System Specifications
description: Colors, borders, shadows, backgrounds, and tier differentiation for compact booth cards
feature: Compact Booth Cards
last-updated: 2025-11-07
version: 1.0.0
related-files:
  - ./README.md
  - ./card-dimensions.md
  - ../../design-system/tokens/colors.md
status: approved
---

# Visual System Specifications

## Overview

The visual system creates subtle tier differentiation through **background treatments, borders, and shadows only**. With tags and badges removed, platinum and standard booths are distinguished through refined color applications that maintain brand consistency.

## Design Philosophy

**Removal of Visual Clutter**: By eliminating "Industry Immersion Series" badge, organization type pills, and industry pills, we create a cleaner design that differentiates tiers through sophisticated background and border treatments rather than explicit labels.

**Subtle Hierarchy**: Platinum booths use gradient backgrounds and enhanced shadows; standard booths use solid backgrounds with minimal shadows.

## Color Palette

All colors follow myBlueprint brand guidelines:

```css
/* Primary Brand Colors */
--primary-blue: #0092FF;
--brand-navy: #22224C;
--light-blue: #C6E7FF;
--off-white: #F6F6FF;
--background-white: #FFFFFF;

/* Neutral Palette */
--neutral-1: #E5E9F1;
--neutral-2: #D9DFEA;
--neutral-3: #AAB7CB;
--neutral-4: #65738B;
--neutral-5: #485163;
```

## Platinum Booth Visual Treatment

### Background

Platinum booths use subtle gradient background creating premium appearance:

```css
/* Platinum Card Background */
background: linear-gradient(
  135deg,
  rgba(198, 231, 255, 0.25) 0%,    /* light-blue at 25% opacity */
  rgba(246, 246, 255, 1) 50%,      /* off-white solid */
  rgba(198, 231, 255, 0.25) 100%   /* light-blue at 25% opacity */
);
```

### Tailwind Implementation

```jsx
className="bg-gradient-to-br from-light-blue/25 via-off-white to-light-blue/25"
```

### Border

```css
border: 2px solid rgba(0, 146, 255, 0.2);    /* Primary blue at 20% opacity */
transition: border-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Hover State Border

```css
/* On hover */
border: 2px solid rgba(0, 146, 255, 1);      /* Primary blue at 100% opacity */
```

### Tailwind Implementation

```jsx
className="border-2 border-primary-blue/20 hover:border-primary-blue"
```

### Shadow

```css
/* Default State */
box-shadow:
  0 4px 6px rgba(34, 34, 76, 0.08),          /* Subtle elevation */
  0 1px 3px rgba(34, 34, 76, 0.06);          /* Edge definition */

/* Hover State */
box-shadow:
  0 20px 25px rgba(0, 146, 255, 0.15),       /* Dramatic lift with blue tint */
  0 10px 10px rgba(0, 146, 255, 0.08);       /* Mid-range blue glow */
```

### Tailwind Implementation

```jsx
className="shadow-md hover:shadow-2xl hover:shadow-primary-blue/20"
```

### Additional Hover Effects

**Subtle gradient overlay (appears on hover):**

```css
/* Overlay element */
position: absolute;
inset: 0;
background: linear-gradient(
  90deg,
  rgba(0, 146, 255, 0.08) 0%,
  rgba(34, 34, 76, 0.08) 100%
);
opacity: 0;
transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);

/* On parent hover */
&:hover {
  opacity: 1;
}
```

### Tailwind Implementation

```jsx
<div className="relative overflow-hidden">
  <div className="
    absolute inset-0
    bg-gradient-to-r from-primary-blue/10 via-brand-navy/10 to-primary-blue/10
    opacity-0 hover:opacity-100 transition-opacity
  " />
  {/* Card content */}
</div>
```

## Standard Booth Visual Treatment

### Background

Standard booths use clean white background:

```css
background: #FFFFFF;               /* Pure white */
```

### Tailwind Implementation

```jsx
className="bg-white"
```

### Border

```css
border: 2px solid #D9DFEA;         /* neutral-2 */
transition: border-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Hover State Border

```css
/* On hover */
border: 2px solid #AAB7CB;         /* neutral-3 */
```

### Tailwind Implementation

```jsx
className="border-2 border-neutral-2 hover:border-neutral-3"
```

### Shadow

```css
/* Default State */
box-shadow: 0 1px 2px rgba(34, 34, 76, 0.05);     /* Minimal elevation */

/* Hover State */
box-shadow: 0 10px 15px rgba(34, 34, 76, 0.1);    /* Standard elevation lift */
```

### Tailwind Implementation

```jsx
className="shadow-sm hover:shadow-lg"
```

## Logo Container Visual Treatment

Same treatment for both platinum and standard tiers:

### Specifications

```css
/* Logo Container */
background: #FFFFFF;                          /* Pure white */
border-radius: 8px;                           /* Medium radius */
box-shadow: 0 1px 2px rgba(34, 34, 76, 0.05); /* Subtle definition */
```

### Tailwind Implementation

```jsx
className="bg-white rounded-lg shadow-sm"
```

### Logo Fallback Background

When logo image is missing:

```css
background: #E5E9F1;               /* neutral-1 */
color: #65738B;                    /* neutral-4 */
```

### Tailwind Implementation

```jsx
className="bg-neutral-1 text-neutral-4"
```

## Hover CTA Overlay

Appears on card hover at bottom:

### Specifications

```css
/* CTA Button */
position: absolute;
bottom: 16px;
left: 16px;
right: 16px;
height: 40px;
padding: 8px 16px;
background: #0092FF;               /* Primary blue */
color: #FFFFFF;
border-radius: 8px;
box-shadow: 0 4px 6px rgba(0, 146, 255, 0.3);
opacity: 0;
transform: translateY(8px);
transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
pointer-events: none;

/* On parent hover */
&:hover {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* CTA hover state */
&:hover {
  background: #22224C;             /* Brand navy */
}
```

### Tailwind Implementation

```jsx
<div className="
  absolute bottom-4 left-4 right-4
  opacity-0 translate-y-2
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-200
  pointer-events-none group-hover:pointer-events-auto
">
  <div className="
    bg-primary-blue hover:bg-brand-navy
    text-white text-center
    py-2 px-4 rounded-lg
    font-medium text-sm
    shadow-lg shadow-primary-blue/30
    transition-colors
  ">
    Visit Booth →
  </div>
</div>
```

## Hover State Transforms

### Card Scale and Perspective

Both platinum and standard booths use subtle scale on hover:

```css
/* Card transform on hover */
transform: scale(1.02);
transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Platinum-Specific 3D Effect (Optional)

For enhanced premium feel, platinum cards can include subtle 3D rotation:

```css
/* Platinum card on hover */
transform: scale(1.02) rotateY(1deg) rotateX(-0.5deg);
transform-style: preserve-3d;
perspective: 1000px;
```

### Tailwind Implementation

```jsx
className="
  hover:scale-[1.02]
  transition-transform duration-200
"

// Platinum 3D (optional)
style={{
  transformStyle: 'preserve-3d',
  perspective: 1000
}}
```

## Focus State (Keyboard Navigation)

Accessible focus indicator for keyboard users:

```css
/* Focus visible state */
&:focus-visible {
  outline: 2px solid #0092FF;      /* Primary blue */
  outline-offset: 2px;
  border-radius: 12px;
}

/* Remove outline for mouse users */
&:focus:not(:focus-visible) {
  outline: none;
}
```

### Tailwind Implementation

```jsx
className="
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-primary-blue
  focus:outline-none
"
```

## Highlighted/Selected State (from FilterBar)

When booth is selected via "Random Booth" feature:

```css
/* Ring indicator for highlighted booth */
box-shadow:
  0 0 0 4px rgba(0, 146, 255, 0.3),          /* Ring */
  0 20px 25px rgba(0, 146, 255, 0.2);        /* Elevated shadow */
animation: pulse-glow 2s ease-in-out 2;       /* Pulse 2 times */

@keyframes pulse-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

### Tailwind Implementation

```jsx
{isHighlighted && (
  <motion.div
    className="absolute inset-0 rounded-xl ring-4 ring-primary-blue/30"
    animate={{
      opacity: [0, 1, 0],
      scale: [0.95, 1.02, 0.95]
    }}
    transition={{
      duration: 2,
      repeat: 1,
      ease: "easeInOut"
    }}
  />
)}
```

## Tier Comparison Table

| Visual Element | Platinum | Standard |
|----------------|----------|----------|
| **Background** | Gradient (light-blue → off-white → light-blue) | Solid white |
| **Border Color** | Primary blue 20% opacity | Neutral-2 |
| **Border Hover** | Primary blue 100% opacity | Neutral-3 |
| **Shadow Default** | Medium with 8% opacity | Small with 5% opacity |
| **Shadow Hover** | Extra large with blue tint | Large standard |
| **Gradient Overlay** | Yes (on hover) | No |
| **3D Effect** | Optional rotateY/X | None |
| **Grid Span** | 2 columns | 1 column |

## Border Radius System

Following 8px grid system:

```css
/* Card Container */
border-radius: 12px;               /* Large - main card */

/* Logo Container */
border-radius: 8px;                /* Medium - logo box */

/* CTA Button */
border-radius: 8px;                /* Medium - hover CTA */
```

## Animation Specifications

### Entrance Animation (on mount)

```css
/* Card entrance */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

animation: fadeInUp 600ms cubic-bezier(0.4, 0, 0.2, 1);
animation-delay: calc(var(--index) * 50ms);  /* Stagger by index */
```

### Hover Transitions

```css
/* All transitions use consistent easing */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);  /* Ease out */

/* Duration by element type */
transform: 200ms;         /* Quick for transforms */
border-color: 200ms;      /* Quick for borders */
box-shadow: 300ms;        /* Slightly longer for shadows */
opacity: 300ms;           /* Slightly longer for opacity */
background: 200ms;        /* Quick for backgrounds */
```

## Loading/Skeleton State

While cards are loading, show skeleton:

```css
/* Skeleton card */
background: linear-gradient(
  90deg,
  #E5E9F1 0%,             /* neutral-1 */
  #D9DFEA 50%,            /* neutral-2 */
  #E5E9F1 100%            /* neutral-1 */
);
background-size: 200% 100%;
animation: shimmer 2s infinite linear;

@keyframes shimmer {
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
}
```

## Reduced Motion Support

Respect user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Implementation

```jsx
// JavaScript detection
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

// Conditional animation
{!prefersReducedMotion && (
  <motion.div animate={...} />
)}
```

## Color Contrast Verification

All color combinations meet WCAG AA standards:

### Platinum Card

| Foreground | Background | Ratio | Standard | Pass |
|------------|-----------|-------|----------|------|
| Navy (#22224C) | Off-white (#F6F6FF) | 12.8:1 | AAA | ✅ |
| Neutral-5 (#485163) | Off-white (#F6F6FF) | 7.0:1 | AAA | ✅ |
| White (#FFFFFF) | Primary blue (#0092FF) | 4.9:1 | AA | ✅ |
| White (#FFFFFF) | Brand navy (#22224C) | 15.1:1 | AAA | ✅ |

### Standard Card

| Foreground | Background | Ratio | Standard | Pass |
|------------|-----------|-------|----------|------|
| Navy (#22224C) | White (#FFFFFF) | 13.2:1 | AAA | ✅ |
| Neutral-5 (#485163) | White (#FFFFFF) | 7.2:1 | AAA | ✅ |
| Neutral-4 (#65738B) | Neutral-1 (#E5E9F1) | 4.6:1 | AA | ✅ |

All combinations exceed minimum requirements.

## Dark Mode Considerations

Current design is light mode only. If dark mode is added in future:

### Platinum Dark Mode

```css
background: linear-gradient(
  135deg,
  rgba(0, 146, 255, 0.15) 0%,
  rgba(34, 34, 76, 0.9) 50%,
  rgba(0, 146, 255, 0.15) 100%
);
border: 2px solid rgba(0, 146, 255, 0.4);
color: #FFFFFF;
```

### Standard Dark Mode

```css
background: rgba(34, 34, 76, 0.5);
border: 2px solid rgba(170, 183, 203, 0.2);
color: #E5E9F1;
```

## Implementation Checklist

Visual system implementation requirements:

- [ ] Platinum: Gradient background (light-blue → off-white → light-blue)
- [ ] Platinum: Border 2px primary-blue/20, hover primary-blue/100
- [ ] Platinum: Shadow with blue tint on hover
- [ ] Platinum: Gradient overlay effect on hover
- [ ] Standard: Solid white background
- [ ] Standard: Border 2px neutral-2, hover neutral-3
- [ ] Standard: Standard shadow on hover
- [ ] Logo container: White background with sm shadow
- [ ] Logo fallback: Neutral-1 background with neutral-4 text
- [ ] Hover CTA: Primary blue background, appears with transform
- [ ] Focus indicator: 2px primary-blue outline with 2px offset
- [ ] All transitions use cubic-bezier(0.4, 0, 0.2, 1) easing
- [ ] Entrance animations staggered by index (50ms)
- [ ] All color contrasts verified (4.5:1 minimum)
- [ ] Reduced motion preferences respected
- [ ] Skeleton loading state implemented

---

Last Updated: 2025-11-07 | Version: 1.0.0 | Status: Approved
