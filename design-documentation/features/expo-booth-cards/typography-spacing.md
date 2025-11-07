---
title: Typography & Spacing - Expo Booth Cards
description: Detailed specifications for typography, spacing, and content layout within booth cards
feature: Expo Booth Cards Redesign
last-updated: 2025-11-07
related-files:
  - ./README.md
  - ./card-specifications.md
status: approved
---

# Typography & Spacing Specifications

## Typography System

All typography follows the Career Launch Platform's established system based on myBlueprint brand guidelines with Open Sans font family.

### Font Family
```css
font-family: 'Open Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

## Typography Hierarchy Within Cards

### Company Name

**Specifications:**
```css
font-size: 1.25rem;          /* 20px */
line-height: 2rem;           /* 32px */
font-weight: 900;            /* font-black */
color: #22224C;              /* brand-navy */
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
```

**Tailwind Implementation:**
```jsx
className="text-body-1 font-black text-brand-navy line-clamp-2"
```

**Usage Guidelines:**
- Primary visual anchor of the card
- Maximum 2 lines to prevent excessive height
- Font weight (900) creates strong hierarchy
- Navy color provides excellent contrast (11.7:1 on white)

**Character Limits:**
- Optimal: 20-35 characters
- Maximum (2 lines): ~50-60 characters
- Examples that fit well:
  - "Tech Innovators Inc." (23 chars)
  - "HealthCare Plus" (15 chars)
  - "University of Ontario" (22 chars)
  - "Ontario Skilled Trades College" (32 chars)

**Handling Overflow:**
- Line clamp prevents overflow beyond 2 lines
- Text that exceeds 2 lines truncates with ellipsis
- Card width changes accommodate most names fully
- Very long names (60+ chars) may truncate slightly

### Tagline

**Specifications:**
```css
font-size: 1rem;             /* 16px */
line-height: 1.75rem;        /* 28px */
font-weight: 300;            /* font-light */
color: #485163;              /* neutral-5 */
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
flex-grow: 1;
```

**Tailwind Implementation:**
```jsx
className="text-body-2 font-light text-neutral-5 line-clamp-3 flex-grow"
```

**Usage Guidelines:**
- Descriptive text providing context about the organization
- Maximum 3 lines to maintain card height consistency
- Light weight (300) creates clear hierarchy below name
- Flex-grow pushes tags to bottom of card

**Character Limits:**
- Optimal: 60-100 characters
- Maximum (3 lines): ~120-150 characters
- Examples that fit well:
  - "Building the Future of AI & Cloud Computing" (47 chars)
  - "Where Compassion Meets Innovation" (35 chars)
  - "Master Your Craft, Build Your Future" (38 chars)

**Handling Overflow:**
- 3 line clamp provides generous space
- Most taglines fit within 2 lines at typical card widths
- Very descriptive taglines may use all 3 lines
- Truncation rare with new card widths

### Tags (Organization Type & Industry)

**Specifications:**
```css
font-size: 0.75rem;          /* 12px */
line-height: 1.25rem;        /* 20px */
font-weight: 500;            /* font-medium */
padding: 4px 8px;            /* vertical horizontal */
border-radius: 9999px;       /* rounded-full */
display: inline-block;
white-space: nowrap;
```

**Tailwind Implementation:**
```jsx
className="text-subtitle-1 font-medium px-2 py-1 rounded-full"
```

**Tag Colors:**

**Organization Type - Employer:**
```jsx
className="bg-blue-500/10 text-blue-700"
```

**Organization Type - Post-Secondary:**
```jsx
className="bg-purple-500/10 text-purple-700"
```

**Organization Type - Gap Year:**
```jsx
className="bg-green-500/10 text-green-700"
```

**Industry Tag:**
```jsx
className="bg-primary-blue/10 text-primary-blue"
```

**Usage Guidelines:**
- Small, pill-shaped badges for categorization
- Two tags per card: organization type + industry
- Wrapped layout allows tags to stack if needed
- Medium weight provides readability at small size

**Tag Text:**
- Organization types: "Employer", "Post-Secondary", "Gap Year"
- Industries: Single word or short phrase
  - "Technology", "Healthcare", "Finance", "Engineering"
  - "Skilled Trades", "Arts & Media", "Government"

## Spacing Within Cards

Following the 8px spacing grid system mandated by myBlueprint brand guidelines.

### Card Internal Padding
```css
padding: 24px;  /* 3 units */
```

**Tailwind:**
```jsx
className="p-6"
```

**Rationale:**
- 24px provides comfortable breathing room
- Consistent on all sides
- Maintains touch target sizes
- Scales well across breakpoints

### Vertical Spacing Between Elements

**After Optional Top Badge (Industry Immersion Series):**
```css
margin-bottom: 16px;  /* 2 units */
```

**After Logo:**
```css
margin-bottom: 24px;  /* 3 units */
```

**Between Company Name and Tagline:**
```css
margin-top: 8px;  /* 1 unit */
```

**Between Tagline and Tags:**
```css
margin-top: 16px;  /* 2 units */
padding-top: 16px;  /* 2 units - with flex auto margin */
```

**Above Hover CTA:**
```css
bottom: 16px;  /* 2 units from card bottom */
```

### Horizontal Spacing Between Tags
```css
gap: 8px;  /* 1 unit */
```

**Tailwind:**
```jsx
className="flex flex-wrap gap-2"
```

**Rationale:**
- Small gap prevents tags from feeling cramped
- Allows natural wrapping if needed
- Maintains visual grouping

## Section Layout Specifications

### Flexbox Container Structure

```jsx
<div className="flex flex-col min-h-[360px]">
  {/* Optional: Industry Immersion badge */}
  {hasImmersionBadge && (
    <div className="mb-4">
      {/* Badge content */}
    </div>
  )}

  {/* Logo section - fixed size */}
  <div className="flex-shrink-0 mb-6">
    {/* Logo */}
  </div>

  {/* Content section - grows to fill space */}
  <div className="flex-grow flex flex-col space-y-2">
    {/* Company name - fixed max 2 lines */}
    <h3 className="text-body-1 font-black text-brand-navy line-clamp-2">
      {booth.name}
    </h3>

    {/* Tagline - grows to fill available space, max 3 lines */}
    <p className="text-body-2 font-light text-neutral-5 line-clamp-3 flex-grow">
      {booth.tagline}
    </p>

    {/* Tags - pushed to bottom with margin-top auto */}
    <div className="flex flex-wrap gap-2 mt-auto pt-4">
      {/* Tags */}
    </div>
  </div>

  {/* Hover CTA - absolutely positioned */}
  <div className="absolute bottom-4 left-6 right-6 ...">
    {/* CTA button */}
  </div>
</div>
```

### Space Distribution Strategy

**Fixed Sections:**
1. Optional badge: 40px (if present)
2. Logo section: 120px (96px logo + 24px margin)
3. Company name: ~40-60px (2 lines)
4. Tags section: ~32px

**Flexible Sections:**
1. Tagline: Uses remaining space with flex-grow
2. Expands to fill gap between name and tags
3. Max 3 lines prevents excessive growth

**Result:**
- Minimum height: 360px
- Logo and name positions consistent
- Tagline absorbs height variations
- Tags always at bottom of content area

## Typography Accessibility

### Color Contrast Ratios

**Company Name (brand-navy #22224C):**
- On white background: 11.7:1 (AAA)
- On platinum gradient: 10.2:1+ (AAA)
- Result: Excellent readability on both tiers

**Tagline (neutral-5 #485163):**
- On white background: 7.8:1 (AAA)
- On platinum gradient: 7.0:1+ (AAA)
- Result: Excellent readability on both tiers

**Tags:**
- Employer (blue-700): 8.2:1 on white (AAA)
- Post-Secondary (purple-700): 7.5:1 on white (AAA)
- Gap Year (green-700): 6.8:1 on white (AAA)
- Industry (primary-blue): 5.1:1 on white (AA+)
- All exceed WCAG AA requirements (4.5:1)

### Font Size Accessibility

**Minimum Sizes:**
- Company name: 20px (large text, requires 3:1 contrast)
- Tagline: 16px (normal text, requires 4.5:1 contrast)
- Tags: 12px (small but acceptable for labels)

**Best Practices:**
- Never use font sizes below 12px
- Primary content (name, tagline) uses comfortable sizes
- Tags use minimum acceptable size with high contrast
- Line heights provide adequate spacing for readability

### Line Length

**Optimal Reading Width:**
- Cards: 280px-360px wide
- Company name: ~10-15 characters per line
- Tagline: ~25-35 characters per line
- Well within optimal reading range (45-75 characters)

## Responsive Typography Adjustments

### No Size Changes Across Breakpoints

**Rationale:**
- Card width changes are moderate (280px-360px)
- Typography remains readable at all widths
- Consistency across devices
- Simpler implementation and maintenance

**Size Consistency:**
- Mobile: Same sizes as desktop
- Tablet: Same sizes as desktop
- Desktop: Base sizes
- Wide: Same sizes as desktop

**What Changes:**
- Number of cards per row (layout)
- Card width (grid-determined)
- Line breaks in text (natural reflow)

**What Doesn't Change:**
- Font sizes
- Font weights
- Line heights
- Color values

### Line Clamping Across Breakpoints

**Company Name:**
- All breakpoints: 2 lines max
- Prevents excessive height variation
- Maintains visual consistency

**Tagline:**
- All breakpoints: 3 lines max
- Provides adequate description space
- Prevents cards from becoming too tall

**Tags:**
- All breakpoints: Single line (nowrap)
- May wrap to second row if both tags wide
- Maintains readability at small size

## Special Typography Treatments

### Animated Gradient Text (Section Headers)

**Platinum Section Header:**
```jsx
className="text-3xl font-bold animated-gradient-text mb-2"
```

**CSS:**
```css
.animated-gradient-text {
  background: linear-gradient(
    90deg,
    var(--primary-blue),
    var(--light-blue),
    var(--primary-blue),
    var(--light-blue)
  );
  background-size: 400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease infinite;
}
```

**Usage:**
- Only for "Platinum Booths" section header
- Not used within cards themselves
- Creates premium feel for premium section

### Standard Section Header

**Typography:**
```jsx
className="text-xl font-semibold text-neutral-5 mb-2"
```

**No Special Effects:**
- Solid color (neutral-5)
- No animation
- Clean and professional
- Appropriate visual weight for standard tier

## Truncation Handling

### When Text Truncates

**Company Name (2 lines):**
- Example: "Ontario Skilled Trades College Foundation and Training Center"
- Displays as: "Ontario Skilled Trades College Foundation and Training..." (if exceeds 2 lines)
- Solution: Consider shortening long names in data or allowing 3 lines for exceptions

**Tagline (3 lines):**
- Example: "We provide comprehensive career training and development programs across Ontario with a focus on sustainable practices and community engagement"
- Displays first ~120-150 characters, then "..."
- Solution: Keep taglines concise and impactful

**Tags (no truncation):**
- Use nowrap to prevent text wrapping within tags
- Tags stack to second row if needed
- Single words rarely require truncation

### Testing for Truncation

**Test Cases:**
1. Short name (10-15 chars) + short tagline (30-40 chars)
2. Medium name (20-30 chars) + medium tagline (60-80 chars)
3. Long name (35-50 chars) + long tagline (100-120 chars)
4. Very long name (50+ chars) + very long tagline (150+ chars)

**Expected Results:**
- Cases 1-3: No truncation
- Case 4: Graceful truncation with ellipsis
- All cases: Readable and professional appearance

## Loading State Typography

### Skeleton Text Placeholders

**Company Name Skeleton:**
```jsx
<div className="h-5 w-4/5 bg-neutral-2 rounded animate-pulse mb-2"></div>
```

**Tagline Skeleton (multiple lines):**
```jsx
<div className="space-y-2">
  <div className="h-4 w-full bg-neutral-2 rounded animate-pulse"></div>
  <div className="h-4 w-full bg-neutral-2 rounded animate-pulse"></div>
  <div className="h-4 w-3/4 bg-neutral-2 rounded animate-pulse"></div>
</div>
```

**Tag Skeletons:**
```jsx
<div className="flex gap-2">
  <div className="h-6 w-20 bg-neutral-2 rounded-full animate-pulse"></div>
  <div className="h-6 w-20 bg-neutral-2 rounded-full animate-pulse"></div>
</div>
```

**Visual Effect:**
- Maintains layout structure
- Indicates content loading
- Smooth transition to real content
- Prevents layout shift

## Implementation Examples

### Complete Card Typography Implementation

```jsx
<div className="flex flex-col min-h-[360px] p-6">
  {/* Logo */}
  <div className="flex-shrink-0 mb-6">
    <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center">
      <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain p-3" />
    </div>
  </div>

  {/* Content */}
  <div className="flex-grow flex flex-col space-y-2">
    {/* Company Name */}
    <h3 className="text-body-1 font-black text-brand-navy line-clamp-2">
      {booth.name}
    </h3>

    {/* Tagline */}
    <p className="text-body-2 font-light text-neutral-5 line-clamp-3 flex-grow">
      {booth.tagline}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mt-auto pt-4">
      <span className="inline-block px-2 py-1 bg-blue-500/10 text-blue-700 text-subtitle-1 font-medium rounded-full">
        {organizationType}
      </span>
      <span className="inline-block px-2 py-1 bg-primary-blue/10 text-primary-blue text-subtitle-1 font-medium rounded-full">
        {industry}
      </span>
    </div>
  </div>
</div>
```

## Typography Testing Checklist

### Readability Testing
- [ ] Company names readable at all card widths
- [ ] Taglines readable and not cramped
- [ ] Tags legible at 12px size
- [ ] Line heights provide adequate breathing room
- [ ] Text doesn't feel cramped or overly spacious

### Contrast Testing
- [ ] Navy text on white meets AAA (11.7:1)
- [ ] Navy text on platinum gradient meets AAA (10.2:1+)
- [ ] Tagline text on white meets AAA (7.8:1)
- [ ] Tag colors meet AA minimum (4.5:1)
- [ ] Test with contrast checking tools

### Truncation Testing
- [ ] Short names display fully (no ellipsis)
- [ ] Medium names display fully or gracefully truncate
- [ ] Long names truncate at 2 lines with ellipsis
- [ ] Taglines use up to 3 lines appropriately
- [ ] Tags wrap to second row if needed

### Accessibility Testing
- [ ] Screen reader announces card content correctly
- [ ] Text remains readable when zoomed to 200%
- [ ] High contrast mode works appropriately
- [ ] Font sizes meet minimum requirements
- [ ] Line heights allow for proper text spacing

## Related Files
- [Card Specifications](./card-specifications.md)
- [Visual Hierarchy](./visual-hierarchy.md)
- [Responsive Layout](./responsive-layout.md)
- [Design System Typography](../../design-system/tokens/typography.md)
