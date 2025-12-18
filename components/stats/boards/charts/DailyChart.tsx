import { DailyData } from '../data/boardsData';

interface DailyChartProps {
  daily: DailyData[];
}

export default function DailyChart({ daily }: DailyChartProps) {
  const formatNumber = (num: number) => num.toLocaleString();

  // Find max total for bar width calculation
  const maxTotal = Math.max(...daily.map(d => d.total));

  return (
    <div className="space-y-4">
      {/* Legend */}
      <div className="flex justify-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-navy" />
          <span className="text-sm text-gray-600">Educator Views</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary-blue" />
          <span className="text-sm text-gray-600">Student Views</span>
        </div>
      </div>

      {/* Daily bars */}
      <div className="space-y-4">
        {daily.map((day) => {
          const widthPercent = (day.total / maxTotal) * 100;
          const isPeak = day.is_peak;
          const educatorPercent = day.total > 0 ? (day.educator / day.total) * 100 : 0;
          const studentPercent = day.total > 0 ? (day.student / day.total) * 100 : 0;

          return (
            <div key={day.day_name} className="grid grid-cols-[120px_1fr_100px] gap-4 items-center">
              {/* Day label */}
              <div className="text-sm">
                <span className="font-semibold text-brand-navy">{day.day_name}</span>
                <span className="text-gray-500 ml-1">{day.day_short}</span>
              </div>

              {/* Bar container - ROUNDED on container */}
              <div className="bg-off-white rounded-lg h-9 overflow-hidden">
                {isPeak ? (
                  /* Peak day - green bar with label */
                  <div
                    className="h-full rounded-lg flex items-center px-4 bg-gradient-to-r from-emerald-500 to-emerald-400"
                    style={{ width: `${widthPercent}%` }}
                  >
                    <span className="text-xs font-semibold text-white whitespace-nowrap">
                      {day.total} sessions ⭐ Peak Day
                    </span>
                  </div>
                ) : (
                  /* Non-peak days - stacked educator/student bars */
                  <div
                    className="h-full rounded-lg flex overflow-hidden"
                    style={{ width: `${widthPercent}%` }}
                  >
                    {/* Educator segment - dark navy */}
                    {day.educator > 0 && (
                      <div
                        className="h-full bg-brand-navy flex items-center justify-center"
                        style={{ width: `${educatorPercent}%` }}
                      />
                    )}
                    {/* Student segment - light blue */}
                    {day.student > 0 && (
                      <div
                        className="h-full bg-primary-blue flex items-center justify-center"
                        style={{ width: `${studentPercent}%` }}
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Values */}
              <div className="text-right">
                <div className="text-sm font-bold text-brand-navy">
                  {day.total}
                </div>
                <div className="text-xs text-gray-500">
                  {day.educator} edu • {day.student} stu
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
