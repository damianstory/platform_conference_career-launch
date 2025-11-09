# Booth Mobile Fixes - Quick Implementation Reference

**For**: Senior Frontend Engineer
**Purpose**: Fast implementation guide with copy-paste code snippets
**Related**: See `booth-mobile-responsiveness-analysis.md` for complete analysis

---

## TL;DR - What to Fix

**3 Critical Issues**:
1. Horizontal scrollbar on mobile (320px-640px)
2. Resources section has unwanted internal scrolling
3. Wasted space on tablets (768px-1023px)

**5 Files to Edit**:
1. `BoothHeader.tsx` - Responsive buttons, typography, logo
2. `ResourceCards.tsx` - Remove fixed aspect ratio, auto-height
3. `BoothLayout.tsx` - Add overflow protection, md: breakpoints
4. `CompanyStory.tsx` - Add className prop
5. `ContactInfo.tsx` - Add className prop

**Time Estimate**: 4-6 hours (including testing)

---

## Fix 1: BoothHeader.tsx - Responsive Buttons

**File**: `components/booths/sections/BoothHeader.tsx`

### Change 1A: CTA Buttons (Lines 58-80)

**REPLACE**:
```tsx
<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
  <a
    href={primaryCTA.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={getExternalLinkAriaLabel(primaryCTA.text)}
    className="inline-flex items-center justify-center gap-2 px-6 h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-body-2 shadow-md hover:bg-brand-navy hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 flex-1 sm:flex-initial sm:min-w-[220px] whitespace-nowrap"
  >
    {primaryCTA.text}
    <ExternalLink className="w-3 h-3 flex-shrink-0" />
  </a>

  <a
    href={secondaryCTA.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={getExternalLinkAriaLabel(secondaryCTA.text)}
    className="inline-flex items-center justify-center gap-2 px-6 h-[56px] bg-white text-primary-blue border-2 border-primary-blue rounded-lg font-semibold text-body-2 hover:bg-primary-blue hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 flex-1 sm:flex-initial sm:min-w-[220px] whitespace-nowrap"
  >
    {secondaryCTA.text}
    <ExternalLink className="w-3 h-3 flex-shrink-0" />
  </a>
</div>
```

**WITH**:
```tsx
<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:min-w-0">
  <a
    href={primaryCTA.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={getExternalLinkAriaLabel(primaryCTA.text)}
    className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 h-[48px] sm:h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-sm sm:text-body-2 shadow-md hover:bg-brand-navy hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 w-full sm:w-auto sm:min-w-[180px] sm:max-w-[220px] whitespace-nowrap"
  >
    <span className="truncate">{primaryCTA.text}</span>
    <ExternalLink className="w-3 h-3 flex-shrink-0" />
  </a>

  <a
    href={secondaryCTA.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={getExternalLinkAriaLabel(secondaryCTA.text)}
    className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 h-[48px] sm:h-[56px] bg-white text-primary-blue border-2 border-primary-blue rounded-lg font-semibold text-sm sm:text-body-2 hover:bg-primary-blue hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 w-full sm:w-auto sm:min-w-[180px] sm:max-w-[220px] whitespace-nowrap"
  >
    <span className="truncate">{secondaryCTA.text}</span>
    <ExternalLink className="w-3 h-3 flex-shrink-0" />
  </a>
</div>
```

**Key Changes**:
- ✅ `w-full sm:w-auto` - Full width on mobile, auto on desktop
- ✅ `sm:min-w-[180px] sm:max-w-[220px]` - Constrained width range
- ✅ `h-[48px] sm:h-[56px]` - Smaller on mobile (48px meets 44px minimum)
- ✅ `px-4 sm:px-6` - Less padding on mobile
- ✅ `text-sm sm:text-body-2` - Smaller font on mobile
- ✅ `<span className="truncate">` - Text truncates if needed
- ❌ Removed `flex-1 sm:flex-initial` - This caused overflow

---

### Change 1B: H1 Typography (Line 49)

**REPLACE**:
```tsx
<h1 className="text-[40px] font-black text-brand-navy leading-tight tracking-tight">
  {name}
</h1>
```

**WITH**:
```tsx
<h1 className="text-2xl sm:text-3xl lg:text-[40px] font-black text-brand-navy leading-tight tracking-tight">
  {name}
</h1>
```

**Key Changes**:
- ✅ Mobile: 24px (text-2xl)
- ✅ Tablet: 30px (sm:text-3xl)
- ✅ Desktop: 40px (lg:text-[40px])

---

### Change 1C: Logo Sizing (Lines 30-44)

**REPLACE**:
```tsx
<div className="flex-shrink-0">
  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden">
    {logo ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-full object-contain"
      />
    ) : (
      <div className="text-2xl font-bold text-neutral-3">
        {name.substring(0, 2).toUpperCase()}
      </div>
    )}
  </div>
</div>
```

**WITH**:
```tsx
<div className="flex-shrink-0">
  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden">
    {logo ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-full object-contain"
      />
    ) : (
      <div className="text-xl sm:text-2xl font-bold text-neutral-3">
        {name.substring(0, 2).toUpperCase()}
      </div>
    )}
  </div>
</div>
```

**Key Changes**:
- ✅ Mobile: 16×16px (w-16 h-16)
- ✅ Tablet: 20×20px (sm:w-20 sm:h-20)
- ✅ Desktop: 24×24px (lg:w-24 lg:h-24)
- ✅ Fallback text scales: text-xl sm:text-2xl

---

## Fix 2: ResourceCards.tsx - Remove Internal Scrolling

**File**: `components/booths/sections/ResourceCards.tsx`

### Change 2: Replace Container & Grid (Lines 64-118)

**REPLACE ENTIRE SECTION**:
```tsx
<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md col-span-12 lg:col-span-6">
  {/* Header - matches SessionSlides styling */}
  <div className="px-6 py-2 border-b border-gray-200">
    <h3 className="text-lg font-bold text-gray-900 truncate">Resources</h3>
  </div>

  {/* Constrained aspect ratio to match SessionSlides */}
  <div className="relative aspect-[16/10]">
    {/* Scrollable container for 5 cards in compact 2-column grid */}
    <div className="absolute inset-0 px-4 pt-4 pb-3 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 h-full">
        {displayResources.map((resource, index) => {
          const { icon: Icon, cardBg, iconBg, iconColor, borderColor, hoverBorder, hoverBg } = getResourceIcon(resource.type)

          return (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={getDownloadAriaLabel(resource.title, resource.fileSize)}
              className={`group relative ${cardBg} border ${borderColor} ${hoverBorder} rounded-lg py-4 px-3 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 h-fit shadow-[0_2px_4px_rgba(34,34,76,0.06)] hover:shadow-[0_4px_12px_rgba(0,146,255,0.15),0_2px_4px_rgba(34,34,76,0.08)]`}
            >
              {/* Hover overlay effect */}
              <div className={`absolute inset-0 ${hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none`} />

              {/* Content - Horizontal layout: Icon left, Text right (compact) */}
              <div className="relative flex flex-row gap-3 items-start">
                {/* Icon - small */}
                <div className={`p-1.5 ${iconBg} rounded-md flex-shrink-0`}>
                  <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
                </div>

                {/* Text Content - compact */}
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  {/* Title - single line */}
                  <h4 className="text-xs font-semibold text-gray-900 line-clamp-1">
                    {resource.title}
                  </h4>

                  {/* Description - single line */}
                  <p className="text-xs text-gray-600 line-clamp-1">
                    {resource.description}
                  </p>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  </div>
</div>
```

**WITH**:
```tsx
<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md col-span-12 lg:col-span-6">
  {/* Header - matches SessionSlides styling */}
  <div className="px-6 py-2 border-b border-gray-200">
    <h3 className="text-lg font-bold text-gray-900 truncate">Resources</h3>
  </div>

  {/* Auto-height container - NO FIXED ASPECT RATIO */}
  <div className="px-4 py-4">
    {/* Responsive grid: 1 column mobile, 2 columns tablet+ */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {displayResources.map((resource, index) => {
        const { icon: Icon, cardBg, iconBg, iconColor, borderColor, hoverBorder, hoverBg } = getResourceIcon(resource.type)

        return (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={getDownloadAriaLabel(resource.title, resource.fileSize)}
            className={`group relative ${cardBg} border ${borderColor} ${hoverBorder} rounded-lg py-4 px-3 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 shadow-[0_2px_4px_rgba(34,34,76,0.06)] hover:shadow-[0_4px_12px_rgba(0,146,255,0.15),0_2px_4px_rgba(34,34,76,0.08)] min-h-[80px]`}
          >
            {/* Hover overlay effect */}
            <div className={`absolute inset-0 ${hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none`} />

            {/* Content - Horizontal layout: Icon left, Text right */}
            <div className="relative flex flex-row gap-3 items-start">
              {/* Icon */}
              <div className={`p-2 ${iconBg} rounded-md flex-shrink-0`}>
                <Icon className={`w-4 h-4 ${iconColor}`} />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                {/* Title - up to 2 lines */}
                <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">
                  {resource.title}
                </h4>

                {/* Description - up to 2 lines */}
                <p className="text-xs text-gray-600 line-clamp-2">
                  {resource.description}
                </p>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  </div>
</div>
```

**Key Changes**:
- ❌ Removed `aspect-[16/10]` - No fixed aspect ratio
- ❌ Removed `absolute inset-0` positioning
- ❌ Removed `overflow-y-auto` - No scrolling
- ✅ Changed outer container: `px-4 py-4` - Simple padding
- ✅ Changed gap: `gap-1` → `gap-3` (better spacing)
- ✅ Changed icon: `w-3.5 h-3.5` → `w-4 h-4` (larger)
- ✅ Changed icon padding: `p-1.5` → `p-2` (better balance)
- ✅ Changed title: `text-xs line-clamp-1` → `text-sm line-clamp-2` (more readable)
- ✅ Changed description: `line-clamp-1` → `line-clamp-2` (show more)
- ✅ Added `min-h-[80px]` to cards (consistent height)
- ✅ Changed text gap: `gap-1` → `gap-1.5` (better spacing)

**Result**: All 5 cards visible, no scrolling, auto-height

---

## Fix 3: BoothLayout.tsx - Overflow Protection

**File**: `components/booths/BoothLayout.tsx`

### Change 3A: Container Overflow (Line 21)

**REPLACE**:
```tsx
<div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
```

**WITH**:
```tsx
<div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-x-hidden">
```

**Key Change**:
- ✅ Added `overflow-x-hidden` - Prevents horizontal scrollbar at page level

---

### Change 3B: Video + Engagement Grid (Lines 36-44)

**REPLACE**:
```tsx
{/* Video Section - Always shown */}
<div className="col-span-12 lg:col-span-4 h-[450px] lg:h-[500px]">
  <VideoSection video={booth.video} />
</div>

{/* Engagement Activity - Platinum only */}
{isPlatinum && booth.tier === 'platinum' && booth.engagementActivity && (
  <div className="col-span-12 lg:col-span-8 h-[450px] lg:h-[500px]">
    <EngagementActivity />
  </div>
)}
```

**WITH**:
```tsx
{/* Video Section - Always shown */}
<div className="col-span-12 md:col-span-5 lg:col-span-4 h-[450px] lg:h-[500px]">
  <VideoSection video={booth.video} />
</div>

{/* Engagement Activity - Platinum only */}
{isPlatinum && booth.tier === 'platinum' && booth.engagementActivity && (
  <div className="col-span-12 md:col-span-7 lg:col-span-8 h-[450px] lg:h-[500px]">
    <EngagementActivity />
  </div>
)}
```

**Key Changes**:
- ✅ Video: Added `md:col-span-5` (side-by-side at 768px)
- ✅ Engagement: Added `md:col-span-7` (side-by-side at 768px)
- ✅ Ratio: 5:7 at md:, 4:8 at lg: (engagement gets more space)

---

### Change 3C: CompanyStory + ContactInfo Grid (Lines 55-62)

**REPLACE**:
```tsx
{/* Company Story - Always shown */}
<CompanyStory
  description={booth.description}
  quickFacts={booth.tier === 'platinum' ? booth.quickFacts : undefined}
/>

{/* Contact Info - Always shown */}
<ContactInfo contact={booth.contact} />
```

**WITH**:
```tsx
{/* Company Story - Always shown */}
<CompanyStory
  description={booth.description}
  quickFacts={booth.tier === 'platinum' ? booth.quickFacts : undefined}
  className="col-span-12 md:col-span-8"
/>

{/* Contact Info - Always shown */}
<ContactInfo
  contact={booth.contact}
  className="col-span-12 md:col-span-4"
/>
```

**Key Changes**:
- ✅ Added `className` prop to both components
- ✅ CompanyStory: `md:col-span-8` (side-by-side at 768px)
- ✅ ContactInfo: `md:col-span-4` (side-by-side at 768px)

**Note**: Requires prop changes in CompanyStory.tsx and ContactInfo.tsx (see Fix 4 & 5)

---

## Fix 4: CompanyStory.tsx - Add className Prop

**File**: `components/booths/sections/CompanyStory.tsx`

### Change 4A: Interface (Line 8)

**REPLACE**:
```tsx
interface CompanyStoryProps {
  description: string
  quickFacts?: QuickFact[]
}
```

**WITH**:
```tsx
interface CompanyStoryProps {
  description: string
  quickFacts?: QuickFact[]
  className?: string
}
```

---

### Change 4B: Component (Line 13)

**REPLACE**:
```tsx
export default function CompanyStory({ description, quickFacts }: CompanyStoryProps) {
  // ...
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md col-span-12 lg:col-span-8 h-64">
```

**WITH**:
```tsx
export default function CompanyStory({ description, quickFacts, className }: CompanyStoryProps) {
  // ...
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md h-64 ${className || 'col-span-12 lg:col-span-8'}`}>
```

**Key Changes**:
- ✅ Added `className` to destructured props
- ✅ Moved grid classes to `className` prop (with fallback)
- ✅ Default: `col-span-12 lg:col-span-8` if no className provided

---

## Fix 5: ContactInfo.tsx - Add className Prop

**File**: `components/booths/sections/ContactInfo.tsx`

### Change 5A: Interface (Line 9)

**REPLACE**:
```tsx
interface ContactInfoProps {
  contact: ContactDetails
}
```

**WITH**:
```tsx
interface ContactInfoProps {
  contact: ContactDetails
  className?: string
}
```

---

### Change 5B: Component (Line 13)

**REPLACE**:
```tsx
export default function ContactInfo({ contact }: ContactInfoProps) {
  // ...
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md col-span-12 lg:col-span-4 h-64">
```

**WITH**:
```tsx
export default function ContactInfo({ contact, className }: ContactInfoProps) {
  // ...
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md h-64 ${className || 'col-span-12 lg:col-span-4'}`}>
```

**Key Changes**:
- ✅ Added `className` to destructured props
- ✅ Moved grid classes to `className` prop (with fallback)
- ✅ Default: `col-span-12 lg:col-span-4` if no className provided

---

## Testing Quick Checklist

### Critical Tests (Must Pass)

**Mobile (320px-430px)**:
- [ ] No horizontal scrollbar on page
- [ ] BoothHeader CTA buttons stack vertically (full width)
- [ ] All 5 resource cards visible without scrolling
- [ ] Logo/title don't overflow

**Tablet (768px-1023px)**:
- [ ] Video + Engagement side-by-side (5:7 ratio)
- [ ] CompanyStory + ContactInfo side-by-side (8:4 ratio)
- [ ] Resources + SessionSlides still stacked (correct)

**Desktop (1024px+)**:
- [ ] All layouts render correctly
- [ ] Video + Engagement side-by-side (4:8 ratio)
- [ ] Resources + SessionSlides side-by-side (6:6 ratio)

### Quick Device Test

**Chrome DevTools**:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
3. Test these presets:
   - iPhone SE (375px)
   - iPhone 14 Pro Max (430px)
   - iPad (810px)
   - iPad Pro (1024px)

**Manual Testing**:
```bash
# In browser address bar, force specific width
# Resize window to:
320px, 375px, 430px, 640px, 768px, 1024px, 1400px
```

---

## Before/After Visual Summary

### BoothHeader (Mobile)

**BEFORE**:
```
┌─────────────────────────────┐
│ Logo  Company Name          │
│ Tagline                     │
│ [Button 1] [Button 2]       │ ← Overflow! Buttons too wide
└─────────────────────────────┘
❌ Horizontal scrollbar
```

**AFTER**:
```
┌─────────────────────────────┐
│ Logo  Company Name          │
│ Tagline                     │
│ [    Button 1 Full Width   ]│
│ [    Button 2 Full Width   ]│
└─────────────────────────────┘
✅ No scrollbar, stacked buttons
```

---

### ResourceCards

**BEFORE**:
```
┌───────────────────────┐
│ Resources             │
├───────────────────────┤
│ Card 1    Card 2      │
│ Card 3    Card 4      │
│ Card 5                │ ← Below fold
└───────────────────────┘
      ↕ Scrollbar
❌ Must scroll to see Card 5
```

**AFTER**:
```
┌───────────────────────┐
│ Resources             │
├───────────────────────┤
│ Card 1    Card 2      │
│ Card 3    Card 4      │
│ Card 5                │
│ (all visible)         │
└───────────────────────┘
✅ All cards visible, auto-height
```

---

### Tablet Layout (768px-1023px)

**BEFORE**:
```
┌─────────────────────────────────┐
│ Header                          │
├─────────────────────────────────┤
│ Video                           │
│                                 │ ← Wasted space
├─────────────────────────────────┤
│ Engagement                      │
│                                 │
└─────────────────────────────────┘
❌ Stacked, wasted horizontal space
```

**AFTER**:
```
┌─────────────────────────────────┐
│ Header                          │
├──────────────────┬──────────────┤
│ Video            │ Engagement   │
│ (5 cols)         │ (7 cols)     │
│                  │              │
├──────────────────┴──────────────┤
│ ...                             │
└─────────────────────────────────┘
✅ Side-by-side at 768px+
```

---

## Common Issues & Solutions

### Issue: Buttons still overflow on small screens

**Cause**: Text is too long, exceeds max-width
**Solution**: Check button text length, consider abbreviations on mobile
**Example**:
```tsx
// Option 1: Shorter text on mobile (requires conditional rendering)
{primaryCTA.text.length > 20 ? (
  <span className="truncate">{primaryCTA.text.slice(0, 20)}...</span>
) : (
  <span className="truncate">{primaryCTA.text}</span>
)}

// Option 2: Use existing truncate (recommended)
<span className="truncate">{primaryCTA.text}</span>
```

---

### Issue: Resources still have height mismatch with SessionSlides

**Expected**: This is correct behavior
**Explanation**: Resources now has auto-height (varies by content). SessionSlides has fixed aspect-[16/10] (required for iframe). They only go side-by-side at lg: (1024px+) where there's enough width.

---

### Issue: Grid gaps look too wide on mobile

**Cause**: gap-6 (24px) is maintained at all breakpoints
**Solution** (if needed): Add responsive gaps
```tsx
// In BoothLayout.tsx line 23
<div className="grid grid-cols-12 gap-4 sm:gap-6 w-full">
//                                  ↑ 16px mobile, 24px desktop
```

---

### Issue: Typography jumps abruptly between breakpoints

**Expected**: Minor jumps are normal with breakpoint-based sizing
**Alternative**: Use clamp() for fluid scaling (advanced)
```tsx
// Instead of: text-2xl sm:text-3xl lg:text-[40px]
// Use: text-[clamp(1.5rem,4vw,2.5rem)]
```

---

## Rollback Instructions

If issues arise in production:

1. **Quick Rollback**: Revert all 5 files to previous commit
```bash
git checkout HEAD~1 -- components/booths/sections/BoothHeader.tsx
git checkout HEAD~1 -- components/booths/sections/ResourceCards.tsx
git checkout HEAD~1 -- components/booths/BoothLayout.tsx
git checkout HEAD~1 -- components/booths/sections/CompanyStory.tsx
git checkout HEAD~1 -- components/booths/sections/ContactInfo.tsx
git commit -m "Rollback booth mobile fixes"
git push
```

2. **Partial Rollback**: Keep some fixes, revert others
   - BoothHeader fixes are safe (no dependencies)
   - ResourceCards fix is safe (no dependencies)
   - BoothLayout + CompanyStory/ContactInfo are linked (revert together)

3. **Emergency CSS Override** (temporary):
```css
/* Add to globals.css */
@media (max-width: 640px) {
  .booth-layout {
    overflow-x: hidden !important;
  }
}
```

---

## Performance Notes

**Positive Impacts**:
- Simpler layout calculations (no absolute positioning in Resources)
- Fewer reflows (no aspect-ratio forcing content into fixed height)
- Better CSS containment (overflow-x-hidden)

**No Negative Impacts Expected**:
- All changes use standard Tailwind utilities (no custom CSS)
- No new JavaScript (pure CSS changes)
- No new dependencies

**Monitor**: Cumulative Layout Shift (CLS) should remain <0.1

---

## Related Files

- **Analysis**: `booth-mobile-responsiveness-analysis.md` (complete details)
- **Components**:
  - `components/booths/BoothLayout.tsx`
  - `components/booths/sections/BoothHeader.tsx`
  - `components/booths/sections/ResourceCards.tsx`
  - `components/booths/sections/CompanyStory.tsx`
  - `components/booths/sections/ContactInfo.tsx`
- **Styles**: `tailwind.config.ts`, `app/globals.css`

---

**Questions?** Refer to `booth-mobile-responsiveness-analysis.md` for detailed explanations and design rationale.

**Ready to implement?** Start with Fix 1 (BoothHeader), then Fix 2 (ResourceCards), then Fix 3 (BoothLayout + CompanyStory + ContactInfo).

**Total Time**: ~4-6 hours including testing

**Status**: ✅ Ready for implementation
