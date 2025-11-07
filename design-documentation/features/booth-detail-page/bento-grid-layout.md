---
title: Bento Grid Layout Specifications
description: Exact grid specifications for booth detail page layouts across all breakpoints
feature: Booth Detail Page - Layout Architecture
last-updated: 2025-11-07
version: 1.0.0
status: approved
---

# Bento Grid Layout Specifications

## Overview

The booth detail page uses a **12-column bento grid system** with asymmetric layouts to create visual interest while maintaining information hierarchy. The grid adapts responsively across breakpoints.

---

## Grid Foundation

### Base Grid System

```css
.booth-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px 16px; /* vertical: 24px, horizontal: 16px */
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;
}
```

**Key Specifications:**
- **Columns**: 12 equal-width columns
- **Vertical Gap**: 24px (space-3)
- **Horizontal Gap**: 16px (space-2)
- **Max Width**: 1400px
- **Container Padding**: 32px top/bottom, 24px left/right

---

## Platinum Booth Layout

### Desktop (1024px+)

```
┌──────────────────────────────────────────────────────────────────────┐
│  BOOTH HEADER                                                        │
│  grid-column: 1 / -1 (span 12)                                      │
│  height: auto                                                        │
│  min-height: 160px                                                   │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────┐  ┌────────────────────────────────────────────┐
│  VIDEO SECTION       │  │  ENGAGEMENT ACTIVITY                       │
│  grid-column: 1 / 5  │  │  grid-column: 5 / -1 (span 8)              │
│  (span 4)            │  │  height: 500px                             │
│  height: 500px       │  │                                            │
└──────────────────────┘  └────────────────────────────────────────────┘

┌────────────────────────────────────────┐  ┌──────────────────────────┐
│  RESOURCE CARDS                        │  │  SESSION SLIDES          │
│  grid-column: 1 / 7 (span 6)           │  │  grid-column: 7 / -1     │
│  height: 450px                         │  │  (span 6)                │
│                                        │  │  height: 450px           │
└────────────────────────────────────────┘  └──────────────────────────┘

┌──────────────────────────────────────────────────────┐  ┌────────────┐
│  COMPANY STORY (About Us)                            │  │  CONTACT   │
│  grid-column: 1 / 9 (span 8)                         │  │  INFO      │
│  height: 220px                                       │  │  grid-col: │
│                                                      │  │  9 / -1    │
│                                                      │  │  (span 4)  │
│                                                      │  │  ht: 220px │
└──────────────────────────────────────────────────────┘  └────────────┘
```

**Specifications:**

| Section | Grid Column | Span | Height | Notes |
|---------|-------------|------|--------|-------|
| BoothHeader | 1 / -1 | 12 | auto (min 160px) | Full width header |
| VideoSection | 1 / 5 | 4 | 500px | Left column, fixed aspect |
| EngagementActivity | 5 / -1 | 8 | 500px | Right column, dominant |
| ResourceCards | 1 / 7 | 6 | 450px | Half width, left |
| SessionSlides | 7 / -1 | 6 | 450px | Half width, right |
| CompanyStory | 1 / 9 | 8 | 220px | Wider column, left |
| ContactInfo | 9 / -1 | 4 | 220px | Narrower column, right |

### Tablet (768px - 1023px)

```
┌────────────────────────────────────────────────────────┐
│  BOOTH HEADER                                          │
│  grid-column: 1 / -1 (span 12)                        │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│  VIDEO SECTION                                         │
│  grid-column: 1 / -1 (span 12)                        │
│  height: 400px                                         │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│  ENGAGEMENT ACTIVITY                                   │
│  grid-column: 1 / -1 (span 12)                        │
│  height: 450px                                         │
└────────────────────────────────────────────────────────┘

┌───────────────────────────┐  ┌────────────────────────┐
│  RESOURCE CARDS           │  │  SESSION SLIDES        │
│  grid-column: 1 / 7       │  │  grid-column: 7 / -1   │
│  (span 6)                 │  │  (span 6)              │
│  height: 400px            │  │  height: 400px         │
└───────────────────────────┘  └────────────────────────┘

┌────────────────────────────────────────────────────────┐
│  COMPANY STORY (About Us)                              │
│  grid-column: 1 / -1 (span 12)                        │
│  height: auto                                          │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│  CONTACT INFO                                          │
│  grid-column: 1 / -1 (span 12)                        │
│  height: auto                                          │
└────────────────────────────────────────────────────────┘
```

**Tablet Adjustments:**
- Video, Engagement, Company Story, Contact go full width
- Resource Cards and Session Slides remain side-by-side (6 cols each)
- Heights reduced by 50-100px for better viewport fit
- Vertical gap: 24px remains consistent

### Mobile (<768px)

```
┌──────────────────────┐
│  BOOTH HEADER        │
│  Full width          │
└──────────────────────┘

┌──────────────────────┐
│  VIDEO SECTION       │
│  Full width          │
│  height: 300px       │
└──────────────────────┘

┌──────────────────────┐
│  ENGAGEMENT          │
│  ACTIVITY            │
│  Full width          │
│  height: 350px       │
└──────────────────────┘

┌──────────────────────┐
│  RESOURCE CARDS      │
│  Full width          │
│  height: auto        │
└──────────────────────┘

┌──────────────────────┐
│  SESSION SLIDES      │
│  Full width          │
│  height: 350px       │
└──────────────────────┘

┌──────────────────────┐
│  COMPANY STORY       │
│  Full width          │
│  height: auto        │
└──────────────────────┘

┌──────────────────────┐
│  CONTACT INFO        │
│  Full width          │
│  height: auto        │
└──────────────────────┘
```

**Mobile Specifications:**
- All sections full width (grid-column: 1 / -1)
- Single column stack layout
- Heights adjusted for mobile viewports
- Vertical gap: 16px (reduced from 24px)
- Container padding: 16px all sides

---

## Standard Booth Layout

### Desktop (1024px+)

```
┌──────────────────────────────────────────────────────────────────────┐
│  BOOTH HEADER                                                        │
│  grid-column: 1 / -1 (span 12)                                      │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────┐  ┌────────────────────────────────────────────┐
│  VIDEO SECTION       │  │  [Empty space - no Engagement Activity]    │
│  grid-column: 1 / 5  │  │  Can show decorative graphic or extend     │
│  (span 4)            │  │  video section to span 1 / -1 (full width) │
│  height: 500px       │  │                                            │
└──────────────────────┘  └────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│  RESOURCE CARDS                                                        │
│  grid-column: 1 / -1 (span 12) - FULL WIDTH                          │
│  height: 450px                                                         │
└────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐  ┌──────────┐
│  COMPANY STORY (About Us)                                │  │ CONTACT  │
│  grid-column: 1 / 9 (span 8)                             │  │ INFO     │
│  height: 220px                                           │  │ 9 / -1   │
└──────────────────────────────────────────────────────────┘  └──────────┘
```

**Standard Booth Layout Options:**

**Option A: Centered Video** (Recommended)
```css
.video-section-standard {
  grid-column: 4 / 10; /* span 6, centered */
  height: 500px;
}
```

**Option B: Full Width Video**
```css
.video-section-standard {
  grid-column: 1 / -1; /* span 12, full width */
  height: 400px; /* reduced height for better proportions */
}
```

**Recommended: Option A** - Centers video for visual balance without engagement section

---

## Responsive Breakpoint Matrix

| Breakpoint | Container Padding | Grid Gaps | Video Height | Activity Height | Max Width |
|------------|------------------|-----------|--------------|-----------------|-----------|
| **Mobile** (<768px) | 16px | 16px / 16px | 300px | 350px | 100% |
| **Tablet** (768-1023px) | 24px | 24px / 16px | 400px | 450px | 100% |
| **Desktop** (1024-1439px) | 32px 24px | 24px / 16px | 500px | 500px | 1400px |
| **Wide** (1440px+) | 32px 24px | 24px / 16px | 500px | 500px | 1400px |

---

## CSS Grid Implementation

### Desktop Grid (Platinum)

```css
.booth-grid-platinum {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px 16px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;
}

.booth-header {
  grid-column: 1 / -1;
  min-height: 160px;
}

.video-section {
  grid-column: 1 / 5; /* span 4 */
  height: 500px;
}

.engagement-activity {
  grid-column: 5 / -1; /* span 8 */
  height: 500px;
}

.resource-cards {
  grid-column: 1 / 7; /* span 6 */
  height: 450px;
}

.session-slides {
  grid-column: 7 / -1; /* span 6 */
  height: 450px;
}

.company-story {
  grid-column: 1 / 9; /* span 8 */
  height: 220px;
}

.contact-info {
  grid-column: 9 / -1; /* span 4 */
  height: 220px;
}
```

### Tablet Responsive

```css
@media (max-width: 1023px) and (min-width: 768px) {
  .booth-grid-platinum {
    padding: 24px;
    gap: 24px 16px;
  }

  .video-section {
    grid-column: 1 / -1; /* full width */
    height: 400px;
  }

  .engagement-activity {
    grid-column: 1 / -1; /* full width */
    height: 450px;
  }

  .resource-cards {
    grid-column: 1 / 7; /* maintain half width */
    height: 400px;
  }

  .session-slides {
    grid-column: 7 / -1; /* maintain half width */
    height: 400px;
  }

  .company-story {
    grid-column: 1 / -1; /* full width */
    height: auto;
  }

  .contact-info {
    grid-column: 1 / -1; /* full width */
    height: auto;
  }
}
```

### Mobile Responsive

```css
@media (max-width: 767px) {
  .booth-grid-platinum {
    padding: 16px;
    gap: 16px;
  }

  /* All sections full width */
  .booth-header,
  .video-section,
  .engagement-activity,
  .resource-cards,
  .session-slides,
  .company-story,
  .contact-info {
    grid-column: 1 / -1;
  }

  /* Adjusted heights */
  .video-section {
    height: 300px;
  }

  .engagement-activity {
    height: 350px;
  }

  .session-slides {
    height: 350px;
  }

  .resource-cards,
  .company-story,
  .contact-info {
    height: auto;
  }
}
```

---

## Layout Spacing Details

### Section Margins and Padding

**Header:**
- Internal padding: 32px (space-4)
- Bottom margin: Built into grid gap (24px)

**Video/Engagement Row:**
- Between sections: 16px horizontal gap (grid gap)
- Bottom margin: 24px (grid gap)

**Resources/Slides Row:**
- Between sections: 16px horizontal gap (grid gap)
- Bottom margin: 24px (grid gap)

**About/Contact Row:**
- Between sections: 16px horizontal gap (grid gap)
- Bottom margin: Built into grid

### Safe Areas

**Container Edges:**
- Desktop: 24px padding on left/right
- Tablet: 24px padding on left/right
- Mobile: 16px padding on left/right

**Minimum Touch Targets:**
- All interactive elements: 44px × 44px minimum
- Button height: 48px (exceeds minimum)
- Icon buttons: 44px × 44px

---

## Alignment and Positioning

### Vertical Alignment
- All sections in a row align to **top** by default
- Use `align-items: stretch` to fill available height
- Fixed height sections (video, engagement) maintain exact dimensions

### Horizontal Alignment
- Grid columns maintain equal width distribution
- Content within sections can be left, center, or right aligned as needed
- Resource cards use internal mosaic grid for asymmetric layouts

---

## Performance Considerations

### Layout Shift Prevention

```css
/* Reserve space before content loads */
.video-section,
.engagement-activity,
.session-slides {
  min-height: 300px; /* prevents CLS */
  background: var(--neutral-1); /* placeholder background */
}

/* Skeleton loader during data fetch */
.skeleton {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Grid Rendering Optimization

```css
/* Use CSS containment for better rendering performance */
.booth-section {
  contain: layout style paint;
}

/* Avoid expensive calculations */
.booth-grid-platinum {
  will-change: auto; /* don't pre-optimize unless animating */
}
```

---

## Developer Implementation Notes

1. **Use CSS Grid** - Native CSS Grid provides best performance and browser support
2. **Avoid Absolute Positioning** - Let grid handle all layout positioning
3. **Test with Content** - Verify layout with real data including long titles, many resources
4. **Verify Gaps** - Ensure grid gaps render consistently across browsers
5. **Check Overflow** - Test with content that exceeds container dimensions
6. **Validate Responsive** - Test all breakpoints with browser dev tools

---

## Testing Checklist

- [ ] Desktop layout matches specifications (1024px+)
- [ ] Tablet layout stacks correctly (768-1023px)
- [ ] Mobile layout is single column (<768px)
- [ ] Grid gaps are consistent (24px vertical, 16px horizontal)
- [ ] Max width constraint (1400px) applies correctly
- [ ] Section heights match specifications
- [ ] Standard booth layout centers video appropriately
- [ ] No layout shift when content loads
- [ ] Hover effects don't cause layout jump
- [ ] Print layout is readable

---

## Related Documentation

- [Section Component Specifications](./section-specifications.md)
- [Responsive Behavior Matrix](./responsive-behavior.md)
- [Tier Differentiation Strategy](./tier-differentiation.md)
