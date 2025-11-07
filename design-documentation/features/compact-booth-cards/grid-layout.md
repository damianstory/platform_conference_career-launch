---
title: Grid Layout Specifications
description: Responsive grid configurations, column spanning, and spacing for optimal booth card display
feature: Compact Booth Cards
last-updated: 2025-11-07
version: 1.0.0
related-files:
  - ./README.md
  - ./card-dimensions.md
  - ../../design-system/tokens/spacing.md
status: approved
---

# Grid Layout Specifications

## Overview

The grid layout is optimized to display 27+ platinum booths effectively while maintaining visual hierarchy and responsive behavior. Platinum booths span 2 columns, standard booths span 1 column.

## Grid System Foundation

### Base Configuration

```css
/* Grid Container */
display: grid;
grid-template-columns: repeat(4, 1fr);    /* 4 equal columns */
gap: 24px;                                 /* 24px between cards (8px grid: 3 units) */
width: 100%;
max-width: 1440px;                         /* Container max width */
margin: 0 auto;                            /* Center container */
padding: 0 16px;                           /* Horizontal page padding */
```

### Tailwind Implementation

```jsx
<div className="
  grid
  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
  gap-6
  max-w-7xl
  mx-auto
  px-4
">
  {/* Cards */}
</div>
```

## Column Spanning Rules

### Platinum Booths

```css
/* Platinum booth wrapper */
grid-column: span 2 / span 2;    /* Spans 2 columns */
```

### Tailwind Implementation

```jsx
<div className="col-span-2">
  <BoothCard booth={platinumBooth} />
</div>
```

### Standard Booths

```css
/* Standard booth wrapper */
grid-column: span 1 / span 1;    /* Spans 1 column */
```

### Tailwind Implementation

```jsx
<div className="col-span-1">
  <BoothCard booth={standardBooth} />
</div>
```

## Responsive Breakpoints

Following project-wide breakpoint system:

```css
/* Breakpoint values */
--mobile: 320px - 767px
--tablet: 768px - 1023px
--desktop: 1024px - 1439px
--wide: 1440px+
```

## Mobile Layout (320px - 767px)

### Grid Configuration

```css
/* Single column layout */
grid-template-columns: 1fr;
gap: 16px;                         /* Reduced gap for mobile (8px grid: 2 units) */
padding: 0 16px;
```

### Column Spanning

Both platinum and standard booths span full width:

```css
/* All booths on mobile */
grid-column: span 1 / span 1;
```

### Tailwind Implementation

```jsx
<div className="
  grid
  grid-cols-1          /* Single column on mobile */
  gap-4                /* 16px gap */
  px-4                 /* 16px horizontal padding */
">
  {/* All cards span 1 column */}
  <div className="col-span-1">
    <BoothCard booth={booth} />
  </div>
</div>
```

### Visual Layout

```
┌─────────────────────┐
│   Platinum Booth    │ Full width
├─────────────────────┤
│   Standard Booth    │ Full width
├─────────────────────┤
│   Platinum Booth    │ Full width
├─────────────────────┤
│   Standard Booth    │ Full width
└─────────────────────┘
```

### Viewport Calculations

| Viewport | Container | Gap | Card Width |
|----------|-----------|-----|------------|
| 320px | 288px | 0px | 288px |
| 375px | 343px | 0px | 343px |
| 428px | 396px | 0px | 396px |

Container width = Viewport - (16px padding × 2)

## Tablet Layout (768px - 1023px)

### Grid Configuration

```css
/* Two column layout */
grid-template-columns: repeat(2, 1fr);
gap: 20px;                         /* Medium gap (not strict 8px grid) */
padding: 0 24px;
```

### Column Spanning

Both platinum and standard booths span full width (2 columns):

```css
/* All booths on tablet */
grid-column: span 2 / span 2;
```

### Tailwind Implementation

```jsx
<div className="
  grid
  grid-cols-2          /* 2 columns on tablet */
  gap-5                /* 20px gap */
  px-6                 /* 24px horizontal padding */
">
  {/* All cards span 2 columns */}
  <div className="sm:col-span-2">
    <BoothCard booth={booth} />
  </div>
</div>
```

### Visual Layout

```
┌─────────────────────────────────────┐
│       Platinum Booth (Full)         │ 2 columns
├─────────────────────────────────────┤
│       Standard Booth (Full)         │ 2 columns
├─────────────────────────────────────┤
│       Platinum Booth (Full)         │ 2 columns
└─────────────────────────────────────┘
```

### Viewport Calculations

| Viewport | Container | Gap | Card Width |
|----------|-----------|-----|------------|
| 768px | 720px | 20px | 720px (full) |
| 820px | 772px | 20px | 772px (full) |
| 1023px | 975px | 20px | 975px (full) |

Container width = Viewport - (24px padding × 2)

## Desktop Layout (1024px - 1439px)

### Grid Configuration

```css
/* Four column layout */
grid-template-columns: repeat(4, 1fr);
gap: 24px;                         /* Standard gap (8px grid: 3 units) */
padding: 0 32px;
```

### Column Spanning

```css
/* Platinum booths */
grid-column: span 2 / span 2;      /* 2 columns */

/* Standard booths */
grid-column: span 1 / span 1;      /* 1 column */
```

### Tailwind Implementation

```jsx
<div className="
  grid
  grid-cols-4          /* 4 columns on desktop */
  gap-6                /* 24px gap */
  px-8                 /* 32px horizontal padding */
">
  {/* Platinum spans 2 */}
  <div className="lg:col-span-2">
    <BoothCard booth={platinumBooth} />
  </div>

  {/* Standard spans 1 */}
  <div className="lg:col-span-1">
    <BoothCard booth={standardBooth} />
  </div>
</div>
```

### Visual Layout

```
┌──────────────────┬──────────────────┐
│   Platinum (2)   │   Standard (1) │ │ Row 1
├──────────────────┼────────┬─────────┤
│   Platinum (2)   │ Std (1)│ Std (1)│ Row 2
└──────────────────┴────────┴─────────┘
```

### Viewport Calculations

| Viewport | Container | Gap (×3) | Col Width | Platinum | Standard |
|----------|-----------|----------|-----------|----------|----------|
| 1024px | 960px | 72px | 222px | 468px | 222px |
| 1200px | 1136px | 72px | 266px | 556px | 266px |
| 1439px | 1375px | 72px | 325.75px | 675.5px | 325.75px |

**Calculation formula:**
- Container width = Viewport - (32px padding × 2)
- Column width = (Container - (gap × 3)) / 4
- Platinum width = (Column width × 2) + gap
- Standard width = Column width

## Wide Layout (1440px+)

### Grid Configuration

```css
/* Four column layout (same as desktop) */
grid-template-columns: repeat(4, 1fr);
gap: 24px;
padding: 0 48px;                   /* Increased padding for wide screens */
max-width: 1440px;                 /* Container doesn't exceed 1440px */
margin: 0 auto;                    /* Center when viewport > 1536px */
```

### Column Spanning

Same as desktop:

```css
/* Platinum: 2 columns, Standard: 1 column */
```

### Tailwind Implementation

```jsx
<div className="
  grid
  grid-cols-4          /* 4 columns on wide */
  gap-6                /* 24px gap */
  px-12                /* 48px horizontal padding */
  max-w-7xl            /* 1280px max (or 1440px custom) */
  mx-auto              /* Center container */
">
  {/* Same spanning as desktop */}
</div>
```

### Viewport Calculations

| Viewport | Container | Gap (×3) | Col Width | Platinum | Standard |
|----------|-----------|----------|-----------|----------|----------|
| 1440px | 1344px | 72px | 318px | 660px | 318px |
| 1536px | 1440px* | 72px | 342px | 708px | 342px |
| 1920px | 1440px* | 72px | 342px | 708px | 342px |

*Container capped at 1440px, centered with `margin: 0 auto`

## Calculating Booths Per Viewport Row

### Desktop (1024px+) - 4 Column Grid

**Scenario: 27 Platinum + 10 Standard Booths**

Platinum booths: 27 × (2 column span) = **54 column units**
Standard booths: 10 × (1 column span) = **10 column units**
Total: **64 column units**

Rows needed: 64 / 4 = **16 rows**

### Visible Booths (1440px viewport, 900px height)

With 224px card height + 24px gap = 248px per row:

Visible rows: 900px / 248px ≈ **3.6 rows**
Visible booths: ~14-15 booths in initial viewport

**User must scroll to see all 37 booths** (expected behavior)

## Gap Spacing Rationale

### Why Different Gaps Per Breakpoint?

| Breakpoint | Gap | Reason |
|------------|-----|--------|
| Mobile | 16px | Maximize screen space, reduce scrolling |
| Tablet | 20px | Balance between density and breathing room |
| Desktop | 24px | Optimal visual separation for multi-column layout |

### Following 8px Grid

- 16px = 8px × 2 ✅
- 20px = Not on strict grid ⚠️ (aesthetic optimization)
- 24px = 8px × 3 ✅

**Note**: 20px gap on tablet is intentional deviation for optimal visual balance.

## Grid Organization Strategy

### Sorting Priority

```javascript
// Sort booths by tier priority
const sortedBooths = [...allBooths].sort((a, b) => {
  const tierOrder = { platinum: 0, standard: 1 }
  return tierOrder[a.tier] - tierOrder[b.tier]
})
```

### Rendering Order

1. **Platinum booths first** (all 27 render before any standard)
2. **Standard booths second** (fill remaining grid space)

### Visual Result

```
Row 1: [Platinum][Platinum]
Row 2: [Platinum][Platinum]
...
Row 14: [Platinum][Standard][Standard]
Row 15: [Standard][Standard][Standard][Standard]
```

Platinum booths dominate the top of the grid, establishing visual hierarchy.

## Container Padding System

### Purpose of Container Padding

Prevents cards from touching viewport edges:

| Breakpoint | Padding | Purpose |
|------------|---------|---------|
| Mobile | 16px | Minimum touch-friendly padding |
| Tablet | 24px | Comfortable reading margins |
| Desktop | 32px | Professional appearance |
| Wide | 48px | Balanced negative space on large screens |

### Implementation

```jsx
<div className="px-4 sm:px-6 lg:px-8 xl:px-12">
  <div className="grid ...">
    {/* Cards */}
  </div>
</div>
```

## Edge Case Handling

### Odd Number of Platinum Booths

27 platinum booths (odd number) on 4-column grid:

```
Row 1: [Platinum][Platinum]         ← 2 booths
Row 2: [Platinum][Platinum]         ← 4 booths total
...
Row 13: [Platinum][Platinum]        ← 26 booths total
Row 14: [Platinum][Standard][Standard] ← 27th platinum + standards
```

Last platinum booth occupies 2 columns, leaving 2 columns for standard booths on that row.

### No Standard Booths

If only platinum booths exist:

```
Row 1: [Platinum][Platinum]
Row 2: [Platinum][Platinum]
...
Row 14: [Platinum][Empty space]     ← Grid auto-fills, leaves empty columns
```

Grid naturally accommodates with empty space in incomplete rows.

### More Standard Than Platinum

If 5 platinum, 50 standard booths:

```
Row 1: [Platinum][Platinum]         ← 2 platinum
Row 2: [Platinum][Standard][Standard] ← 3rd platinum + standards
Row 3: [Platinum][Platinum]         ← 4th, 5th platinum
Row 4: [Standard][Standard][Standard][Standard]
Row 5: [Standard][Standard][Standard][Standard]
...
```

Standard booths efficiently fill grid after platinum booths conclude.

## Accessibility Considerations

### Keyboard Navigation

Grid order follows visual order (left-to-right, top-to-bottom):

```jsx
<div className="grid ...">
  {sortedBooths.map((booth, index) => (
    <Link
      href={`/booths/${booth.slug}`}
      key={booth.id}
      tabIndex={0}              // Explicitly keyboard accessible
      aria-label={`Visit ${booth.name} booth`}
    >
      <BoothCard booth={booth} />
    </Link>
  ))}
</div>
```

Tab order matches visual grid order automatically with CSS Grid.

### Screen Reader Announcements

```jsx
<div
  role="list"
  aria-label="Expo hall booths"
  className="grid ..."
>
  {sortedBooths.map((booth) => (
    <article
      key={booth.id}
      role="listitem"
      aria-label={`${booth.tier} tier: ${booth.name}, ${booth.industry}`}
    >
      <BoothCard booth={booth} />
    </article>
  ))}
</div>
```

Screen readers announce booth tier, name, and industry for context.

## Performance Considerations

### Rendering 37+ Cards

With 27 platinum + 10+ standard booths (37 total):

**No virtualization needed**: All 37 cards render immediately. Testing shows negligible performance impact with this quantity.

**Future-proofing**: If booth count exceeds 100, implement virtual scrolling:

```jsx
import { VirtualizedGrid } from 'react-virtual'

// Only render visible + buffer cards
```

### Image Loading

Lazy load booth logos outside viewport:

```jsx
<img
  src={booth.logo}
  alt={`${booth.name} logo`}
  loading="lazy"              // Native lazy loading
  decoding="async"            // Async decode for performance
/>
```

### Animation Performance

Stagger entrance animations by index:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: index * 0.05,        // 50ms per card
    duration: 0.6
  }}
>
  {/* Card */}
</motion.div>
```

**Max delay**: 37 cards × 50ms = 1.85 seconds for last card
**Acceptable UX**: Cards appear progressively, perceived as fast

## Implementation Checklist

Grid layout implementation requirements:

- [ ] Base grid: 4 columns on desktop, responsive breakpoints
- [ ] Gap spacing: 16px mobile, 20px tablet, 24px desktop
- [ ] Platinum booths: Span 2 columns on desktop/wide
- [ ] Standard booths: Span 1 column on desktop/wide
- [ ] Mobile: All booths span 1 column (full width)
- [ ] Tablet: All booths span 2 columns (full width)
- [ ] Container padding: 16/24/32/48px by breakpoint
- [ ] Max container width: 1440px (centered when wider)
- [ ] Sorting: Platinum before standard in render order
- [ ] Keyboard navigation: Tab order matches visual order
- [ ] ARIA labels: Grid announced as "list" with "listitems"
- [ ] Lazy loading: Images load as they enter viewport
- [ ] Animation stagger: 50ms delay per card index
- [ ] Testing: Verify with 27 platinum + 10 standard booths

---

Last Updated: 2025-11-07 | Version: 1.0.0 | Status: Approved
