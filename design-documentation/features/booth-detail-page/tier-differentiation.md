---
title: Tier Differentiation Strategy
description: Detailed breakdown of Platinum vs Standard booth differences
feature: Booth Detail Page - Tier Strategy
last-updated: 2025-11-07
version: 1.0.0
status: approved
---

# Tier Differentiation Strategy

## Overview

This document provides a clear breakdown of the differences between Platinum and Standard booth tiers, including section composition, visual differentiation, and value proposition.

---

## Section Composition

### Platinum Booths (27 booths) - 7 Sections

**All Sections Included:**

1. **BoothHeader** (12 cols) - Logo, title, tagline, CTAs
2. **VideoSection** (4 cols) - Company video with player
3. **EngagementActivity** (8 cols) - PLATINUM EXCLUSIVE - Interactive quiz/form/contest
4. **ResourceCards** (6 cols) - Downloadable resources mosaic
5. **SessionSlides** (6 cols) - PLATINUM EXCLUSIVE - Presentation embed
6. **CompanyStory** (8 cols) - About Us text and quick facts
7. **ContactInfo** (4 cols) - Contact details and social links

**Exclusive Features:**
- Interactive engagement activities (quizzes, contests, forms)
- Session presentation slides (educational content)
- Enhanced visual treatment (gradients, glows, animations)

### Standard Booths (2 booths) - 5 Sections

**Sections Included:**

1. **BoothHeader** (12 cols) - Logo, title, tagline, CTAs
2. **VideoSection** (6 cols centered OR 12 cols) - Company video
3. **ResourceCards** (12 cols full width) - Downloadable resources
4. **CompanyStory** (8 cols) - About Us text
5. **ContactInfo** (4 cols) - Contact details

**Excluded Features:**
- No EngagementActivity section
- No SessionSlides section
- Simpler visual treatment (no premium animations)

---

## Visual Differentiation

### Platinum Visual Enhancements

**BoothHeader:**
```css
/* Platinum-specific styling */
.booth-header.platinum {
  background: linear-gradient(
    135deg,
    rgba(0, 146, 255, 0.05) 0%,
    rgba(246, 246, 255, 1) 50%,
    rgba(198, 231, 255, 0.15) 100%
  );
  border: 2px solid rgba(0, 146, 255, 0.2);
  box-shadow: 0 0 0 1px rgba(0, 146, 255, 0.1);
}

/* Decorative gradient blobs */
.booth-header.platinum::before,
.booth-header.platinum::after {
  /* Floating gradient orbs in background */
}
```

**EngagementActivity:**
```css
/* Exclusive Platinum badge */
.platinum-badge {
  background: linear-gradient(90deg, #0092FF, #22224C);
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  animation: shimmer 3s linear infinite;
}

/* Gradient background */
.engagement-activity {
  background: linear-gradient(
    135deg,
    rgba(0, 146, 255, 0.08),
    rgba(198, 231, 255, 0.15)
  );
  border: 2px solid rgba(0, 146, 255, 0.2);
}
```

**Animations:**
- Floating blobs in engagement section
- Shimmer effect on badge
- Enhanced hover effects (3D transforms)
- Entrance animations with stagger

### Standard Visual Treatment

**BoothHeader:**
```css
/* Standard styling - clean and professional */
.booth-header.standard {
  background: linear-gradient(
    135deg,
    rgba(246, 246, 255, 1) 0%,
    white 100%
  );
  border: 2px solid var(--neutral-2);
}
```

**Simplified Animations:**
- No floating blobs
- Standard hover effects (subtle lift)
- Simple fade-in entrance
- No shimmer or glow effects

---

## Layout Differences

### Platinum Layout Grid

```
Desktop (12 columns):
┌────────────────────────────────────────┐
│  Header (12 cols, full width)         │
├──────────┬─────────────────────────────┤
│ Video(4) │  Engagement Activity (8)    │
├──────────┴──────────┬──────────────────┤
│ Resources (6)       │  Slides (6)      │
├─────────────────────┴──────┬───────────┤
│ Company Story (8)          │ Contact(4)│
└────────────────────────────┴───────────┘
```

### Standard Layout Grid

**Option A: Centered Video (Recommended)**
```
Desktop (12 columns):
┌────────────────────────────────────────┐
│  Header (12 cols, full width)         │
├───────┬────────────────────┬───────────┤
│       │   Video (6)        │           │
│ Empty │   Centered         │   Empty   │
│       │                    │           │
├───────┴────────────────────┴───────────┤
│  Resources (12 cols, full width)      │
├───────────────────────────────┬───────┤
│ Company Story (8)             │Contact│
│                               │  (4)  │
└───────────────────────────────┴───────┘
```

**Option B: Full Width Video**
```
Desktop (12 columns):
┌────────────────────────────────────────┐
│  Header (12 cols, full width)         │
├────────────────────────────────────────┤
│  Video (12 cols, full width)          │
├────────────────────────────────────────┤
│  Resources (12 cols, full width)      │
├───────────────────────────────┬───────┤
│ Company Story (8)             │Contact│
└───────────────────────────────┴───────┘
```

---

## Content Requirements

### Platinum Content Requirements

**Required Data Fields:**
- All standard fields (logo, name, tagline, description, video, resources, contact)
- `engagementActivity?`: Object with embed URL, title, description
- `sessionSlides?`: Object with embed URL, title, metadata
- `quickFacts?`: Array of icon/label/value objects
- `brandColors`: Primary and secondary colors

**Minimum Content:**
- 1 video
- 2+ resources
- 1 engagement activity (quiz, form, or contest)
- 1 presentation (optional but recommended)
- Quick facts (optional but recommended)
- Social media links (optional)

### Standard Content Requirements

**Required Data Fields:**
- Logo, name, tagline, description
- Video (URL, type, title)
- Resources (minimum 2)
- Contact information (email, phone, address)

**Minimum Content:**
- 1 video
- 2+ resources
- Contact information
- Description (150-300 words)

---

## Value Proposition

### Platinum Tier Benefits

**For Sponsors:**
- **Enhanced Visibility**: Premium positioning with visual differentiation
- **Interactive Engagement**: Unique interactive activities (quizzes, contests)
- **Educational Content**: Thought leadership via presentation embeds
- **Data Collection**: Gather engagement data from interactive activities
- **Brand Storytelling**: Additional space for quick facts and rich content

**For Visitors (Educators):**
- **Interactive Experience**: Engaging activities beyond static content
- **Educational Value**: Access to presentation materials
- **Comprehensive Information**: Full company profile with quick facts
- **Multiple Touchpoints**: Video + resources + activities + slides

### Standard Tier Benefits

**For Sponsors:**
- **Cost-Effective**: Lower investment tier
- **Core Functionality**: Video, resources, contact information
- **Professional Appearance**: Clean, modern booth design
- **Brand Presence**: Logo, tagline, description, video

**For Visitors (Educators):**
- **Essential Information**: Company overview and contact
- **Video Content**: Company video for classroom viewing
- **Resources**: Downloadable materials
- **Direct Contact**: Email, phone, social links

---

## Pricing Rationale

### Platinum Tier Justification

**Higher Price Point Based On:**
1. **Additional Development Effort**: 2 exclusive sections (Engagement + Slides)
2. **Content Requirements**: Custom interactive content creation
3. **Enhanced Visibility**: Premium visual treatment and animations
4. **Data Collection**: Engagement metrics and lead generation
5. **Educational Value**: Presentation materials for educators

**Estimated Value Multiplier**: 2.5x - 3x Standard tier

### Standard Tier Justification

**Lower Price Point Based On:**
1. **Core Features Only**: Essential booth functionality
2. **Lower Content Requirements**: Standard video and resources
3. **Simpler Implementation**: Fewer custom components
4. **Reduced Maintenance**: Less complex interactive elements

**Estimated Value**: Base tier pricing

---

## Migration Path

### Upgrading from Standard to Platinum

**Required Additions:**
1. Create engagement activity (quiz, form, or contest)
2. Prepare presentation slides (Google Slides or PowerPoint)
3. Gather quick facts (founded date, employee count, locations)
4. Optional: Enhanced brand colors for gradients

**Timeline**: 1-2 weeks for content preparation

### Downgrading from Platinum to Standard

**Sections Removed:**
- EngagementActivity section (archived, not deleted)
- SessionSlides section (archived)
- Quick Facts (removed from display)
- Premium visual effects (simplified)

**Timeline**: Immediate (simple configuration change)

---

## Technical Implementation

### Tier Detection Logic

```typescript
// Determine booth tier and render appropriate sections
function renderBoothSections(booth: BoothData) {
  const isPlatinum = booth.tier === 'platinum'

  return (
    <>
      <BoothHeader {...booth} />
      <VideoSection video={booth.video} />

      {isPlatinum && 'engagementActivity' in booth && booth.engagementActivity && (
        <EngagementActivity activity={booth.engagementActivity} />
      )}

      <ResourceCards resources={booth.resources} />

      {isPlatinum && 'sessionSlides' in booth && booth.sessionSlides && (
        <SessionSlides slides={booth.sessionSlides} />
      )}

      <CompanyStory
        description={booth.description}
        quickFacts={'quickFacts' in booth ? booth.quickFacts : undefined}
      />

      <ContactInfo contact={booth.contact} />
    </>
  )
}
```

### Conditional Styling

```tsx
// Apply tier-specific className
<div className={`booth-container ${booth.tier}`}>
  <div className={`booth-grid ${booth.tier}-grid`}>
    {/* Sections */}
  </div>
</div>
```

---

## Analytics & Measurement

### Platinum Tier Metrics

**Engagement Metrics:**
- Quiz completion rate
- Form submission rate
- Presentation view time
- Resource download count
- CTA click-through rate

**Performance Metrics:**
- Average time on page
- Bounce rate
- Scroll depth
- Return visitor rate

### Standard Tier Metrics

**Engagement Metrics:**
- Video play rate
- Resource download count
- Contact link clicks
- CTA click-through rate

**Performance Metrics:**
- Average time on page
- Bounce rate
- Video completion rate

---

## Success Criteria

### Platinum Booths

**Sponsor Satisfaction:**
- Engagement rate: > 30% (quiz/form completion)
- Lead quality: High-intent visitors
- Presentation views: > 50% of page visitors
- Resource downloads: > 3 per visitor

**Visitor Experience:**
- Page load time: < 2.5s
- Interactive element responsiveness: < 100ms
- Educational value rating: 4.5/5+
- Return visit rate: > 20%

### Standard Booths

**Sponsor Satisfaction:**
- Video play rate: > 60%
- Contact engagement: > 10% click-through
- Resource downloads: > 2 per visitor

**Visitor Experience:**
- Page load time: < 2s
- Clear information hierarchy
- Easy contact access
- Professional appearance

---

## Future Enhancements

### Platinum Tier Evolution

**Potential Additions:**
- Live chat integration
- Video testimonials
- Virtual tour functionality
- Downloadable media kits
- Calendar integration for events

### Standard Tier Upgrades

**Potential Improvements:**
- Simple Q&A section
- Employee spotlight
- Recent news feed
- Basic analytics dashboard

---

## Related Documentation

- [README Overview](./README.md)
- [Section Component Specifications](./section-specifications.md)
- [Bento Grid Layout](./bento-grid-layout.md)
- [Implementation Guide](./implementation.md)
