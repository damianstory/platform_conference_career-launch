'use client';

interface VideoSectionProps {
  sessionSlug: string;
}

export default function VideoSection({ sessionSlug }: VideoSectionProps) {
  const handleWatchClick = () => {
    console.log('Watch button clicked for session:', sessionSlug);
    // TODO: Open registration form modal
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E9F1] p-8 mb-6 shadow-[0_4px_24px_rgba(34,34,76,0.08)]">
      <h2 className="text-2xl font-bold text-navy mb-4">
        Watch with Your Class
      </h2>
      <div className="bg-gradient-to-br from-blue to-navy rounded-lg h-96 flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-xl mb-4">Video player coming soon</p>
          <button
            onClick={handleWatchClick}
            className="btn-primary"
          >
            Watch with Your Class
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        Click &ldquo;Watch with Your Class&rdquo; to register and start the video. You&rsquo;ll be able to track your students&rsquo; engagement and report on reach.
      </p>
    </div>
  );
}
