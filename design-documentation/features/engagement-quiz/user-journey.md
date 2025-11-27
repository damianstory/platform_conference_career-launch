---
title: Engagement Quiz - User Journey Mapping
description: Complete user flows, scenarios, and edge cases for quiz interaction
feature: engagement-quiz
last-updated: 2025-11-26
version: 1.0
related-files:
  - README.md
  - screen-states.md
  - interactions.md
status: approved
---

# User Journey Mapping

## Table of Contents

1. [Primary User Personas](#primary-user-personas)
2. [Core User Journey](#core-user-journey)
3. [Alternative Journeys](#alternative-journeys)
4. [Edge Cases](#edge-cases)
5. [Success Metrics](#success-metrics)

---

## Primary User Personas

### Persona 1: Emma - Engaged Grade 11 Student

**Demographics:**
- Age: 16
- Grade: 11
- Location: Mississauga, Ontario
- Tech Comfort: High

**Context:**
- Watching Career Launch sessions during Careers class (Period 2)
- Interested in STEM careers, exploring renewable energy sector
- Motivated by earning credentials for her portfolio
- Likes gamified learning experiences

**Goals:**
- Learn about energy sector careers
- Test her knowledge from the session
- Earn achievement badge to share on social media
- Improve score through multiple attempts

**Pain Points:**
- Limited class time (75-minute period)
- Wants to move quickly through content
- Frustrated by slow-loading interfaces
- Annoyed by mandatory sign-ups

**Devices:**
- School-issued Chromebook (classroom)
- Personal iPhone (at home)

---

### Persona 2: Mr. Patel - High School Guidance Counselor

**Demographics:**
- Age: 42
- Role: Guidance Counselor
- School: Large urban high school (1800 students)
- Tech Comfort: Medium

**Context:**
- Showing Career Launch videos to Grade 9 classes
- Managing 6 classes per day, minimal prep time
- Wants to assess student engagement and understanding
- Needs simple, reliable tools that work first-time

**Goals:**
- Quickly assess if students understood session content
- Identify knowledge gaps for follow-up discussion
- Encourage active participation (not just passive watching)
- Minimize technical issues during class

**Pain Points:**
- No time for complex setup or troubleshooting
- Students get distracted easily
- Needs content that works on school network/devices
- Can't monitor 30 individual students simultaneously

**Devices:**
- School desktop computer (classroom projector)
- Personal iPad (prep periods)

---

### Persona 3: Sarah - Undecided Grade 10 Student

**Demographics:**
- Age: 15
- Grade: 10
- Location: Rural Ontario
- Tech Comfort: Medium

**Context:**
- Required to watch Career Launch as part of curriculum
- Unsure about future career path
- Low motivation for academic tasks
- Easily discouraged by failure

**Goals:**
- Meet minimum class requirements
- Avoid embarrassment (low scores visible to peers)
- Understand career options in simple terms
- Build confidence in her abilities

**Pain Points:**
- Test anxiety (fears failing quizzes)
- Slower reading speed than peers
- Limited internet bandwidth at home
- Afraid to ask questions or admit confusion

**Devices:**
- Shared family laptop (older model)
- Budget Android phone

---

## Core User Journey

### Journey: Emma Takes Energy Sector Quiz (First Attempt)

#### Step 1: Discovery
**Entry Point:** Emma's class finishes watching "Careers in Renewable Energy" session

**Action:**
- Teacher instructs class to explore sponsor booths
- Emma clicks "Expo Hall" link in navigation
- Filters booths by "Energy" industry

**What Emma Sees:**
- Grid of booth cards with sponsor logos
- "Ontario Energy Solutions" booth shows "Platinum" tier badge
- Card preview shows "Interactive Skills Quiz" icon

**What Emma Thinks:**
> "A quiz could be interesting. I like testing what I learned. And that badge looks cool for my portfolio."

**What Emma Does:**
- Clicks "Ontario Energy Solutions" booth card
- Page loads in <1 second

**Emotional State:** Curious, Motivated (7/10)

---

#### Step 2: Booth Exploration
**Entry Point:** Emma lands on booth detail page

**What Emma Sees:**
- 12-column bento grid layout
- Video in top-left (4 cols), Quiz in top-right (8 cols)
- Quiz shows preview with title and "Start Quiz" button visible
- Resources and company story below

**What Emma Thinks:**
> "The quiz is right there, I don't have to scroll around looking for it. Nice."

**What Emma Does:**
- Scans quiz preview box
- Reads: "Energy Sector Skills Assessment - 12 Questions, 8-10 minutes"
- Sees achievement badge icon

**Emotional State:** Engaged (8/10)

---

#### Step 3: Start Screen
**Entry Point:** Quiz loads in embedded view (500px height, 8 cols width)

**What Emma Sees:**
```
┌─────────────────────────────────────┐
│ Energy Sector Skills Assessment [↗] │
├─────────────────────────────────────┤
│                                     │
│   🎯 Test your knowledge about      │
│   careers in renewable energy...    │
│                                     │
│   📊 12 Questions                   │
│   ⏱️  8-10 minutes                 │
│   🏆 Earn achievement badge         │
│                                     │
│                [Start Quiz →]       │
└─────────────────────────────────────┘
```

**What Emma Thinks:**
> "12 questions, 8-10 minutes. That's doable. I'll still have time to check out other booths."

**What Emma Does:**
- Notices expand button (↗) in top-right
- Decides to use embedded view first
- Clicks "Start Quiz" button

**Interaction Time:** 3 seconds (read + click)

**Emotional State:** Confident (8/10)

---

#### Step 4: Question 1 (First Question)
**Entry Point:** Quiz transitions from start to first question (200ms fade)

**What Emma Sees:**
```
┌─────────────────────────────────────┐
│ Energy Sector Skills Assessment [↗] │
├─────────────────────────────────────┤
│ ▓░░░░░░░░░░░ Question 1 of 12      │
│                                     │
│ What is the primary role of a      │
│ Wind Turbine Technician?           │
│                                     │
│ ┌───────────┬───────────┐          │
│ │ A. Design │ B. Install│          │
│ │    wind   │    and... │          │
│ │    farms  │           │          │
│ └───────────┴───────────┘          │
│ ┌───────────┬───────────┐          │
│ │ C. Sell   │ D. Conduct│          │
│ │    renew. │    env... │          │
│ │    energy │   impact  │          │
│ └───────────┴───────────┘          │
│                                     │
│               [Next Question →] (disabled)
└─────────────────────────────────────┘
```

**What Emma Thinks:**
> "Okay, this one seems straightforward. I remember from the video they mentioned installation and maintenance. I'll pick B."

**What Emma Does:**
- Reads question (4 seconds)
- Hovers over option B → card highlights with blue border
- Clicks option B → card gets blue border, others dim

**Interaction Time:** 7 seconds

**Emotional State:** Confident (8/10)

---

#### Step 5: Feedback (Question 1)
**Entry Point:** Emma clicks "Next Question" button (now enabled)

**What Emma Sees:**
- Feedback box slides down from top (300ms animation)
- Option B turns navy blue background with white text
- Green checkmark icon appears on option B
- Feedback text appears below

```
┌──────────────────────────────────────┐
│ B. Install and maintain wind turbines│
│ ✓ CORRECT (white text, navy bg)     │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ ✓ Correct! Wind Turbine Technicians │
│   are responsible for installing,   │
│   maintaining, and repairing wind   │
│   turbines to ensure optimal        │
│   performance.                       │
└──────────────────────────────────────┘
```

**What Emma Thinks:**
> "Yes! I got it right. The explanation confirms what I remembered from the video."

**What Emma Does:**
- Reads feedback (3 seconds)
- Feels validated
- Clicks "Next Question" button

**Interaction Time:** 5 seconds

**Emotional State:** Proud, Motivated (9/10)

---

#### Step 6: Questions 2-11 (Middle Questions)
**Pattern Repeats:**
1. Question displays with 4 options
2. Emma reads question (4-6 seconds)
3. Emma selects answer (1-2 seconds)
4. Emma clicks "Next Question"
5. Feedback shows correct/incorrect (3-4 seconds to read)
6. Emma clicks "Next Question" to proceed

**Performance:**
- Questions 2-7: All correct (Emma is engaged, remembers content)
- Question 8: Incorrect (tricky detail about solar panel efficiency)
  - Emma sees light blue background on her wrong answer
  - Navy background on correct answer
  - Reads explanation carefully
  - Feels slightly disappointed but learns from mistake
- Questions 9-11: Correct (Emma regains confidence)

**Total Time for Questions 2-11:** ~70 seconds (10 questions × 7 seconds average)

**Emotional State Fluctuation:**
- Questions 2-7: Confident (8-9/10)
- Question 8: Slightly Discouraged (6/10)
- Questions 9-11: Recovered Confidence (8/10)

---

#### Step 7: Question 12 (Final Question)
**Entry Point:** Last question, Emma knows completion is near

**What Emma Sees:**
```
┌─────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓░ Question 12 of 12     │
│                                     │
│ Which certification is commonly     │
│ required for electricians in...    │
│                                     │
```

**What Emma Thinks:**
> "Last question! I'm pretty sure I did well. Let's finish strong."

**What Emma Does:**
- Reads question carefully (wants to end on correct answer)
- Selects answer with confidence
- Clicks "Next Question" → sees feedback (correct!)
- Button now says "View Results" instead of "Next Question"
- Clicks "View Results"

**Interaction Time:** 8 seconds

**Emotional State:** Excited to see score (9/10)

---

#### Step 8: Results Screen
**Entry Point:** Quiz transitions from final feedback to results (500ms animation)

**What Emma Sees:**
```
┌─────────────────────────────────────┐
│ Quiz Complete!                  [↗] │
├─────────────────────────────────────┤
│           🎉                        │
│                                     │
│            92%                      │
│         Your Score                  │
│                                     │
│ Outstanding! You're an energy       │
│ sector expert!                      │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Performance Breakdown:          │ │
│ │ ✓ 11 Correct                    │ │
│ │ ✗ 1 Incorrect                   │ │
│ │ ⏱ 6 minutes 42 seconds         │ │
│ └─────────────────────────────────┘ │
│                                     │
│ [Download Badge] [Retake Quiz]     │
│                                     │
│ Best Score: 92% • Attempt 1        │
└─────────────────────────────────────┘
```

**What Emma Thinks:**
> "92%! That's an A! I'm definitely downloading that badge. This is going on my LinkedIn."

**What Emma Does:**
- Sees 92% score count up from 0 (satisfying animation)
- Reads performance message "Outstanding! You're an expert!"
- Reviews breakdown: 11/12, ~7 minutes
- Clicks "Download Badge" button

**Interaction Time:** 8 seconds

**Emotional State:** Proud, Accomplished (10/10)

---

#### Step 9: Badge Download
**Entry Point:** Emma clicks "Download Badge" button

**What Emma Sees:**
- Button changes to "Generating..." with spinner (1.5 seconds)
- Button turns green with checkmark: "Downloaded!"
- Browser download notification appears
- Badge image file downloads: `energy-sector-skills-badge-92.png`

**What the Badge Shows:**
- Custom sponsor image (1200×900px PNG)
- Ontario Energy Solutions logo
- myBlueprint logo (small, bottom-left)
- "Achievement Badge" with decorative border
- No student name (generic badge as per user preference)

**What Emma Thinks:**
> "Perfect! Now I can add this to my portfolio and share it with my family."

**What Emma Does:**
- Opens Downloads folder
- Views badge image
- Takes screenshot to share on social media later
- Returns to quiz results screen

**Interaction Time:** 10 seconds

**Emotional State:** Satisfied (10/10)

---

#### Step 10: Post-Quiz Exploration
**Entry Point:** Emma returns to booth detail page

**What Emma Sees:**
- Quiz still embedded in booth (shows results screen)
- Can retake quiz if desired
- Resources section below with downloadable materials
- Company story and contact info

**What Emma Thinks:**
> "I did really well, but maybe I'll retake it later to get 100%. Let me check out the resources."

**What Emma Does:**
- Scrolls down to resources section
- Downloads "Energy Careers Guide PDF"
- Clicks back to Expo Hall
- Explores 2 more booths before class ends

**Interaction Time:** 2 minutes (booth exploration)

**Emotional State:** Motivated to explore more (9/10)

---

### Journey Summary: Emma's Experience

**Total Time:** ~9 minutes (quiz: 7 min, badge download: 1 min, exploration: 1 min)

**Success Metrics:**
✓ Quiz completed (100% completion rate)
✓ Score above passing (92% vs 70% threshold)
✓ Badge downloaded (engagement artifact created)
✓ Positive emotional journey (started 7/10, ended 9/10)
✓ Additional booth exploration (downstream engagement)

**What Worked Well:**
1. **No friction onboarding** - Started quiz in 3 seconds (no sign-up, no pop-ups)
2. **Clear progress indication** - Always knew how far into quiz
3. **Immediate feedback** - Reinforced learning after each question
4. **Satisfying completion** - Score reveal + badge download felt rewarding
5. **Embedded experience** - No full-page takeover, stayed in booth context

**What Could Be Improved:**
- None identified in Emma's journey (ideal scenario)

---

## Alternative Journeys

### Journey 2: Sarah Takes Quiz with Lower Confidence

#### Key Differences from Emma's Journey:

**Question 3 (First Mistake):**
- Sarah selects wrong answer (C instead of B)
- Sees light blue background + X icon
- Reads feedback: "Incorrect. The correct answer is B..."
- **Emotional Response:** Discouraged (5/10), worries about failing

**Question 5 (Second Mistake):**
- Another incorrect answer
- Sarah's confidence drops further (4/10)
- Considers giving up

**Question 7 (Breakthrough):**
- Gets answer correct
- Feedback reinforces knowledge
- Confidence starts recovering (6/10)

**Final Score: 67%**
- Just below passing threshold (70%)
- Performance message: "Good effort! Review the feedback and try again."
- **Emotional Response:** Disappointed but not devastated (5/10)

**Decision Point:**
- Sees "Retake Quiz" button
- Debate: Try again now or give up?
- **What Sarah Does:** Clicks "Retake Quiz" (encouraged by supportive message)

**Second Attempt:**
- Questions randomized (different order)
- Sarah remembers feedback from first attempt
- Gets 75% (passes!)
- Downloads badge
- **Final Emotional State:** Proud (8/10) - "I improved!"

**Key Insights:**
- Unlimited retakes crucial for confidence-building
- Encouraging messages prevent discouragement
- Question randomization maintains learning value

---

### Journey 3: Mr. Patel Monitors Class Quiz Activity

**Context:** Mr. Patel shows session to Grade 9 class (30 students)

**Step 1: Teacher Demonstration (5 minutes)**
- Projects booth detail page on classroom screen
- Shows quiz embedded in booth
- Demonstrates how to start quiz
- Encourages students to try quiz on their own devices

**Step 2: Student Independent Work (15 minutes)**
- 30 students access booths on Chromebooks
- 24 students (80%) start quiz
- 6 students explore other content

**Step 3: Mr. Patel Observes**
- Walks around classroom
- Sees students engaged (minimal off-task behavior)
- Some students discussing answers (positive peer learning)
- No technical issues reported

**Step 4: Class Discussion (5 minutes)**
- After quiz time ends, Mr. Patel asks:
  - "How many students passed the quiz?" (~18 hands raised)
  - "What did you learn from the feedback?"
  - "Who's planning to retake to improve their score?"
- Uses quiz as springboard for career discussion

**Teacher Satisfaction:**
- **Engagement:** High (8/10) - students actively participating
- **Ease of Use:** Excellent (9/10) - no setup required, worked first-time
- **Educational Value:** High (8/10) - reinforced session content

---

## Edge Cases

### Edge Case 1: Student Exits Mid-Quiz

**Scenario:** Emma starts quiz but teacher announces early dismissal

**What Happens:**
1. Emma is on Question 7 of 12
2. Bell rings, Emma closes laptop without finishing
3. Quiz progress lost (no save state)

**Recovery Options:**
- **Option A (Current Design):** No recovery, must start over
- **Option B (Future Enhancement):** Save progress to localStorage
  - Next visit shows: "Resume Quiz?" prompt
  - Restores to Question 7 with previous answers

**Design Decision:** Start with Option A (simpler), add Option B if user research shows high abandonment rate

---

### Edge Case 2: Badge Image Not Found

**Scenario:** Booth configured with quiz but badge image missing from `/public/badges/`

**What Happens:**
1. Student completes quiz with 85%
2. Clicks "Download Badge" button
3. Fetch fails (404 error)

**Error Handling:**
```
Button shows error state:
[⚠️ Badge Unavailable]

Tooltip appears:
"This booth's badge is temporarily unavailable.
Please contact the sponsor for assistance."

Analytics logged:
QuizAnalytics.badgeDownloadFailed(boothId, 'image_not_found')
```

**Student Experience:**
- Still sees score and results
- Can retake quiz
- Not blocked from continuing
- Clear error message

---

### Edge Case 3: Network Disconnection During Quiz

**Scenario:** Student's internet connection drops on Question 9

**What Happens:**
1. Student selects answer
2. Clicks "Next Question"
3. Network request fails (if analytics sends immediately)

**Resilience Strategy:**
- Quiz state is fully client-side (no server dependency)
- Can complete quiz offline
- Analytics queued in memory, sent when connection restores
- Badge download shows retry option if network fails

---

### Edge Case 4: Accessibility User (Screen Reader)

**Scenario:** Student using NVDA screen reader

**Journey Adaptations:**
1. **Start Screen:** Announces "Energy Sector Skills Assessment Quiz. 12 questions, 8 to 10 minutes. Earn achievement badge. Start Quiz button."

2. **Question 1:** Announces "Question 1 of 12. What is the primary role of a Wind Turbine Technician? Radio group. 4 options."

3. **Answer Selection:** Tab through options, announces "A. Design wind farms, radio button, unchecked"

4. **Feedback:** After submit, announces "Correct answer selected. Wind Turbine Technicians are responsible for..."

5. **Progress:** After each question, announces "Question 2 of 12. 17% complete."

6. **Results:** Announces "Quiz complete. Your final score is 92%. Congratulations, you passed!"

**Key Accessibility Features:**
- All content keyboard navigable
- ARIA labels for interactive elements
- Live regions for dynamic updates
- Logical tab order maintained

---

### Edge Case 5: Mobile Student (Small Screen)

**Scenario:** Emma accesses quiz on iPhone (375px width)

**Layout Adaptations:**
- Answer grid: 1 column (stacked) instead of 2×2
- Progress bar: Same width, text abbreviated ("Q 3/12" instead of "Question 3 of 12")
- Buttons: Full-width for easier tapping
- Fullscreen: Modal takes full viewport (no rounded corners)
- Touch targets: Minimum 56px height for all buttons

**Emma's Mobile Experience:**
- Slightly longer scrolling (answers stacked)
- Easier touch interaction (larger targets)
- Same functionality as desktop
- No compromise on feedback quality

---

### Edge Case 6: Student Attempts Perfect Score (Retake Strategy)

**Scenario:** Emma scored 92% (11/12) and wants 100%

**Journey:**
1. Views results: "Best Score: 92%, Attempt 1"
2. Clicks "Retake Quiz"
3. Questions randomize (different order)
4. Emma encounters question she missed before
5. Remembers feedback, selects correct answer this time
6. Completes quiz with 100%
7. Results show: "Best Score: 100%, Attempt 2"

**Badge Download Decision:**
- Emma downloads badge again
- Filename: `energy-sector-skills-badge-100.png` (includes new score)
- Can share both badges (92% and 100%) to show improvement

**Analytics Captured:**
- `quiz_restarted` (attempt 2, previous score 92%)
- `quiz_completed` (score 100%, passed true, attempt 2)
- `quiz_badge_downloaded` (score 100%)

**Learning Outcome:** Repeated exposure reinforces knowledge, demonstrates growth mindset

---

## Success Metrics

### Engagement Metrics

**Target:** 40% of booth visitors start quiz
**Measurement:** `quiz_started` events / `booth_visited` events

**Target:** 75% completion rate
**Measurement:** `quiz_completed` events / `quiz_started` events

**Target:** 30% badge download rate
**Measurement:** `quiz_badge_downloaded` events / `quiz_completed` events (where passed)

### Performance Metrics

**Target:** 70% average quiz score
**Measurement:** Mean of `score` values in `quiz_completed` events

**Target:** 60% pass rate (first attempt)
**Measurement:** `quiz_completed` events where `passed=true` on `attempt=1`

**Target:** 20% retake rate
**Measurement:** `quiz_restarted` events / `quiz_completed` events

### Time Metrics

**Target:** 8-10 minute average completion time
**Measurement:** Mean of `duration_seconds` values in `quiz_completed` events

**Target:** <3 second start time
**Measurement:** Time from booth page load to "Start Quiz" click (client-side timing)

### Satisfaction Metrics (Post-Launch Survey)

**Question:** "How would you rate your quiz experience?"
**Target:** 4.0/5.0 average rating

**Question:** "Did the quiz help you understand career pathways better?"
**Target:** 80% respond "Yes" or "Somewhat"

**Question:** "Would you take another sponsor quiz?"
**Target:** 70% respond "Yes"

---

## Journey Insights Summary

### What Makes a Great Quiz Experience?

1. **Zero Friction Entry:** No sign-ups, no pop-ups, instant start
2. **Clear Progress:** Always know how far you've come and how far to go
3. **Immediate Feedback:** Don't wait until end, learn as you go
4. **Forgiving Design:** Unlimited retakes, encouraging messages, celebrate growth
5. **Tangible Reward:** Badge download provides shareable proof of achievement
6. **Embedded Context:** Quiz feels part of booth, not separate app
7. **Accessible to All:** Works for screen readers, keyboards, mobile, slow networks
8. **Respects Time:** 8-10 minutes fits into class period

### User Emotional Journey (Ideal Path)

```
Curious (7/10)
    ↓ Sees quiz in booth
Engaged (8/10)
    ↓ Starts quiz
Confident (8/10)
    ↓ First correct answer
Proud (9/10)
    ↓ Several correct answers
Slightly Discouraged (6/10) [if mistake]
    ↓ Sees helpful feedback
Recovered (8/10)
    ↓ Continues quiz
Excited (9/10)
    ↓ Final question
Accomplished (10/10)
    ↓ Sees high score
Satisfied (10/10)
    ↓ Downloads badge
Motivated (9/10)
    ↓ Explores more booths
```

**Goal:** Keep emotional state above 6/10 throughout entire journey. Feedback and encouragement prevent dips below this threshold.

---

This user journey documentation ensures the quiz design meets real user needs, handles edge cases gracefully, and creates a positive, educational experience for all students regardless of ability, confidence, or technical environment.
