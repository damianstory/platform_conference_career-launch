import SlideCard from '../SlideCard';
import Legend from '../charts/Legend';
import StackedBarChart from '../charts/StackedBarChart';
import { boardsByViews } from '../data/statsData';

export default function TopSchoolBoards() {
  return (
    <SlideCard>
      {/* Header */}
      <div className="mb-6">
        <span className="inline-block bg-gradient-to-r from-primary-blue to-[#00C2FF] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
          Top Participating Boards
        </span>
        <h1 className="text-xl sm:text-[28px] font-extrabold text-brand-navy mb-1">
          Top 10 School Boards by Views
        </h1>
        <p className="text-sm text-gray-500">
          Career Launch 2025 • Dec 1–5
        </p>
      </div>

      {/* Legend */}
      <Legend
        items={[
          { color: '#22224C', label: 'Educators' },
          { color: '#0092FF', label: 'Students' },
        ]}
      />

      {/* Chart */}
      <StackedBarChart data={boardsByViews} showBoardName />

      {/* Footer */}
      <div className="mt-6 pt-5 border-t border-neutral-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-sm text-gray-400">
          Top 10 accounts for <span className="text-primary-blue font-semibold">86%</span> of total session views
        </p>
        <p className="text-sm font-extrabold text-brand-navy">
          Top 10 Total: <span className="text-primary-blue">5,856</span>
        </p>
      </div>
    </SlideCard>
  );
}
