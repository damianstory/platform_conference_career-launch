import { BoardData } from '../data/boardsData';
import StatCard from '@/components/stats/general/charts/StatCard';

interface ImpactOverviewSlideProps {
  board: BoardData;
}

export default function ImpactOverviewSlide({ board }: ImpactOverviewSlideProps) {
  const formatNumber = (num: number) => num.toLocaleString();

  return (
    <div className="bg-white rounded-3xl p-12 shadow-2xl w-full relative">
      {/* Top accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-blue via-light-blue to-primary-blue rounded-t-3xl" />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-brand-navy to-brand-navy/80 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
          {board.name}
        </div>
        <h1 className="text-4xl font-extrabold text-brand-navy mb-2">
          Career Launch 2025 Report
        </h1>
        <p className="text-sm text-gray-500">
          December 1–5, 2025 • Your Board's Engagement
        </p>
      </div>

      {/* Stat Cards - NO ICONS */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard
          value={board.total_sessions}
          label="Sessions Watched"
          color="blue"
        />
        <StatCard
          value={board.unique_educators}
          label="Unique Educators"
          color="green"
        />
        <StatCard
          value={board.schools_count}
          label="Schools Participating"
          color="purple"
        />
        <StatCard
          value={formatNumber(board.est_reach)}
          label="Est. Student Reach"
          color="orange"
        />
      </div>

      {/* Footer Stats */}
      <div className="border-t border-neutral-2 pt-6">
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-navy mb-1">
              {board.educator_views}
            </div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Educator Views
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-blue mb-1">
              {board.student_views}
            </div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Student Views
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-500 mb-1">
              {board.sessions_explored}/27
            </div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Sessions Explored
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
