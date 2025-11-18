'use client';

import { useEffect, useRef } from 'react';
import { useRegistrationForm } from '@/lib/hooks/useRegistrationForm';
import {
  ONTARIO_BOARDS,
  SCHOOLS_BY_BOARD,
  CLASS_SIZES,
  GRADE_LEVELS
} from '@/lib/mock-data/registration';

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
  const {
    formData,
    errors,
    updateField,
    submitForm,
    isFormValid,
  } = useRegistrationForm();

  const firstInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle body scroll lock and focus management
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      // Focus first input after animation completes
      const timer = setTimeout(() => {
        firstInputRef.current?.focus();
      }, 450);

      return () => {
        document.body.style.overflow = '';
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (submitForm(sessionId)) {
      onSubmit(formData);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const availableSchools = formData.boardId
    ? SCHOOLS_BY_BOARD[formData.boardId] || []
    : [];

  // Single modal height for all users - flexbox handles content distribution
  const getModalHeight = () => {
    return 'min(90vh, 900px)';
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

      {/* Drawer - Flexbox column layout for natural content flow */}
      <div
        ref={modalRef}
        className="flex flex-col relative w-full max-w-[600px] lg:max-w-[900px] bg-white animate-slide-up"
        style={{
          height: getModalHeight(),
          maxHeight: '900px',
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
          boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.12)',
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Drawer Handle - Fixed height */}
        <div className="flex-shrink-0 flex justify-center pt-3 pb-2">
          <div
            className="w-12 h-1 rounded-full bg-gray-300"
            aria-hidden="true"
          />
        </div>

        {/* Header Section - Fixed height */}
        <div className="flex-shrink-0 bg-[#fafbfc] px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
          <h2
            id="drawer-title"
            className="text-xl md:text-2xl font-bold text-[#22224C] mb-2"
          >
            Who&apos;s Watching With You?
          </h2>
          <p className="text-sm text-gray-600 mb-3 md:mb-4">
            Help us measure the impact of Career Launch Week 🤝
          </p>

          {/* Session Info Box - Always show to remind users what they're watching */}
          <div className="bg-[#C6E7FF] border border-[#0092FF]/20 rounded-lg px-3 md:px-4 py-2.5 md:py-3">
            <p className="text-sm text-[#22224C]">
              <span className="font-semibold">You&apos;re about to watch:</span>{' '}
              {sessionTitle}
            </p>
          </div>
        </div>

        {/* Form Content - Grows to fill available space */}
        <div className="flex-1 overflow-y-auto">
          <form
            onSubmit={handleSubmit}
            className="px-4 md:px-6 py-4"
            style={{
              WebkitOverflowScrolling: 'touch',
              overscrollBehavior: 'contain',
            }}
          >
          {/* YOUR INFORMATION Section */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Your Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 mb-4">
              {/* First Name */}
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

              {/* Email */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
              {/* School Board */}
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

              {/* School */}
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
                  className={`w-full px-3.5 py-2.5 border rounded-lg text-[15px] transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#0092FF]/10 focus:border-[#0092FF] bg-white disabled:bg-gray-100 disabled:cursor-not-allowed ${
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
          </div>

          {/* CLASS CONTEXT Section */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Class Context
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
              {/* Class Size */}
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

              {/* Grade Level */}
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
          </div>
          </form>
        </div>

        {/* Footer - Fixed height, in document flow */}
        <div className="flex-shrink-0 bg-[#fafbfc] border-t border-gray-200 px-4 md:px-6 py-6">
          <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-3 md:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 md:px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!isFormValid()}
              className="px-4 md:px-6 py-2.5 bg-[#0092FF] text-white rounded-lg text-sm font-medium hover:bg-[#0082E6] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
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
        </div>
      </div>
    </div>
  );
}
