'use client'

import { useState, useEffect, useCallback } from 'react';
import { slideTitles } from './data/statsData';
import ImpactOverview from './slides/ImpactOverview';
import EngagementHighlights from './slides/EngagementHighlights';
import ActivityByDay from './slides/ActivityByDay';
import UserBreakdown from './slides/UserBreakdown';
import TopSessionsViews from './slides/TopSessionsViews';
import AllSessionsViews from './slides/AllSessionsViews';
import TopSessionsReach from './slides/TopSessionsReach';
import AllSessionsReach from './slides/AllSessionsReach';
import TopSessionsWatchTime from './slides/TopSessionsWatchTime';
import AllSessionsWatchTime from './slides/AllSessionsWatchTime';
import TopSessionsFinishes from './slides/TopSessionsFinishes';
import TopSchoolBoards from './slides/TopSchoolBoards';
import SchoolBoardsReach from './slides/SchoolBoardsReach';
import BoothEngagement from './slides/BoothEngagement';
import GetInvolved from './slides/GetInvolved';

const slides = [
  ImpactOverview,
  EngagementHighlights,
  ActivityByDay,
  UserBreakdown,
  TopSessionsViews,
  AllSessionsViews,
  TopSessionsReach,
  AllSessionsReach,
  TopSessionsWatchTime,
  AllSessionsWatchTime,
  TopSessionsFinishes,
  TopSchoolBoards,
  SchoolBoardsReach,
  BoothEngagement,
  GetInvolved,
];

export default function GeneralStatsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-6" style={{ background: 'linear-gradient(135deg, #22224C 0%, #1a1a3e 100%)' }}>
      {/* Navigation Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-[1000px] mb-5 gap-4">
        {/* Dot Indicators */}
        <div className="flex gap-2 order-2 sm:order-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer
                ${index === currentSlide
                  ? 'bg-primary-blue scale-125'
                  : 'bg-white/30 hover:bg-white/60'
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Title */}
        <span className="text-white text-sm font-semibold opacity-80 order-1 sm:order-2">
          {currentSlide + 1} of {totalSlides} — {slideTitles[currentSlide]}
        </span>

        {/* Navigation Buttons */}
        <div className="flex gap-3 order-3">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`
              px-5 py-2.5 rounded-lg font-semibold text-sm text-white
              flex items-center gap-2 transition-all duration-200
              bg-white/10 border border-white/20
              ${currentSlide === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-white/20 hover:-translate-y-0.5'
              }
            `}
          >
            ← Prev
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`
              px-5 py-2.5 rounded-lg font-semibold text-sm text-white
              flex items-center gap-2 transition-all duration-200
              ${currentSlide === totalSlides - 1
                ? 'bg-primary-blue opacity-30 cursor-not-allowed'
                : 'bg-primary-blue hover:bg-[#0080E6] hover:-translate-y-0.5'
              }
            `}
          >
            {currentSlide === totalSlides - 1 ? 'Done' : 'Next →'}
          </button>
        </div>
      </div>

      {/* Slide Container */}
      <div className="w-full max-w-[1000px] flex-1 flex items-start justify-center">
        <div
          key={currentSlide}
          className="w-full animate-fadeIn"
          style={{
            animation: 'fadeIn 0.4s ease'
          }}
        >
          <CurrentSlideComponent />
        </div>
      </div>
    </div>
  );
}
