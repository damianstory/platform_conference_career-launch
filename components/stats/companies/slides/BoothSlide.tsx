import { CompanyData } from '../data/companiesData';
import StatCard from '@/components/stats/general/charts/StatCard';
import SlideCard from '@/components/stats/general/SlideCard';

interface BoothSlideProps {
  company: CompanyData;
}

export default function BoothSlide({ company }: BoothSlideProps) {
  const { boothMetrics } = company;

  // Check if we have any booth data
  const hasBoothData = Object.keys(boothMetrics).length > 0;

  if (!hasBoothData) {
    return (
      <SlideCard>
        <div className="mb-8">
          <div className="inline-block px-4 py-1.5 bg-primary-blue text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
            Booth Engagement
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-2 leading-tight">
            Virtual Booth Performance
          </h1>
          <p className="text-base text-gray-500">{company.title}</p>
        </div>

        <div className="text-center py-12">
          <p className="text-gray-500">No booth engagement data available</p>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-2 text-center">
          <p className="text-xs text-gray-400">
            Career Launch 2025 • Powered by myBlueprint
          </p>
        </div>
      </SlideCard>
    );
  }

  return (
    <SlideCard>
      {/* Header */}
      <div className="mb-8">
        <div className="inline-block px-4 py-1.5 bg-primary-blue text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
          Booth Engagement
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-2 leading-tight">
          Virtual Booth Performance
        </h1>
        <p className="text-base text-gray-500">{company.title}</p>
      </div>

      {/* Top 3 Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {boothMetrics.pageViews !== undefined && (
          <StatCard value={boothMetrics.pageViews} label="Booth Page Views" color="blue" />
        )}
        {boothMetrics.uniqueVisitors !== undefined && (
          <StatCard value={boothMetrics.uniqueVisitors} label="Unique Visitors" color="blue" />
        )}
        {boothMetrics.videoViews !== undefined && (
          <StatCard value={boothMetrics.videoViews} label="Booth Video Views" color="blue" />
        )}
      </div>

      {/* Booth Metrics Grid (6 smaller metrics) */}
      {(boothMetrics.quizStarts !== undefined ||
        boothMetrics.quizCompletions !== undefined ||
        boothMetrics.completionRate !== undefined ||
        boothMetrics.badgesDownloaded !== undefined ||
        boothMetrics.ctaClicks !== undefined ||
        boothMetrics.resourcesClicked !== undefined) && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-2">
          {boothMetrics.quizStarts !== undefined && (
            <div className="text-center p-4 bg-off-white rounded-xl">
              <div className="text-2xl font-extrabold text-brand-navy mb-1">
                {boothMetrics.quizStarts}
              </div>
              <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
                Quiz Starts
              </div>
            </div>
          )}

          {boothMetrics.quizCompletions !== undefined && (
            <div className="text-center p-4 bg-off-white rounded-xl">
              <div className="text-2xl font-extrabold text-brand-navy mb-1">
                {boothMetrics.quizCompletions}
              </div>
              <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
                Quiz Completions
              </div>
            </div>
          )}

          {boothMetrics.completionRate !== undefined && (
            <div className="text-center p-4 bg-off-white rounded-xl">
              <div className="text-2xl font-extrabold text-emerald-500 mb-1">
                {boothMetrics.completionRate}
              </div>
              <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
                Completion Rate
              </div>
            </div>
          )}

          {boothMetrics.badgesDownloaded !== undefined && (
            <div className="text-center p-4 bg-off-white rounded-xl">
              <div className="text-2xl font-extrabold text-brand-navy mb-1">
                {boothMetrics.badgesDownloaded}
              </div>
              <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
                Badges Downloaded
              </div>
            </div>
          )}

          {boothMetrics.ctaClicks !== undefined && (
            <div className="text-center p-4 bg-off-white rounded-xl">
              <div className="text-2xl font-extrabold text-brand-navy mb-1">
                {boothMetrics.ctaClicks}
              </div>
              <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
                CTA Clicks
              </div>
            </div>
          )}

          {boothMetrics.resourcesClicked !== undefined && (
            <div className="text-center p-4 bg-off-white rounded-xl">
              <div className="text-2xl font-extrabold text-brand-navy mb-1">
                {boothMetrics.resourcesClicked}
              </div>
              <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
                Resources Clicked
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-neutral-2 text-center">
        <p className="text-xs text-gray-400">
          Career Launch 2025 • Powered by myBlueprint
        </p>
      </div>
    </SlideCard>
  );
}
