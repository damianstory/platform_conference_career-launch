'use client';

import { useEffect, useState, useRef } from 'react';
import { useRegistrationForm, UserType } from '@/lib/hooks/useRegistrationForm';
import {
  ONTARIO_BOARDS,
  SCHOOLS_BY_BOARD,
  CLASS_SIZES,
  GRADE_LEVELS
} from '@/lib/mock-data/registration';
import UserTypeSelection from './UserTypeSelection';
import { StudentStep1, StudentStep2 } from './StudentSchoolForm';

interface MultiStepModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionTitle: string;
  sessionId: string;
  onSubmit: (data: any) => void;
}

type EducatorStep = 1 | 2 | 3 | 'confirm';
type StudentStep = 'student-1' | 'student-2';
type ModalStep = 'user-type' | EducatorStep | StudentStep;

export default function MultiStepModal({
  isOpen,
  onClose,
  sessionTitle,
  sessionId,
  onSubmit,
}: MultiStepModalProps) {
  const {
    userType,
    setUserType,
    resetUserType,
    formData,
    errors,
    updateField,
    submitForm,
    isFormValid,
  } = useRegistrationForm();

  const [currentStep, setCurrentStep] = useState<ModalStep>('user-type');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset to user-type selection when modal opens
  useEffect(() => {
    if (isOpen) {
      // Start with user-type selection
      setCurrentStep('user-type');
      resetUserType();
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, resetUserType]);

  // Focus first input after step changes
  useEffect(() => {
    if (isOpen && currentStep !== 'user-type' && currentStep !== 'confirm') {
      const timer = setTimeout(() => {
        firstInputRef.current?.focus();
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [isOpen, currentStep]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleUserTypeSelect = (type: UserType) => {
    if (!type) return;

    setIsTransitioning(true);
    setUserType(type);

    // Small delay for visual feedback
    setTimeout(() => {
      if (type === 'educator') {
        // Educators start at step 1
        setCurrentStep(1);
      } else {
        // Students start at step 1
        setCurrentStep('student-1');
      }
      setIsTransitioning(false);
    }, 200);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();

    if (submitForm(sessionId)) {
      onSubmit(formData);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 'student-1') {
      setCurrentStep('student-2');
    } else if (currentStep === 3 || currentStep === 'student-2') {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    } else if (currentStep === 3) {
      setCurrentStep(2);
    } else if (currentStep === 'student-2') {
      setCurrentStep('student-1');
    } else if (currentStep === 'confirm' || currentStep === 1 || currentStep === 'student-1') {
      // Go back to user type selection
      setCurrentStep('user-type');
      resetUserType();
    }
  };

  const canProceed = () => {
    if (currentStep === 'user-type') {
      return false; // Selection cards handle their own navigation
    }
    if (currentStep === 1) {
      return formData.firstName && formData.email && !errors.firstName && !errors.email;
    } else if (currentStep === 2) {
      return formData.boardId && formData.schoolId && !errors.boardId && !errors.schoolId;
    } else if (currentStep === 3) {
      return formData.classSize && formData.gradeLevel;
    } else if (currentStep === 'student-1') {
      return formData.boardId && formData.schoolId && !errors.boardId && !errors.schoolId;
    } else if (currentStep === 'student-2') {
      return formData.gradeLevel !== '';
    }
    return false;
  };

  const availableSchools = formData.boardId
    ? SCHOOLS_BY_BOARD[formData.boardId] || []
    : [];

  const getModalTitle = () => {
    if (currentStep === 'user-type') {
      return "Who's watching today?";
    }
    if (currentStep === 'confirm') {
      return 'Review Your Information';
    }
    if (currentStep === 'student-1') {
      return 'Where do you go to School?';
    }
    if (currentStep === 'student-2') {
      return 'What grade are you in?';
    }
    if (userType === 'student') {
      return 'Tell us a bit about you';
    }
    return "Who's Watching With You?";
  };

  const getModalSubtitle = () => {
    if (currentStep === 'user-type') {
      return 'Help us measure the impact of Career Launch Week';
    }
    if (currentStep === 'student-1' || currentStep === 'student-2') {
      return ''; // Minimal subtitle for students
    }
    if (userType === 'student') {
      return 'No personal info needed - just help us understand who\'s watching';
    }
    return 'Help us measure the impact of Career Launch Week 🤝';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pb-6 lg:pb-20">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={modalRef}
        className="relative w-full max-w-[600px] lg:max-w-[700px] bg-white animate-slide-up flex flex-col"
        style={{
          height: 'auto',
          maxHeight: '90vh',
          minHeight: currentStep === 'user-type' ? '50vh' : userType === 'student' ? '55vh' : '55vh',
          borderRadius: '24px',
          boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.12)',
          overflow: 'hidden',
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Drawer Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div
            className="w-12 h-1 rounded-full bg-gray-300"
            aria-hidden="true"
          />
        </div>

        {/* Progress Indicator - Educator (3 dots) */}
        {userType === 'educator' && typeof currentStep === 'number' && (
          <div className="px-6 py-3">
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    step <= currentStep
                      ? 'bg-[#0092FF]'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Step ${step}${step === currentStep ? ' (current)' : ''}`}
                />
              ))}
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">
              Step {currentStep} of 3
            </p>
          </div>
        )}

        {/* Progress Indicator - Student (2 dots) */}
        {userType === 'student' && (currentStep === 'student-1' || currentStep === 'student-2') && (
          <div className="px-6 py-3">
            <div className="flex items-center justify-center gap-2">
              {['student-1', 'student-2'].map((step, index) => (
                <div
                  key={step}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    (currentStep === 'student-1' && index === 0) ||
                    (currentStep === 'student-2' && index <= 1)
                      ? 'bg-[#0092FF]'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Step ${index + 1}${step === currentStep ? ' (current)' : ''}`}
                />
              ))}
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">
              Step {currentStep === 'student-1' ? '1' : '2'} of 2
            </p>
          </div>
        )}

        {/* Header Section */}
        <div className="bg-[#fafbfc] px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
          <h2
            id="drawer-title"
            className="text-xl md:text-2xl font-bold text-[#22224C] mb-2"
          >
            {getModalTitle()}
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            {getModalSubtitle()}
          </p>

          {/* Session Info Box */}
          <div className="bg-[#C6E7FF] border border-[#0092FF]/20 rounded-lg px-3 md:px-4 py-2.5 md:py-3">
            <p className="text-sm text-[#22224C]">
              <span className="font-semibold">You&apos;re about to watch:</span>{' '}
              {sessionTitle}
            </p>
          </div>
        </div>

        {/* Form Content - Dynamic based on step */}
        <div
          className={`px-4 md:px-6 py-4 md:py-6 flex-grow ${currentStep !== 'user-type' ? 'overflow-y-auto' : ''}`}
        >
          {/* User Type Selection */}
          {currentStep === 'user-type' && (
            <UserTypeSelection
              onSelect={handleUserTypeSelect}
              isTransitioning={isTransitioning}
            />
          )}

          {/* Student Step 1: School Board + School */}
          {currentStep === 'student-1' && userType === 'student' && (
            <StudentStep1
              formData={formData}
              errors={errors}
              onUpdateField={updateField}
              onBack={handleBack}
            />
          )}

          {/* Student Step 2: Grade Level */}
          {currentStep === 'student-2' && userType === 'student' && (
            <StudentStep2
              formData={formData}
              errors={errors}
              onUpdateField={updateField}
            />
          )}

          {/* Educator Step 1: Personal Information */}
          {currentStep === 1 && userType === 'educator' && (
            <div className="space-y-4 animate-fade-in">
              {/* Back Navigation */}
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-sm text-[#65738B] hover:text-[#485163] mb-2 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span className="underline">Change selection</span>
              </button>

              <h3 className="text-lg font-semibold text-[#22224C] mb-4">Who are you?</h3>

              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  First Name
                </label>
                <input
                  ref={firstInputRef}
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  placeholder="Jane"
                  className={`w-full px-3.5 py-2.5 border rounded-lg text-[15px] transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#0092FF]/10 focus:border-[#0092FF] ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1.5 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="jane.smith@board.ca"
                  className={`w-full px-3.5 py-2.5 border rounded-lg text-[15px] transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#0092FF]/10 focus:border-[#0092FF] ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>
          )}

          {/* Educator Step 2: School Information */}
          {currentStep === 2 && userType === 'educator' && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-semibold text-[#22224C] mb-4">Where do you teach?</h3>

              <div>
                <label
                  htmlFor="boardId"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  School Board
                </label>
                <select
                  id="boardId"
                  value={formData.boardId}
                  onChange={(e) => updateField('boardId', e.target.value)}
                  className={`w-full px-3.5 py-2.5 border rounded-lg text-[15px] transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#0092FF]/10 focus:border-[#0092FF] bg-white ${
                    errors.boardId ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a board...</option>
                  {ONTARIO_BOARDS.map((board) => (
                    <option key={board.id} value={board.id}>
                      {board.name}
                    </option>
                  ))}
                </select>
                {errors.boardId && (
                  <p className="mt-1.5 text-sm text-red-600">{errors.boardId}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="schoolId"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  School
                </label>
                <select
                  id="schoolId"
                  value={formData.schoolId}
                  onChange={(e) => updateField('schoolId', e.target.value)}
                  disabled={!formData.boardId}
                  className={`w-full px-3.5 py-2.5 border rounded-lg text-[15px] transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#0092FF]/10 focus:border-[#0092FF] bg-white disabled:bg-gray-50 disabled:cursor-not-allowed ${
                    errors.schoolId ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">
                    {formData.boardId ? 'Select a school...' : 'Select a board first'}
                  </option>
                  {availableSchools.map((school) => (
                    <option key={school.id} value={school.id}>
                      {school.name}
                    </option>
                  ))}
                </select>
                {errors.schoolId && (
                  <p className="mt-1.5 text-sm text-red-600">{errors.schoolId}</p>
                )}
              </div>
            </div>
          )}

          {/* Educator Step 3: Class Information */}
          {currentStep === 3 && userType === 'educator' && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-semibold text-[#22224C] mb-4">About this class</h3>

              <div>
                <label
                  htmlFor="classSize"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Class Size
                </label>
                <select
                  id="classSize"
                  value={formData.classSize}
                  onChange={(e) => updateField('classSize', e.target.value)}
                  className={`w-full px-3.5 py-2.5 border rounded-lg text-[15px] transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#0092FF]/10 focus:border-[#0092FF] bg-white ${
                    errors.classSize ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  {CLASS_SIZES.map((size) => (
                    <option key={size.id} value={size.id}>
                      {size.label}
                    </option>
                  ))}
                </select>
                {errors.classSize && (
                  <p className="mt-1.5 text-sm text-red-600">{errors.classSize}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="gradeLevel"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Grade Level
                </label>
                <select
                  id="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={(e) => updateField('gradeLevel', e.target.value)}
                  className={`w-full px-3.5 py-2.5 border rounded-lg text-[15px] transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#0092FF]/10 focus:border-[#0092FF] bg-white ${
                    errors.gradeLevel ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  {GRADE_LEVELS.map((grade) => (
                    <option key={grade.id} value={grade.id}>
                      {grade.label}
                    </option>
                  ))}
                </select>
                {errors.gradeLevel && (
                  <p className="mt-1.5 text-sm text-red-600">{errors.gradeLevel}</p>
                )}
              </div>
            </div>
          )}

          {/* Educator Confirmation Screen (Returning Users) */}
          {currentStep === 'confirm' && userType === 'educator' && (
            <div className="space-y-4 animate-fade-in">
              {/* Back Navigation */}
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-sm text-[#65738B] hover:text-[#485163] mb-2 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span className="underline">Change selection</span>
              </button>

              <div className="bg-green-50 border-l-4 border-green-500 px-4 py-3 rounded mb-4">
                <p className="text-sm font-medium text-green-800">
                  Welcome back! We&apos;ve pre-filled your information.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Name:</span>
                  <span className="text-sm font-medium text-gray-900">{formData.firstName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Email:</span>
                  <span className="text-sm font-medium text-gray-900">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">School Board:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {ONTARIO_BOARDS.find(b => b.id === formData.boardId)?.name || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">School:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {availableSchools.find(s => s.id === formData.schoolId)?.name || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Class Size:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {CLASS_SIZES.find(c => c.id === formData.classSize)?.label || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Grade Level:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {GRADE_LEVELS.find(g => g.id === formData.gradeLevel)?.label || 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 border-t border-gray-200 px-4 md:px-6 pt-4 pb-6 bg-[#fafbfc]">
          {currentStep === 'user-type' ? (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-4 md:px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          ) : currentStep === 'confirm' ? (
            <div className="flex flex-col-reverse sm:flex-row gap-3 w-full sm:justify-end">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-4 md:px-6 py-2.5 border-2 border-[#0092FF] rounded-lg text-sm font-medium text-[#0092FF] hover:bg-[#0092FF]/5 transition-colors duration-200"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 md:px-6 py-2.5 bg-[#0092FF] text-white rounded-lg text-sm font-medium hover:bg-[#0082E6] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Start Video
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ) : userType === 'student' ? (
            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-between">
              {/* Back button - only show for student-2 */}
              {currentStep === 'student-2' && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 md:px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  ← Back
                </button>
              )}

              <div className="flex gap-3 justify-end w-full">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 md:px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="px-4 md:px-6 py-2.5 bg-[#0092FF] text-white rounded-lg text-sm font-medium hover:bg-[#0082E6] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2 min-h-[44px]"
                >
                  {currentStep === 'student-2' ? 'Start Video' : 'Next Step'}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-between">
              {currentStep !== 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 md:px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  ← Back
                </button>
              )}

              <div className="flex gap-3 justify-end w-full">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 md:px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="px-4 md:px-6 py-2.5 bg-[#0092FF] text-white rounded-lg text-sm font-medium hover:bg-[#0082E6] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2 min-h-[44px]"
                >
                  {currentStep === 3 ? 'Start Video' : 'Next Step'}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
