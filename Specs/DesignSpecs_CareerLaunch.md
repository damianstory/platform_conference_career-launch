# Career Launch Platform - UX/UI Style Guide
## Design Requirements Document for Development

**Version:** 1.0  
**Date:** October 29, 2025  
**Event Launch:** December 1-5, 2025  
**Brand Foundation:** myBlueprint Educational Design System

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Component Library](#5-component-library)
6. [Animation & Interaction](#6-animation--interaction)
7. [Responsive Design](#7-responsive-design)
8. [Page Specifications](#8-page-specifications)
9. [Accessibility Standards](#9-accessibility-standards)
10. [Implementation Checklist](#10-implementation-checklist)

---

# 1. DESIGN PHILOSOPHY

## 1.1 Core Principles

### Balanced Hybrid Aesthetic
**Professional Foundation + Energetic Accents**

- **For Educators:** Clean, trustworthy, efficient interface that respects their limited time
- **For Students:** Engaging, modern, visually interesting content that captures attention
- **Balance Point:** Professional structure with strategic moments of visual energy

### Design Values

```
TRUSTWORTHY
├─ myBlueprint brand consistency
├─ Clear information hierarchy
└─ Predictable interaction patterns

EFFICIENT
├─ Desktop-optimized for classroom use
├─ Zero-friction browsing experience
└─ Subtle animations that don't slow interaction

ENGAGING
├─ High-quality imagery and video
├─ Strategic use of color to guide attention
└─ Modern card-based layouts
```

## 1.2 Brand Adherence

**Strict myBlueprint Compliance:**
- Use official color palette exclusively
- Museo Sans (primary) / Open Sans (fallback) only
- Follow established voice and tone guidelines
- Maintain logo usage standards

**Strategic Enhancements:**
- Elevated visual hierarchy through scale contrasts
- Refined micro-interactions within brand constraints
- Sophisticated use of whitespace and layout
- Polished details (shadows, borders, states)

---

# 2. COLOR SYSTEM

## 2.1 Brand Colors

### Primary Palette

```css
:root {
  /* Core Brand Colors */
  --myb-primary-blue: #0092FF;    /* R0 G146 B255 */
  --myb-navy: #22224C;            /* R34 G34 B76 */
  --myb-light-blue: #C6E7FF;      /* R198 G231 B255 */
  --myb-off-white: #F6F6FF;       /* R246 G246 B255 */
  
  /* Neutral Palette */
  --myb-neutral-1: #E5E9F1;       /* Lightest gray */
  --myb-neutral-2: #D9DFEA;       /* Light gray */
  --myb-neutral-3: #AAB7CB;       /* Medium gray */
  --myb-neutral-4: #65738B;       /* Dark gray */
  --myb-neutral-5: #485163;       /* Darker gray */
  --myb-neutral-6: #252A33;       /* Darkest gray */
}
```

### Semantic Color Usage

**Primary Blue (#0092FF)**
```css
/* Used for: */
- Primary CTAs ("Watch with Your Class", "Start Video")
- Links and clickable session titles
- Progress indicators and active states
- Icon highlights and attention points
- Video player accent color
```

**Navy (#22224C)**
```css
/* Used for: */
- Main page headings (H1, H2)
- Navigation header background
- Footer background
- Primary body text on light backgrounds
- Block headers on schedule page
```

**Light Blue (#C6E7FF)**
```css
/* Used for: */
- Section background alternation
- Session card backgrounds (with subtle gradient)
- Hover states (with 0.15 opacity)
- Info notifications
- Input field focus rings
```

**Off-White (#F6F6FF)**
```css
/* Used for: */
- Page background
- Alternating section backgrounds
- Card hover states (subtle lift)
```

**Neutrals**
```css
--myb-neutral-1: Form field backgrounds, divider lines
--myb-neutral-2: Card borders, subtle separators
--myb-neutral-3: Disabled button states, placeholder text
--myb-neutral-4: Secondary text, metadata labels
--myb-neutral-5: Body text, paragraph content
--myb-neutral-6: High-emphasis text, dark overlays
```

## 2.2 Functional Colors

### System States

```css
:root {
  /* Success - using brand blue tones */
  --color-success: #16A34A;
  --color-success-bg: #DCFCE7;
  --color-success-text: #14532D;
  
  /* Error - warm red that doesn't clash with brand */
  --color-error: #DC2626;
  --color-error-bg: #FEE2E2;
  --color-error-text: #7F1D1D;
  
  /* Warning - amber tones */
  --color-warning: #D97706;
  --color-warning-bg: #FEF3C7;
  --color-warning-text: #78350F;
  
  /* Info - leveraging brand light blue */
  --color-info: var(--myb-primary-blue);
  --color-info-bg: var(--myb-light-blue);
  --color-info-text: var(--myb-navy);
}
```

### Overlay & Shadow System

```css
:root {
  /* Overlays */
  --overlay-light: rgba(34, 34, 76, 0.1);
  --overlay-medium: rgba(34, 34, 76, 0.3);
  --overlay-heavy: rgba(34, 34, 76, 0.6);
  --overlay-modal: rgba(34, 34, 76, 0.75);
  
  /* Shadows - subtle and professional */
  --shadow-sm: 0 1px 2px rgba(34, 34, 76, 0.05);
  --shadow-md: 0 4px 8px rgba(34, 34, 76, 0.08);
  --shadow-lg: 0 8px 24px rgba(34, 34, 76, 0.12);
  --shadow-xl: 0 16px 48px rgba(34, 34, 76, 0.15);
  
  /* Interactive shadows */
  --shadow-hover: 0 8px 24px rgba(0, 146, 255, 0.2);
  --shadow-focus: 0 0 0 3px rgba(0, 146, 255, 0.15);
}
```

## 2.3 Industry Category Colors (Optional Enhancement)

```css
/* Session category accent colors - used sparingly for visual interest */
:root {
  --category-healthcare: #EF4444;
  --category-technology: #3B82F6;
  --category-trades: #F59E0B;
  --category-business: #8B5CF6;
  --category-arts: #EC4899;
  --category-public-service: #10B981;
}

/* Usage: Small accent stripe on session cards, not dominant */
```

---

# 3. TYPOGRAPHY

## 3.1 Font Stack

### Primary: Museo Sans

```css
font-family: 'Museo Sans', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Weights Available:**
- 300 (Light) - Rarely used
- 500 (Regular) - Body text
- 700 (Bold) - Subheadings, buttons
- 900 (Black) - Major headings only

### Fallback: Open Sans

```css
font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Font Loading Strategy:**
```html
<!-- Google Fonts for Open Sans fallback -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700;900&display=swap" rel="stylesheet">

<!-- Museo Sans: Use Adobe Fonts or self-host -->
<!-- Include font-display: swap for performance -->
```

## 3.2 Type Scale (Desktop)

### Headlines

```css
/* H1 - Page Titles */
.h1 {
  font-family: 'Museo Sans', sans-serif;
  font-size: 64px;
  line-height: 80px;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: var(--myb-navy);
}

/* H2 - Block Headers, Section Titles */
.h2 {
  font-family: 'Museo Sans', sans-serif;
  font-size: 40px;
  line-height: 56px;
  font-weight: 900;
  letter-spacing: -0.01em;
  color: var(--myb-navy);
}

/* H3 - Session Titles, Modal Headers */
.h3 {
  font-family: 'Museo Sans', sans-serif;
  font-size: 32px;
  line-height: 48px;
  font-weight: 900;
  color: var(--myb-navy);
}

/* H4 - Subsection Headers */
.h4 {
  font-family: 'Museo Sans', sans-serif;
  font-size: 24px;
  line-height: 36px;
  font-weight: 900;
  color: var(--myb-navy);
}
```

### Body Text

```css
/* Subheader - Intro paragraphs, important callouts */
.subheader {
  font-family: 'Museo Sans', sans-serif;
  font-size: 22px;
  line-height: 32px;
  font-weight: 500;
  color: var(--myb-neutral-5);
}

/* Body 1 - Primary paragraph text */
.body-1 {
  font-family: 'Museo Sans', sans-serif;
  font-size: 20px;
  line-height: 32px;
  font-weight: 300;
  color: var(--myb-neutral-5);
}

/* Body 2 - Secondary text, session descriptions */
.body-2 {
  font-family: 'Museo Sans', sans-serif;
  font-size: 16px;
  line-height: 28px;
  font-weight: 300;
  color: var(--myb-neutral-5);
}

/* Compact - Form labels, metadata */
.compact {
  font-family: 'Museo Sans', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  color: var(--myb-neutral-4);
}
```

### UI Labels

```css
/* Subtitle 1 - Buttons, tags, uppercase labels */
.subtitle-1 {
  font-family: 'Museo Sans', sans-serif;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--myb-neutral-4);
}

/* Subtitle 2 - Tiny labels, legal text */
.subtitle-2 {
  font-family: 'Museo Sans', sans-serif;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--myb-neutral-4);
}
```

## 3.3 Type Scale (Mobile)

### Responsive Adjustments

```css
/* Mobile: Scale down dramatically for readability */
@media (max-width: 767px) {
  .h1 {
    font-size: 40px;
    line-height: 48px;
  }
  
  .h2 {
    font-size: 32px;
    line-height: 40px;
  }
  
  .h3 {
    font-size: 24px;
    line-height: 32px;
  }
  
  .h4 {
    font-size: 20px;
    line-height: 28px;
  }
  
  .subheader {
    font-size: 18px;
    line-height: 28px;
  }
  
  .body-1 {
    font-size: 16px;
    line-height: 26px;
  }
  
  .body-2 {
    font-size: 14px;
    line-height: 22px;
  }
  
  /* Compact and subtitles remain same size */
}
```

## 3.4 Typography Usage Guidelines

### Hierarchy Principles

**1. Extreme Scale Contrast**
```
H1 is 4x larger than body text (64px vs 16px)
This creates clear visual hierarchy without relying on color
```

**2. Weight Variation**
```
Headings: Always 900 (Black)
Body: 300 (Light) or 500 (Medium)
Buttons/Labels: 700 (Bold)
```

**3. Line Height Formula**
```
Display text (H1-H2): 1.25x font size
Body text: 1.6x font size
Compact text: 1.4x font size
```

### Content-Specific Usage

**Event Header:**
```css
/* "CAREER LAUNCH WEEK: December 1-5" */
font-size: 40px;
font-weight: 900;
text-align: center;
color: var(--myb-navy);
```

**Block Headers:**
```css
/* "Block 1 - Choose any session from this block" */
font-size: 32px;
font-weight: 900;
color: var(--myb-navy);
margin-bottom: 32px;
```

**Session Card Title:**
```css
font-size: 20px;
line-height: 28px;
font-weight: 700;
color: var(--myb-navy);
```

**Session Card Metadata:**
```css
/* "Healthcare | 35 minutes | Grades 9-12" */
font-size: 14px;
font-weight: 500;
color: var(--myb-neutral-4);
text-transform: none; /* Not uppercase */
```

---

# 4. SPACING & LAYOUT

## 4.1 Spacing System

### Base Unit: 8px Grid

```css
:root {
  /* Spacing scale */
  --space-1: 8px;    /* 0.5rem */
  --space-2: 16px;   /* 1rem */
  --space-3: 24px;   /* 1.5rem */
  --space-4: 32px;   /* 2rem */
  --space-5: 40px;   /* 2.5rem */
  --space-6: 48px;   /* 3rem */
  --space-7: 56px;   /* 3.5rem */
  --space-8: 64px;   /* 4rem */
  --space-9: 72px;   /* 4.5rem */
  --space-10: 80px;  /* 5rem */
  --space-12: 96px;  /* 6rem */
  --space-16: 128px; /* 8rem */
}
```

### Component Spacing Patterns

**Session Card Padding:**
```css
padding: var(--space-3); /* 24px */
```

**Block Vertical Spacing:**
```css
margin-bottom: var(--space-8); /* 64px between blocks */
```

**Section Padding:**
```css
padding: var(--space-10) 0; /* 80px top/bottom */
```

**Form Field Spacing:**
```css
margin-bottom: var(--space-3); /* 24px between fields */
```

## 4.2 Layout Grid System

### Container Widths

```css
:root {
  --container-sm: 640px;   /* Narrow content (forms) */
  --container-md: 768px;   /* Medium content (modals) */
  --container-lg: 1024px;  /* Standard content */
  --container-xl: 1280px;  /* Wide content (schedule) */
  --container-max: 1440px; /* Maximum width */
}

.container {
  max-width: var(--container-xl);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}
```

### Grid Columns (Schedule Page)

**Desktop Layout:**
```css
/* 4 columns for session cards */
.schedule-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4); /* 32px */
}

/* Each block */
.block-section {
  margin-bottom: var(--space-10); /* 80px */
}
```

**Tablet Layout (768px - 1023px):**
```css
.schedule-grid {
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3); /* 24px */
}
```

**Mobile Layout (<767px):**
```css
.schedule-grid {
  grid-template-columns: 1fr;
  gap: var(--space-3); /* 24px */
}
```

## 4.3 Border Radius System

```css
:root {
  --radius-sm: 4px;   /* Small elements, badges */
  --radius-md: 8px;   /* Buttons, inputs */
  --radius-lg: 12px;  /* Cards, modals */
  --radius-xl: 16px;  /* Large cards */
  --radius-full: 9999px; /* Pills, avatars */
}
```

**Usage:**
- Session cards: `border-radius: var(--radius-lg);`
- Buttons: `border-radius: var(--radius-md);`
- Form inputs: `border-radius: var(--radius-md);`
- Modal: `border-radius: var(--radius-xl);`
- Category badges: `border-radius: var(--radius-full);`

---

# 5. COMPONENT LIBRARY

## 5.1 Buttons

### Primary Button

```css
.btn-primary {
  /* Core styles */
  background: var(--myb-primary-blue);
  color: white;
  font-family: 'Museo Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 14px 32px;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  
  /* Transitions */
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Interactive states */
  &:hover:not(:disabled) {
    background: #0080E6; /* Slightly darker */
    transform: translateY(-1px);
    box-shadow: var(--shadow-hover);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:focus-visible {
    outline: none;
    box-shadow: var(--shadow-focus);
  }
  
  &:disabled {
    background: var(--myb-neutral-3);
    color: var(--myb-neutral-1);
    cursor: not-allowed;
    transform: none;
  }
}
```

### Secondary Button

```css
.btn-secondary {
  background: white;
  color: var(--myb-navy);
  font-family: 'Museo Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 32px;
  border: 2px solid var(--myb-neutral-2);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover:not(:disabled) {
    border-color: var(--myb-primary-blue);
    color: var(--myb-primary-blue);
    box-shadow: var(--shadow-sm);
  }
  
  &:focus-visible {
    outline: none;
    box-shadow: var(--shadow-focus);
  }
  
  &:disabled {
    background: var(--myb-neutral-1);
    color: var(--myb-neutral-3);
    border-color: var(--myb-neutral-2);
    cursor: not-allowed;
  }
}
```

### Ghost Button

```css
.btn-ghost {
  background: transparent;
  color: var(--myb-primary-blue);
  font-family: 'Museo Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 24px;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover:not(:disabled) {
    background: var(--myb-light-blue);
  }
  
  &:focus-visible {
    outline: none;
    box-shadow: var(--shadow-focus);
  }
}
```

### Button Sizes

```css
/* Large - Primary CTAs */
.btn-lg {
  padding: 16px 40px;
  font-size: 18px;
}

/* Medium - Default */
.btn-md {
  padding: 14px 32px;
  font-size: 16px;
}

/* Small - Secondary actions */
.btn-sm {
  padding: 10px 24px;
  font-size: 14px;
}
```

## 5.2 Session Cards

### Base Card Structure

```css
.session-card {
  /* Layout */
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid var(--myb-neutral-2);
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  
  /* Transitions */
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Interactive states */
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    border-color: var(--myb-primary-blue);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:focus-visible {
    outline: 2px solid var(--myb-primary-blue);
    outline-offset: 2px;
  }
}
```

### Card Components

```css
/* Thumbnail Image */
.session-card__thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}

/* Content Area */
.session-card__content {
  padding: var(--space-3); /* 24px */
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Title */
.session-card__title {
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: var(--myb-navy);
  margin-bottom: var(--space-2);
  
  /* Truncate if too long */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Metadata Bar */
.session-card__metadata {
  display: flex;
  gap: var(--space-2);
  align-items: center;
  font-size: 14px;
  color: var(--myb-neutral-4);
  margin-bottom: var(--space-2);
}

/* Category Badge */
.session-card__category {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  background: var(--myb-light-blue);
  color: var(--myb-navy);
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Grade Level Tag */
.session-card__grade {
  font-size: 14px;
  color: var(--myb-neutral-4);
  font-weight: 500;
}

/* Duration */
.session-card__duration {
  font-size: 14px;
  color: var(--myb-neutral-4);
  font-weight: 300;
}
```

### Card Skeleton Loader

```css
.session-card--loading {
  /* Pulse animation for loading state */
  .session-card__thumbnail {
    background: linear-gradient(
      90deg,
      var(--myb-neutral-1) 0%,
      var(--myb-neutral-2) 50%,
      var(--myb-neutral-1) 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## 5.3 Form Elements

### Text Input

```css
.input {
  /* Base styles */
  width: 100%;
  padding: 12px 16px;
  font-family: 'Museo Sans', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: var(--myb-navy);
  background: white;
  border: 1px solid var(--myb-neutral-3);
  border-radius: var(--radius-md);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Interactive states */
  &:hover:not(:disabled) {
    border-color: var(--myb-primary-blue);
  }
  
  &:focus {
    outline: none;
    border-color: var(--myb-primary-blue);
    box-shadow: var(--shadow-focus);
  }
  
  &:disabled {
    background: var(--myb-neutral-1);
    color: var(--myb-neutral-4);
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: var(--myb-neutral-3);
  }
  
  &[aria-invalid="true"] {
    border-color: var(--color-error);
  }
}
```

### Dropdown Select

```css
.select {
  /* Inherits from .input */
  appearance: none;
  background-image: url("data:image/svg+xml,..."); /* Custom arrow */
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
  cursor: pointer;
  
  &:hover:not(:disabled) {
    border-color: var(--myb-primary-blue);
  }
  
  &:focus {
    outline: none;
    border-color: var(--myb-primary-blue);
    box-shadow: var(--shadow-focus);
  }
}
```

### Radio Buttons

```css
.radio-group {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.radio-button {
  /* Custom radio button as button-style */
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  color: var(--myb-navy);
  background: white;
  border: 2px solid var(--myb-neutral-2);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Hide native radio */
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* Hover state */
  &:hover {
    border-color: var(--myb-primary-blue);
  }
  
  /* Selected state */
  input[type="radio"]:checked + & {
    background: var(--myb-primary-blue);
    color: white;
    border-color: var(--myb-primary-blue);
  }
  
  /* Focus state */
  input[type="radio"]:focus-visible + & {
    box-shadow: var(--shadow-focus);
  }
}
```

### Form Labels

```css
.form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--myb-navy);
  margin-bottom: var(--space-1);
}

.form-label--required::after {
  content: " *";
  color: var(--color-error);
}

.form-helper {
  display: block;
  font-size: 14px;
  color: var(--myb-neutral-4);
  margin-top: var(--space-1);
}

.form-error {
  display: block;
  font-size: 14px;
  color: var(--color-error);
  margin-top: var(--space-1);
}
```

## 5.4 Modal

### Modal Container

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--overlay-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
  z-index: 1000;
  
  /* Fade in animation */
  animation: fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal {
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  width: 100%;
  max-width: var(--container-md); /* 768px */
  max-height: 90vh;
  overflow-y: auto;
  
  /* Scale in animation */
  animation: scaleIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal__header {
  padding: var(--space-5) var(--space-5) 0;
  border-bottom: 1px solid var(--myb-neutral-2);
  padding-bottom: var(--space-4);
}

.modal__title {
  font-size: 32px;
  font-weight: 900;
  color: var(--myb-navy);
}

.modal__content {
  padding: var(--space-5);
}

.modal__footer {
  padding: 0 var(--space-5) var(--space-5);
  display: flex;
  gap: var(--space-2);
  justify-content: flex-end;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { 
    opacity: 0;
    transform: scale(0.95);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}
```

## 5.5 Video Player Component

### Vimeo Embed Container

```css
.video-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  background: var(--myb-navy);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* Loading state */
.video-container--loading {
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: "";
    width: 48px;
    height: 48px;
    border: 4px solid var(--myb-light-blue);
    border-top-color: var(--myb-primary-blue);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Video Progress Bar (Custom UI)

```css
.video-progress {
  position: relative;
  width: 100%;
  height: 8px;
  background: var(--myb-neutral-2);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-top: var(--space-3);
}

.video-progress__fill {
  height: 100%;
  background: var(--myb-primary-blue);
  transition: width 0.3s ease;
  border-radius: var(--radius-full);
}

.video-progress__label {
  font-size: 14px;
  color: var(--myb-neutral-4);
  margin-top: var(--space-1);
}
```

## 5.6 Navigation Header

```css
.site-header {
  background: var(--myb-navy);
  color: white;
  padding: var(--space-3) 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-md);
}

.site-header__container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-header__logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 24px;
  font-weight: 900;
  color: white;
  text-decoration: none;
}

.site-header__nav {
  display: flex;
  gap: var(--space-4);
}

.site-header__link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
}
```

## 5.7 Footer

```css
.site-footer {
  background: var(--myb-navy);
  color: white;
  padding: var(--space-10) 0 var(--space-5);
  margin-top: var(--space-16);
}

.site-footer__container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.site-footer__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-8);
  margin-bottom: var(--space-8);
}

.site-footer__section-title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: var(--space-3);
}

.site-footer__link {
  color: var(--myb-light-blue);
  text-decoration: none;
  font-size: 14px;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
}

.site-footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--space-4);
  text-align: center;
  font-size: 14px;
  color: var(--myb-neutral-3);
}
```

---

# 6. ANIMATION & INTERACTION

## 6.1 Animation Philosophy

**Subtle & Professional:**
- Animations should feel natural, never distracting
- Use for feedback and guiding attention, not decoration
- Prefer fades over slides, gentle over dramatic
- Total animation duration: 150ms-300ms maximum

## 6.2 Timing Functions

```css
:root {
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);  /* Smooth default */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);         /* Start slow */
  --ease-out: cubic-bezier(0, 0, 0.2, 1);        /* End slow */
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1); /* Subtle bounce */
}
```

## 6.3 Interaction Patterns

### Hover States

```css
/* Cards */
.session-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  transition: all 0.2s var(--ease-default);
}

/* Buttons */
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-hover);
  transition: all 0.2s var(--ease-default);
}

/* Links */
a:hover {
  opacity: 0.8;
  transition: opacity 0.15s var(--ease-default);
}
```

### Focus States

```css
/* Always visible, never relying on color alone */
*:focus-visible {
  outline: 2px solid var(--myb-primary-blue);
  outline-offset: 2px;
  transition: outline-offset 0.15s var(--ease-default);
}
```

### Loading States

```css
/* Spinner */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--myb-light-blue);
  border-top-color: var(--myb-primary-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Pulse for text placeholders */
.loading-text {
  background: linear-gradient(
    90deg,
    var(--myb-neutral-1) 0%,
    var(--myb-neutral-2) 50%,
    var(--myb-neutral-1) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

### Page Transitions

```css
/* Fade in content on page load */
.page-content {
  animation: fadeIn 0.3s var(--ease-default);
}

@keyframes fadeIn {
  from { 
    opacity: 0;
    transform: translateY(10px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Scroll Animations

```css
/* Stagger card appearance on scroll */
.session-card {
  opacity: 0;
  animation: fadeInUp 0.4s var(--ease-default) forwards;
}

.session-card:nth-child(1) { animation-delay: 0.05s; }
.session-card:nth-child(2) { animation-delay: 0.1s; }
.session-card:nth-child(3) { animation-delay: 0.15s; }
.session-card:nth-child(4) { animation-delay: 0.2s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Use Intersection Observer to trigger on scroll */
```

## 6.4 Micro-interactions

### Button Click Feedback

```css
.btn-primary:active {
  transform: translateY(0);
  transition: transform 0.05s var(--ease-default);
}
```

### Form Input Focus

```css
.input:focus {
  border-color: var(--myb-primary-blue);
  box-shadow: var(--shadow-focus);
  transition: all 0.2s var(--ease-default);
}
```

### Checkbox/Radio Selection

```css
.radio-button input:checked + label {
  background: var(--myb-primary-blue);
  color: white;
  transform: scale(1.02);
  transition: all 0.15s var(--ease-bounce);
}
```

---

# 7. RESPONSIVE DESIGN

## 7.1 Breakpoint System

```css
:root {
  --breakpoint-sm: 640px;   /* Large phones */
  --breakpoint-md: 768px;   /* Tablets */
  --breakpoint-lg: 1024px;  /* Small laptops */
  --breakpoint-xl: 1280px;  /* Desktop */
  --breakpoint-2xl: 1536px; /* Large desktop */
}
```

### Media Query Strategy

```css
/* Desktop-first approach */

/* Default: Desktop (1024px+) */
.schedule-grid {
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

/* Tablet: 768px - 1023px */
@media (max-width: 1023px) {
  .schedule-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-3);
  }
}

/* Large Mobile: 640px - 767px */
@media (max-width: 767px) {
  .schedule-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-3);
  }
}

/* Small Mobile: <640px */
@media (max-width: 639px) {
  .schedule-grid {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }
}
```

## 7.2 Responsive Typography

```css
/* Fluid typography using clamp() */
.h1 {
  font-size: clamp(40px, 5vw, 64px);
  line-height: 1.25;
}

.h2 {
  font-size: clamp(32px, 4vw, 40px);
  line-height: 1.4;
}

.h3 {
  font-size: clamp(24px, 3vw, 32px);
  line-height: 1.5;
}

/* Body text remains consistent */
.body-1 {
  font-size: clamp(16px, 1.2vw, 20px);
}
```

## 7.3 Mobile-Specific Considerations

### Touch Targets

```css
/* Minimum 44x44px for all interactive elements */
.btn-mobile {
  min-height: 44px;
  min-width: 44px;
}

/* Increase padding for easier tapping */
@media (max-width: 767px) {
  .session-card {
    padding: var(--space-4);
  }
  
  .btn-primary {
    padding: 16px 32px;
  }
}
```

### Mobile Navigation

```css
@media (max-width: 767px) {
  .site-header__nav {
    position: fixed;
    top: 0;
    left: -100%;
    width: 80%;
    height: 100vh;
    background: var(--myb-navy);
    flex-direction: column;
    padding: var(--space-8) var(--space-4);
    transition: left 0.3s var(--ease-default);
  }
  
  .site-header__nav--open {
    left: 0;
  }
  
  /* Hamburger menu button */
  .menu-toggle {
    display: block;
    width: 44px;
    height: 44px;
  }
}
```

### Modal Mobile Behavior

```css
@media (max-width: 767px) {
  .modal {
    max-width: 100%;
    margin: 0;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 90vh;
  }
  
  /* Slide up from bottom animation */
  animation: slideUp 0.3s var(--ease-default);
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
```

### Responsive Images

```css
.session-card__thumbnail {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  
  /* Lazy loading with placeholder */
  background: var(--myb-neutral-1);
}

/* Use srcset for responsive images */
<img 
  src="session-thumb-800.jpg"
  srcset="
    session-thumb-400.jpg 400w,
    session-thumb-800.jpg 800w,
    session-thumb-1200.jpg 1200w
  "
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 50vw,
    25vw
  "
  alt="Session title"
  loading="lazy"
/>
```

---

# 8. PAGE SPECIFICATIONS

## 8.1 Homepage (Email Entry)

### Layout Structure

```
┌──────────────────────────────────────────────┐
│         [myBlueprint Logo]                   │
├──────────────────────────────────────────────┤
│                                              │
│         CAREER LAUNCH WEEK                   │
│         December 1-5, 2025                   │
│                                              │
│    Explore 25+ career sessions across        │
│    healthcare, technology, trades, and more  │
│                                              │
│   ┌────────────────────────────────────┐    │
│   │  Enter your email to get started   │    │
│   │  ┌──────────────────────────────┐  │    │
│   │  │ your.email@schoolboard.ca    │  │    │
│   │  └──────────────────────────────┘  │    │
│   │                                    │    │
│   │         [Continue →]               │    │
│   └────────────────────────────────────┘    │
│                                              │
│   First time? You'll answer a few quick     │
│   questions (one time only)                 │
│                                              │
└──────────────────────────────────────────────┘
```

### Design Specifications

**Hero Section:**
```css
.homepage-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--myb-off-white) 0%,
    var(--myb-light-blue) 100%
  );
  padding: var(--space-8) var(--space-4);
}

.homepage-hero__content {
  max-width: 600px;
  text-align: center;
}

.homepage-hero__title {
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 900;
  color: var(--myb-navy);
  margin-bottom: var(--space-3);
}

.homepage-hero__subtitle {
  font-size: clamp(18px, 2vw, 22px);
  color: var(--myb-neutral-5);
  margin-bottom: var(--space-8);
}
```

**Email Entry Card:**
```css
.email-entry-card {
  background: white;
  padding: var(--space-6);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  margin-bottom: var(--space-4);
}

.email-entry__label {
  font-size: 18px;
  font-weight: 700;
  color: var(--myb-navy);
  margin-bottom: var(--space-3);
  text-align: center;
}

.email-entry__input {
  width: 100%;
  padding: 16px;
  font-size: 18px;
  margin-bottom: var(--space-3);
}

.email-entry__submit {
  width: 100%;
  padding: 16px 32px;
  font-size: 18px;
}
```

## 8.2 Profile Setup Form

### Layout Structure

```
┌──────────────────────────────────────────────┐
│   Quick Setup (You'll only do this once!)   │
│                                              │
│   What's your name?                          │
│   ┌────────────────────────────────────┐    │
│   │ Jane Smith                         │    │
│   └────────────────────────────────────┘    │
│                                              │
│   Which school?                              │
│   ┌────────────────────────────────────┐    │
│   │ [Select from dropdown...]          │    │
│   └────────────────────────────────────┘    │
│                                              │
│   What's your role?                          │
│   [Guidance] [Teacher] [Admin] [Other]       │
│                                              │
│              [Get Started]                   │
└──────────────────────────────────────────────┘
```

### Design Specifications

```css
.profile-setup {
  max-width: 600px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-4);
}

.profile-setup__title {
  font-size: 32px;
  font-weight: 900;
  color: var(--myb-navy);
  text-align: center;
  margin-bottom: var(--space-6);
}

.profile-setup__field {
  margin-bottom: var(--space-4);
}

.profile-setup__role-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-2);
}

@media (max-width: 640px) {
  .profile-setup__role-group {
    grid-template-columns: 1fr;
  }
}
```

## 8.3 Schedule Page (4-Block Layout)

### Layout Structure

```
┌──────────────────────────────────────────────────────────┐
│  [Header: CAREER LAUNCH WEEK - December 1-5]            │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─ BLOCK 1 - Choose any session ────────────────────┐  │
│  │                                                    │  │
│  │  ┌────┐ ┌────┐ ┌────┐ ┌────┐                     │  │
│  │  │[T] │ │[T] │ │[T] │ │[T] │  [T] = Thumbnail    │  │
│  │  │Ses │ │Ses │ │Ses │ │Ses │  with metadata       │  │
│  │  │sion│ │sion│ │sion│ │sion│                     │  │
│  │  └────┘ └────┘ └────┘ └────┘                     │  │
│  │                                                    │  │
│  │  ┌────┐ ┌────┐                                    │  │
│  │  │[T] │ │[T] │                                    │  │
│  │  │Ses │ │Ses │                                    │  │
│  │  │sion│ │sion│                                    │  │
│  │  └────┘ └────┘                                    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  [Similar layout for Blocks 2, 3, 4]                    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Design Specifications

**Block Section:**
```css
.block-section {
  margin-bottom: var(--space-10);
  padding: var(--space-6);
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.block-section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-4);
  border-bottom: 2px solid var(--myb-neutral-2);
}

.block-section__title {
  font-size: 32px;
  font-weight: 900;
  color: var(--myb-navy);
}

.block-section__subtitle {
  font-size: 16px;
  color: var(--myb-neutral-4);
  font-weight: 500;
}

.block-section__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

/* Responsive */
@media (max-width: 1023px) {
  .block-section__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 767px) {
  .block-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 639px) {
  .block-section__grid {
    grid-template-columns: 1fr;
  }
}
```

**Page Header:**
```css
.schedule-header {
  text-align: center;
  padding: var(--space-10) var(--space-4) var(--space-8);
  background: linear-gradient(
    135deg,
    var(--myb-off-white) 0%,
    var(--myb-light-blue) 100%
  );
}

.schedule-header__title {
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 900;
  color: var(--myb-navy);
  margin-bottom: var(--space-2);
}

.schedule-header__dates {
  font-size: clamp(20px, 2.5vw, 28px);
  font-weight: 700;
  color: var(--myb-primary-blue);
  margin-bottom: var(--space-4);
}

.schedule-header__description {
  font-size: 18px;
  color: var(--myb-neutral-5);
  max-width: 600px;
  margin: 0 auto;
}
```

## 8.4 Session Detail Page

### Layout Structure

```
┌──────────────────────────────────────────────────────────┐
│  [< Back to Schedule]                                    │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  NURSING CAREER PATHWAYS                          │  │
│  │  Healthcare | 35 minutes | Grades 9-12            │  │
│  │  Presented by Dr. Sarah Johnson, RN                │  │
│  │                                                    │  │
│  │  [Watch with Your Class] ← Large CTA               │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │         [TRAILER VIDEO - 16:9 aspect]             │  │
│  │         Vimeo embedded player                      │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  About This Session                                      │
│  [3-4 paragraphs of description text]                   │
│                                                          │
│  What You'll Learn                                       │
│  • Learning objective 1                                 │
│  • Learning objective 2                                 │
│  • Learning objective 3                                 │
│                                                          │
│  About the Presenter                                     │
│  ┌────┐                                                 │
│  │[📷]│  Dr. Sarah Johnson, RN                          │
│  └────┘  [Bio text - 2-3 paragraphs]                    │
│                                                          │
│  [Watch with Your Class] ← Repeated CTA                  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Design Specifications

**Hero Section:**
```css
.session-hero {
  background: linear-gradient(
    135deg,
    var(--myb-off-white) 0%,
    var(--myb-light-blue) 100%
  );
  padding: var(--space-8) var(--space-4);
  margin-bottom: var(--space-10);
}

.session-hero__back {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: 16px;
  font-weight: 500;
  color: var(--myb-primary-blue);
  text-decoration: none;
  margin-bottom: var(--space-4);
  transition: opacity 0.2s;
}

.session-hero__title {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 900;
  color: var(--myb-navy);
  margin-bottom: var(--space-3);
}

.session-hero__metadata {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
  font-size: 16px;
  color: var(--myb-neutral-4);
  margin-bottom: var(--space-5);
}

.session-hero__cta {
  width: 100%;
  max-width: 400px;
}
```

**Content Sections:**
```css
.session-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--space-4) var(--space-12);
}

.session-section {
  margin-bottom: var(--space-10);
}

.session-section__title {
  font-size: 28px;
  font-weight: 900;
  color: var(--myb-navy);
  margin-bottom: var(--space-4);
}

.session-section__text {
  font-size: 18px;
  line-height: 1.8;
  color: var(--myb-neutral-5);
  margin-bottom: var(--space-3);
}

.session-section__list {
  list-style: none;
  padding: 0;
}

.session-section__list-item {
  position: relative;
  padding-left: var(--space-4);
  font-size: 18px;
  line-height: 1.8;
  color: var(--myb-neutral-5);
  margin-bottom: var(--space-2);
}

.session-section__list-item::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--myb-primary-blue);
  font-weight: 900;
  font-size: 24px;
}
```

**Presenter Bio:**
```css
.presenter-bio {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
  padding: var(--space-5);
  background: var(--myb-off-white);
  border-radius: var(--radius-lg);
}

.presenter-bio__photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.presenter-bio__content {
  flex: 1;
}

.presenter-bio__name {
  font-size: 24px;
  font-weight: 900;
  color: var(--myb-navy);
  margin-bottom: var(--space-2);
}

.presenter-bio__text {
  font-size: 16px;
  line-height: 1.6;
  color: var(--myb-neutral-5);
}

@media (max-width: 640px) {
  .presenter-bio {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
```

## 8.5 Class Context Form Modal

### Layout Structure

```
┌──────────────────────────────────────────────┐
│  Help us understand your impact! 📊          │
│                                              │
│  How many students are watching?             │
│  ┌──────────┐ ┌──────────┐ ┌────────────┐   │
│  │Less than │ │ 25 to 35 │ │Large group │   │
│  │   25     │ │          │ │            │   │
│  └──────────┘ └──────────┘ └────────────┘   │
│                                              │
│  [If "Large group" selected]                 │
│  How many students? [_____]                  │
│                                              │
│  What grade level?                           │
│  [Grade 9-10] [Grade 11-12] [Mixed]          │
│                                              │
│         [Start Video] ← Primary CTA          │
│                                              │
│  Note: This helps presenters see their       │
│  reach. We'll remember your selection.       │
└──────────────────────────────────────────────┘
```

### Design Specifications

```css
.context-modal {
  max-width: 600px;
}

.context-modal__icon {
  font-size: 48px;
  text-align: center;
  margin-bottom: var(--space-3);
}

.context-modal__title {
  font-size: 28px;
  font-weight: 900;
  color: var(--myb-navy);
  text-align: center;
  margin-bottom: var(--space-6);
}

.context-modal__field {
  margin-bottom: var(--space-5);
}

.context-modal__label {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: var(--myb-navy);
  margin-bottom: var(--space-3);
}

.context-modal__options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-2);
}

.context-modal__option {
  /* Styled radio button */
  padding: var(--space-3);
  text-align: center;
  border: 2px solid var(--myb-neutral-2);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s;
}

.context-modal__option--selected {
  background: var(--myb-primary-blue);
  color: white;
  border-color: var(--myb-primary-blue);
}

.context-modal__note {
  font-size: 14px;
  color: var(--myb-neutral-4);
  text-align: center;
  margin-top: var(--space-4);
}

.context-modal__submit {
  width: 100%;
  padding: 16px 32px;
  font-size: 18px;
  margin-top: var(--space-5);
}

/* Large group number input */
.context-modal__number-input {
  margin-top: var(--space-3);
  animation: slideDown 0.2s var(--ease-default);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 640px) {
  .context-modal__options {
    grid-template-columns: 1fr;
  }
}
```

## 8.6 Video Watching Page

### Layout Structure

```
┌──────────────────────────────────────────────────────────┐
│  [< Back to Schedule]                                    │
│                                                          │
│  Nursing Career Pathways                                 │
│  Dr. Sarah Johnson, RN                                   │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │                                                    │  │
│  │         [FULL SESSION VIDEO]                       │  │
│  │         Vimeo player - 16:9                        │  │
│  │         Full controls available                    │  │
│  │                                                    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━ 78% complete                  │
│                                                          │
│  [Watching with: 30 students, Grade 11-12]               │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Design Specifications

```css
.watching-page {
  min-height: 100vh;
  background: var(--myb-navy);
  color: white;
  padding: var(--space-6) var(--space-4);
}

.watching-page__header {
  max-width: 1200px;
  margin: 0 auto var(--space-6);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.watching-page__back {
  color: var(--myb-light-blue);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
}

.watching-page__info {
  text-align: center;
  max-width: 900px;
  margin: 0 auto var(--space-6);
}

.watching-page__title {
  font-size: 32px;
  font-weight: 900;
  margin-bottom: var(--space-2);
}

.watching-page__presenter {
  font-size: 18px;
  color: var(--myb-light-blue);
}

.watching-page__video {
  max-width: 1200px;
  margin: 0 auto var(--space-4);
}

.watching-page__progress {
  max-width: 900px;
  margin: 0 auto var(--space-4);
}

.watching-page__context {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  color: var(--myb-light-blue);
  padding: var(--space-3);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
}
```

---

# 9. ACCESSIBILITY STANDARDS

## 9.1 WCAG 2.1 AA Compliance

### Color Contrast Requirements

**Text Contrast Ratios:**
```
Large text (18px+ or 14px+ bold): 3:1 minimum
Normal text: 4.5:1 minimum
UI components: 3:1 minimum
```

**Brand Color Compliance:**
```css
/* Passing combinations */
--myb-navy on white: 14.4:1 ✓
--myb-neutral-5 on white: 7.2:1 ✓
--myb-primary-blue on white: 3.1:1 ✓ (large text only)
white on --myb-navy: 14.4:1 ✓
white on --myb-primary-blue: 3.8:1 ✓
```

### Focus Indicators

```css
/* Always visible, never removed */
*:focus-visible {
  outline: 2px solid var(--myb-primary-blue);
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  *:focus-visible {
    outline: 3px solid currentColor;
  }
}
```

## 9.2 Semantic HTML

### Document Structure

```html
<!-- Proper heading hierarchy -->
<main>
  <h1>Career Launch Week</h1>
  
  <section aria-labelledby="block-1-heading">
    <h2 id="block-1-heading">Block 1</h2>
    
    <article aria-labelledby="session-1-title">
      <h3 id="session-1-title">Session Title</h3>
      <!-- Session content -->
    </article>
  </section>
</main>
```

### Form Accessibility

```html
<!-- Proper labels and ARIA -->
<div class="form-field">
  <label for="email-input" class="form-label">
    Email Address
    <span class="visually-hidden">(required)</span>
  </label>
  <input 
    type="email" 
    id="email-input"
    name="email"
    required
    aria-required="true"
    aria-invalid="false"
    aria-describedby="email-error"
  />
  <span id="email-error" class="form-error" role="alert">
    <!-- Error message appears here -->
  </span>
</div>
```

### Button Accessibility

```html
<!-- Descriptive button text -->
<button type="submit" aria-label="Start watching video">
  Start Video
</button>

<!-- Icon-only buttons need labels -->
<button aria-label="Close modal">
  <svg aria-hidden="true">
    <!-- X icon -->
  </svg>
</button>
```

## 9.3 Keyboard Navigation

### Focus Order

```css
/* Ensure logical tab order */
.session-card {
  /* Make entire card focusable and clickable */
  cursor: pointer;
  
  &:focus-visible {
    outline: 2px solid var(--myb-primary-blue);
    outline-offset: 2px;
  }
}

/* Skip links for screen readers */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--myb-navy);
  color: white;
  padding: var(--space-2) var(--space-3);
  z-index: 100;
  
  &:focus {
    top: 0;
  }
}
```

### Interactive Elements

```html
<!-- Keyboard accessible session cards -->
<article 
  class="session-card" 
  tabindex="0" 
  role="link"
  aria-label="View details for Nursing Career Pathways session"
  onkeydown="if(event.key === 'Enter' || event.key === ' ') { /* navigate */ }"
>
  <!-- Card content -->
</article>
```

## 9.4 Screen Reader Support

### ARIA Labels

```html
<!-- Descriptive regions -->
<nav aria-label="Main navigation">
  <!-- Nav links -->
</nav>

<main aria-label="Career session schedule">
  <!-- Main content -->
</main>

<!-- Live regions for dynamic content -->
<div aria-live="polite" aria-atomic="true">
  <!-- Status messages appear here -->
</div>

<!-- Modal dialog -->
<div 
  role="dialog" 
  aria-modal="true" 
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Help us understand your impact</h2>
  <p id="modal-description">Select your class size and grade level</p>
  <!-- Modal content -->
</div>
```

### Visually Hidden Text

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## 9.5 Motion & Animation

### Reduced Motion Support

```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Keep essential transitions */
  .btn-primary:hover {
    transform: none;
  }
  
  .session-card:hover {
    transform: none;
  }
}
```

---

# 10. IMPLEMENTATION CHECKLIST

## 10.1 Pre-Development Setup

### Design Tokens Export

```css
/* Save as: design-tokens.css */
:root {
  /* Colors */
  --myb-primary-blue: #0092FF;
  --myb-navy: #22224C;
  --myb-light-blue: #C6E7FF;
  --myb-off-white: #F6F6FF;
  --myb-neutral-1: #E5E9F1;
  --myb-neutral-2: #D9DFEA;
  --myb-neutral-3: #AAB7CB;
  --myb-neutral-4: #65738B;
  --myb-neutral-5: #485163;
  --myb-neutral-6: #252A33;
  
  /* Spacing */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
  --space-8: 64px;
  --space-10: 80px;
  --space-12: 96px;
  
  /* Typography */
  --font-primary: 'Museo Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-fallback: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(34, 34, 76, 0.05);
  --shadow-md: 0 4px 8px rgba(34, 34, 76, 0.08);
  --shadow-lg: 0 8px 24px rgba(34, 34, 76, 0.12);
  --shadow-xl: 0 16px 48px rgba(34, 34, 76, 0.15);
  
  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* Transitions */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 10.2 Component Development Checklist

### For Each Component:

- [ ] **Desktop layout implemented** (1024px+)
- [ ] **Tablet responsive** (768px-1023px)
- [ ] **Mobile responsive** (<767px)
- [ ] **Hover states defined** (desktop only)
- [ ] **Focus states visible** (all devices)
- [ ] **Active/pressed states** (all devices)
- [ ] **Disabled states** (if applicable)
- [ ] **Loading states** (if applicable)
- [ ] **Error states** (if applicable)
- [ ] **Empty states** (if applicable)
- [ ] **Keyboard navigation works**
- [ ] **Screen reader tested**
- [ ] **Color contrast passes** WCAG AA
- [ ] **Touch targets ≥44px** (mobile)
- [ ] **Animations respect** prefers-reduced-motion

## 10.3 Page Development Checklist

### For Each Page:

- [ ] **Semantic HTML structure**
- [ ] **Proper heading hierarchy** (H1 → H2 → H3)
- [ ] **ARIA labels where needed**
- [ ] **Skip links for keyboard users**
- [ ] **Meta tags (title, description)**
- [ ] **Open Graph tags** (social sharing)
- [ ] **Favicon and touch icons**
- [ ] **Font loading optimized**
- [ ] **Images lazy-loaded**
- [ ] **Critical CSS inlined**
- [ ] **First Contentful Paint <1.5s**
- [ ] **Time to Interactive <3s**
- [ ] **Lighthouse score >90**
- [ ] **Browser testing** (Chrome, Firefox, Safari, Edge)
- [ ] **Mobile testing** (iOS Safari, Android Chrome)

## 10.4 Quality Assurance

### Visual QA Checklist:

- [ ] **Brand colors used exclusively**
- [ ] **Museo Sans/Open Sans only**
- [ ] **8px spacing grid followed**
- [ ] **Consistent border radius**
- [ ] **Shadows applied correctly**
- [ ] **Typography scale matches spec**
- [ ] **Line heights appropriate**
- [ ] **Button sizes consistent**
- [ ] **Card layouts uniform**
- [ ] **Icons sized properly**
- [ ] **Images optimized**
- [ ] **No layout shift on load**

### Interaction QA Checklist:

- [ ] **All buttons clickable**
- [ ] **All links working**
- [ ] **Forms validate properly**
- [ ] **Error messages helpful**
- [ ] **Success states clear**
- [ ] **Modals open/close smoothly**
- [ ] **Video player functional**
- [ ] **Progress tracking works**
- [ ] **Cookie management correct**
- [ ] **Navigation intuitive**
- [ ] **Back button works**
- [ ] **Scroll behavior smooth**

### Accessibility QA Checklist:

- [ ] **Keyboard navigation complete**
- [ ] **Screen reader testing done**
- [ ] **Color contrast verified**
- [ ] **Focus indicators visible**
- [ ] **ARIA labels present**
- [ ] **Form labels associated**
- [ ] **Error announcements work**
- [ ] **Heading structure logical**
- [ ] **Alt text on images**
- [ ] **Video captions available**

## 10.5 Performance Benchmarks

### Target Metrics:

```
Desktop (Fast 3G):
├─ First Contentful Paint: <1.5s
├─ Largest Contentful Paint: <2.5s
├─ Time to Interactive: <3s
├─ Cumulative Layout Shift: <0.1
└─ First Input Delay: <100ms

Mobile (Slow 3G):
├─ First Contentful Paint: <2s
├─ Largest Contentful Paint: <3.5s
├─ Time to Interactive: <4s
├─ Cumulative Layout Shift: <0.1
└─ First Input Delay: <100ms

File Sizes:
├─ HTML: <50KB
├─ CSS: <100KB
├─ JavaScript: <150KB
├─ Session thumbnail: <100KB
├─ Total page weight: <1MB
└─ Video trailer: N/A (Vimeo hosted)
```

## 10.6 Browser Support Matrix

### Minimum Support:

```
Desktop:
├─ Chrome: Last 2 versions
├─ Firefox: Last 2 versions
├─ Safari: Last 2 versions
├─ Edge: Last 2 versions
└─ Opera: Last 2 versions

Mobile:
├─ iOS Safari: iOS 14+
├─ Android Chrome: Last 2 versions
└─ Samsung Internet: Last 2 versions

Tablet:
├─ iPad Safari: iPadOS 14+
└─ Android tablets: Last 2 versions
```

---

# APPENDIX

## A. Glossary of Terms

**Browse-First:** Design pattern where users can explore content before providing any information

**4-Block Structure:** Organization of 25 sessions into 4 periods matching Ontario school day structure

**Student Reach:** Total count of students exposed to content (sum of all class sizes)

**Viewing Event:** Single instance of an educator showing a session to their class

**Combined Form:** Single form collecting both educator profile and class context

**Session Card:** Visual component displaying session information in grid layout

**Museo Sans:** Primary brand typeface, display font for headlines

**Open Sans:** Fallback typeface when Museo Sans unavailable

**myBlueprint Navy:** Primary dark color (#22224C) for headings

**myBlueprint Blue:** Primary brand color (#0092FF) for CTAs

## B. Resources & References

### Design Files:
- [Link to Figma file - if available]
- [Link to design token JSON - if available]

### Brand Assets:
- myBlueprint Logo Package
- Icon Library
- Image Assets

### Technical Documentation:
- PRD: `/mnt/project/CAREER-LAUNCH-COMPLETE-PRD.md`
- MVP Spec: `/mnt/project/career-launch-mvp-specification.md`
- Feature Specs: `/mnt/project/career-launch-feature-specifications.md`

### External Tools:
- Vimeo Player SDK: https://developer.vimeo.com/player/sdk
- Google Fonts: https://fonts.google.com/
- Contrast Checker: https://webaim.org/resources/contrastchecker/

## C. Version History

**v1.0 - October 29, 2025**
- Initial comprehensive style guide
- Based on PRD v2.0 and MVP specifications
- Balanced hybrid aesthetic for educators and students
- Desktop-first responsive approach
- Strict myBlueprint brand adherence

---

**Document End**

*This style guide serves as the single source of truth for all design and development decisions for Career Launch Platform. For questions or clarifications, refer to the complete PRD or contact the design team.*
