---
title: Video Player Design - Quick Reference
description: One-page summary of key design decisions and implementation details
feature: Session Video Player
last-updated: 2025-11-23
version: 1.0
status: approved
---

# Video Player Design - Quick Reference

## TL;DR: What Changed

**Problem:** Fixed-height video container (384px) doesn't scale properly on mobile devices, creating awkward proportions and cramped button placement.

**Solution:** Replace fixed height with 16:9 aspect ratio that scales proportionally, reposition button below video on mobile, maintain responsive spacing using 8px grid.

## Key Design Decisions

| Decision | Value | Rationale |
|----------|-------|-----------|
| **Aspect Ratio** | 16:9 (aspect-video) | Standard for video content, matches Vimeo native format |
| **Button Position (Mobile)** | Below video container | Better touch targets, less cramped layout |
| **Button Position (Desktop)** | Inside video placeholder | Visual focus, maintains hierarchy |
| **Container Padding** | 16px (mobile) → 32px (desktop) | Follows 8px grid, adapts to screen size |
| **Video Max Width** | 960px (desktop) | Prevents excessive width on ultra-wide displays |
| **Button Text** | "Watch with Your Class" | Explicit classroom context, matches registration modal |

## Implementation Checklist

### Critical Changes

- [ ] Replace `h-96` with `aspect-video` on video container
- [ ] Add responsive padding: `p-4 sm:p-6 md:p-8`
- [ ] Create two button positions (mobile below, desktop inside)
- [ ] Update button text to "Watch with Your Class"
- [ ] Verify spacing follows 8px grid (mb-4, mb-6, mt-4, etc.)
- [ ] Test on mobile Safari and Chrome Android

### CSS Classes to Update

**Before:**
```css
className="h-96"
```

**After:**
```css
className="aspect-video"
```

**Complete Container:**
```typescript
"bg-white rounded-xl border border-[#E5E9F1] p-4 sm:p-6 md:p-8 mb-6 lg:mb-8"
```

**Complete Video Container:**
```typescript
"aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue to-navy"
```

## Responsive Breakpoints

| Breakpoint | Container Padding | Button Width | Video Height (at 1024px width) |
|------------|------------------|--------------|-------------------------------|
| Mobile (320px) | 16px | 100% | 162px |
| Tablet (768px) | 32px | Auto (min 280px) | 396px |
| Desktop (1024px+) | 32px | Auto (min 280px) | 540px |

## Accessibility Requirements

- **Touch Targets:** 56px button height (exceeds 44px minimum) ✓
- **Color Contrast:** All combinations verified (4.5:1+) ✓
- **Keyboard Navigation:** Tab → Enter/Space to open modal ✓
- **Focus Indicators:** 2px blue outline with 2px offset ✓
- **Screen Readers:** ARIA labels on all interactive elements ✓

## Testing Priorities

### Must Test
1. iPhone SE (375px) - smallest common device
2. iPad (768px) - tablet portrait
3. Desktop (1440px) - standard laptop

### Verify
- [ ] Video container maintains 16:9 at all widths
- [ ] Button never overlaps or gets cut off
- [ ] No horizontal scrolling at any viewport
- [ ] Modal opens correctly on button click
- [ ] Layout Shift (CLS) < 0.1

## File Locations

**Primary File:**
- `/components/session/VideoSection.tsx` (lines 37-55)

**Documentation:**
- `/design-documentation/features/session-video-player/README.md` - Overview
- `/design-documentation/features/session-video-player/responsive-specifications.md` - Detailed specs
- `/design-documentation/features/session-video-player/implementation.md` - Developer guide
- `/design-documentation/features/session-video-player/screen-states.md` - All UI states

## Code Snippet (Ready to Copy)

```tsx
<div className="bg-white rounded-xl border border-[#E5E9F1] p-4 sm:p-6 md:p-8 mb-6 lg:mb-8 shadow-[0_4px_24px_rgba(34,34,76,0.08)]">
  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 md:mb-6 text-center">
    Watch Session
  </h2>

  {/* Video Container - 16:9 aspect ratio */}
  <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue to-navy">
    <div className="flex flex-col items-center justify-center h-full text-white p-4 md:p-6 gap-4 md:gap-6">
      <p className="text-lg md:text-xl">Video player coming soon</p>

      {/* Desktop: Button inside video */}
      <button
        onClick={handleWatchClick}
        className="btn-primary hidden md:inline-flex md:min-w-[280px]"
      >
        Watch with Your Class
      </button>
    </div>
  </div>

  {/* Mobile: Button below video */}
  <div className="mt-4 md:hidden">
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

## Expected Outcomes

**User Experience:**
- ✓ Video container scales proportionally on all devices
- ✓ Button is easily tappable on mobile (full-width)
- ✓ Visual hierarchy improved with better spacing
- ✓ Professional aesthetic maintained across breakpoints

**Performance:**
- ✓ No layout shifts during page load
- ✓ CSS-only solution (no JavaScript overhead)
- ✓ Fast rendering with native aspect-ratio property

**Accessibility:**
- ✓ 100/100 Lighthouse accessibility score
- ✓ WCAG 2.1 AA compliant
- ✓ Keyboard and screen reader optimized

## Common Mistakes to Avoid

❌ **Don't** use fixed heights (h-64, h-96, etc.) for video containers
✓ **Do** use aspect-ratio for proper scaling

❌ **Don't** use same button position for all screen sizes
✓ **Do** adapt button placement based on available space

❌ **Don't** forget to test on actual devices
✓ **Do** verify on real iPhone/iPad, not just browser DevTools

❌ **Don't** ignore the 8px spacing grid
✓ **Do** use consistent spacing values (multiples of 8px)

❌ **Don't** remove focus indicators for aesthetics
✓ **Do** maintain visible focus states for accessibility

## Questions?

**Design System:** See `/design-documentation/design-system/style-guide.md`
**myBlueprint Brand:** Official colors and typography in design tokens
**Implementation Help:** Full developer guide in `./implementation.md`

---

Last Updated: 2025-11-23
Status: Ready for Implementation
Estimated Time: 1-2 hours
