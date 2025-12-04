'use client';

import { useState, useCallback, useRef } from 'react';
import { ONTARIO_BOARDS, SCHOOLS_BY_BOARD } from '@/lib/mock-data/registration';

// =============================================================================
// REVERT INSTRUCTIONS: If the API route causes issues, uncomment the line below
// and change submitForm to use the OLD DIRECT SUPABASE VERSION at the bottom
// =============================================================================
// import { supabase, RegistrationRecord } from '@/lib/supabase/client';

export type UserType = 'educator' | 'student' | null;

export interface RegistrationFormData {
  email: string;
  boardId: string;
  schoolId: string;
  classSize: string;
  gradeLevel: string;
}

interface FormErrors {
  email?: string;
  boardId?: string;
  schoolId?: string;
  classSize?: string;
  gradeLevel?: string;
}

// Helper to look up board name from ID
function getBoardName(boardId: string): string {
  const board = ONTARIO_BOARDS.find(b => b.id === boardId);
  return board?.name || boardId;
}

// Helper to look up school name from ID
function getSchoolName(boardId: string, schoolId: string): string {
  if (schoolId === 'not-listed') return 'Not Listed';
  const schools = SCHOOLS_BY_BOARD[boardId] || [];
  const school = schools.find(s => s.id === schoolId);
  return school?.name || schoolId;
}

export function useRegistrationForm() {
  const [userType, setUserType] = useState<UserType>(null);
  const [formData, setFormData] = useState<RegistrationFormData>({
    email: '',
    boardId: '',
    schoolId: '',
    classSize: '',
    gradeLevel: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  // Spam protection: track when form was loaded
  const formLoadedAt = useRef<number>(Date.now());
  // Honeypot field value (should always be empty for real users)
  const honeypotValue = useRef<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: keyof RegistrationFormData, value: string): string | undefined => {
    // Student-specific validation: skip email and classSize
    if (userType === 'student') {
      if (name === 'email' || name === 'classSize') {
        return undefined; // These fields are not required for students
      }
    }

    switch (name) {
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!validateEmail(value)) return 'Please enter a valid email address';
        break;
      case 'boardId':
        if (!value) return 'Please select a school board';
        break;
      case 'schoolId':
        // Accept 'not-listed' for guest board selection
        if (!value) return 'Please select a school';
        break;
      case 'classSize':
        if (!value) return 'Please select a class size';
        break;
      case 'gradeLevel':
        if (!value) return 'Please select a grade level';
        break;
    }
    return undefined;
  };

  const updateField = (name: keyof RegistrationFormData, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [name]: value };

      // Handle guest board selection
      if (name === 'boardId') {
        if (value === 'guest') {
          // Automatically set school to 'not-listed' for guest
          newData.schoolId = 'not-listed';
        } else if (value !== prev.boardId) {
          // Reset school when board changes (non-guest)
          newData.schoolId = '';
        }
      }

      return newData;
    });

    // Real-time validation for email field (educators only)
    if (name === 'email' && userType === 'educator') {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    } else {
      // Clear error for other fields when user starts typing
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Determine which fields to validate based on user type and class size
    let fieldsToValidate: Array<keyof RegistrationFormData>;
    if (userType === 'student') {
      fieldsToValidate = ['boardId', 'schoolId', 'gradeLevel'];
    } else if (formData.classSize === 'exploring-solo') {
      // Solo educators don't need grade level
      fieldsToValidate = ['email', 'boardId', 'schoolId', 'classSize'];
    } else {
      fieldsToValidate = Object.keys(formData) as Array<keyof RegistrationFormData>;
    }

    fieldsToValidate.forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to update honeypot value (called from hidden field in modal)
  const setHoneypot = useCallback((value: string) => {
    honeypotValue.current = value;
  }, []);

  // Reset form loaded timestamp (call when modal opens)
  const resetFormTimestamp = useCallback(() => {
    formLoadedAt.current = Date.now();
  }, []);

  const submitForm = async (sessionId: string, sessionTitle?: string): Promise<boolean> => {
    if (!validateForm()) {
      return false;
    }

    // Prepare registration data for API
    const registrationPayload = {
      user_type: userType as 'educator' | 'student',
      session_id: sessionId,
      session_title: sessionTitle,
      board_id: formData.boardId,
      board_name: getBoardName(formData.boardId),
      school_id: formData.schoolId,
      school_name: getSchoolName(formData.boardId, formData.schoolId),
      is_guest: formData.boardId === 'guest',
      grade_level: formData.gradeLevel,
      // Educator-specific fields
      ...(userType === 'educator' && {
        email: formData.email,
        class_size: formData.classSize,
      }),
      // Spam protection fields
      _honeypot: honeypotValue.current,
      _timestamp: formLoadedAt.current,
    };

    try {
      console.log('Submitting registration via API:', { sessionId, userType });

      const response = await fetch('/api/submit-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationPayload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        console.error('Registration API error:', result.error, result.details);
        return false;
      }

      console.log('Registration successful:', result.id);
      return true;
    } catch (err) {
      console.error('Unexpected error submitting registration:', err);
      return false;
    }
  };

  // =============================================================================
  // OLD DIRECT SUPABASE VERSION - Uncomment this and comment out the above
  // submitForm if you need to revert quickly
  // =============================================================================
  // const submitFormDirectSupabase = async (sessionId: string, sessionTitle?: string): Promise<boolean> => {
  //   if (!validateForm()) {
  //     return false;
  //   }
  //   const registrationData: RegistrationRecord = {
  //     user_type: userType as 'educator' | 'student',
  //     session_id: sessionId,
  //     session_title: sessionTitle,
  //     board_id: formData.boardId,
  //     board_name: getBoardName(formData.boardId),
  //     school_id: formData.schoolId,
  //     school_name: getSchoolName(formData.boardId, formData.schoolId),
  //     is_guest: formData.boardId === 'guest',
  //     grade_level: formData.gradeLevel,
  //   };
  //   if (userType === 'educator') {
  //     registrationData.first_name = formData.firstName;
  //     registrationData.email = formData.email;
  //     registrationData.class_size = formData.classSize;
  //   }
  //   try {
  //     const { error } = await supabase.from('registrations').insert([registrationData]);
  //     if (error) {
  //       console.error('Error saving registration:', error.message);
  //       return false;
  //     }
  //     return true;
  //   } catch (err) {
  //     console.error('Unexpected error saving registration:', err);
  //     return false;
  //   }
  // };

  const isFormValid = (): boolean => {
    if (userType === 'student') {
      // For students, only require school info and grade
      return (
        formData.boardId !== '' &&
        formData.schoolId !== '' &&
        formData.gradeLevel !== ''
      );
    }

    // For solo educators, don't require grade level
    if (formData.classSize === 'exploring-solo') {
      return (
        validateEmail(formData.email) &&
        formData.boardId !== '' &&
        formData.schoolId !== ''
      );
    }

    // For educators with students, require all fields
    return (
      validateEmail(formData.email) &&
      formData.boardId !== '' &&
      formData.schoolId !== '' &&
      formData.classSize !== '' &&
      formData.gradeLevel !== ''
    );
  };

  const resetUserType = useCallback(() => {
    setUserType(null);
    setErrors({});
    setAttemptedSubmit(false);
  }, []);

  const resetForm = useCallback(() => {
    setUserType(null);
    setErrors({});
    setAttemptedSubmit(false);
    // Keep form data in case they switch back to educator
    // The cookie pre-fill will remain if they were a returning user
  }, []);

  return {
    userType,
    setUserType,
    resetUserType,
    resetForm,
    formData,
    errors,
    attemptedSubmit,
    setAttemptedSubmit,
    updateField,
    submitForm,
    isFormValid,
    validateForm,
    // Spam protection helpers
    setHoneypot,
    resetFormTimestamp,
  };
}
