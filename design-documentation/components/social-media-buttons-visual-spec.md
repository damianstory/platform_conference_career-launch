# Social Media Buttons - Visual Specifications

**Precise measurements and spacing for pixel-perfect implementation**

---

## Desktop Layout (1024px+)

### Button Specifications
```
┌────────────────────────────────────────┐
│     32px width                         │
│  ┌──────────────────────────────────┐  │
│  │                                  │  │ 32px height
│  │          [icon 16×16]            │  │
│  │                                  │  │
│  └──────────────────────────────────┘  │
│  ↑                                  ↑  │
│  6px border-radius                  │  │
│  1px border                          │  │
└────────────────────────────────────────┘
```

### Icon Centering
```
Button: 32px × 32px
Icon:   16px × 16px

Padding calculation:
- Horizontal: (32 - 16) / 2 = 8px each side
- Vertical:   (32 - 16) / 2 = 8px top/bottom

Result: Icon perfectly centered
```

### Gap Between Buttons
```
[Button 32px] ←8px gap→ [Button 32px] ←8px gap→ [Button 32px]
     in                        𝕏                      📷
```

### Complete Contact Section Layout
```
┌─────────────────────────────────────────────────┐
│ Get in Touch                                    │ Section Label
├─────────────────────────────────────────────────┤
│                                                 │
│ 📧 email@organization.com                       │ 24px row height (desktop)
│                                                 │
│ 🌐 www.organization.com                         │ 24px row height (desktop)
│    ↓ 8px gap (mt-2)                            │
│    [in] [𝕏] [📷] [f]                            │ 32px button height
│    └─8px─┘  └─8px─┘                            │ 8px gaps between
│                                                 │
│ Internship Info (if available)                  │
│ ┌─────────────────────────────────────────────┐ │
│ │ [Internships Available box]                 │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│         [remaining vertical space]              │
│                                                 │
└─────────────────────────────────────────────────┘
Total card height: 256px (h-64)
```

---

## Mobile Layout (<1024px)

### Button Specifications
```
┌────────────────────────────────────────┐
│     44px width                         │
│  ┌──────────────────────────────────┐  │
│  │                                  │  │
│  │          [icon 20×20]            │  │ 44px height
│  │                                  │  │
│  └──────────────────────────────────┘  │
│  ↑                                  ↑  │
│  6px border-radius                  │  │
│  1px border                          │  │
└────────────────────────────────────────┘
```

### Icon Centering
```
Button: 44px × 44px
Icon:   20px × 20px

Padding calculation:
- Horizontal: (44 - 20) / 2 = 12px each side
- Vertical:   (44 - 20) / 2 = 12px top/bottom

Result: Icon perfectly centered
```

### Gap Between Buttons
```
[Button 44px] ←12px gap→ [Button 44px] ←12px gap→ [Button 44px]
     in                         𝕏                        📷
```

### Touch Target Visualization
```
┌─────────────────────────────────────────────────┐
│                                                 │
│    ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│    │          │  │          │  │          │    │
│    │    in    │  │    𝕏     │  │    📷    │    │ 44px minimum
│    │          │  │          │  │          │    │ (WCAG AA)
│    └──────────┘  └──────────┘  └──────────┘    │
│        44px          44px          44px         │
│                                                 │
│    Easy to tap on mobile devices                │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Color Specifications

### Default State (Neutral)

```
┌──────────────────────────────────────┐
│  Background: #D9DFEA (neutral-2)     │
│  RGB: 217, 223, 234                  │
│  HSL: 220°, 30%, 88%                 │
│                                      │
│  Border: #AAB7CB (neutral-3)         │
│  RGB: 170, 183, 203                  │
│  HSL: 216°, 24%, 73%                 │
│  Width: 1px solid                    │
│                                      │
│  Icon Color: #485163 (neutral-5)     │
│  RGB: 72, 81, 99                     │
│  HSL: 220°, 16%, 34%                 │
│                                      │
│  Contrast Ratio: 4.9:1 ✓ WCAG AA    │
└──────────────────────────────────────┘
```

### LinkedIn Hover State

```
┌──────────────────────────────────────┐
│  Background: #0A66C2                 │
│  RGB: 10, 102, 194                   │
│  HSL: 210°, 90%, 40%                 │
│  (Official LinkedIn Blue)            │
│                                      │
│  Border: #0A66C2                     │
│  Width: 1px solid                    │
│                                      │
│  Icon Color: #FFFFFF (white)         │
│  RGB: 255, 255, 255                  │
│                                      │
│  Contrast Ratio: 4.6:1 ✓ WCAG AA    │
│                                      │
│  Shadow: 0 4px 8px rgba(34,34,76,.15)│
│  Transform: translateY(-2px)         │
└──────────────────────────────────────┘
```

### Twitter Hover State

```
┌──────────────────────────────────────┐
│  Background: #1DA1F2                 │
│  RGB: 29, 161, 242                   │
│  HSL: 203°, 89%, 53%                 │
│  (Official Twitter Blue)             │
│                                      │
│  Border: #1DA1F2                     │
│  Icon Color: #FFFFFF (white)         │
│                                      │
│  Contrast Ratio: 3.1:1 ✓ WCAG AA    │
│  (Passes for large UI components)    │
└──────────────────────────────────────┘
```

### Instagram Hover State

```
┌──────────────────────────────────────┐
│  Background: Linear Gradient         │
│  135° angle                          │
│  From: #833AB4 (purple)              │
│  Via:  #E1306C (pink) at 50%         │
│  To:   #F77737 (orange)              │
│                                      │
│  Border: #E1306C (pink)              │
│  Icon Color: #FFFFFF (white)         │
│                                      │
│  Contrast Ratio: 3.2:1 ✓ WCAG AA    │
│  (Against pink middle color)         │
└──────────────────────────────────────┘
```

### Facebook Hover State

```
┌──────────────────────────────────────┐
│  Background: #1877F2                 │
│  RGB: 24, 119, 242                   │
│  HSL: 214°, 89%, 52%                 │
│  (Official Facebook Blue)            │
│                                      │
│  Border: #1877F2                     │
│  Icon Color: #FFFFFF (white)         │
│                                      │
│  Contrast Ratio: 3.8:1 ✓ WCAG AA    │
└──────────────────────────────────────┘
```

---

## State Transition Specifications

### Hover Animation (Desktop Only)

```
Frame 0ms (Default):
┌──────────┐  Y position: 0
│          │  Background: #D9DFEA
│    in    │  Border: #AAB7CB
│          │  Icon: #485163
└──────────┘  Shadow: none

↓ Transition (200ms cubic-bezier(0.4, 0, 0.2, 1))

Frame 100ms (Mid-transition):
┌──────────┐  Y position: -1px
│          │  Background: #0A66C2 (50% fade)
│    in    │  Border: #0A66C2 (50% fade)
│          │  Icon: white (50% fade)
└──────────┘  Shadow: 50% opacity

↓

Frame 200ms (Hover complete):
┌──────────┐  Y position: -2px
│          │  Background: #0A66C2
│    IN    │  Border: #0A66C2
│          │  Icon: white
└──────────┘  Shadow: 0 4px 8px rgba(34,34,76,.15)
```

### Focus State (Keyboard Navigation)

```
Default State:
┌──────────────────┐
│  ┌──────────┐    │
│  │          │    │
│  │    in    │    │
│  │          │    │
│  └──────────┘    │
└──────────────────┘

Focus State:
┌──────────────────┐
│ ╔════════════╗   │  ← 2px outline
│ ║  ┌──────┐  ║   │     #0092FF (primary-blue)
│ ║  │      │  ║   │     2px offset
│ ║  │  in  │  ║   │
│ ║  │      │  ║   │
│ ║  └──────┘  ║   │
│ ╚════════════╝   │
└──────────────────┘

Outline specifications:
- Color: #0092FF (primary-blue)
- Width: 2px
- Offset: 2px
- Style: solid
- Border also changes to primary-blue
```

### Active/Pressed State

```
Hover State (before click):
┌──────────┐  Y: -2px
│          │  Shadow: 0 4px 8px
│    IN    │
│          │
└──────────┘

↓ Click/Press

Active State (during click):
┌──────────┐  Y: 0 (returns to baseline)
│          │  Shadow: 0 1px 2px (reduced)
│    IN    │  Duration: 50ms
│          │
└──────────┘
```

---

## Spacing Grid Alignment

### 8px Grid System Compliance

```
All measurements align to 8px grid:

Button sizes:
- Desktop: 32px = 4 × 8px ✓
- Mobile:  44px = 5.5 × 8px (exception for WCAG 44px minimum)

Icon sizes:
- Desktop: 16px = 2 × 8px ✓
- Mobile:  20px = 2.5 × 8px (proportional to button)

Gaps:
- Desktop: 8px = 1 × 8px ✓
- Mobile:  12px = 1.5 × 8px (increased for touch)

Margins:
- Top:     8px = 1 × 8px ✓
- Bottom:  0px (flows naturally)

Border radius:
- All:     6px = 0.75 × 8px (acceptable variance for modern feel)

Border width:
- All:     1px (minimum for definition)
```

---

## Responsive Breakpoint Behavior

### Breakpoint: 1024px (Desktop threshold)

```
≥1024px (Desktop):
┌─────────────────────────────────────┐
│ [32×32] [32×32] [32×32] [32×32]     │
│    in      𝕏      📷       f         │
│                                     │
│ - Button: 32×32px                   │
│ - Icon: 16×16px                     │
│ - Gap: 8px                          │
│ - Hover: -2px lift + shadow         │
│ - Wrapping: Enabled if 5+ icons     │
└─────────────────────────────────────┘

<1024px (Mobile/Tablet):
┌─────────────────────────────────────┐
│ [44×44] [44×44] [44×44] [44×44]     │
│    in      𝕏      📷       f         │
│                                     │
│ - Button: 44×44px                   │
│ - Icon: 20×20px                     │
│ - Gap: 12px                         │
│ - Hover: Color only (no lift)       │
│ - Wrapping: Enabled if 5+ icons     │
└─────────────────────────────────────┘
```

### Wrapping Behavior (5+ Platforms)

```
Desktop (4 icons - no wrap):
[in] [𝕏] [📷] [f]

Desktop (6 icons - wraps):
[in] [𝕏] [📷] [f] [TT] [YT]
     ^8px gaps between^

Mobile (4 icons - no wrap):
[in] [𝕏] [📷] [f]

Mobile (6 icons - may wrap depending on viewport):
[in] [𝕏] [📷] [f]
[TT] [YT]
  ^same gaps maintained^
```

---

## Shadow System

### Shadow Scale (myBlueprint Design System)

```
No shadow (default):
box-shadow: none;

Small shadow (sm):
box-shadow: 0 1px 2px rgba(34, 34, 76, 0.05);
Use: Active/pressed state

Medium shadow (md):
box-shadow: 0 4px 8px rgba(34, 34, 76, 0.08);
Use: Hover state (modified to 0.15 alpha for prominence)

Actual hover shadow:
box-shadow: 0 4px 8px rgba(34, 34, 76, 0.15);

Visual representation:
┌──────────┐
│          │
│    in    │
│          │
└──────────┘
    ████      ← Shadow blur
   ██████
  ████████
```

---

## Tailwind CSS Class Reference

### Size Classes
```css
/* Desktop */
w-8    /* width: 32px (2rem) */
h-8    /* height: 32px (2rem) */

/* Mobile/Tablet */
md:w-11   /* width: 44px (2.75rem) at ≥768px */
md:h-11   /* height: 44px (2.75rem) at ≥768px */
```

### Icon Size Classes
```css
/* Desktop */
w-4    /* width: 16px (1rem) */
h-4    /* height: 16px (1rem) */

/* Mobile/Tablet */
md:w-5   /* width: 20px (1.25rem) at ≥768px */
md:h-5   /* height: 20px (1.25rem) at ≥768px */
```

### Spacing Classes
```css
gap-2    /* gap: 8px (0.5rem) - between buttons */
mt-2     /* margin-top: 8px (0.5rem) - from website link */
```

### Color Classes
```css
bg-neutral-2       /* background: #D9DFEA */
border             /* border-width: 1px */
border-neutral-3   /* border-color: #AAB7CB */
text-neutral-5     /* color: #485163 */
```

### Border Radius
```css
rounded-md   /* border-radius: 6px (0.375rem) */
```

### Transitions
```css
transition-all   /* transition-property: all */
duration-200     /* transition-duration: 200ms */
```

### Hover Effects
```css
hover:-translate-y-0.5   /* transform: translateY(-2px) */
hover:shadow-md          /* box-shadow: 0 4px 6px rgba(0,0,0,0.1) */
```

### Focus
```css
focus-visible:outline-2            /* outline-width: 2px */
focus-visible:outline-primary-blue /* outline-color: #0092FF */
focus-visible:outline-offset-2     /* outline-offset: 2px */
```

---

## Measurement Quick Reference Table

| Property | Desktop | Mobile | Unit | Notes |
|----------|---------|--------|------|-------|
| Button width | 32 | 44 | px | WCAG 44px min mobile |
| Button height | 32 | 44 | px | Square buttons |
| Icon width | 16 | 20 | px | Proportional to button |
| Icon height | 16 | 20 | px | Square icons |
| Gap between buttons | 8 | 12 | px | Touch-friendly on mobile |
| Margin top (from website) | 8 | 8 | px | Consistent spacing |
| Border radius | 6 | 6 | px | Subtle rounding |
| Border width | 1 | 1 | px | Definition |
| Outline width (focus) | 2 | 2 | px | Accessibility |
| Outline offset (focus) | 2 | 2 | px | Clear visibility |
| Hover lift (Y transform) | -2 | 0 | px | Desktop only |
| Active lift (Y transform) | 0 | 0 | px | Returns to baseline |
| Transition duration | 200 | 200 | ms | Smooth animation |

---

## Complete CSS Specifications

```css
/* Base button styles */
.social-button {
  /* Box model */
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Colors (default state) */
  background-color: #D9DFEA;  /* neutral-2 */
  border: 1px solid #AAB7CB;  /* neutral-3 */
  color: #485163;             /* neutral-5 */

  /* Border radius */
  border-radius: 6px;

  /* Cursor */
  cursor: pointer;

  /* Transitions */
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Icon inside button */
.social-button__icon {
  width: 16px;
  height: 16px;
}

/* Hover state (desktop) */
@media (hover: hover) {
  .social-button:hover {
    /* Platform-specific background */
    background-color: var(--platform-color);
    border-color: var(--platform-color);
    color: white;

    /* Lift effect */
    transform: translateY(-2px);

    /* Shadow */
    box-shadow: 0 4px 8px rgba(34, 34, 76, 0.15);
  }
}

/* Focus state (keyboard) */
.social-button:focus-visible {
  outline: 2px solid #0092FF;  /* primary-blue */
  outline-offset: 2px;
  border-color: #0092FF;
}

/* Active state (pressed) */
.social-button:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(34, 34, 76, 0.1);
}

/* Mobile responsive */
@media (max-width: 1023px) {
  .social-button {
    width: 44px;
    height: 44px;
  }

  .social-button__icon {
    width: 20px;
    height: 20px;
  }

  /* No hover lift on mobile */
  .social-button:hover {
    transform: none;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .social-button {
    transition-property: background-color, border-color, color;
    transition-duration: 50ms;
  }

  .social-button:hover {
    transform: none;
  }
}
```

---

**For complete implementation details, see:**
- `social-media-buttons.md` - Full design specifications
- `social-media-buttons-implementation.tsx` - Production code
- `social-media-buttons-quick-reference.md` - Quick visual guide
