---
title: Engagement Quiz - Implementation Guide
description: Developer handoff with technical specifications, code patterns, and integration requirements
feature: engagement-quiz
last-updated: 2025-11-26
version: 1.0
related-files:
  - README.md
  - screen-states.md
  - interactions.md
  - accessibility.md
status: approved
---

# Implementation Guide

## Table of Contents

1. [Technical Stack](#technical-stack)
2. [File Structure](#file-structure)
3. [Type Definitions](#type-definitions)
4. [Component Architecture](#component-architecture)
5. [State Management](#state-management)
6. [Quiz Logic](#quiz-logic)
7. [Badge Download System](#badge-download-system)
8. [Analytics Integration](#analytics-integration)
9. [Performance Optimization](#performance-optimization)
10. [Testing Strategy](#testing-strategy)

---

## Technical Stack

### Dependencies

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "tailwindcss": "^3.3.0"
  }
}
```

**Note:** All dependencies already exist in the platform. No new packages required.

### Platform Integration Points

- **Design System**: `app/globals.css` + `styles/design-tokens.css`
- **Component Patterns**: Follows existing `SessionSlides.tsx` modal pattern
- **Analytics**: Extends `lib/analytics.ts` with `QuizAnalytics` namespace
- **Type System**: Extends `types/booth.ts` with quiz types

---

## File Structure

```
/components/booths/sections/
├── EngagementActivity.tsx (UPDATE: Conditional rendering)
└── SkillsGapQuiz.tsx (NEW: Main quiz component)

/lib/
├── analytics.ts (UPDATE: Add QuizAnalytics namespace)
└── utils/
    ├── quizHelpers.ts (NEW: Shuffle, scoring, validation)
    └── badgeDownload.ts (NEW: Image download logic)

/types/
└── booth.ts (UPDATE: Add QuizData, QuizQuestion interfaces)

/data/
└── sample-booths.ts (UPDATE: Add quizData to platinum booths)

/public/
└── badges/
    ├── [booth-slug]-badge.png (NEW: Sponsor badge images)
    └── README.md (NEW: Badge requirements documentation)
```

---

## Type Definitions

### Update `/types/booth.ts`

```typescript
// Add to existing file

/**
 * Individual quiz question with multiple choice options
 */
export interface QuizQuestion {
  /** Unique identifier for analytics tracking */
  id: string

  /** Question text displayed to student */
  question: string

  /** Four answer options (A, B, C, D) */
  options: [string, string, string, string]

  /** Index of correct answer (0-3) */
  correctAnswer: 0 | 1 | 2 | 3

  /** Explanation shown after answer selection */
  explanation: string

  /** Optional category for grouped analytics */
  category?: string
}

/**
 * Complete quiz configuration for a sponsor booth
 */
export interface QuizData {
  /** Quiz title (same as engagement activity title) */
  title: string

  /** Brief description of quiz content and purpose */
  description: string

  /** Array of 10-15 questions (randomized on quiz start) */
  questions: QuizQuestion[]

  /** Minimum score to "pass" (0-100, typically 70) */
  passingScore: number

  /** Optional badge configuration */
  badgeConfig?: {
    /** Filename in /public/badges/ (without .png extension) */
    imageFilename: string
  }
}

/**
 * Update existing EngagementActivityData interface
 */
export interface EngagementActivityData {
  /** URL for iframe embed (optional, used when embedType === 'iframe') */
  embedUrl?: string

  /** Activity title */
  title: string

  /** Activity description */
  description: string

  /** Optional prize information */
  prize?: {
    title: string
    description: string
  }

  /** Estimated duration */
  duration?: string

  /** Type of engagement activity */
  embedType: 'iframe' | 'skills-gap-quiz' | 'google-form'

  /** Quiz data (required when embedType === 'skills-gap-quiz') */
  quizData?: QuizData
}
```

---

## Component Architecture

### Main Component: `/components/booths/sections/SkillsGapQuiz.tsx`

```typescript
'use client'

import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import {
  Maximize2,
  X,
  Check,
  AlertCircle,
  Download,
  RotateCcw,
  Loader2,
  ArrowRight,
  CheckCircle,
  XCircle,
} from 'lucide-react'
import { QuizData, QuizQuestion } from '@/types/booth'
import { QuizAnalytics } from '@/lib/analytics'
import { shuffleQuestions, calculateScore, formatDuration } from '@/lib/utils/quizHelpers'
import { downloadBadge } from '@/lib/utils/badgeDownload'

interface SkillsGapQuizProps {
  quizData: QuizData
  boothId: string
  boothName: string
}

type QuizState = 'start' | 'in-progress' | 'results'

export default function SkillsGapQuiz({
  quizData,
  boothId,
  boothName,
}: SkillsGapQuizProps) {
  // State management
  const [quizState, setQuizState] = useState<QuizState>('start')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Map<string, number>>(new Map())
  const [showFeedback, setShowFeedback] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([])
  const [startTime, setStartTime] = useState<number>(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [attemptNumber, setAttemptNumber] = useState(1)
  const [bestScore, setBestScore] = useState(0)

  // Refs
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  // Initialize component
  useEffect(() => {
    setMounted(true)
  }, [])

  // Shuffle questions on quiz start
  const handleStartQuiz = () => {
    const shuffled = shuffleQuestions(quizData.questions)
    setShuffledQuestions(shuffled)
    setStartTime(Date.now())
    setQuizState('in-progress')
    setCurrentQuestionIndex(0)
    setSelectedAnswers(new Map())
    setShowFeedback(false)

    // Analytics
    QuizAnalytics.started(boothId, boothName, quizData.title)
  }

  // Handle answer selection
  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return // Prevent changing answer after feedback shown

    const currentQuestion = shuffledQuestions[currentQuestionIndex]
    const newAnswers = new Map(selectedAnswers)
    newAnswers.set(currentQuestion.id, answerIndex)
    setSelectedAnswers(newAnswers)
  }

  // Handle next question
  const handleNextQuestion = () => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex]
    const selectedAnswer = selectedAnswers.get(currentQuestion.id)

    if (selectedAnswer === undefined) return

    if (!showFeedback) {
      // Show feedback first
      setShowFeedback(true)

      // Analytics
      QuizAnalytics.questionAnswered(
        boothId,
        currentQuestion.id,
        selectedAnswer === currentQuestion.correctAnswer,
        attemptNumber
      )
    } else {
      // Move to next question or results
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setShowFeedback(false)
      } else {
        // Quiz complete
        const duration = Math.floor((Date.now() - startTime) / 1000)
        const score = calculateScore(selectedAnswers, shuffledQuestions)
        const passed = score >= quizData.passingScore

        // Update best score
        if (score > bestScore) {
          setBestScore(score)
        }

        setQuizState('results')

        // Analytics
        QuizAnalytics.completed(boothId, boothName, score, passed, duration)
      }
    }
  }

  // Handle retake
  const handleRetake = () => {
    const previousScore = calculateScore(selectedAnswers, shuffledQuestions)
    setAttemptNumber(attemptNumber + 1)
    setQuizState('start')

    // Analytics
    QuizAnalytics.restarted(boothId, previousScore)
  }

  // Handle fullscreen toggle
  const handleFullscreenToggle = () => {
    if (isFullscreen) {
      setIsFullscreen(false)
      setTimeout(() => {
        previousFocusRef.current?.focus()
      }, 100)
    } else {
      previousFocusRef.current = document.activeElement as HTMLElement
      setIsFullscreen(true)
      document.body.style.overflow = 'hidden'

      setTimeout(() => {
        const closeButton = modalRef.current?.querySelector('[data-close-button]')
        ;(closeButton as HTMLElement)?.focus()
      }, 100)

      // Analytics
      QuizAnalytics.fullscreenToggled(boothId, true)
    }
  }

  // ESC key handler
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        handleFullscreenToggle()
      }
    }

    if (isFullscreen) {
      document.addEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = ''
    }
  }, [isFullscreen])

  // Render quiz content based on state
  const renderQuizContent = () => {
    if (quizState === 'start') {
      return <StartScreen quizData={quizData} onStart={handleStartQuiz} />
    }

    if (quizState === 'in-progress') {
      const currentQuestion = shuffledQuestions[currentQuestionIndex]
      const selectedAnswer = selectedAnswers.get(currentQuestion.id)

      return (
        <QuizQuestion
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          showFeedback={showFeedback}
          currentIndex={currentQuestionIndex}
          totalQuestions={shuffledQuestions.length}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNextQuestion}
        />
      )
    }

    if (quizState === 'results') {
      const score = calculateScore(selectedAnswers, shuffledQuestions)
      const duration = Math.floor((Date.now() - startTime) / 1000)
      const correctCount = Array.from(selectedAnswers.entries()).filter(
        ([questionId, answerIndex]) => {
          const question = shuffledQuestions.find((q) => q.id === questionId)
          return question && answerIndex === question.correctAnswer
        }
      ).length

      return (
        <ResultsScreen
          score={score}
          passingScore={quizData.passingScore}
          correctCount={correctCount}
          totalQuestions={shuffledQuestions.length}
          duration={duration}
          attemptNumber={attemptNumber}
          bestScore={bestScore}
          quizTitle={quizData.title}
          badgeConfig={quizData.badgeConfig}
          boothId={boothId}
          boothName={boothName}
          onRetake={handleRetake}
        />
      )
    }

    return null
  }

  // Embedded view
  const quizContainer = (
    <div
      className="bg-white rounded-xl shadow-[0_3px_10px_rgba(34,34,76,0.08),0_1px_3px_rgba(34,34,76,0.04)] border border-gray-200/50 overflow-hidden transition-all duration-200 hover:shadow-md"
      style={{ height: isFullscreen ? '100%' : '500px' }}
      role="region"
      aria-label={`${quizData.title} - Interactive Quiz`}
    >
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-bold text-navy truncate">{quizData.title}</h2>
        <button
          onClick={handleFullscreenToggle}
          className="p-2 hover:bg-neutral-1 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-primary-blue"
          aria-label="Expand quiz to fullscreen"
          aria-expanded={isFullscreen}
        >
          <Maximize2 className="w-4 h-4 text-neutral-4 hover:text-primary-blue transition-colors" />
        </button>
      </header>

      {/* Content */}
      <div className="quiz-content overflow-y-auto" style={{ height: 'calc(100% - 132px)' }}>
        {renderQuizContent()}
      </div>

      {/* Footer - rendered by child components */}
    </div>
  )

  // Fullscreen modal
  if (isFullscreen && mounted) {
    return (
      <>
        {quizContainer}
        {createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/90 flex flex-col animate-fade-in"
            onClick={handleFullscreenToggle}
          >
            {/* Modal Header */}
            <div className="p-4 bg-white/10 backdrop-blur-md flex items-center justify-between border-b border-white/20">
              <h2 className="text-body-1 font-bold text-navy">
                {quizData.title}
              </h2>
              <button
                data-close-button
                onClick={(e) => {
                  e.stopPropagation()
                  handleFullscreenToggle()
                }}
                className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all text-navy min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close fullscreen"
              >
                <X className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>

            {/* Modal Content */}
            <div
              ref={modalRef}
              className="flex-grow relative overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-4xl mx-auto p-8">
                {renderQuizContent()}
              </div>
            </div>
          </div>,
          document.body
        )}
      </>
    )
  }

  return quizContainer
}
```

### Sub-Components

Create separate components for each screen state in the same file:

```typescript
// StartScreen Component
function StartScreen({ quizData, onStart }: { quizData: QuizData; onStart: () => void }) {
  return (
    <div className="p-6 flex items-center justify-center h-full">
      <div className="bg-white rounded-xl p-8 max-w-md text-center shadow-md">
        <div className="text-4xl mb-4">🎯</div>
        <h3 className="text-header-4 text-navy mb-3">{quizData.title}</h3>
        <p className="text-body-2 text-neutral-5 mb-6">{quizData.description}</p>

        <ul className="space-y-3 mb-8 text-left">
          <li className="flex items-center gap-3 text-compact text-neutral-4">
            <span>📊</span>
            <span>{quizData.questions.length} Questions</span>
          </li>
          <li className="flex items-center gap-3 text-compact text-neutral-4">
            <span>⏱️</span>
            <span>8-10 minutes</span>
          </li>
          <li className="flex items-center gap-3 text-compact text-neutral-4">
            <span>🏆</span>
            <span>Earn achievement badge</span>
          </li>
        </ul>

        <button
          onClick={onStart}
          className="w-full btn-primary"
          aria-label="Start the quiz"
        >
          Start Quiz
          <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

// QuizQuestion Component
function QuizQuestion({
  question,
  selectedAnswer,
  showFeedback,
  currentIndex,
  totalQuestions,
  onAnswerSelect,
  onNext,
}: {
  question: QuizQuestion
  selectedAnswer: number | undefined
  showFeedback: boolean
  currentIndex: number
  totalQuestions: number
  onAnswerSelect: (index: number) => void
  onNext: () => void
}) {
  const progress = ((currentIndex + 1) / totalQuestions) * 100

  return (
    <div className="p-6">
      {/* Progress Bar */}
      <div className="mb-6">
        <div
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Quiz progress: ${currentIndex + 1} of ${totalQuestions} questions`}
          className="h-2 bg-neutral-1 rounded-full overflow-hidden"
        >
          <div
            className="h-full bg-gradient-to-r from-blue to-blue/80 transition-all duration-400 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-subtitle-1 text-neutral-4 text-right mt-1">
          Question {currentIndex + 1} of {totalQuestions}
        </p>
      </div>

      {/* Question */}
      <fieldset>
        <legend className="text-header-4 text-navy mb-6">{question.question}</legend>

        {/* Answer Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrect = index === question.correctAnswer
            const isWrong = showFeedback && isSelected && !isCorrect

            return (
              <button
                key={index}
                type="button"
                onClick={() => onAnswerSelect(index)}
                disabled={showFeedback}
                className={`
                  text-left p-4 rounded-lg border-2 transition-all duration-200
                  min-h-[80px] flex items-start gap-3
                  ${!showFeedback && !isSelected && 'border-neutral-2 bg-white hover:border-blue hover:bg-blue/5 hover:scale-102'}
                  ${!showFeedback && isSelected && 'border-blue bg-blue/10 border-[3px] shadow-[0_0_0_3px_rgba(0,146,255,0.12)]'}
                  ${showFeedback && isCorrect && 'bg-navy border-navy text-white'}
                  ${showFeedback && isWrong && 'bg-light-blue border-light-blue'}
                  ${showFeedback && !isSelected && !isCorrect && 'opacity-50'}
                `}
                aria-checked={isSelected}
              >
                <span
                  className={`
                    font-bold text-compact flex-shrink-0
                    ${!showFeedback && isSelected && 'text-blue'}
                    ${showFeedback && isCorrect && 'text-white'}
                    ${showFeedback && !isCorrect && 'text-navy'}
                  `}
                >
                  {String.fromCharCode(65 + index)}.
                </span>

                <span className="flex-1 text-compact">{option}</span>

                {/* Correct/Incorrect Icons */}
                {showFeedback && isCorrect && (
                  <Check className="w-5 h-5 text-green-500 bg-white rounded-full p-1 flex-shrink-0" aria-label="Correct answer" />
                )}
                {showFeedback && isWrong && (
                  <X className="w-5 h-5 text-red-500 bg-white rounded-full p-1 flex-shrink-0" aria-label="Incorrect answer" />
                )}
              </button>
            )
          })}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div
            role="status"
            aria-live="polite"
            className={`
              p-4 rounded-lg border-l-4 flex gap-3 animate-slide-down
              ${selectedAnswer === question.correctAnswer
                ? 'bg-green-50 border-green-500'
                : 'bg-red-50 border-red-500'
              }
            `}
          >
            {selectedAnswer === question.correctAnswer ? (
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" aria-hidden="true" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" aria-hidden="true" />
            )}
            <p className="text-compact text-neutral-5">
              <strong>
                {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect.'}
              </strong>{' '}
              {question.explanation}
            </p>
          </div>
        )}
      </fieldset>

      {/* Next Button (Footer) */}
      <div className="mt-6 pt-4 border-t border-neutral-2 flex justify-end">
        <button
          onClick={onNext}
          disabled={selectedAnswer === undefined}
          className="btn-primary disabled:bg-neutral-3 disabled:cursor-not-allowed disabled:opacity-60"
          aria-label={showFeedback ? 'Proceed to next question' : 'Submit answer and view feedback'}
        >
          {showFeedback
            ? currentIndex < totalQuestions - 1
              ? 'Next Question'
              : 'View Results'
            : 'Submit Answer'}
          <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

// ResultsScreen Component
function ResultsScreen({
  score,
  passingScore,
  correctCount,
  totalQuestions,
  duration,
  attemptNumber,
  bestScore,
  quizTitle,
  badgeConfig,
  boothId,
  boothName,
  onRetake,
}: {
  score: number
  passingScore: number
  correctCount: number
  totalQuestions: number
  duration: number
  attemptNumber: number
  bestScore: number
  quizTitle: string
  badgeConfig?: { imageFilename: string }
  boothId: string
  boothName: string
  onRetake: () => void
}) {
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'success'>('idle')
  const passed = score >= passingScore

  const handleDownloadBadge = async () => {
    if (!badgeConfig) return

    setDownloadState('loading')

    try {
      await downloadBadge(badgeConfig.imageFilename, quizTitle, score)
      setDownloadState('success')

      // Analytics
      QuizAnalytics.badgeDownloaded(boothId, boothName, score)

      setTimeout(() => {
        setDownloadState('idle')
      }, 2000)
    } catch (error) {
      console.error('Badge download failed:', error)
      setDownloadState('idle')
    }
  }

  return (
    <div className="p-6 flex items-center justify-center h-full">
      <div className="max-w-md w-full text-center">
        {/* Celebration Icon */}
        {passed && (
          <div className="text-5xl mb-4 animate-celebrate" aria-hidden="true">
            🎉
          </div>
        )}

        {/* Score */}
        <div className="mb-6">
          <div
            className={`text-[4rem] font-extrabold leading-none ${
              score >= 90
                ? 'text-green-600'
                : score >= passingScore
                ? 'text-blue'
                : score >= 50
                ? 'text-amber-500'
                : 'text-red-600'
            }`}
            aria-label={`Your score: ${score} percent`}
          >
            {score}%
          </div>
          <p className="text-body-1 text-neutral-4">Your Score</p>
        </div>

        {/* Performance Message */}
        <p className="text-body-2 text-neutral-5 mb-6 bg-white rounded-lg p-5 shadow-sm">
          {score >= 90
            ? "Outstanding! You're an expert in this field!"
            : passed
            ? "Great job! You've demonstrated strong knowledge."
            : score >= 50
            ? 'Good effort! Review the feedback and try again.'
            : 'Keep learning! Retake the quiz to improve your score.'}
        </p>

        {/* Stats Card */}
        <div className="bg-off-white border border-neutral-2 rounded-lg p-5 mb-6 text-left">
          <h4 className="font-semibold text-navy mb-3">Performance Breakdown</h4>
          <ul className="space-y-2 text-compact text-neutral-5">
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-green-600" aria-hidden="true" />
              <span>{correctCount} Correct</span>
            </li>
            <li className="flex items-center gap-3">
              <X className="w-4 h-4 text-red-600" aria-hidden="true" />
              <span>{totalQuestions - correctCount} Incorrect</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 flex items-center justify-center" aria-hidden="true">
                ⏱️
              </span>
              <span>{formatDuration(duration)}</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          {badgeConfig && passed && (
            <button
              onClick={handleDownloadBadge}
              disabled={downloadState === 'loading'}
              className={`btn-primary flex-1 ${
                downloadState === 'success' && 'bg-green-600 hover:bg-green-700'
              }`}
              aria-label="Download achievement badge as PNG image"
            >
              {downloadState === 'loading' && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
              )}
              {downloadState === 'success' && (
                <Check className="w-4 h-4 mr-2" aria-hidden="true" />
              )}
              {downloadState === 'idle' && (
                <Download className="w-4 h-4 mr-2" aria-hidden="true" />
              )}
              {downloadState === 'loading' && 'Generating...'}
              {downloadState === 'success' && 'Downloaded!'}
              {downloadState === 'idle' && 'Download Badge'}
            </button>
          )}

          <button
            onClick={onRetake}
            className="btn-secondary flex-1"
            aria-label="Retake quiz with new questions"
          >
            <RotateCcw className="w-4 h-4 mr-2" aria-hidden="true" />
            Retake Quiz
          </button>
        </div>

        {/* Footer Stats */}
        {attemptNumber > 1 && (
          <div className="text-subtitle-1 text-neutral-4 flex items-center justify-center gap-2">
            <span>
              Best Score: <strong className="text-blue">{bestScore}%</strong>
            </span>
            <span aria-hidden="true">•</span>
            <span>Attempt {attemptNumber}</span>
          </div>
        )}
      </div>
    </div>
  )
}
```

---

## State Management

### Local Component State

All quiz state is managed locally with React `useState`:

```typescript
// Quiz flow state
const [quizState, setQuizState] = useState<'start' | 'in-progress' | 'results'>('start')

// Question navigation
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

// Answer tracking (Map for O(1) lookup)
const [selectedAnswers, setSelectedAnswers] = useState<Map<string, number>>(new Map())

// UI state
const [showFeedback, setShowFeedback] = useState(false)
const [isFullscreen, setIsFullscreen] = useState(false)

// Quiz data
const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([])
const [startTime, setStartTime] = useState<number>(0)

// Attempt tracking
const [attemptNumber, setAttemptNumber] = useState(1)
const [bestScore, setBestScore] = useState(0)
```

**Why not global state (Context, Redux, Zustand)?**
- Quiz state is isolated to single component
- No cross-component communication needed
- Reduces complexity and bundle size
- Better performance (no unnecessary re-renders)

### Local Storage (Optional Enhancement)

Store quiz progress for session recovery:

```typescript
// Save progress on each answer
useEffect(() => {
  if (quizState === 'in-progress') {
    const progress = {
      boothId,
      quizTitle: quizData.title,
      currentQuestionIndex,
      selectedAnswers: Array.from(selectedAnswers.entries()),
      startTime,
      attemptNumber,
    }
    localStorage.setItem('quiz-progress', JSON.stringify(progress))
  }
}, [selectedAnswers, currentQuestionIndex])

// Restore on mount
useEffect(() => {
  const saved = localStorage.getItem('quiz-progress')
  if (saved) {
    const progress = JSON.parse(saved)
    if (progress.boothId === boothId && progress.quizTitle === quizData.title) {
      // Offer to resume
      setShowResumePrompt(true)
    }
  }
}, [])
```

---

## Quiz Logic

### `/lib/utils/quizHelpers.ts`

```typescript
import { QuizQuestion } from '@/types/booth'

/**
 * Shuffle questions using Fisher-Yates algorithm
 * Creates new array to avoid mutating original data
 */
export function shuffleQuestions(questions: QuizQuestion[]): QuizQuestion[] {
  const shuffled = [...questions]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

/**
 * Calculate score percentage based on correct answers
 * @returns Score as integer percentage (0-100)
 */
export function calculateScore(
  selectedAnswers: Map<string, number>,
  questions: QuizQuestion[]
): number {
  let correctCount = 0

  questions.forEach((question) => {
    const selectedAnswer = selectedAnswers.get(question.id)
    if (selectedAnswer !== undefined && selectedAnswer === question.correctAnswer) {
      correctCount++
    }
  })

  return Math.round((correctCount / questions.length) * 100)
}

/**
 * Format duration in seconds to readable string
 * Examples: "2 minutes 30 seconds", "45 seconds", "1 minute"
 */
export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60

  if (mins === 0) {
    return `${secs} second${secs !== 1 ? 's' : ''}`
  }

  if (secs === 0) {
    return `${mins} minute${mins !== 1 ? 's' : ''}`
  }

  return `${mins} minute${mins !== 1 ? 's' : ''} ${secs} second${secs !== 1 ? 's' : ''}`
}

/**
 * Validate quiz data structure
 * Throws error if invalid, returns true if valid
 */
export function validateQuizData(quizData: any): quizData is QuizData {
  if (!quizData || typeof quizData !== 'object') {
    throw new Error('Quiz data is missing or invalid')
  }

  if (!Array.isArray(quizData.questions) || quizData.questions.length < 10) {
    throw new Error('Quiz must have at least 10 questions')
  }

  if (quizData.questions.length > 15) {
    throw new Error('Quiz cannot have more than 15 questions')
  }

  quizData.questions.forEach((q: any, index: number) => {
    if (!q.id || !q.question || !Array.isArray(q.options)) {
      throw new Error(`Question ${index + 1} is invalid`)
    }

    if (q.options.length !== 4) {
      throw new Error(`Question ${index + 1} must have exactly 4 options`)
    }

    if (![0, 1, 2, 3].includes(q.correctAnswer)) {
      throw new Error(`Question ${index + 1} has invalid correctAnswer`)
    }

    if (!q.explanation || typeof q.explanation !== 'string') {
      throw new Error(`Question ${index + 1} is missing explanation`)
    }
  })

  return true
}
```

---

## Badge Download System

### `/lib/utils/badgeDownload.ts`

```typescript
/**
 * Download badge image from /public/badges/ directory
 * @param imageFilename - Filename without extension (e.g., 'energy-sector-badge')
 * @param quizTitle - Quiz title for download filename
 * @param score - Student's score to include in filename
 */
export async function downloadBadge(
  imageFilename: string,
  quizTitle: string,
  score: number
): Promise<void> {
  try {
    // Fetch badge image from public directory
    const response = await fetch(`/badges/${imageFilename}.png`)

    if (!response.ok) {
      throw new Error(`Badge image not found: ${imageFilename}.png`)
    }

    // Get image as blob
    const blob = await response.blob()

    // Create download link
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url

    // Format filename: quiz-title-badge-score.png
    const filename = `${quizTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')}-badge-${score}.png`
    link.download = filename

    // Trigger download
    document.body.appendChild(link)
    link.click()

    // Cleanup
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Badge download failed:', error)
    throw error
  }
}
```

### Badge Image Requirements (`/public/badges/README.md`)

```markdown
# Badge Images

## Requirements

- **Format**: PNG with transparency
- **Size**: 1200×900px (4:3 aspect ratio)
- **Max File Size**: 500KB
- **Color Profile**: sRGB
- **Naming**: `[booth-slug]-badge.png`

## Design Guidelines

- Include sponsor logo (top-left or bottom-right)
- Include myBlueprint logo (small, bottom-left)
- Achievement text area in center
- Use sponsor brand colors
- Ensure high contrast for readability

## Example File Names

- `energy-sector-badge.png`
- `construction-careers-badge.png`
- `health-wellness-badge.png`

## Template

Download the badge template PSD/Figma file from:
https://myblueprint.ca/design-resources/quiz-badge-template
```

---

## Analytics Integration

### Add to `/lib/analytics.ts`

```typescript
/**
 * Quiz Engagement Events
 */
export const QuizAnalytics = {
  started: (boothId: string, boothName: string, quizTitle: string) => {
    trackEvent('quiz_started', {
      booth_id: boothId,
      booth_name: boothName,
      quiz_title: quizTitle,
    })
  },

  questionAnswered: (
    boothId: string,
    questionId: string,
    isCorrect: boolean,
    attemptNumber: number
  ) => {
    trackEvent('quiz_question_answered', {
      booth_id: boothId,
      question_id: questionId,
      is_correct: isCorrect,
      attempt: attemptNumber,
    })
  },

  completed: (
    boothId: string,
    boothName: string,
    score: number,
    passed: boolean,
    duration: number
  ) => {
    trackEvent('quiz_completed', {
      booth_id: boothId,
      booth_name: boothName,
      score,
      passed,
      duration_seconds: duration,
    })
  },

  badgeDownloaded: (boothId: string, boothName: string, score: number) => {
    trackEvent('quiz_badge_downloaded', {
      booth_id: boothId,
      booth_name: boothName,
      score,
    })
  },

  fullscreenToggled: (boothId: string, isFullscreen: boolean) => {
    trackEvent('quiz_fullscreen_toggled', {
      booth_id: boothId,
      is_fullscreen: isFullscreen,
    })
  },

  restarted: (boothId: string, previousScore: number) => {
    trackEvent('quiz_restarted', {
      booth_id: boothId,
      previous_score: previousScore,
    })
  },
}
```

---

## Performance Optimization

### Code Splitting

Quiz component is lazy-loaded only when needed:

```typescript
// In EngagementActivity.tsx
import dynamic from 'next/dynamic'

const SkillsGapQuiz = dynamic(() => import('./SkillsGapQuiz'), {
  loading: () => (
    <div className="flex items-center justify-center h-[500px]">
      <Loader2 className="w-10 h-10 text-blue animate-spin" />
    </div>
  ),
  ssr: false, // Quiz requires client-side state
})
```

### Memoization

Prevent unnecessary re-renders:

```typescript
import { memo, useMemo } from 'react'

// Memoize expensive calculations
const QuizQuestion = memo(({ question, ... }: Props) => {
  const answerOptions = useMemo(
    () => question.options.map((opt, idx) => ({ text: opt, index: idx })),
    [question.id] // Only recalculate if question changes
  )

  return (
    // Component JSX
  )
})
```

### Debounced Analytics

Prevent analytics spam:

```typescript
import { useRef, useCallback } from 'react'

const useDebounce = (callback: Function, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout>()

  return useCallback(
    (...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay]
  )
}

// Usage
const debouncedTracking = useDebounce((questionId: string) => {
  QuizAnalytics.questionAnswered(boothId, questionId, isCorrect, attemptNumber)
}, 300)
```

---

## Testing Strategy

### Unit Tests

Test quiz logic functions:

```typescript
// __tests__/lib/utils/quizHelpers.test.ts
import { shuffleQuestions, calculateScore, formatDuration } from '@/lib/utils/quizHelpers'

describe('quizHelpers', () => {
  describe('shuffleQuestions', () => {
    it('returns array of same length', () => {
      const questions = [{ id: '1' }, { id: '2' }, { id: '3' }]
      const shuffled = shuffleQuestions(questions)
      expect(shuffled).toHaveLength(3)
    })

    it('does not mutate original array', () => {
      const questions = [{ id: '1' }, { id: '2' }]
      const original = [...questions]
      shuffleQuestions(questions)
      expect(questions).toEqual(original)
    })
  })

  describe('calculateScore', () => {
    it('calculates correct percentage', () => {
      const questions = [
        { id: '1', correctAnswer: 0 },
        { id: '2', correctAnswer: 1 },
        { id: '3', correctAnswer: 2 },
      ]
      const answers = new Map([
        ['1', 0], // correct
        ['2', 0], // incorrect
        ['3', 2], // correct
      ])

      expect(calculateScore(answers, questions)).toBe(67) // 2/3 = 66.67% → 67%
    })
  })

  describe('formatDuration', () => {
    it('formats seconds only', () => {
      expect(formatDuration(45)).toBe('45 seconds')
    })

    it('formats minutes only', () => {
      expect(formatDuration(120)).toBe('2 minutes')
    })

    it('formats minutes and seconds', () => {
      expect(formatDuration(150)).toBe('2 minutes 30 seconds')
    })
  })
})
```

### Component Tests

Test quiz component behavior:

```typescript
// __tests__/components/SkillsGapQuiz.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import SkillsGapQuiz from '@/components/booths/sections/SkillsGapQuiz'

const mockQuizData = {
  title: 'Test Quiz',
  description: 'Test description',
  questions: [
    {
      id: '1',
      question: 'What is 2+2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1,
      explanation: '2+2=4',
    },
  ],
  passingScore: 70,
}

describe('SkillsGapQuiz', () => {
  it('renders start screen initially', () => {
    render(<SkillsGapQuiz quizData={mockQuizData} boothId="test" boothName="Test Booth" />)
    expect(screen.getByText('Start Quiz')).toBeInTheDocument()
  })

  it('starts quiz when button clicked', () => {
    render(<SkillsGapQuiz quizData={mockQuizData} boothId="test" boothName="Test Booth" />)
    fireEvent.click(screen.getByText('Start Quiz'))

    expect(screen.getByText('What is 2+2?')).toBeInTheDocument()
  })

  it('allows answer selection', async () => {
    render(<SkillsGapQuiz quizData={mockQuizData} boothId="test" boothName="Test Booth" />)
    fireEvent.click(screen.getByText('Start Quiz'))

    const answerButton = screen.getByText('4')
    fireEvent.click(answerButton)

    await waitFor(() => {
      expect(answerButton).toHaveClass('border-blue')
    })
  })

  it('shows feedback after submit', async () => {
    render(<SkillsGapQuiz quizData={mockQuizData} boothId="test" boothName="Test Booth" />)
    fireEvent.click(screen.getByText('Start Quiz'))
    fireEvent.click(screen.getByText('4'))
    fireEvent.click(screen.getByText('Submit Answer'))

    await waitFor(() => {
      expect(screen.getByText(/2\+2=4/)).toBeInTheDocument()
    })
  })
})
```

### Accessibility Tests

```typescript
import { axe, toHaveNoViolations } from 'jest-axe'
expect.extend(toHaveNoViolations)

describe('SkillsGapQuiz Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(
      <SkillsGapQuiz quizData={mockQuizData} boothId="test" boothName="Test" />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

---

## Summary

This implementation guide provides:

✓ **Complete code examples** for all quiz components
✓ **Type-safe TypeScript** implementation
✓ **Reusable utility functions** for quiz logic
✓ **Analytics integration** with existing platform
✓ **Performance optimizations** (lazy loading, memoization)
✓ **Comprehensive testing** strategy
✓ **Badge download system** using sponsor-provided images
✓ **Accessibility compliance** throughout

All code follows existing platform patterns and integrates seamlessly with the Career Launch Platform architecture.
