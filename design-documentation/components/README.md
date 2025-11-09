# Component Design Documentation

This directory contains comprehensive design specifications for individual UI components used throughout the Career Launch Platform.

## Available Components

### Social Media Buttons
**Status**: ✅ Complete
**Component**: ContactInfo (Booth Sections)
**Version**: 1.0

Social media icons placed directly beneath the website link in booth contact cards.

**Documentation Files**:
- [`social-media-buttons.md`](./social-media-buttons.md) - Complete design specifications
- [`social-media-buttons-quick-reference.md`](./social-media-buttons-quick-reference.md) - Quick visual reference and measurements
- [`social-media-buttons-implementation.tsx`](./social-media-buttons-implementation.tsx) - Complete code implementation

**Key Features**:
- 32×32px on desktop, 44×44px on mobile (WCAG compliant)
- Platform-specific brand colors on hover
- Integrated directly with contact methods (no divider)
- Full keyboard navigation and screen reader support

**Quick Stats**:
- **Space Savings**: Reclaims 20-28px vertical space by removing bottom section
- **Accessibility**: All states pass WCAG 2.1 AA (4.5:1+ contrast)
- **Touch Targets**: 44×44px minimum on mobile
- **Performance**: 200ms transitions with reduced motion support

---

## Component Documentation Structure

Each component follows this documentation pattern:

### 1. Complete Design Specifications
Comprehensive design document covering:
- Design philosophy and user experience goals
- Visual design (colors, typography, spacing)
- All interaction states (default, hover, focus, active, disabled)
- Responsive behavior across breakpoints
- Accessibility requirements and WCAG compliance
- Animation and motion specifications

### 2. Quick Reference Guide
Visual reference with:
- ASCII diagrams showing layout
- Before/after comparisons
- Size specifications at each breakpoint
- Color palette swatches
- Spacing diagrams
- Quick measurement tables

### 3. Implementation Code
Production-ready code including:
- Complete component implementation
- Helper functions and utilities
- Tailwind CSS classes reference
- Testing checklist
- Browser compatibility notes
- Performance considerations

---

## Design System Compliance

All components in this directory adhere to:

### myBlueprint Brand Guidelines
- **Colors**: Official palette only (Navy #22224C, Blue #0092FF, Light Blue #C6E7FF, Off-White #F6F6FF)
- **Typography**: Museo Sans (primary) / Open Sans (fallback)
- **Spacing**: 8px grid system (all measurements divisible by 8)
- **Border Radius**: Consistent scale (4px, 6px, 8px, 12px, 16px)

### Accessibility Standards
- **WCAG 2.1 AA**: Minimum compliance level
- **Color Contrast**: 4.5:1 for normal text, 3:1 for large text/UI components
- **Touch Targets**: 44×44px minimum on mobile
- **Keyboard Navigation**: Full support with visible focus indicators
- **Screen Readers**: Proper ARIA labels and semantic markup
- **Reduced Motion**: Respects user preferences

### Responsive Design
- **Desktop First**: Optimized for classroom presentation (1024px+)
- **Breakpoints**: Mobile (<768px), Tablet (768-1023px), Desktop (1024px+)
- **Touch-Friendly**: Larger targets and spacing on mobile
- **Fluid Typography**: Scales smoothly across device sizes

---

## How to Use This Documentation

### For Designers
1. **Reference Design Specs**: Use complete `.md` files for comprehensive design decisions
2. **Create Mockups**: Follow exact measurements and color values
3. **Validate Designs**: Use accessibility checklists to verify compliance
4. **Document Changes**: Update specifications when iterating

### For Developers
1. **Quick Reference First**: Start with visual diagrams and measurements
2. **Implementation Guide**: Copy/paste production-ready code
3. **Testing Checklist**: Verify all interaction states and responsive behavior
4. **Accessibility Validation**: Test keyboard navigation and screen reader support

### For Product Managers
1. **Quick Reference**: Understand visual design at a glance
2. **User Experience Goals**: Review design philosophy sections
3. **Quality Assurance**: Use testing checklists for acceptance criteria
4. **Trade-offs**: Understand design decisions and rationale

---

## Component Naming Conventions

Components documented here follow these naming patterns:

### File Naming
- **Design Specs**: `{component-name}.md`
- **Quick Reference**: `{component-name}-quick-reference.md`
- **Implementation**: `{component-name}-implementation.tsx`

### Component Classification
- **UI Primitives**: Buttons, inputs, badges, icons
- **Composite Components**: Cards, forms, modals, navigation
- **Layout Components**: Grids, containers, sections
- **Feature Components**: Session cards, booth sections, registration forms

---

## Adding New Component Documentation

When documenting a new component, create three files:

### 1. Design Specification (`component-name.md`)

```markdown
---
title: Component Name
description: Brief description
component: ComponentName
last-updated: YYYY-MM-DD
version: 1.0
related-files:
  - /path/to/component.tsx
dependencies:
  - List dependencies
status: draft | review | approved | implemented
---

# Component Name

## Overview
[What this component does]

## Design Philosophy
[User experience goals, design principles]

## Component Specifications
[Dimensions, layout, spacing]

## Visual Design
[Colors, typography, iconography]

## Interaction States
[Default, hover, focus, active, disabled, loading, error]

## Responsive Behavior
[Breakpoint adaptations]

## Accessibility Requirements
[WCAG compliance, keyboard nav, screen readers]

## Implementation Guide
[Code examples, helper functions]

## Quality Assurance
[Testing checklist, validation criteria]
```

### 2. Quick Reference (`component-name-quick-reference.md`)

```markdown
# Component Name - Quick Reference

## Visual Layout
[ASCII diagrams, before/after]

## Size Specifications
[Tables with measurements]

## Color Palette
[Color swatches with hex codes]

## Spacing Diagram
[Visual spacing guides]

## Interaction States
[State diagrams]

## Implementation Checklist
[Quick steps to implement]

## Quick Measurements
[Reference table]
```

### 3. Implementation (`component-name-implementation.tsx`)

```tsx
/**
 * Component Name - Complete Implementation Example
 *
 * Description of what this file provides
 */

import React from 'react'
// ... imports

// Component code with extensive comments

/**
 * IMPLEMENTATION NOTES:
 * - What was changed
 * - Why it was changed
 * - Integration considerations
 */

/**
 * TESTING CHECKLIST:
 * - Visual verification
 * - Interaction testing
 * - Accessibility validation
 * - Responsive behavior
 * - Browser compatibility
 */
```

---

## Maintenance and Updates

### Version Control
- Use semantic versioning (1.0, 1.1, 2.0)
- Document all changes in component file frontmatter
- Maintain change log in design spec file

### Review Process
1. **Draft**: Initial design specifications created
2. **Review**: Design team reviews for brand compliance and UX
3. **Approved**: Specifications finalized and ready for development
4. **Implemented**: Code matches specifications, tested and deployed

### Update Workflow
1. Update design specification `.md` file
2. Update quick reference with new measurements/diagrams
3. Update implementation code if needed
4. Increment version number
5. Document changes in frontmatter and change log

---

## Related Documentation

### Project-Level Design
- [`/Specs/DesignSpecs_CareerLaunch.md`](../../Specs/DesignSpecs_CareerLaunch.md) - Complete platform design system
- [`/CLAUDE.md`](../../CLAUDE.md) - Project overview and brand requirements

### Technical Specifications
- Component implementations in `/components`
- Tailwind configuration in `/tailwind.config.ts`
- Global styles in `/styles`

---

## Questions or Issues?

For questions about component design specifications:
1. Check the complete design spec file first
2. Review quick reference for visual clarity
3. Examine implementation code for technical details
4. Refer to main design system documentation

For design system updates or new component requests:
1. Create documentation following the pattern above
2. Ensure brand compliance and accessibility
3. Include complete implementation code
4. Add to this README with appropriate links

---

**Last Updated**: November 9, 2025
**Maintained By**: Design Team
**Documentation Version**: 1.0
