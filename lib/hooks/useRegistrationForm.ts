'use client';

import { useState, useCallback } from 'react';

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

      // Reset school when board changes
      if (name === 'boardId' && value !== prev.boardId) {
        newData.schoolId = '';
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

  const submitForm = (sessionId: string): boolean => {
    if (!validateForm()) {
      return false;
    }

    // Prepare submission data based on user type
    const submissionData = userType === 'student'
      ? {
          userType: 'student',
          boardId: formData.boardId,
          schoolId: formData.schoolId,
          gradeLevel: formData.gradeLevel,
          sessionId,
          timestamp: new Date().toISOString(),
        }
      : {
          userType: 'educator',
          ...formData,
          sessionId,
          timestamp: new Date().toISOString(),
        };

    // Log submission for now (will be replaced with API call)
    console.log('Form submitted:', submissionData);

    return true;
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
