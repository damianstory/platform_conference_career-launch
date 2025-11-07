---
title: Accessibility Requirements
description: WCAG 2.1 AA compliance specifications for booth detail pages
feature: Booth Detail Page - Accessibility
last-updated: 2025-11-07
version: 1.0.0
status: approved
---

# Accessibility Requirements

## Overview

This document specifies all accessibility requirements for booth detail pages to ensure WCAG 2.1 Level AA compliance. These requirements are mandatory for all components and interactions.

---

## WCAG 2.1 AA Compliance Targets

### Minimum Standards

- **Color Contrast**: 4.5:1 for normal text, 3:1 for large text
- **Touch Targets**: 44×44px minimum
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Semantic HTML with ARIA labels
- **Focus Indicators**: Visible and distinct
- **Motion**: Respect `prefers-reduced-motion`

---

## Color Contrast Requirements

### Text Contrast Ratios

**Primary Text (Body Copy):**
```css
/* PASS: 10.4:1 ratio */
color: #22224C; /* brand-navy */
background: #FFFFFF;

/* PASS: 9.8:1 ratio */
color: #485163; /* neutral-5 */
background: #FFFFFF;

/* FAIL: Need to adjust */
color: #AAB7CB; /* neutral-3 - too light */
background: #FFFFFF;
/* Solution: Use for disabled states only */
```

**Large Text (18px+ or 14px+ bold):**
```css
/* PASS: 3:1 ratio required */
color: #0092FF; /* primary-blue */
background: #FFFFFF;
/* Actual: 3.3:1 - acceptable for large text */
```

### Interactive Element Contrast

**Buttons:**
```css
/* Primary Button - PASS */
.btn-primary {
  background: #0092FF; /* primary-blue */
  color: #FFFFFF;
  /* Background contrast: 3.3:1 (acceptable for UI component) */
}

/* Secondary Button - PASS */
.btn-secondary {
  background: #FFFFFF;
  color: #0092FF;
  border: 2px solid #0092FF;
  /* Text contrast: 3.3:1 (large text, acceptable) */
  /* Border contrast: 3:1 minimum for UI components - PASS */
}
```

**Links:**
```css
/* Interactive link - PASS */
.link {
  color: #0092FF; /* 3.3:1 on white */
  text-decoration: underline; /* Additional visual indicator */
}

.link:hover {
  color: #22224C; /* 10.4:1 - higher contrast */
}
```

### Contrast Verification Tools

```typescript
// Use color contrast checker
const checkContrast = (foreground: string, background: string) => {
  // Return ratio value
  // WCAG AA requires:
  // - 4.5:1 for normal text
  // - 3:1 for large text (18px+ or 14px bold+)
  // - 3:1 for UI components and graphics
}

// Example usage
checkContrast('#0092FF', '#FFFFFF') // Returns: 3.3:1
// Acceptable for: Large text, buttons, icons
// Not acceptable for: Body text, small text
```

### Contrast Matrix

| Foreground | Background | Ratio | Normal Text | Large Text | UI Component |
|------------|------------|-------|-------------|------------|--------------|
| #22224C (navy) | #FFFFFF | 10.4:1 | PASS | PASS | PASS |
| #0092FF (blue) | #FFFFFF | 3.3:1 | FAIL | PASS | PASS |
| #485163 (neutral-5) | #FFFFFF | 9.8:1 | PASS | PASS | PASS |
| #65738B (neutral-4) | #FFFFFF | 5.2:1 | PASS | PASS | PASS |
| #AAB7CB (neutral-3) | #FFFFFF | 2.4:1 | FAIL | FAIL | FAIL |
| #FFFFFF | #0092FF | 3.3:1 | FAIL | PASS | PASS |
| #FFFFFF | #22224C | 10.4:1 | PASS | PASS | PASS |

---

## Keyboard Navigation

### Tab Order Specification

**Logical Focus Flow:**
1. Booth Header CTAs
2. Video Section (thumbnail button or iframe)
3. Engagement Activity (form/quiz/buttons)
4. Resource Cards (each card link)
5. Session Slides (fullscreen toggle, then iframe)
6. Company Story (if interactive elements)
7. Contact Info (email link, phone link, social links)

```html
<!-- Ensure proper tab order with tabindex if needed -->
<div class="booth-grid">
  <header tabindex="-1">
    <a href="..." tabindex="0">Primary CTA</a>
    <a href="..." tabindex="0">Secondary CTA</a>
  </header>

  <section aria-label="Video">
    <button tabindex="0">Play Video</button>
  </section>

  <!-- Continue logical order... -->
</div>
```

### Keyboard Shortcuts

**Global Shortcuts:**
- `Tab`: Move to next focusable element
- `Shift + Tab`: Move to previous focusable element
- `Enter` or `Space`: Activate buttons/links
- `Esc`: Close modals/fullscreen

**Video Player:**
- `Space`: Play/pause (when video focused)
- `F`: Fullscreen toggle

**Fullscreen Slides:**
- `Esc`: Exit fullscreen
- `Arrow Left/Right`: Navigate slides (if applicable)

### Focus Management

```css
/* Visible focus indicator - Required */
*:focus-visible {
  outline: 3px solid var(--primary-blue);
  outline-offset: 4px;
  border-radius: 4px;
}

/* Remove outline for mouse users */
*:focus:not(:focus-visible) {
  outline: none;
}

/* Enhanced focus for critical elements */
.btn:focus-visible {
  outline: 3px solid var(--primary-blue);
  outline-offset: 4px;
  box-shadow: 0 0 0 6px rgba(0, 146, 255, 0.2);
}
```

### Skip Links

```html
<!-- Allow keyboard users to skip to main content -->
<a href="#booth-content" class="skip-link">
  Skip to booth content
</a>

<main id="booth-content">
  <!-- Booth sections -->
</main>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--brand-navy);
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

---

## Screen Reader Support

### Semantic HTML Structure

```html
<!-- Proper heading hierarchy -->
<article aria-labelledby="booth-title">
  <header role="banner">
    <h1 id="booth-title">Company Name</h1>
    <p aria-describedby="booth-title">Tagline</p>
  </header>

  <section aria-labelledby="video-heading">
    <h2 id="video-heading" class="sr-only">Company Video</h2>
    <!-- Video content -->
  </section>

  <section aria-labelledby="resources-heading">
    <h2 id="resources-heading">Resources & Downloads</h2>
    <!-- Resource cards -->
  </section>

  <section aria-labelledby="about-heading">
    <h2 id="about-heading">About Us</h2>
    <!-- Company story -->
  </section>

  <section aria-labelledby="contact-heading">
    <h2 id="contact-heading">Contact Information</h2>
    <!-- Contact details -->
  </section>
</article>
```

### Screen Reader Only Text

```css
/* Hide visually but keep for screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Make visible on focus (for skip links) */
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

### ARIA Labels & Descriptions

**BoothHeader:**
```html
<header
  role="banner"
  aria-labelledby="booth-name"
  aria-describedby="booth-tagline"
>
  <img
    src="logo.png"
    alt="Company Name logo"
    role="img"
  />
  <h1 id="booth-name">Company Name</h1>
  <p id="booth-tagline">Tagline text</p>

  <nav aria-label="Primary booth actions">
    <a
      href="..."
      aria-label="Visit Company Name careers page (opens in new window)"
      target="_blank"
      rel="noopener noreferrer"
    >
      Explore Careers
    </a>
  </nav>
</header>
```

**VideoSection:**
```html
<section aria-label="Company video presentation">
  {!isPlaying ? (
    <button
      onClick={handlePlay}
      aria-label="Play company video: Life at TechVision"
    >
      <PlayIcon aria-hidden="true" />
      <span class="sr-only">Play Video</span>
    </button>
  ) : (
    <iframe
      src={videoUrl}
      title="Company Video: Life at TechVision"
      aria-label="Video player currently playing"
    />
  )}
</section>
```

**ResourceCards:**
```html
<section aria-label="Resources and downloads">
  <h2>Resources & Downloads</h2>

  <div role="list" aria-label="Resource list">
    {resources.map(resource => (
      <a
        href={resource.url}
        role="listitem"
        aria-label={`${resource.type}: ${resource.title}. ${resource.fileSize}. Opens in new window.`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconComponent aria-hidden="true" />
        <h3>{resource.title}</h3>
        <p>{resource.description}</p>
        <span aria-label={`File size: ${resource.fileSize}`}>
          {resource.fileSize}
        </span>
      </a>
    ))}
  </div>
</section>
```

**ContactInfo:**
```html
<section aria-label="Contact information">
  <h2>Contact Us</h2>

  <div role="list">
    <div role="listitem">
      <MailIcon aria-hidden="true" />
      <a
        href="mailto:students@company.com"
        aria-label="Email students at company dot com"
      >
        students@company.com
      </a>
    </div>

    <div role="listitem">
      <PhoneIcon aria-hidden="true" />
      <a
        href="tel:+1-800-555-TECH"
        aria-label="Call 1-800-555-TECH"
      >
        1-800-555-TECH
      </a>
    </div>
  </div>

  <nav aria-label="Social media links">
    {socialLinks.map(link => (
      <a
        href={link.url}
        aria-label={`Visit our ${link.platform} page (opens in new window)`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <PlatformIcon aria-hidden="true" />
      </a>
    ))}
  </nav>
</section>
```

### Live Regions

```html
<!-- Announce dynamic content updates -->
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
  class="sr-only"
>
  {statusMessage}
</div>

<!-- Example: Video loading -->
{isLoading && (
  <div role="status" aria-live="polite">
    Video loading, please wait...
  </div>
)}

{videoPlaying && (
  <div role="status" aria-live="polite">
    Video now playing
  </div>
)}
```

---

## Touch Target Sizing

### Minimum Touch Targets

**WCAG 2.1 Level AAA**: 44×44px minimum

```css
/* Ensure all interactive elements meet minimum */
button,
a,
input[type="button"],
input[type="submit"] {
  min-width: 44px;
  min-height: 44px;
}

/* Exception: Inline text links can be smaller */
p a {
  min-width: auto;
  min-height: auto;
  /* But should have adequate padding */
  padding: 4px 2px;
}
```

### Touch Target Spacing

```css
/* Minimum 8px spacing between touch targets */
.button-group button {
  margin: 0 4px; /* 8px total gap */
}

.social-links a {
  margin-right: 8px;
}

/* Or use gap in flex/grid */
.button-group {
  display: flex;
  gap: 8px;
}
```

### Mobile Touch Considerations

```css
@media (max-width: 767px) {
  /* Increase touch targets on mobile */
  button,
  a.btn {
    min-height: 48px;
    padding: 12px 24px;
  }

  /* Icon-only buttons */
  .icon-button {
    width: 48px;
    height: 48px;
  }

  /* Social links */
  .social-link {
    width: 48px;
    height: 48px;
  }

  /* List items with touch targets */
  .resource-card {
    min-height: 60px;
    padding: 12px;
  }
}
```

---

## Motion & Animation Accessibility

### Respect User Preferences

```css
/* Reduce or remove animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Keep essential feedback but make instant */
  button:hover,
  a:hover {
    transition: none;
  }

  /* Remove decorative animations */
  .animate-float,
  .animate-shimmer,
  .platinum-border::before {
    animation: none;
  }
}

/* Provide alternative feedback for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .btn:hover {
    /* Use color change instead of movement */
    background-color: var(--brand-navy);
  }

  .resource-card:hover {
    /* Use border instead of transform */
    border-color: var(--primary-blue);
    transform: none;
  }
}
```

### Vestibular Disorder Considerations

```css
/* Avoid parallax and large movements */
.safe-animation {
  /* Keep animations small and subtle */
  transform: translateY(-2px); /* Small movement OK */
}

.unsafe-animation {
  /* Avoid large movements or rotations */
  transform: translateY(-50px) rotate(45deg); /* Too much */
}

/* No auto-playing animations longer than 5 seconds */
.auto-animation {
  animation-duration: 3s; /* OK */
  animation-iteration-count: infinite;
}

/* Provide pause control for infinite animations */
.pausable-animation {
  animation-play-state: running;
}

.pausable-animation.paused {
  animation-play-state: paused;
}
```

---

## Form Accessibility

### Input Labels

```html
<!-- Always associate labels with inputs -->
<div class="form-field">
  <label for="email-input">
    Email Address
    <span aria-label="required" class="required">*</span>
  </label>
  <input
    type="email"
    id="email-input"
    name="email"
    required
    aria-required="true"
    aria-describedby="email-help email-error"
  />
  <p id="email-help" class="help-text">
    We'll never share your email
  </p>
  {error && (
    <p id="email-error" class="error-text" role="alert">
      {error}
    </p>
  )}
</div>
```

### Error Handling

```html
<!-- Clear error messages with ARIA -->
<form aria-label="Contact form">
  <div class="form-field" aria-invalid={hasError}>
    <label for="phone">Phone Number</label>
    <input
      type="tel"
      id="phone"
      aria-describedby="phone-error"
      aria-invalid={hasError}
    />
    {hasError && (
      <div id="phone-error" role="alert" aria-live="assertive">
        <AlertIcon aria-hidden="true" />
        Please enter a valid phone number
      </div>
    )}
  </div>

  <button type="submit" aria-label="Submit contact form">
    Submit
  </button>
</form>
```

---

## Loading & Status Indicators

### Loading States

```html
<!-- Accessible loading spinner -->
<div
  role="status"
  aria-live="polite"
  aria-label="Content loading"
>
  <div class="spinner" aria-hidden="true"></div>
  <span class="sr-only">Loading, please wait...</span>
</div>
```

### Progress Indicators

```html
<!-- Progress bar with ARIA -->
<div
  role="progressbar"
  aria-valuenow={percentComplete}
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label="Video upload progress"
>
  <div
    class="progress-bar-fill"
    style={{ width: `${percentComplete}%` }}
  ></div>
  <span class="sr-only">{percentComplete}% complete</span>
</div>
```

### Empty States

```html
<!-- Informative empty state -->
<div
  role="status"
  aria-label="No resources available"
  class="empty-state"
>
  <EmptyIcon aria-hidden="true" />
  <p>No resources available at this time</p>
</div>
```

---

## Multilingual Support

### Language Declaration

```html
<html lang="en">
  <head>
    <!-- ... -->
  </head>
  <body>
    <!-- English content -->

    <!-- French section (if applicable) -->
    <section lang="fr">
      <p>Contenu en français</p>
    </section>
  </body>
</html>
```

### Text Direction

```css
/* Support RTL languages if needed */
[dir="rtl"] .booth-header {
  flex-direction: row-reverse;
}

[dir="rtl"] .resource-card {
  text-align: right;
}
```

---

## Testing Procedures

### Automated Testing Tools

**Lighthouse Accessibility Audit:**
```bash
# Run Lighthouse accessibility audit
npx lighthouse http://localhost:3000/booths/tech-vision --only-categories=accessibility --view
```

**axe-core:**
```typescript
import { axe } from '@axe-core/react'

// In development environment
if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000)
}
```

**WAVE Browser Extension:**
- Install WAVE extension
- Navigate to booth page
- Review flagged issues

### Manual Testing Procedures

**Keyboard Navigation Test:**
1. Disable mouse/trackpad
2. Use only Tab, Shift+Tab, Enter, Space, Esc
3. Verify all functionality accessible
4. Check focus indicators visible
5. Confirm logical tab order

**Screen Reader Test:**
- **macOS**: VoiceOver (Cmd + F5)
- **Windows**: NVDA (free) or JAWS
- **iOS**: VoiceOver (Settings > Accessibility)
- **Android**: TalkBack (Settings > Accessibility)

**Test Checklist:**
- [ ] Page title announced correctly
- [ ] Headings hierarchy makes sense
- [ ] All images have alt text
- [ ] Links have descriptive text
- [ ] Buttons announce their purpose
- [ ] Form inputs have labels
- [ ] Error messages are announced
- [ ] Dynamic content updates announced

**Color Contrast Test:**
```bash
# Use color contrast analyzer
npm install -g color-contrast-checker

# Check specific colors
color-contrast-checker #0092FF #FFFFFF
# Output: 3.3:1 ratio
```

**Motion Testing:**
1. Enable "Reduce Motion" in OS settings
   - macOS: System Preferences > Accessibility > Display
   - Windows: Settings > Ease of Access > Display
2. Reload page
3. Verify animations reduced or removed
4. Check functionality still works

---

## Accessibility Checklist

### Pre-Launch Checklist

**Perceivable:**
- [ ] All non-text content has text alternative
- [ ] Color contrast meets WCAG AA standards (4.5:1 normal, 3:1 large)
- [ ] Text can be resized up to 200% without loss of functionality
- [ ] Content is not solely distinguished by color

**Operable:**
- [ ] All functionality available via keyboard
- [ ] No keyboard traps
- [ ] Timing is adjustable (if applicable)
- [ ] No content flashes more than 3 times per second
- [ ] Skip links provided
- [ ] Focus indicators visible
- [ ] Touch targets minimum 44×44px

**Understandable:**
- [ ] Language of page identified
- [ ] Navigation consistent across pages
- [ ] Form labels and instructions provided
- [ ] Error messages clear and helpful
- [ ] No unexpected context changes

**Robust:**
- [ ] Valid HTML markup
- [ ] ARIA used correctly
- [ ] Name, role, value available for all UI components
- [ ] Status messages identifiable programmatically

### Component-Specific Checks

**BoothHeader:**
- [ ] Logo has alt text
- [ ] Heading hierarchy correct (h1 for booth name)
- [ ] CTAs have descriptive labels
- [ ] Focus order logical

**VideoSection:**
- [ ] Play button has aria-label
- [ ] Video player keyboard accessible
- [ ] Captions available (if video has audio)
- [ ] Iframe has title attribute

**EngagementActivity:**
- [ ] Form inputs have labels
- [ ] Required fields indicated
- [ ] Error messages use aria-live
- [ ] Submit button has clear label

**ResourceCards:**
- [ ] Each card is keyboard focusable
- [ ] Card purpose clear from text alone
- [ ] File type and size announced
- [ ] External links indicate they open new window

**SessionSlides:**
- [ ] Iframe has descriptive title
- [ ] Fullscreen toggle has aria-label
- [ ] Fullscreen mode keyboard exitable

**CompanyStory:**
- [ ] Text readable at 200% zoom
- [ ] Heading hierarchy maintained
- [ ] Content not truncated unexpectedly

**ContactInfo:**
- [ ] Email/phone links have aria-labels
- [ ] Social links indicate platform and new window
- [ ] Address formatted for screen readers

---

## Resources & References

### WCAG 2.1 Guidelines

- [WCAG 2.1 Level AA Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&levels=aa)
- [Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/)
- [How to Meet WCAG](https://www.w3.org/WAI/WCAG21/quickref/)

### Testing Tools

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)
- [Screen Reader Testing](https://www.nvaccess.org/) (NVDA)

### Best Practices

- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Resources](https://webaim.org/resources/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

---

## Related Documentation

- [Section Component Specifications](./section-specifications.md)
- [Interaction Specifications](./interaction-specifications.md)
- [Responsive Behavior](./responsive-behavior.md)
