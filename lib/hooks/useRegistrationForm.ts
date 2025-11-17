'use client';

import { useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';

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

const COOKIE_NAME = 'clp_registration';
const COOKIE_EXPIRY_DAYS = 7;

export function useRegistrationForm() {
  const [userType, setUserType] = useState<UserType>(null);
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    email: '',
    boardId: '',
    schoolId: '',
    classSize: '25-to-35', // Default selection
    gradeLevel: '', // Empty for students (no pre-selection)
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isReturningUser, setIsReturningUser] = useState(false);

  // Load saved data from cookie on mount (only for educators)
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
          gradeLevel: parsed.gradeLevel || '',
        });
        setIsReturningUser(true);
      } catch (e) {
        // Invalid cookie data, ignore
        console.error('Error parsing registration cookie:', e);
      }
    }
  }, []);

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

    // Clear error for this field when user starts typing
    setErrors(prev => ({ ...prev, [name]: undefined }));
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

    // Only save cookie for educators (privacy protection for students)
    if (userType === 'educator') {
      const cookieData = {
        ...formData,
        timestamp: new Date().toISOString(),
      };

      Cookies.set(COOKIE_NAME, JSON.stringify(cookieData), { expires: COOKIE_EXPIRY_DAYS });
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
  }, []);

  const resetForm = useCallback(() => {
    setUserType(null);
    setErrors({});
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
    isReturningUser,
    updateField,
    submitForm,
    isFormValid,
    validateForm,
  };
}
