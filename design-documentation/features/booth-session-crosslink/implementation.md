---
title: Session Cross-Link Implementation Guide
description: Developer-focused integration guide for adding session cross-links to booth detail pages
feature: booth-session-crosslink
last-updated: 2025-11-22
version: 1.0.0
related-files:
  - README.md
  - screen-states.md
  - ../../../components/booths/SessionCrossLink.tsx
  - ../../../types/booth.ts
  - ../../../data/sample-booths.ts
dependencies:
  - Next.js 14 App Router
  - Tailwind CSS
  - Session data structure
status: approved
---

# Session Cross-Link Implementation Guide

## Quick Start

### 1. Update Booth Data

Add `associatedSessionSlug` field to booth objects that have presented sessions:

```typescript
// /data/sample-booths.ts

export const constructionBooth: PlatinumBoothData = {
  id: 'future-build-construction',
  name: 'FutureBuild Construction',
  slug: 'future-build-construction',
  tier: 'platinum',
  // ... other fields ...

  // NEW: Add session association
  associatedSessionSlug: 'building-tomorrow-construction-careers',

  // ... rest of booth data ...
}
```

**Field Details**:
- **Type**: `string | undefined`
- **Value**: Session slug exactly as it appears in `/data/sample-sessions.ts`
- **Optional**: Only add for booths with associated sessions (~30% of booths)
- **Validation**: Must match existing session slug (component will not render if invalid)

---

### 2. Import and Integrate Component

Add SessionCrossLink to booth detail page layout:

```typescript
// /app/booths/[slug]/page.tsx

import SessionCrossLink from '@/components/booths/SessionCrossLink';
import { getSessionBySlug } from '@/data/sample-sessions';

export default function BoothDetailPage({ params }: { params: { slug: string } }) {
  const booth = getBoothBySlug(params.slug);

  if (!booth) {
    notFound();
  }

  return (
    <div className="booth-container">
      {/* Existing sections */}
      <BoothHeader {...booth} />

      <div className="grid grid-cols-12 gap-6">
        <VideoSection video={booth.video} />
        {booth.tier === 'platinum' && booth.sessionSlides && (
          <SessionSlidesSection slides={booth.sessionSlides} />
        )}
      </div>

      <ResourcesSection resources={booth.resources} />

      {/* NEW: Session Cross-Link */}
      {booth.associatedSessionSlug && (
        <SessionCrossLink
          session={getSessionBySlug(booth.associatedSessionSlug)!}
        />
      )}

      {/* Existing sections */}
      <div className="grid grid-cols-12 gap-6">
        <AboutUsSection description={booth.description} />
        <ContactSection contact={booth.contact} />
      </div>
    </div>
  );
}
```

**Placement**: Between `<ResourcesSection />` and About Us/Contact sections
**Conditional Rendering**: Only renders when `associatedSessionSlug` exists and is valid
**Error Handling**: Component returns `null` if session not found (graceful degradation)

---

## Component API Reference

### Props

```typescript
interface SessionCrossLinkProps {
  session: Session;
  className?: string;
}
```

**`session`** (required)
- **Type**: `Session` (from `/types/index.ts`)
- **Description**: Complete session object with all metadata
- **Source**: Retrieved via `getSessionBySlug(booth.associatedSessionSlug)`
- **Required Fields**: `id`, `slug`, `title`, `block`, `duration`, `industry?`, `thumbnail?`

**`className`** (optional)
- **Type**: `string`
- **Description**: Additional Tailwind classes for custom styling
- **Default**: `undefined`
- **Use Case**: Override default margins or add custom responsive behavior
- **Example**: `className="mt-12 lg:mt-16"` (custom top margin)

---

### Component Behavior

**Rendering Logic**:
```typescript
export default function SessionCrossLink({ session, className }: SessionCrossLinkProps) {
  // Block color mapping
  const blockColors = {
    1: { bg: 'bg-[#FFE5CC]', text: 'text-[#8B4513]' },
    2: { bg: 'bg-[#E5F4FF]', text: 'text-[#0066CC]' },
    3: { bg: 'bg-[#E8F5E8]', text: 'text-[#2D5016]' },
    4: { bg: 'bg-[#FFF4E5]', text: 'text-[#CC6600]' },
  };

  const blockColor = blockColors[session.block as keyof typeof blockColors] || blockColors[1];

  return (
    <article className={cn("w-full my-12", className)}>
      <Link href={`/sessions/${session.slug}`} className="...">
        {/* Component markup */}
      </Link>
    </article>
  );
}
```

**Key Implementation Details**:
- Entire component wrapped in `<Link>` (Next.js client-side routing)
- `<article>` semantic wrapper for screen readers
- Block-specific colors applied via dynamic class selection
- Graceful handling of missing optional fields (`thumbnail`, `industry`)

---

## Data Integration

### Session Lookup Pattern

**Helper Function** (add to `/data/sample-sessions.ts` if not exists):

```typescript
export function getSessionBySlug(slug: string): Session | undefined {
  return allSessions.find(session => session.slug === slug);
}
```

**Usage in Booth Page**:
```typescript
const session = booth.associatedSessionSlug
  ? getSessionBySlug(booth.associatedSessionSlug)
  : undefined;

{session && <SessionCrossLink session={session} />}
```

**Type Safety**:
```typescript
// Option 1: Non-null assertion (if you're confident slug is valid)
<SessionCrossLink session={getSessionBySlug(booth.associatedSessionSlug)!} />

// Option 2: Conditional rendering with type guard
{(() => {
  const session = getSessionBySlug(booth.associatedSessionSlug);
  return session ? <SessionCrossLink session={session} /> : null;
})()}
```

---

### Booth Data Updates

**Sample Booths to Update** (based on conference schedule):

1. **FutureBuild Construction** → `building-tomorrow-construction-careers` (Block 2)
2. **HealthFirst Ontario** → `healthcare-heroes-medical-pathways` (Block 1)
3. **TechVentures Inc** → `coding-careers-software-development` (Block 3)
4. **GreenEnergy Solutions** → `renewable-energy-careers` (Block 4)

**Batch Update Script** (optional):
```typescript
// scripts/link-booths-to-sessions.ts

import { sampleBooths } from '@/data/sample-booths';
import { allSessions } from '@/data/sample-sessions';

const boothSessionMappings = [
  { boothSlug: 'future-build-construction', sessionSlug: 'building-tomorrow-construction-careers' },
  { boothSlug: 'healthfirst-ontario', sessionSlug: 'healthcare-heroes-medical-pathways' },
  // ... add all mappings
];

boothSessionMappings.forEach(({ boothSlug, sessionSlug }) => {
  const booth = sampleBooths.find(b => b.slug === boothSlug);
  const session = allSessions.find(s => s.slug === sessionSlug);

  if (booth && session) {
    booth.associatedSessionSlug = sessionSlug;
    console.log(`✅ Linked ${booth.name} to "${session.title}"`);
  } else {
    console.error(`❌ Failed to link ${boothSlug} → ${sessionSlug}`);
  }
});
```

---

## Styling Customization

### Override Default Spacing

```typescript
// Custom top/bottom margins
<SessionCrossLink
  session={session}
  className="my-16 lg:my-20"
/>

// Custom responsive margins
<SessionCrossLink
  session={session}
  className="mt-8 mb-12 sm:mt-12 sm:mb-16 lg:mt-16 lg:mb-20"
/>
```

### Theming (Advanced)

**Block Color Customization**:
If you need to override block colors (not recommended unless brand requirements change):

```typescript
// Create themed variant in new file: /components/booths/SessionCrossLinkThemed.tsx

const customBlockColors = {
  1: { bg: 'bg-red-100', text: 'text-red-900' },
  2: { bg: 'bg-blue-100', text: 'text-blue-900' },
  3: { bg: 'bg-green-100', text: 'text-green-900' },
  4: { bg: 'bg-yellow-100', text: 'text-yellow-900' },
};
```

---

## Accessibility Compliance

### ARIA Labels

Component automatically generates descriptive ARIA labels:

```html
<a
  href="/sessions/building-tomorrow-construction-careers"
  aria-label="Watch career session: Building Tomorrow's Construction Careers from Block 2"
>
  <!-- Component content -->
</a>
```

**Testing**:
```bash
# Screen reader testing (macOS VoiceOver)
# 1. Enable VoiceOver: Cmd + F5
# 2. Navigate to booth page
# 3. Tab to SessionCrossLink component
# 4. Verify announcement: "Watch career session: [Title] from Block [X]"
```

### Keyboard Navigation

**Tab Order Verification**:
```typescript
// Test keyboard navigation flow
1. Tab through BoothHeader elements
2. Tab through Video player controls
3. Tab through Resource cards (6 stops)
4. Tab to SessionCrossLink (single focus, entire component)
5. Press Enter or Space → navigates to session page
6. Tab continues to About Us / Contact sections
```

**Focus Management**:
- Component receives focus as single unit (not individual sub-elements)
- Focus indicator: 2px blue outline with 4px offset
- No focus trap: user can tab backwards and forwards freely

---

## Performance Optimization

### Image Loading

**Session Thumbnail** (desktop only):
```typescript
<Image
  src={session.thumbnail}
  alt={`${session.title} session thumbnail`}
  fill
  className="object-cover"
  sizes="120px"
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,..." // Optional
/>
```

**Optimization Notes**:
- `sizes="120px"`: Tells Next.js to generate 120px-wide image (no oversized downloads)
- `loading="lazy"`: Delays load until component near viewport (saves bandwidth)
- `fill` with `object-cover`: Ensures aspect ratio maintained without layout shift

---

### Component Code Splitting

Component is already optimized for code splitting:
- No heavy external dependencies (uses only lucide-react for arrow icon)
- Small bundle size (~2KB gzipped)
- Tree-shakeable imports

**Verify Bundle Impact**:
```bash
npm run build
# Check output for SessionCrossLink bundle size
# Should be minimal impact (<5KB to page size)
```

---

## Testing Checklist

### Visual Regression Testing

**States to Test**:
- [ ] Default state (mobile, tablet, desktop)
- [ ] Hover state (desktop only)
- [ ] Focus state (keyboard navigation)
- [ ] Active state (click/tap)
- [ ] Long session title (2+ lines)
- [ ] Missing thumbnail (graceful degradation)
- [ ] Missing industry field (metadata rendering)

**Breakpoints to Test**:
- [ ] Mobile: 375px (iPhone), 360px (Android)
- [ ] Tablet: 768px (iPad portrait), 1024px (iPad landscape)
- [ ] Desktop: 1280px (laptop), 1920px (desktop monitor)

---

### Functional Testing

**Navigation Tests**:
```typescript
// Jest + React Testing Library

import { render, screen, fireEvent } from '@testing-library/react';
import SessionCrossLink from '@/components/booths/SessionCrossLink';
import { mockSession } from '@/lib/test-utils';

describe('SessionCrossLink', () => {
  it('renders session title and metadata', () => {
    render(<SessionCrossLink session={mockSession} />);

    expect(screen.getByText('Introduction to Skilled Trades')).toBeInTheDocument();
    expect(screen.getByText(/Block 2/)).toBeInTheDocument();
    expect(screen.getByText(/18 minutes/)).toBeInTheDocument();
  });

  it('navigates to session page on click', () => {
    const { container } = render(<SessionCrossLink session={mockSession} />);
    const link = container.querySelector('a');

    expect(link).toHaveAttribute('href', '/sessions/skilled-trades-pathways');
  });

  it('handles missing thumbnail gracefully', () => {
    const sessionWithoutThumbnail = { ...mockSession, thumbnail: undefined };
    render(<SessionCrossLink session={sessionWithoutThumbnail} />);

    expect(screen.queryByAltText(/thumbnail/)).not.toBeInTheDocument();
  });

  it('has accessible ARIA label', () => {
    render(<SessionCrossLink session={mockSession} />);
    const link = screen.getByLabelText(/Watch career session:/);

    expect(link).toHaveAttribute('aria-label', expect.stringContaining(mockSession.title));
  });
});
```

---

### Accessibility Testing

**Automated Tools**:
```bash
# Install axe-core for accessibility auditing
npm install --save-dev @axe-core/react

# Run accessibility tests
npm run test:a11y
```

**Manual Testing**:
1. **Keyboard Navigation**: Tab through component, verify focus indicator visible
2. **Screen Reader**: Test with VoiceOver (macOS), NVDA (Windows), TalkBack (Android)
3. **Color Contrast**: Verify all text meets WCAG AA (4.5:1 normal, 3:1 large)
4. **Touch Targets**: Ensure button ≥44px height on mobile (iOS accessibility standards)

---

## Common Issues & Troubleshooting

### Issue 1: Component Not Rendering

**Symptoms**: SessionCrossLink doesn't appear on booth page

**Debugging Steps**:
```typescript
// 1. Check booth data has associatedSessionSlug
console.log('Booth data:', booth.associatedSessionSlug);

// 2. Verify session exists
const session = getSessionBySlug(booth.associatedSessionSlug);
console.log('Found session:', session);

// 3. Check conditional rendering logic
{booth.associatedSessionSlug && (() => {
  const session = getSessionBySlug(booth.associatedSessionSlug);
  console.log('Rendering SessionCrossLink:', !!session);
  return session ? <SessionCrossLink session={session} /> : null;
})()}
```

**Common Causes**:
- `associatedSessionSlug` missing from booth data
- Slug mismatch between booth data and session data (typo)
- Conditional rendering logic incorrectly structured
- Session data not imported in booth page file

---

### Issue 2: Incorrect Block Colors

**Symptoms**: Block badge shows wrong color (e.g., Block 2 showing red instead of blue)

**Fix**:
```typescript
// Verify block number in session data
console.log('Session block:', session.block); // Should be 1, 2, 3, or 4

// Check block color mapping
const blockColors = {
  1: { bg: 'bg-[#FFE5CC]', text: 'text-[#8B4513]' }, // Orange
  2: { bg: 'bg-[#E5F4FF]', text: 'text-[#0066CC]' }, // Blue
  3: { bg: 'bg-[#E8F5E8]', text: 'text-[#2D5016]' }, // Green
  4: { bg: 'bg-[#FFF4E5]', text: 'text-[#CC6600]' }, // Yellow
};

const blockColor = blockColors[session.block as keyof typeof blockColors] || blockColors[1];
```

**Common Causes**:
- Session `block_number` field incorrect in database/data file
- Type coercion issue (block stored as string instead of number)

---

### Issue 3: Layout Shift on Load

**Symptoms**: Component "jumps" or shifts position when page loads

**Fix**: Ensure consistent margins and no dynamic height calculations
```typescript
<SessionCrossLink
  session={session}
  className="my-12" // Fixed margins prevent layout shift
/>
```

**Verify**:
- Run Lighthouse audit, check CLS score (<0.1 target)
- Test on slow 3G throttling to catch layout shifts during progressive render

---

### Issue 4: Hover State Not Working (Desktop)

**Symptoms**: Shadow and button color don't change on hover

**Debugging**:
```typescript
// Check Tailwind classes are applied correctly
<Link
  href={`/sessions/${session.slug}`}
  className={cn(
    "shadow-sm hover:shadow-md", // Shadow transition
    "group cursor-pointer" // Group hover for child elements
  )}
>
  {/* Button inside Link */}
  <div className="bg-white group-hover:bg-blue-50">
    Watch Session
  </div>
</Link>
```

**Common Causes**:
- Missing `group` class on parent `<Link>`
- Missing `group-hover:` prefix on child element classes
- CSS specificity conflict (custom styles overriding Tailwind)
- Browser dev tools forcing `:hover` state (disable for testing)

---

## Migration Guide (Existing Booths)

If you have existing booth pages without this component:

### Step 1: Update Type Definitions ✅
```typescript
// /types/booth.ts (COMPLETED)
export interface PlatinumBoothData {
  // ... existing fields ...
  associatedSessionSlug?: string; // NEW FIELD
}

export interface StandardBoothData {
  // ... existing fields ...
  associatedSessionSlug?: string; // NEW FIELD
}
```

### Step 2: Add Session Slugs to Booth Data
```typescript
// /data/sample-booths.ts

export const booth1 = {
  // ... existing fields ...
  associatedSessionSlug: 'session-slug-here', // ADD THIS
};
```

**Mapping Strategy**:
1. Review session list in `/data/sample-sessions.ts`
2. Identify which booths presented which sessions
3. Add corresponding slug to booth data
4. Verify slug matches exactly (case-sensitive)

### Step 3: Update Booth Detail Page Component
```typescript
// /app/booths/[slug]/page.tsx

// Add import
import SessionCrossLink from '@/components/booths/SessionCrossLink';
import { getSessionBySlug } from '@/data/sample-sessions';

// Add component between Resources and About sections
<ResourcesSection resources={booth.resources} />

{booth.associatedSessionSlug && (() => {
  const session = getSessionBySlug(booth.associatedSessionSlug);
  return session ? <SessionCrossLink session={session} /> : null;
})()}

<AboutUsSection description={booth.description} />
```

### Step 4: Test Integration
```bash
# Start dev server
npm run dev

# Visit booth page with associated session
http://localhost:3000/booths/future-build-construction

# Verify:
# 1. SessionCrossLink renders between Resources and About sections
# 2. Session title, block, duration display correctly
# 3. Hover state works (desktop)
# 4. Click navigates to session detail page
# 5. Browser back returns to booth page
```

---

## Analytics Integration (Future Enhancement)

### Event Tracking Setup

```typescript
// /lib/analytics.ts

export function trackSessionCrossLinkClick(
  boothSlug: string,
  sessionSlug: string,
  sessionTitle: string
) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'session_crosslink_click', {
      booth_slug: boothSlug,
      session_slug: sessionSlug,
      session_title: sessionTitle,
      event_category: 'booth_engagement',
      event_label: `${boothSlug} → ${sessionSlug}`,
    });
  }

  // Console log for debugging
  console.log('[Analytics] Session cross-link click:', {
    booth: boothSlug,
    session: sessionSlug,
  });
}
```

### Component Integration

```typescript
// Update SessionCrossLink.tsx to include tracking

import { trackSessionCrossLinkClick } from '@/lib/analytics';

export default function SessionCrossLink({ session, boothSlug }: SessionCrossLinkProps) {
  const handleClick = () => {
    trackSessionCrossLinkClick(boothSlug, session.slug, session.title);
  };

  return (
    <Link
      href={`/sessions/${session.slug}`}
      onClick={handleClick}
      // ... rest of props
    >
      {/* Component content */}
    </Link>
  );
}
```

**Note**: Requires adding `boothSlug` prop to component API (breaking change, implement in v2.0)

---

## Performance Benchmarks

### Target Metrics

**Component Render Time**: <50ms
**First Contentful Paint Impact**: <100ms
**Cumulative Layout Shift**: <0.01
**Bundle Size**: <5KB gzipped

### Measurement

```bash
# Build production bundle
npm run build

# Analyze bundle
npx @next/bundle-analyzer

# Check SessionCrossLink.tsx bundle size in output
# Should be grouped with booth page chunk, minimal overhead
```

### Lighthouse Audit

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit on booth page with session cross-link
lighthouse http://localhost:3000/booths/future-build-construction \
  --only-categories=performance,accessibility \
  --view

# Verify:
# - Performance score: ≥90
# - Accessibility score: 100
# - CLS: <0.1
# - FCP: <2.5s (mobile), <1.5s (desktop)
```

---

## Version History

### v1.0.0 (2025-11-22)
- Initial implementation
- Full-width banner design
- Mobile/tablet/desktop responsive layouts
- Block color system integration
- Accessibility compliance (WCAG AA)
- Type definitions updated (PlatinumBoothData, StandardBoothData)

### Future Roadmap

**v1.1.0** (Planned)
- Analytics event tracking integration
- Hover tooltip showing session description
- "Watched" indicator for returning users

**v2.0.0** (Planned)
- Multi-session support (carousel or grid)
- Inline session trailer playback
- Booth-session bi-directional navigation

---

## Last Updated

**2025-11-22** - Initial implementation guide created with integration instructions, testing checklists, and troubleshooting documentation.
