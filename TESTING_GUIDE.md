# Testing Guide: Bottom Drawer Registration Modal

## Quick Start

```bash
# 1. Start the development server
npm run dev

# 2. Open browser
# Go to: http://localhost:3010
```

## Test Scenario 1: First-Time User Experience

### Steps:
1. **Clear cookies** (to simulate first visit):
   - Open browser DevTools (F12)
   - Go to Application/Storage tab
   - Find and delete `clp_registration` cookie
   - Or run in console:
     ```javascript
     document.cookie = 'clp_registration=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
     ```

2. **Navigate to a session**:
   - From homepage, click "Sessions"
   - Click any session card (e.g., "Building Careers in Construction")
   - Or go directly to: `http://localhost:3010/sessions/any-session-slug`

3. **Open the modal**:
   - Click the blue "Watch with Your Class" button
   - Modal should slide up from bottom (400ms smooth animation)
   - Overlay should darken the background

4. **Observe the form**:
   - Should see title: "Who's Watching With You?"
   - Blue info box showing session title
   - NO green "Welcome back!" banner (first visit)
   - Two sections: "YOUR INFORMATION" and "CLASS CONTEXT"
   - Class Size should be pre-selected: "25 to 35 students"
   - Grade Level should be pre-selected: "Grade 12"

5. **Fill out the form**:
   - First Name: `Jane`
   - Email: `jane.smith@torontodsb.ca`
   - School Board: Select "Toronto District School Board"
   - School: Notice dropdown enables, select "Central Technical School"
   - Class Size: Already selected (can change)
   - Grade Level: Already selected (can change)

6. **Test validation**:
   - Leave First Name empty, tab away → should show error
   - Enter invalid email → should show error
   - Submit button should be disabled until all valid

7. **Submit the form**:
   - Click "Start Video" button
   - Check browser console for logged data
   - Success alert should appear
   - Modal should close

8. **Verify cookie was set**:
   - Open DevTools → Application → Cookies
   - Find `clp_registration` cookie
   - Click to view JSON content (all form data)

### Expected Results:
- ✅ Smooth animations
- ✅ Form validation works
- ✅ School dropdown updates when board changes
- ✅ Submit button disabled until valid
- ✅ Console logs form data
- ✅ Success alert appears
- ✅ Cookie created with 7-day expiration

---

## Test Scenario 2: Returning User Experience

### Steps:
1. **After completing Scenario 1** (cookie now exists)

2. **Navigate to ANY session page**:
   - Can be same or different session
   - Click "Watch with Your Class" button

3. **Observe the magic moment**:
   - ✨ Green "Welcome back!" banner appears at top
   - All 6 fields are pre-filled from previous visit
   - Form is complete and ready to submit

4. **Review pre-filled data**:
   - First Name: Filled
   - Email: Filled
   - School Board: Selected
   - School: Selected (based on board)
   - Class Size: Selected
   - Grade Level: Selected

5. **Update if needed** (optional):
   - Change class size to "Large group (35+ students)"
   - Or change grade level

6. **Quick submit**:
   - Click "Start Video" immediately (~1 second!)
   - Success alert appears
   - Cookie updates with new values

### Expected Results:
- ✅ Green banner shows
- ✅ All fields pre-filled
- ✅ Can submit in ~1 second
- ✅ Much faster than first time (~20 seconds)
- ✅ Cookie updates with any changes

---

## Test Scenario 3: Interaction & Accessibility

### Keyboard Navigation:
1. Open modal
2. Press `Tab` key repeatedly:
   - Should cycle through all 6 fields
   - Focus indicator visible on each field
   - Can't tab outside modal (focus trap)

3. Press `ESC` key:
   - Modal should close immediately
   - Video should NOT start

4. Open modal again
5. Press `Enter` in last field:
   - Should submit form (if valid)

### Mouse Interactions:
1. Open modal
2. Click on dark overlay (outside modal):
   - Modal should close
   - Video should NOT start

3. Open modal
4. Click "Cancel" button:
   - Modal should close
   - Video should NOT start

### Expected Results:
- ✅ Full keyboard support
- ✅ ESC key closes modal
- ✅ Overlay click closes modal
- ✅ Cancel button works
- ✅ Focus management working

---

## Test Scenario 4: Form Validation

### Email Validation:
1. Open modal (clear cookies first)
2. Enter various emails:
   - `test` → Invalid (shows error)
   - `test@` → Invalid
   - `test@example` → Invalid
   - `test@example.com` → Valid ✓

### First Name Validation:
1. Leave empty → "First name is required"
2. Enter `J` → "First name must be at least 2 characters"
3. Enter `Jane` → Valid ✓

### Dependent Field (School):
1. Don't select board yet
2. School dropdown should be:
   - Disabled (grayed out)
   - Shows "Select a board first"

3. Select "Toronto District School Board"
4. School dropdown should:
   - Enable immediately
   - Show "Select a school..."
   - List 5 TDSB schools

5. Change board to "Peel District School Board"
6. School field should:
   - Reset to empty
   - Show different schools (3 PDSB schools)

### Expected Results:
- ✅ Email validation working
- ✅ Name validation working
- ✅ School dependent on board
- ✅ Errors show/hide in real-time

---

## Test Scenario 5: Responsive Design

### Desktop (>768px):
1. Open modal on large screen
2. Observe layout:
   - Modal max-width: 600px, centered
   - Form fields: 2 columns (side by side)
   - Footer buttons: Side by side (Cancel | Start Video)
   - Height: 70vh

### Mobile (<768px):
1. Resize browser to mobile width (375px)
2. Open modal
3. Observe layout:
   - Modal: Full width
   - Form fields: Stacked (1 column)
   - Footer buttons: Stacked (Cancel on top, Submit below)
   - Height: 85vh (more space on mobile)

### Tablet (768px):
1. Test at breakpoint
2. Should transition smoothly between layouts

### Expected Results:
- ✅ Desktop: 2-column grid
- ✅ Mobile: Stacked layout
- ✅ Responsive breakpoints work
- ✅ Touch targets ≥44px on mobile

---

## Test Scenario 6: Edge Cases

### No JavaScript:
- Modal won't open (graceful degradation)
- Could add `<noscript>` message

### Slow Network:
- Modal should still render instantly (client-side)
- Cookie read/write is instant (local)

### Multiple Sessions:
1. Register for session A
2. Navigate to session B
3. Open modal → Pre-filled ✓
4. Submit → Cookie updates
5. Go to session C → Still pre-filled ✓

### Cookie Expiration:
1. Set cookie
2. Manually edit expiry in DevTools to past date
3. Reload page
4. Open modal → Should show empty form (first-time experience)

### Invalid Cookie Data:
1. Set cookie with malformed JSON
2. Open modal → Should ignore bad cookie, show empty form

### Expected Results:
- ✅ Handles multiple sessions
- ✅ Handles expired cookies
- ✅ Handles invalid cookie data
- ✅ No crashes on edge cases

---

## Test Scenario 7: Console Logging

### What to Look For:
Open browser console (F12) and watch for:

1. **On form submission**:
```javascript
Form submitted: {
  firstName: "Jane",
  email: "jane.smith@torontodsb.ca",
  boardId: "tdsb",
  schoolId: "cts",
  classSize: "25-to-35",
  gradeLevel: "12",
  sessionId: "session-123",
  timestamp: "2025-12-01T10:30:00Z"
}
```

2. **On cookie error** (if corrupt):
```javascript
Error parsing registration cookie: [error details]
```

### Expected Results:
- ✅ Clean console logs
- ✅ No errors or warnings (from modal code)
- ✅ Form data logged on submission

---

## Test Scenario 8: Animation Smoothness

### Visual Checks:
1. Open modal multiple times
2. Observe animation quality:
   - No jank or stuttering
   - Smooth 400ms slide-up
   - Overlay fades in smoothly (300ms)
   - Background slightly scales down (0.98)

3. Close modal:
   - Reverse animation should be equally smooth

### Performance:
- Modal should render in <50ms
- Animation should complete in 400ms
- No layout shift during animation

### Expected Results:
- ✅ Butter-smooth animations
- ✅ No janky movements
- ✅ Professional feel

---

## Browser Compatibility Checklist

Test in multiple browsers:

### Desktop:
- [ ] Chrome 90+ (Mac/Windows)
- [ ] Firefox 88+ (Mac/Windows)
- [ ] Safari 14+ (Mac)
- [ ] Edge 90+ (Windows)

### Mobile:
- [ ] Safari (iOS 14+)
- [ ] Chrome Mobile (Android)

### Expected Results:
- ✅ Works in all modern browsers
- ✅ Consistent behavior across platforms

---

## Automated Testing Commands

### Type Check:
```bash
npm run type-check
# Should pass (ignore pre-existing test errors)
```

### Build:
```bash
npm run build
# Should complete successfully
```

### Lint:
```bash
npm run lint
# Should pass (only pre-existing warnings)
```

---

## Common Issues & Solutions

### Issue: Modal won't open
**Solution**: Check browser console for errors. Ensure dev server is running.

### Issue: Cookie not saving
**Solution**:
- Check browser allows cookies
- Check cookie in DevTools → Application → Cookies
- Look for `clp_registration` under localhost

### Issue: Fields not pre-filling
**Solution**:
- Verify cookie exists and has valid JSON
- Clear cookie and try again
- Check console for parsing errors

### Issue: School dropdown empty
**Solution**:
- Ensure board is selected first
- Check mock data has schools for that board
- See `/lib/mock-data/registration.ts`

### Issue: Animations not smooth
**Solution**:
- Check CPU usage (close other apps)
- Try in different browser
- Check prefers-reduced-motion settings

---

## Success Criteria Checklist

### Functionality:
- [ ] Modal opens on button click
- [ ] Form validates all fields
- [ ] Cookie saves on submission
- [ ] Cookie pre-fills on return
- [ ] Welcome banner shows for returning users
- [ ] School updates based on board
- [ ] Submit disabled until valid
- [ ] Console logs form data

### User Experience:
- [ ] Animations smooth and professional
- [ ] Keyboard navigation works
- [ ] ESC/overlay/cancel all close modal
- [ ] Mobile responsive
- [ ] Touch-friendly on mobile
- [ ] Fast for returning users (~1 second)

### Accessibility:
- [ ] Focus management working
- [ ] Tab key navigation
- [ ] ESC key works
- [ ] ARIA labels present
- [ ] Screen reader friendly

### Polish:
- [ ] Brand colors correct
- [ ] Typography consistent
- [ ] Spacing follows 8px grid
- [ ] Error messages clear
- [ ] Success feedback obvious

---

## Next Steps After Testing

Once all tests pass:

1. **Backend Integration**:
   - Create `/app/api/submit-registration/route.ts`
   - Connect to Supabase
   - Replace console.log with API call

2. **Video Integration**:
   - Replace alert with video player start
   - Implement tracking

3. **Analytics**:
   - Track modal opens
   - Track completion rate
   - Track returning user rate

4. **Production Checklist**:
   - Test with real Supabase data
   - Test on production domain
   - Verify cookie security flags
   - Load test with many users

---

**Testing Date**: _______________
**Tester**: _______________
**Status**: ⬜ Pass / ⬜ Fail
**Notes**: _______________________________________________
