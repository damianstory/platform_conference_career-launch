'use client';

import { useState, useEffect, useCallback } from 'react';
import { companiesData } from './data/companiesData';
import CompanyIndex from './CompanyIndex';
import ImpactSlide from './slides/ImpactSlide';
import BoothSlide from './slides/BoothSlide';
import BoardViewsSlide from './slides/BoardViewsSlide';
import BoardReachSlide from './slides/BoardReachSlide';

type ViewMode = 'index-reach' | 'index-alpha' | 'company';

const slideTitles = [
  'Impact Overview',
  'Booth Engagement',
  'Views by Board',
  'Reach by Board',
];

export default function CompanySlider() {
  const [viewMode, setViewMode] = useState<ViewMode>('index-reach');
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Find the selected company
  const selectedCompany = companiesData.find(c => c.id === selectedCompanyId);

  // Determine total slides (4 per company)
  const totalSlides = 4;

  // Reset slide when company changes
  useEffect(() => {
    if (viewMode === 'company') {
      setCurrentSlide(0);
    }
  }, [selectedCompanyId, viewMode]);

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

  const handleSelectCompany = (companyId: string) => {
    setSelectedCompanyId(companyId);
    setViewMode('company');
    setCurrentSlide(0);
  };

  const handleBackToIndex = () => {
    setViewMode('index-reach');
    setSelectedCompanyId(null);
    setCurrentSlide(0);
  };

  // Keyboard navigation (only when viewing company slides)
  useEffect(() => {
    if (viewMode !== 'company') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
      if (e.key === 'Escape') {
        handleBackToIndex();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, nextSlide, prevSlide]);

  // Render the current slide for a company
  const renderCompanySlide = () => {
    if (!selectedCompany) return null;

    switch (currentSlide) {
      case 0:
        return <ImpactSlide company={selectedCompany} />;
      case 1:
        return <BoothSlide company={selectedCompany} />;
      case 2:
        return <BoardViewsSlide company={selectedCompany} />;
      case 3:
        return <BoardReachSlide company={selectedCompany} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-6"
      style={{ background: 'linear-gradient(135deg, #22224C 0%, #1a1a3e 100%)' }}
    >
      {/* View Mode Selector (only shown when in index mode) */}
      {(viewMode === 'index-reach' || viewMode === 'index-alpha') && (
        <div className="flex items-center gap-3 mb-5">
          <span className="text-white text-sm font-semibold">View:</span>
          <button
            onClick={() => setViewMode('index-reach')}
            className={`
              px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
              ${viewMode === 'index-reach'
                ? 'bg-primary-blue text-white border border-primary-blue'
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }
            `}
          >
            By Reach
          </button>
          <button
            onClick={() => setViewMode('index-alpha')}
            className={`
              px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
              ${viewMode === 'index-alpha'
                ? 'bg-primary-blue text-white border border-primary-blue'
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }
            `}
          >
            Alphabetical
          </button>
        </div>
      )}

      {/* Navigation Header (only shown when viewing company slides) */}
      {viewMode === 'company' && (
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-[1000px] mb-5 gap-4">
          {/* Dot Indicators */}
          <div className="flex gap-2 order-2 sm:order-1">
            {[...Array(totalSlides)].map((_, index) => (
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
              onClick={currentSlide === 0 ? handleBackToIndex : prevSlide}
              className="
                px-5 py-2.5 rounded-lg font-semibold text-sm text-white
                flex items-center gap-2 transition-all duration-200
                bg-white/10 border border-white/20
                hover:bg-white/20 hover:-translate-y-0.5
              "
            >
              ← {currentSlide === 0 ? 'Back to Index' : 'Prev'}
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
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="w-full max-w-[1000px] flex-1 flex items-start justify-center">
        <div
          key={`${viewMode}-${selectedCompanyId}-${currentSlide}`}
          className="w-full animate-fadeIn"
          style={{
            animation: 'fadeIn 0.4s ease'
          }}
        >
          {viewMode === 'index-reach' && (
            <CompanyIndex
              companies={companiesData}
              onSelectCompany={handleSelectCompany}
              sortBy="reach"
            />
          )}

          {viewMode === 'index-alpha' && (
            <CompanyIndex
              companies={companiesData}
              onSelectCompany={handleSelectCompany}
              sortBy="alphabetical"
            />
          )}

          {viewMode === 'company' && renderCompanySlide()}
        </div>
      </div>
    </div>
  );
}
