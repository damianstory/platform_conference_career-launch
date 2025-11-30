'use client';

import { useState, useEffect } from 'react';
import MultiStepModal from '@/components/registration/MultiStepModal';
import TrailerModal from '@/components/session/TrailerModal';
import { getSessionBySlug } from '@/data/sample-sessions';
import { SessionAnalytics } from '@/lib/analytics';


interface VideoSectionProps {
  sessionSlug: string;
}

type VideoState = 'initial' | 'loading' | 'playing' | 'paused' | 'completed' | 'error';

export default function VideoSection({ sessionSlug }: VideoSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);
  const [videoState, setVideoState] = useState<VideoState>('initial');
  const [hideTrailerButton, setHideTrailerButton] = useState(false);
  const session = getSessionBySlug(sessionSlug);

  // Check if user came from trailer modal - hide button if so
  useEffect(() => {
    if (typeof window !== 'undefined' && session) {
      const cameFromTrailer = sessionStorage.getItem('came_from_trailer');
      if (cameFromTrailer === session.slug) {
        setHideTrailerButton(true);
        sessionStorage.removeItem('came_from_trailer');
      }
    }
  }, [session]);

  if (!session) {
    return null;
  }

  const handleWatchClick = () => {
    // Track watch button click
    SessionAnalytics.watchClicked(session.id, session.title, 'detail');
    setIsModalOpen(true);
  };

  const handleTrailerClick = () => {
    // Prevent opening trailer when registration modal is open
    if (isModalOpen) return;
    setIsTrailerModalOpen(true);
  };

  const handleWatchFullSessionFromTrailer = () => {
    // Close trailer modal and open registration modal
    setIsTrailerModalOpen(false);
    setIsModalOpen(true);
  };

  const handleRegistrationSuccess = (data: any) => {
    console.log('Form data:', data);
    setIsModalOpen(false);

    // Simulate video loading → playing transition
    setVideoState('loading');

    // After brief delay, simulate video playing
    // (In production, this will be triggered by Vimeo player's onPlay event)
    setTimeout(() => {
      setVideoState('playing');
      // Track video started
      SessionAnalytics.videoStarted(session.id, session.title, data.userType);
    }, 500); // Half-second simulates video initialization
  };

  // Button only visible in initial state
  const showButton = videoState === 'initial';

  return (
    <>
      <div className="bg-white rounded-xl border border-[#E5E9F1] p-4 sm:p-6 md:p-8 mb-6 lg:mb-8 shadow-[0_4px_24px_rgba(34,34,76,0.08)]">
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 md:mb-6 text-center">
          Watch Session
        </h2>

        {/* Video Container - 16:9 aspect ratio */}
        <div className={`aspect-video rounded-lg overflow-hidden relative ${videoState === 'playing' ? 'bg-black' : 'bg-gradient-to-br from-blue to-navy'}`}>
          {/* Video iframe - shown when playing */}
          {videoState === 'playing' && session.full_video_url && (
            <iframe
              src={session.full_video_url}
              frameBorder={0}
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              title="Session Video"
            />
          )}

          {/* Other states content */}
          <div className={`flex flex-col items-center justify-center h-full text-white p-4 md:p-6 gap-4 md:gap-6 ${videoState === 'playing' ? 'hidden' : ''}`}>

            {/* Initial State: Show buttons (no placeholder text) */}
            {videoState === 'initial' && showButton && (
              <div className="hidden md:flex flex-col items-center gap-3">
                {/* Desktop: Watch Session button */}
                <button
                  onClick={handleWatchClick}
                  className="btn-primary md:min-w-[280px]"
                >
                  Watch Session
                </button>
                {/* Desktop: Watch Trailer button - hidden if came from trailer */}
                {!hideTrailerButton && (
                  <button
                    onClick={handleTrailerClick}
                    className="btn-secondary md:min-w-[280px]"
                  >
                    Watch Trailer
                  </button>
                )}
              </div>
            )}

            {/* Loading State: Spinner */}
            {videoState === 'loading' && (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent" />
                <span className="sr-only">Loading video...</span>
              </div>
            )}

            {/* Paused State: Show resume message */}
            {videoState === 'paused' && (
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-4xl">⏸️</div>
                <p className="text-lg font-medium">Video paused</p>
              </div>
            )}

            {/* Error State: Retry option */}
            {videoState === 'error' && (
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-4xl">⚠️</div>
                <p className="text-lg">Video unavailable</p>
                <button
                  onClick={() => setVideoState('initial')}
                  className="btn-primary"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile: Buttons below video - Only show in initial state */}
        {showButton && (
          <div className="mt-4 md:hidden space-y-3">
            <button
              onClick={handleWatchClick}
              className="btn-primary w-full"
            >
              Watch Session
            </button>
            {!hideTrailerButton && (
              <button
                onClick={handleTrailerClick}
                className="btn-secondary w-full"
              >
                Watch Trailer
              </button>
            )}
          </div>
        )}

        <p className="text-sm text-gray-600 mt-4 md:mt-6 text-center">
          Click &ldquo;Watch Session&rdquo; to register and start the video.
        </p>
      </div>

      <MultiStepModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sessionTitle={session.title}
        sessionId={session.id}
        onSubmit={handleRegistrationSuccess}
      />

      <TrailerModal
        isOpen={isTrailerModalOpen}
        onClose={() => setIsTrailerModalOpen(false)}
        sessionTitle={session.title}
        sessionSlug={session.slug}
        trailerUrl={session.trailer_url || ''}
        sessionId={session.id}
        onWatchFullSession={handleWatchFullSessionFromTrailer}
      />
    </>
  );
}
