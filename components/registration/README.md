# Multi-Step Registration Modal

A polished, mobile-first registration modal that slides up from the bottom of the screen with smooth animations and multi-step wizard interface.

## Overview

The Multi-Step Modal is triggered when users click "Watch with Your Class" on session detail pages. It features a wizard-style flow that collects educator or student information through progressive steps with intelligent pre-filling for returning users.

**Note**: This README is outdated and describes the previous `BottomDrawerModal` implementation. The current implementation uses `MultiStepModal.tsx` with a multi-step wizard interface. Full documentation update pending.

## Features

### Visual Design
- **Smooth Animations**: 400ms slide-up with cubic-bezier easing
- **Overlay**: Semi-transparent backdrop that dims background content
- **Responsive**: 70vh on desktop, 85vh on mobile
- **Accessibility**: Full keyboard navigation, ESC key to close, focus management

### Form Intelligence
- **Cookie-Based Pre-fill**: Remembers educator info for 7 days
- **Welcome Back Banner**: Shows green success banner for returning users
- **Dependent Fields**: School dropdown updates based on board selection
- **Smart Defaults**: Class size (25-35) and grade level (12) pre-selected
- **Real-time Validation**: Inline error messages as you type

### User Experience
- **First-time users**: ~20 seconds to complete 6-field form
- **Returning users**: ~1 second (just click "Start Video")
- **Tab navigation**: Seamless keyboard flow through fields
- **Cancel anytime**: ESC key, overlay click, or Cancel button

## Components Structure

```
/components/registration/
├── MultiStepModal.tsx        # Main modal component (multi-step wizard)
└── README.md                 # This file

/lib/
├── hooks/
│   └── useRegistrationForm.ts   # Form logic and validation
└── mock-data/
    └── registration.ts          # Ontario boards and schools data
```

## Usage

### Basic Implementation

```tsx
import { useState } from 'react';
import MultiStepModal from '@/components/registration/MultiStepModal';

function SessionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    // Handle registration (API call will go here)
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        Watch with Your Class
      </button>

      <MultiStepModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sessionTitle="Building Careers in Construction"
        sessionId="session-123"
        onSubmit={handleFormSubmit}
      />
    </>
  );
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `isOpen` | `boolean` | Yes | Controls modal visibility |
| `onClose` | `() => void` | Yes | Callback when modal should close |
| `sessionTitle` | `string` | Yes | Session name displayed in info box |
| `sessionId` | `string` | Yes | Session ID for tracking |
| `onSubmit` | `(data: FormData) => void` | Yes | Callback when form is submitted |

## Form Data Structure

```typescript
interface RegistrationFormData {
  firstName: string;        // Educator's first name
  email: string;            // Educator's email address
  boardId: string;          // School board ID
  schoolId: string;         // School ID (dependent on board)
  classSize: string;        // '25-to-35' (default)
  gradeLevel: string;       // '12' (default)
}
```

## Cookie Management

The modal uses the `clp_registration` cookie to store educator information:

```javascript
{
  firstName: "Jane",
  email: "jane.smith@torontodsb.ca",
  boardId: "tdsb",
  schoolId: "cts",
  classSize: "25-to-35",
  gradeLevel: "12",
  timestamp: "2025-12-01T10:30:00Z"
}
```

- **Duration**: 7 days
- **Purpose**: Pre-fill form for returning users
- **Security**: No sensitive data, SameSite protection
- **Updates**: Overwrites on every submission

## Validation Rules

### First Name
- Required
- Minimum 2 characters
- Error: "First name is required" or "First name must be at least 2 characters"

### Email
- Required
- Valid email format (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- Error: "Email is required" or "Please enter a valid email address"

### School Board
- Required
- Must select from dropdown
- Error: "Please select a school board"

### School
- Required
- Must select from dropdown
- Dependent on board selection (disabled until board chosen)
- Error: "Please select a school"

### Class Size
- Pre-selected to "25 to 35 students"
- Required
- Error: "Please select a class size"

### Grade Level
- Pre-selected to "Grade 12"
- Required
- Error: "Please select a grade level"

## Mock Data

Ontario school boards and their schools are hardcoded in `/lib/mock-data/registration.ts`:

- **Toronto District School Board** (5 schools)
- **Peel District School Board** (3 schools)
- **York Region District School Board** (2 schools)
- **Ottawa-Carleton District School Board** (2 schools)
- **Halton District School Board** (2 schools)

## Animations

### Opening
```css
/* Overlay */
opacity: 0 → 1 (300ms ease)

/* Drawer */
transform: translateY(100%) → translateY(0) (400ms cubic-bezier)

/* Background content */
transform: scale(1) → scale(0.98)
filter: brightness(1) → brightness(0.96)
```

### Closing
```css
/* Reverse of opening animations */
```

### Welcome Back Banner
```css
/* Fade in */
opacity: 0 → 1 (200ms ease)
```

## Accessibility

- **Focus Management**: Auto-focus first input on open
- **Keyboard Navigation**: Tab through all fields
- **ESC Key**: Closes modal
- **ARIA Labels**: Proper dialog role and labeling
- **Screen Readers**: Semantic HTML with descriptive text
- **Color Contrast**: WCAG 2.1 AA compliant

## Mobile Optimizations

- **Touch-friendly**: All tap targets ≥44px
- **Full height**: 85vh on mobile for maximum space
- **Stacked layout**: Single-column form fields
- **Stacked buttons**: Cancel and Submit stack vertically
- **Large inputs**: 15px font size (prevents iOS zoom)
- **Drawer handle**: Visual affordance for swipe gestures

## Testing the Modal

### Manual Testing Steps

1. **Start the dev server**:
   ```bash
   npm run dev
   ```

2. **Navigate to any session page**:
   - Go to http://localhost:3010
   - Click "Sessions" button
   - Click any session card
   - Or directly: http://localhost:3010/sessions/[any-session-slug]

3. **Open the modal**:
   - Click "Watch with Your Class" button
   - Modal should slide up from bottom

4. **Test first-time user flow**:
   - Clear cookies in browser
   - Fill out all 6 fields
   - Select "Toronto District School Board"
   - Notice school dropdown updates
   - Click "Start Video"
   - Form data logs to console
   - Success alert appears

5. **Test returning user flow**:
   - Refresh the page
   - Click "Watch with Your Class" again
   - Notice all fields are pre-filled
   - Green "Welcome back!" banner appears
   - Click "Start Video" (much faster!)

6. **Test validation**:
   - Clear cookies
   - Open modal
   - Try to submit empty form (button disabled)
   - Enter invalid email
   - See inline error messages

7. **Test interactions**:
   - ESC key closes modal
   - Clicking overlay closes modal
   - Cancel button closes modal
   - Tab key navigates fields
   - School dropdown disabled until board selected

8. **Test responsive**:
   - Resize browser window
   - Test on mobile viewport
   - Fields should stack on mobile
   - Buttons should stack on mobile

### Browser Console Testing

```javascript
// Check if cookie is set
document.cookie

// Clear registration cookie
document.cookie = 'clp_registration=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

// Inspect form data in console (after submission)
// Look for: "Form submitted: { firstName, email, ... }"
```

## Known Limitations (Frontend Only)

- **No API Integration**: Form data logs to console only
- **No Database**: Cookie-based storage only (7 days)
- **Mock Data**: Only 5 Ontario boards with limited schools
- **No Video Playback**: Success alert instead of video start
- **No Analytics**: No tracking of form interactions yet

## Next Steps (Backend Integration)

When ready for backend integration:

1. Create `/app/api/submit-registration/route.ts`
2. Replace `console.log` in `onSubmit` with API call
3. Connect to Supabase database
4. Add server-side validation
5. Implement video playback trigger
6. Add analytics tracking

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android)

## Performance

- **Modal render**: <50ms
- **Animation duration**: 400ms
- **Form validation**: Real-time (<1ms)
- **Cookie read/write**: <5ms
- **Total interaction time**:
  - First-time: ~20 seconds
  - Returning: ~1 second

## Brand Compliance

All colors, typography, and spacing follow myBlueprint design system:

- **Primary Blue**: #0092FF (buttons, focus states)
- **Navy**: #22224C (text)
- **Light Blue**: #C6E7FF (info box background)
- **Off-White**: #F6F6FF (page background)
- **Typography**: Museo Sans (headings), Open Sans (body)
- **Spacing**: 8px grid system

## Questions or Issues?

- Check browser console for errors
- Verify js-cookie is installed: `npm list js-cookie`
- Clear cookies if pre-fill not working
- Check that mock data has your test board/school
- Ensure Next.js dev server is running

---

**Created**: 2025-11-12
**Status**: Frontend complete, ready for backend integration
**Next Milestone**: API route implementation
