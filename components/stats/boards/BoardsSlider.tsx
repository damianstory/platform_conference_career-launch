'use client';

import { useState, useEffect } from 'react';
import boardsData from './data/boardsData';
import BoardSelectorSlide from './slides/BoardSelectorSlide';
import ImpactOverviewSlide from './slides/ImpactOverviewSlide';
import DailyActivitySlide from './slides/DailyActivitySlide';
import GradeDistributionSlide from './slides/GradeDistributionSlide';
import SessionsExploredSlide from './slides/SessionsExploredSlide';
import SchoolBreakdownSlide from './slides/SchoolBreakdownSlide';
import KeepWatchingSlide from './slides/KeepWatchingSlide';

type ViewMode = 'selector' | 'board';

const SLIDE_TITLES = [
  'Impact Overview',
  'Sessions by Day',
  'Grade Distribution',
  'Sessions Watched',
  'School Participation',
  'Keep Watching'
];

export default function BoardsSlider() {
  const [viewMode, setViewMode] = useState<ViewMode>('selector');
  const [selectedBoardKey, setSelectedBoardKey] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState<'reach' | 'alpha'>('reach');
  const [fadeIn, setFadeIn] = useState(true);

  const selectedBoard = selectedBoardKey
    ? boardsData.boards.find(b => b.key === selectedBoardKey)
    : null;

  // Handle board selection
  const handleBoardSelect = (boardKey: string) => {
    setFadeIn(false);
    setTimeout(() => {
      setSelectedBoardKey(boardKey);
      setViewMode('board');
      setCurrentSlide(0);
      setFadeIn(true);
    }, 200);
  };

  // Handle back to selector
  const handleBack = () => {
    setFadeIn(false);
    setTimeout(() => {
      setViewMode('selector');
      setSelectedBoardKey(null);
      setCurrentSlide(0);
      setFadeIn(true);
    }, 200);
  };

  // Handle slide navigation
  const goToSlide = (index: number) => {
    if (index >= 0 && index < 6) {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentSlide(index);
        setFadeIn(true);
      }, 200);
    }
  };

  const nextSlide = () => {
    if (currentSlide < 5) {
      goToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode === 'board') {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          e.preventDefault();
          nextSlide();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevSlide();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          handleBack();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, currentSlide]);

  // Render current slide
  const renderSlide = () => {
    if (!selectedBoard) return null;

    const slides = [
      <ImpactOverviewSlide key="slide-0" board={selectedBoard} />,
      <DailyActivitySlide key="slide-1" board={selectedBoard} />,
      <GradeDistributionSlide key="slide-2" board={selectedBoard} />,
      <SessionsExploredSlide key="slide-3" board={selectedBoard} />,
      <SchoolBreakdownSlide key="slide-4" board={selectedBoard} />,
      <KeepWatchingSlide key="slide-5" board={selectedBoard} />
    ];

    return slides[currentSlide];
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Navigation Header */}
      <div className="w-full max-w-[1000px] mb-5 flex items-center justify-between">
        {/* Slide Indicator / Title */}
        <div className="flex items-center gap-3">
          {viewMode === 'board' && (
            <>
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentSlide === index
                        ? 'bg-primary-blue scale-110'
                        : 'bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-white/80">
                {currentSlide + 1} of 6 — {SLIDE_TITLES[currentSlide]}
              </span>
            </>
          )}
          {viewMode === 'selector' && (
            <span className="text-sm font-semibold text-white/80">
              Select a Board
            </span>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          {viewMode === 'board' && (
            <>
              <button
                onClick={handleBack}
                className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg text-sm font-semibold hover:bg-white/20 transition-all"
              >
                ← Back
              </button>
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg text-sm font-semibold hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Prev
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === 5}
                className="px-4 py-2 bg-primary-blue border border-primary-blue text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {currentSlide === 5 ? 'Done' : 'Next →'}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Slide Content */}
      <div className="w-full max-w-[1000px] flex-1 flex items-start justify-center">
        <div
          className={`w-full transition-all duration-200 ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          {viewMode === 'selector' ? (
            <BoardSelectorSlide
              boards={boardsData.boards}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onBoardSelect={handleBoardSelect}
            />
          ) : (
            renderSlide()
          )}
        </div>
      </div>
    </div>
  );
}
