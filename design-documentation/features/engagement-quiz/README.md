---
title: Engagement Quiz Feature - Design Overview
description: Interactive skills assessment quiz for platinum booth sponsor engagement
feature: engagement-quiz
last-updated: 2025-11-26
version: 1.0
related-files:
  - user-journey.md
  - screen-states.md
  - interactions.md
  - accessibility.md
  - implementation.md
dependencies:
  - ../../design-system/style-guide.md
  - ../../design-system/components/buttons.md
  - ../../design-system/tokens/colors.md
  - ../../design-system/tokens/animations.md
status: approved
---

# Engagement Quiz Feature

## Overview

The Engagement Quiz is an interactive skills assessment tool integrated into platinum tier sponsor booths. It allows students to test their knowledge about career pathways and industry-specific skills through a 10-15 question multiple-choice quiz with instant feedback and downloadable achievement badges.

## Feature Goals

### Primary Objectives
- **Increase Booth Engagement**: Transform passive booth browsing into active learning
- **Knowledge Assessment**: Validate student understanding of session content
- **Downloadable Credential**: Provide shareable badge for student portfolios
- **Sponsor Value**: Generate analytics on student knowledge gaps for sponsors

### Success Metrics
- 40% of booth visitors start the quiz
- 75% completion rate (students who start finish the quiz)
- Average score of 70% or higher
- 30% of completers download the achievement badge

## User Experience Analysis

### Primary User Goal
Students want to validate their understanding of career pathways and earn a shareable credential that demonstrates their knowledge.

### Success Criteria
- Student completes all quiz questions
- Student receives immediate feedback on each answer
- Student sees final score and performance summary
- Student can download achievement badge (custom image provided by sponsor)

### Key Pain Points Addressed
1. **Passive Booth Browsing**: Quiz transforms passive reading into active engagement
2. **Knowledge Validation**: Students don't know if they retained key information
3. **Credential Proof**: Students lack shareable proof of career exploration activities
4. **Sponsor ROI**: Sponsors can't measure whether content resonated with students

### User Personas
**Primary:** Grade 9-12 students exploring career pathways during class time
**Secondary:** Educators using quiz results to identify knowledge gaps for follow-up discussion

## Information Architecture

### Content Hierarchy
1. **Quiz Introduction** (Start Screen)
   - Quiz title and description
   - Number of questions and estimated duration
   - Start quiz CTA
2. **Question Flow** (Quiz In Progress)
   - Progress indicator (question X of Y)
   - Current question text
   - 4 answer options
   - Feedback section (after answer selection)
   - Next question navigation
3. **Results Summary** (Completion)
   - Final score and performance tier
   - Badge download option
   - Retake quiz option

### Navigation Structure
```
Start Screen
    ↓ [Start Quiz]
Question 1
    ↓ [Select Answer]
Feedback Display
    ↓ [Next Question]
Question 2
    ↓ ...
Question 12 (Final)
    ↓ [View Results]
Results Screen
    ↓ [Download Badge] or [Retake Quiz]
```

### Mental Model Alignment
Students are familiar with online quiz platforms (Kahoot, Google Forms, Quizlet). The quiz follows established patterns:
- Linear progression through questions
- Immediate feedback after each answer
- Final score at the end
- Visual progress indicator

### Progressive Disclosure Strategy
- **Start Screen**: Minimal information (title, description, start button)
- **Question Screen**: Focus on single question, hide previous/future questions
- **Feedback**: Reveal explanation only after answer selected
- **Results**: Show comprehensive summary only at completion

## Design Decisions

### 1. Native React Component (Not Embedded Artifact)

**Decision Rationale:**
- **Performance**: Zero iframe overhead in constrained 450px height
- **Responsive**: Direct access to Tailwind breakpoints and design tokens
- **Analytics**: Seamless integration with existing booth tracking
- **Consistency**: Matches platform component architecture
- **Flexibility**: Custom badge image upload per sponsor

**Rejected Alternative:**
Claude artifact embedding would require cross-origin communication, duplicate CSS, and complex responsive handling in an iframe.

### 2. Randomized Question Order

**Decision Rationale:**
- Prevents answer pattern memorization across retakes
- True knowledge assessment (not sequence memorization)
- Analytics can still track per-question performance

**Implementation:**
- Shuffle questions on quiz start using Fisher-Yates algorithm
- Store original question IDs for analytics consistency
- Seed randomization with timestamp for unique sequences

### 3. Sponsor-Provided Badge Images

**Decision Rationale:**
- Sponsor brand consistency (custom design with their logo/colors)
- No client-side SVG generation complexity
- Simple image file served from `/public/badges/[sponsor-slug].png`
- Faster download (pre-generated, optimized image)

**Badge Requirements:**
- Format: PNG with transparency
- Size: 1200x900px (4:3 aspect ratio)
- Max file size: 500KB
- Includes: Sponsor logo, myBlueprint logo, achievement text placeholder

### 4. Unlimited Retakes

**Decision Rationale:**
- Encourages learning through iteration
- Reduces test anxiety for students
- Analytics track all attempts and best score
- Students can improve understanding and re-attempt

**Implementation:**
- "Retake Quiz" button on results screen
- Reset question order (new randomization)
- Track attempt number in analytics
- Display "Best Score: X%" on retake

### 5. No Time Limit

**Decision Rationale:**
- Accessibility (reduces stress for students with learning differences)
- Classroom context (teacher may pause for discussion)
- Focus on learning, not speed
- Estimated duration shown as guidance only

**Implementation:**
- Track actual completion time for analytics
- Show "Estimated 8-10 minutes" on start screen
- No countdown timer or auto-submit

## Technical Architecture

### Component Structure
```typescript
// Primary component
/components/booths/sections/SkillsGapQuiz.tsx

// Supporting utilities
/lib/utils/quizHelpers.ts (shuffle, scoring, validation)
/lib/utils/badgeDownload.ts (image download logic)

// Analytics integration
/lib/analytics.ts (QuizAnalytics namespace)

// Type definitions
/types/booth.ts (QuizData, QuizQuestion interfaces)
```

### State Management
```typescript
// Local component state (React.useState)
- currentQuestionIndex: number
- selectedAnswers: Map<questionId, answerIndex>
- quizState: 'start' | 'in-progress' | 'results'
- isFullscreen: boolean
- startTime: timestamp
- shuffledQuestions: QuizQuestion[]
```

### Data Flow
1. **Quiz Initialization**: Booth data → EngagementActivity → SkillsGapQuiz component
2. **Question Randomization**: Original questions → Fisher-Yates shuffle → shuffledQuestions state
3. **Answer Selection**: User click → Update selectedAnswers map → Show feedback
4. **Score Calculation**: All answers submitted → Calculate percentage → Determine pass/fail
5. **Badge Download**: Results screen → Fetch badge image → Trigger download
6. **Analytics**: Every interaction → QuizAnalytics tracking → GA4 events

## Related Documentation

- [User Journey Mapping](./user-journey.md) - Complete user flows and scenarios
- [Screen States Specification](./screen-states.md) - Detailed UI states and layouts
- [Interaction Specifications](./interactions.md) - Animations and micro-interactions
- [Accessibility Requirements](./accessibility.md) - WCAG compliance and keyboard navigation
- [Implementation Guide](./implementation.md) - Developer handoff and technical details

## Design System References

- [Color Palette](../../design-system/tokens/colors.md) - myBlueprint brand colors
- [Typography Scale](../../design-system/tokens/typography.md) - Font sizes and hierarchy
- [Button Components](../../design-system/components/buttons.md) - CTA button specifications
- [Animation System](../../design-system/tokens/animations.md) - Timing and easing standards

## Last Updated

**Date:** 2025-11-26
**Changes:**
- Initial design specification created
- User research decisions documented
- Technical architecture defined
- Analytics requirements established
