---
title: Mobile Registration UX - Quick Reference
description: At-a-glance comparison and decision guide for three design approaches
feature: Inline Registration Flow
last-updated: 2025-12-01
version: 1.0.0
related-files:
  - ./README.md
  - ./approach-1-compact-stacked.md
  - ./approach-2-adaptive-expansion.md
  - ./approach-3-modal-takeover.md
status: draft
---

# Mobile Registration UX - Quick Reference

## The Problem
Registration form inside 16:9 video container (242px height on mobile) feels cramped. Progress dots + question + input + navigation = tight squeeze. Keyboard obscures buttons. Need solution.

---

## Three Approaches at a Glance

### 🎯 Approach 1: Compact Stacked
**"Optimize what we have"**
- ✅ Everything stays inside 16:9 container
- ✅ User type buttons shrink to pills after selection
- ✅ Minimal code changes (1-2 days)
- ❌ Still cramped (~200px for content)
- ❌ Keyboard issues on email input

**When to use**: Tight deadline, visual containment required

---

### ⭐ Approach 2: Adaptive Expansion (RECOMMENDED)
**"Best of both worlds"**
- ✅ User type selection inside container (visual anchor)
- ✅ Form expands below container (400-600px space!)
- ✅ Directly implements user's creative suggestion
- ✅ Generous touch targets and breathing room
- ⚠️ Moderate complexity (2-3 days)

**When to use**: Want balance of design + usability (recommended)

---

### 🏆 Approach 3: Modal Takeover
**"Maximum usability"**
- ✅ Full-screen modal (code already exists!)
- ✅ Proven pattern, zero risk
- ✅ WCAG AAA achievable
- ✅ Fastest implementation (0.5-1 day)
- ❌ Breaks "inline" concept
- ❌ Less visually novel

**When to use**: Tight deadline, maximum accessibility, lowest risk

---

## Decision Matrix

| If your priority is... | Choose this approach |
|------------------------|---------------------|
| Visual design consistency | Approach 1 or 2 |
| User experience quality | **Approach 2** ⭐ |
| Speed to implement | Approach 3 |
| Lowest risk | Approach 3 |
| Accessibility excellence | Approach 2 or 3 |
| Following user's suggestion | **Approach 2** ⭐ |
| Future scalability | Approach 2 |

---

## Space Comparison

**Available vertical space for form content:**

| Approach | Space | Enough for? |
|----------|-------|-------------|
| 1: Compact | ~200px | Input + buttons (cramped) |
| 2: Expansion | ~500px | Input + error + helper + buttons (generous) |
| 3: Modal | ~700px | Full form with breathing room (maximum) |

---

## Implementation Effort

| Approach | Days | Risk | Complexity |
|----------|------|------|------------|
| 1: Compact | 1-2 | Medium | Low |
| 2: Expansion | 2-3 | Low | Medium |
| 3: Modal | 0.5-1 | Very Low | Very Low* |

*Code already exists, just needs integration

---

## Visual Comparison

### Approach 1: Compact Stacked
```
┌──────────────────────────┐
│ [Edu] [x]         2/6    │ ← User type pill, progress
│ ──────────────────────── │
│                          │
│  What school board?      │ ← Question (tight spacing)
│  [Dropdown ▼          ]  │ ← Input
│                          │
│ ← Back    Continue →     │ ← Nav buttons
└──────────────────────────┘
         16:9 container
```

### Approach 2: Adaptive Expansion
```
┌──────────────────────────┐
│ ○──○──●──○──○             │ ← Progress visualization
│ Step 3 of 6               │
│ What school board?        │ ← Current question
└──────────────────────────┘
         16:9 container
┌──────────────────────────┐
│                          │
│  School Board            │ ← Generous label
│  [Dropdown ▼          ]  │ ← Input
│                          │
│  Don't see your board?   │ ← Helper text
│  Select "Guest"          │
│                          │
│ ← Back    Continue →     │ ← Nav buttons
└──────────────────────────┘
      Expansion panel
```

### Approach 3: Modal Takeover
```
[Video container dimmed behind overlay]

┌──────────────────────────┐
│     [Handle indicator]   │ ← Drawer handle
│ ○──○──●──○──○      3/6   │ ← Progress
│ ────────────────────────│
│ Who's Watching With You? │ ← Header
│ [Session info box]       │
│ ────────────────────────│
│                          │
│ [Full form content]      │ ← Scrollable
│                          │
│ ────────────────────────│
│ [Back]    [Continue →]   │
└──────────────────────────┘
     Modal (90vh height)
```

---

## Accessibility Comparison

| Feature | Approach 1 | Approach 2 | Approach 3 |
|---------|-----------|-----------|-----------|
| Touch targets | 44px (min) | 48px+ | 44px+ |
| Color contrast | WCAG AA | WCAG AA | WCAG AA |
| Keyboard nav | ✓ | ✓ | ✓ |
| Screen reader | ✓ | ✓ | ✓ |
| Error space | Limited | Generous | Maximum |
| Focus management | Good | Excellent | Excellent |
| Overall rating | AA | AA/AAA | AAA capable |

---

## Animation Comparison

| Transition | Approach 1 | Approach 2 | Approach 3 |
|------------|-----------|-----------|-----------|
| Entry | Button shrink → form fade | Container shrink + panel slide | Modal slide up |
| Duration | 400ms | 600ms | 600ms |
| Complexity | Medium | High | Low |
| Feel | Compact | Elegant | Familiar |
| Performance | Fast | Fast | Fast |

---

## Device Compatibility

### iPhone SE (375×667px) - Smallest Common Device

**Approach 1**:
- Container: 211px height
- Content space: ~160px
- **Result**: Very cramped ⚠️

**Approach 2**:
- Container: 211px → 142px
- Expansion: ~450px available
- **Result**: Comfortable ✅

**Approach 3**:
- Modal: ~550px (90vh - header - footer)
- **Result**: Spacious ✅

### iPhone 14 Pro Max (430×932px)

**All approaches work well** on larger devices. The issue is small devices.

---

## Brand Consistency

| Aspect | Approach 1 | Approach 2 | Approach 3 |
|--------|-----------|-----------|-----------|
| Gradient use | Full height | Container only | None (white modal) |
| myBlueprint colors | ✓ | ✓ | ✓ |
| Spacious feel | ❌ Cramped | ✓ Spacious | ✓ Spacious |
| Professional aesthetic | ⚠️ Tight | ✓ Polished | ✓ Polished |
| Video container connection | ✓ Tight | ✓ Connected | ❌ Separate |

---

## User Testing Predictions

### Approach 1: Compact
- **First impression**: "Looks integrated"
- **During use**: "Feels cramped, hard to read"
- **Email input**: "Keyboard covered the button!"
- **Overall**: 3/5 - Functional but not comfortable

### Approach 2: Expansion
- **First impression**: "Nice transition effect"
- **During use**: "Easy to read, clear layout"
- **Email input**: "No keyboard issues"
- **Overall**: 4.5/5 - Polished and usable

### Approach 3: Modal
- **First impression**: "Oh, a form popped up"
- **During use**: "Standard modal, works fine"
- **Email input**: "No issues"
- **Overall**: 4/5 - Familiar and reliable

---

## Recommendation: Approach 2

**Why Adaptive Expansion wins:**

1. **User's idea**: Directly implements their creative suggestion
2. **Visual + UX**: Balances design aesthetics with usability
3. **Scalability**: Easy to add fields or complexity later
4. **Accessibility**: Generous space for compliance
5. **Brand fit**: Maintains myBlueprint's spacious, professional feel
6. **Moderate risk**: Proven pattern, reasonable complexity

**When to override recommendation:**

- **Choose Approach 1** if visual containment is absolute requirement
- **Choose Approach 3** if timeline < 3 days or maximum accessibility needed

---

## Implementation Checklist

### Before Starting
- [ ] Review all three approach documents
- [ ] Get stakeholder alignment on chosen approach
- [ ] Confirm device testing availability
- [ ] Set up analytics for A/B testing (optional)

### During Implementation
- [ ] Create design prototype (Figma/CodePen)
- [ ] Get user feedback on prototype
- [ ] Implement chosen approach
- [ ] Test on real devices (iPhone SE minimum)
- [ ] Verify accessibility with screen reader
- [ ] Measure performance (60fps target)

### After Launch
- [ ] Monitor completion rates
- [ ] Track time-to-video-start metric
- [ ] Collect user feedback
- [ ] Iterate based on data

---

## Code Snippets

### Approach 1: Compact Layout
```tsx
<div className="aspect-video bg-gradient-to-br from-blue to-navy p-4">
  {/* User type pills at top */}
  {userType && (
    <div className="flex gap-2 mb-3">
      <div className="px-2 py-1 bg-white/20 rounded text-xs">
        {userType === 'educator' ? 'Educator' : 'Student'}
      </div>
    </div>
  )}

  {/* Form content (tight spacing) */}
  <div className="flex-1 flex flex-col justify-center">
    <label className="text-sm mb-2">{question}</label>
    <input className="h-11 rounded-lg" />
  </div>

  {/* Navigation */}
  <div className="flex justify-between mt-3">
    <button>Back</button>
    <button>Continue</button>
  </div>
</div>
```

### Approach 2: Expansion
```tsx
{/* Container - shrinks after selection */}
<div
  className="bg-gradient-to-br from-blue to-navy transition-all"
  style={{ height: userType ? '142px' : '242px' }}
>
  {!userType && <UserTypeSelection />}
  {userType && <ProgressVisualization />}
</div>

{/* Expansion panel - slides up */}
{userType && (
  <div className="bg-white rounded-t-3xl -mt-2 p-6 animate-slide-up">
    <label className="block mb-2">{question}</label>
    <input className="h-12 rounded-lg w-full" />
    <div className="flex justify-between mt-6">
      <button>Back</button>
      <button>Continue</button>
    </div>
  </div>
)}
```

### Approach 3: Modal
```tsx
{/* Just integrate existing modal */}
<MultiStepModal
  isOpen={videoState === 'registration'}
  onClose={() => setVideoState('initial')}
  sessionTitle={session.title}
  sessionId={session.id}
  onSubmit={handleComplete}
/>
```

---

## Common Pitfalls to Avoid

### Approach 1
- ❌ Don't reduce font sizes below 14px (readability)
- ❌ Don't make touch targets < 44px (accessibility)
- ❌ Don't hide error messages to save space
- ✅ DO test on iPhone SE religiously

### Approach 2
- ❌ Don't skip the smooth animations (feels janky)
- ❌ Don't make expansion panel fixed height (needs scroll)
- ❌ Don't forget the visual connection (border radius, overlap)
- ✅ DO test keyboard appearance behavior

### Approach 3
- ❌ Don't forget to dim video container behind modal
- ❌ Don't skip focus management (accessibility issue)
- ❌ Don't use bottom drawer on desktop (center it)
- ✅ DO leverage existing MultiStepModal code

---

## Resources

### Design Specifications
- [Overview & Comparison](./README.md) - Full analysis and decision framework
- [Approach 1 Details](./approach-1-compact-stacked.md) - Complete compact layout specs
- [Approach 2 Details](./approach-2-adaptive-expansion.md) - Complete expansion specs
- [Approach 3 Details](./approach-3-modal-takeover.md) - Complete modal specs

### Related Components
- `/components/session/InlineRegistrationFlow.tsx` - Current inline implementation
- `/components/registration/MultiStepModal.tsx` - Existing modal component
- `/components/session/VideoSection.tsx` - Parent video container

### Design System
- [Style Guide](../../design-system/style-guide.md) - myBlueprint brand guidelines
- [Color Tokens](../../design-system/tokens/colors.md) - Official color palette
- [Typography](../../design-system/tokens/typography.md) - Font specifications

---

**Last Updated**: 2025-12-01
**Next Review**: After stakeholder decision on approach
**Status**: Awaiting decision and prototype development
