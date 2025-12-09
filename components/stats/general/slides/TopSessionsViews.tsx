import SlideCard from '../SlideCard';
import BarChart from '../charts/BarChart';
import { sessionsByViews } from '../data/statsData';

export default function TopSessionsViews() {
  const top10 = sessionsByViews.slice(0, 10);

  return (
    <SlideCard>
      {/* Header */}
      <div className="mb-8">
        <span className="inline-block bg-gradient-to-r from-primary-blue to-[#00C2FF] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
          Most Popular
        </span>
        <h1 className="text-2xl sm:text-[28px] font-extrabold text-brand-navy mb-1">
          Top 10 Sessions by Views
        </h1>
        <p className="text-sm text-gray-500">
          Career Launch 2025 • Dec 1–5
        </p>
      </div>

      {/* Chart */}
      <BarChart data={top10} />

      {/* Footer */}
      <div className="mt-8 pt-5 border-t border-neutral-2 text-center">
        <p className="text-sm text-gray-400">
          Top 10 sessions account for <span className="text-primary-blue font-semibold">56%</span> of all views
        </p>
      </div>
    </SlideCard>
  );
}
