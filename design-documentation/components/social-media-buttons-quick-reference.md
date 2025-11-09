# Social Media Buttons - Quick Reference

## Visual Layout

### Before (Current)
```
┌─────────────────────────────────────┐
│ Get in Touch                        │
├─────────────────────────────────────┤
│ 📧 email@organization.com           │
│ 🌐 www.organization.com             │
│                                     │
│            [spacer]                 │
│                                     │
├─────────────────────────────────────┤ ← divider
│ [in] [𝕏] [📷] [f]                   │ ← bottom social
└─────────────────────────────────────┘
```

### After (New Design)
```
┌─────────────────────────────────────┐
│ Get in Touch                        │
├─────────────────────────────────────┤
│ 📧 email@organization.com           │
│ 🌐 www.organization.com             │
│    [in] [𝕏] [📷] [f]    ← NEW       │
│                                     │
│ Internship Info (if available)      │
│                                     │
│                                     │
└─────────────────────────────────────┘
```

## Size Specifications

### Desktop (1024px+)
```
┌──────┐
│  in  │  32×32px button
│ 16px │  16×16px icon
└──────┘
  ↕
 8px gap
  ↕
┌──────┐
│  𝕏   │
└──────┘
```

### Mobile (<1024px)
```
┌─────────┐
│   in    │  44×44px button (WCAG minimum)
│  20px   │  20×20px icon
└─────────┘
    ↕
  12px gap
    ↕
┌─────────┐
│    𝕏    │
└─────────┘
```

## Color Palette

### Default State
```
╔═══════════╗
║           ║  Background: #D9DFEA (neutral-2)
║    in     ║  Border: #AAB7CB (neutral-3)
║           ║  Icon: #485163 (neutral-5)
╚═══════════╝
```

### Hover States
```
LinkedIn Blue     Twitter Blue      Instagram Gradient   Facebook Blue
╔═══════════╗    ╔═══════════╗    ╔═══════════╗        ╔═══════════╗
║  #0A66C2  ║    ║  #1DA1F2  ║    ║ Purple→   ║        ║  #1877F2  ║
║    in     ║    ║     𝕏     ║    ║  →Pink    ║        ║     f     ║
║   white   ║    ║   white   ║    ║   white   ║        ║   white   ║
╚═══════════╝    ╚═══════════╝    ╚═══════════╝        ╚═══════════╝
```

## Spacing Diagram

```
Email row:    [📧] email@organization.com
Website row:  [🌐] www.organization.com
              ↓ 8px margin-top
Social row:   [in] ←8px→ [𝕏] ←8px→ [📷] ←8px→ [f]
              ↓ natural flow
Next section: Internship info or spacer
```

## Interaction States

### Hover Animation (Desktop)
```
Default          Hover            Active
  ↓                ↓                ↓
┌──────┐        ┌──────┐         ┌──────┐
│  in  │   →    │  IN  │    →    │  IN  │
└──────┘        └──────┘         └──────┘
                   ↑                ↓
                 -2px lift       back to 0
                 + shadow        - shadow
                 + blue bg       + blue bg
```

### Reduced Motion
```
Default          Hover
  ↓                ↓
┌──────┐        ┌──────┐
│  in  │   →    │  IN  │
└──────┘        └──────┘
                   │
            (No transform)
            (Color only)
```

## Accessibility Features

### Focus Indicator
```
┌──────────────┐
│ ╔══════════╗ │  ← 2px blue outline
│ ║          ║ │     (#0092FF)
│ ║    in    ║ │  ← 2px offset
│ ║          ║ │
│ ╚══════════╝ │
└──────────────┘
```

### Touch Targets (Mobile)
```
        44px minimum
       ←─────→
    ┌─────────┐  ↑
    │         │  │
    │   in    │  │ 44px
    │         │  │
    └─────────┘  ↓

Spacing between:
[Button] ←12px→ [Button]
(Easy to tap)
```

## Platform Icons

### Supported via Lucide React
- ✅ LinkedIn: `<Linkedin />`
- ✅ Twitter: `<Twitter />`
- ✅ Instagram: `<Instagram />`
- ✅ Facebook: `<Facebook />`

### Fallback (Letter)
- ⚠️ TikTok: "T"
- ⚠️ YouTube: "Y"
- ⚠️ Other: First letter uppercase

## Implementation Checklist

### Step 1: Remove Old Code
```tsx
// DELETE these lines from ContactInfo.tsx:
<div className="flex-grow" />                    // Line 116
<div className="border-t border-neutral-2..." /> // Line 121
<nav aria-label="Social media links">...</nav>   // Lines 123-151
```

### Step 2: Add New Code
```tsx
// ADD after website link (around line 91):
{contact.socialLinks && contact.socialLinks.length > 0 && (
  <div className="flex items-center gap-2 mt-2">
    {contact.socialLinks.map((social, index) => (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 md:w-11 md:h-11 flex items-center justify-center
                   bg-neutral-2 border border-neutral-3 text-neutral-5
                   rounded-md transition-all duration-200
                   hover:-translate-y-0.5 hover:shadow-md
                   focus-visible:outline-2 focus-visible:outline-primary-blue"
        aria-label={getSocialAriaLabel(social.platform)}
      >
        <Icon className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
      </a>
    ))}
  </div>
)}
```

### Step 3: Test
- [ ] Desktop: 32×32px buttons, 8px gaps
- [ ] Mobile: 44×44px buttons, 12px gaps
- [ ] Hover: Platform colors, lift animation
- [ ] Focus: Blue outline visible
- [ ] Keyboard: Tab through, Enter activates
- [ ] Screen reader: Announces platform names

## Quick Measurements

| Element | Desktop | Mobile | Notes |
|---------|---------|--------|-------|
| Button size | 32×32px | 44×44px | WCAG compliant |
| Icon size | 16×16px | 20×20px | Proportional |
| Gap between buttons | 8px | 12px | Touch-friendly |
| Margin from website | 8px | 8px | Consistent |
| Border radius | 6px | 6px | Subtle round |
| Border width | 1px | 1px | Definition |
| Hover lift | -2px | 0 | Desktop only |

## Color Contrast Ratios

| State | Contrast | WCAG | Pass |
|-------|----------|------|------|
| Default icon | 4.9:1 | AA | ✅ |
| LinkedIn hover | 4.6:1 | AA | ✅ |
| Twitter hover | 3.1:1 | AA Large | ✅ |
| Instagram hover | 3.2:1 | AA Large | ✅ |
| Facebook hover | 3.8:1 | AA | ✅ |
| TikTok hover | 21:1 | AAA | ✅ |
| YouTube hover | 3.9:1 | AA | ✅ |

---

**For complete specifications, see**: `social-media-buttons.md`
