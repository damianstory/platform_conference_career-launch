'use client';

import { RegistrationFormData } from '@/lib/hooks/useRegistrationForm';
import {
  ONTARIO_BOARDS,
  SCHOOLS_BY_BOARD,
  GRADE_LEVELS
} from '@/lib/mock-data/registration';

// Step 1: School Board + School
interface StudentStep1Props {
  formData: RegistrationFormData;
  errors: {
    boardId?: string;
    schoolId?: string;
  };
  onUpdateField: (name: keyof RegistrationFormData, value: string) => void;
  onBack: () => void;
}

export function StudentStep1({
  formData,
  errors,
  onUpdateField,
  onBack,
}: StudentStep1Props) {
  const availableSchools = formData.boardId
    ? SCHOOLS_BY_BOARD[formData.boardId] || []
    : [];

  return (
    <div className="animate-fade-in">
      {/* Back Navigation */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-[#65738B] hover:text-[#485163] mb-4 transition-colors"
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

      <div className="space-y-5">
        {/* School Board */}
        <div>
          <label
            htmlFor="student-boardId"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            What school board are you in?
          </label>
          <select
            id="student-boardId"
            value={formData.boardId}
            onChange={(e) => onUpdateField('boardId', e.target.value)}
            className={`w-full px-3.5 py-3 border rounded-lg text-base transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#0092FF]/10 focus:border-[#0092FF] bg-white ${
              errors.boardId ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{ fontSize: '16px' }} // Prevents iOS zoom
            aria-required="true"
            aria-invalid={!!errors.boardId}
          >
            <option value="">Select your board...</option>
            {ONTARIO_BOARDS.map((board) => (
              <option key={board.id} value={board.id}>
                {board.name}
              </option>
            ))}
          </select>
          {errors.boardId && (
            <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {errors.boardId}
            </p>
          )}
        </div>

        {/* School */}
        <div>
          <label
            htmlFor="student-schoolId"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            What school do you go to?
          </label>
          <select
            id="student-schoolId"
            value={formData.schoolId}
            onChange={(e) => onUpdateField('schoolId', e.target.value)}
            disabled={!formData.boardId}
            className={`w-full px-3.5 py-3 border rounded-lg text-base transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#0092FF]/10 focus:border-[#0092FF] bg-white disabled:bg-gray-50 disabled:cursor-not-allowed ${
              errors.schoolId ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{ fontSize: '16px' }}
            aria-required="true"
            aria-invalid={!!errors.schoolId}
          >
            <option value="">
              {formData.boardId ? 'Select your school...' : 'Select a board first'}
            </option>
            {availableSchools.map((school) => (
              <option key={school.id} value={school.id}>
                {school.name}
              </option>
            ))}
          </select>
          {errors.schoolId && (
            <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {errors.schoolId}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Step 2: Grade Level Only
interface StudentStep2Props {
  formData: RegistrationFormData;
  errors: {
    gradeLevel?: string;
  };
  onUpdateField: (name: keyof RegistrationFormData, value: string) => void;
}

export function StudentStep2({
  formData,
  errors,
  onUpdateField,
}: StudentStep2Props) {
  return (
    <div className="animate-fade-in">
      <div className="space-y-5">
        {/* Grade Level */}
        <div>
          <label
            htmlFor="student-gradeLevel"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            What grade are you in?
          </label>
          <select
            id="student-gradeLevel"
            value={formData.gradeLevel}
            onChange={(e) => onUpdateField('gradeLevel', e.target.value)}
            className={`w-full px-3.5 py-3 border rounded-lg text-base transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#0092FF]/10 focus:border-[#0092FF] bg-white ${
              errors.gradeLevel ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{ fontSize: '16px' }}
            aria-required="true"
            aria-invalid={!!errors.gradeLevel}
          >
            <option value="">Select your grade...</option>
            {GRADE_LEVELS.map((grade) => (
              <option key={grade.id} value={grade.id}>
                {grade.label}
              </option>
            ))}
          </select>
          {errors.gradeLevel && (
            <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {errors.gradeLevel}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Default export for backward compatibility
export default StudentStep1;
