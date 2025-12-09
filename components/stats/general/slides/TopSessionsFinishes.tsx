import SlideCard from '../SlideCard';
import BarChart from '../charts/BarChart';
import { sessionsByFinishes, totals } from '../data/statsData';

export default function TopSessionsFinishes() {
  return (
    <SlideCard>
      {/* Header */}
      <div className="mb-8">
        <span className="inline-block bg-gradient-to-r from-primary-blue to-[#00C2FF] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
          Completion
        </span>
        <h1 className="text-2xl sm:text-[28px] font-extrabold text-brand-navy mb-1">
          Top 10 Sessions by Finishes
        </h1>
        <p className="text-sm text-gray-500">
          Career Launch 2025 • Dec 1–5
        </p>
      </div>

      {/* Chart */}
      <BarChart data={sessionsByFinishes} />

      {/* Footer */}
      <div className="mt-8 pt-5 border-t border-neutral-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-sm text-gray-400">
          Top 10 accounts for <span className="text-primary-blue font-semibold">62%</span> of all session finishes
        </p>
        <p className="text-sm font-extrabold text-brand-navy">
          Total Finishes: <span className="text-primary-blue">{totals.totalFinishes.toLocaleString()}</span>
        </p>
      </div>
    </SlideCard>
  );
}
