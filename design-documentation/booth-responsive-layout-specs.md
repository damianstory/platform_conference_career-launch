# Booth Detail Page - Responsive Layout Specifications

**Document Version**: 1.0
**Last Updated**: 2025-01-09
**Purpose**: Visual layout specifications across all breakpoints
**For**: Designers, Frontend Engineers, QA Testers

---

## Breakpoint System

### Tailwind Breakpoints

```
Breakpoint  Min Width   Device Type              Layout Pattern
──────────────────────────────────────────────────────────────────
(default)   0px        Mobile phones             Stack (1 column)
sm:         640px      Large phones, phablets    Stack + row CTAs
md:         768px      Tablets, small laptops    Strategic 2-col
lg:         1024px     Laptops, desktops         Full 2-col grid
xl:         1280px     Large desktops            Full 2-col grid
2xl:        1536px     Extra large displays      Full 2-col grid
```

### Test Viewports

**Critical Test Sizes**:
- 320px - iPhone SE (portrait) - Smallest mobile
- 375px - iPhone 12/13 mini (portrait) - Common mobile
- 430px - iPhone 14 Pro Max (portrait) - Large mobile
- 640px - Transition point (sm:)
- 768px - iPad (portrait) - Transition point (md:)
- 1024px - iPad (landscape) - Transition point (lg:)
- 1280px - Desktop standard
- 1400px - Container max-width

---

## Layout Specifications by Breakpoint

### Mobile (320px-639px)

#### Layout Pattern: Stack Everything

```
Container: w-full, px-4 (16px padding), py-8 (32px padding)
Grid: grid-cols-12, gap-6 (24px gaps)
Max Width: No constraint (full width minus padding)

┌─────────────────────────────────────────────┐
│  Container (px-4)                           │
│  ┌───────────────────────────────────────┐  │
│  │ BoothHeader (col-span-12)            │  │
│  │                                       │  │
│  │ ┌─────┐ Company Name (text-2xl)      │  │
│  │ │Logo │ Tagline                       │  │
│  │ │16px │                               │  │
│  │ └─────┘                               │  │
│  │                                       │  │
│  │ [    Button 1 - Full Width (h-48)   ]│  │
│  │ [    Button 2 - Full Width (h-48)   ]│  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ↓ gap-6 (24px)                             │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │ Video (col-span-12)                  │  │
│  │ h-[450px]                            │  │
│  │                                       │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ↓ gap-6 (24px)                             │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │ Engagement Activity (col-span-12)    │  │
│  │ h-[450px]                            │  │
│  │ (Platinum only)                      │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ↓ gap-6 (24px)                             │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │ Resources (col-span-12)              │  │
│  │ AUTO-HEIGHT (py-4)                   │  │
│  │                                       │  │
│  │ [Card 1]  (1 column)                 │  │
│  │ [Card 2]                             │  │
│  │ [Card 3]                             │  │
│  │ [Card 4]                             │  │
│  │ [Card 5]                             │  │
│  │                                       │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ↓ gap-6 (24px)                             │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │ Session Slides (col-span-12)         │  │
│  │ aspect-[16/10]                       │  │
│  │ (Platinum only)                      │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ↓ gap-6 (24px)                             │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │ Company Story (col-span-12)          │  │
│  │ h-64 (256px)                         │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ↓ gap-6 (24px)                             │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │ Contact Info (col-span-12)           │  │
│  │ h-64 (256px)                         │  │
│  └───────────────────────────────────────┘  │
│                                             │
└─────────────────────────────────────────────┘

Total Width: 320px (iPhone SE) to 639px (max)
Content Width: 288px to 607px (minus 32px padding)
```

#### Mobile Component Specifications

**BoothHeader**:
- Logo: 16×16px (w-16 h-16)
- H1: 24px (text-2xl)
- Tagline: 20px (text-[20px])
- Layout: flex-col (stacked)
- CTA Container: flex-col gap-3 (stacked buttons)
- Button 1: w-full h-[48px] px-4 text-sm
- Button 2: w-full h-[48px] px-4 text-sm
- Padding: p-6 (24px all sides)

**Video**:
- col-span-12 (full width)
- h-[450px] (fixed height)
- Border: border-2 border-primary-blue

**Resources**:
- col-span-12 (full width)
- Container: px-4 py-4 (auto-height)
- Grid: grid-cols-1 gap-3 (1 column)
- Card: min-h-[80px]
- Icon: w-4 h-4 (in p-2 container = 24px total)
- Title: text-sm line-clamp-2
- Description: text-xs line-clamp-2

**Company Story + Contact Info**:
- Both: col-span-12 (full width stacked)
- Both: h-64 (256px fixed height)

---

### Small (640px-767px)

#### Layout Pattern: Stack with Horizontal CTAs

```
Container: w-full max-w-[1400px], px-6 (24px), py-8
Grid: grid-cols-12, gap-6

Changes from Mobile:
- BoothHeader CTAs switch to horizontal (flex-row)
- Logo increases to 20×20px (sm:w-20 sm:h-20)
- H1 increases to 30px (sm:text-3xl)
- Resources grid switches to 2 columns (sm:grid-cols-2)
- All other components remain stacked

┌─────────────────────────────────────────────┐
│  Container (px-6)                           │
│  ┌───────────────────────────────────────┐  │
│  │ BoothHeader (col-span-12)            │  │
│  │                                       │  │
│  │ ┌─────┐ Company Name (text-3xl)      │  │
│  │ │Logo │ Tagline                       │  │
│  │ │20px │                               │  │
│  │ └─────┘ [Button 1] [Button 2]        │  │
│  │         (h-56, side-by-side)         │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ... Video (stacked) ...                    │
│  ... Engagement (stacked) ...               │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │ Resources (col-span-12)              │  │
│  │ AUTO-HEIGHT                          │  │
│  │                                       │  │
│  │ [Card 1]  [Card 2]  (2 columns)      │  │
│  │ [Card 3]  [Card 4]                   │  │
│  │ [Card 5]                             │  │
│  │                                       │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ... SessionSlides (stacked) ...            │
│  ... CompanyStory (stacked) ...             │
│  ... ContactInfo (stacked) ...              │
└─────────────────────────────────────────────┘

Total Width: 640px to 767px
Content Width: 592px to 719px (minus 48px padding)
```

#### Small Component Specifications

**BoothHeader**:
- Logo: 20×20px (sm:w-20 sm:h-20)
- H1: 30px (sm:text-3xl)
- Layout: sm:flex-row (horizontal)
- CTA Container: sm:flex-row gap-3 w-auto
- Button 1: sm:w-auto sm:h-[56px] sm:px-6 sm:text-body-2 sm:min-w-[180px] sm:max-w-[220px]
- Button 2: (same as Button 1)

**Resources**:
- Grid: sm:grid-cols-2 gap-3 (2 columns)
- Cards: Same sizing as mobile
- Height: Auto-adjusts (3 rows needed for 5 cards)

---

### Medium (768px-1023px)

#### Layout Pattern: Strategic 2-Column

```
Container: w-full max-w-[1400px], px-6, py-8
Grid: grid-cols-12, gap-6

NEW at md::
- Video + Engagement go side-by-side (5:7 ratio)
- CompanyStory + ContactInfo go side-by-side (8:4 ratio)
- Resources + SessionSlides REMAIN STACKED

┌─────────────────────────────────────────────────────┐
│  Container (px-6)                                   │
│  ┌───────────────────────────────────────────────┐  │
│  │ BoothHeader (col-span-12)                    │  │
│  │ (same as small: horizontal CTAs)             │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ↓ gap-6                                            │
│                                                     │
│  ┌────────────────────────┬────────────────────────┤
│  │ Video                  │ Engagement Activity    │
│  │ (md:col-span-5)        │ (md:col-span-7)        │
│  │ h-[450px]              │ h-[450px]              │
│  │                        │ (Platinum only)        │
│  └────────────────────────┴────────────────────────┘
│       5 cols (41.67%)          7 cols (58.33%)      │
│                                                     │
│  ↓ gap-6                                            │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │ Resources (col-span-12) - STILL STACKED      │  │
│  │ AUTO-HEIGHT                                  │  │
│  │ [Card 1]  [Card 2]  (2 columns internal)    │  │
│  │ [Card 3]  [Card 4]                           │  │
│  │ [Card 5]                                     │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ↓ gap-6                                            │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │ Session Slides (col-span-12) - STILL STACKED │  │
│  │ aspect-[16/10]                               │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ↓ gap-6                                            │
│                                                     │
│  ┌─────────────────────────────┬─────────────────┐  │
│  │ Company Story               │ Contact Info    │  │
│  │ (md:col-span-8)             │ (md:col-span-4) │  │
│  │ h-64                        │ h-64            │  │
│  └─────────────────────────────┴─────────────────┘  │
│       8 cols (66.67%)               4 cols (33.33%) │
└─────────────────────────────────────────────────────┘

Total Width: 768px to 1023px
Content Width: 720px to 975px (minus 48px padding)
```

#### Medium Component Specifications

**Video + Engagement** (NEW):
- Video: md:col-span-5 (5/12 = 41.67% width)
- Engagement: md:col-span-7 (7/12 = 58.33% width)
- Both: h-[450px] (same height, align tops)
- Gap between: 24px (gap-6)

**Effective Widths** (at 768px container):
- Available width: 720px (768px - 48px padding)
- Video: ~276px (41.67% of 720px - 10px gap)
- Engagement: ~420px (58.33% of 720px - 10px gap)

**Resources + SessionSlides**:
- STILL STACKED (col-span-12 each)
- Reason: Height mismatch (Resources auto-height, SessionSlides aspect-[16/10])
- Better UX to keep stacked until desktop

**CompanyStory + ContactInfo** (NEW):
- CompanyStory: md:col-span-8 (66.67% width)
- ContactInfo: md:col-span-4 (33.33% width)
- Both: h-64 (256px, same height)
- Gap between: 24px

**Effective Widths** (at 768px container):
- CompanyStory: ~464px
- ContactInfo: ~232px

---

### Large (1024px-1439px)

#### Layout Pattern: Full 2-Column Grid

```
Container: w-full max-w-[1400px], px-8 (32px), py-8
Grid: grid-cols-12, gap-6

NEW at lg::
- Logo increases to 24×24px (lg:w-24 lg:h-24)
- H1 increases to 40px (lg:text-[40px])
- Video + Engagement switch to 4:8 ratio (from 5:7)
- Resources + SessionSlides NOW SIDE-BY-SIDE (6:6 ratio)
- Video height increases to 500px (lg:h-[500px])

┌───────────────────────────────────────────────────────┐
│  Container (px-8, max-w-[1400px])                     │
│  ┌─────────────────────────────────────────────────┐  │
│  │ BoothHeader (col-span-12)                      │  │
│  │ Logo 24px, H1 40px                             │  │
│  └─────────────────────────────────────────────────┘  │
│                                                       │
│  ┌───────────────┬───────────────────────────────────┤
│  │ Video         │ Engagement Activity               │
│  │ (lg:col-4)    │ (lg:col-8)                        │
│  │ h-[500px]     │ h-[500px]                         │
│  └───────────────┴───────────────────────────────────┘
│    4 cols (33%)        8 cols (67%)                   │
│                                                       │
│  ┌─────────────────────────────┬─────────────────────┤
│  │ Resources                   │ Session Slides      │
│  │ (lg:col-6)                  │ (lg:col-6)          │
│  │ AUTO-HEIGHT                 │ aspect-[16/10]      │
│  │ [C1] [C2]                   │                     │
│  │ [C3] [C4]                   │                     │
│  │ [C5]                        │                     │
│  └─────────────────────────────┴─────────────────────┘
│    6 cols (50%)                    6 cols (50%)       │
│                                                       │
│  ┌─────────────────────────────┬─────────────────────┤
│  │ Company Story               │ Contact Info        │
│  │ (lg:col-8)                  │ (lg:col-4)          │
│  │ h-64                        │ h-64                │
│  └─────────────────────────────┴─────────────────────┘
│    8 cols (66.67%)                 4 cols (33.33%)    │
└───────────────────────────────────────────────────────┘

Total Width: 1024px to 1439px
Content Width: 960px to 1375px (minus 64px padding)
```

#### Large Component Specifications

**BoothHeader**:
- Logo: 24×24px (lg:w-24 lg:h-24)
- H1: 40px (lg:text-[40px])
- All other specs same as medium

**Video + Engagement**:
- Video: lg:col-span-4 (33.33% width) - CHANGE from md:col-span-5
- Engagement: lg:col-span-8 (66.67% width) - CHANGE from md:col-span-7
- Both: lg:h-[500px] (increased from 450px)

**Effective Widths** (at 1024px container):
- Available width: 960px (1024px - 64px padding)
- Video: ~304px (33.33% of 960px - 10px gap)
- Engagement: ~632px (66.67% of 960px - 10px gap)

**Resources + SessionSlides** (NEW - SIDE-BY-SIDE):
- Resources: lg:col-span-6 (50% width)
- SessionSlides: lg:col-span-6 (50% width)
- Resources: AUTO-HEIGHT (varies, typically ~220px for 5 cards)
- SessionSlides: aspect-[16/10] (varies by width, ~288px at 1024px)

**Effective Widths** (at 1024px container):
- Resources: ~468px (50% of 960px - 12px gap)
- SessionSlides: ~468px (50% of 960px - 12px gap)

**Height Consideration**:
- Heights may differ (Resources auto, SessionSlides aspect ratio)
- This is acceptable - visual balance over forced matching

---

### Desktop (1400px max-width)

#### Layout Pattern: Optimized Full Grid

```
Container: w-full max-w-[1400px], px-8, py-8
Grid: grid-cols-12, gap-6

At max-width (1400px), container stops growing.
All lg: specifications apply.

┌─────────────────────────────────────────────────────────┐
│  Container (1400px max, centered with mx-auto)          │
│                                                         │
│  [Same layout as Large breakpoint]                     │
│                                                         │
│  Horizontal padding creates equal margins on sides:    │
│  ←─── 32px ───→ [Content 1336px] ←─── 32px ───→       │
│                                                         │
└─────────────────────────────────────────────────────────┘

Total Width: 1400px+ (container maxes out at 1400px)
Content Width: 1336px (1400px - 64px padding)
```

#### Desktop Component Widths (at 1400px)

**Effective Widths**:
- Available: 1336px (1400px - 64px padding)
- gap-6 = 24px between columns

**Video + Engagement**:
- Video (4/12): ~424px (33.33% of 1336px - 10px)
- Engagement (8/12): ~888px (66.67% of 1336px - 10px)

**Resources + SessionSlides**:
- Resources (6/12): ~656px (50% of 1336px - 12px)
- SessionSlides (6/12): ~656px (50% of 1336px - 12px)
  - At 656px width, aspect-[16/10] = 410px height
  - Resources with 5 cards in 2 columns ≈ 220px height
  - **Height mismatch: ~190px difference (acceptable)**

**CompanyStory + ContactInfo**:
- CompanyStory (8/12): ~878px
- ContactInfo (4/12): ~434px

---

## Component Height Specifications

### Fixed Heights (All Breakpoints)

**BoothHeader**: Auto-height
- Mobile: ~180px (logo + title + stacked buttons + padding)
- Tablet+: ~120px (logo + title + horizontal buttons + padding)

**Video**:
- Mobile to Large: h-[450px] (450px)
- Large+: lg:h-[500px] (500px)

**Engagement Activity**:
- Mobile to Large: h-[450px] (450px)
- Large+: lg:h-[500px] (500px)

**SessionSlides**:
- aspect-[16/10] (height = width × 0.625)
- Mobile (320px width): ~200px
- Tablet (720px width): ~450px
- Desktop (656px width at 6/12): ~410px

**Company Story**: h-64 (256px) at all breakpoints

**Contact Info**: h-64 (256px) at all breakpoints

### Variable Heights

**Resources**: AUTO-HEIGHT
- Mobile (1 column, 5 cards): ~460px
  - Header: 44px
  - Padding: 32px (16px × 2)
  - 5 cards × 80px: 400px
  - 4 gaps × 12px: 48px
  - **Total: ~524px**

- Tablet+ (2 columns, 5 cards): ~268px
  - Header: 44px
  - Padding: 32px
  - 3 rows (5 cards, 2 cols): 3 × 80px = 240px
  - 2 gaps × 12px: 24px
  - **Total: ~340px** (but varies with content)

---

## Spacing System

### Container Padding

```
Breakpoint    Horizontal Padding    Vertical Padding
──────────────────────────────────────────────────────
Mobile        px-4 (16px)           py-8 (32px)
sm:           px-6 (24px)           py-8 (32px)
lg:           px-8 (32px)           py-8 (32px)
```

### Grid Gaps

```
All Breakpoints: gap-6 (24px)
- Between all grid items
- Horizontal and vertical
```

### Card Internal Padding

**BoothHeader**:
- p-6 (24px all sides)

**Resources**:
- Header: px-6 py-2 (24px horiz, 8px vert)
- Body: px-4 py-4 (16px all sides)

**SessionSlides**:
- Header: px-6 py-2

**CompanyStory**:
- p-4 (16px all sides)

**ContactInfo**:
- p-4 (16px all sides)

### Resource Card Gaps

```
Mobile:   gap-3 (12px) - 1 column
Tablet+:  gap-3 (12px) - 2 columns
```

---

## Typography Scale Across Breakpoints

### BoothHeader H1

```
Mobile (320-639px):     text-2xl           24px    line-height: 32px
Tablet (640-1023px):    sm:text-3xl        30px    line-height: 36px
Desktop (1024px+):      lg:text-[40px]     40px    line-height: 48px (leading-tight)
```

### BoothHeader Tagline

```
All Breakpoints:        text-[20px]        20px    font-normal
```

### Section Headers (Resources, SessionSlides, etc.)

```
All Breakpoints:        text-lg            18px    font-bold
```

### Resource Card Title

```
All Breakpoints:        text-sm            14px    font-semibold, line-clamp-2
```

### Resource Card Description

```
All Breakpoints:        text-xs            12px    font-normal, line-clamp-2
```

### Button Text

```
Mobile:                 text-sm            14px    font-semibold
Tablet+:                sm:text-body-2     16px    font-semibold
```

---

## Color & Visual Specifications

### BoothHeader

**Container**:
- Background: `bg-white`
- Border: `border-2 border-primary-blue` (#0092FF)
- Shadow: `shadow-sm` (elevated)
- Hover: `hover:shadow-md`

**Logo Container**:
- Background: `bg-white`
- Border: None
- Shadow: `shadow-md`
- Border radius: `rounded-lg` (12px)

**Primary CTA**:
- Background: `bg-primary-blue` (#0092FF)
- Text: `text-white` (#FFFFFF)
- Hover: `hover:bg-brand-navy` (#22224C)
- Shadow: `shadow-md`
- Border radius: `rounded-lg`

**Secondary CTA**:
- Background: `bg-white` (#FFFFFF)
- Text: `text-primary-blue` (#0092FF)
- Border: `border-2 border-primary-blue`
- Hover: `hover:bg-primary-blue hover:text-white`
- Border radius: `rounded-lg`

### Resources

**Container**:
- Background: `bg-white`
- Border: `border border-gray-200` (#E5E7EB)
- Shadow: `shadow-sm`
- Hover: `hover:shadow-md`

**Resource Cards**:
- Background: Gradient (varies by type):
  - PDF: `bg-resource-pdf` (light blue gradient)
  - Link: `bg-resource-link` (very light blue)
  - Video: `bg-resource-video` (off-white to light blue)
  - Document: `bg-resource-document` (pale gradient)
- Border: `border border-blue/20` (semi-transparent blue)
- Hover Border: `group-hover:border-blue/40`
- Shadow: `shadow-[0_2px_4px_rgba(34,34,76,0.06)]`
- Hover Shadow: `hover:shadow-[0_4px_12px_rgba(0,146,255,0.15),0_2px_4px_rgba(34,34,76,0.08)]`

**Icon Container**:
- Background: Varies by type (e.g., `bg-blue/12`)
- Border radius: `rounded-md` (8px)
- Icon color: `text-blue` or `text-brand-navy`

---

## Touch Target Specifications

### Minimum Touch Targets (Mobile)

```
Element            Mobile Size       Desktop Size      WCAG Requirement
────────────────────────────────────────────────────────────────────────
CTA Buttons        48×48px           56×56px           ✅ 44×44px
Resource Cards     Full width        Min 80px height   ✅ 44×44px
Links              Min 44px height   Comfortable       ✅ 44×44px
Icons (clickable)  24×24px + padding 24×24px + padding ✅ 44×44px with padding
```

**Implementation**:
- Buttons: `h-[48px] sm:h-[56px]` + padding
- Cards: Full-width on mobile = easy to tap
- Links: Adequate padding ensures 44px+ height
- Icon buttons: Padding around icon creates sufficient target

---

## Accessibility Specifications

### Color Contrast

**Text on White**:
- H1 (brand-navy #22224C): 12.5:1 ✅ AAA
- Body text (gray-900): 15:1 ✅ AAA
- Secondary text (gray-600): 7:1 ✅ AA

**Button Text**:
- White on primary-blue: 4.6:1 ✅ AA (large text)
- Primary-blue on white: 4.6:1 ✅ AA

**Interactive Elements**:
- Border colors meet 3:1 minimum for UI components

### Focus Indicators

**All Interactive Elements**:
```css
focus-visible:outline-2
focus-visible:outline-blue-500
focus-visible:outline-offset-2
```

**Visual Result**:
- 2px blue outline
- 2px offset from element
- Only shows on keyboard focus (not mouse click)

### ARIA Labels

**External Links**:
- CTA Buttons: `aria-label={getExternalLinkAriaLabel(primaryCTA.text)}`
  - Example: "Visit Our Careers Page (opens in new tab)"
- Resource Links: `aria-label={getDownloadAriaLabel(resource.title, resource.fileSize)}`
  - Example: "Download Career Guide PDF, 2.5MB (opens in new tab)"

**Social Links**:
- Each icon: `aria-label={getExternalLinkAriaLabel(social.platform)}`
  - Example: "Visit us on LinkedIn (opens in new tab)"

---

## Performance Considerations

### Layout Shift Prevention

**Strategies**:
1. **Fixed Heights**: Video, Engagement, CompanyStory, ContactInfo use fixed heights
2. **Aspect Ratios**: SessionSlides uses aspect-[16/10] (intrinsic sizing)
3. **Auto Heights**: Resources uses auto-height but min-h on cards prevents collapse
4. **Image Sizing**: Logo has explicit width/height attributes

**Expected CLS**: <0.1 (target)

### Rendering Optimization

**Grid Layout**:
- CSS Grid is GPU-accelerated
- gap-6 is more performant than margin-based spacing
- No JavaScript layout calculations needed

**Transitions**:
- Transform-based (translate-y) for hover effects (GPU-accelerated)
- Opacity transitions (GPU-accelerated)
- All transitions respect `prefers-reduced-motion`

---

## Responsive Image Guidelines

### Logo Images

**Recommended Sizes**:
- 1× resolution: 96×96px (covers largest size × 4 for retina)
- Format: PNG with transparency or SVG (preferred)
- Max file size: 50KB

**Implementation**:
```tsx
<img
  src={logo}
  alt={`${name} logo`}
  className="w-full h-full object-contain"
  width="96"
  height="96"
  loading="eager" // Above fold
/>
```

### Resource Card Icons

**Lucide Icons** (currently used):
- SVG icons from lucide-react
- Scalable, no separate image files needed
- Sizes: 16px (w-4 h-4)

---

## Testing Matrix

### Visual Regression Testing Points

**Critical Viewports**:
1. 320px - Check: No overflow, all content visible
2. 375px - Check: Comfortable spacing, readable text
3. 430px - Check: Button sizes appropriate
4. 640px - Check: Transition to horizontal CTAs smooth
5. 768px - Check: Video+Engagement side-by-side aligned
6. 1024px - Check: Resources+SessionSlides side-by-side
7. 1400px - Check: Container centered, max-width enforced

**State Testing**:
- Standard booths (no Engagement, no SessionSlides)
- Platinum booths (all components)
- Variable resource counts (1-5 cards)
- Long company names (overflow handling)
- Long CTA button text (truncation)

**Interaction Testing**:
- Hover states (all buttons, cards)
- Focus states (keyboard navigation)
- Touch targets (mobile, tablet)
- Smooth scrolling (page-level only, no component scrolling)

---

## Common Layout Patterns

### Stacked → Side-by-Side Pattern

**Used For**: Video+Engagement, CompanyStory+ContactInfo

```tsx
// Mobile: Stack (col-span-12)
// Tablet+: Side-by-side (col-span-X)

<div className="col-span-12 md:col-span-8">
  {/* Component A */}
</div>
<div className="col-span-12 md:col-span-4">
  {/* Component B */}
</div>
```

**Result**:
- Mobile: A above B (full width each)
- Tablet+: A and B side-by-side (8:4 ratio)

### Delayed Side-by-Side Pattern

**Used For**: Resources+SessionSlides

```tsx
// Mobile + Tablet: Stack (col-span-12)
// Desktop: Side-by-side (col-span-6)

<div className="col-span-12 lg:col-span-6">
  {/* Resources */}
</div>
<div className="col-span-12 lg:col-span-6">
  {/* SessionSlides */}
</div>
```

**Result**:
- Mobile + Tablet: Resources above SessionSlides (full width each)
- Desktop: Resources and SessionSlides side-by-side (50:50)

---

## Edge Cases & Considerations

### Variable Content Lengths

**Long Company Names**:
- H1 uses responsive sizing (text-2xl → text-3xl → text-[40px])
- Container has padding and max-width to prevent overflow
- If name still overflows: wraps to multiple lines (leading-tight)

**Long CTA Button Text**:
- Button text wrapped in `<span className="truncate">`
- If text exceeds button width: truncates with ellipsis (...)
- Button maintains min/max width constraints

**Variable Resource Counts**:
- Limited to 5 resources (displayResources.slice(0, 5))
- If <5 resources: Cards still display normally, less height
- If 5 resources: Auto-height accommodates all (mobile: ~524px, tablet: ~340px)

### Missing Components (Standard Booths)

**Standard booths lack**:
- Engagement Activity
- Session Slides
- Quick Facts (in Company Story)

**Layout Adjustments**:
- Video becomes full-width when Engagement is missing (col-span-12)
- Resources becomes full-width when SessionSlides is missing (col-span-12)
- CompanyStory displays without Quick Facts section

**Implementation**:
```tsx
{/* Video Section - Always shown */}
<div className={`col-span-12 ${isPlatinum ? 'md:col-span-5 lg:col-span-4' : ''} h-[450px] lg:h-[500px]`}>
  <VideoSection video={booth.video} />
</div>

{/* Engagement Activity - Platinum only */}
{isPlatinum && booth.tier === 'platinum' && booth.engagementActivity && (
  <div className="col-span-12 md:col-span-7 lg:col-span-8 h-[450px] lg:h-[500px]">
    <EngagementActivity />
  </div>
)}
```

---

## Quick Reference: Grid Column Calculations

### 12-Column Grid Math

**Column Width Calculation**:
```
Single Column Width = (Container Width - Total Gap Width) / 12

At 1400px container with gap-6 (24px):
- Available width: 1336px (1400px - 64px padding)
- Total gaps: 11 × 24px = 264px (between 12 columns)
- Single column: (1336px - 264px) / 12 = 89.33px
```

**Component Width Calculation**:
```
Component Width = (Single Column Width × Span) + (Gap × (Span - 1))

Example: 4-column span at 1400px
= (89.33px × 4) + (24px × 3)
= 357.32px + 72px
= 429.32px
```

### Common Spans

**At 1400px container (1336px available)**:
```
Span    Percentage    Width (approx)    Usage
─────────────────────────────────────────────────────
12      100%          1336px            Full width
8       66.67%        878px             Company Story (lg:)
6       50%           656px             Resources/SessionSlides (lg:)
5       41.67%        545px             Video (md:)
4       33.33%        424px             Video (lg:), ContactInfo
7       58.33%        723px             Engagement (md:)
```

---

## Related Documentation

- **Implementation Guide**: `booth-mobile-fixes-quick-reference.md`
- **Complete Analysis**: `booth-mobile-responsiveness-analysis.md`
- **Component Files**:
  - `components/booths/BoothLayout.tsx`
  - `components/booths/sections/BoothHeader.tsx`
  - `components/booths/sections/ResourceCards.tsx`
  - `components/booths/sections/VideoSection.tsx`
  - `components/booths/sections/EngagementActivity.tsx`
  - `components/booths/sections/SessionSlides.tsx`
  - `components/booths/sections/CompanyStory.tsx`
  - `components/booths/sections/ContactInfo.tsx`

---

**End of Specifications**

This document provides complete responsive layout specifications for the booth detail page across all breakpoints. Use this as a reference during development, testing, and QA validation.
