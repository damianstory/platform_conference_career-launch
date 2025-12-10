'use client';

export default function BoardStatsPage() {
  return (
    <div className="bg-brand-navy flex flex-col items-center pt-4 pb-2 px-4" style={{ height: 'calc(100vh - 180px)' }}>
      <iframe
        src="https://claude.site/public/artifacts/f5c0cdba-97e9-4e38-a389-096406a1af96/embed"
        title="Claude Artifact"
        className="w-full flex-1"
        frameBorder="0"
        allow="clipboard-write"
        allowFullScreen
      />
    </div>
  );
}
