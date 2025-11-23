---
title: Video Player Screen States
description: Visual specifications for all video player states and user interactions
feature: Session Video Player
last-updated: 2025-11-23
version: 1.0
related-files:
  - ./README.md
  - ./responsive-specifications.md
  - ./implementation.md
status: approved
---

# Video Player Screen States

## State Overview

The video player section has five distinct states that users will encounter during their journey:

1. **Placeholder State (Pre-Registration)** - First-time visitors before clicking CTA
2. **Loading State** - Brief transition when initializing video player
3. **Playing State (Post-Registration)** - Active video playback
4. **Paused State** - User paused video mid-playback
5. **Completed State** - Video finished, showing completion message

Each state has specific visual specifications across mobile, tablet, and desktop breakpoints.

## State 1: Placeholder State (Pre-Registration)

### Purpose
Display before user registers, showing what content is available and prompting action.

### Visual Specifications

#### Mobile (320px-767px)

**Container:**
- Background: White (#FFFFFF)
- Border: 1px solid Neutral-1 (#E5E9F1)
- Border Radius: 12px (rounded-xl)
- Padding: 16px (p-4)
- Margin Bottom: 24px (mb-6)
- Shadow: 0 4px 24px rgba(34, 34, 76, 0.08)

**Section Title:**
- Text: "Watch Session"
- Font Size: 24px (text-2xl)
- Font Weight: 700 (Bold)
- Color: Navy (#22224C)
- Alignment: Center
- Margin Bottom: 16px (mb-4)

**Video Placeholder:**
- Aspect Ratio: 16:9 (aspect-video)
- Background: Linear gradient from Blue (#0092FF) to Navy (#22224C)
- Gradient Direction: Bottom-right (to-br)
- Border Radius: 8px (rounded-lg)
- Width: 100% (container width minus padding)

**Placeholder Content:**
- Layout: Flex column, centered horizontally and vertically
- Padding: 16px (p-4)
- Gap between elements: 16px (gap-4)
- Text Color: White (#FFFFFF)

**Placeholder Text:**
- Text: "Video player coming soon"
- Font Size: 18px (text-lg)
- Font Weight: 400 (Regular)
- Color: White (#FFFFFF)
- Alignment: Center

**Primary CTA Button (Below Video):**
- Text: "Watch with Your Class"
- Position: Below video container
- Width: 100% (w-full)
- Height: 56px
- Padding: 16px horizontal (px-4)
- Background: Blue (#0092FF)
- Text Color: White (#FFFFFF)
- Font Size: 16px (text-base)
- Font Weight: 600 (Semibold)
- Border Radius: 6px (rounded-md)
- Margin Top: 16px (mt-4)
- Transition: 200ms ease

**Button Hover State:**
- Background: Blue with 90% opacity
- Cursor: Pointer
- No transform/scale (avoid touch issues on mobile)

**Helper Text:**
- Text: "Click 'Watch with Your Class' to register and start the video."
- Font Size: 14px (text-sm)
- Font Weight: 400 (Regular)
- Color: Neutral-4 (#65738B)
- Alignment: Center
- Margin Top: 16px (mt-4)
- Max Width: 100%

#### Desktop (768px+)

**Container:**
- Background: White (#FFFFFF)
- Border: 1px solid Neutral-1 (#E5E9F1)
- Border Radius: 12px (rounded-xl)
- Padding: 32px (p-8)
- Margin Bottom: 32px (mb-8)
- Shadow: 0 4px 24px rgba(34, 34, 76, 0.08)
- Max Width: 1024px (max-w-5xl)

**Section Title:**
- Text: "Watch Session"
- Font Size: 30px (text-3xl)
- Font Weight: 700 (Bold)
- Color: Navy (#22224C)
- Alignment: Center
- Margin Bottom: 24px (mb-6)

**Video Placeholder:**
- Aspect Ratio: 16:9 (aspect-video)
- Background: Linear gradient from Blue to Navy (to-br)
- Border Radius: 8px (rounded-lg)
- Max Width: 960px (optional constraint for ultra-wide)

**Placeholder Content:**
- Layout: Flex column, centered horizontally and vertically
- Padding: 24px (p-6)
- Gap between elements: 24px (gap-6)

**Placeholder Text:**
- Text: "Video player coming soon"
- Font Size: 20px (text-xl)
- Color: White (#FFFFFF)

**Primary CTA Button (Inside Video Area):**
- Text: "Watch with Your Class"
- Position: Centered within video placeholder
- Width: Auto with minimum 280px (min-w-[280px])
- Height: 56px
- Padding: 40px horizontal (px-10)
- Background: Blue (#0092FF)
- Display: Inline-flex (hidden on mobile, visible on desktop)

**Helper Text:**
- Font Size: 14px (text-sm)
- Margin Top: 24px (mt-6)
- Max Width: 600px with centered alignment

### Interaction Specifications

**Button Click:**
1. User clicks "Watch with Your Class" button
2. Button shows active state (slight color shift)
3. Registration modal slides up from bottom (400ms cubic-bezier easing)
4. Background overlay fades in (300ms)
5. Focus moves to first form field in modal

**Keyboard Navigation:**
1. Tab to button → Focus indicator appears (2px blue outline, 2px offset)
2. Press Enter → Same as click interaction
3. Press Space → Same as click interaction

**Screen Reader:**
- Button announces: "Watch with Your Class, button"
- Helper text read after button context
- Video placeholder region identified as "Video player area"

## State 2: Loading State

### Purpose
Brief transition state while video player initializes after successful registration.

### Visual Specifications

**Duration:** 300-2000ms (depends on network speed and Vimeo response)

**Mobile & Desktop:**

**Video Container:**
- Aspect Ratio: 16:9 (maintained during loading)
- Background: Navy (#22224C)
- Border Radius: 8px (rounded-lg)

**Loading Indicator:**
- Position: Centered horizontally and vertically
- Type: Spinner or skeleton loader

**Option A: Spinner (Animated)**
```tsx
<div className="flex items-center justify-center h-full">
  <div className="animate-spin rounded-full h-12 w-12 border-4 border-light-blue border-t-blue"></div>
</div>
```
- Size: 48px × 48px (h-12 w-12)
- Border: 4px solid Light Blue (#C6E7FF)
- Border Top: 4px solid Blue (#0092FF) (creates spinning effect)
- Animation: 1s linear infinite rotation

**Option B: Skeleton Loader (Shimmer)**
```tsx
<div className="h-full bg-gradient-to-r from-navy via-blue to-navy bg-[length:200%_100%] animate-[shimmer_2s_infinite]"></div>
```
- Background: Animated gradient (Navy → Blue → Navy)
- Animation: Shimmer effect (2s infinite)

**Loading Text (Optional):**
- Text: "Loading video..."
- Font Size: 16px (text-base)
- Color: White (#FFFFFF)
- Position: Below spinner
- Margin Top: 16px

**Behavior:**
- No button visible during loading
- Helper text remains visible below video container
- Focus remains on page (not trapped)
- Screen reader announces: "Loading video player"

### Interaction Specifications

**During Loading:**
- No user interactions available in video area
- Escape key does NOT close loading state
- User can still navigate away from page if needed
- Loading state auto-dismisses when video ready

## State 3: Playing State (Post-Registration)

### Purpose
Active video playback after successful registration and player initialization.

### Visual Specifications

**Mobile & Desktop:**

**Video Container:**
- Aspect Ratio: 16:9 (maintained)
- Border Radius: 8px (rounded-lg)
- Overflow: Hidden

**Vimeo Player Iframe:**
- Width: 100% (w-full)
- Height: 100% (h-full)
- Position: Fills container completely
- Border: None (frameBorder="0")
- Allow: "autoplay; fullscreen; picture-in-picture"

**Video Controls:**
- Vimeo native controls (play/pause, volume, timeline, fullscreen)
- Position: Overlay at bottom of video (Vimeo default)
- Visible on hover (desktop) or tap (mobile)
- Colors: Vimeo default with custom accent color (Blue #0092FF if configurable)

**Section Title:**
- Remains visible above video
- No changes from placeholder state

**Helper Text:**
- Text changes from registration prompt to:
  - "Video is now playing. Enjoy the session!"
  - OR remove entirely (video controls are self-explanatory)

**Full-Screen Mode:**
- User clicks fullscreen button in Vimeo controls
- Video expands to fill entire screen
- Native browser fullscreen API
- Exit: Press Esc or click Vimeo exit fullscreen button

### Interaction Specifications

**Auto-Play Behavior:**
1. Video begins playing immediately after loading (autoplay=1 in Vimeo URL)
2. Sound: Auto-muted on mobile (browser requirement), unmuted on desktop
3. User must tap unmute icon on mobile to hear audio

**Playback Controls:**
- Play/Pause: Click anywhere on video or use play button
- Timeline: Click/drag to seek to specific timestamp
- Volume: Hover over volume icon, drag slider
- Fullscreen: Click fullscreen icon (bottom-right)
- Picture-in-Picture: Click PiP icon (if browser supports)

**Keyboard Controls (When Video Focused):**
- Space: Play/Pause
- Left/Right Arrows: Seek backward/forward 5 seconds
- Up/Down Arrows: Increase/decrease volume
- F: Toggle fullscreen
- M: Mute/unmute

**Video Tracking (Background):**
- Track watch duration every 5 seconds
- Calculate completion percentage (current time / total duration)
- Send tracking data to `/api/update-viewing-event` endpoint
- No visual indicator to user (happens silently)

**Screen Reader:**
- Vimeo player announces: "Video player"
- Controls announce current state ("Play button" / "Pause button")
- Timeline announces current timestamp and total duration

## State 4: Paused State

### Purpose
User manually paused video during playback.

### Visual Specifications

**Mobile & Desktop:**

**Video Container:**
- Aspect Ratio: 16:9 (maintained)
- Current frame visible (frozen)

**Vimeo Player:**
- Shows last frame before pause
- Play button overlay appears in center (large, semi-transparent)
- Controls remain visible at bottom
- Timeline shows current position

**Play Button Overlay:**
- Size: 80px × 80px (large, easy to tap/click)
- Background: Semi-transparent Navy (rgba(34, 34, 76, 0.8))
- Icon: White play triangle
- Position: Centered on video
- Hover State: Background opacity increases to 1.0 (desktop only)

**Timeline:**
- Current position marker visible
- Watched portion: Blue (#0092FF)
- Unwatched portion: Light Blue (#C6E7FF)
- Buffered portion: Neutral-2 (#D9DFEA)

### Interaction Specifications

**Resume Playback:**
1. Click play button overlay → Video resumes from current position
2. Click anywhere on video → Same as play button
3. Press Space (keyboard) → Same as play button

**Seek While Paused:**
1. Click on timeline → Video seeks to that position (remains paused)
2. Thumbnail preview shows on hover (Vimeo feature)

**Tracking Behavior:**
- No tracking updates sent while paused
- Resume tracking when playback continues

## State 5: Completed State

### Purpose
Video finished playing (reached 100% completion).

### Visual Specifications

**Mobile & Desktop:**

**Video Container:**
- Aspect Ratio: 16:9 (maintained)
- Shows last frame of video OR Vimeo end card (if configured)

**Vimeo End Card (Default):**
- Replay button (centered)
- Related videos (if channel configured)
- Share buttons (optional)

**Custom Completion Overlay (Optional Enhancement):**

```tsx
<div className="absolute inset-0 bg-gradient-to-br from-blue to-navy bg-opacity-95 flex flex-col items-center justify-center text-white p-6">
  {/* Completion Icon */}
  <svg className="w-16 h-16 mb-4 text-light-blue" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>

  {/* Completion Message */}
  <h3 className="text-2xl font-bold mb-2">Session Complete!</h3>
  <p className="text-center mb-6 max-w-md">
    Thank you for sharing this career exploration session with your class.
  </p>

  {/* Action Buttons */}
  <div className="flex flex-col sm:flex-row gap-4">
    <button className="btn-primary">
      Watch Another Session
    </button>
    <button className="btn-secondary">
      Explore Sponsor Booths
    </button>
  </div>
</div>
```

**Completion Overlay Specs:**
- Background: Blue-to-Navy gradient with 95% opacity
- Checkmark Icon: 64px × 64px, Light Blue color
- Heading: "Session Complete!" (text-2xl, bold)
- Message: Centered, max-width 448px
- Buttons: Stacked on mobile (flex-col), side-by-side on desktop (sm:flex-row)
- Padding: 24px (p-6)

**Button: "Watch Another Session"**
- Style: btn-primary (Blue background, White text)
- Action: Navigate to /sessions page

**Button: "Explore Sponsor Booths"**
- Style: btn-secondary (Light Blue background, Navy text)
- Action: Navigate to /booths page

### Interaction Specifications

**Replay Video:**
1. Click replay button → Video restarts from beginning
2. No new registration required (cookie still valid)
3. Creates new viewing_event record in database (separate session)

**Navigate Away:**
1. Click "Watch Another Session" → Navigate to sessions page
2. Click "Explore Sponsor Booths" → Navigate to booths page
3. User can return to session detail page anytime (cookie persists 7 days)

**Completion Tracking:**
- POST to `/api/complete-viewing-event` endpoint
- Mark viewing_event as completed (completed = true, completed_at = timestamp)
- Track that user watched ≥80% of video (completion threshold)

## Responsive State Comparison

### Mobile (320px-767px)

| State | Video Height | Button Position | Primary Action |
|-------|--------------|-----------------|----------------|
| Placeholder | ~162-396px (16:9 ratio) | Below video | "Watch with Your Class" |
| Loading | ~162-396px | Hidden | Spinner visible |
| Playing | ~162-396px | Inside Vimeo controls | Play/Pause |
| Paused | ~162-396px | Center overlay | Resume |
| Completed | ~162-396px | Inside custom overlay | Replay / Navigate |

### Desktop (768px+)

| State | Video Height | Button Position | Primary Action |
|-------|--------------|-----------------|----------------|
| Placeholder | ~396-540px (16:9 ratio) | Inside video area | "Watch with Your Class" |
| Loading | ~396-540px | Hidden | Spinner visible |
| Playing | ~396-540px | Inside Vimeo controls | Play/Pause |
| Paused | ~396-540px | Center overlay | Resume |
| Completed | ~396-540px | Inside custom overlay | Replay / Navigate |

## State Transition Animations

### Placeholder → Loading
- Duration: 300ms
- Easing: ease-in-out
- Effect: Fade out button + fade in spinner

```css
@keyframes fade-out-fade-in {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
```

### Loading → Playing
- Duration: 400ms
- Easing: ease-in
- Effect: Fade in Vimeo iframe

```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Playing → Paused
- Duration: Instant (no animation)
- Effect: Show play button overlay immediately

### Paused → Playing
- Duration: 200ms
- Easing: ease-out
- Effect: Fade out play button overlay

### Playing → Completed
- Duration: 500ms
- Easing: ease-in-out
- Effect: Fade in completion overlay

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Error States (Edge Cases)

### Error State: Video Load Failed

**Trigger:** Vimeo player fails to initialize (network error, invalid video ID, etc.)

**Visual Specifications:**
```tsx
<div className="aspect-video rounded-lg bg-gradient-to-br from-blue to-navy flex flex-col items-center justify-center text-white p-6 gap-4">
  {/* Error Icon */}
  <svg className="w-16 h-16 text-light-blue" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>

  {/* Error Message */}
  <h3 className="text-xl font-bold">Video Unavailable</h3>
  <p className="text-center max-w-md text-sm">
    We're having trouble loading this video. Please check your internet connection and try again.
  </p>

  {/* Retry Button */}
  <button className="btn-primary mt-2" onClick={handleRetry}>
    Retry
  </button>
</div>
```

**Error Message Specs:**
- Error Icon: 64px × 64px, Light Blue color
- Heading: "Video Unavailable" (text-xl, bold)
- Message: Centered, max-width 448px, smaller font (text-sm)
- Retry Button: btn-primary style
- Background: Same gradient as placeholder (maintains visual consistency)

### Error State: Registration Failed

**Trigger:** Form submission to `/api/submit-registration` fails

**Behavior:**
- Modal remains open (doesn't close)
- Error message appears at top of modal (not in video section)
- User can retry form submission or close modal
- Video section state: Remains in placeholder state

## Accessibility Notes for All States

### Focus Management
- **Placeholder State:** Button is focusable
- **Loading State:** No focusable elements (spinner is decorative)
- **Playing State:** Video player controls are focusable
- **Paused State:** Play button overlay is focusable
- **Completed State:** Replay and navigation buttons are focusable

### Screen Reader Announcements
- **Placeholder:** "Watch Session heading, Video player area, Watch with Your Class button"
- **Loading:** "Loading video player" (live region announcement)
- **Playing:** "Video playing: [Session Title]" (live region announcement)
- **Paused:** "Video paused" (live region announcement)
- **Completed:** "Video completed" (live region announcement) + completion message text
- **Error:** "Error loading video" (live region announcement) + error message text

### ARIA Live Regions
```tsx
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
  className="sr-only"
>
  {statusMessage}
</div>
```

**Status Messages:**
- Loading: "Loading video player"
- Playing: "Video is now playing"
- Paused: "Video paused at [timestamp]"
- Completed: "Video completed. Duration: [total time]"
- Error: "Error: Video failed to load"

---

Last Updated: 2025-11-23
Version: 1.0
Status: Approved for Implementation

**Next Steps:**
1. Implement placeholder state with responsive improvements (Priority 1)
2. Add loading state with spinner or skeleton loader (Priority 2)
3. Integrate Vimeo player for playing state (Priority 3)
4. Design and implement completion overlay (Priority 4)
5. Add error handling with retry mechanism (Priority 5)
