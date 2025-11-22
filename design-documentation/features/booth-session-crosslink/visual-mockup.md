---
title: Session Cross-Link Visual Mockup
description: Detailed visual mockup specifications for creating design artifacts in Figma, Sketch, or other design tools
feature: booth-session-crosslink
last-updated: 2025-11-22
version: 1.0.0
related-files:
  - screen-states.md
  - README.md
dependencies:
  - myBlueprint brand assets
  - Block color system
status: approved
---

# Session Cross-Link Visual Mockup

## Mockup Purpose

This document provides pixel-perfect specifications for creating visual mockups of the SessionCrossLink component in design tools (Figma, Sketch, Adobe XD). Use these specs to create presentation materials, stakeholder reviews, or design system documentation.

---

## Desktop Mockup (1440px Viewport)

### Canvas Setup
- **Artboard Size**: 1440px × 800px
- **Component Width**: 1200px (container max-width)
- **Component Position**: Centered horizontally, 400px from top

### Component Dimensions
- **Container**: 1200px wide × 152px tall
- **Padding**: 32px all sides
- **Border Radius**: 12px
- **Border**: 1px solid #E5E5E5
- **Background**: Linear gradient 135° from #C6E7FF (top-left) to #FFFFFF (bottom-right)
- **Shadow**: 0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px rgba(0,0,0,0.06)

### Layout Grid (Internal)
```
┌────────────────────────────────────────────────────────────────────────┐
│  [32px padding]                                                        │
│  ┌────────┐  [24px gap]  ┌─────────────────────┐  [24px]  ┌────────┐ │
│  │        │              │                     │           │        │ │
│  │ THUMB  │              │     CONTENT         │           │  CTA   │ │
│  │ 120px  │              │     1fr (expand)    │           │  auto  │ │
│  │  x     │              │                     │           │        │ │
│  │ 68px   │              │                     │           │        │ │
│  │        │              │                     │           │        │ │
│  └────────┘              └─────────────────────┘           └────────┘ │
│  [32px padding]                                                        │
└────────────────────────────────────────────────────────────────────────┘

Total height: 68px (thumbnail) + 64px (padding top/bottom) = 132px minimum
Actual: 152px (allows for text wrapping)
```

### Element Specifications

#### 1. Session Thumbnail (Left Column)
**Position**: X: 32px, Y: 42px (vertically centered)
**Size**: 120px × 68px (16:9 aspect ratio)
**Border Radius**: 8px
**Border**: 1px solid #E5E5E5
**Image**: Placeholder or actual session thumbnail
- Use neutral image (classroom, presenter at podium, students watching)
- Overlay 10% black tint for consistency across different images

**Figma Layer Structure**:
```
Frame: "Thumbnail Container"
  └─ Rectangle: "Thumbnail Border" (stroke)
      └─ Image: "Session Thumbnail" (fill, clip content)
```

---

#### 2. Block Badge (Content Column, Top-Left)
**Position**: X: 176px (120px thumb + 24px gap + 32px padding), Y: 42px
**Size**: 40px × 40px
**Border Radius**: 8px
**Background**: #E5F4FF (Block 2 example)
**Text**: "BLK 2"
- **Font**: Museo Sans Bold (700)
- **Size**: 12px
- **Color**: #0066CC (Block 2 text)
- **Alignment**: Center (horizontal + vertical)
- **Letter Spacing**: 0.5px
- **Text Transform**: Uppercase

**Block Color Variants** (create 4 badge components):
1. **Block 1**: BG #FFE5CC, Text #8B4513
2. **Block 2**: BG #E5F4FF, Text #0066CC
3. **Block 3**: BG #E8F5E8, Text #2D5016
4. **Block 4**: BG #FFF4E5, Text #CC6600

**Figma Layer Structure**:
```
Frame: "Block Badge"
  └─ Rectangle: "Badge Background" (fill with block color)
      └─ Text: "BLK 2" (Museo Sans Bold, 12px)
```

---

#### 3. Context Label (Content Column, Top-Right of Badge)
**Position**: X: 228px (badge + 12px gap), Y: 50px (baseline-aligned with badge center)
**Text**: "CAREER SESSION FROM THIS ORGANIZATION"
**Typography**:
- **Font**: Open Sans Semibold (600)
- **Size**: 11px
- **Color**: #737373 (text-neutral-500)
- **Letter Spacing**: 0.5px
- **Text Transform**: Uppercase
- **Line Height**: 16px

---

#### 4. Session Title (Content Column, Below Badge/Label)
**Position**: X: 176px, Y: 70px (26px below badge)
**Max Width**: 850px (prevents collision with CTA button)
**Text**: "Introduction to Skilled Trades Pathways"
**Typography**:
- **Font**: Museo Sans Bold (700)
- **Size**: 24px
- **Color**: #22224C (text-navy)
- **Line Height**: 31px (1.3 ratio)
- **Max Lines**: 2 (line-clamp with ellipsis)

**Long Title Example** (for testing):
"Introduction to Advanced Career Pathways in the Skilled Trades and Construction Industries"

**Figma Settings**:
- Text box: Fixed width 850px
- Vertical align: Top
- Line height: 130%
- Paragraph spacing: 0px
- Clip content: Yes (for line-clamp effect)

---

#### 5. Metadata Row (Content Column, Below Title)
**Position**: X: 176px, Y: 109px (8px below title)
**Text**: "Block 2 · 18 minutes · Construction & Trades"
**Typography**:
- **Font**: Open Sans Regular (400)
- **Size**: 14px
- **Color**: #525252 (text-neutral-600)
- **Line Height**: 20px

**Structure** (create as text with spans/styling):
```
"Block 2" (regular) + " · " (regular) + "18 minutes" (regular) + " · " (regular) + "Construction & Trades" (regular)
```

**Separator Symbol**: Middot (·) with 8px horizontal spacing
- Character: U+00B7 (middle dot)
- Color: #A3A3A3 (text-neutral-400, slightly lighter)

---

#### 6. CTA Button (Right Column)
**Position**: X: 1050px (right-aligned with 32px right padding), Y: 54px (vertically centered)
**Size**: Auto width (min 180px) × 44px height
**Padding**: 12px top/bottom, 24px left/right
**Border Radius**: 8px
**Border**: 2px solid #0092FF (border-blue)
**Background**: #FFFFFF
**Shadow**: None (default state)

**Text**: "Watch Session"
**Typography**:
- **Font**: Museo Sans Semibold (600)
- **Size**: 15px
- **Color**: #0092FF (text-blue)
- **Letter Spacing**: 0px

**Icon**: Arrow Right (→)
- **Source**: Lucide Icons "arrow-right"
- **Size**: 16px × 16px
- **Color**: #0092FF
- **Position**: 8px right of text (inline)

**Figma Layer Structure**:
```
Frame: "CTA Button"
  └─ Rectangle: "Button Background" (fill white, stroke blue)
      └─ Auto Layout (horizontal, 8px gap, center aligned)
          ├─ Text: "Watch Session"
          └─ Icon: Arrow Right (16px)
```

---

### Hover State Variant (Desktop)

Create duplicate artboard for hover state:

**Changes from Default**:
1. **Container Shadow**: 0px 4px 6px rgba(0,0,0,0.1), 0px 2px 4px rgba(0,0,0,0.06)
   - Increase elevation from shadow-sm to shadow-md
2. **CTA Button Background**: #C6E7FF (bg-blue-50)
   - Change from white to light blue tint
3. **CTA Button Border**: #0077CC (slightly darker blue)
4. **Arrow Icon**: Transform translateX(2px)
   - Move arrow 2px to the right

**Figma Animation Hints** (for prototyping):
- Transition: Smart Animate
- Duration: 200ms
- Easing: Ease Out (0, 0, 0.2, 1)

---

## Mobile Mockup (375px Viewport - iPhone)

### Canvas Setup
- **Artboard Size**: 375px × 600px
- **Component Width**: 343px (375px - 16px left/right margins)
- **Component Position**: 16px from left edge, 100px from top

### Component Dimensions
- **Container**: 343px wide × auto height (approx 260px)
- **Padding**: 24px all sides
- **Border Radius**: 12px
- **Border**: 1px solid #E5E5E5
- **Background**: Linear gradient 135° from #C6E7FF to #FFFFFF
- **Shadow**: Same as desktop (0px 1px 3px...)

### Layout Stack (Vertical)
```
┌───────────────────────────────────┐
│  [24px padding top]               │
│                                   │
│  ┌────┐  CAREER SESSION FROM...  │
│  │BLK2│                           │
│  └────┘                           │
│  [16px gap]                       │
│  Introduction to Skilled          │
│  Trades Pathways                  │
│  [8px gap]                        │
│  Block 2 · 18 min · Construction  │
│  [16px gap]                       │
│  ┌─────────────────────────────┐ │
│  │   Watch Session         →   │ │
│  └─────────────────────────────┘ │
│                                   │
│  [24px padding bottom]            │
└───────────────────────────────────┘

Total height: ~260px (varies with text wrapping)
```

### Element Specifications

#### 1. Block Badge (Top-Left)
**Position**: X: 24px, Y: 24px
**Size**: 40px × 40px (same as desktop)
**All other specs**: Identical to desktop version

#### 2. Context Label (Top-Right of Badge)
**Position**: X: 76px (badge + 12px gap), Y: 32px (baseline-aligned)
**Max Width**: 243px (prevents right edge overflow)
**Text**: May wrap to 2 lines if narrow viewport
**Typography**: Same as desktop (11px Open Sans Semibold)

#### 3. Session Title (Below Badge)
**Position**: X: 24px, Y: 80px (16px below badge)
**Max Width**: 295px (343px - 48px padding)
**Text**: "Introduction to Skilled Trades Pathways"
**Typography**:
- **Font**: Museo Sans Bold (700)
- **Size**: 18px (reduced from 24px desktop)
- **Color**: #22224C
- **Line Height**: 23px (1.3 ratio)
- **Max Lines**: 2

#### 4. Metadata Row (Below Title)
**Position**: X: 24px, Y: 131px (8px below title)
**Max Width**: 295px
**Text**: "Block 2 · 18 min · Construction"
- Note: "minutes" abbreviated to "min" for mobile
- Industry may wrap to second line if long
**Typography**: Same as desktop (14px Open Sans Regular)

#### 5. CTA Button (Bottom, Full-Width)
**Position**: X: 24px, Y: 159px (16px below metadata)
**Size**: 295px wide × 44px height (full container width minus padding)
**Padding**: 12px top/bottom, 24px left/right
**Border Radius**: 8px
**Border**: 2px solid #0092FF
**Background**: #FFFFFF

**Text + Icon**: Same as desktop (15px Museo Sans Semibold, arrow icon)
**Alignment**: Center (horizontal)

---

## Tablet Mockup (768px Viewport - iPad Portrait)

### Canvas Setup
- **Artboard Size**: 768px × 600px
- **Component Width**: 720px (768px - 24px left/right margins)
- **Component Position**: 24px from left edge, 100px from top

### Component Dimensions
- **Container**: 720px wide × 168px tall
- **Padding**: 28px all sides (between mobile 24px and desktop 32px)
- **Border Radius**: 12px
- **Border**: 1px solid #E5E5E5
- **Background**: Same gradient as mobile/desktop
- **Shadow**: Same as mobile/desktop

### Layout Grid (Hybrid)
```
┌──────────────────────────────────────────────────────────────┐
│  [28px padding]                                              │
│  ┌───────────────────────────────┐     ┌────────────────┐   │
│  │ [BLK 2]  SESSION FROM ORG     │     │                │   │
│  │                               │     │   Watch Session│   │
│  │ Introduction to Skilled Trades│     │             →  │   │
│  │ Pathways                      │     │                │   │
│  │                               │     └────────────────┘   │
│  │ Block 2 · 18 min · Construction│                         │
│  └───────────────────────────────┘                          │
│  [28px padding]                                              │
└──────────────────────────────────────────────────────────────┘

Layout: Content column (1fr) + CTA button (auto, right-aligned)
No thumbnail (hidden until 1024px+ breakpoint)
```

### Element Specifications

**Differences from Mobile**:
- Padding: 28px (vs. 24px mobile)
- Button: Auto-width, right-aligned (vs. full-width mobile)
- Title size: 20px (vs. 18px mobile, 24px desktop)
- Layout: Two-column (content + button) vs. vertical stack

**Differences from Desktop**:
- No thumbnail (hidden)
- Slightly reduced padding (28px vs. 32px)
- Title size: 20px (vs. 24px desktop)

---

## Component Variants Library (Figma Components)

### Create 4 Master Components

**1. SessionCrossLink/Desktop/Default**
- Uses Block 2 colors and example session
- 1200px wide × 152px tall
- All elements as specified above

**2. SessionCrossLink/Desktop/Hover**
- Instance of Default with hover overrides
- Shadow: md, Button BG: blue-50

**3. SessionCrossLink/Mobile/Default**
- 343px wide × auto height
- Vertical layout, full-width button

**4. SessionCrossLink/Tablet/Default**
- 720px wide × 168px tall
- Two-column layout, no thumbnail

### Component Properties (Figma)

**Boolean Properties**:
- `showThumbnail`: true (desktop) / false (mobile, tablet)
- `isHovered`: false (default) / true (hover state)

**Text Properties**:
- `sessionTitle`: "Introduction to Skilled Trades Pathways"
- `blockNumber`: "2"
- `duration`: "18 minutes" (desktop) / "18 min" (mobile)
- `industry`: "Construction & Trades"

**Instance Swap Properties**:
- `blockBadge`: Block1Badge / Block2Badge / Block3Badge / Block4Badge
- `thumbnail`: Image placeholder (can be swapped per instance)

---

## Color Palette Reference

### Primary Colors
```css
Navy (text-navy):     #22224C
Blue (border-blue):   #0092FF
Blue-50 (bg-blue-50): #C6E7FF
Blue-100:             #99D6FF (hover active state)
```

### Neutral Colors
```css
Neutral-200 (border): #E5E5E5
Neutral-400:          #A3A3A3 (metadata separator)
Neutral-500:          #737373 (context label)
Neutral-600:          #525252 (metadata text)
White:                #FFFFFF
```

### Block Badge Colors
```css
Block 1 BG:  #FFE5CC (bg-orange-100)
Block 1 Text:#8B4513 (text-orange-900)

Block 2 BG:  #E5F4FF (bg-blue-100)
Block 2 Text:#0066CC (text-blue-700)

Block 3 BG:  #E8F5E8 (bg-green-100)
Block 3 Text:#2D5016 (text-green-900)

Block 4 BG:  #FFF4E5 (bg-yellow-100)
Block 4 Text:#CC6600 (text-yellow-800)
```

---

## Typography Reference

### Font Families
- **Museo Sans**: Primary headings, buttons, badges
  - Weights: 700 (Bold), 600 (Semibold)
- **Open Sans**: Body text, metadata, labels
  - Weights: 600 (Semibold), 400 (Regular)

### Font Sizes & Line Heights
```css
Session Title (Desktop):  24px / 31px (1.3)
Session Title (Tablet):   20px / 26px (1.3)
Session Title (Mobile):   18px / 23px (1.3)

Metadata:                 14px / 20px (1.43)
Context Label:            11px / 16px (1.45)
Badge Text:               12px / 16px (1.33)
Button Text:              15px / 20px (1.33)
```

---

## Export Settings (Figma)

### For Development Handoff
**Format**: PNG (2x and 3x for retina displays)
**Artboards to Export**:
- Desktop Default (1440px)
- Desktop Hover (1440px)
- Tablet Default (768px)
- Mobile Default (375px)

**File Naming**:
- `session-crosslink-desktop-default@2x.png`
- `session-crosslink-desktop-hover@2x.png`
- `session-crosslink-tablet-default@2x.png`
- `session-crosslink-mobile-default@2x.png`

### For Presentation
**Format**: PDF (vector)
**Artboards**: All variants on single page with labels
**File Name**: `session-crosslink-component-specs.pdf`

---

## Accessibility Annotations

Add annotation layer in Figma for accessibility specs:

**1. Focus Indicator**
- Draw 2px blue (#0092FF) outline around entire component
- Offset: 4px outside component boundary
- Label: "Keyboard focus state (Tab key navigation)"

**2. Touch Targets**
- Highlight CTA button with 44px × 44px minimum area overlay
- Label: "Minimum touch target for accessibility (iOS/Android standards)"

**3. Color Contrast Ratios**
- Annotate each text element with contrast ratio:
  - Session Title: 12.1:1 (AAA) ✅
  - Metadata: 7.4:1 (AAA) ✅
  - Context Label: 5.9:1 (AA) ✅
  - Block Badge Text: 7.1:1 (AAA) ✅ (Block 2 example)

**4. Screen Reader Flow**
- Draw numbered arrows showing tab order:
  1. Entire component receives focus (not individual elements)
  2. ARIA label announced: "Watch career session: [Title] from Block [X]"

---

## Design Token Export

For design-to-code tools (Figma → CSS):

```json
{
  "sessionCrossLink": {
    "container": {
      "padding": {
        "mobile": "24px",
        "tablet": "28px",
        "desktop": "32px"
      },
      "borderRadius": "12px",
      "border": "1px solid #E5E5E5",
      "background": "linear-gradient(135deg, #C6E7FF 0%, #FFFFFF 100%)",
      "shadow": {
        "default": "0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px rgba(0,0,0,0.06)",
        "hover": "0px 4px 6px rgba(0,0,0,0.1), 0px 2px 4px rgba(0,0,0,0.06)"
      }
    },
    "blockBadge": {
      "size": "40px",
      "borderRadius": "8px",
      "fontSize": "12px",
      "fontWeight": "700",
      "letterSpacing": "0.5px"
    },
    "sessionTitle": {
      "fontSize": {
        "mobile": "18px",
        "tablet": "20px",
        "desktop": "24px"
      },
      "fontWeight": "700",
      "lineHeight": "1.3",
      "color": "#22224C"
    },
    "ctaButton": {
      "height": "44px",
      "padding": "12px 24px",
      "borderRadius": "8px",
      "border": "2px solid #0092FF",
      "fontSize": "15px",
      "fontWeight": "600"
    }
  }
}
```

---

## Mockup Usage Examples

### Example 1: Stakeholder Presentation
**Use Case**: Present component to product team for approval
**Artboards**: Desktop Default, Desktop Hover, Mobile Default
**Format**: Figma prototype with click-through from booth page mockup
**Notes**: Show component in context of full booth page layout

### Example 2: Developer Handoff
**Use Case**: Provide specs for implementation
**Deliverables**:
- All 4 artboard exports (PNG @2x)
- Component spec sheet (this document)
- Figma inspect link (CSS values)
**Format**: Zeplin, Figma Dev Mode, or PDF

### Example 3: QA Visual Regression Testing
**Use Case**: Verify implemented component matches design
**Deliverables**:
- Baseline screenshots from Figma (PNG @3x)
- Annotated comparison overlays
**Tool**: Percy, Chromatic, or manual comparison

---

## Last Updated

**2025-11-22** - Initial visual mockup specifications created with pixel-perfect measurements, color values, and export settings for design tool implementation.
