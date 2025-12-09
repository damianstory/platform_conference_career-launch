import SlideCard from '../SlideCard';
import { dailyActivity, totals } from '../data/statsData';

export default function ActivityByDay() {
  const maxSessions = Math.max(...dailyActivity.map(d => d.sessions));

  return (
    <SlideCard>
      {/* Header */}
      <div className="mb-8">
        <span className="inline-block bg-gradient-to-r from-brand-navy to-[#3a3a6e] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
          Daily Activity
        </span>
        <h1 className="text-2xl sm:text-[28px] font-extrabold text-brand-navy mb-1">
          Sessions by Day
        </h1>
        <p className="text-sm text-gray-500">
          Career Launch 2025 • Dec 1–5
        </p>
      </div>

      {/* Chart */}
      <div className="flex flex-col gap-4">
        {dailyActivity.map((day) => {
          const widthPercent = (day.sessions / maxSessions) * 100;

          return (
            <div
              key={day.day}
              className="grid grid-cols-[100px_1fr_90px] sm:grid-cols-[120px_1fr_100px] items-center gap-3 sm:gap-4"
            >
              {/* Day Label */}
              <span className="text-sm font-semibold text-brand-navy whitespace-nowrap">
                {day.day} <span className="font-normal text-gray-500">{day.date}</span>
              </span>

              {/* Bar */}
              <div className="relative h-11 bg-off-white rounded-lg overflow-hidden">
                <div
                  className={`
                    absolute top-0 left-0 h-full rounded-lg flex items-center pl-4
                    ${day.isPeak
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-400'
                      : 'bg-gradient-to-r from-primary-blue to-[#00C2FF]'
                    }
                  `}
                  style={{ width: `${widthPercent}%` }}
                >
                  {day.isPeak && (
                    <span className="text-white text-sm font-semibold whitespace-nowrap">
                      {day.sessions.toLocaleString()} sessions ⭐ Peak Day
                    </span>
                  )}
                </div>
              </div>

              {/* Value */}
              <div className="text-right">
                <div className="text-base font-extrabold text-brand-navy">
                  {day.sessions.toLocaleString()}
                </div>
                <div className="text-[11px] font-semibold text-gray-500">
                  {day.viewers} viewers
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-8 pt-5 border-t border-neutral-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-sm text-gray-400">
          Tuesday accounted for <span className="text-primary-blue font-semibold">69%</span> of all session activity
        </p>
        <p className="text-sm font-extrabold text-brand-navy">
          Total Sessions: <span className="text-primary-blue">{totals.totalSessions.toLocaleString()}</span>
        </p>
      </div>
    </SlideCard>
  );
}
