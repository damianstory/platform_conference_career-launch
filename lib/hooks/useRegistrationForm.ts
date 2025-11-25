'use client';

import { useState, useCallback } from 'react';
import { supabase, RegistrationRecord } from '@/lib/supabase/client';
import { ONTARIO_BOARDS, SCHOOLS_BY_BOARD } from '@/lib/mock-data/registration';

export type UserType = 'educator' | 'student' | null;

export interface RegistrationFormData {
  firstName: string;
  email: string;
  boardId: string;
  schoolId: string;
  classSize: string;
  gradeLevel: string;
}

interface FormErrors {
  firstName?: string;
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
    firstName: '',
    email: '',
    boardId: '',
    schoolId: '',
    classSize: '',
    gradeLevel: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: keyof RegistrationFormData, value: string): string | undefined => {
    // Student-specific validation: skip firstName, email, and classSize
    if (userType === 'student') {
      if (name === 'firstName' || name === 'email' || name === 'classSize') {
        return undefined; // These fields are not required for students
      }
    }

    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        if (value.trim().length < 2) return 'First name must be at least 2 characters';
        break;
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

    // For students, only validate required fields
    const fieldsToValidate = userType === 'student'
      ? ['boardId', 'schoolId', 'gradeLevel'] as Array<keyof RegistrationFormData>
      : Object.keys(formData) as Array<keyof RegistrationFormData>;

    fieldsToValidate.forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (sessionId: string, sessionTitle?: string): Promise<boolean> => {
    if (!validateForm()) {
      return false;
    }

    // Prepare registration record for Supabase
    const registrationData: RegistrationRecord = {
      user_type: userType as 'educator' | 'student',
      session_id: sessionId,
      session_title: sessionTitle,
      board_id: formData.boardId,
      board_name: getBoardName(formData.boardId),
      school_id: formData.schoolId,
      school_name: getSchoolName(formData.boardId, formData.schoolId),
      is_guest: formData.boardId === 'guest',
      grade_level: formData.gradeLevel,
    };

    // Add educator-specific fields
    if (userType === 'educator') {
      registrationData.first_name = formData.firstName;
      registrationData.email = formData.email;
      registrationData.class_size = formData.classSize;
    }

    try {
      console.log('Attempting to save registration:', registrationData);

      const { data, error } = await supabase
        .from('registrations')
        .insert([registrationData])
        .select()
        .single();

      if (error) {
        console.error('Error saving registration (raw):', error);
        console.error('Error as JSON:', JSON.stringify(error, null, 2));
        console.error('Error message:', error.message);
        console.error('Error code:', error.code);
        return false;
      }

      console.log('Registration saved successfully:', data);
      return true;
    } catch (err) {
      console.error('Unexpected error saving registration:', err);
      return false;
    }
  };

  const isFormValid = (): boolean => {
    if (userType === 'student') {
      // For students, only require school info and grade
      return (
        formData.boardId !== '' &&
        formData.schoolId !== '' &&
        formData.gradeLevel !== ''
      );
    }

    // For educators, require all fields
    return (
      formData.firstName.trim().length >= 2 &&
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
  };
}
