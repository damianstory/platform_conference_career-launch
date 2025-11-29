'use client'

import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X, Check, XIcon, Download, Maximize2, RotateCcw, ArrowRight } from 'lucide-react'
import { QuizData, QuizQuestion } from '@/types/booth'
import { getSessionBySlug } from '@/data/sample-sessions'
import { QuizAnalytics } from '@/lib/analytics'

// Extended question type with shuffled options
interface ShuffledQuestion extends QuizQuestion {
  shuffledOptions: string[]
  shuffledCorrectIndex: number
}

interface SkillsGapQuizProps {
  quizData: QuizData
  boothId?: string
  boothSlug?: string
  boothName?: string
  sessionTitle?: string
  associatedSessionSlug?: string
}

type QuizState = 'start' | 'in-progress' | 'results'

// Badge options for random selection
const BADGE_OPTIONS = [
  '/badges/badge-1.png',
  '/badges/badge-2.png',
  '/badges/badge-3.png',
  '/badges/badge-4.png',
]

// Fisher-Yates shuffle algorithm for randomizing arrays
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Shuffle options within a question and track the new correct index
function shuffleQuestionOptions(question: QuizQuestion): ShuffledQuestion {
  // Create array of {option, originalIndex} pairs
  const optionsWithIndices = question.options.map((opt, idx) => ({ opt, idx }))

  // Shuffle the pairs
  const shuffled = shuffleArray(optionsWithIndices)

  // Extract shuffled options and find new correct index
  const shuffledOptions = shuffled.map(item => item.opt)
  const shuffledCorrectIndex = shuffled.findIndex(item => item.idx === question.correctIndex)

  return {
    ...question,
    shuffledOptions,
    shuffledCorrectIndex
  }
}

export default function SkillsGapQuiz({ quizData, boothId, boothSlug, boothName, sessionTitle, associatedSessionSlug }: SkillsGapQuizProps) {
  // Look up session title from slug if available
  const session = associatedSessionSlug ? getSessionBySlug(associatedSessionSlug) : null
  const resolvedSessionTitle = sessionTitle || session?.title || boothName || 'session'

  const [quizState, setQuizState] = useState<QuizState>('start')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Map<string, number>>(new Map())
  const [shuffledQuestions, setShuffledQuestions] = useState<ShuffledQuestion[]>(
    quizData.questions.map(shuffleQuestionOptions)
  )
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null)
  const feedbackRef = useRef<HTMLParagraphElement>(null)

  // Handle component mount for portal
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle ESC key to close fullscreen
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
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

  // Auto-scroll to feedback after answering a question
  useEffect(() => {
    if (hasAnswered && feedbackRef.current) {
      setTimeout(() => {
        feedbackRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        })
      }, 150)
    }
  }, [hasAnswered])

  const handleStartQuiz = () => {
    // Track quiz start
    if (boothSlug && boothName) {
      QuizAnalytics.started(boothSlug, boothName)
    }
    // Shuffle questions AND options within each question on start
    const shuffledWithOptions = shuffleArray(quizData.questions).map(shuffleQuestionOptions)
    setShuffledQuestions(shuffledWithOptions)
    setQuizState('in-progress')
    setCurrentQuestionIndex(0)
    setSelectedAnswers(new Map())
    setSelectedOption(null)
    setHasAnswered(false)
    setSelectedBadge(null)
  }

  const handleRetakeQuiz = () => {
    handleStartQuiz()
  }

  const handleOptionSelect = (optionIndex: number) => {
    if (hasAnswered) return // Prevent changing answer after submission
    setSelectedOption(optionIndex)
    setHasAnswered(true)

    // Save answer
    const currentQuestion = shuffledQuestions[currentQuestionIndex]
    setSelectedAnswers(prev => new Map(prev).set(currentQuestion.id, optionIndex))
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      // Move to next question
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedOption(null)
      setHasAnswered(false)
    } else {
      // Quiz complete, show results
      // Calculate score for tracking
      let correctCount = 0
      shuffledQuestions.forEach(question => {
        const userAnswer = selectedAnswers.get(question.id)
        if (userAnswer === question.shuffledCorrectIndex) {
          correctCount++
        }
      })
      // Track quiz completion
      if (boothSlug && boothName) {
        QuizAnalytics.completed(boothSlug, boothName, correctCount, shuffledQuestions.length)
      }
      // Use booth-specific badge if available, otherwise fall back to random selection
      const badgeUrl = quizData.badgeImageUrl || BADGE_OPTIONS[Math.floor(Math.random() * BADGE_OPTIONS.length)]
      setSelectedBadge(badgeUrl)
      setQuizState('results')
    }
  }

  const handleDownloadBadge = () => {
    if (!selectedBadge) return

    // Track badge download
    if (boothSlug && boothName) {
      QuizAnalytics.badgeDownloaded(boothSlug, boothName)
    }

    // Fetch the badge image and trigger download
    fetch(selectedBadge)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${boothName || 'quiz'}-completion-badge.png`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
      })
      .catch(error => {
        console.error('Error downloading badge:', error)
      })
  }

  const calculateScore = () => {
    let correct = 0
    shuffledQuestions.forEach(question => {
      const userAnswer = selectedAnswers.get(question.id)
      if (userAnswer === question.shuffledCorrectIndex) {
        correct++
      }
    })
    return {
      correct,
      total: shuffledQuestions.length,
      percentage: Math.round((correct / shuffledQuestions.length) * 100)
    }
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return { color: 'text-green-600', bg: 'bg-green-50', message: 'Niceee 👌' }
    if (percentage >= 70) return { color: 'text-blue-600', bg: 'bg-blue-50', message: 'Solid job 🤝' }
    if (percentage >= 50) return { color: 'text-amber-600', bg: 'bg-amber-50', message: 'Try again?' }
    return { color: 'text-[#22224C]', bg: 'bg-gray-50', message: 'Try again?' }
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex]
  const isCorrect = selectedOption === currentQuestion?.shuffledCorrectIndex
  const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100

  // Start Screen
  const renderStartScreen = () => (
    <div className="h-full relative overflow-hidden rounded-xl bg-gradient-to-br from-[#C6E7FF] to-[#E8F4FF]">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0092FF]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/60 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6 text-center overflow-y-auto">
        <div className="max-w-md w-full space-y-3 sm:space-y-5">
          {/* Eyebrow label - hidden on mobile */}
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#0092FF] font-medium animate-in fade-in slide-in-from-bottom-2 duration-500">
            Interactive Challenge
          </span>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#22224C] leading-tight animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            {quizData.title}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#65738B] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            {quizData.description}
          </p>

          {/* Info pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-full text-sm text-[#22224C]/80">
              <span className="w-1.5 h-1.5 bg-[#0092FF] rounded-full" />
              {quizData.questions.length} Questions
            </span>
            {quizData.duration && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-full text-sm text-[#22224C]/80">
                <span className="w-1.5 h-1.5 bg-[#0092FF] rounded-full" />
                {quizData.duration}
              </span>
            )}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleStartQuiz}
            className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 h-[56px] w-full sm:w-auto sm:min-w-[180px] bg-[#0092FF] text-white rounded-lg font-semibold shadow-md hover:bg-[#22224C] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,146,255,0.35)] transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400 focus-visible:outline-2 focus-visible:outline-[#0092FF] focus-visible:outline-offset-2"
          >
            Start Quiz
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )

  // Quiz Screen
  const renderQuizScreen = () => (
    <div className="h-full flex flex-col bg-white">
      {/* Compact Progress Bar */}
      <div className="px-3 py-2 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-gray-600">
            Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
          </span>
        </div>
        <div className="h-1 bg-gray-200 rounded-full">
          <div
            className="h-full bg-[#0092FF] rounded-full transition-all duration-400"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question and Answers - Scrollable */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-1">
        <div className="max-w-3xl mx-auto space-y-2">
          {/* Question */}
          <h3 className="text-base sm:text-lg font-bold text-[#22224C] leading-tight">
            {currentQuestion.question}
          </h3>

          {/* Answer Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentQuestion.shuffledOptions.map((option, index) => {
              const isSelected = selectedOption === index
              const isThisCorrect = index === currentQuestion.shuffledCorrectIndex
              const showFeedback = hasAnswered

              let buttonClasses = 'w-full p-2 sm:p-3 rounded-lg border-2 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0092FF] focus-visible:outline-offset-2 min-h-[44px] font-medium'

              if (!showFeedback) {
                // Before answer submitted
                if (isSelected) {
                  buttonClasses += ' border-[#0092FF] border-[3px] bg-[rgba(0,146,255,0.08)] text-[#22224C]'
                } else {
                  buttonClasses += ' bg-white border-[#D9DFEA] text-[#22224C] hover:border-[#0092FF] hover:bg-[rgba(0,146,255,0.04)]'
                }
              } else {
                // After answer submitted
                if (isThisCorrect) {
                  buttonClasses += ' bg-[#22224C] text-white border-[#22224C]'
                } else if (isSelected && !isThisCorrect) {
                  buttonClasses += ' bg-[#C6E7FF] text-[#22224C] border-[#C6E7FF]'
                } else {
                  buttonClasses += ' bg-white border-[#D9DFEA] text-gray-400'
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={hasAnswered}
                  className={buttonClasses}
                >
                  <div className="flex items-start gap-2">
                    <span className="flex-1 text-sm sm:text-base">{option}</span>
                    {showFeedback && (
                      <span className="flex-shrink-0">
                        {isThisCorrect && (
                          <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                        )}
                        {isSelected && !isThisCorrect && (
                          <XIcon className="w-4 h-4 text-red-500" strokeWidth={3} />
                        )}
                      </span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Feedback Box - Compact but substantial */}
          {hasAnswered && (
            <p
              ref={feedbackRef}
              className={`text-sm px-3 py-2 rounded-lg mt-1 ${
                isCorrect ? 'bg-green-50 text-green-800' : 'bg-amber-50 text-amber-800'
              }`}
            >
              {currentQuestion.explanation}
            </p>
          )}
        </div>
      </div>

      {/* Next Button - Styled like BoothHeader CTA */}
      {hasAnswered && (
        <div className="border-t border-gray-200 bg-white py-2 flex justify-center">
          <button
            onClick={handleNextQuestion}
            className="inline-flex items-center justify-center gap-2 px-6 h-[48px] bg-primary-blue text-white rounded-lg font-semibold shadow-md hover:bg-brand-navy hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,146,255,0.35)] transition-all duration-300 ease-out min-w-[180px]"
          >
            {currentQuestionIndex < shuffledQuestions.length - 1 ? 'Next Question' : 'See Results'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )

  // Results Screen
  const renderResultsScreen = () => {
    const score = calculateScore()
    const scoreStyle = getScoreColor(score.percentage)

    return (
      <div className="h-full relative overflow-y-auto rounded-xl bg-gradient-to-br from-[#C6E7FF] to-[#E8F4FF]">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0092FF]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/60 rounded-full blur-2xl" />

        {/* Content */}
        <div className="relative min-h-full flex flex-col items-center pt-0 pb-2 px-6 text-center">
          <div className="max-w-md w-full">
            {/* Message */}
            <p className="mt-2 sm:mt-3 text-lg sm:text-xl lg:text-2xl font-semibold text-[#22224C] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              {scoreStyle.message}
            </p>

            {/* Summary - shown first */}
            <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-[#65738B] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-250">
              You got {score.correct} out of {score.total} questions correct
            </p>

            {/* Conditional encouragement text - same size as summary */}
            {score.percentage >= 80 ? (
              <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-[#65738B] max-w-sm mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                If you collect 10 or more of these badges, you will be able to enter a draw for a prize. Visit the FAQ on the main page for all the details.
              </p>
            ) : (
              <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-[#65738B] max-w-sm mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                Want to improve your score? These questions were created from the {resolvedSessionTitle} session.
              </p>
            )}

            {/* Instructional text - only shown when badge earned (80%+) */}
            {selectedBadge && score.percentage >= 80 && (
              <p className="mt-2 sm:mt-4 text-xs sm:text-sm lg:text-base text-[#65738B] max-w-sm mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 delay-[350ms]">
                Now add this session completion badge to your Career Launch portfolio in myBlueprint with your session takeaways/reflection.
              </p>
            )}

            {/* Buttons */}
            <div className="mt-3 sm:mt-5 flex flex-col items-center gap-2 sm:gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
              {selectedBadge && score.percentage >= 80 && (
                <button
                  onClick={handleDownloadBadge}
                  className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 h-[56px] w-full sm:w-auto sm:min-w-[180px] bg-[#0092FF] text-white rounded-lg font-semibold shadow-md hover:bg-[#22224C] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,146,255,0.35)] transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-[#0092FF] focus-visible:outline-offset-2"
                >
                  <Download className="w-5 h-5" />
                  Download Your Badge
                </button>
              )}

              <button
                onClick={handleRetakeQuiz}
                className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 h-[56px] w-full sm:w-auto sm:min-w-[180px] bg-white/60 backdrop-blur-sm text-[#22224C] rounded-lg font-semibold border border-[#22224C]/10 hover:bg-white hover:-translate-y-1 transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-[#0092FF] focus-visible:outline-offset-2"
              >
                <RotateCcw className="w-5 h-5" />
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Main render based on state
  const renderContent = () => {
    switch (quizState) {
      case 'start':
        return renderStartScreen()
      case 'in-progress':
        return renderQuizScreen()
      case 'results':
        return renderResultsScreen()
      default:
        return null
    }
  }

  return (
    <>
      {/* Main Quiz Container */}
      <div className="relative w-full h-full rounded-xl shadow-[0_3px_10px_rgba(34,34,76,0.08),0_1px_3px_rgba(34,34,76,0.04)] border border-gray-200/50 ring-1 ring-primary-blue/5 transition-all duration-200 hover:shadow-md">
        {renderContent()}
      </div>

      {/* Fullscreen Modal - Rendered via Portal */}
      {mounted && isFullscreen && quizState === 'in-progress' && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/90 flex flex-col">
          {/* Header */}
          <div className="p-4 bg-white/15 backdrop-blur-md flex items-center justify-between border-b border-white/20">
            <h3 className="text-lg font-bold text-white">
              Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
            </h3>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsFullscreen(false)
              }}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-200 text-white shadow-lg hover:shadow-xl flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label="Close fullscreen"
            >
              <X className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>

          {/* Fullscreen Quiz Content */}
          <div className="flex-1 overflow-y-auto bg-white">
            <div className="max-w-4xl mx-auto p-8 sm:p-12 space-y-8">
              {/* Progress Bar */}
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0092FF] transition-all duration-400"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Question */}
              <h3 className="text-3xl sm:text-4xl font-bold text-[#22224C] leading-tight">
                {currentQuestion.question}
              </h3>

              {/* Answer Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {currentQuestion.shuffledOptions.map((option, index) => {
                  const isSelected = selectedOption === index
                  const isThisCorrect = index === currentQuestion.shuffledCorrectIndex
                  const showFeedback = hasAnswered

                  let buttonClasses = 'w-full p-6 sm:p-8 rounded-2xl border-2 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0092FF] focus-visible:outline-offset-2 min-h-[44px] font-medium text-lg'

                  if (!showFeedback) {
                    if (isSelected) {
                      buttonClasses += ' border-[#0092FF] border-[3px] bg-[rgba(0,146,255,0.08)] text-[#22224C]'
                    } else {
                      buttonClasses += ' bg-white border-[#D9DFEA] text-[#22224C] hover:border-[#0092FF] hover:bg-[rgba(0,146,255,0.04)]'
                    }
                  } else {
                    if (isThisCorrect) {
                      buttonClasses += ' bg-[#22224C] text-white border-[#22224C]'
                    } else if (isSelected && !isThisCorrect) {
                      buttonClasses += ' bg-[#C6E7FF] text-[#22224C] border-[#C6E7FF]'
                    } else {
                      buttonClasses += ' bg-white border-[#D9DFEA] text-gray-400'
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(index)}
                      disabled={hasAnswered}
                      className={buttonClasses}
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex-1">{option}</span>
                        {showFeedback && (
                          <span className="flex-shrink-0">
                            {isThisCorrect && (
                              <Check className="w-6 h-6 text-green-400" strokeWidth={3} />
                            )}
                            {isSelected && !isThisCorrect && (
                              <XIcon className="w-6 h-6 text-red-500" strokeWidth={3} />
                            )}
                          </span>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Feedback Box */}
              {hasAnswered && (
                <div className={`p-6 sm:p-8 rounded-2xl border-2 ${
                  isCorrect
                    ? 'bg-green-50 border-green-200'
                    : 'bg-amber-50 border-amber-200'
                } animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isCorrect ? 'bg-green-500' : 'bg-amber-500'
                    }`}>
                      {isCorrect ? (
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      ) : (
                        <XIcon className="w-5 h-5 text-white" strokeWidth={3} />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`font-bold text-lg mb-2 ${
                        isCorrect ? 'text-green-800' : 'text-amber-800'
                      }`}>
                        {isCorrect ? 'Correct!' : 'Not quite!'}
                      </p>
                      <p className="text-base text-gray-700">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Next Button */}
              {hasAnswered && (
                <button
                  onClick={handleNextQuestion}
                  className="w-full py-5 px-8 bg-[#0092FF] hover:bg-[#0092FF]/90 text-white font-semibold text-lg rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl focus-visible:outline-2 focus-visible:outline-[#0092FF] focus-visible:outline-offset-2 flex items-center justify-center gap-3 min-h-[44px]"
                >
                  {currentQuestionIndex < shuffledQuestions.length - 1 ? 'Next Question' : 'See Results'}
                  <ArrowRight className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
