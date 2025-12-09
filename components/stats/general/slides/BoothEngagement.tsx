import SlideCard from '../SlideCard';
import BarChart from '../charts/BarChart';
import { boothActivities, topBooths, totals } from '../data/statsData';

export default function BoothEngagement() {
  return (
    <SlideCard compact>
      {/* Header */}
      <div className="mb-6">
        <span className="inline-block bg-gradient-to-r from-primary-blue to-[#00C2FF] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
          Booth Engagement
        </span>
        <h1 className="text-xl sm:text-[28px] font-extrabold text-brand-navy mb-1">
          Virtual Booth Activity
        </h1>
        <p className="text-sm text-gray-500">
          Career Launch 2025 • Dec 1–5
        </p>
      </div>

      {/* Activity Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {boothActivities.map((activity) => (
          <div
            key={activity.name}
            className="flex items-center justify-between p-4 bg-off-white rounded-xl"
          >
            <span className="text-sm font-semibold text-brand-navy">
              {activity.name}
            </span>
            <span className="text-lg font-extrabold text-primary-blue">
              {activity.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral-2 my-4" />

      {/* Top 10 Booths */}
      <h3 className="text-sm font-bold text-brand-navy uppercase tracking-wide mb-3">
        Top 10 Booths by Page Views
      </h3>

      <BarChart data={topBooths} compact />

      {/* Footer */}
      <div className="mt-6 pt-5 border-t border-neutral-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-sm text-gray-400">
          Total Booth Page Views: <span className="text-primary-blue font-semibold">{totals.totalBoothViews.toLocaleString()}</span>
        </p>
        <p className="text-sm font-extrabold text-brand-navy">
          Unique Visitors to Top 10: <span className="text-primary-blue">3,250</span>
        </p>
      </div>
    </SlideCard>
  );
}
