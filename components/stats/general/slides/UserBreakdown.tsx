import SlideCard from '../SlideCard';
import DonutChart from '../charts/DonutChart';
import { userBreakdown } from '../data/statsData';

export default function UserBreakdown() {
  return (
    <SlideCard>
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <span className="inline-block bg-gradient-to-r from-violet-600 to-violet-400 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
          Audience Breakdown
        </span>
        <h1 className="text-2xl sm:text-[28px] font-extrabold text-brand-navy mb-1">
          Sessions by User Type
        </h1>
        <p className="text-sm text-gray-500">
          Career Launch 2025 • Dec 1–5
        </p>
      </div>

      {/* Donut Chart and Legend */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-5">
        <DonutChart
          total={userBreakdown.total}
          segments={[
            { value: userBreakdown.educators.count, color: '#22224C' },
            { value: userBreakdown.students.count, color: '#0092FF' },
          ]}
          label="Sessions"
        />

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded bg-primary-blue" />
            <div>
              <div className="text-3xl font-extrabold text-brand-navy leading-tight">
                {userBreakdown.students.count.toLocaleString()}
              </div>
              <div className="text-sm font-semibold text-gray-500">
                Students <span className="text-primary-blue font-bold">{userBreakdown.students.percent}%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded bg-brand-navy" />
            <div>
              <div className="text-3xl font-extrabold text-brand-navy leading-tight">
                {userBreakdown.educators.count.toLocaleString()}
              </div>
              <div className="text-sm font-semibold text-gray-500">
                Educators <span className="text-brand-navy font-bold">{userBreakdown.educators.percent}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-8 pt-5 border-t border-neutral-2">
        <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
          <div className="p-4 bg-off-white rounded-xl">
            <div className="text-2xl font-extrabold text-brand-navy mb-1">
              {userBreakdown.uniqueEducators}
            </div>
            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
              Unique Educators
            </div>
          </div>
          <div className="p-4 bg-off-white rounded-xl">
            <div className="text-2xl font-extrabold text-primary-blue mb-1">
              {userBreakdown.avgSessionsPerEducator}
            </div>
            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
              Avg Sessions/Educator
            </div>
          </div>
          <div className="p-4 bg-off-white rounded-xl">
            <div className="text-2xl font-extrabold text-emerald-500 mb-1">
              {userBreakdown.sessionsViewed}
            </div>
            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
              Sessions Viewed
            </div>
          </div>
        </div>
      </div>
    </SlideCard>
  );
}
