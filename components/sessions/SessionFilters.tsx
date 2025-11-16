'use client'

import { useState } from 'react';

export interface FilterState {
  industries: string[];
  gradeLevel: string;
  duration: string;
  search: string;
}

interface SessionFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  sessionCount: number;
  totalCount: number;
}

const INDUSTRIES = [
  'Agriculture',
  'Arts/Culture',
  'Aviation/Aerospace',
  'Business',
  'Construction',
  'Energy',
  'Environment',
  'Food Processing',
  'Forestry',
  'Health/Wellness',
  'Horticulture',
  'Hospitality/Tourism',
  'ICT',
  'Justice/Emergency',
  'Manufacturing',
  'Mining',
  'Non-Profit/Education',
  'Sports',
  'Transportation'
];

const GRADE_LEVELS = [
  { value: '', label: 'All Grades' },
  { value: '9-10', label: 'Grades 9-10' },
  { value: '11-12', label: 'Grades 11-12' },
];

const DURATIONS = [
  { value: '', label: 'All Durations' },
  { value: 'under-20', label: 'Under 20 min' },
  { value: '20-30', label: '20-30 min' },
  { value: 'over-30', label: 'Over 30 min' },
];

export default function SessionFilters({
  filters,
  onFilterChange,
  sessionCount,
  totalCount,
}: SessionFiltersProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const hasActiveFilters = filters.industries.length > 0 || filters.gradeLevel || filters.duration || filters.search;

  const handleReset = () => {
    onFilterChange({
      industries: [],
      gradeLevel: '',
      duration: '',
      search: '',
    });
  };

  const removeIndustry = (industry: string) => {
    onFilterChange({
      ...filters,
      industries: filters.industries.filter(i => i !== industry),
    });
  };

  const toggleIndustry = (industry: string) => {
    const isSelected = filters.industries.includes(industry);
    const newIndustries = isSelected
      ? filters.industries.filter(i => i !== industry)
      : [...filters.industries, industry];
    onFilterChange({ ...filters, industries: newIndustries });
  };

  const activeFilterCount =
    filters.industries.length +
    (filters.gradeLevel ? 1 : 0) +
    (filters.duration ? 1 : 0);

  const totalActiveCount = activeFilterCount + (filters.search ? 1 : 0);

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-4 md:px-8 lg:px-16 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Top Row: Filter Button, Search, Results Count */}
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              {/* Filter Toggle Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
                  ${activeFilterCount > 0
                    ? 'bg-blue text-white hover:bg-blue/90'
                    : 'bg-white border-2 border-blue text-blue hover:bg-blue/5'
                  }
                `}
                aria-expanded={isExpanded}
                aria-controls="filter-panel"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                </svg>
                Filter Sessions
                {activeFilterCount > 0 && (
                  <span className={`
                    text-xs px-1.5 py-0.5 rounded-full font-bold
                    ${activeFilterCount > 0 ? 'bg-white text-blue' : 'bg-blue text-white'}
                  `}>
                    {activeFilterCount}
                  </span>
                )}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search sessions..."
                  value={filters.search}
                  onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
                  className="py-2 pr-4 border border-gray-300 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                  style={{ paddingLeft: '4rem' }}
                  aria-label="Search sessions"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              Showing <span className="font-semibold">{sessionCount}</span> of <span className="font-semibold">{totalCount}</span> sessions
            </div>
          </div>

          {/* Expandable Filter Panel */}
          <div
            id="filter-panel"
            className={`
              overflow-hidden transition-all duration-300 ease-out
              ${isExpanded ? 'max-h-[500px] opacity-100 mb-3' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              {/* Industries */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase text-gray-500 mb-3 tracking-wider">INDUSTRIES</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onFilterChange({ ...filters, industries: [] })}
                    className={`
                      px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                      ${filters.industries.length === 0
                        ? 'bg-blue text-white shadow-md'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
                      }
                    `}
                  >
                    All Industries
                  </button>
                  {INDUSTRIES.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => toggleIndustry(industry)}
                      className={`
                        px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                        ${filters.industries.includes(industry)
                          ? 'bg-blue text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
                        }
                      `}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grade Level */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase text-gray-500 mb-3 tracking-wider">GRADE LEVEL</h3>
                <div className="flex flex-wrap gap-2">
                  {GRADE_LEVELS.map((grade) => (
                    <button
                      key={grade.value}
                      onClick={() => onFilterChange({ ...filters, gradeLevel: grade.value })}
                      className={`
                        px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                        ${filters.gradeLevel === grade.value
                          ? 'bg-blue text-white shadow-md'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
                        }
                      `}
                    >
                      {grade.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <h3 className="text-xs font-bold uppercase text-gray-500 mb-3 tracking-wider">DURATION</h3>
                <div className="flex flex-wrap gap-2">
                  {DURATIONS.map((duration) => (
                    <button
                      key={duration.value}
                      onClick={() => onFilterChange({ ...filters, duration: duration.value })}
                      className={`
                        px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                        ${filters.duration === duration.value
                          ? 'bg-blue text-white shadow-md'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
                        }
                      `}
                    >
                      {duration.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Active Filter Pills - Always Visible When Filters Applied */}
          {activeFilterCount > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-gray-500 font-medium">Active:</span>
              {filters.industries.map(industry => (
                <span key={industry} className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue/10 text-blue rounded-full text-xs font-medium">
                  {industry}
                  <button
                    onClick={() => removeIndustry(industry)}
                    className="hover:text-blue/70 transition-colors"
                    aria-label={`Remove ${industry} filter`}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              ))}
              {filters.gradeLevel && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue/10 text-blue rounded-full text-xs font-medium">
                  {GRADE_LEVELS.find(g => g.value === filters.gradeLevel)?.label}
                  <button
                    onClick={() => onFilterChange({ ...filters, gradeLevel: '' })}
                    className="hover:text-blue/70 transition-colors"
                    aria-label="Remove grade level filter"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              )}
              {filters.duration && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue/10 text-blue rounded-full text-xs font-medium">
                  {DURATIONS.find(d => d.value === filters.duration)?.label}
                  <button
                    onClick={() => onFilterChange({ ...filters, duration: '' })}
                    className="hover:text-blue/70 transition-colors"
                    aria-label="Remove duration filter"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              )}
              <button
                onClick={handleReset}
                className="text-xs text-blue hover:text-blue/70 font-medium ml-2"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden gap-3 items-center">
          {/* Filter Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className={`
              flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent
              ${activeFilterCount > 0
                ? 'bg-blue text-white'
                : 'border border-gray-300 text-navy bg-white hover:bg-gray-50'
              }
            `}
            aria-label="Open filters"
          >
            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className={`
                  ml-1 px-2 py-0.5 rounded-full text-xs font-semibold
                  ${activeFilterCount > 0 ? 'bg-white text-blue' : 'bg-blue text-white'}
                `}>
                  {activeFilterCount}
                </span>
              )}
            </div>
          </button>

          {/* Search input on mobile */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search..."
              value={filters.search}
              onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
              aria-label="Search sessions"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Mobile: Active Filter Pills + Results Count */}
        <div className="md:hidden mt-3">
          {activeFilterCount > 0 && (
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="text-xs text-gray-500 font-medium">Active:</span>
              {filters.industries.map(industry => (
                <span key={industry} className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-blue/10 text-blue rounded-full text-xs font-medium">
                  {industry}
                  <button
                    onClick={() => removeIndustry(industry)}
                    className="hover:text-blue/70 transition-colors"
                    aria-label={`Remove ${industry} filter`}
                  >
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              ))}
              {filters.gradeLevel && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-blue/10 text-blue rounded-full text-xs font-medium">
                  {GRADE_LEVELS.find(g => g.value === filters.gradeLevel)?.label}
                  <button
                    onClick={() => onFilterChange({ ...filters, gradeLevel: '' })}
                    className="hover:text-blue/70 transition-colors"
                  >
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </span>
              )}
              {filters.duration && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-blue/10 text-blue rounded-full text-xs font-medium">
                  {DURATIONS.find(d => d.value === filters.duration)?.label}
                  <button
                    onClick={() => onFilterChange({ ...filters, duration: '' })}
                    className="hover:text-blue/70 transition-colors"
                  >
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </span>
              )}
              <button
                onClick={handleReset}
                className="text-xs text-blue hover:text-blue/70 font-medium"
              >
                Clear
              </button>
            </div>
          )}
          <div className="text-xs text-gray-500">
            Showing {sessionCount} of {totalCount} sessions
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 md:hidden animate-slideUp max-h-[85vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Filter sessions"
          >
            {/* Drawer Handle */}
            <div className="flex justify-center pt-3 pb-2 sticky top-0 bg-white">
              <div className="w-12 h-1 bg-gray-300 rounded-full" aria-hidden="true" />
            </div>

            {/* Drawer Content */}
            <div className="px-6 pb-6 relative">
              {/* Close Button */}
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close filters"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-lg font-bold text-navy mb-4">Filter Sessions</h2>

              <div className="space-y-6">
                {/* Industries Section */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-3 tracking-wider">
                    INDUSTRIES
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => onFilterChange({ ...filters, industries: [] })}
                      className={`
                        px-3 py-2 rounded-full text-sm font-medium transition-all duration-200
                        ${filters.industries.length === 0
                          ? 'bg-blue text-white shadow-md'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }
                      `}
                    >
                      All Industries
                    </button>
                    {INDUSTRIES.map((industry) => (
                      <button
                        key={industry}
                        onClick={() => toggleIndustry(industry)}
                        className={`
                          px-3 py-2 rounded-full text-sm font-medium transition-all duration-200
                          ${filters.industries.includes(industry)
                            ? 'bg-blue text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }
                        `}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grade Level Section */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-3 tracking-wider">
                    GRADE LEVEL
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {GRADE_LEVELS.map((grade) => (
                      <button
                        key={grade.value}
                        onClick={() => onFilterChange({ ...filters, gradeLevel: grade.value })}
                        className={`
                          px-3 py-2 rounded-full text-sm font-medium transition-all duration-200
                          ${filters.gradeLevel === grade.value
                            ? 'bg-blue text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }
                        `}
                      >
                        {grade.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration Section */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-3 tracking-wider">
                    DURATION
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {DURATIONS.map((duration) => (
                      <button
                        key={duration.value}
                        onClick={() => onFilterChange({ ...filters, duration: duration.value })}
                        className={`
                          px-3 py-2 rounded-full text-sm font-medium transition-all duration-200
                          ${filters.duration === duration.value
                            ? 'bg-blue text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }
                        `}
                      >
                        {duration.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleReset}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-sm font-medium text-navy bg-white hover:bg-gray-50 transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex-1 px-4 py-3 rounded-md text-sm font-medium text-white bg-blue hover:bg-opacity-90 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Add slide-up animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
