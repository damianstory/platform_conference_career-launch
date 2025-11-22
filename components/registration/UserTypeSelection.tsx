'use client';

import { UserType } from '@/lib/hooks/useRegistrationForm';
import { GraduationCap, User } from 'lucide-react';

interface UserTypeSelectionProps {
  onSelect: (type: UserType) => void;
  isTransitioning?: boolean;
}

export default function UserTypeSelection({
  onSelect,
  isTransitioning = false,
}: UserTypeSelectionProps) {
  return (
    <div className="space-y-3 md:space-y-4">
      {/* Educator Card */}
      <button
        type="button"
        onClick={() => onSelect('educator')}
        disabled={isTransitioning}
        className="w-full flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-white border-2 border-[#E5E9F1] rounded-xl hover:border-[#0092FF] hover:shadow-md hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0092FF] active:scale-[0.98] active:bg-[#E6F4FF] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="I'm an Educator. Teacher, counselor, or administrator showing to students."
      >
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[#E6F4FF] rounded-full flex items-center justify-center group-hover:bg-[#C6E7FF] transition-colors">
          <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-[#0092FF]" strokeWidth={2} />
        </div>

        {/* Content */}
        <div className="flex-1 text-left">
          <div className="text-lg md:text-xl font-semibold text-[#22224C] mb-0.5">
            I&apos;m an Educator
          </div>
          <p className="text-sm text-[#65738B]">
            Teacher, counselor, or administrator showing to students
          </p>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0">
          <svg
            className="w-5 h-5 text-[#AAB7CB] group-hover:text-[#0092FF] group-hover:translate-x-1 transition-all"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>

      {/* Student Card */}
      <button
        type="button"
        onClick={() => onSelect('student')}
        disabled={isTransitioning}
        className="w-full flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-white border-2 border-[#E5E9F1] rounded-xl hover:border-[#0092FF] hover:shadow-md hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0092FF] active:scale-[0.98] active:bg-[#E6F4FF] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="I'm a Student. Watching independently for career exploration."
      >
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[#E6F4FF] rounded-full flex items-center justify-center group-hover:bg-[#C6E7FF] transition-colors">
          <User className="w-6 h-6 md:w-7 md:h-7 text-[#0092FF]" strokeWidth={2} />
        </div>

        {/* Content */}
        <div className="flex-1 text-left">
          <div className="text-lg md:text-xl font-semibold text-[#22224C] mb-0.5">
            I&apos;m a Student
          </div>
          <p className="text-sm text-[#65738B]">
            Watching independently for career exploration
          </p>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0">
          <svg
            className="w-5 h-5 text-[#AAB7CB] group-hover:text-[#0092FF] group-hover:translate-x-1 transition-all"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    </div>
  );
}
