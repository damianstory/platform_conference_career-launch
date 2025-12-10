'use client';

export default function CompanyStatsPage() {
  return (
    <div className="bg-brand-navy flex flex-col items-center pt-4 pb-2 px-4" style={{ height: 'calc(100vh - 180px)' }}>
      <iframe
        src="https://claude.site/public/artifacts/d6939bd9-d3e7-4f2d-ab33-79787a57e4a9/embed"
        title="Claude Artifact"
        className="w-full flex-1"
        frameBorder="0"
        allow="clipboard-write"
        allowFullScreen
      />
    </div>
  );
}
