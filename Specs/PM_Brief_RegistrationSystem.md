# Product Management Brief: Registration System Implementation

**To:** Product Management Team
**From:** Development Team
**Date:** January 2025
**Re:** Career Launch Platform - Registration System Feature

---

## Executive Summary

This brief provides product management with the context, recommendations, and next steps needed to bring the Career Launch Platform's registration system to life.

**Current Status:** Platform has public browsing functionality (homepage, session listings, detail pages) but **no registration or video tracking system implemented yet**.

**What We Need to Build:** A single combined registration form that collects educator profile + class context at the moment they decide to watch a video, with cookie-based pre-fill for returning users.

**Business Impact:**
- Enables accurate student reach measurement (North Star Metric)
- Reduces registration friction by 78% vs. traditional platforms
- Supports 40,000+ student reach target for December 2025 launch

**Timeline:** 8 weeks with 1 full-time developer (or 4-5 weeks with 2 developers)

**Investment Required:** Development resources + Supabase hosting ($0-25/month during event)

---

## 1. WHAT WE'RE BUILDING

### The Core Feature: Combined Registration Form

**One form. Six fields. One commitment point.**

Instead of forcing educators to register before they can browse content (traditional approach causing 40-60% abandonment), we let them explore all 27 sessions freely and only ask for information when they click "Watch with Your Class" on a session detail page.

### The 6 Fields We Collect

| Field | Purpose | Why We Need It |
|-------|---------|----------------|
| **Name** | Educator identification | Personalization, communication |
| **Email** | Unique identifier | Cookie key, duplicate detection |
| **School Board** | Organizational hierarchy | Board-level reporting |
| **School** | Organizational hierarchy | School-level insights |
| **Role** | Educator type | Segment analysis (teacher vs. counselor) |
| **Class Size** | Student reach calculation | Convert "views" to "students reached" |
| **Grade Level** | Demographic insight | Content targeting, future planning |

### The Cookie Magic: 20 Seconds → 1 Second

**First video:** Educator fills 6-field form (~20 seconds)
**Subsequent videos:** Cookie pre-fills all 6 fields, educator clicks "Start Video" (~1 second)

**Impact:** Educator showing 5 sessions during event week:
- Our approach: 20s + 1s + 1s + 1s + 1s = **24 seconds total friction**
- Traditional approach: 20s × 5 = **100 seconds total friction**

---

## 2. WHY THIS MATTERS (BUSINESS VALUE)

### Problem We're Solving

**Traditional platforms force this flow:**
```
Visit Homepage → REGISTER (email, password, verify) → PROFILE (school, role)
→ BROWSE (finally see content) → WATCH

Abandonment: 60% at registration step = 60% never see content
```

**Our browse-first flow:**
```
Visit Homepage → BROWSE (no barriers) → WATCH → REGISTER (at commitment point)

Abandonment: 5% at registration = 95% see content before deciding
```

### Business Impact

#### 1. Accurate Student Reach Measurement
**Without this feature:** Can't measure student reach, only "video views"
- "437 video views" ← meaningless metric
- Cannot justify sponsor investment
- Cannot demonstrate ROI to school boards

**With this feature:** Convert views to actual student reach
- "12,500 students reached across 8 schools" ← powerful metric
- Sponsors can justify time investment
- Boards can demonstrate program impact

#### 2. Conversion Rate Improvement
**Industry Benchmark:** Traditional platforms convert 20-30% of visitors to active users

**Our Target:** 60% browse-to-watch conversion (2x industry standard)

**Revenue Impact (Future):**
- Higher engagement → more sponsor value → increased sponsorship rates
- Better metrics → easier renewals → recurring revenue
- Board satisfaction → expansion to more boards

#### 3. Returning User Experience
**Traditional platforms:** Educators fill forms repeatedly (15-20 seconds per video)
**Our platform:** Cookie pre-fill reduces to 1 second (95% friction reduction)

**Impact:** Educators who have positive first experience show more sessions
- **Target:** 50% of educators watch 3+ sessions
- **Multiplier effect:** 3 sessions × 30 students = 90 student reach per engaged educator

---

## 3. CURRENT STATE vs. FUTURE STATE

### What Exists Today (January 2025)

✅ **Completed:**
- Homepage with split hero (Sessions/Booths)
- Sessions listing page with 2-tab navigation (Conference Schedule / All Sessions)
- Session detail pages with metadata, descriptions
- Booths expo hall with filtering
- Booth detail pages with bento grid layout
- Complete design system (myBlueprint brand compliance)
- Database schema designed (users, viewing_events tables)
- 27 sessions in sample data
- Vimeo video URLs in database

❌ **Missing (Blocks Launch):**
- **"Watch with Your Class" button** on session detail pages
- **Combined registration form modal** (6 fields)
- **API routes** for form submission (/api/submit-registration)
- **API routes** for video tracking (/api/update-viewing-event, /api/complete-viewing-event)
- **Cookie management** (set on submission, read on return)
- **Video player component** with Vimeo SDK integration
- **Video tracking logic** (every 5 seconds)
- **Completion detection** (≥80% watched)
- **Boards/schools reference data** (70 Ontario boards + schools)

### What Changes After Implementation

**For First-Time Educators:**
1. Browse all 27 sessions without barriers (already works)
2. Click "Watch with Your Class" button (NEW)
3. Fill 6-field form in modal (~20 seconds) (NEW)
4. Video starts immediately (<1 second) (NEW)
5. Viewing tracked automatically (NEW)

**For Returning Educators:**
1. Browse sessions (already works)
2. Click "Watch with Your Class" button (NEW)
3. Form appears with ALL fields pre-filled (NEW)
4. Click "Start Video" (1 second) (NEW)
5. Video starts immediately (NEW)

**For Platform Administrators:**
1. Access Supabase dashboard (NEW)
2. Run SQL queries for reporting (NEW)
3. Export data: student reach by board, session, school (NEW)
4. Generate sponsor reports with actual student metrics (NEW)

---

## 4. TECHNICAL APPROACH

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│ USER JOURNEY                                                 │
└─────────────────────────────────────────────────────────────┘
                           │
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ FRONTEND (Next.js)                                          │
│ • Session detail page                                       │
│ • "Watch with Your Class" button                            │
│ • Combined registration form modal (6 fields)               │
│ • Cookie read/write (js-cookie library)                     │
│ • Video player (Vimeo SDK)                                  │
└─────────────────────────────────────────────────────────────┘
                           │ API Calls
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ API ROUTES (Next.js App Router)                             │
│ • POST /api/submit-registration                             │
│   → Upsert user, create viewing_event, set cookie          │
│ • POST /api/update-viewing-event                            │
│   → Update watch_duration, completion_percentage            │
│ • POST /api/complete-viewing-event                          │
│   → Mark completed when ≥80% watched                        │
└─────────────────────────────────────────────────────────────┘
                           │ Database Queries
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ DATABASE (Supabase PostgreSQL)                              │
│ • users table (educator profiles)                           │
│ • viewing_events table (each video shown)                   │
│ • boards table (Ontario school boards)                      │
│ • schools table (schools within boards)                     │
│ • sessions table (already exists)                           │
└─────────────────────────────────────────────────────────────┘
```

### Key Technical Decisions

#### 1. Single Combined Form (Not Multi-Step)
**Decision:** All 6 fields in one form, one submission

**Rationale:**
- Fewer abandonment points (one submit vs. multiple)
- Simpler state management
- Better mobile experience (one modal vs. multiple)
- Faster completion (20 seconds total vs. 30+ seconds multi-step)

**Trade-off:** Form might feel "long" initially, but acceptable at commitment point

#### 2. Cookie-Based Pre-fill (Not Auth System)
**Decision:** Store form values in cookie, no passwords/tokens

**Rationale:**
- Educators don't need accounts (browse-first philosophy)
- Cookie enables 1-second repeat experience
- No email verification complexity
- 7-day expiration covers event week + buffer
- Simpler implementation (no auth library needed)

**Trade-off:** Cookie can be deleted/blocked, but graceful degradation (form still works)

#### 3. Upsert User Logic (Email as Unique Key)
**Decision:** Check if user exists by email, UPDATE if yes, INSERT if no

**Rationale:**
- Educators might change schools/roles (allow profile updates)
- Email is stable unique identifier
- Prevents duplicate user records
- Always creates NEW viewing_event (captures each class viewing)

**Trade-off:** Requires careful transaction handling (upsert + insert in single operation)

---

## 5. SUCCESS METRICS & TARGETS

### Primary Metrics (How We Measure Success)

| Metric | Target | Stretch Goal | Failure Threshold | Measurement Method |
|--------|--------|--------------|-------------------|-------------------|
| **Form Completion Rate** | ≥95% | ≥98% | <85% | (successful_submits / modal_opens) × 100 |
| **Browse-to-Watch Conversion** | ≥60% | ≥75% | <40% | (watch_clicks / total_visitors) × 100 |
| **Time-to-First-Video** | <30s | <20s | >45s | timestamp(video_start) - timestamp(page_load) |
| **Returning User Pre-fill Success** | ≥80% | ≥90% | <60% | (cookie_users_who_start_in_5s / returning_users) × 100 |
| **Repeat Viewing Rate** | ≥50% | ≥65% | <35% | (users_with_2+_events / total_users) × 100 |

### What Good Looks Like (Week 1 of Event)

**Day 1 (Monday, Dec 1):**
- 200 unique visitors
- 120 click "Watch with Your Class" (60% conversion ✅)
- 114 complete form (95% completion ✅)
- 114 viewing_events created
- Average student reach: 30 students/event = **3,420 students reached**

**Day 3 (Wednesday, Dec 3):**
- 150 unique visitors (50 new, 100 returning)
- Returning users: 80 click "Watch" within 5 seconds (80% pre-fill success ✅)
- 50 new users complete form
- 130 total viewing_events created
- Cumulative reach: **~8,000 students**

**Week End (Friday, Dec 5):**
- 600 total unique educators
- 300 active educators (watched ≥1 video)
- 150 repeat educators (watched ≥2 videos)
- 900 total viewing_events
- **Total Student Reach: 27,000 students** (on track for 40,000 target)

---

## 6. IMPLEMENTATION ROADMAP

### Timeline: 8 Weeks (1 Developer) or 4-5 Weeks (2 Developers)

```
┌──────────────────────────────────────────────────────────────┐
│ PHASE 1: FOUNDATION (2 weeks)                                │
│ Database schema, API routes, reference data                  │
│                                                               │
│ Deliverables:                                                 │
│ ✓ Supabase project configured                                │
│ ✓ Tables created (users, viewing_events, boards, schools)    │
│ ✓ 70 Ontario boards seeded                                   │
│ ✓ Major schools seeded per board                             │
│ ✓ POST /api/submit-registration implemented                  │
│ ✓ POST /api/update-viewing-event implemented                 │
│ ✓ POST /api/complete-viewing-event implemented               │
│ ✓ Unit tests passing                                         │
└──────────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│ PHASE 2: FORM COMPONENT (2 weeks)                            │
│ Combined registration form modal with validation             │
│                                                               │
│ Deliverables:                                                 │
│ ✓ CombinedRegistrationForm component (React Hook Form)       │
│ ✓ All 6 fields with real-time validation (Zod)               │
│ ✓ Board/school dependent dropdown logic                      │
│ ✓ Modal design (mobile-responsive, WCAG 2.1 AA)              │
│ ✓ Cookie reading for pre-fill                                │
│ ✓ Loading states, error handling                             │
│ ✓ Component tests passing                                    │
└──────────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│ PHASE 3: BUTTON & VIDEO (1 week)                             │
│ "Watch with Your Class" button, video player integration     │
│                                                               │
│ Deliverables:                                                 │
│ ✓ "Watch with Your Class" button on session detail pages     │
│ ✓ Modal open/close logic (button, ESC, outside click)        │
│ ✓ Video player component (Vimeo SDK)                         │
│ ✓ Video start after successful form submission               │
│ ✓ Video progress tracking (every 5s → API)                   │
│ ✓ Completion detection (≥80% → API)                          │
│ ✓ Integration tests passing                                  │
└──────────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│ PHASE 4: COOKIE MANAGEMENT (1 week)                          │
│ Cookie set/read for returning user pre-fill                  │
│                                                               │
│ Deliverables:                                                 │
│ ✓ Cookie creation on form submission (js-cookie)             │
│ ✓ Cookie reading on modal open                               │
│ ✓ Cookie update on repeat submissions                        │
│ ✓ 7-day expiration logic                                     │
│ ✓ "Welcome back" message for returning users                 │
│ ✓ Cross-browser testing (Chrome, Firefox, Safari)            │
│ ✓ Cookie security (SameSite, Secure flags)                   │
└──────────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│ PHASE 5: TESTING & REFINEMENT (1 week)                       │
│ E2E testing, performance optimization, bug fixes             │
│                                                               │
│ Deliverables:                                                 │
│ ✓ End-to-end tests (Playwright: full user journeys)          │
│ ✓ Load testing (simulate 500 concurrent users)               │
│ ✓ Performance optimization (reduce bundle size)              │
│ ✓ Cross-browser testing (Chrome, Firefox, Safari, Edge)      │
│ ✓ Mobile device testing (iOS Safari, Android Chrome)         │
│ ✓ Accessibility audit (WCAG 2.1 AA compliance)               │
│ ✓ Bug fixes from testing                                     │
│ ✓ User acceptance testing (5-10 educators)                   │
└──────────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│ PHASE 6: DEPLOYMENT & MONITORING (1 week)                    │
│ Production deployment with monitoring                         │
│                                                               │
│ Deliverables:                                                 │
│ ✓ Deploy to Vercel production                                │
│ ✓ Configure production environment variables                 │
│ ✓ Set up error monitoring (Sentry)                           │
│ ✓ Set up analytics tracking (GA4 events)                     │
│ ✓ Create monitoring dashboard                                │
│ ✓ Prepare rollback plan                                      │
│ ✓ Smoke testing on production (real educators)               │
│ ✓ Document known issues and workarounds                      │
└──────────────────────────────────────────────────────────────┘
```

### Resource Requirements

**Development:**
- **Option A:** 1 full-stack developer × 8 weeks = 8 developer-weeks
- **Option B:** 2 developers × 4-5 weeks = 8-10 developer-weeks (faster, slight inefficiency)

**Infrastructure:**
- **Supabase:** Free tier during development, likely $25/month during event (if >500 active users)
- **Vercel:** Free tier (should cover event traffic)
- **Vimeo Pro:** Already have account (video URLs ready)

**Testing:**
- **User Acceptance Testing:** 5-10 Ontario educators (recruit through existing board contacts)
- **Load Testing:** Simulate 500 concurrent users (Supabase free tier may throttle, test early)

---

## 7. RISKS & MITIGATION

### Critical Risks

#### RISK 1: Low Form Completion Rate (<85%)
**Impact:** Can't measure student reach, defeats purpose of platform

**Warning Signs:**
- Test users comment "form is too long"
- Abandonment rate >10% during UAT
- Time-on-form >40 seconds

**Mitigation Options:**
1. **A/B Test:** 6-field form vs. 4-field form (remove board/school initially, collect later)
2. **Progressive Disclosure:** Show profile section first, then context section (feels shorter)
3. **Add Context:** "Why we ask" tooltips for each field (builds trust)
4. **Simplify School Selection:** Autocomplete instead of dependent dropdowns

**Decision Point:** If UAT shows <90% completion, implement mitigation before launch

#### RISK 2: Cookie Blocking (Privacy Settings)
**Impact:** Returning users lose pre-fill benefit, friction increases

**Likelihood:** Medium (10-20% of users have strict privacy settings)

**Warning Signs:**
- <60% of returning users show cookie present
- Support inquiries: "Why do I have to fill form again?"

**Mitigation:**
1. **Detect Cookie Support:** Show banner if cookies blocked: "Enable cookies for easier repeat access"
2. **Graceful Degradation:** Form still works without cookie (just no pre-fill)
3. **Consider localStorage Fallback:** Same-domain storage as backup (evaluate privacy implications)

**Decision Point:** Monitor cookie success rate in first 48 hours, adjust messaging if needed

#### RISK 3: API Performance During Peak Traffic
**Impact:** Form submissions fail, educators frustrated, data loss

**Likelihood:** Low (if load tested) / High (if not tested)

**Warning Signs:**
- API response time >1 second
- 500 errors in logs during testing
- Concurrent submissions >100/second

**Mitigation:**
1. **Load Testing:** Simulate 500 concurrent users BEFORE launch (Week 7)
2. **Supabase Connection Pooling:** Increase pool size (default: 15 → 50)
3. **Rate Limiting:** Prevent abuse (max 5 submissions per IP per minute)
4. **Queue System:** Async processing for non-critical operations
5. **Monitoring + Alerts:** Sentry alerts on API errors, PagerDuty if needed

**Decision Point:** Load test results dictate infrastructure scaling needs

### Medium Risks

#### RISK 4: School/Board Dropdown Data Quality
**Impact:** Educators can't find their school, select "Other," data quality degrades

**Mitigation:**
- Comprehensive seed data (all 70 Ontario boards + major schools)
- "Can't find your school?" → Manual text input fallback
- Admin dashboard to add missing schools quickly (post-launch)
- Educator feedback form to suggest additions

#### RISK 5: Vimeo Service Outage
**Impact:** Videos won't play, event fails

**Likelihood:** Very Low (Vimeo uptime: 99.9%)

**Mitigation:**
- **No realistic backup:** Vimeo is critical dependency
- **Communication Plan:** If outage occurs, immediate email to educators with status update
- **Fallback Content:** PDF transcripts + slides available for download (if Vimeo down)

---

## 8. GO/NO-GO DECISION CRITERIA

### Pre-Launch Checklist (Must Complete Before Dec 1)

**Functional Requirements:**
- [ ] All 6 form fields functional and validated
- [ ] API routes handling 100+ concurrent requests without errors
- [ ] Cookie pre-fill working in Chrome, Firefox, Safari
- [ ] Video tracking accurate (5-second intervals, 80% completion detection)
- [ ] Mobile-responsive design (tested on iOS/Android)
- [ ] WCAG 2.1 AA accessibility compliance (screen reader, keyboard nav)

**Data Requirements:**
- [ ] Boards/schools reference data complete (all 70 Ontario boards)
- [ ] Session data with Vimeo video URLs (all 27 sessions)
- [ ] Database migrations run successfully (production Supabase)

**Testing Requirements:**
- [ ] User acceptance testing with 5+ Ontario educators (≥90% completion rate)
- [ ] Load testing (500 concurrent users, <1s API response)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS Safari, Android Chrome)
- [ ] End-to-end tests passing (Playwright full user journeys)

**Operations Requirements:**
- [ ] Error monitoring configured (Sentry alerts)
- [ ] Analytics tracking configured (GA4 events: form_open, form_submit, video_start, video_complete)
- [ ] Monitoring dashboard created (form completion rate, API errors)
- [ ] Rollback plan documented and tested
- [ ] On-call rotation established (first 48 hours of event)

### Launch Day Success Criteria (First 24 Hours)

**Must Achieve:**
- Zero critical bugs (blocking form submission or video playback)
- Form completion rate ≥85% (target: 95%)
- API error rate <5% (target: <1%)
- Zero service outages or downtime

**Should Achieve:**
- Browse-to-watch conversion ≥50% (target: 60%)
- Average form completion time 15-30 seconds (target: 15-25s)
- Cookie pre-fill success rate ≥70% (target: 80%)

**If Not Achieved:**
- **<70% form completion:** Emergency mitigation (simplify form, add context)
- **>10% API errors:** Roll back to previous deployment
- **>60s form completion time:** UX investigation (which fields cause friction?)

---

## 9. POST-LAUNCH SUPPORT PLAN

### Week 1 (Dec 1-5): Event Week - HIGH ALERT

**Monitoring Schedule:**
- **Monday (Dec 1):** 24/7 on-call rotation (2-hour shifts)
- **Tuesday-Thursday:** Business hours monitoring (8am-6pm EST)
- **Friday (Dec 5):** Full day monitoring (wrap-up support)

**Daily Check-ins:**
- 9am EST: Review overnight metrics (form completion, API errors)
- 12pm EST: Mid-day metrics check (traffic spike handling)
- 5pm EST: End-of-day summary (cumulative reach, issues resolved)

**Metrics Dashboard (Real-Time):**
- Form completion rate (hour-by-hour)
- API response times (p50, p95, p99)
- Error rate by API route
- Cookie pre-fill success rate
- Student reach by board (cumulative)

**Escalation Plan:**
- **Minor issues** (cosmetic bugs, <5% impact): Log for post-event fix
- **Moderate issues** (affecting 5-15% of users): Fix within 2 hours
- **Critical issues** (blocking >15% of users): Immediate fix or rollback

### Week 2 (Dec 8-12): Post-Event Analysis

**Deliverables:**
1. **Event Summary Report:**
   - Total student reach achieved
   - Form completion rate (actual vs. target)
   - Browse-to-watch conversion (actual vs. target)
   - Returning user pre-fill success rate
   - Top-performing sessions by student reach
   - Top-participating boards

2. **Technical Performance Report:**
   - API response times (avg, p95, p99)
   - Error rate by route
   - Peak concurrent users handled
   - Database performance metrics
   - Uptime percentage

3. **User Feedback Analysis:**
   - Support ticket themes (if any)
   - Educator testimonials
   - Identified pain points
   - Feature requests for next year

4. **Recommendations for 2026:**
   - What worked well (double down)
   - What needs improvement (iterate)
   - New feature ideas (based on usage data)

---

## 10. NEXT STEPS & RECOMMENDATIONS

### Immediate Actions (This Week)

**For Product Management:**
1. **Approve/Adjust Scope:** Review 6-field form vs. 4-field form (progressive collection?)
2. **Secure Resources:** Assign 1-2 developers for 8-week project (or expedite with 2 devs)
3. **Stakeholder Alignment:** Brief school board contacts on registration approach
4. **UAT Recruitment:** Identify 5-10 Ontario educators for Week 7 testing

**For Development:**
1. **Kick-off Meeting:** Review PRD, confirm technical approach
2. **Environment Setup:** Create Supabase project, configure Vercel deployment
3. **Sprint Planning:** Break roadmap into 2-week sprints (4 sprints total)

**For Design:**
1. **Form Modal Mockups:** Create high-fidelity designs for 6-field form modal
2. **Button Placement:** Confirm "Watch with Your Class" button position on session detail page
3. **Loading States:** Design spinner, success transitions, error states

### Week 1 Deliverables

**Product Management:**
- [ ] Scope decision (6-field vs. 4-field form)
- [ ] Developer assignment confirmed
- [ ] UAT educator list (5-10 contacts)

**Development:**
- [ ] Supabase project created (dev + prod environments)
- [ ] Database schema finalized (users, viewing_events, boards, schools)
- [ ] Sprint 1 planned (Weeks 1-2: Foundation)

**Design:**
- [ ] Form modal mockups (mobile + desktop)
- [ ] Button variants (default, hover, focus, loading)
- [ ] Error state designs (validation errors, API errors)

### Decision Points

**Week 2 (End of Foundation Phase):**
- **Decision:** Confirm boards/schools data is complete and accurate
- **Options:** Seed all 70 boards + major schools OR start with top 20 boards + add more later
- **Recommendation:** Seed all 70 boards early (one-time effort, prevents data gaps)

**Week 4 (End of Form Component Phase):**
- **Decision:** Form complexity (6 fields vs. simplified 4 fields)
- **Options:** Keep 6-field form OR simplify to 4 fields (name, email, class size, grade level)
- **Recommendation:** Test 6-field form in UAT first, simplify only if completion <90%

**Week 6 (Before Testing Phase):**
- **Decision:** Load test results dictate infrastructure scaling
- **Options:** Upgrade Supabase tier OR optimize queries OR implement caching
- **Recommendation:** Decide based on load test results (if <200ms API response, no upgrade needed)

---

## 11. BUDGET & RESOURCES

### Development Costs

**Labor (Internal):**
- 1 full-stack developer × 8 weeks = **8 developer-weeks**
- OR 2 developers × 4-5 weeks = **8-10 developer-weeks**
- Estimated cost: *[Internal rate × developer-weeks]*

**Testing:**
- User acceptance testing: **5-10 hours** (recruiting + sessions)
- Load testing: **4 hours** (setup + run + analyze)
- QA testing: **1 week** (included in Phase 5)

### Infrastructure Costs

| Service | Development | Event Week (Dec 1-5) | Annual (if ongoing) |
|---------|-------------|----------------------|---------------------|
| **Supabase** | Free tier | $0-25/month* | $25-50/month |
| **Vercel** | Free tier | Free tier | Free tier |
| **Vimeo Pro** | Existing account | Existing account | $75/month |
| **Sentry** (optional) | Free tier | Free tier | Free tier |
| **Domain** | Existing | Existing | $15/year |

*Supabase may charge if >500 active database connections during peak. Monitor in Week 7 load testing.

**Total Infrastructure:** $0-25 during event (likely $0 with free tiers)

### Ongoing Costs (Post-Event)

If platform used year-round (not just December):
- Supabase: $25-50/month (depending on usage)
- Vimeo: $75/month (existing)
- **Total: $100-125/month**

If platform archived after event:
- Keep database active for reporting: $0 (Supabase free tier, read-only)
- **Total: $0/month**

---

## 12. FAQ FOR PRODUCT TEAM

### Q: Why 6 fields instead of just email?
**A:** Email alone doesn't tell us:
- HOW MANY students watched (class size)
- WHICH boards/schools are engaging (organizational hierarchy)
- WHO is watching (role: teacher vs. counselor)

6 fields give us actionable insights for reporting and future planning. Student reach (North Star Metric) requires class size field.

### Q: Why not require registration upfront like other platforms?
**A:** Traditional upfront registration causes 40-60% abandonment BEFORE users see value. Browse-first approach shows value first, collects data at commitment point (when they're ready to watch), increasing conversion from 20-30% → 60%+.

### Q: What if educators won't fill out a 6-field form?
**A:** Form appears at maximum commitment point (clicked "Watch with Your Class"), so educators are already invested. 20 seconds is reasonable at that moment. If UAT shows <90% completion, we have mitigation options (simplify to 4 fields, progressive disclosure).

### Q: How do we know if this will work?
**A:** Success validated by:
1. **Form completion rate ≥95%** (educators who see form, complete it)
2. **Browse-to-watch conversion ≥60%** (visitors who browse, watch videos)
3. **Returning user rate ≥50%** (educators watch 2+ sessions using pre-fill)

Track these metrics in Week 1, adjust if needed.

### Q: What happens if Vimeo goes down during the event?
**A:** No realistic backup (Vimeo is critical dependency). 99.9% uptime makes this unlikely. If it happens: immediate email to educators with status update, offer PDF transcripts/slides as fallback content.

### Q: Can we launch with just 4 fields (skip board/school)?
**A:** Yes, but loses board-level reporting (key value for sponsors/boards). Recommendation: Test 6-field form first, simplify only if UAT shows <90% completion.

### Q: How do we measure ROI after the event?
**A:** Compare student reach achieved vs. target (40,000), calculate cost per student reached, survey educator satisfaction, measure sponsor retention for 2026.

---

## 13. CONCLUSION & RECOMMENDATION

### Summary

The registration system is the **critical path feature** for Career Launch Platform launch. Without it, we can't:
- Measure student reach (North Star Metric)
- Justify sponsor investment
- Demonstrate ROI to school boards
- Collect data for future planning

**Current Status:** Platform has public browsing, but no registration or video tracking.

**Timeline:** 8 weeks with 1 developer (or 4-5 weeks with 2 developers) to implement 6-field combined form, API routes, video tracking, and cookie-based pre-fill.

**Investment:** 8-10 developer-weeks + $0-25/month infrastructure.

**Expected Outcome:**
- 60% browse-to-watch conversion (2x industry standard)
- 95% form completion rate
- 50% repeat viewing rate (educators watch 3+ sessions)
- 40,000+ total student reach by Dec 5, 2025

### Recommendation

**PROCEED WITH IMPLEMENTATION** with the following approach:

1. **Scope:** Start with 6-field combined form (best data quality)
   - If UAT shows <90% completion, simplify to 4 fields

2. **Resources:** Assign 2 developers for 4-5 weeks (faster to market)
   - Alternative: 1 developer for 8 weeks (more cost-effective)

3. **Timeline:** Start immediately to hit 8-week deadline before event
   - Target completion: October 28, 2025 (4 weeks before Dec 1 event)

4. **Testing:** Mandatory UAT with 5-10 Ontario educators (Week 7)
   - Go/No-Go decision based on ≥90% form completion rate

5. **Monitoring:** 24/7 on-call rotation during event week (Dec 1-5)
   - Real-time dashboard for form completion, API errors, student reach

### Next Steps

**By End of Week:**
- [ ] PM reviews PRD and this brief
- [ ] PM approves/adjusts scope (6-field vs. 4-field form)
- [ ] PM assigns developer resources (1 or 2 devs)
- [ ] Development kickoff meeting scheduled

**By End of Week 2 (Foundation Complete):**
- [ ] Database schema created and seeded
- [ ] API routes implemented and tested
- [ ] Sprint 2 planned (Form Component)

**Questions or Concerns?**
Contact: [Your Development Team Lead]
Email: [dev-team@myblueprint.ca]
Slack: #career-launch-dev

---

**END OF BRIEF**
