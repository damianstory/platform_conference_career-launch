'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useRegistrationForm, UserType } from '@/lib/hooks/useRegistrationForm';
import { ONTARIO_BOARDS, SCHOOLS_BY_BOARD, CLASS_SIZES, GRADE_LEVELS } from '@/lib/mock-data/registration';

// Hook to detect mobile screen size
function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
}

interface InlineRegistrationFlowProps {
  sessionId: string;
  sessionTitle: string;
  onRegistrationComplete: (data: { userType: UserType }) => void;
  onCancel: () => void;
}

type EducatorScreen = 'user-type' | 'email' | 'board' | 'school' | 'class-size' | 'grade' | 'confirm';
type StudentScreen = 'user-type' | 'board' | 'school' | 'grade' | 'confirm';
type Screen = EducatorScreen | StudentScreen;

// Cookie helpers
const COOKIE_NAME = 'clp_registration';

function getCookie(): { email?: string; boardId?: string; schoolId?: string; classSize?: string; gradeLevel?: string } | null {
  if (typeof document === 'undefined') return null;
  const cookie = document.cookie.split('; ').find(row => row.startsWith(`${COOKIE_NAME}=`));
  if (!cookie) return null;
  try {
    return JSON.parse(decodeURIComponent(cookie.split('=')[1]));
  } catch {
    return null;
  }
}

// Short labels for class sizes (for button grid)
const CLASS_SIZE_SHORT_LABELS: Record<string, string> = {
  'exploring-solo': 'Solo',
  'less-than-25': '<25',
  '25-to-35': '25-35',
  'large-group': '35+',
  'assembly': '100+',
};

// Get question label for each screen
function getQuestionLabel(screen: Screen, userType: UserType | null): string {
  switch (screen) {
    case 'email':
      return "What's your email?";
    case 'board':
      return userType === 'educator' ? 'What school board?' : 'What school board do you attend?';
    case 'school':
      return userType === 'educator' ? 'What school?' : 'What school do you attend?';
    case 'class-size':
      return 'How many students are watching?';
    case 'grade':
      return userType === 'educator' ? 'What grade are they in?' : 'What grade are you in?';
    default:
      return '';
  }
}

export default function InlineRegistrationFlow({
  sessionId,
  sessionTitle,
  onRegistrationComplete,
  onCancel,
}: InlineRegistrationFlowProps) {
  const {
    userType,
    setUserType,
    formData,
    errors,
    updateField,
    submitForm,
    isFormValid,
    setHoneypot,
    resetFormTimestamp,
  } = useRegistrationForm();

  const [currentScreen, setCurrentScreen] = useState<Screen>('user-type');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasCheckedCookie, setHasCheckedCookie] = useState(false);
  const [cookieData, setCookieData] = useState<ReturnType<typeof getCookie>>(null);
  const [showWelcomeBack, setShowWelcomeBack] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'forward' | 'backward'>('forward');

  // Detect mobile for responsive layout
  const isMobile = useIsMobile();

  // Check for returning user cookie on mount (run only once)
  useEffect(() => {
    resetFormTimestamp();
    const cookie = getCookie();
    if (cookie && cookie.email) {
      setCookieData(cookie);
      // Pre-fill form data
      if (cookie.email) updateField('email', cookie.email);
      if (cookie.boardId) updateField('boardId', cookie.boardId);
      if (cookie.schoolId) updateField('schoolId', cookie.schoolId);
      if (cookie.classSize) updateField('classSize', cookie.classSize);
      if (cookie.gradeLevel) updateField('gradeLevel', cookie.gradeLevel);
    }
    setHasCheckedCookie(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount

  // Get schools for selected board
  const availableSchools = formData.boardId && formData.boardId !== 'guest'
    ? SCHOOLS_BY_BOARD[formData.boardId] || []
    : [];

  // Get screen flow based on user type
  const getScreens = useCallback((): Screen[] => {
    if (userType === 'educator') {
      return ['user-type', 'email', 'board', 'school', 'class-size', 'grade'];
    } else if (userType === 'student') {
      return ['user-type', 'board', 'school', 'grade'];
    }
    return ['user-type'];
  }, [userType]);

  const screens = getScreens();
  const currentIndex = screens.indexOf(currentScreen);
  const totalSteps = userType ? screens.length - 1 : 1; // Exclude user-type from step count

  // Check if expanded (user type selected and not on user-type screen) - ONLY on mobile
  const isExpanded = isMobile && userType && currentScreen !== 'user-type' && !showWelcomeBack;

  // Check if showing form inside container (desktop) or in expansion panel (mobile)
  const showFormInContainer = !isMobile && userType && currentScreen !== 'user-type' && !showWelcomeBack;

  // Navigation
  const goToScreen = useCallback((screen: Screen, direction: 'forward' | 'backward') => {
    setAnimationDirection(direction);
    setCurrentScreen(screen);
  }, []);

  const goBack = useCallback(() => {
    if (currentIndex > 0) {
      goToScreen(screens[currentIndex - 1], 'backward');
    } else if (currentScreen === 'user-type') {
      onCancel();
    }
  }, [currentIndex, currentScreen, screens, goToScreen, onCancel]);

  const goNext = useCallback(() => {
    if (currentIndex < screens.length - 1) {
      goToScreen(screens[currentIndex + 1], 'forward');
    }
  }, [currentIndex, screens, goToScreen]);

  // Handle user type selection
  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);

    // Check if returning educator with cookie
    if (type === 'educator' && cookieData && cookieData.email) {
      setShowWelcomeBack(true);
      setCurrentScreen('confirm');
    } else {
      // Go to first form screen
      const nextScreen = type === 'educator' ? 'email' : 'board';
      goToScreen(nextScreen, 'forward');
    }
  };

  // Handle welcome back actions
  const handleContinueWithSaved = async () => {
    await handleSubmit();
  };

  const handleEditSaved = () => {
    setShowWelcomeBack(false);
    goToScreen('email', 'forward');
  };

  // Validate current screen
  const canProceed = useCallback((): boolean => {
    switch (currentScreen) {
      case 'email':
        return formData.email.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      case 'board':
        return formData.boardId !== '';
      case 'school':
        return formData.schoolId !== '';
      case 'class-size':
        return formData.classSize !== '';
      case 'grade':
        return formData.gradeLevel !== '';
      default:
        return true;
    }
  }, [currentScreen, formData]);

  // Submit form
  const handleSubmit = async () => {
    if (!isFormValid()) return;

    setIsSubmitting(true);
    const success = await submitForm(sessionId, sessionTitle);

    if (success) {
      onRegistrationComplete({ userType });
    } else {
      setIsSubmitting(false);
      // TODO: Show error state
    }
  };

  // Handle continue button
  const handleContinue = () => {
    if (currentScreen === 'grade') {
      handleSubmit();
    } else {
      goNext();
    }
  };

  // Check if on last screen
  const isLastScreen = currentScreen === 'grade';

  // Don't render until we've checked for cookies
  if (!hasCheckedCookie) return null;

  return (
    <>
      {/* Gradient Container - Full height when showing user-type, shrinks to 142px when expanded */}
      <div className={`
        relative overflow-hidden rounded-lg
        bg-gradient-to-br from-blue to-navy
        transition-all duration-300 ease-in-out
        ${isExpanded ? 'h-[142px]' : 'aspect-video'}
      `}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 md:p-6">

          {/* User Type Selection Screen */}
          {currentScreen === 'user-type' && !showWelcomeBack && (
            <div className="text-center w-full max-w-sm animate-fade-in">
              <h3 className="hidden md:block text-lg font-semibold mb-6">Who&apos;s watching today?</h3>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => handleUserTypeSelect('educator')}
                  className="min-w-[120px] py-3 px-6 rounded-lg text-sm font-medium transition-all
                    bg-white/90 text-navy hover:bg-white hover:scale-[1.02]
                    flex items-center justify-center"
                >
                  Educator
                </button>
                <button
                  onClick={() => handleUserTypeSelect('student')}
                  className="min-w-[120px] py-3 px-6 rounded-lg text-sm font-medium transition-all
                    bg-white/90 text-navy hover:bg-white hover:scale-[1.02]
                    flex items-center justify-center"
                >
                  Student
                </button>
              </div>
            </div>
          )}

          {/* Welcome Back Screen (Returning Educator) */}
          {showWelcomeBack && cookieData && (
            <div className="text-center w-full max-w-sm animate-fade-in">
              <h3 className="text-base md:text-lg font-semibold mb-2">Welcome back!</h3>
              <p className="text-sm text-light-blue mb-1">{cookieData.email}</p>
              <p className="text-xs text-white/70 mb-4">
                {ONTARIO_BOARDS.find(b => b.id === cookieData.boardId)?.name}
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={handleEditSaved}
                  className="px-4 py-2 rounded-lg font-medium transition-colors
                    border border-white/50 text-white hover:bg-white/10"
                >
                  Edit
                </button>
                <button
                  onClick={handleContinueWithSaved}
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-lg font-medium transition-colors
                    bg-white text-navy hover:bg-light-blue disabled:opacity-50"
                >
                  {isSubmitting ? 'Starting...' : 'Continue'}
                </button>
              </div>
            </div>
          )}

          {/* Progress Info - shown when expanded (mobile only) */}
          {isExpanded && (
            <div className="flex flex-col items-center justify-center gap-3">
              {/* Progress Dots */}
              <div className="flex justify-center gap-1">
                {screens.slice(1).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index < currentIndex ? 'bg-white' : index === currentIndex - 1 ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Step Text */}
              <p className="text-xs text-white/70">
                Step {currentIndex} of {totalSteps}
              </p>

              {/* Current Question Label */}
              <h3 className="text-base font-medium text-white text-center">
                {getQuestionLabel(currentScreen, userType)}
              </h3>
            </div>
          )}

          {/* Desktop Form Content - shown inside container on larger screens */}
          {showFormInContainer && (
            <div className="flex flex-col items-center justify-center w-full max-w-sm animate-fade-in">
              {/* Progress Dots */}
              <div className="flex justify-center gap-1.5 mb-3">
                {screens.slice(1).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index < currentIndex ? 'bg-white' : index === currentIndex - 1 ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Question Label */}
              <label className="block text-sm md:text-base font-medium mb-3 text-center">
                {getQuestionLabel(currentScreen, userType)}
              </label>

              {/* Email Input */}
              {currentScreen === 'email' && (
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="jane.smith@board.ca"
                  autoFocus
                  className="w-full px-4 py-3 rounded-lg text-base
                    bg-white text-navy placeholder-neutral-400
                    focus:outline-none focus:ring-2 focus:ring-light-blue"
                  style={{ fontSize: '16px' }}
                />
              )}

              {/* Board Select */}
              {currentScreen === 'board' && (
                <select
                  value={formData.boardId}
                  onChange={(e) => updateField('boardId', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg text-base
                    bg-white text-navy
                    focus:outline-none focus:ring-2 focus:ring-light-blue"
                  style={{ fontSize: '16px' }}
                >
                  <option value="">Select board...</option>
                  {ONTARIO_BOARDS.map(board => (
                    <option key={board.id} value={board.id}>{board.name}</option>
                  ))}
                </select>
              )}

              {/* School Select */}
              {currentScreen === 'school' && (
                <select
                  value={formData.schoolId}
                  onChange={(e) => updateField('schoolId', e.target.value)}
                  disabled={formData.boardId === 'guest'}
                  className="w-full px-4 py-3 rounded-lg text-base
                    bg-white text-navy
                    focus:outline-none focus:ring-2 focus:ring-light-blue
                    disabled:bg-gray-100 disabled:text-gray-500"
                  style={{ fontSize: '16px' }}
                >
                  {formData.boardId === 'guest' ? (
                    <option value="not-listed">Not Listed</option>
                  ) : (
                    <>
                      <option value="">Select school...</option>
                      {availableSchools.map(school => (
                        <option key={school.id} value={school.id}>{school.name}</option>
                      ))}
                    </>
                  )}
                </select>
              )}

              {/* Class Size Buttons */}
              {currentScreen === 'class-size' && (
                <div className="grid grid-cols-3 gap-2 w-full">
                  {CLASS_SIZES.map(size => (
                    <button
                      key={size.id}
                      onClick={() => updateField('classSize', size.id)}
                      className={`py-2 px-2 rounded-lg text-xs md:text-sm font-medium transition-colors
                        ${formData.classSize === size.id
                          ? 'bg-white text-navy'
                          : 'bg-white/20 text-white hover:bg-white/30'}`}
                    >
                      {CLASS_SIZE_SHORT_LABELS[size.id]}
                    </button>
                  ))}
                </div>
              )}

              {/* Grade Level Buttons */}
              {currentScreen === 'grade' && (
                <div className="flex flex-wrap justify-center gap-2">
                  {GRADE_LEVELS.map(grade => (
                    <button
                      key={grade.id}
                      onClick={() => updateField('gradeLevel', grade.id)}
                      className={`w-10 h-10 md:w-11 md:h-11 rounded-lg font-medium transition-colors
                        ${formData.gradeLevel === grade.id
                          ? 'bg-white text-navy'
                          : 'bg-white/20 text-white hover:bg-white/30'}`}
                    >
                      {grade.id === 'mixed' ? 'Mix' : grade.id}
                    </button>
                  ))}
                </div>
              )}

              {/* Error Messages */}
              {errors.email && currentScreen === 'email' && (
                <p className="text-red-300 text-xs mt-2">{errors.email}</p>
              )}

              {/* Navigation - inside container on desktop */}
              <div className="flex justify-between items-center w-full mt-4">
                <button
                  onClick={goBack}
                  className="text-white/70 hover:text-white text-sm flex items-center gap-1 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleContinue}
                  disabled={!canProceed() || isSubmitting}
                  className="bg-white text-navy px-5 py-2 rounded-lg font-medium
                    disabled:opacity-50 disabled:cursor-not-allowed
                    hover:bg-light-blue transition-colors text-sm md:text-base"
                >
                  {isSubmitting ? 'Starting...' : isLastScreen ? 'Start Video' : 'Continue'}
                </button>
              </div>
            </div>
          )}

          {/* Cancel on user type screen */}
          {currentScreen === 'user-type' && !showWelcomeBack && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <button
                onClick={onCancel}
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Expansion Panel - only shown when expanded */}
      {isExpanded && (
        <div className="bg-white rounded-t-3xl -mt-2 p-6 shadow-lg animate-slide-up">

          {/* Email Screen */}
          {currentScreen === 'email' && (
            <div className="w-full">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="jane.smith@board.ca"
                autoFocus
                className="w-full h-12 px-4 rounded-lg text-base
                  bg-white text-navy placeholder-neutral-400 border border-gray-300
                  focus:outline-none focus:ring-2 focus:ring-blue"
                style={{ fontSize: '16px' }}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-2">{errors.email}</p>
              )}
            </div>
          )}

          {/* Board Screen */}
          {currentScreen === 'board' && (
            <div className="w-full">
              <select
                value={formData.boardId}
                onChange={(e) => updateField('boardId', e.target.value)}
                className="w-full h-12 px-4 rounded-lg text-base
                  bg-white text-navy border border-gray-300
                  focus:outline-none focus:ring-2 focus:ring-blue"
                style={{ fontSize: '16px' }}
              >
                <option value="">Select board...</option>
                {ONTARIO_BOARDS.map(board => (
                  <option key={board.id} value={board.id}>{board.name}</option>
                ))}
              </select>
            </div>
          )}

          {/* School Screen */}
          {currentScreen === 'school' && (
            <div className="w-full">
              <select
                value={formData.schoolId}
                onChange={(e) => updateField('schoolId', e.target.value)}
                disabled={formData.boardId === 'guest'}
                className="w-full h-12 px-4 rounded-lg text-base
                  bg-white text-navy border border-gray-300
                  focus:outline-none focus:ring-2 focus:ring-blue
                  disabled:bg-gray-100 disabled:text-gray-500"
                style={{ fontSize: '16px' }}
              >
                {formData.boardId === 'guest' ? (
                  <option value="not-listed">Not Listed</option>
                ) : (
                  <>
                    <option value="">Select school...</option>
                    {availableSchools.map(school => (
                      <option key={school.id} value={school.id}>{school.name}</option>
                    ))}
                  </>
                )}
              </select>
            </div>
          )}

          {/* Class Size Screen (Educator Only) */}
          {currentScreen === 'class-size' && (
            <div className="w-full">
              <div className="grid grid-cols-3 gap-3">
                {CLASS_SIZES.map(size => (
                  <button
                    key={size.id}
                    onClick={() => updateField('classSize', size.id)}
                    className={`h-12 rounded-lg text-sm font-medium transition-all
                      ${formData.classSize === size.id
                        ? 'bg-blue text-white ring-2 ring-blue'
                        : 'bg-gray-100 text-navy hover:bg-gray-200'}`}
                  >
                    {CLASS_SIZE_SHORT_LABELS[size.id]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Grade Level Screen */}
          {currentScreen === 'grade' && (
            <div className="w-full">
              <div className="flex flex-wrap gap-3 justify-center">
                {GRADE_LEVELS.map(grade => (
                  <button
                    key={grade.id}
                    onClick={() => updateField('gradeLevel', grade.id)}
                    className={`w-12 h-12 rounded-lg font-medium transition-all
                      ${formData.gradeLevel === grade.id
                        ? 'bg-blue text-white ring-2 ring-blue'
                        : 'bg-gray-100 text-navy hover:bg-gray-200'}`}
                  >
                    {grade.id === 'mixed' ? 'Mix' : grade.id}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Footer */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={goBack}
              className="text-navy/70 hover:text-navy text-sm flex items-center justify-center gap-1 transition-colors h-12 px-4"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            <button
              onClick={handleContinue}
              disabled={!canProceed() || isSubmitting}
              className="bg-blue text-white h-12 px-6 rounded-lg font-medium
                disabled:opacity-50 disabled:cursor-not-allowed
                hover:bg-opacity-90 transition-colors text-base"
            >
              {isSubmitting ? 'Starting...' : isLastScreen ? 'Start Video' : 'Continue'}
            </button>
          </div>
        </div>
      )}

      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="website"
        value=""
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ position: 'absolute', left: '-9999px' }}
        tabIndex={-1}
        autoComplete="off"
      />
    </>
  );
}
