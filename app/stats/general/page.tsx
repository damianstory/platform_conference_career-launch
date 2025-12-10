'use client';

export default function GeneralStatsPage() {
  return (
    <div className="h-screen bg-brand-navy flex items-start justify-center pt-4 pb-2 px-4">
      <iframe
        src="https://claude.site/public/artifacts/c5d6306f-9335-497f-95f9-25e6f49e9bd8/embed"
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
