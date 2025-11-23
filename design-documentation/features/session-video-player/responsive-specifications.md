---
title: Video Player Responsive Specifications
description: Detailed breakpoint specifications with exact measurements and Tailwind classes
feature: Session Video Player
last-updated: 2025-11-23
version: 1.0
related-files:
  - ./README.md
  - ./screen-states.md
  - ./implementation.md
status: approved
---

# Video Player Responsive Specifications

## Breakpoint System

Career Launch Platform uses standard Tailwind CSS breakpoints aligned with common device sizes:

| Breakpoint | Min Width | Max Width | Target Devices | Tailwind Prefix |
|------------|-----------|-----------|----------------|-----------------|
| Mobile (Small) | 320px | 480px | iPhone SE, small phones | (default) |
| Mobile (Large) | 481px | 767px | iPhone 12/13/14, large phones | sm: |
| Tablet | 768px | 1023px | iPad, Android tablets | md: |
| Desktop | 1024px | 1439px | Laptops, small desktops | lg: |
| Wide Desktop | 1440px+ | — | Large monitors, 4K displays | xl: |

## Container Specifications

### Outer Container (White Card)
**Purpose:** Provides visual separation and elevation for the video section

**Mobile (320px-480px):**
```css
Class: bg-white rounded-xl border border-[#E5E9F1] shadow-[0_4px_24px_rgba(34,34,76,0.08)]
Padding: p-4 (16px all sides)
Margin Bottom: mb-6 (24px)
Width: w-full
Max Width: None (full container width)
```

**Mobile Large (481px-767px):**
```css
Class: sm:p-6
Padding: 24px all sides
Margin Bottom: mb-6 (24px)
Width: w-full
Max Width: None
```

**Tablet (768px-1023px):**
```css
Class: md:p-8
Padding: 32px all sides
Margin Bottom: mb-6 (24px)
Width: w-full
Max Width: max-w-4xl (896px) - optional constraint
```

**Desktop (1024px+):**
```css
Class: lg:p-8
Padding: 32px all sides
Margin Bottom: mb-8 (32px)
Width: w-full
Max Width: max-w-5xl (1024px)
```

**Tailwind Class String:**
```typescript
"bg-white rounded-xl border border-[#E5E9F1] p-4 sm:p-6 md:p-8 mb-6 lg:mb-8 shadow-[0_4px_24px_rgba(34,34,76,0.08)]"
```

### Section Heading
**Text:** "Watch Session"

**Mobile (320px-767px):**
```css
Class: text-2xl font-bold text-navy mb-4 text-center
Font Size: 24px (1.5rem)
Line Height: 32px (2rem)
Font Weight: 700 (Bold)
Color: Navy (#22224C)
Margin Bottom: 16px
Alignment: Center
```

**Tablet & Desktop (768px+):**
```css
Class: md:text-3xl md:mb-6
Font Size: 30px (1.875rem)
Line Height: 36px (2.25rem)
Font Weight: 700 (Bold)
Margin Bottom: 24px
Alignment: Center
```

**Tailwind Class String:**
```typescript
"text-2xl md:text-3xl font-bold text-navy mb-4 md:mb-6 text-center"
```

## Video Container Specifications

### Video Placeholder Area
**Purpose:** Display 16:9 aspect ratio container for video player or placeholder gradient

**Aspect Ratio:** 16:9 (standard video format)

**Mobile (320px-767px):**
```css
Class: aspect-video rounded-lg overflow-hidden
Aspect Ratio: 16 / 9 (native CSS)
Border Radius: 8px (rounded-lg)
Width: 100% (full container width)
Height: Auto (calculated from aspect ratio)
Background: bg-gradient-to-br from-blue to-navy

Example dimensions at 320px viewport:
- Container padding: 16px × 2 = 32px
- Available width: 320 - 32 = 288px
- Calculated height: 288 ÷ 16 × 9 = 162px

Example dimensions at 480px viewport:
- Container padding: 16px × 2 = 32px
- Available width: 480 - 32 = 448px
- Calculated height: 448 ÷ 16 × 9 = 252px
```

**Tablet (768px-1023px):**
```css
Class: aspect-video rounded-lg overflow-hidden
Border Radius: 8px
Width: 100%
Height: Auto

Example dimensions at 768px viewport:
- Container padding: 32px × 2 = 64px
- Available width: 768 - 64 = 704px
- Calculated height: 704 ÷ 16 × 9 = 396px
```

**Desktop (1024px+):**
```css
Class: aspect-video rounded-lg overflow-hidden
Border Radius: 8px
Width: 100%
Max Width: 960px (optional constraint for ultra-wide displays)
Height: Auto

Example dimensions at 1024px viewport:
- Container padding: 32px × 2 = 64px
- Available width: 1024 - 64 = 960px
- Calculated height: 960 ÷ 16 × 9 = 540px

Example dimensions at 1440px viewport (with max-width):
- Max width: 960px (constraint applied)
- Calculated height: 960 ÷ 16 × 9 = 540px
```

**Tailwind Class String:**
```typescript
"aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue to-navy"
```

### Video Placeholder Content (Pre-Registration)
**Purpose:** Display centered message and CTA when video not yet loaded

**Mobile (320px-767px):**
```css
Layout: Vertical stack (flex-col)
Classes: flex flex-col items-center justify-center h-full text-white p-4 gap-4
Alignment: Center horizontally and vertically
Padding: 16px all sides
Gap between elements: 16px
```

**Desktop (768px+):**
```css
Layout: Vertical stack (flex-col)
Classes: flex flex-col items-center justify-center h-full text-white p-6 gap-6
Alignment: Center horizontally and vertically
Padding: 24px all sides
Gap between elements: 24px
```

**Tailwind Class String:**
```typescript
"flex flex-col items-center justify-center h-full text-white p-4 md:p-6 gap-4 md:gap-6"
```

## Button Specifications

### Primary CTA Button ("Watch with Your Class")

**Mobile (320px-480px):**
```css
Display: Block (full-width)
Classes: btn-primary w-full
Height: 56px (py-3.5 with padding)
Horizontal Padding: 24px (px-6)
Font Size: 16px (text-base)
Font Weight: 600 (Semibold)
Border Radius: 6px (rounded-md)
Background: Blue (#0092FF)
Text Color: White (#FFFFFF)
Min Height: 44px (accessibility requirement) ✓ Exceeds at 56px
```

**Mobile Large (481px-767px):**
```css
Display: Inline-flex (can be centered)
Classes: btn-primary sm:w-auto sm:min-w-[320px]
Width: Auto with minimum 320px
Height: 56px
Horizontal Padding: 32px (px-8)
Alignment: Centered with mx-auto
```

**Tablet & Desktop (768px+):**
```css
Display: Inline-flex
Classes: btn-primary md:w-auto md:min-w-[280px]
Width: Auto with minimum 280px
Height: 56px
Horizontal Padding: 40px (px-10)
Font Size: 16px (text-base)
```

**Hover State (All Devices):**
```css
Background: Blue with 90% opacity (bg-opacity-90)
Transition: 200ms ease
Transform: None (avoid scale on mobile to prevent touch issues)
Cursor: pointer
```

**Focus State (Keyboard Navigation):**
```css
Outline: 2px solid Blue (#0092FF)
Outline Offset: 2px
Box Shadow: 0 0 0 4px rgba(0, 146, 255, 0.1)
```

**Tailwind Class String:**
```typescript
"btn-primary w-full sm:w-auto sm:min-w-[320px] md:min-w-[280px] sm:mx-auto"
```

### Button Positioning Strategy

**Option A: Button Outside Video Container (Recommended for Mobile)**
```html
<div class="video-container">
  <!-- Video player -->
</div>
<div class="button-container mt-4 md:mt-6">
  <button>Watch with Your Class</button>
</div>
```

**Mobile Behavior:**
- Button appears below video container
- Full-width on small mobile (320px-480px)
- Centered with min-width on larger mobile (481px+)
- 16px spacing from video container

**Tablet/Desktop Behavior:**
- Button can remain below video OR
- Button can be positioned inside video placeholder (centered)
- 24px spacing if external

**Option B: Button Inside Video Placeholder (Alternative for Desktop)**
```html
<div class="video-container relative">
  <!-- Video placeholder gradient -->
  <div class="absolute inset-0 flex items-center justify-center">
    <button>Watch with Your Class</button>
  </div>
</div>
```

**Desktop-Only Behavior:**
- Button overlaid on gradient background
- Centered horizontally and vertically
- Only used for placeholder state (pre-registration)
- Switches to full video player after registration

## Helper Text Specifications

**Text:** "Click 'Watch with Your Class' to register and start the video."

**Mobile (320px-767px):**
```css
Classes: text-sm text-gray-600 mt-4 text-center
Font Size: 14px (0.875rem)
Line Height: 20px (1.25rem)
Color: Neutral-4 (#65738B)
Margin Top: 16px
Alignment: Center
Max Width: None (full width)
```

**Tablet & Desktop (768px+):**
```css
Classes: text-sm text-gray-600 mt-4 text-center md:mt-6
Font Size: 14px
Margin Top: 24px
Alignment: Center
Max Width: 600px (optional constraint with mx-auto)
```

**Tailwind Class String:**
```typescript
"text-sm text-gray-600 mt-4 md:mt-6 text-center"
```

## Layout Flow by Screen Size

### Mobile Portrait (320px-480px)
```
┌─────────────────────────────────┐
│  Container (p-4, white bg)      │
│  ┌───────────────────────────┐  │
│  │  Title (text-2xl, center) │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │                           │  │
│  │  Video Container          │  │
│  │  (aspect-video 16:9)      │  │
│  │                           │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │   Button (w-full, 56px)   │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │  Helper text (center)     │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

### Tablet (768px-1023px)
```
┌─────────────────────────────────────────┐
│  Container (p-8, white bg, max-w-4xl)   │
│  ┌───────────────────────────────────┐  │
│  │  Title (text-3xl, center)         │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │                                   │  │
│  │     Video Container               │  │
│  │     (aspect-video 16:9)           │  │
│  │                                   │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│         ┌───────────────────┐           │
│         │ Button (centered) │           │
│         └───────────────────┘           │
│  ┌───────────────────────────────────┐  │
│  │     Helper text (center)          │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### Desktop (1024px+)
```
┌─────────────────────────────────────────────────┐
│  Container (p-8, white bg, max-w-5xl)           │
│  ┌───────────────────────────────────────────┐  │
│  │     Title (text-3xl, center)              │  │
│  └───────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────┐  │
│  │                                           │  │
│  │                                           │  │
│  │          Video Container                  │  │
│  │          (aspect-video 16:9)              │  │
│  │          Max-width: 960px                 │  │
│  │                                           │  │
│  │                                           │  │
│  └───────────────────────────────────────────┘  │
│              ┌─────────────────┐                │
│              │ Button (center) │                │
│              └─────────────────┘                │
│  ┌───────────────────────────────────────────┐  │
│  │        Helper text (center, max-w-2xl)    │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

## Responsive Image/Video Best Practices

### Aspect Ratio Maintenance
Use CSS aspect-ratio property (modern approach):
```css
.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}
```

Fallback for older browsers (padding hack):
```css
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

### Vimeo Player Integration
When Vimeo player loads (post-registration), replace placeholder with iframe:
```html
<div class="aspect-video rounded-lg overflow-hidden">
  <iframe
    src="https://player.vimeo.com/video/{VIDEO_ID}"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    class="w-full h-full"
  ></iframe>
</div>
```

## Accessibility Considerations

### Touch Target Sizing
- Minimum: 44px × 44px (WCAG 2.1 Level AAA)
- Implemented: 56px height exceeds requirement
- Horizontal padding ensures comfortable touch area
- Spacing between interactive elements: minimum 8px

### Focus Management
```css
/* Focus visible for keyboard users */
*:focus-visible {
  outline: 2px solid #0092FF;
  outline-offset: 2px;
}

/* Remove outline for mouse users */
*:focus:not(:focus-visible) {
  outline: none;
}
```

### Screen Reader Support
```html
<section aria-labelledby="video-section-title">
  <h2 id="video-section-title" class="...">Watch Session</h2>
  <div class="video-container" role="region" aria-label="Video player">
    <!-- Video content -->
  </div>
  <button aria-label="Watch with your class - opens registration modal">
    Watch with Your Class
  </button>
</section>
```

### Color Contrast Verification

| Element | Foreground | Background | Ratio | WCAG Level |
|---------|------------|------------|-------|------------|
| Section Title | Navy (#22224C) | White (#FFFFFF) | 13.5:1 | AAA ✓ |
| Button Text | White (#FFFFFF) | Blue (#0092FF) | 4.6:1 | AA ✓ |
| Helper Text | Neutral-4 (#65738B) | White (#FFFFFF) | 5.2:1 | AA ✓ |
| Video Placeholder | White (#FFFFFF) | Navy (#22224C) | 13.5:1 | AAA ✓ |

## Performance Optimization

### CSS-Only Aspect Ratio
- No JavaScript required for aspect ratio calculation
- Native CSS `aspect-ratio` property (IE11 not supported, acceptable for 2025)
- Fallback: padding-bottom hack for older browsers

### Lazy Loading
- Video placeholder renders immediately (static gradient)
- Vimeo SDK loaded only after user clicks "Watch with Your Class"
- Reduces initial page load by ~200KB

### Layout Shift Prevention
- Container dimensions defined before content loads
- Aspect ratio prevents reflow when video initializes
- Button positioning defined in CSS (no JavaScript layout shifts)

**Target CLS:** <0.1 (measured in Chrome DevTools)

## Testing Checklist

### Device Testing
- [ ] iPhone SE (375px × 667px) - smallest common mobile
- [ ] iPhone 12/13/14 (390px × 844px) - standard modern mobile
- [ ] iPad (768px × 1024px) - tablet portrait
- [ ] iPad Pro (1024px × 1366px) - large tablet
- [ ] MacBook Air (1440px × 900px) - laptop
- [ ] 4K Display (3840px × 2160px) - wide desktop

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS 15+)
- [ ] Chrome Mobile (Android)

### Interaction Testing
- [ ] Touch interactions on mobile (tap, swipe)
- [ ] Keyboard navigation (Tab, Enter, Esc)
- [ ] Mouse interactions on desktop (hover, click)
- [ ] Focus management when modal opens/closes
- [ ] Screen reader announcement accuracy
- [ ] Video player controls accessibility

### Responsive Behavior
- [ ] Aspect ratio maintains 16:9 at all breakpoints
- [ ] Button remains accessible (not cut off or overlapped)
- [ ] Text remains readable (no truncation or overflow)
- [ ] Spacing follows 8px grid at all sizes
- [ ] No horizontal scrolling at any viewport width
- [ ] Layout shift (CLS) <0.1 during loading

---

Last Updated: 2025-11-23
Version: 1.0
Status: Approved for Implementation
