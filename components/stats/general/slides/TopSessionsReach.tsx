import SlideCard from '../SlideCard';
import Legend from '../charts/Legend';
import StackedBarChart from '../charts/StackedBarChart';
import { sessionsByReach } from '../data/statsData';

// Transform data to include educator/student split (approximated from artifact)
const top10WithSplit = sessionsByReach.slice(0, 10).map((session, index) => ({
  ...session,
  // These percentages are approximated from the artifact visual
  educatorPercent: [94.7, 80.1, 64.6, 65.5, 64.6, 64.6, 58.0, 50.4, 48.2, 42.9][index],
  studentPercent: [5.3, 4.9, 4.5, 2.8, 3.5, 3.3, 6.7, 3.4, 2.2, 1.9][index],
}));

export default function TopSessionsReach() {
  return (
    <SlideCard>
      {/* Header */}
      <div className="mb-6">
        <span className="inline-block bg-gradient-to-r from-primary-blue to-[#00C2FF] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
          Estimated Impact
        </span>
        <h1 className="text-xl sm:text-[28px] font-extrabold text-brand-navy mb-1">
          Top 10 Sessions by Reach
        </h1>
        <p className="text-sm text-gray-500">
          Career Launch 2025 • Dec 1–5
        </p>
      </div>

      {/* Legend */}
      <Legend
        items={[
          { color: '#22224C', label: 'Educator Reach' },
          { color: '#0092FF', label: 'Student Reach' },
        ]}
      />

      {/* Chart */}
      <StackedBarChart data={top10WithSplit} valueColor="#10B981" />

      {/* Footer */}
      <div className="mt-6 pt-5 border-t border-neutral-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-sm text-gray-400">
          Reach = Educator views × avg class size (30) + Student views
        </p>
        <p className="text-sm font-extrabold text-brand-navy">
          Top 10 Reach: <span className="text-emerald-500">~42,000</span>
        </p>
      </div>
    </SlideCard>
  );
}
