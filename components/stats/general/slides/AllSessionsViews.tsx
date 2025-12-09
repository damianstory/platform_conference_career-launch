import SlideCard from '../SlideCard';
import BarChart from '../charts/BarChart';
import { sessionsByViews, totals } from '../data/statsData';

export default function AllSessionsViews() {
  return (
    <SlideCard compact>
      {/* Header */}
      <div className="mb-6">
        <span className="inline-block bg-gradient-to-r from-primary-blue to-[#00C2FF] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
          Complete Overview
        </span>
        <h1 className="text-xl sm:text-[28px] font-extrabold text-brand-navy mb-1">
          All 27 Sessions by Views
        </h1>
        <p className="text-sm text-gray-500">
          Career Launch 2025 • Dec 1–5
        </p>
      </div>

      {/* Scrollable Chart */}
      <div className="max-h-[420px] overflow-y-auto pr-2 scrollbar-thin scrollbar-track-off-white scrollbar-thumb-neutral-3">
        <BarChart data={sessionsByViews} compact />
      </div>

      {/* Footer */}
      <div className="mt-6 pt-5 border-t border-neutral-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-sm text-gray-400">
          Career Launch 2025 • 26 Ontario School Boards
        </p>
        <p className="text-sm font-extrabold text-brand-navy">
          Total Views: <span className="text-primary-blue">{totals.totalSessions.toLocaleString()}</span>
        </p>
      </div>
    </SlideCard>
  );
}
