---
title: Section Component Specifications
description: Detailed design specifications for all 7 booth section components
feature: Booth Detail Page - Section Components
last-updated: 2025-11-07
version: 1.0.0
status: approved
---

# Section Component Specifications

## Overview

This document provides comprehensive design specifications for all 7 section components that compose booth detail pages. Each section includes visual design, layout structure, sizing, colors, typography, interactions, and accessibility requirements.

---

## Table of Contents

1. [BoothHeader](#1-boothheader)
2. [VideoSection](#2-videosection)
3. [EngagementActivity](#3-engagementactivity-platinum-only)
4. [ResourceCards](#4-resourcecards)
5. [SessionSlides](#5-sessionslides-platinum-only)
6. [CompanyStory](#6-companystory-about-us)
7. [ContactInfo](#7-contactinfo)

---

## 1. BoothHeader

### Purpose
Full-width header establishing booth identity with logo, branding, and primary CTAs.

### Visual Design

```
┌────────────────────────────────────────────────────────────────────┐
│  [Logo]    Company Name                     [Primary CTA Button]  │
│            "Tagline text here"              [Secondary CTA]        │
└────────────────────────────────────────────────────────────────────┘
```

### Layout Structure

**Desktop Layout:**
```
┌─────┬───────────────────────────┬──────────────────┐
│Logo │ Title & Tagline           │ CTAs (right)     │
│80px │ (flex-grow)               │ (flex-shrink-0)  │
└─────┴───────────────────────────┴──────────────────┘
```

**Mobile Layout (stacked):**
```
┌────────────────────┐
│      Logo          │
│   (centered)       │
├────────────────────┤
│   Company Name     │
│   Tagline          │
├────────────────────┤
│  [Primary CTA]     │
│  [Secondary CTA]   │
└────────────────────┘
```

### Sizing Specifications

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Container Height | auto (min 160px) | auto (min 140px) | auto |
| Logo Size | 80px × 80px | 64px × 64px | 64px × 64px |
| Logo Border Radius | 8px | 8px | 8px |
| Padding | 32px | 24px | 24px |
| Gap (logo to text) | 24px | 20px | 16px |
| Gap (text to CTAs) | 32px | 24px | 16px |

### Color Usage

```css
/* Container */
background: linear-gradient(135deg,
  rgba(0, 146, 255, 0.03) 0%,
  rgba(246, 246, 255, 1) 50%,
  rgba(198, 231, 255, 0.1) 100%
);
border: 2px solid var(--neutral-2);
border-radius: 12px;

/* Logo container */
background: white;
box-shadow: var(--shadow-sm);

/* For Platinum booths, add subtle glow */
.platinum .booth-header {
  border-color: rgba(0, 146, 255, 0.2);
  box-shadow: 0 0 0 1px rgba(0, 146, 255, 0.1);
}
```

### Typography Usage

```css
/* Company Name */
font-size: 32px; /* text-header-3 */
line-height: 48px;
font-weight: 900; /* black */
color: var(--brand-navy);

/* Tagline */
font-size: 20px; /* text-body-1 */
line-height: 32px;
font-weight: 400; /* regular */
color: var(--neutral-5);
```

### Button Specifications

**Primary CTA:**
```css
background: var(--primary-blue);
color: white;
padding: 12px 32px;
border-radius: 8px;
font-size: 16px;
font-weight: 600;
min-height: 48px;
box-shadow: 0 2px 8px rgba(0, 146, 255, 0.25);

/* Hover */
background: var(--brand-navy);
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(0, 146, 255, 0.35);
transition: all 0.2s ease;
```

**Secondary CTA:**
```css
background: white;
color: var(--primary-blue);
border: 2px solid var(--primary-blue);
padding: 12px 32px;
border-radius: 8px;
font-size: 16px;
font-weight: 600;
min-height: 48px;

/* Hover */
background: var(--light-blue);
border-color: var(--brand-navy);
color: var(--brand-navy);
transform: translateY(-2px);
transition: all 0.2s ease;
```

### Interactive States

**Default:**
- Logo displays with white background
- Title and tagline visible
- CTAs in default state

**Hover (CTA buttons):**
- Primary button: Background darkens to navy, lifts 2px
- Secondary button: Background changes to light blue
- Cursor changes to pointer

**Focus (keyboard navigation):**
```css
outline: 2px solid var(--primary-blue);
outline-offset: 4px;
```

**Loading:**
- Logo: Skeleton loader (shimmer animation)
- Text: Skeleton blocks for title and tagline
- CTAs: Disabled state with opacity 0.5

### Responsive Behavior

**Desktop (1024px+):**
- Horizontal layout: Logo | Title/Tagline | CTAs
- CTAs side by side

**Tablet (768-1023px):**
- Same horizontal layout
- Reduced spacing
- CTAs stack vertically if both present

**Mobile (<768px):**
- Vertical stack: Logo centered, then title/tagline centered, then CTAs full width
- Logo size reduced to 64px
- CTAs full width, stacked with 8px gap

### Accessibility Requirements

```html
<header
  role="banner"
  aria-label="Booth header for [Company Name]"
>
  <img
    src="[logo]"
    alt="[Company Name] logo"
    role="img"
  />
  <div>
    <h1 id="booth-title">[Company Name]</h1>
    <p aria-describedby="booth-title">[Tagline]</p>
  </div>
  <nav aria-label="Primary booth actions">
    <a
      href="[url]"
      class="btn-primary"
      aria-label="[Primary CTA text] for [Company Name]"
    >
      [Primary CTA]
    </a>
    <a
      href="[url]"
      class="btn-secondary"
      aria-label="[Secondary CTA text]"
    >
      [Secondary CTA]
    </a>
  </nav>
</header>
```

### TypeScript Props Interface

```typescript
interface BoothHeaderProps {
  logo: string
  name: string
  tagline: string
  primaryCTA: {
    text: string
    url: string
    type?: 'website' | 'careers' | 'contact' | 'application'
  }
  secondaryCTA?: {
    text: string
    url: string
    type?: 'website' | 'careers' | 'contact' | 'application'
  }
  tier: 'platinum' | 'standard'
  brandColors?: {
    primary: string
    secondary?: string
  }
}
```

---

## 2. VideoSection

### Purpose
Showcase company video content with embedded player and play functionality.

### Visual Design

```
┌─────────────────────────┐
│                         │
│    [Thumbnail Image]    │
│         or              │
│    [Video Player]       │
│                         │
│   [▶ Play Button]       │
│   (if thumbnail)        │
│                         │
└─────────────────────────┘
```

### Layout Structure

**Container:**
```css
width: 100%; /* fills grid column span */
height: 500px; /* desktop */
border-radius: 8px;
overflow: hidden;
position: relative;
```

### Sizing Specifications

| Breakpoint | Height | Aspect Ratio |
|------------|--------|--------------|
| Desktop | 500px | Auto (based on iframe) |
| Tablet | 400px | 16:9 preferred |
| Mobile | 300px | 16:9 preferred |

### States

**Thumbnail State (before play):**
```css
.video-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: var(--neutral-2);
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(0, 146, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 146, 255, 0.4);
}

.play-button svg {
  width: 32px;
  height: 32px;
  color: white;
  margin-left: 4px; /* optical centering */
}

.play-button:hover {
  transform: translate(-50%, -50%) scale(1.1);
  background: var(--brand-navy);
  box-shadow: 0 6px 24px rgba(0, 146, 255, 0.5);
}
```

**Loading State:**
```css
.video-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--neutral-1);
}

.video-loading::after {
  content: '';
  width: 40px;
  height: 40px;
  border: 4px solid var(--neutral-3);
  border-top-color: var(--primary-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

**Playing State:**
```css
.video-iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: black;
}
```

### Video Provider Support

**YouTube:**
```html
<iframe
  src="https://www.youtube.com/embed/[VIDEO_ID]?autoplay=1"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
/>
```

**Vimeo:**
```html
<iframe
  src="https://player.vimeo.com/video/[VIDEO_ID]?autoplay=1"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
/>
```

**Google Drive:**
```html
<iframe
  src="https://drive.google.com/file/d/[FILE_ID]/preview"
  allow="autoplay"
/>
```

### Interactive States

**Default (Thumbnail):**
- Show video thumbnail image
- Overlay large play button in center
- Subtle shadow on play button

**Hover (Thumbnail):**
- Play button scales to 110%
- Play button color darkens to navy
- Shadow increases
- Cursor: pointer

**Focus (Keyboard):**
```css
outline: 3px solid var(--primary-blue);
outline-offset: 4px;
```

**Playing:**
- Thumbnail hidden
- Iframe loads and autoplays
- Play button removed from DOM

**Error State:**
```css
.video-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: var(--neutral-1);
  color: var(--neutral-5);
  padding: 32px;
  text-align: center;
}

.video-error-icon {
  width: 48px;
  height: 48px;
  color: var(--neutral-4);
}
```

### Lazy Loading Implementation

```typescript
// Only load iframe when user clicks play
const handlePlayClick = () => {
  setIsPlaying(true)
  // Iframe renders, thumbnail removed
}

// Or: Load when section enters viewport (IntersectionObserver)
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setIsInViewport(true)
    }
  })
  observer.observe(videoRef.current)
}, [])
```

### Responsive Behavior

| Breakpoint | Container Span | Height | Play Button Size |
|------------|----------------|--------|------------------|
| Desktop | 4 cols | 500px | 80px |
| Tablet | 12 cols | 400px | 72px |
| Mobile | 12 cols | 300px | 64px |

### Accessibility Requirements

```html
<section
  className="video-section"
  aria-label="Company video"
>
  {!isPlaying ? (
    <>
      <img
        src={thumbnail}
        alt={`${title} video thumbnail`}
        role="presentation"
      />
      <button
        onClick={handlePlay}
        aria-label={`Play video: ${title}`}
        className="play-button"
      >
        <PlayIcon aria-hidden="true" />
      </button>
    </>
  ) : (
    <iframe
      src={embedUrl}
      title={title}
      aria-label={`Video player: ${title}`}
    />
  )}
</section>
```

**Screen Reader Considerations:**
- Announce video title when focused
- Announce "Play button" when button focused
- Announce "Video playing" when iframe loads

### TypeScript Props Interface

```typescript
interface VideoSectionProps {
  video: {
    url: string
    type: 'youtube' | 'vimeo' | 'google-drive' | 'custom'
    title: string
    description?: string
    thumbnail?: string
  }
  autoplay?: boolean
  lazyLoad?: boolean
}
```

---

## 3. EngagementActivity (Platinum Only)

### Purpose
Interactive content unique to Platinum booths: quizzes, forms, games, contests.

### Visual Design

```
┌───────────────────────────────────────────────┐
│  ╔════════════════════════════════════════╗  │
│  ║ 🎯 [Badge: PLATINUM EXCLUSIVE]         ║  │
│  ║                                        ║  │
│  ║    Activity Title                      ║  │
│  ║    Brief description text              ║  │
│  ║                                        ║  │
│  ║    [Embedded Interactive Content]      ║  │
│  ║    (Quiz, Form, Game, etc.)            ║  │
│  ║                                        ║  │
│  ║    [Primary CTA: "Enter to Win"]       ║  │
│  ║                                        ║  │
│  ║    Prize Info (if applicable)          ║  │
│  ╚════════════════════════════════════════╝  │
│                                               │
│  [Decorative gradient blobs - subtle]        │
└───────────────────────────────────────────────┘
```

### Layout Structure

**Container:**
```css
position: relative;
height: 500px;
border-radius: 8px;
overflow: hidden;
background: linear-gradient(
  135deg,
  rgba(0, 146, 255, 0.08) 0%,
  rgba(198, 231, 255, 0.15) 100%
);
border: 2px solid rgba(0, 146, 255, 0.2);
padding: 32px;
```

**Internal Structure:**
```
┌─────────────────────────────────────┐
│ Badge (top-left)                    │
├─────────────────────────────────────┤
│ Title (32px from top)               │
│ Description                         │
├─────────────────────────────────────┤
│ Embedded Content (iframe or custom)│
│ (flexible height, min 300px)       │
├─────────────────────────────────────┤
│ CTA Button (bottom, centered)      │
│ Prize Card (if applicable)          │
└─────────────────────────────────────┘
```

### Color Usage

```css
/* Container background */
background: linear-gradient(
  135deg,
  rgba(0, 146, 255, 0.08) 0%,
  rgba(198, 231, 255, 0.15) 100%
);
border: 2px solid rgba(0, 146, 255, 0.2);
box-shadow: 0 4px 20px rgba(0, 146, 255, 0.1);

/* Badge */
.platinum-badge {
  background: linear-gradient(
    90deg,
    var(--primary-blue),
    var(--brand-navy)
  );
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(0, 146, 255, 0.3);
}
```

### Typography Usage

```css
/* Title */
font-size: 24px; /* text-header-4 */
line-height: 36px;
font-weight: 900;
color: var(--brand-navy);
margin-bottom: 8px;

/* Description */
font-size: 16px; /* text-body-2 */
line-height: 28px;
font-weight: 400;
color: var(--neutral-5);
margin-bottom: 24px;

/* Prize text */
font-size: 14px;
line-height: 20px;
font-weight: 600;
color: var(--primary-blue);
```

### CTA Button (Activity-Specific)

```css
.activity-cta {
  background: var(--primary-blue);
  color: white;
  padding: 14px 40px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  min-height: 52px;
  box-shadow: 0 4px 12px rgba(0, 146, 255, 0.3);
  transition: all 0.2s ease;
}

.activity-cta:hover {
  background: var(--brand-navy);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 146, 255, 0.4);
}
```

### Prize Card (if applicable)

```css
.prize-card {
  background: white;
  border: 2px solid var(--light-blue);
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.prize-icon {
  width: 40px;
  height: 40px;
  color: var(--primary-blue);
}

.prize-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--brand-navy);
}

.prize-description {
  font-size: 14px;
  color: var(--neutral-5);
}
```

### Decorative Elements

```css
/* Decorative blobs (background) */
.engagement-activity::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle,
    rgba(0, 146, 255, 0.15),
    transparent
  );
  border-radius: 50%;
  pointer-events: none;
  animation: float 8s ease-in-out infinite;
}

.engagement-activity::after {
  content: '';
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 150px;
  height: 150px;
  background: radial-gradient(
    circle,
    rgba(198, 231, 255, 0.2),
    transparent
  );
  border-radius: 50%;
  pointer-events: none;
  animation: float 6s ease-in-out infinite reverse;
}
```

### Embed Types

**Skills Gap Quiz:**
- Custom React component with multiple-choice questions
- Progress bar showing completion
- Results screen with personalized recommendations

**Google Form:**
```html
<iframe
  src="[Google Form embed URL]"
  className="google-form-embed"
  title="[Form title]"
  style={{ width: '100%', minHeight: '400px', border: 'none' }}
/>
```

**Generic Iframe:**
```html
<iframe
  src="[Custom embed URL]"
  title="[Activity title]"
  allow="fullscreen"
  style={{ width: '100%', minHeight: '400px', border: 'none' }}
/>
```

### Interactive States

**Default:**
- Badge visible in top-left
- Title and description visible
- Embedded content loads (or shows placeholder)
- CTA button enabled

**Hover (CTA):**
- Button lifts 2px
- Background darkens
- Shadow increases

**Loading:**
- Show spinner in center of embed area
- CTA disabled with opacity 0.5

**Completed (if applicable):**
```css
.activity-completed {
  background: linear-gradient(
    135deg,
    rgba(34, 197, 94, 0.08),
    rgba(134, 239, 172, 0.15)
  );
  border-color: rgba(34, 197, 94, 0.3);
}

.activity-completed::before {
  content: '✓';
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  background: #22C55E;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
}
```

### Responsive Behavior

| Breakpoint | Span | Height | Padding |
|------------|------|--------|---------|
| Desktop | 8 cols | 500px | 32px |
| Tablet | 12 cols | 450px | 24px |
| Mobile | 12 cols | 350px | 20px |

### Accessibility Requirements

```html
<section
  className="engagement-activity"
  aria-label="Interactive activity: [Title]"
  role="region"
>
  <span
    className="platinum-badge"
    aria-label="Platinum exclusive feature"
  >
    Platinum Exclusive
  </span>

  <h3 id="activity-title">{title}</h3>
  <p id="activity-desc">{description}</p>

  <div
    className="activity-embed"
    aria-labelledby="activity-title"
    aria-describedby="activity-desc"
  >
    {/* Embedded content */}
  </div>

  <button
    className="activity-cta"
    aria-label={`${ctaText} for ${title}`}
  >
    {ctaText}
  </button>
</section>
```

### TypeScript Props Interface

```typescript
interface EngagementActivityProps {
  embedUrl: string
  title: string
  description: string
  embedType?: 'iframe' | 'skills-gap-quiz' | 'google-form'
  prize?: {
    title: string
    description: string
  }
  duration?: string
  ctaText?: string
  onComplete?: () => void
}
```

---

## 4. ResourceCards

### Purpose
Display downloadable resources (PDFs, links, documents, videos) in visually organized mosaic grid.

### Visual Design

```
┌───────────────────────────────────────────────┐
│  Resources & Downloads                        │
│  ┌────────────┬──────┬──────────────────────┐ │
│  │            │      │                      │ │
│  │   Large    │ Med  │      Large           │ │
│  │   Card     │ Card │      Card            │ │
│  │   (PDF)    │      │      (Video)         │ │
│  │            │      │                      │ │
│  ├────────────┼──────┼──────┬───────────────┤ │
│  │   Medium   │      │ Med  │    Medium     │ │
│  │   Card     │ Large│ Card │    Card       │ │
│  │            │      │      │               │ │
│  └────────────┴──────┴──────┴───────────────┘ │
└───────────────────────────────────────────────┘
```

### Layout Structure

**6x6 Internal Mosaic Grid:**
```css
.resource-cards-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 12px;
  height: 450px; /* desktop */
  background: var(--off-white);
  border: 2px solid var(--neutral-2);
  border-radius: 8px;
  padding: 20px;
}
```

**Card Size Variants:**

| Size | Grid Span | Dimensions | Use Case |
|------|-----------|------------|----------|
| Large | 3x3 (span 3 cols, 3 rows) | ~140px × 140px | Featured PDFs, videos |
| Medium | 2x3 or 3x2 | ~90px × 140px | Standard documents, links |
| Small | 2x2 | ~90px × 90px | Quick links, icons |

**Example Grid Layout (6 resources):**
```css
.resource-1 { grid-column: 1 / 4; grid-row: 1 / 4; } /* Large */
.resource-2 { grid-column: 4 / 6; grid-row: 1 / 4; } /* Medium vertical */
.resource-3 { grid-column: 6 / 7; grid-row: 1 / 4; } /* Medium vertical */
.resource-4 { grid-column: 1 / 3; grid-row: 4 / 7; } /* Medium */
.resource-5 { grid-column: 3 / 6; grid-row: 4 / 7; } /* Large */
.resource-6 { grid-column: 6 / 7; grid-row: 4 / 7; } /* Medium */
```

### Card Design

```css
.resource-card {
  background: white;
  border: 2px solid var(--neutral-2);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
}

.resource-card:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: var(--primary-blue);
  box-shadow: 0 8px 20px rgba(0, 146, 255, 0.15);
}

.resource-card:focus {
  outline: 3px solid var(--primary-blue);
  outline-offset: 2px;
}
```

### Resource Type Icons

**Color Coding by Type:**
```css
/* PDF */
.icon-pdf {
  color: #DC2626; /* red */
  background: rgba(220, 38, 38, 0.1);
}

/* Link */
.icon-link {
  color: var(--primary-blue);
  background: rgba(0, 146, 255, 0.1);
}

/* Document */
.icon-document {
  color: #8B5CF6; /* purple */
  background: rgba(139, 92, 246, 0.1);
}

/* Video */
.icon-video {
  color: #EF4444; /* red-orange */
  background: rgba(239, 68, 68, 0.1);
}
```

**Icon Container:**
```css
.resource-icon-container {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.resource-icon {
  width: 24px;
  height: 24px;
}
```

### Typography Usage

```css
/* Large cards */
.resource-card-large .resource-title {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: var(--brand-navy);
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.resource-card-large .resource-description {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: var(--neutral-5);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Medium/Small cards */
.resource-card-medium .resource-title {
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  -webkit-line-clamp: 2;
}

.resource-card-medium .resource-description {
  font-size: 12px;
  line-height: 16px;
  -webkit-line-clamp: 2;
}
```

### File Size Badge

```css
.file-size-badge {
  display: inline-block;
  padding: 4px 8px;
  background: var(--neutral-1);
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  color: var(--neutral-5);
  margin-top: auto;
}
```

### Section Header

```css
.resource-cards-header {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.resource-cards-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--brand-navy);
}

.resource-count {
  font-size: 14px;
  color: var(--neutral-4);
}
```

### Interactive States

**Default:**
- Card displays with icon, title, description, file size
- Border: neutral-2
- Shadow: none

**Hover:**
- Lift 4px with slight scale (1.02)
- Border changes to primary-blue
- Shadow appears (elevation increase)
- Cursor: pointer

**Focus (keyboard):**
- 3px blue outline with 2px offset
- No transform (prevents layout shift)

**Active (click):**
```css
.resource-card:active {
  transform: translateY(-2px) scale(1.0);
}
```

### Responsive Behavior

**Desktop (1024px+):**
- 6x6 mosaic grid as designed
- Height: 450px
- Gap: 12px

**Tablet (768-1023px):**
- Simplify to 3-column grid
- Each card: Equal height, auto rows
- Height: 400px

```css
@media (max-width: 1023px) {
  .resource-cards-container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    height: auto;
    min-height: 400px;
  }

  .resource-card {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
  }
}
```

**Mobile (<768px):**
- Single column stack
- Each card: Full width, auto height

```css
@media (max-width: 767px) {
  .resource-cards-container {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 16px;
    height: auto;
  }

  .resource-card {
    flex-direction: row;
    gap: 12px;
    padding: 12px;
  }

  .resource-icon-container {
    flex-shrink: 0;
  }
}
```

### Empty State

```css
.resource-cards-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 450px;
  color: var(--neutral-4);
  text-align: center;
}

.resource-cards-empty-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.resource-cards-empty-text {
  font-size: 16px;
  font-weight: 500;
}
```

### Accessibility Requirements

```html
<section
  className="resource-cards"
  aria-label="Resources and downloads"
>
  <h3 className="resource-cards-title">
    Resources & Downloads
  </h3>

  <div
    className="resource-cards-container"
    role="list"
  >
    {resources.map((resource, index) => (
      <a
        key={resource.url}
        href={resource.url}
        className="resource-card"
        target="_blank"
        rel="noopener noreferrer"
        role="listitem"
        aria-label={`${resource.type}: ${resource.title}. ${resource.fileSize || 'External link'}. Opens in new window.`}
      >
        <div className="resource-icon-container">
          <ResourceIcon type={resource.type} aria-hidden="true" />
        </div>
        <h4 className="resource-title">{resource.title}</h4>
        <p className="resource-description">{resource.description}</p>
        {resource.fileSize && (
          <span className="file-size-badge" aria-label={`File size: ${resource.fileSize}`}>
            {resource.fileSize}
          </span>
        )}
      </a>
    ))}
  </div>
</section>
```

### TypeScript Props Interface

```typescript
interface ResourceItem {
  title: string
  description: string
  url: string
  type: 'pdf' | 'link' | 'document' | 'video'
  fileSize?: string
}

interface ResourceCardsProps {
  resources: ResourceItem[]
  title?: string
  maxDisplay?: number
}
```

---

## 5. SessionSlides (Platinum Only)

### Purpose
Display embedded presentation slides from conference session for educational content.

### Visual Design

```
┌──────────────────────────────────────────────┐
│  📊 Session Presentation                     │
│  ┌────────────────────────────────────────┐ │
│  │                                        │ │
│  │    [Embedded Google Slides / PPT]     │ │
│  │                                        │ │
│  │    (Fullscreen toggle in corner)      │ │
│  │                                        │ │
│  └────────────────────────────────────────┘ │
│  Title: "Tech Careers 2025"                 │
│  Description: Interactive presentation...   │
└──────────────────────────────────────────────┘
```

### Layout Structure

```css
.session-slides-container {
  background: white;
  border: 2px solid var(--neutral-2);
  border-radius: 8px;
  padding: 20px;
  height: 450px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.slides-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.slides-iframe-container {
  flex: 1;
  border-radius: 4px;
  overflow: hidden;
  background: var(--neutral-1);
  position: relative;
}

.slides-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
```

### Header Design

```css
.slides-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.slides-icon {
  width: 32px;
  height: 32px;
  color: var(--primary-blue);
}

.slides-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--brand-navy);
}

.slides-metadata {
  display: flex;
  gap: 16px;
  font-size: 12px;
  color: var(--neutral-4);
  margin-top: 4px;
}

.fullscreen-toggle {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 2px solid var(--neutral-2);
  background: white;
  color: var(--neutral-5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.fullscreen-toggle:hover {
  border-color: var(--primary-blue);
  color: var(--primary-blue);
  background: var(--light-blue);
}
```

### Footer Info

```css
.slides-footer {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--neutral-2);
}

.slides-description {
  font-size: 14px;
  line-height: 20px;
  color: var(--neutral-5);
}
```

### Loading State

```css
.slides-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: var(--neutral-1);
  color: var(--neutral-4);
}

.slides-loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--neutral-3);
  border-top-color: var(--primary-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.slides-loading-text {
  margin-top: 16px;
  font-size: 14px;
}
```

### Fullscreen Mode

```css
.slides-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.95);
  padding: 40px;
}

.slides-fullscreen .slides-iframe-container {
  height: 100%;
  border-radius: 0;
}

.slides-fullscreen-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  color: var(--brand-navy);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.slides-fullscreen-close:hover {
  background: var(--primary-blue);
  color: white;
}
```

### Interactive States

**Default:**
- Iframe loads with presentation
- Fullscreen button visible in header
- Title and metadata shown

**Hover (fullscreen button):**
- Border color changes to blue
- Background becomes light blue
- Icon color changes to blue

**Loading:**
- Show spinner in center
- "Loading presentation..." text
- Iframe hidden until loaded

**Error:**
```css
.slides-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 16px;
  color: var(--neutral-4);
}

.slides-error-icon {
  width: 48px;
  height: 48px;
}

.slides-error-message {
  font-size: 14px;
  text-align: center;
  max-width: 300px;
}
```

### Responsive Behavior

| Breakpoint | Height | Padding | Fullscreen |
|------------|--------|---------|------------|
| Desktop | 450px | 20px | Supported |
| Tablet | 400px | 16px | Supported |
| Mobile | 350px | 12px | Supported |

### Accessibility Requirements

```html
<section
  className="session-slides"
  aria-label="Session presentation slides"
>
  <div className="slides-header">
    <div className="slides-header-left">
      <PresentationIcon aria-hidden="true" />
      <div>
        <h4 id="slides-title">{title}</h4>
        <div className="slides-metadata" aria-label="Presentation metadata">
          <span>{metadata.date}</span>
          <span>{metadata.duration}</span>
        </div>
      </div>
    </div>

    <button
      onClick={toggleFullscreen}
      className="fullscreen-toggle"
      aria-label="View presentation in fullscreen"
      aria-expanded={isFullscreen}
    >
      {isFullscreen ? <MinimizeIcon /> : <MaximizeIcon />}
    </button>
  </div>

  <div className="slides-iframe-container">
    <iframe
      src={embedUrl}
      title={title}
      aria-labelledby="slides-title"
      allow="fullscreen"
    />
  </div>

  <div className="slides-footer">
    <p className="slides-description">{description}</p>
  </div>
</section>
```

### TypeScript Props Interface

```typescript
interface SessionSlidesProps {
  embedUrl: string
  title: string
  description: string
  metadata?: {
    date: string
    duration: string
    attendeeCount?: number
  }
  status?: 'live' | 'recorded' | 'upcoming'
  allowFullscreen?: boolean
}
```

---

## 6. CompanyStory (About Us)

### Purpose
Tell the company's story with description text and quick facts.

### Visual Design

```
┌──────────────────────────────────────────────────────────────┐
│  About Us                                                    │
│  ────────────────────────────────────────────────────────── │
│                                                              │
│  Company description paragraph text here. Multi-line        │
│  description that tells the story of the company, what      │
│  they do, their mission, and why educators should know      │
│  about them. Can span 3-4 lines of text.                    │
│                                                              │
│  Quick Facts:                                                │
│  🏢 Founded: 2010    👥 Employees: 2,500+   🌍 Global: 15   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Layout Structure

```css
.company-story {
  background: white;
  border: 2px solid var(--neutral-2);
  border-radius: 8px;
  padding: 24px;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.story-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--neutral-2);
}

.story-content {
  flex: 1;
  overflow-y: auto;
}

.quick-facts {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding-top: 12px;
  border-top: 1px solid var(--neutral-2);
}
```

### Typography Usage

```css
/* Section title */
.story-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--brand-navy);
}

/* Description text */
.story-description {
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  color: var(--neutral-5);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Quick facts */
.quick-fact {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.quick-fact-icon {
  width: 20px;
  height: 20px;
  color: var(--primary-blue);
}

.quick-fact-label {
  font-weight: 600;
  color: var(--neutral-4);
}

.quick-fact-value {
  font-weight: 700;
  color: var(--brand-navy);
}
```

### Icon Mapping (Quick Facts)

```typescript
const iconMap = {
  building: '🏢',
  users: '👥',
  globe: '🌍',
  calendar: '📅',
  trophy: '🏆',
  star: '⭐',
  chart: '📊',
  location: '📍'
}
```

### Scrollable Content

```css
.story-content {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--neutral-3) var(--neutral-1);
}

.story-content::-webkit-scrollbar {
  width: 6px;
}

.story-content::-webkit-scrollbar-track {
  background: var(--neutral-1);
  border-radius: 3px;
}

.story-content::-webkit-scrollbar-thumb {
  background: var(--neutral-3);
  border-radius: 3px;
}

.story-content::-webkit-scrollbar-thumb:hover {
  background: var(--neutral-4);
}
```

### Responsive Behavior

| Breakpoint | Span | Height | Layout |
|------------|------|--------|--------|
| Desktop | 8 cols | 220px | Horizontal facts |
| Tablet | 12 cols | auto | Horizontal facts |
| Mobile | 12 cols | auto | Stacked facts |

**Mobile Adjustments:**
```css
@media (max-width: 767px) {
  .company-story {
    height: auto;
    padding: 20px;
  }

  .story-description {
    -webkit-line-clamp: unset;
  }

  .quick-facts {
    flex-direction: column;
    gap: 12px;
  }
}
```

### Accessibility Requirements

```html
<section
  className="company-story"
  aria-label="About the company"
>
  <div className="story-header">
    <h3 className="story-title">About Us</h3>
  </div>

  <div className="story-content">
    <p className="story-description" id="company-description">
      {description}
    </p>
  </div>

  {quickFacts && (
    <div
      className="quick-facts"
      aria-label="Quick facts"
      role="list"
    >
      {quickFacts.map((fact, index) => (
        <div
          key={index}
          className="quick-fact"
          role="listitem"
        >
          <span aria-hidden="true">{getIcon(fact.icon)}</span>
          <span className="quick-fact-label">{fact.label}:</span>
          <span className="quick-fact-value">{fact.value}</span>
        </div>
      ))}
    </div>
  )}
</section>
```

### TypeScript Props Interface

```typescript
interface QuickFact {
  icon?: string
  label: string
  value: string
}

interface CompanyStoryProps {
  description: string
  quickFacts?: QuickFact[]
  title?: string
}
```

---

## 7. ContactInfo

### Purpose
Provide essential contact information and social media links.

### Visual Design

```
┌──────────────────────────┐
│  Contact Us              │
│  ──────────────────────  │
│                          │
│  📧 students@company.com │
│  📞 1-800-555-TECH       │
│  📍 100 King St West     │
│      Toronto, ON M5X 1A1 │
│                          │
│  🔗 Social Links:        │
│  [LinkedIn] [Twitter]    │
│  [Instagram]             │
│                          │
│  💼 Internships:         │
│  Summer 2025             │
│  [Apply Now →]           │
└──────────────────────────┘
```

### Layout Structure

```css
.contact-info {
  background: var(--off-white);
  border: 2px solid var(--neutral-2);
  border-radius: 8px;
  padding: 24px;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-header {
  padding-bottom: 12px;
  border-bottom: 2px solid var(--neutral-2);
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.social-links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 4px;
}
```

### Typography Usage

```css
/* Section title */
.contact-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--brand-navy);
}

/* Contact items */
.contact-item-icon {
  width: 20px;
  height: 20px;
  color: var(--primary-blue);
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-item-text {
  font-size: 14px;
  line-height: 20px;
  color: var(--neutral-5);
}

.contact-item-link {
  color: var(--primary-blue);
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-item-link:hover {
  color: var(--brand-navy);
  text-decoration: underline;
}
```

### Social Link Buttons

```css
.social-link {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 2px solid var(--neutral-2);
  color: var(--neutral-5);
  transition: all 0.2s ease;
  text-decoration: none;
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Platform-specific hover colors */
.social-link-linkedin:hover {
  background: #0A66C2;
  border-color: #0A66C2;
  color: white;
}

.social-link-twitter:hover {
  background: #1DA1F2;
  border-color: #1DA1F2;
  color: white;
}

.social-link-instagram:hover {
  background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF);
  border-color: #DD2A7B;
  color: white;
}

.social-link-facebook:hover {
  background: #1877F2;
  border-color: #1877F2;
  color: white;
}

.social-link-tiktok:hover {
  background: #000000;
  border-color: #000000;
  color: white;
}

.social-link-youtube:hover {
  background: #FF0000;
  border-color: #FF0000;
  color: white;
}
```

### Internship Info Section

```css
.internship-info {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid var(--neutral-2);
}

.internship-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: rgba(0, 146, 255, 0.1);
  border: 1px solid rgba(0, 146, 255, 0.3);
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 8px;
}

.internship-period {
  font-size: 13px;
  color: var(--neutral-5);
  margin-bottom: 8px;
}

.internship-apply-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-blue);
  text-decoration: none;
  transition: color 0.2s ease;
}

.internship-apply-link:hover {
  color: var(--brand-navy);
}
```

### Responsive Behavior

| Breakpoint | Span | Height | Layout |
|------------|------|--------|--------|
| Desktop | 4 cols | 220px | Compact vertical |
| Tablet | 12 cols | auto | Horizontal sections |
| Mobile | 12 cols | auto | Full vertical stack |

**Tablet Layout:**
```css
@media (max-width: 1023px) and (min-width: 768px) {
  .contact-info {
    height: auto;
  }

  .contact-list {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .contact-item {
    flex: 1 1 45%;
  }
}
```

**Mobile Layout:**
```css
@media (max-width: 767px) {
  .contact-info {
    height: auto;
    padding: 20px;
  }

  .social-links {
    justify-content: flex-start;
  }
}
```

### Accessibility Requirements

```html
<section
  className="contact-info"
  aria-label="Contact information"
>
  <div className="contact-header">
    <h3 className="contact-title">Contact Us</h3>
  </div>

  <div className="contact-list" role="list">
    {email && (
      <div className="contact-item" role="listitem">
        <MailIcon aria-hidden="true" />
        <a
          href={`mailto:${email}`}
          className="contact-item-link"
          aria-label={`Email ${email}`}
        >
          {email}
        </a>
      </div>
    )}

    {phone && (
      <div className="contact-item" role="listitem">
        <PhoneIcon aria-hidden="true" />
        <a
          href={`tel:${phone}`}
          className="contact-item-link"
          aria-label={`Call ${phone}`}
        >
          {phone}
        </a>
      </div>
    )}

    {headquarters && (
      <div className="contact-item" role="listitem">
        <LocationIcon aria-hidden="true" />
        <span className="contact-item-text">
          {headquarters.address}<br />
          {headquarters.city}, {headquarters.province} {headquarters.postalCode}
        </span>
      </div>
    )}
  </div>

  {socialLinks && (
    <div>
      <h4 className="sr-only">Social media links</h4>
      <div className="social-links" role="list">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            className={`social-link social-link-${link.platform}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${link.platform} page (opens in new window)`}
            role="listitem"
          >
            <PlatformIcon platform={link.platform} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  )}

  {internshipInfo?.available && (
    <div className="internship-info">
      <span className="internship-badge">
        <BriefcaseIcon aria-hidden="true" />
        Internships Available
      </span>
      <p className="internship-period">{internshipInfo.period}</p>
      {internshipInfo.applicationUrl && (
        <a
          href={internshipInfo.applicationUrl}
          className="internship-apply-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Apply for internship (opens in new window)"
        >
          Apply Now →
        </a>
      )}
    </div>
  )}
</section>
```

### TypeScript Props Interface

```typescript
interface ContactDetails {
  email?: string
  phone?: string
  headquarters?: {
    address: string
    city: string
    province: string
    postalCode: string
  }
  internshipInfo?: {
    available: boolean
    period: string
    applicationUrl?: string
  }
  socialLinks?: Array<{
    platform: 'linkedin' | 'twitter' | 'instagram' | 'facebook' | 'tiktok' | 'youtube'
    url: string
  }>
}

interface ContactInfoProps {
  contact: ContactDetails
  title?: string
}
```

---

## Cross-Section Design Patterns

### Consistent Styling Across Sections

**Container Borders:**
```css
border: 2px solid var(--neutral-2);
border-radius: 8px;
```

**Section Headers:**
```css
font-size: 20px;
font-weight: 700;
color: var(--brand-navy);
padding-bottom: 12px;
border-bottom: 2px solid var(--neutral-2);
```

**Interactive Element Hover:**
```css
transition: all 0.2s ease;
transform: translateY(-2px);
```

**Loading States:**
- Use skeleton loaders with shimmer animation
- Maintain section dimensions to prevent CLS

**Error States:**
- Centered icon and message
- Use neutral-4 color
- Provide retry mechanism where applicable

---

## Implementation Priority

**Phase 1 (Essential):**
1. BoothHeader
2. VideoSection
3. CompanyStory
4. ContactInfo

**Phase 2 (Enhanced):**
5. ResourceCards

**Phase 3 (Premium):**
6. EngagementActivity (Platinum)
7. SessionSlides (Platinum)

---

## Testing Checklist Per Section

- [ ] Visual design matches specifications
- [ ] All interactive states work (hover, focus, active)
- [ ] Loading states display correctly
- [ ] Error states handle gracefully
- [ ] Responsive behavior correct at all breakpoints
- [ ] Accessibility requirements met (ARIA, keyboard nav)
- [ ] Performance optimized (lazy loading, efficient rendering)
- [ ] Props interface matches TypeScript definition

---

## Related Documentation

- [Bento Grid Layout](./bento-grid-layout.md)
- [Interaction Specifications](./interaction-specifications.md)
- [Accessibility Requirements](./accessibility-requirements.md)
- [Responsive Behavior](./responsive-behavior.md)
