---
title: Video Player Implementation Guide
description: Developer handoff documentation with code examples and implementation steps
feature: Session Video Player
last-updated: 2025-11-23
version: 1.0
related-files:
  - ./README.md
  - ./responsive-specifications.md
  - ./screen-states.md
dependencies:
  - React 18
  - Next.js 14 App Router
  - Tailwind CSS
  - Vimeo Player SDK
status: approved
---

# Video Player Implementation Guide

## Overview

This document provides step-by-step implementation guidance for developers to update the VideoSection component with responsive improvements. The changes are CSS-focused and require minimal JavaScript modifications.

## Current Implementation Analysis

**File:** `/components/session/VideoSection.tsx`

**Current Issues:**
1. Fixed height container (`h-96` = 384px) doesn't scale proportionally
2. Button positioned inside cramped video area on mobile
3. No aspect ratio enforcement for video content
4. Spacing doesn't follow 8px grid system on mobile

**Lines to Modify:** 37-55 (container structure and styling)

## Implementation Steps

### Step 1: Update Container Structure

**Current Code (Lines 37-55):**
```tsx
<div className="bg-white rounded-xl border border-[#E5E9F1] p-8 mb-6 shadow-[0_4px_24px_rgba(34,34,76,0.08)]">
  <h2 className="text-2xl font-bold text-navy mb-4 text-center">
    Watch Session
  </h2>
  <div className="bg-gradient-to-br from-blue to-navy rounded-lg h-96 flex items-center justify-center text-white">
    <div className="text-center">
      <p className="text-xl mb-4">Video player coming soon</p>
      <button
        onClick={handleWatchClick}
        className="btn-primary"
      >
        Watch Session
      </button>
    </div>
  </div>
  <p className="text-sm text-gray-600 mt-4 text-center">
    Click &ldquo;Watch Session&rdquo; to register and start the video.
  </p>
</div>
```

**Updated Code (Responsive):**
```tsx
<div className="bg-white rounded-xl border border-[#E5E9F1] p-4 sm:p-6 md:p-8 mb-6 lg:mb-8 shadow-[0_4px_24px_rgba(34,34,76,0.08)]">
  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 md:mb-6 text-center">
    Watch Session
  </h2>

  {/* Video Container - 16:9 aspect ratio */}
  <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue to-navy">
    <div className="flex flex-col items-center justify-center h-full text-white p-4 md:p-6 gap-4 md:gap-6">
      <p className="text-lg md:text-xl">Video player coming soon</p>

      {/* Button - Hidden on mobile, shown on desktop inside video area */}
      <button
        onClick={handleWatchClick}
        className="btn-primary hidden md:inline-flex md:min-w-[280px]"
      >
        Watch with Your Class
      </button>
    </div>
  </div>

  {/* Button - Visible on mobile below video, hidden on desktop */}
  <div className="mt-4 md:mt-6 md:hidden">
    <button
      onClick={handleWatchClick}
      className="btn-primary w-full"
    >
      Watch with Your Class
    </button>
  </div>

  <p className="text-sm text-gray-600 mt-4 md:mt-6 text-center">
    Click &ldquo;Watch with Your Class&rdquo; to register and start the video.
  </p>
</div>
```

**Key Changes:**
1. Container padding: `p-8` → `p-4 sm:p-6 md:p-8` (responsive scaling)
2. Video container: `h-96` → `aspect-video` (maintains 16:9 ratio)
3. Button positioning: Conditional display based on screen size
4. Spacing: Updated to follow 8px grid across breakpoints
5. Typography: Responsive scaling for title (text-2xl → md:text-3xl)

### Step 2: Alternative Implementation (Single Button)

If you prefer a single button element (DRY principle), use this approach:

```tsx
<div className="bg-white rounded-xl border border-[#E5E9F1] p-4 sm:p-6 md:p-8 mb-6 lg:mb-8 shadow-[0_4px_24px_rgba(34,34,76,0.08)]">
  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 md:mb-6 text-center">
    Watch Session
  </h2>

  {/* Video Container - 16:9 aspect ratio */}
  <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue to-navy mb-4 md:mb-0">
    <div className="flex flex-col items-center justify-center h-full text-white p-4 md:p-6 gap-4 md:gap-6">
      <p className="text-lg md:text-xl">Video player coming soon</p>
    </div>
  </div>

  {/* Single Button - Positioned below video on mobile, inside on desktop */}
  <div className="flex justify-center md:-mt-20">
    <button
      onClick={handleWatchClick}
      className="btn-primary w-full sm:w-auto sm:min-w-[320px] md:min-w-[280px]"
    >
      Watch with Your Class
    </button>
  </div>

  <p className="text-sm text-gray-600 mt-4 md:mt-6 text-center">
    Click &ldquo;Watch with Your Class&rdquo; to register and start the video.
  </p>
</div>
```

**Note:** This uses negative margin on desktop (`-mt-20`) to overlay button on video area. Choose based on your preference for code maintainability vs. DOM structure.

### Step 3: Update Button Text

**Change:** "Watch Session" → "Watch with Your Class"

This aligns with:
- Platform terminology (matches registration modal context)
- User intent (explicitly mentions classroom context)
- Browse-first philosophy (clear value proposition)

**Find and Replace:**
- Old: `Watch Session`
- New: `Watch with Your Class`

### Step 4: Verify Tailwind Configuration

Ensure your `tailwind.config.ts` includes aspect-ratio utilities:

```typescript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      aspectRatio: {
        'video': '16 / 9', // Explicitly define if not using default
      },
    },
  },
  // ... rest of config
}
```

**Note:** Tailwind 3.0+ includes `aspect-video` (16/9) by default, so this is optional.

### Step 5: Test Browser Support

**Modern Browsers (CSS aspect-ratio):**
- Chrome 88+
- Firefox 89+
- Safari 15+
- Edge 88+

**Fallback for Older Browsers (Optional):**

If you need to support older browsers, add a fallback class:

```css
/* app/globals.css */
@layer utilities {
  .aspect-video-fallback {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 ratio */
    height: 0;
    overflow: hidden;
  }

  .aspect-video-fallback > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
```

Then conditionally apply:
```tsx
<div className="aspect-video aspect-video-fallback rounded-lg ...">
```

**Recommendation:** Skip fallback for Career Launch Platform. Target audience (Ontario educators) will primarily use modern devices with up-to-date browsers in 2025.

## Code Comparison

### Before (Fixed Height)
```tsx
<div className="bg-gradient-to-br from-blue to-navy rounded-lg h-96 flex items-center justify-center text-white">
  <div className="text-center">
    <p className="text-xl mb-4">Video player coming soon</p>
    <button onClick={handleWatchClick} className="btn-primary">
      Watch Session
    </button>
  </div>
</div>
```

**Issues:**
- `h-96` (384px) fixed height doesn't adapt to container width
- On 320px mobile: 288px wide × 384px tall = awkward 0.75:1 ratio (not 16:9)
- Button cramped inside fixed-height container on small screens

### After (Aspect Ratio)
```tsx
<div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue to-navy">
  <div className="flex flex-col items-center justify-center h-full text-white p-4 md:p-6 gap-4 md:gap-6">
    <p className="text-lg md:text-xl">Video player coming soon</p>
    <button onClick={handleWatchClick} className="btn-primary hidden md:inline-flex">
      Watch with Your Class
    </button>
  </div>
</div>
```

**Improvements:**
- `aspect-video` maintains 16:9 at all widths
- On 320px mobile: 288px wide × 162px tall = perfect 16:9 ratio
- Button moved outside video area on mobile (better touch targets)
- Padding scales responsively (p-4 → md:p-6)

## Vimeo Player Integration (Future)

When Vimeo player is integrated, replace placeholder content with iframe:

```tsx
// VideoSection.tsx
const [videoLoaded, setVideoLoaded] = useState(false);

// After successful registration
const handleFormSubmit = (data: any) => {
  console.log('Registration complete!', data);
  setIsModalOpen(false);
  setVideoLoaded(true); // Trigger video load
};

return (
  <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue to-navy">
    {!videoLoaded ? (
      // Placeholder state
      <div className="flex flex-col items-center justify-center h-full text-white p-4 md:p-6 gap-4 md:gap-6">
        <p className="text-lg md:text-xl">Video player coming soon</p>
        <button
          onClick={handleWatchClick}
          className="btn-primary hidden md:inline-flex"
        >
          Watch with Your Class
        </button>
      </div>
    ) : (
      // Vimeo player state
      <iframe
        src={`https://player.vimeo.com/video/${session.vimeo_video_id}?autoplay=1`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        title={`Video: ${session.title}`}
      />
    )}
  </div>
);
```

**Important:**
- `aspect-video` container remains constant (no layout shift)
- iframe fills container with `w-full h-full`
- `autoplay=1` starts video immediately after registration
- `title` attribute for accessibility

## Accessibility Implementation

### ARIA Labels

```tsx
<section aria-labelledby="video-section-title">
  <h2 id="video-section-title" className="...">
    Watch Session
  </h2>

  <div
    className="aspect-video ..."
    role="region"
    aria-label="Video player area"
  >
    {/* Video content */}
  </div>

  <button
    onClick={handleWatchClick}
    className="btn-primary"
    aria-label="Watch with your class - opens registration form"
  >
    Watch with Your Class
  </button>
</section>
```

### Focus Management

Ensure focus returns to button after modal closes:

```tsx
const buttonRef = useRef<HTMLButtonElement>(null);

const handleModalClose = () => {
  setIsModalOpen(false);
  // Return focus to trigger button
  setTimeout(() => {
    buttonRef.current?.focus();
  }, 100);
};

// In JSX
<button
  ref={buttonRef}
  onClick={handleWatchClick}
  className="btn-primary"
>
  Watch with Your Class
</button>

<MultiStepModal
  isOpen={isModalOpen}
  onClose={handleModalClose}
  // ... other props
/>
```

### Keyboard Navigation

Test tab order:
1. Tab into page → Focus on "Watch with Your Class" button
2. Enter → Opens registration modal
3. Tab through modal fields
4. Escape → Closes modal, returns focus to button

## Performance Optimization

### Lazy Load Vimeo SDK

Only load Vimeo Player SDK when needed:

```tsx
// utils/loadVimeoPlayer.ts
let vimeoPlayerLoaded = false;

export async function loadVimeoPlayer(): Promise<void> {
  if (vimeoPlayerLoaded) return;

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    script.onload = () => {
      vimeoPlayerLoaded = true;
      resolve();
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// VideoSection.tsx
const handleFormSubmit = async (data: any) => {
  setIsModalOpen(false);

  // Load Vimeo SDK before initializing player
  await loadVimeoPlayer();
  setVideoLoaded(true);
};
```

**Benefit:** Saves ~200KB on initial page load, loads only when user commits to watching.

### Preconnect to Vimeo

Add to `app/layout.tsx` head:

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**Benefit:** Reduces latency for Vimeo player initialization by ~100-200ms.

## Testing Checklist

### Visual Regression Testing

**Before Deployment:**
- [ ] Screenshot baseline: Session detail page at 320px, 768px, 1024px, 1440px
- [ ] Compare after changes: Verify no unintended layout shifts
- [ ] Check button alignment and spacing across all breakpoints
- [ ] Verify video container maintains 16:9 ratio at all widths

### Functional Testing

**Manual Testing:**
- [ ] Click "Watch with Your Class" button on mobile (touch)
- [ ] Click button on desktop (mouse)
- [ ] Press Enter on focused button (keyboard)
- [ ] Verify modal opens correctly after each interaction
- [ ] Check button remains visible and accessible at all screen sizes
- [ ] Test on actual devices (not just browser DevTools)

**Cross-Browser Testing:**
- [ ] Chrome (latest) - Windows/Mac/Android
- [ ] Safari (latest) - Mac/iOS
- [ ] Firefox (latest) - Windows/Mac
- [ ] Edge (latest) - Windows
- [ ] Mobile Safari - iPhone 12/13/14
- [ ] Chrome Mobile - Android

### Accessibility Testing

**Automated Tools:**
- [ ] Run Lighthouse accessibility audit (target: 100/100)
- [ ] Run axe DevTools scan (0 violations)
- [ ] Check color contrast with WebAIM tool

**Manual Testing:**
- [ ] Tab through page with keyboard only
- [ ] Verify focus indicators visible at all times
- [ ] Test with VoiceOver (Mac/iOS)
- [ ] Test with NVDA or JAWS (Windows)
- [ ] Check button announces correctly ("Watch with your class, button")
- [ ] Verify helper text is readable by screen reader

### Performance Testing

**Metrics to Measure:**
- [ ] Layout Shift (CLS): Target <0.1
- [ ] Largest Contentful Paint (LCP): Target <2.5s
- [ ] First Input Delay (FID): Target <100ms
- [ ] Video initialization time: Target <2s after button click

**Tools:**
- Chrome DevTools (Performance tab)
- Lighthouse (Performance audit)
- WebPageTest.org (real-world testing)

## Troubleshooting

### Issue: Aspect ratio not working in Safari 14 or older

**Solution:** Add explicit width and height attributes to iframe:

```tsx
<iframe
  src="..."
  width="1920"
  height="1080"
  className="w-full h-full"
/>
```

### Issue: Button overlaps video content on some screen sizes

**Solution:** Use the two-button approach (one for mobile, one for desktop) instead of negative margin technique.

### Issue: Layout shift when video loads

**Cause:** Container dimensions change during video initialization

**Solution:** Ensure `aspect-video` class is on parent container BEFORE video loads. The 16:9 ratio should be defined in placeholder state, not added when video initializes.

### Issue: Video player doesn't fill container on mobile

**Solution:** Ensure iframe has `w-full h-full` classes and parent container has `aspect-video` with no height constraints.

```tsx
<div className="aspect-video rounded-lg overflow-hidden">
  <iframe className="w-full h-full" ... />
</div>
```

## Deployment Checklist

**Pre-Deployment:**
- [ ] Code review completed
- [ ] All tests passing (unit, integration, e2e if applicable)
- [ ] Accessibility audit: 100/100 Lighthouse score
- [ ] Performance audit: All Core Web Vitals green
- [ ] Cross-browser testing completed
- [ ] Mobile device testing completed
- [ ] QA approval received

**Post-Deployment:**
- [ ] Monitor analytics for modal open rate (target: >90%)
- [ ] Check error logs for any browser compatibility issues
- [ ] Verify Core Web Vitals in production (Google Search Console)
- [ ] Gather user feedback from Ontario educators
- [ ] Monitor video play rate after registration (target: >90%)

## Rollback Plan

If critical issues arise post-deployment:

1. **Immediate Rollback:** Revert to previous commit with fixed height (`h-96`)
2. **Git Command:**
   ```bash
   git revert <commit-hash>
   git push origin main
   ```
3. **Vercel:** Deployment will auto-trigger on push to main
4. **Communication:** Notify team via Slack #career-launch channel

**Critical Issues Definition:**
- Modal not opening on >5% of page views
- Video player not loading after registration
- Button not visible or accessible on any major browser
- Accessibility score drops below 90/100
- Core Web Vital failures (CLS >0.25, LCP >4s)

## Related Files

**Files Modified:**
- `/components/session/VideoSection.tsx` - Primary component changes

**Files to Review (No Changes):**
- `/components/registration/MultiStepModal.tsx` - Registration modal (unchanged)
- `/app/sessions/[slug]/page.tsx` - Session detail page (imports VideoSection)
- `/app/globals.css` - Global styles (aspect-video utility included)
- `/styles/design-tokens.css` - Design tokens (no new tokens needed)

**Files for Future Integration:**
- `/utils/loadVimeoPlayer.ts` - Vimeo SDK lazy loading (create when needed)
- `/lib/vimeo-tracking.ts` - Video progress tracking (create when needed)

## Additional Resources

**Documentation:**
- [Tailwind CSS Aspect Ratio](https://tailwindcss.com/docs/aspect-ratio)
- [Vimeo Player SDK Docs](https://developer.vimeo.com/player/sdk)
- [MDN: aspect-ratio CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

**Design Files:**
- [README.md](./README.md) - Feature overview and design decisions
- [responsive-specifications.md](./responsive-specifications.md) - Detailed breakpoint specs
- [screen-states.md](./screen-states.md) - Visual states and interactions

---

Last Updated: 2025-11-23
Version: 1.0
Status: Ready for Implementation

**Estimated Implementation Time:** 1-2 hours (including testing)
**Complexity:** Low (CSS-focused changes, minimal JavaScript)
**Risk Level:** Low (isolated component, easily reversible)
