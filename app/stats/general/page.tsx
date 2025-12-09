'use client';

export default function GeneralStatsPage() {
  return (
    <div className="h-screen bg-brand-navy flex items-start justify-center pt-4 pb-2 px-4">
      <iframe
        src="https://claude.site/public/artifacts/0289cfae-0c87-47a1-bcc7-839f43f511b8/embed"
        title="Career Launch 2025 Statistics"
        className="w-full max-w-[1000px] rounded-2xl shadow-2xl"
        style={{ height: 'calc(100vh - 120px)' }}
        frameBorder="0"
        allow="clipboard-write"
        allowFullScreen
      />
    </div>
  );
}
