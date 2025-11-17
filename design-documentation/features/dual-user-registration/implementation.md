---
title: Implementation Guide - Dual User Registration
description: Developer handoff documentation with technical specifications, code patterns, and integration notes
feature: dual-user-registration
last-updated: 2025-11-17
version: 1.0.0
related-files:
  - ./README.md
  - ./user-journey.md
  - ./screen-states.md
  - ./interactions.md
dependencies:
  - /components/registration/BottomDrawerModal.tsx
  - /lib/hooks/useRegistrationForm.ts
  - /lib/mock-data/registration.ts
status: draft
---

# Implementation Guide

## Overview

This document provides technical implementation guidance for developers, including component architecture, state management patterns, API contracts, and testing criteria.

## Table of Contents

1. [Architecture Decisions](#architecture-decisions)
2. [Component Structure](#component-structure)
3. [State Management](#state-management)
4. [Type Definitions](#type-definitions)
5. [Cookie Strategy](#cookie-strategy)
6. [API Contracts](#api-contracts)
7. [Testing Criteria](#testing-criteria)
8. [Migration Plan](#migration-plan)

---

## Architecture Decisions

### Decision 1: Multi-Step Wizard vs. Single Dynamic Form

**Chosen**: Multi-step wizard pattern with state machine

**Rationale**:
- Clear mental model for users (step 1, step 2)
- Easier to animate between distinct states
- Cleaner separation of concerns in code
- Better matches user expectation after type selection

**Alternative Rejected**: Inline form that expands/collapses fields
- More complex state management
- Harder to animate cleanly
- Users might not realize some fields disappeared

### Decision 2: Single Component vs. Split Components

**Chosen**: Single parent component with conditional rendering

**Rationale**:
- Maintains modal context (focus trap, ESC handling)
- Shared state between steps (session title, etc.)
- Easier to manage transitions
- Preserves existing modal behavior

**Structure**:
```
BottomDrawerModal (parent)
├── ModalHeader (shared)
├── TypeSelectionView OR EducatorFormView OR StudentFormView
└── ModalFooter (shared with contextual buttons)
```

### Decision 3: Form State Hook Refactoring

**Chosen**: Extend existing `useRegistrationForm` hook

**Rationale**:
- Reuse validation logic
- Consistent patterns across codebase
- Cookie logic already implemented
- Add user type and conditional validation

---

## Component Structure

### Recommended File Organization

```
/components/registration/
├── BottomDrawerModal.tsx          # Main container (refactored)
├── UserTypeSelection.tsx          # Type selection cards
├── EducatorForm.tsx               # 6-field educator form
├── StudentForm.tsx                # 3-field student form
├── ModalHeader.tsx                # Shared header with session info
├── ModalFooter.tsx                # Shared footer with buttons
└── icons/                         # SVG icons for user types
    ├── EducatorIcon.tsx
    ├── StudentIcon.tsx
    └── LockIcon.tsx
```

### BottomDrawerModal.tsx (Parent Component)

```tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import UserTypeSelection from './UserTypeSelection';
import EducatorForm from './EducatorForm';
import StudentForm from './StudentForm';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import { useRegistrationForm } from '@/lib/hooks/useRegistrationForm';

type UserType = 'educator' | 'student' | null;
type ModalStep = 'type-selection' | 'educator-form' | 'student-form';

interface BottomDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionTitle: string;
  sessionId: string;
  onSubmit: (data: any) => void;
}

export default function BottomDrawerModal({
  isOpen,
  onClose,
  sessionTitle,
  sessionId,
  onSubmit,
}: BottomDrawerModalProps) {
  const [currentStep, setCurrentStep] = useState<ModalStep>('type-selection');
  const [selectedUserType, setSelectedUserType] = useState<UserType>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const educatorForm = useRegistrationForm('educator');
  const studentForm = useRegistrationForm('student');

  const modalRef = useRef<HTMLDivElement>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      // Delay reset to after close animation
      setTimeout(() => {
        setCurrentStep('type-selection');
        setSelectedUserType(null);
      }, 400);
    }
  }, [isOpen]);

  const handleTypeSelect = (type: UserType) => {
    if (isTransitioning || !type) return;

    setIsTransitioning(true);
    setSelectedUserType(type);

    setTimeout(() => {
      setCurrentStep(type === 'educator' ? 'educator-form' : 'student-form');
      setIsTransitioning(false);
    }, 300); // Match animation duration
  };

  const handleBack = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep('type-selection');
      setSelectedUserType(null);
      setIsTransitioning(false);
    }, 300);
  };

  const handleSubmit = () => {
    if (selectedUserType === 'educator') {
      if (educatorForm.submitForm(sessionId)) {
        onSubmit({ type: 'educator', data: educatorForm.formData });
      }
    } else if (selectedUserType === 'student') {
      if (studentForm.submitForm(sessionId)) {
        onSubmit({ type: 'student', data: studentForm.formData });
      }
    }
  };

  const getModalHeight = () => {
    switch (currentStep) {
      case 'type-selection':
        return 'min(75vh, 600px)';
      case 'educator-form':
        return educatorForm.isReturningUser
          ? 'min(92vh, 950px)'
          : 'min(88vh, 900px)';
      case 'student-form':
        return 'min(70vh, 550px)';
      default:
        return 'min(75vh, 600px)';
    }
  };

  const isFormValid = () => {
    if (currentStep === 'educator-form') {
      return educatorForm.isFormValid();
    }
    if (currentStep === 'student-form') {
      return studentForm.isFormValid();
    }
    return false;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={modalRef}
        className="relative w-full max-w-[600px] lg:max-w-[900px] bg-white animate-slide-up"
        style={{
          height: getModalHeight(),
          maxHeight: '95vh',
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
          boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.12)',
          transition: 'height 400ms cubic-bezier(0.32, 0.72, 0, 1)',
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Drawer Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 rounded-full bg-gray-300" aria-hidden="true" />
        </div>

        {/* Header */}
        <ModalHeader
          step={currentStep}
          sessionTitle={sessionTitle}
          isReturningUser={educatorForm.isReturningUser}
        />

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {currentStep === 'type-selection' && (
            <UserTypeSelection
              onSelect={handleTypeSelect}
              isTransitioning={isTransitioning}
            />
          )}

          {currentStep === 'educator-form' && (
            <EducatorForm
              formData={educatorForm.formData}
              errors={educatorForm.errors}
              updateField={educatorForm.updateField}
              onBack={handleBack}
              isReturningUser={educatorForm.isReturningUser}
            />
          )}

          {currentStep === 'student-form' && (
            <StudentForm
              formData={studentForm.formData}
              errors={studentForm.errors}
              updateField={studentForm.updateField}
              onBack={handleBack}
            />
          )}
        </div>

        {/* Footer */}
        <ModalFooter
          step={currentStep}
          onCancel={onClose}
          onSubmit={handleSubmit}
          isFormValid={isFormValid()}
          isTransitioning={isTransitioning}
        />
      </div>
    </div>
  );
}
```

### UserTypeSelection.tsx

```tsx
import EducatorIcon from './icons/EducatorIcon';
import StudentIcon from './icons/StudentIcon';

interface UserTypeSelectionProps {
  onSelect: (type: 'educator' | 'student') => void;
  isTransitioning: boolean;
}

export default function UserTypeSelection({
  onSelect,
  isTransitioning,
}: UserTypeSelectionProps) {
  return (
    <div className="px-4 md:px-6 py-4 md:py-6">
      <div className="space-y-3 md:space-y-4">
        {/* Educator Card */}
        <button
          onClick={() => onSelect('educator')}
          disabled={isTransitioning}
          className="w-full flex items-center gap-4 p-5 md:p-6 bg-white border-2 border-neutral-1 rounded-lg hover:border-primary-blue hover:shadow-md hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue active:scale-[0.98] active:bg-secondary-blue-pale transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="I'm an Educator. Teacher, counselor, or administrator showing to students."
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-blue-pale flex items-center justify-center">
            <EducatorIcon className="w-6 h-6 text-primary-blue" />
          </div>
          <div className="flex-1 text-left">
            <div className="text-lg md:text-xl font-semibold text-brand-navy">
              I'm an Educator
            </div>
            <div className="text-sm text-neutral-4">
              Teacher, counselor, or administrator showing to students
            </div>
          </div>
          <svg
            className="w-5 h-5 text-neutral-3 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Student Card */}
        <button
          onClick={() => onSelect('student')}
          disabled={isTransitioning}
          className="w-full flex items-center gap-4 p-5 md:p-6 bg-white border-2 border-neutral-1 rounded-lg hover:border-primary-blue hover:shadow-md hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue active:scale-[0.98] active:bg-secondary-blue-pale transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="I'm a Student. Watching independently for career exploration."
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-blue-pale flex items-center justify-center">
            <StudentIcon className="w-6 h-6 text-primary-blue" />
          </div>
          <div className="flex-1 text-left">
            <div className="text-lg md:text-xl font-semibold text-brand-navy">
              I'm a Student
            </div>
            <div className="text-sm text-neutral-4">
              Watching independently for career exploration
            </div>
          </div>
          <svg
            className="w-5 h-5 text-neutral-3 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
```

---

## State Management

### Extended useRegistrationForm Hook

```typescript
'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

type FormMode = 'educator' | 'student';

export interface EducatorFormData {
  firstName: string;
  email: string;
  boardId: string;
  schoolId: string;
  classSize: string;
  gradeLevel: string;
}

export interface StudentFormData {
  boardId: string;
  schoolId: string;
  gradeLevel: string;
}

interface EducatorFormErrors {
  firstName?: string;
  email?: string;
  boardId?: string;
  schoolId?: string;
  classSize?: string;
  gradeLevel?: string;
}

interface StudentFormErrors {
  boardId?: string;
  schoolId?: string;
  gradeLevel?: string;
}

const COOKIE_NAME = 'clp_registration';
const COOKIE_EXPIRY_DAYS = 7;

// Educator Form Hook
export function useEducatorForm() {
  const [formData, setFormData] = useState<EducatorFormData>({
    firstName: '',
    email: '',
    boardId: '',
    schoolId: '',
    classSize: '25-to-35',
    gradeLevel: '12',
  });

  const [errors, setErrors] = useState<EducatorFormErrors>({});
  const [isReturningUser, setIsReturningUser] = useState(false);

  // Load from cookie on mount
  useEffect(() => {
    const savedData = Cookies.get(COOKIE_NAME);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData({
          firstName: parsed.firstName || '',
          email: parsed.email || '',
          boardId: parsed.boardId || '',
          schoolId: parsed.schoolId || '',
          classSize: parsed.classSize || '25-to-35',
          gradeLevel: parsed.gradeLevel || '12',
        });
        setIsReturningUser(true);
      } catch (e) {
        console.error('Error parsing registration cookie:', e);
      }
    }
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const updateField = (name: keyof EducatorFormData, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      if (name === 'boardId' && value !== prev.boardId) {
        newData.schoolId = '';
      }
      return newData;
    });
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const isFormValid = (): boolean => {
    return (
      formData.firstName.trim().length >= 2 &&
      validateEmail(formData.email) &&
      formData.boardId !== '' &&
      formData.schoolId !== '' &&
      formData.classSize !== '' &&
      formData.gradeLevel !== ''
    );
  };

  const submitForm = (sessionId: string): boolean => {
    if (!isFormValid()) return false;

    // Save to cookie (educators only)
    const cookieData = {
      ...formData,
      timestamp: new Date().toISOString(),
    };
    Cookies.set(COOKIE_NAME, JSON.stringify(cookieData), {
      expires: COOKIE_EXPIRY_DAYS,
    });

    console.log('Educator form submitted:', { ...formData, sessionId });
    return true;
  };

  return {
    formData,
    errors,
    isReturningUser,
    updateField,
    submitForm,
    isFormValid,
  };
}

// Student Form Hook
export function useStudentForm() {
  const [formData, setFormData] = useState<StudentFormData>({
    boardId: '',
    schoolId: '',
    gradeLevel: '12',
  });

  const [errors, setErrors] = useState<StudentFormErrors>({});

  // No cookie loading for students (privacy)

  const updateField = (name: keyof StudentFormData, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      if (name === 'boardId' && value !== prev.boardId) {
        newData.schoolId = '';
      }
      return newData;
    });
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const isFormValid = (): boolean => {
    return (
      formData.boardId !== '' &&
      formData.schoolId !== '' &&
      formData.gradeLevel !== ''
    );
  };

  const submitForm = (sessionId: string): boolean => {
    if (!isFormValid()) return false;

    // NO cookie set for students
    console.log('Student form submitted:', { ...formData, sessionId });
    return true;
  };

  return {
    formData,
    errors,
    updateField,
    submitForm,
    isFormValid,
  };
}

// Combined hook that can be used for either mode
export function useRegistrationForm(mode: FormMode = 'educator') {
  if (mode === 'educator') {
    return useEducatorForm();
  } else {
    return {
      ...useStudentForm(),
      isReturningUser: false, // Students never have this
    };
  }
}
```

---

## Type Definitions

### Add to /types/index.ts

```typescript
// User type for registration
export type RegistrationUserType = 'educator' | 'student';

// Form data interfaces
export interface EducatorRegistrationData {
  firstName: string;
  email: string;
  boardId: string;
  schoolId: string;
  classSize: string;
  gradeLevel: string;
}

export interface StudentRegistrationData {
  boardId: string;
  schoolId: string;
  gradeLevel: string;
}

// Combined submission payload
export interface RegistrationSubmission {
  type: RegistrationUserType;
  sessionId: string;
  timestamp: string;
  data: EducatorRegistrationData | StudentRegistrationData;
}

// API response
export interface RegistrationResponse {
  success: boolean;
  viewingEventId?: string;
  userId?: string; // Only for educators
  error?: string;
}
```

---

## Cookie Strategy

### Educator Cookies (Unchanged)

```javascript
// Cookie name: 'clp_registration'
// Duration: 7 days
// Structure:
{
  firstName: "Jane",
  email: "jane.smith@board.ca",
  boardId: "tdsb",
  schoolId: "nss",
  classSize: "25-to-35",
  gradeLevel: "12",
  timestamp: "2025-12-01T10:30:00Z"
}

// Set on every educator submission
Cookies.set('clp_registration', JSON.stringify(data), {
  expires: 7,
  sameSite: 'strict',
  secure: process.env.NODE_ENV === 'production'
});
```

### Student Cookies

**Policy**: NO cookies set for student submissions

**Rationale**:
- Privacy protection for minors
- No PII collected, so no benefit to pre-filling
- Simpler compliance with privacy regulations
- Clean separation between user types

**Implementation**:
```javascript
// In useStudentForm.submitForm()
const submitForm = (sessionId: string): boolean => {
  if (!isFormValid()) return false;

  // Explicitly do NOT set any cookies
  // Just log the anonymous submission

  return true;
};
```

---

## API Contracts

### POST /api/submit-registration (Extended)

**Updated Payload**:

```typescript
// Educator submission
{
  type: 'educator',
  sessionId: 'session-123',
  data: {
    firstName: 'Jane',
    email: 'jane.smith@board.ca',
    boardId: 'tdsb',
    schoolId: 'nss',
    classSize: '25-to-35',
    gradeLevel: '12'
  }
}

// Student submission
{
  type: 'student',
  sessionId: 'session-123',
  data: {
    boardId: 'tdsb',
    schoolId: 'nss',
    gradeLevel: '11'
  }
}
```

**Server Logic**:

```typescript
// API route handler
export async function POST(request: Request) {
  const body = await request.json();
  const { type, sessionId, data } = body;

  if (type === 'educator') {
    // Existing educator logic
    // 1. Validate 6 fields
    // 2. Find or create user by email
    // 3. Insert viewing_event with class_size
    // 4. Return userId and viewingEventId
  } else if (type === 'student') {
    // New student logic
    // 1. Validate 3 fields
    // 2. No user record created (anonymous)
    // 3. Insert anonymous viewing_event
    // 4. Return viewingEventId only
  }
}
```

**Database Schema Update**:

```sql
-- Add user_type column to viewing_events
ALTER TABLE viewing_events
ADD COLUMN user_type VARCHAR(20) DEFAULT 'educator';

-- For student views, user_id can be NULL
ALTER TABLE viewing_events
ALTER COLUMN user_id DROP NOT NULL;

-- Add constraint
ALTER TABLE viewing_events
ADD CONSTRAINT valid_user_type CHECK (user_type IN ('educator', 'student'));
```

**Response**:

```typescript
// Educator response
{
  success: true,
  userId: 'user-456',
  viewingEventId: 'event-789'
}

// Student response
{
  success: true,
  viewingEventId: 'event-790'
  // No userId (anonymous)
}
```

---

## Mobile-Specific Implementation

**CRITICAL: Students are likely to access the platform from mobile devices. The student path must be optimized for mobile-first experience.**

### Responsive Hook

```tsx
// lib/hooks/useIsMobile.ts
import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isMobile, isTablet, isDesktop: !isMobile && !isTablet };
}
```

### Keyboard Avoidance (Critical for Mobile Forms)

```tsx
// lib/hooks/useKeyboardAvoidance.ts
import { useEffect, useRef } from 'react';

export function useKeyboardAvoidance() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.visualViewport) return;

    const handleResize = () => {
      const viewport = window.visualViewport;
      if (!viewport || !scrollContainerRef.current) return;

      // Detect if keyboard is open (viewport height significantly reduced)
      const keyboardOpen = viewport.height < window.innerHeight * 0.75;

      if (keyboardOpen) {
        // Find the focused element
        const focused = document.activeElement as HTMLElement;
        if (focused && focused.tagName === 'SELECT' || focused.tagName === 'INPUT') {
          // Scroll the focused element into view with padding
          setTimeout(() => {
            focused.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }, 100);
        }
      }
    };

    window.visualViewport.addEventListener('resize', handleResize);
    return () => window.visualViewport?.removeEventListener('resize', handleResize);
  }, []);

  return scrollContainerRef;
}
```

### Mobile-Optimized Student Form

```tsx
// components/registration/StudentForm.tsx
'use client';

import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { useKeyboardAvoidance } from '@/lib/hooks/useKeyboardAvoidance';
import { Loader2, CheckCircle2, Lock } from 'lucide-react';

interface StudentFormProps {
  formData: StudentFormData;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
  isLoadingSchools: boolean;
}

export default function StudentForm({
  formData,
  onChange,
  errors,
  isLoadingSchools,
}: StudentFormProps) {
  const { isMobile } = useIsMobile();
  const scrollContainerRef = useKeyboardAvoidance();

  return (
    <div
      ref={scrollContainerRef}
      className="px-4 md:px-6 py-4 md:py-5 overflow-y-auto"
      style={{
        maxHeight: isMobile ? 'calc(75vh - 200px)' : 'calc(70vh - 180px)',
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
      }}
    >
      {/* Privacy Badge - Always Visible */}
      <div className="inline-flex items-center gap-2 bg-green-50 border border-green-300 rounded-full px-3 py-1.5 mb-4">
        <Lock className="w-3.5 h-3.5 text-green-600" />
        <span className="text-xs font-medium text-green-700">
          We don't collect your name or email
        </span>
      </div>

      <div className={`space-y-${isMobile ? '5' : '4'}`}>
        {/* School Board Field */}
        <div>
          <label
            htmlFor="student-board"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            What school board are you in?
            {formData.boardId && !errors.boardId && (
              <CheckCircle2 className="inline w-4 h-4 text-green-600 ml-2" />
            )}
          </label>
          <select
            id="student-board"
            value={formData.boardId}
            onChange={(e) => onChange('boardId', e.target.value)}
            className={`
              w-full rounded-lg border bg-white
              ${isMobile ? 'py-3 px-3.5 text-base' : 'py-2.5 px-3 text-sm'}
              ${errors.boardId ? 'border-red-500' : 'border-gray-300'}
              focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/10
              disabled:bg-gray-100 disabled:cursor-not-allowed
              appearance-none
            `}
            style={{ fontSize: '16px' }} // Prevents iOS zoom
            aria-required="true"
            aria-invalid={!!errors.boardId}
          >
            <option value="">Select your board...</option>
            {/* Board options */}
          </select>
          {errors.boardId && (
            <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {errors.boardId}
            </p>
          )}
        </div>

        {/* School Field */}
        <div>
          <label
            htmlFor="student-school"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            What school do you go to?
            {isLoadingSchools && (
              <Loader2 className="inline w-4 h-4 text-gray-500 ml-2 animate-spin" />
            )}
            {formData.schoolId && !errors.schoolId && !isLoadingSchools && (
              <CheckCircle2 className="inline w-4 h-4 text-green-600 ml-2" />
            )}
          </label>
          <select
            id="student-school"
            value={formData.schoolId}
            onChange={(e) => onChange('schoolId', e.target.value)}
            disabled={!formData.boardId || isLoadingSchools}
            className={`
              w-full rounded-lg border bg-white
              ${isMobile ? 'py-3 px-3.5 text-base' : 'py-2.5 px-3 text-sm'}
              ${errors.schoolId ? 'border-red-500' : 'border-gray-300'}
              focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/10
              disabled:bg-gray-100 disabled:cursor-not-allowed
              appearance-none
            `}
            style={{ fontSize: '16px' }}
            aria-required="true"
            aria-invalid={!!errors.schoolId}
          >
            <option value="">
              {!formData.boardId
                ? 'Select a board first'
                : isLoadingSchools
                ? 'Loading schools...'
                : 'Select your school...'}
            </option>
            {/* School options */}
          </select>
          {errors.schoolId && (
            <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {errors.schoolId}
            </p>
          )}
        </div>

        {/* Grade Level Field */}
        <div>
          <label
            htmlFor="student-grade"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            What grade are you in?
            {formData.gradeLevel && !errors.gradeLevel && (
              <CheckCircle2 className="inline w-4 h-4 text-green-600 ml-2" />
            )}
          </label>
          <select
            id="student-grade"
            value={formData.gradeLevel}
            onChange={(e) => onChange('gradeLevel', e.target.value)}
            className={`
              w-full rounded-lg border bg-white
              ${isMobile ? 'py-3 px-3.5 text-base' : 'py-2.5 px-3 text-sm'}
              ${errors.gradeLevel ? 'border-red-500' : 'border-gray-300'}
              focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/10
              appearance-none
            `}
            style={{ fontSize: '16px' }}
            aria-required="true"
            aria-invalid={!!errors.gradeLevel}
          >
            <option value="7-8">Grades 7/8</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
          {errors.gradeLevel && (
            <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {errors.gradeLevel}
            </p>
          )}
        </div>
      </div>

      {/* Encouraging Message */}
      <div className="mt-5 bg-off-white rounded-lg p-3 flex items-center gap-3">
        <span className="text-lg">🚀</span>
        <p className="text-sm text-gray-600 italic">
          Explore careers that match your interests!
        </p>
      </div>
    </div>
  );
}
```

### Mobile Footer with Stacked Buttons

```tsx
// components/registration/ModalFooter.tsx (mobile-aware)
interface ModalFooterProps {
  onCancel: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  isValid: boolean;
  isMobile: boolean;
  userType: 'educator' | 'student' | null;
}

export default function ModalFooter({
  onCancel,
  onSubmit,
  isSubmitting,
  isValid,
  isMobile,
  userType,
}: ModalFooterProps) {
  return (
    <div
      className={`
        border-t border-gray-200 bg-gray-50
        ${isMobile ? 'p-4 pb-6' : 'p-4'}
        ${isMobile && userType ? 'flex flex-col-reverse gap-3' : 'flex justify-end gap-3'}
      `}
      style={{
        // Safe area for iOS home indicator
        paddingBottom: isMobile ? 'max(16px, env(safe-area-inset-bottom))' : undefined,
      }}
    >
      <button
        type="button"
        onClick={onCancel}
        className={`
          ${isMobile && userType ? 'w-full' : ''}
          px-4 py-2.5 border border-gray-300 rounded-lg
          text-sm font-medium text-gray-700
          hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-blue
          disabled:opacity-50
        `}
        disabled={isSubmitting}
      >
        Cancel
      </button>

      {userType && (
        <button
          type="button"
          onClick={onSubmit}
          disabled={!isValid || isSubmitting}
          className={`
            ${isMobile ? 'w-full' : ''}
            px-6 py-2.5 bg-primary-blue text-white rounded-lg
            text-sm font-semibold
            hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center gap-2
            ${isMobile ? 'min-h-[48px]' : 'min-h-[44px]'}
          `}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Starting...
            </>
          ) : (
            <>
              Start Video
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
```

### Swipe-to-Close Gesture Handler

```tsx
// lib/hooks/useSwipeToClose.ts
import { useRef, useEffect } from 'react';

interface SwipeConfig {
  onClose: () => void;
  threshold?: number; // pixels to drag before closing
  enabled?: boolean;
}

export function useSwipeToClose({ onClose, threshold = 100, enabled = true }: SwipeConfig) {
  const modalRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const currentY = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    if (!enabled || !modalRef.current) return;

    const modal = modalRef.current;

    const handleTouchStart = (e: TouchEvent) => {
      // Only allow swipe from the drawer handle area (top 50px)
      const touch = e.touches[0];
      const rect = modal.getBoundingClientRect();
      if (touch.clientY - rect.top > 50) return;

      startY.current = touch.clientY;
      isDragging.current = true;
      modal.style.transition = 'none';
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;

      currentY.current = e.touches[0].clientY;
      const deltaY = currentY.current - startY.current;

      // Only allow downward drag
      if (deltaY > 0) {
        modal.style.transform = `translateY(${deltaY}px)`;
        // Reduce opacity as user drags down
        const opacity = Math.max(0.3, 1 - deltaY / 300);
        modal.style.opacity = String(opacity);
      }
    };

    const handleTouchEnd = () => {
      if (!isDragging.current) return;

      isDragging.current = false;
      const deltaY = currentY.current - startY.current;

      modal.style.transition = 'transform 300ms ease, opacity 300ms ease';

      if (deltaY > threshold) {
        // Close modal
        modal.style.transform = 'translateY(100%)';
        modal.style.opacity = '0';
        setTimeout(onClose, 300);
      } else {
        // Spring back
        modal.style.transform = 'translateY(0)';
        modal.style.opacity = '1';
      }

      // Reset refs
      startY.current = 0;
      currentY.current = 0;
    };

    modal.addEventListener('touchstart', handleTouchStart, { passive: true });
    modal.addEventListener('touchmove', handleTouchMove, { passive: true });
    modal.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      modal.removeEventListener('touchstart', handleTouchStart);
      modal.removeEventListener('touchmove', handleTouchMove);
      modal.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, onClose, threshold]);

  return modalRef;
}
```

### Network Status Handler

```tsx
// lib/hooks/useNetworkStatus.ts
import { useState, useEffect } from 'react';

interface NetworkStatus {
  isOnline: boolean;
  isSlowConnection: boolean;
}

export function useNetworkStatus(): NetworkStatus {
  const [status, setStatus] = useState<NetworkStatus>({
    isOnline: true,
    isSlowConnection: false,
  });

  useEffect(() => {
    const updateOnlineStatus = () => {
      setStatus((prev) => ({ ...prev, isOnline: navigator.onLine }));
    };

    const checkConnectionSpeed = () => {
      const connection = (navigator as any).connection;
      if (connection) {
        const slowTypes = ['slow-2g', '2g', '3g'];
        const isSlow = slowTypes.includes(connection.effectiveType);
        setStatus((prev) => ({ ...prev, isSlowConnection: isSlow }));
      }
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    updateOnlineStatus();
    checkConnectionSpeed();

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return status;
}
```

### Offline Banner Component

```tsx
// components/registration/OfflineBanner.tsx
export default function OfflineBanner() {
  return (
    <div className="bg-yellow-100 border-b border-yellow-300 px-4 py-2 text-center">
      <p className="text-sm font-medium text-yellow-800">
        📶 No internet connection - form will submit when back online
      </p>
    </div>
  );
}
```

### Mobile Testing Checklist

```markdown
## Mobile Testing Requirements

### Touch Interactions
- [ ] All buttons minimum 48x48px touch target
- [ ] Cards easily tappable with thumb
- [ ] No accidental taps due to tight spacing
- [ ] Swipe-to-close works smoothly
- [ ] Form fields don't require precise tapping

### Keyboard Handling
- [ ] iOS: No zoom on input focus (font-size: 16px)
- [ ] Android: Keyboard doesn't obscure focused field
- [ ] Form scrolls focused field into view
- [ ] Submit button remains accessible with keyboard open

### Performance
- [ ] Modal animation smooth at 60fps
- [ ] Form validation doesn't cause jank
- [ ] School list loads quickly (<500ms)
- [ ] No layout shifts during interactions

### Network Resilience
- [ ] Offline state clearly indicated
- [ ] Form submission queued when offline
- [ ] Retry mechanism works correctly
- [ ] Slow network shows loading states

### Accessibility (Mobile)
- [ ] Screen reader announces all elements
- [ ] Touch exploration works correctly
- [ ] No elements trapped outside viewport
- [ ] Landscape orientation supported
```

---

## Testing Criteria

### Unit Tests

**UserTypeSelection Component**:
```typescript
describe('UserTypeSelection', () => {
  it('renders both educator and student cards', () => {
    render(<UserTypeSelection onSelect={jest.fn()} isTransitioning={false} />);
    expect(screen.getByText("I'm an Educator")).toBeInTheDocument();
    expect(screen.getByText("I'm a Student")).toBeInTheDocument();
  });

  it('calls onSelect with educator when educator card clicked', () => {
    const onSelect = jest.fn();
    render(<UserTypeSelection onSelect={onSelect} isTransitioning={false} />);
    fireEvent.click(screen.getByText("I'm an Educator"));
    expect(onSelect).toHaveBeenCalledWith('educator');
  });

  it('disables cards when transitioning', () => {
    const onSelect = jest.fn();
    render(<UserTypeSelection onSelect={onSelect} isTransitioning={true} />);
    fireEvent.click(screen.getByText("I'm an Educator"));
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('supports keyboard navigation', () => {
    render(<UserTypeSelection onSelect={jest.fn()} isTransitioning={false} />);
    const educatorCard = screen.getByLabelText(/I'm an Educator/);
    educatorCard.focus();
    expect(document.activeElement).toBe(educatorCard);
  });
});
```

**StudentForm Validation**:
```typescript
describe('useStudentForm', () => {
  it('validates required fields', () => {
    const { result } = renderHook(() => useStudentForm());
    expect(result.current.isFormValid()).toBe(false);
  });

  it('becomes valid with all fields', () => {
    const { result } = renderHook(() => useStudentForm());
    act(() => {
      result.current.updateField('boardId', 'tdsb');
      result.current.updateField('schoolId', 'nss');
      result.current.updateField('gradeLevel', '11');
    });
    expect(result.current.isFormValid()).toBe(true);
  });

  it('does not set cookies on submit', () => {
    const { result } = renderHook(() => useStudentForm());
    act(() => {
      result.current.updateField('boardId', 'tdsb');
      result.current.updateField('schoolId', 'nss');
      result.current.submitForm('session-123');
    });
    expect(Cookies.get('clp_registration')).toBeUndefined();
  });
});
```

### Integration Tests

**Full Modal Flow**:
```typescript
describe('BottomDrawerModal - Dual User', () => {
  it('starts in type selection state', () => {
    render(<BottomDrawerModal isOpen={true} {...props} />);
    expect(screen.getByText("Who's watching today?")).toBeInTheDocument();
  });

  it('transitions to educator form on selection', async () => {
    render(<BottomDrawerModal isOpen={true} {...props} />);
    fireEvent.click(screen.getByText("I'm an Educator"));
    await waitFor(() => {
      expect(screen.getByText('YOUR INFORMATION')).toBeInTheDocument();
    });
  });

  it('transitions to student form on selection', async () => {
    render(<BottomDrawerModal isOpen={true} {...props} />);
    fireEvent.click(screen.getByText("I'm a Student"));
    await waitFor(() => {
      expect(screen.getByText('Tell us a bit about you')).toBeInTheDocument();
    });
  });

  it('allows back navigation from form to type selection', async () => {
    render(<BottomDrawerModal isOpen={true} {...props} />);
    fireEvent.click(screen.getByText("I'm a Student"));
    await waitFor(() => {
      expect(screen.getByText('Change selection')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('Change selection'));
    await waitFor(() => {
      expect(screen.getByText("Who's watching today?")).toBeInTheDocument();
    });
  });
});
```

### Accessibility Tests

```typescript
describe('Accessibility', () => {
  it('maintains focus trap within modal', () => {
    render(<BottomDrawerModal isOpen={true} {...props} />);
    // Tab through all focusable elements
    // Ensure focus doesn't leave modal
  });

  it('has proper ARIA attributes', () => {
    render(<BottomDrawerModal isOpen={true} {...props} />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby');
  });

  it('closes on ESC key', () => {
    const onClose = jest.fn();
    render(<BottomDrawerModal isOpen={true} onClose={onClose} {...props} />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  it('meets color contrast requirements', () => {
    // Use axe-core or similar tool
    const { container } = render(<BottomDrawerModal isOpen={true} {...props} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
```

### E2E Tests (Playwright/Cypress)

```typescript
describe('Registration Modal E2E', () => {
  it('educator flow - first time', () => {
    cy.visit('/sessions/sample-session');
    cy.get('[data-testid="watch-session-button"]').click();
    cy.get('[data-testid="educator-card"]').click();
    cy.get('[data-testid="first-name-input"]').type('Jane');
    cy.get('[data-testid="email-input"]').type('jane@test.ca');
    cy.get('[data-testid="board-select"]').select('tdsb');
    cy.get('[data-testid="school-select"]').select('nss');
    cy.get('[data-testid="start-video-button"]').click();
    // Verify video plays
    cy.get('[data-testid="video-player"]').should('be.visible');
  });

  it('student flow', () => {
    cy.visit('/sessions/sample-session');
    cy.get('[data-testid="watch-session-button"]').click();
    cy.get('[data-testid="student-card"]').click();
    cy.get('[data-testid="privacy-badge"]').should('be.visible');
    cy.get('[data-testid="board-select"]').select('tdsb');
    cy.get('[data-testid="school-select"]').select('nss');
    cy.get('[data-testid="start-video-button"]').click();
    cy.get('[data-testid="video-player"]').should('be.visible');
  });
});
```

---

## Migration Plan

### Phase 1: Component Refactoring (No Breaking Changes)

1. Create new sub-components (UserTypeSelection, StudentForm, etc.)
2. Refactor BottomDrawerModal to use new architecture
3. Add unit tests for all new components
4. Ensure educator flow works exactly as before

### Phase 2: Feature Flag Rollout

```typescript
// Use feature flag to control visibility
const DUAL_USER_ENABLED = process.env.NEXT_PUBLIC_DUAL_USER === 'true';

// In BottomDrawerModal
const [currentStep, setCurrentStep] = useState<ModalStep>(
  DUAL_USER_ENABLED ? 'type-selection' : 'educator-form'
);
```

### Phase 3: Database Updates

1. Add `user_type` column to viewing_events table
2. Make `user_id` nullable for anonymous student views
3. Update analytics queries to account for both types
4. Back-fill existing records with 'educator' type

### Phase 4: API Updates

1. Extend `/api/submit-registration` to handle both types
2. Add validation for student submissions
3. Update response contracts
4. Add API tests

### Phase 5: Button Text Update

1. Update "Watch with Your Class" to "Watch Session" across codebase
2. Search for all instances and update
3. Update any related documentation
4. Consider A/B testing the new label

### Phase 6: Full Rollout

1. Remove feature flag
2. Monitor metrics (conversion rate, user type split, error rates)
3. Gather user feedback
4. Iterate based on data

---

## Performance Budget

### Modal Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time to Interactive | <100ms | After modal opens |
| Animation Frame Rate | 60fps | During transitions |
| Bundle Size Increase | <15KB | Gzipped JS |
| First Input Delay | <50ms | Form field interactions |

### Optimization Strategies

1. **Code Splitting**: Lazy load StudentForm component
2. **Memoization**: Use React.memo for static components
3. **Debouncing**: Validation on input with 300ms debounce
4. **CSS-only Animations**: Prefer transform/opacity over layout-triggering properties
5. **Conditional Rendering**: Only mount active form component
