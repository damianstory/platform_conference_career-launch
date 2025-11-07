---
title: Responsive Layout - Expo Booth Cards
description: Grid system and responsive behavior specifications for booth cards across all breakpoints
feature: Expo Booth Cards Redesign
last-updated: 2025-11-07
related-files:
  - ./README.md
  - ./card-specifications.md
status: approved
---

# Responsive Layout Specifications

## Grid System Overview

The expo hall uses a responsive grid that adapts from 1 column on mobile to 4 columns on wide screens. This approach ensures optimal card width at all breakpoints, preventing the "too narrow" problem observed in the previous 5-column layout.

## Breakpoint System

Following the Career Launch Platform's standard breakpoints:

```css
/* Mobile */
320px - 767px

/* Tablet */
768px - 1023px

/* Desktop */
1024px - 1439px

/* Wide */
1440px+
```

## Grid Configuration by Breakpoint

### Mobile (320-767px)

**Layout:**
```jsx
className="grid grid-cols-1 gap-6"
```

**Container:**
- Max width: 100%
- Padding: 16px (left/right)
- Effective content width: 288px - 735px

**Card Dimensions:**
- Width: 100% of container (minus padding)
- Typical width: ~288px (320px screen) to ~720px (767px screen)
- Height: Minimum 360px
- Aspect ratio: Variable (wider on larger mobiles)

**Visual Characteristics:**
- Single column ensures maximum card width
- Full-width cards prevent text truncation
- 24px gap between stacked cards
- Easy thumb scrolling
- All content easily readable

**Layout Example:**
```
┌─────────────────────────┐
│                         │
│    Booth Card 1         │
│                         │
└─────────────────────────┘
          ↓ 24px gap
┌─────────────────────────┐
│                         │
│    Booth Card 2         │
│                         │
└─────────────────────────┘
          ↓ 24px gap
┌─────────────────────────┐
│                         │
│    Booth Card 3         │
│                         │
└─────────────────────────┘
```

### Tablet (768-1023px)

**Layout:**
```jsx
className="grid grid-cols-1 md:grid-cols-2 gap-6"
```

**Container:**
- Max width: 100%
- Padding: 24px (left/right)
- Effective content width: 720px - 975px

**Card Dimensions:**
- Width: ~50% of container (minus gap)
- Typical width: ~348px (768px screen) to ~463px (1023px screen)
- Height: Minimum 360px
- Aspect ratio: ~1:1 to 4:3

**Visual Characteristics:**
- 2-column grid provides balanced layout
- Cards are wider than previous implementation
- 24px gap between cards (horizontal and vertical)
- Comfortable reading width
- Both platinum and standard cards same width

**Layout Example:**
```
┌─────────────┐  ┌─────────────┐
│             │  │             │
│  Booth 1    │  │  Booth 2    │
│             │  │             │
└─────────────┘  └─────────────┘
       ↓ 24px gap
┌─────────────┐  ┌─────────────┐
│             │  │             │
│  Booth 3    │  │  Booth 4    │
│             │  │             │
└─────────────┘  └─────────────┘
```

### Desktop (1024-1439px)

**Layout:**
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
```

**Container:**
- Max width: 100%
- Padding: 32px (left/right)
- Effective content width: 960px - 1375px

**Card Dimensions:**
- Width: ~33% of container (minus gaps)
- Typical width: ~304px (1024px) to ~435px (1439px)
- Height: Minimum 360px
- Aspect ratio: ~1:1.2 to 1:1

**Visual Characteristics:**
- 3-column grid optimal for desktop viewing
- Increased gap to 32px for better breathing room
- Balanced distribution of platinum and standard cards
- Excellent text readability
- No truncation of company names or taglines

**Layout Example:**
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│          │  │          │  │          │
│ Booth 1  │  │ Booth 2  │  │ Booth 3  │
│          │  │          │  │          │
└──────────┘  └──────────┘  └──────────┘
           ↓ 32px gap
┌──────────┐  ┌──────────┐  ┌──────────┐
│          │  │          │  │          │
│ Booth 4  │  │ Booth 5  │  │ Booth 6  │
│          │  │          │  │          │
└──────────┘  └──────────┘  └──────────┘
```

### Wide (1440px+)

**Layout:**
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
```

**Container:**
- Max width: 1440px (constrained)
- Padding: 32px (left/right)
- Effective content width: 1376px
- Container centered horizontally

**Card Dimensions:**
- Width: ~25% of container (minus gaps)
- Typical width: ~325px - 340px (consistent)
- Height: Minimum 360px
- Aspect ratio: ~1:1.1 (nearly square)

**Visual Characteristics:**
- 4-column grid maximizes screen real estate
- Container max-width prevents excessive stretching
- Consistent card width across all ultra-wide displays
- 32px gaps provide premium spacing
- Centered container on screens >1440px

**Layout Example:**
```
┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
│        │  │        │  │        │  │        │
│ Booth1 │  │ Booth2 │  │ Booth3 │  │ Booth4 │
│        │  │        │  │        │  │        │
└────────┘  └────────┘  └────────┘  └────────┘
              ↓ 32px gap
┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
│        │  │        │  │        │  │        │
│ Booth5 │  │ Booth6 │  │ Booth7 │  │ Booth8 │
│        │  │        │  │        │  │        │
└────────┘  └────────┘  └────────┘  └────────┘
```

## Container Specifications

### Main Container Wrapper
```jsx
<div className="min-h-screen bg-gradient-to-b from-background-light to-white">
  <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-6">
    {/* Content */}
  </div>
</div>
```

**Padding by Breakpoint:**
- Mobile: 16px (px-4)
- Tablet: 24px (md:px-6)
- Desktop+: 32px (lg:px-8)

**Max Width:**
- Mobile-Desktop: 100%
- Wide: 1440px (constrained, centered)

## Removed: Variable Column Spans

**Previous Implementation (REMOVED):**
```jsx
// ❌ OLD - Don't use
<div className="col-span-2 md:col-span-3">  {/* Platinum */}
<div className="col-span-1 md:col-span-2">  {/* Standard */}
```

**New Implementation:**
```jsx
// ✅ NEW - All cards uniform
<div>  {/* All cards span 1 column naturally */}
```

**Rationale:**
- Variable spans created inconsistent widths
- Standard cards were too narrow in previous layout
- Platinum cards were too wide, disrupting grid flow
- Uniform width provides better visual consistency
- Tier differentiation now handled through styling, not size

## Grid Gap Specifications

### Gap Values by Breakpoint

**Mobile:**
```css
gap: 24px; /* gap-6 */
```

**Tablet:**
```css
gap: 24px; /* gap-6 */
```

**Desktop:**
```css
gap: 32px; /* lg:gap-8 */
```

**Wide:**
```css
gap: 32px; /* lg:gap-8 */
```

### Gap Application
- Applied uniformly (row and column)
- Uses Tailwind's `gap` utility (shorthand for `gap-x` and `gap-y`)
- Maintains visual breathing room between cards
- Increases on larger screens for premium feel

## Section Headers (Platinum vs Standard)

### Platinum Section Header
```jsx
<div className="mb-6">
  <h2 className="text-3xl font-bold animated-gradient-text mb-2">
    Platinum Booths
  </h2>
  <div className="h-1.5 w-24 bg-primary-blue rounded-full"></div>
</div>
```

### Standard Section Header
```jsx
<div className="mb-6">
  <h2 className="text-xl font-semibold text-neutral-5 mb-2">
    Standard Booths
  </h2>
  <div className="h-0.5 w-16 bg-neutral-4 rounded-full"></div>
</div>
```

### Section Spacing
- Margin bottom: 24px (mb-6)
- Space between sections: 48px (space-y-12 on parent)

## Card Grid Implementation

### Full Implementation Example

```jsx
<div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-6">
  {/* Platinum Booths Section */}
  <div className="mb-12">
    <div className="mb-6">
      <h2 className="text-3xl font-bold animated-gradient-text mb-2">
        Platinum Booths
      </h2>
      <div className="h-1.5 w-24 bg-primary-blue rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {platinumBooths.map((booth) => (
        <BoothCard key={booth.id} booth={booth} />
      ))}
    </div>
  </div>

  {/* Standard Booths Section */}
  <div>
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-neutral-5 mb-2">
        Standard Booths
      </h2>
      <div className="h-0.5 w-16 bg-neutral-4 rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {standardBooths.map((booth) => (
        <BoothCard key={booth.id} booth={booth} />
      ))}
    </div>
  </div>
</div>
```

## Responsive Typography Adjustments

### Company Name
- Mobile-Desktop: `text-body-1` (1.25rem/20px)
- No size changes across breakpoints
- Line clamp: 2 lines max

### Tagline
- Mobile-Desktop: `text-body-2` (1rem/16px)
- No size changes across breakpoints
- Line clamp: 3 lines max

### Tags
- Mobile-Desktop: `text-subtitle-1` (0.75rem/12px)
- No size changes across breakpoints
- Wrap to multiple lines if needed

**Rationale:** Text sizes remain consistent because card width changes are moderate (280px-360px). Larger screens get more cards per row, not bigger cards.

## Touch Target Optimization

### Mobile Touch Targets
- Entire card: Minimum 280x360px (far exceeds 44x44px)
- Hover CTA: Not shown on mobile (touch shows immediately)
- Card tap: Full card is tappable link

### Tablet+ Touch Targets
- Entire card: Minimum 320x360px
- Hover CTA: Appears on hover, 40px height
- Mouse click: Anywhere on card navigates

## Performance Considerations

### Grid Layout Performance
- Use CSS Grid (hardware accelerated)
- Avoid JavaScript-based masonry layouts
- Fixed minimum height prevents layout shift
- Images lazy loaded with proper size attributes

### Responsive Images
```jsx
<img
  src={booth.logo}
  alt={`${booth.name} logo`}
  width={96}  // or 80 for standard
  height={96} // or 80 for standard
  loading="lazy"
  className="object-contain"
/>
```

## Animation Considerations

### Entrance Animations
- Stagger delay: 50ms per card
- Fade in + slide up effect
- Duration: 500ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

### Responsive Animation
- Same animation timing across all breakpoints
- Stagger applies within each section
- Respects `prefers-reduced-motion`

## Edge Cases

### Very Wide Screens (2560px+)
- Container max-width: 1440px (enforced)
- Container centered: `mx-auto`
- Cards remain 340px width
- Extra space appears as margins

### Very Narrow Screens (320px)
- Single column layout
- 16px side padding
- 288px card width
- Text still readable, may use all 2-3 lines

### Variable Content Heights
- Cards use `min-h-[360px]`
- Flexbox keeps tags at bottom
- Hover CTA always at card bottom
- Taller cards align top in grid

## Comparison: Old vs New

### Old Grid (REMOVED)
```
Mobile:    2 cols  (too narrow)
Tablet:    3 cols  (too narrow)
Desktop:   4 cols  (too narrow)
XL:        5 cols  (way too narrow)

Card spans vary by tier (inconsistent)
```

### New Grid (CURRENT)
```
Mobile:    1 col   (full width)
Tablet:    2 cols  (comfortable)
Desktop:   3 cols  (optimal)
XL:        4 cols  (premium)

All cards span 1 col (consistent)
```

## Testing Checklist

### Responsive Testing
- [ ] Verify 1-column layout on mobile (320px-767px)
- [ ] Verify 2-column layout on tablet (768px-1023px)
- [ ] Verify 3-column layout on desktop (1024px-1439px)
- [ ] Verify 4-column layout on wide (1440px+)
- [ ] Confirm container centers on screens >1440px
- [ ] Test gap spacing at each breakpoint
- [ ] Verify padding changes at breakpoints

### Content Testing
- [ ] Company names don't truncate at any width
- [ ] Taglines display 2-3 lines comfortably
- [ ] Tags wrap appropriately on narrow cards
- [ ] Logo sizes appropriate for card size
- [ ] Hover CTA doesn't cover content

### Visual Testing
- [ ] Cards maintain aspect ratio at all widths
- [ ] Tier differentiation visible at all sizes
- [ ] Grid alignment perfect at all breakpoints
- [ ] No horizontal scroll at any viewport
- [ ] Smooth transitions between breakpoints

## Implementation Notes

1. **Remove old grid classes** from `ExpoHall.tsx`
2. **Update to new grid configuration** as specified above
3. **Remove col-span logic** from `BoothCard.tsx`
4. **Test at all breakpoints** with real content
5. **Verify accessibility** with keyboard navigation
6. **Test with various content lengths** (short/long names)

## Related Files
- [Card Specifications](./card-specifications.md)
- [Visual Hierarchy](./visual-hierarchy.md)
- [Implementation Guide](./implementation.md)
