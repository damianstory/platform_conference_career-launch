import { Play, CheckCircle, ClipboardCheck, Sparkles } from 'lucide-react';
import SlideCard from '../SlideCard';
import StatCard from '../charts/StatCard';
import { engagementStats } from '../data/statsData';

export default function EngagementHighlights() {
  return (
    <SlideCard>
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <span className="inline-block bg-gradient-to-r from-primary-blue to-[#00C2FF] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
          Engagement Highlights
        </span>
        <h1 className="text-2xl sm:text-[32px] font-extrabold text-brand-navy mb-1">
          Platform Activity
        </h1>
        <p className="text-sm text-gray-500">
          December 1–5, 2025 • Key Metrics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard
          icon={Play}
          value={engagementStats.sessionsWatched.toLocaleString()}
          label="Sessions Watched"
          color="blue"
        />
        <StatCard
          icon={CheckCircle}
          value={`${engagementStats.completionRate}%`}
          label="Session Completion"
          color="green"
        />
        <StatCard
          icon={ClipboardCheck}
          value={`${engagementStats.quizzesCompleted}%`}
          label="Booth Quizzes Completed"
          color="purple"
        />
        <StatCard
          icon={Sparkles}
          value={engagementStats.badgesEarned.toLocaleString()}
          label="Badges Earned from Quizzes"
          color="orange"
        />
      </div>

      {/* Footer Stats */}
      <div className="mt-8 pt-5 border-t border-neutral-2">
        <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
          <div className="p-4 bg-off-white rounded-xl">
            <div className="text-2xl font-extrabold text-brand-navy mb-1">
              {engagementStats.boothViews.toLocaleString()}
            </div>
            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
              Booth Views
            </div>
          </div>
          <div className="p-4 bg-off-white rounded-xl">
            <div className="text-2xl font-extrabold text-emerald-500 mb-1">
              {engagementStats.quizzesDone.toLocaleString()}
            </div>
            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
              Quizzes Done
            </div>
          </div>
          <div className="p-4 bg-off-white rounded-xl">
            <div className="text-2xl font-extrabold text-brand-navy mb-1">
              {engagementStats.resourcesDownloaded}
            </div>
            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
              Resources Downloaded
            </div>
          </div>
        </div>
      </div>
    </SlideCard>
  );
}
