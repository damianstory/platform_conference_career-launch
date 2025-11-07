---
title: Card Specifications - Expo Booth Cards
description: Detailed specifications for card dimensions, layout, and structure
feature: Expo Booth Cards Redesign
last-updated: 2025-11-07
related-files:
  - ./README.md
  - ./responsive-layout.md
status: approved
---

# Card Specifications

## Card Dimensions

### Overall Card Size

**Height:**
- Minimum: 360px
- Maximum: 420px (content-dependent)
- Approach: Use `min-h-[360px]` instead of fixed `h-[320px]`
- Allow cards to grow with content while maintaining minimum height

**Width:**
- Determined by grid container
- Mobile (1 column): ~100% of container (minus padding)
- Tablet (2 columns): ~50% of container (minus gap)
- Desktop (3 columns): ~33% of container (minus gap)
- Wide (4 columns): ~25% of container (minus gap)
- Effective widths: 280px (mobile) to 360px (wide screens)

**Aspect Ratio:**
- Target: ~3:4 (width:height) to ~1:1 depending on breakpoint
- Mobile: Closer to 1:1 (320x360)
- Desktop: Closer to 1:1.2 (340x360)
- Provides better visual balance than previous narrow cards

## Card Structure

### Internal Padding
```css
padding: 24px; /* 3 units on 8px grid */
```

### Section Breakdown (360px minimum height)

1. **Top Section (Optional)** - 40px
   - "Industry Immersion Series" badge OR gift icon
   - Margin bottom: 16px

2. **Logo Section** - 120px total
   - Logo container: 96px (platinum) / 80px (standard)
   - Margin bottom: 24px

3. **Content Section** - 160px flexible
   - Company name: ~40-60px (2 lines)
   - Spacing: 8px
   - Tagline: ~60-90px (2-3 lines)
   - Spacing: 16px
   - Tags section: ~32px (wrapped if needed)

4. **Hover CTA** - 56px (absolute positioned)
   - Height: 40px
   - Bottom padding: 16px (from card bottom)

## Card Container Specifications

### Border & Outline

**Platinum Cards:**
```css
border-width: 3px;
border-color: rgba(0, 146, 255, 0.3); /* primary-blue/30 */
border-radius: 12px; /* rounded-xl */
```

**Standard Cards:**
```css
border-width: 2px;
border-color: #D9DFEA; /* neutral-2 */
border-radius: 12px; /* rounded-xl */
```

### Background

**Platinum Cards:**
```css
background: linear-gradient(
  to bottom right,
  rgba(198, 231, 255, 0.4), /* light-blue/40 */
  rgba(246, 246, 255, 1),    /* off-white */
  rgba(198, 231, 255, 0.4)   /* light-blue/40 */
);
```

**Standard Cards:**
```css
background-color: #FFFFFF; /* white */
```

### Shadows

**Platinum Cards - Default:**
```css
box-shadow:
  0 10px 15px rgba(34, 34, 76, 0.08),
  0 0 30px rgba(0, 146, 255, 0.1); /* subtle blue glow */
```

**Platinum Cards - Hover:**
```css
box-shadow:
  0 20px 25px rgba(34, 34, 76, 0.12),
  0 0 40px rgba(0, 146, 255, 0.25); /* enhanced blue glow */
```

**Standard Cards - Default:**
```css
box-shadow: 0 4px 6px rgba(34, 34, 76, 0.1);
```

**Standard Cards - Hover:**
```css
box-shadow: 0 10px 15px rgba(34, 34, 76, 0.15);
```

## Logo Container

### Platinum Logo
```css
width: 96px;
height: 96px;
background-color: #FFFFFF;
border-radius: 12px; /* rounded-lg */
box-shadow: 0 2px 4px rgba(34, 34, 76, 0.08);
padding: 12px;
```

### Standard Logo
```css
width: 80px;
height: 80px;
background-color: #FFFFFF;
border-radius: 8px; /* rounded-md */
box-shadow: 0 1px 2px rgba(34, 34, 76, 0.05);
padding: 8px;
```

### Logo Image Specifications
- Object fit: `contain`
- Max width: 100%
- Max height: 100%
- Center aligned

## Content Sections

### Company Name Container
```css
height: auto;
min-height: 40px;
max-height: 60px;
line-clamp: 2;
overflow: hidden;
```

### Tagline Container
```css
height: auto;
min-height: 56px;
max-height: 90px;
line-clamp: 3;
overflow: hidden;
flex-grow: 1; /* Takes available space */
```

### Tags Container
```css
display: flex;
flex-wrap: wrap;
gap: 8px;
margin-top: auto; /* Pushes to bottom of content section */
padding-top: 16px;
```

## Tag Specifications

### Organization Type Badge

**Employer:**
```css
background-color: rgba(0, 146, 255, 0.1); /* blue-500/10 */
color: #0066CC; /* Darker blue for contrast */
```

**Post-Secondary:**
```css
background-color: rgba(147, 51, 234, 0.1); /* purple-500/10 */
color: #7C3AED; /* purple-700 */
```

**Gap Year:**
```css
background-color: rgba(34, 197, 94, 0.1); /* green-500/10 */
color: #16A34A; /* green-700 */
```

### Industry Tag
```css
background-color: rgba(0, 146, 255, 0.1); /* primary-blue/10 */
color: #0092FF; /* primary-blue */
```

### Tag Styling (All Types)
```css
display: inline-block;
padding: 4px 8px;
font-size: 0.75rem; /* text-subtitle-1 */
line-height: 1.25rem;
font-weight: 500; /* medium */
border-radius: 9999px; /* rounded-full */
white-space: nowrap;
```

## Hover CTA Overlay

### Container Specifications
```css
position: absolute;
bottom: 16px;
left: 24px;
right: 24px;
opacity: 0;
transform: translateY(8px);
transition: opacity 200ms ease-out, transform 200ms ease-out;
pointer-events: none;
```

### Hover State (Parent card hovered)
```css
opacity: 1;
transform: translateY(0);
pointer-events: auto;
```

### CTA Button Styling
```css
background-color: #0092FF; /* primary-blue */
color: #FFFFFF;
text-align: center;
padding: 12px 16px;
border-radius: 8px; /* rounded-lg */
font-weight: 500; /* medium */
font-size: 0.875rem; /* text-compact */
box-shadow: 0 4px 6px rgba(0, 146, 255, 0.2);
transition: background-color 200ms ease;
```

### CTA Button Hover State
```css
background-color: #22224C; /* brand-navy */
```

## Accessibility Specifications

### Focus State
```css
outline: 2px solid #0092FF; /* primary-blue */
outline-offset: 4px;
border-radius: 12px;
```

### Minimum Touch Target
- Entire card is clickable: Minimum 280x360px exceeds 44x44px requirement
- CTA button on hover: 40px height meets requirement

### Keyboard Navigation
- Card receives focus as a single interactive element (link wrapper)
- Enter/Space triggers navigation to booth detail page
- Focus indicator must be clearly visible on all background types

## Loading State (Skeleton)

### Skeleton Card Specifications
```css
width: 100%;
min-height: 360px;
background-color: #F6F6FF; /* off-white */
border: 2px solid #E5E9F1; /* neutral-1 */
border-radius: 12px;
padding: 24px;
```

### Skeleton Elements
```css
/* Skeleton gradient animation */
background: linear-gradient(
  90deg,
  #E5E9F1 0%,
  #D9DFEA 50%,
  #E5E9F1 100%
);
background-size: 200% 100%;
animation: shimmer 2s infinite linear;
border-radius: 8px;
```

**Logo skeleton:**
```css
width: 96px; /* or 80px for standard */
height: 96px; /* or 80px for standard */
margin-bottom: 24px;
```

**Name skeleton:**
```css
height: 20px;
width: 80%;
margin-bottom: 8px;
```

**Tagline skeleton:**
```css
height: 16px;
width: 100%;
margin-bottom: 4px;
```

**Tag skeletons:**
```css
height: 24px;
width: 80px;
display: inline-block;
margin-right: 8px;
```

## Responsive Adjustments

### Mobile (320-767px)
- Increase internal padding to 24px for better touch targets
- Ensure minimum card height of 360px
- Single column layout ensures adequate width
- Tags may wrap to 2 rows if needed

### Tablet (768-1023px)
- 2-column grid provides ~340-360px card width
- Maintains 24px padding
- All text should display without truncation

### Desktop (1024-1439px)
- 3-column grid provides ~320-360px card width
- Increase gap to 32px for better breathing room
- Optimal text display

### Wide (1440px+)
- 4-column grid provides ~340-360px card width
- Maximum container width of 1440px prevents excessive stretching
- Centering container horizontally

## Implementation Example (Tailwind Classes)

### Platinum Card
```jsx
className="
  min-h-[360px]
  rounded-xl
  border-[3px]
  border-primary-blue/30
  bg-gradient-to-br
  from-light-blue/40
  via-off-white
  to-light-blue/40
  p-6
  shadow-lg
  shadow-primary-blue/10
  hover:shadow-xl
  hover:shadow-primary-blue/25
  transition-all
  duration-300
  cursor-pointer
  group
  relative
  overflow-hidden
"
```

### Standard Card
```jsx
className="
  min-h-[360px]
  rounded-xl
  border-2
  border-neutral-2
  bg-white
  p-6
  shadow-md
  hover:shadow-lg
  transition-shadow
  duration-300
  cursor-pointer
  group
  relative
  overflow-hidden
"
```

## Card Layout Flexbox Structure

```jsx
<div className="flex flex-col min-h-[360px]">
  {/* Optional top section */}
  <div className="mb-4">{/* Badge or icon */}</div>

  {/* Logo */}
  <div className="flex-shrink-0 mb-6">{/* Logo container */}</div>

  {/* Content section - grows to fill space */}
  <div className="flex-grow flex flex-col space-y-2">
    <h3>{/* Company name */}</h3>
    <p className="flex-grow">{/* Tagline */}</p>

    {/* Tags - pushed to bottom of content */}
    <div className="flex flex-wrap gap-2 mt-auto pt-4">
      {/* Tags */}
    </div>
  </div>

  {/* Hover CTA - absolute positioned */}
  <div className="absolute bottom-4 left-6 right-6 opacity-0 group-hover:opacity-100">
    {/* CTA button */}
  </div>
</div>
```

---

## Notes for Developers

1. **Height Management**: Use `min-h-[360px]` instead of fixed `h-[320px]` to allow content flexibility
2. **Width is Grid-Determined**: Cards naturally fill their grid column
3. **Flexbox Layout**: Use flexbox with `flex-grow` on tagline to ensure tags stay at bottom
4. **Tier Differentiation**: Subtle background and border changes replace prominent badges
5. **Hover States**: All interactive states use CSS only, no JavaScript state management
6. **Accessibility**: Entire card is wrapped in Link component for single tab stop

## Related Files
- [Responsive Layout](./responsive-layout.md)
- [Visual Hierarchy](./visual-hierarchy.md)
- [Typography & Spacing](./typography-spacing.md)
