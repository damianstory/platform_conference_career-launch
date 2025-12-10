'use client';

export default function GeneralStatsPage() {
  return (
    <div className="bg-brand-navy flex flex-col items-center pt-4 pb-2 px-4" style={{ height: 'calc(100vh - 180px)' }}>
      <iframe
        src="https://claude.site/public/artifacts/3cf6fe16-2f53-4bbc-8708-6b2caae1ebb8/embed"
        title="Claude Artifact"
        className="w-full flex-1"
        frameBorder="0"
        allow="clipboard-write"
        allowFullScreen
      />
    </div>
  );
}
