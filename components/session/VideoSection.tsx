'use client';

import { useState } from 'react';
import MultiStepModal from '@/components/registration/MultiStepModal';
import { getSessionBySlug } from '@/data/sample-sessions';
import { SessionAnalytics } from '@/lib/analytics';

// Temporary Loom embed URL - will be replaced with Vimeo when final videos are ready
const TEMP_VIDEO_EMBED_URL = 'https://www.loom.com/embed/6338bd9371f84f5c81873bcb0938ef5b';

interface VideoSectionProps {
  sessionSlug: string;
}

type VideoState = 'initial' | 'loading' | 'playing' | 'paused' | 'completed' | 'error';

export default function VideoSection({ sessionSlug }: VideoSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoState, setVideoState] = useState<VideoState>('initial');
  const session = getSessionBySlug(sessionSlug);

  if (!session) {
    return null;
  }

  const handleWatchClick = () => {
    // Track watch button click
    SessionAnalytics.watchClicked(session.id, session.title, 'detail');
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
          {/* Loom iframe - shown when playing */}
          {videoState === 'playing' && (
            <iframe
              src={TEMP_VIDEO_EMBED_URL}
              frameBorder={0}
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              title="Session Video"
            />
          )}

          {/* Other states content */}
          <div className={`flex flex-col items-center justify-center h-full text-white p-4 md:p-6 gap-4 md:gap-6 ${videoState === 'playing' ? 'hidden' : ''}`}>

            {/* Initial State: Show button only (no placeholder text) */}
            {videoState === 'initial' && showButton && (
              <>
                {/* Desktop: Button inside video */}
                <button
                  onClick={handleWatchClick}
                  className="btn-primary hidden md:inline-flex md:min-w-[280px]"
                >
                  Watch Session
                </button>
              </>
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

        {/* Mobile: Button below video - Only show in initial state */}
        {showButton && (
          <div className="mt-4 md:hidden">
            <button
              onClick={handleWatchClick}
              className="btn-primary w-full"
            >
              Watch Session
            </button>
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
    </>
  );
}
