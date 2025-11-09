---
title: BoothHeader Responsive Fix - Implementation Guide
description: Developer handoff documentation with code examples and implementation steps
feature: booth-header-responsive-fix
last-updated: 2025-11-09
version: 1.0
related-files:
  - ./README.md
  - ./screen-states.md
  - ../../../components/booths/sections/BoothHeader.tsx
status: approved
---

# BoothHeader Responsive Fix - Implementation Guide

## Overview

This document provides step-by-step implementation instructions for fixing the responsive breakpoint issues in the BoothHeader component. The fix is pure CSS (Tailwind classes) with no JavaScript changes required.

## File to Modify

**Primary File:**
```
/components/booths/sections/BoothHeader.tsx
```

**Lines to Change:** 28, 49, 52, 58, 64, 75

## Implementation Strategy

### Phase 1: Breakpoint Adjustments
Change the horizontal layout trigger from `sm:` (640px) to `md:` (768px)

### Phase 2: Typography Scaling
Add responsive font sizes for company name and tagline

### Phase 3: Button Width Optimization
Update button width constraints for better flexibility

### Phase 4: Testing & Validation
Comprehensive responsive and accessibility testing

---

## Detailed Code Changes

### Change 1: Main Container Flex Direction

**Location:** Line 28

**Current Code:**
```tsx
<div className="flex flex-col md:flex-row items-start md:items-center gap-6">
```

**Status:** ✅ **No Change Needed**

**Reason:** Already uses `md:flex-row`, which is the correct breakpoint.

---

### Change 2: Company Name Typography

**Location:** Line 49

**Current Code:**
```tsx
<h1 className="text-[40px] font-black text-brand-navy leading-tight tracking-tight">
  {name}
</h1>
```

**New Code:**
```tsx
<h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-black text-brand-navy leading-tight tracking-tight">
  {name}
</h1>
```

**Changes Explained:**
- `text-[28px]`: Base size for mobile (0-639px)
- `sm:text-[32px]`: Medium size for small tablets (640-767px)
- `md:text-[40px]`: Full size for tablet/desktop (768px+)

**Rationale:** Prevents text from dominating mobile screens while maintaining impact on desktop

---

### Change 3: Tagline Typography

**Location:** Line 52

**Current Code:**
```tsx
<p className="text-[20px] text-neutral-5 font-normal">
  {tagline}
</p>
```

**New Code:**
```tsx
<p className="text-[16px] sm:text-[18px] md:text-[20px] text-neutral-5 font-normal">
  {tagline}
</p>
```

**Changes Explained:**
- `text-[16px]`: Base size for mobile (0-639px)
- `sm:text-[18px]`: Medium size for small tablets (640-767px)
- `md:text-[20px]`: Full size for tablet/desktop (768px+)

**Rationale:** Maintains hierarchy with company name while optimizing readability at all sizes

---

### Change 4: Button Container Layout

**Location:** Line 58

**Current Code:**
```tsx
<div className="flex flex-col gap-3 w-full md:w-auto md:flex-row">
```

**Status:** ✅ **No Change Needed**

**Reason:** Already uses `md:flex-row`, which is the correct breakpoint for horizontal button layout.

---

### Change 5: Primary Button Width Constraints

**Location:** Line 64

**Current Code:**
```tsx
className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-body-2 shadow-md hover:bg-brand-navy hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 flex-1 sm:flex-initial sm:min-w-[220px]"
```

**New Code:**
```tsx
className="inline-flex items-center justify-center gap-2 px-4 md:px-6 h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-body-2 shadow-md hover:bg-brand-navy hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 w-full md:w-auto md:min-w-[180px] md:max-w-[240px] lg:min-w-[220px]"
```

**Changes Explained:**
- Removed: `flex-1 sm:flex-initial sm:min-w-[220px]`
- Added: `w-full md:w-auto md:min-w-[180px] md:max-w-[240px] lg:min-w-[220px]`
- Changed: `sm:px-6` to `md:px-6` (aligns with layout breakpoint)

**Breakdown:**
- `w-full`: Full width on mobile (0-767px)
- `md:w-auto`: Auto width on tablet/desktop (768px+)
- `md:min-w-[180px]`: Minimum 180px on tablet (prevents too-narrow buttons)
- `md:max-w-[240px]`: Maximum 240px on tablet (prevents overflow)
- `lg:min-w-[220px]`: Minimum 220px on large desktop (comfortable sizing)

**Rationale:** Flexible widths adapt to available space while maintaining minimum usability requirements

---

### Change 6: Secondary Button Width Constraints

**Location:** Line 75

**Current Code:**
```tsx
className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 h-[56px] bg-white text-primary-blue border-2 border-primary-blue rounded-lg font-semibold text-body-2 hover:bg-primary-blue hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 flex-1 sm:flex-initial sm:min-w-[220px]"
```

**New Code:**
```tsx
className="inline-flex items-center justify-center gap-2 px-4 md:px-6 h-[56px] bg-white text-primary-blue border-2 border-primary-blue rounded-lg font-semibold text-body-2 hover:bg-primary-blue hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 w-full md:w-auto md:min-w-[180px] md:max-w-[240px] lg:min-w-[220px]"
```

**Changes Explained:**
Same as Primary Button (Change 5) - ensures consistent sizing across both CTAs

---

## Complete Updated Component Code

```tsx
'use client'

import React from 'react'
import { ExternalLink } from 'lucide-react'
import { CTAButton } from '@/types/booth'
import { getExternalLinkAriaLabel } from '@/lib/utils/accessibility'

interface BoothHeaderProps {
  name: string
  logo: string
  tagline: string
  primaryCTA: CTAButton
  secondaryCTA: CTAButton
  website?: string
}

export default function BoothHeader({
  name,
  logo,
  tagline,
  primaryCTA,
  secondaryCTA,
  website
}: BoothHeaderProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border-2 border-primary-blue overflow-hidden transition-all duration-200 hover:shadow-md col-span-12">
      <div className="p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Logo */}
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

          {/* Company Info */}
          <div className="flex-grow space-y-2">
            <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-black text-brand-navy leading-tight tracking-tight">
              {name}
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-neutral-5 font-normal">
              {tagline}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 w-full md:w-auto md:flex-row">
            <a
              href={primaryCTA.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={getExternalLinkAriaLabel(primaryCTA.text)}
              className="inline-flex items-center justify-center gap-2 px-4 md:px-6 h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-body-2 shadow-md hover:bg-brand-navy hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 w-full md:w-auto md:min-w-[180px] md:max-w-[240px] lg:min-w-[220px]"
            >
              <span className="truncate">{primaryCTA.text}</span>
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>

            <a
              href={secondaryCTA.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={getExternalLinkAriaLabel(secondaryCTA.text)}
              className="inline-flex items-center justify-center gap-2 px-4 md:px-6 h-[56px] bg-white text-primary-blue border-2 border-primary-blue rounded-lg font-semibold text-body-2 hover:bg-primary-blue hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 w-full md:w-auto md:min-w-[180px] md:max-w-[240px] lg:min-w-[220px]"
            >
              <span className="truncate">{secondaryCTA.text}</span>
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

## Implementation Steps

### Step 1: Create Feature Branch

```bash
git checkout -b fix/booth-header-responsive
```

### Step 2: Apply Code Changes

1. Open `/components/booths/sections/BoothHeader.tsx`
2. Apply changes to lines 49, 52, 64, and 75 as documented above
3. Save file

### Step 3: Visual Verification

Run development server and test at critical breakpoints:

```bash
npm run dev
```

Open browser to `http://localhost:3000/booths/[any-booth-slug]`

**Test at these exact widths:**
- 375px (mobile)
- 619px (just below old breakpoint)
- 640px (old breakpoint - should now be stacked)
- 719px (mid-range problem area - should now be stacked)
- 768px (new breakpoint - switches to horizontal)
- 888px (formerly broken - should now work)
- 1024px (desktop)
- 1440px (wide desktop)

### Step 4: Browser DevTools Testing

**Chrome DevTools:**
1. Open DevTools (F12)
2. Toggle device toolbar (Cmd+Shift+M / Ctrl+Shift+M)
3. Select "Responsive" mode
4. Drag to resize and watch for:
   - No layout jumps at 767px → 768px transition
   - Both buttons always visible
   - No horizontal scrollbars
   - Smooth typography scaling

**Firefox DevTools:**
1. Open DevTools (F12)
2. Click "Responsive Design Mode" (Cmd+Opt+M / Ctrl+Shift+M)
3. Test same breakpoints as Chrome

**Safari (iPad Testing):**
1. Use iOS Simulator or physical iPad
2. Test portrait and landscape orientations
3. Verify touch targets are ≥44px

### Step 5: Accessibility Testing

**Keyboard Navigation:**
```
1. Tab through both buttons
2. Verify visible focus indicator (blue outline)
3. Verify no focus traps
4. Test at all breakpoints (mobile, tablet, desktop)
```

**Screen Reader Testing:**
```
VoiceOver (macOS):
- Cmd+F5 to enable
- Navigate through booth header
- Verify ARIA labels announce correctly
- Confirm "opens in new tab" is announced

NVDA/JAWS (Windows):
- Test button labels and announcements
- Verify proper landmark regions
```

**Color Contrast:**
```
Use Chrome DevTools Lighthouse:
1. Run Accessibility audit
2. Verify all text meets WCAG AA (4.5:1)
3. Check button contrast in all states
```

### Step 6: Performance Testing

**Chrome DevTools Performance Tab:**
1. Record page load
2. Verify no layout shifts (CLS = 0)
3. Check paint events during resize
4. Ensure smooth 60fps transitions

**Lighthouse Audit:**
```bash
npm run build
npm start
```

Run Lighthouse on booth page:
- Performance: Should maintain ≥90
- Accessibility: Should maintain 100
- Best Practices: Should maintain ≥90

### Step 7: Cross-Browser Testing

Test in these browsers (latest 2 versions):
- [ ] Chrome (desktop)
- [ ] Safari (desktop)
- [ ] Firefox (desktop)
- [ ] Edge (desktop)
- [ ] Safari (iOS - iPad/iPhone)
- [ ] Chrome (Android tablet)

### Step 8: Device Testing

**High Priority Devices:**
- [ ] iPad (768px × 1024px) - Portrait
- [ ] iPad (1024px × 768px) - Landscape
- [ ] iPad Pro 11" (834px × 1194px) - Portrait
- [ ] iPad Pro 11" (1194px × 834px) - Landscape
- [ ] iPhone 14 Pro Max (430px × 932px) - Landscape

**Medium Priority:**
- [ ] Desktop at 80% zoom (effective 800px width)
- [ ] Desktop split-screen (720px width)
- [ ] Surface Pro (720px × 1280px)

---

## Testing Checklist

### Visual Testing

- [ ] Logo displays correctly at all breakpoints
- [ ] Company name scales smoothly (28px → 32px → 40px)
- [ ] Tagline scales smoothly (16px → 18px → 20px)
- [ ] Buttons are full-width on mobile (0-767px)
- [ ] Buttons switch to horizontal at 768px
- [ ] Both buttons always visible at all widths
- [ ] No horizontal scrolling at any breakpoint
- [ ] Spacing feels balanced and consistent
- [ ] Border and shadow maintain consistency

### Interaction Testing

- [ ] Primary button hover state works (blue → navy)
- [ ] Secondary button hover state works (white → blue)
- [ ] Hover transform (slight lift) appears smooth
- [ ] Focus indicators visible on keyboard tab
- [ ] Focus indicators have proper contrast
- [ ] Active state (press) shows immediate feedback
- [ ] External link icons visible and proportional
- [ ] Text truncation works if CTA text is very long
- [ ] Cursor changes to pointer on hover

### Responsive Behavior

- [ ] Layout doesn't jump when resizing across 768px breakpoint
- [ ] Typography transitions smoothly during resize
- [ ] No content overlap at any breakpoint
- [ ] Buttons stack on mobile (0-767px)
- [ ] Buttons go horizontal on tablet/desktop (768px+)
- [ ] Company info section grows to fill available space
- [ ] Logo maintains fixed size and doesn't shrink

### Accessibility Testing

- [ ] Tab order is logical (logo skip → company name → buttons)
- [ ] Focus indicators are visible (blue 2px outline)
- [ ] Focus indicators have 2px offset from element
- [ ] ARIA labels announce button purpose and new tab behavior
- [ ] Screen reader announces all content in correct order
- [ ] Color contrast passes WCAG AA on all text
- [ ] Touch targets are ≥44px (currently 56px height)
- [ ] Keyboard users can activate all buttons (Enter/Space)
- [ ] `prefers-reduced-motion` is respected (no animations)

### Performance Testing

- [ ] No Cumulative Layout Shift (CLS = 0)
- [ ] Smooth 60fps transitions on button hover
- [ ] No janky reflows during window resize
- [ ] Lighthouse Performance score ≥90
- [ ] Lighthouse Accessibility score = 100
- [ ] First Contentful Paint <1.5s
- [ ] Largest Contentful Paint <2.5s

### Edge Cases

- [ ] Very long company names wrap correctly
- [ ] Very long taglines wrap without overflow
- [ ] Missing logo shows fallback (initials) correctly
- [ ] Very long CTA button text truncates with ellipsis
- [ ] Single CTA button (if applicable) displays correctly
- [ ] Browser zoom (125%, 150%, 200%) works without breaking

---

## Rollback Plan

If issues arise after deployment:

### Quick Rollback (Emergency)

```bash
git revert HEAD
git push origin main
```

### Selective Rollback (Partial Fix)

If only specific breakpoints are problematic:

1. Identify which change caused the issue
2. Revert only that specific line change
3. Re-test and re-deploy

### Safe Rollback Strategy

Before deploying, tag the current production version:

```bash
git tag -a v1.0-pre-booth-fix -m "Version before BoothHeader responsive fix"
git push origin v1.0-pre-booth-fix
```

If rollback needed:
```bash
git checkout v1.0-pre-booth-fix
npm run build
# Deploy previous version
```

---

## Common Issues & Solutions

### Issue 1: Buttons Still Cut Off at 768px

**Symptoms:** Secondary button disappears or gets cut off right at 768px breakpoint

**Diagnosis:**
- Check browser DevTools computed styles
- Verify `md:flex-row` is actually applying at 768px
- Check for conflicting CSS rules

**Solution:**
```tsx
// Ensure button container has these exact classes:
className="flex flex-col gap-3 w-full md:w-auto md:flex-row"

// If still issues, try explicitly setting flex-wrap:
className="flex flex-col gap-3 w-full md:w-auto md:flex-row md:flex-wrap"
```

### Issue 2: Typography Doesn't Scale Smoothly

**Symptoms:** Text size jumps abruptly, doesn't transition smoothly

**Diagnosis:**
- Check if transition CSS is being overridden
- Verify all responsive classes are in correct order (mobile-first)

**Solution:**
Add explicit transition to globals.css:
```css
h1, p {
  transition-property: font-size, line-height;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
}
```

### Issue 3: Layout Shifts During Resize

**Symptoms:** Content jumps or flickers when resizing across breakpoints

**Diagnosis:**
- Use Chrome DevTools Performance tab to record resize
- Look for layout recalculation events

**Solution:**
Ensure all flex containers have explicit gap values:
```tsx
// Always specify gap, even if zero:
className="flex flex-col gap-6 md:flex-row md:gap-6"
```

### Issue 4: Buttons Too Wide on Large Desktop

**Symptoms:** Buttons stretch too wide on screens >1440px

**Diagnosis:**
- Check if `max-w` constraint is missing or being overridden

**Solution:**
```tsx
// Add explicit max-width on xl: breakpoint:
className="... md:max-w-[240px] xl:max-w-[280px]"
```

### Issue 5: Focus Indicator Not Visible

**Symptoms:** Keyboard focus outline doesn't appear or is barely visible

**Diagnosis:**
- Check if `outline-none` is being applied globally
- Verify browser default focus styles aren't disabled

**Solution:**
Ensure `focus-visible:outline-2` is present and not overridden:
```tsx
className="... focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
```

---

## Performance Benchmarks

### Before Fix

| Metric | Desktop | Tablet | Mobile |
|--------|---------|--------|--------|
| CLS | 0.08 | 0.15 | 0.02 |
| FCP | 1.2s | 1.6s | 2.1s |
| LCP | 2.1s | 2.8s | 3.4s |
| Accessibility | 100 | 100 | 100 |

**Known Issues:**
- CLS of 0.15 on tablet due to button wrapping at 640-900px
- Layout reflows cause jank during resize

### After Fix (Expected)

| Metric | Desktop | Tablet | Mobile |
|--------|---------|--------|--------|
| CLS | 0.00 | 0.00 | 0.00 |
| FCP | 1.2s | 1.6s | 2.1s |
| LCP | 2.1s | 2.8s | 3.4s |
| Accessibility | 100 | 100 | 100 |

**Improvements:**
- CLS reduced to 0 (no layout shifts)
- Smooth resize behavior across all breakpoints
- Maintained excellent accessibility score

---

## Post-Deployment Monitoring

### Metrics to Track (First 2 Weeks)

**User Engagement:**
- Secondary CTA click rate (expect +15-20% on tablet devices)
- Bounce rate on booth pages (expect -10% reduction)
- Time on page (expect +5-10% increase)

**Technical Metrics:**
- CLS score in Google Analytics (expect 0.0)
- Error rate (should remain at 0%)
- Page load times (should remain stable)

**Device Breakdown:**
Monitor specific improvements on:
- iPad (both orientations)
- Android tablets
- Desktop at 80% zoom

### Analytics Events to Monitor

```javascript
// Track CTA clicks by viewport width
window.addEventListener('click', (e) => {
  if (e.target.matches('.booth-cta-button')) {
    gtag('event', 'booth_cta_click', {
      viewport_width: window.innerWidth,
      button_type: e.target.dataset.buttonType,
      breakpoint: getBreakpoint() // 'mobile', 'tablet', 'desktop'
    });
  }
});
```

### User Feedback Collection

Add temporary analytics to track:
- Clicks on buttons at different breakpoints
- Time to click after page load
- Viewport widths when interactions occur

**Expected Improvements:**
- Faster time-to-click on tablet devices
- Reduced drop-off at booth pages
- Increased secondary CTA engagement

---

## Documentation Updates

### Files to Update After Deployment

1. **Component Documentation:**
   - Update `/components/booths/README.md` with new responsive behavior
   - Document new breakpoint strategy for future components

2. **Design System:**
   - Add to `/design-documentation/design-system/components/buttons.md`
   - Reference as example of responsive button strategy

3. **Changelog:**
   - Add entry to `CHANGELOG.md` with version number and changes
   - Link to this documentation for details

4. **Storybook (if applicable):**
   - Update BoothHeader stories with new responsive breakpoints
   - Add viewport annotations for 768px, 1024px breakpoints

---

## Success Criteria

### Definition of Done

- [ ] All code changes applied and tested locally
- [ ] Visual testing passed at all critical breakpoints (375, 619, 640, 719, 768, 888, 1024, 1440)
- [ ] Accessibility testing passed (keyboard, screen reader, contrast)
- [ ] Performance testing passed (CLS = 0, no layout shifts)
- [ ] Cross-browser testing passed (Chrome, Safari, Firefox, Edge)
- [ ] Device testing passed on real iPad and iPhone
- [ ] Code reviewed by at least one other developer
- [ ] QA approval received
- [ ] Documentation updated
- [ ] Deployed to staging environment
- [ ] Staging testing passed
- [ ] Deployed to production
- [ ] Post-deployment monitoring active
- [ ] No user-reported issues within 48 hours

### Sign-Off Requirements

**Development:** _______________________ Date: _______

**QA:** _______________________ Date: _______

**Design:** _______________________ Date: _______

**Product:** _______________________ Date: _______

---

## Additional Resources

**Related Documentation:**
- [Feature README](./README.md)
- [Screen States Specification](./screen-states.md)
- [User Journey Mapping](./user-journey.md)
- [Design System Buttons](../../design-system/components/buttons.md)

**External Resources:**
- [Tailwind CSS Breakpoints](https://tailwindcss.com/docs/responsive-design)
- [WCAG 2.1 AA Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Layout Shift Guide](https://web.dev/cls/)
- [MDN Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

**Tools:**
- [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)
- [BrowserStack](https://www.browserstack.com/) - For cross-browser testing
- [Axe DevTools](https://www.deque.com/axe/devtools/) - For accessibility testing
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) - For performance monitoring

---

## Contact & Support

**Questions or Issues:**
- Design Questions: Contact UX/UI team via #design-system Slack channel
- Technical Issues: Contact development team via #frontend-support Slack channel
- Accessibility Concerns: Contact accessibility team via #a11y Slack channel

**Emergency Rollback:**
Contact on-call engineer immediately if critical production issues arise.

---

**Last Updated:** 2025-11-09
**Version:** 1.0
**Author:** UX/UI Design Team + Frontend Engineering
**Status:** Ready for Implementation
