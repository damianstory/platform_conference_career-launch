'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { SessionAnalytics } from '@/lib/analytics';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionTitle: string;
  sessionSlug: string;
  trailerUrl: string;
  sessionId: string;
  onWatchFullSession?: () => void;
}

export default function TrailerModal({
  isOpen,
  onClose,
  sessionTitle,
  sessionSlug,
  trailerUrl,
  sessionId,
  onWatchFullSession,
}: TrailerModalProps) {
  const router = useRouter();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasTrackedView, setHasTrackedView] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure portal only renders after client-side hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll and track analytics when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      // Track trailer view (only once per modal open)
      if (!hasTrackedView) {
        SessionAnalytics.trailerViewed(sessionId, sessionTitle);
        setHasTrackedView(true);
      }

      // Focus close button for accessibility
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);

      return () => {
        document.body.style.overflow = '';
      };
    } else {
      // Reset tracking when modal closes
      setHasTrackedView(false);
      setIsLoading(true);
    }
  }, [isOpen, sessionId, sessionTitle, hasTrackedView]);

  // Handle ESC key to close
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

  // Handle overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle Watch Full Session click
  const handleWatchFullSession = () => {
    onClose();
    if (onWatchFullSession) {
      // If callback provided (from detail page), trigger registration modal
      onWatchFullSession();
    } else {
      // Save flag so VideoSection knows user came from trailer
      sessionStorage.setItem('came_from_trailer', sessionSlug);
      // Navigate to session detail page
      router.push(`/sessions/${sessionSlug}`);
    }
  };

  // Handle iframe load
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Don't render anything if not open or not mounted (prevents hydration mismatch)
  if (!isOpen || !isMounted) return null;

  // Use portal to render modal at document.body level (fixes table nesting issues)
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:pb-0 pb-0">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 animate-fade-in"
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-[900px] bg-white animate-slide-up md:animate-fade-in md:mx-4 flex flex-col"
        style={{
          maxHeight: '90vh',
          borderRadius: '24px 24px 0 0',
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="trailer-modal-title"
      >
        {/* Mobile: Apply bottom sheet styling */}
        <style jsx>{`
          @media (min-width: 768px) {
            div[role="dialog"] {
              border-radius: 24px !important;
            }
          }
        `}</style>

        {/* Drawer Handle (mobile only) */}
        <div className="flex justify-center pt-3 pb-2 md:hidden">
          <div
            className="w-12 h-1 rounded-full bg-gray-300"
            aria-hidden="true"
          />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between px-4 md:px-6 pt-2 md:pt-6 pb-3">
          <div>
            <h2
              id="trailer-modal-title"
              className="text-lg md:text-xl font-bold text-navy"
            >
              {sessionTitle}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">1-minute trailer</p>
          </div>

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2"
            aria-label="Close trailer"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Video Container */}
        <div className="px-4 md:px-6">
          <div className="relative aspect-video bg-navy rounded-lg overflow-hidden">
            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-navy">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-white border-t-transparent" />
                <span className="sr-only">Loading trailer...</span>
              </div>
            )}

            {/* Descript Embed */}
            <iframe
              src={trailerUrl}
              className="absolute inset-0 w-full h-full"
              frameBorder={0}
              allowFullScreen
              title={`${sessionTitle} trailer`}
              onLoad={handleIframeLoad}
            />
          </div>
        </div>

        {/* Footer with CTA */}
        <div className="px-4 md:px-6 py-4 md:py-6 mt-auto">
          <button
            onClick={handleWatchFullSession}
            className="btn-primary w-full md:w-auto md:min-w-[200px] md:mx-auto md:block"
          >
            Watch Full Session
          </button>
          <p className="text-center text-xs text-gray-500 mt-3">
            Registration required to watch the full session
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
