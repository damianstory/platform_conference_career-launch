import { SchoolData } from '../data/boardsData';

interface SchoolsChartProps {
  schools: SchoolData[];
}

export default function SchoolsChart({ schools }: SchoolsChartProps) {
  const formatNumber = (num: number) => num.toLocaleString();

  // Find max reach for bar width calculation
  const maxReach = Math.max(...schools.map(s => s.reach));

  return (
    <div className="space-y-2.5">
      {schools.map((school) => (
        <div
          key={school.rank}
          className="grid grid-cols-[32px_200px_1fr_80px] gap-4 items-center"
        >
          {/* Rank */}
          <div
            className={`text-sm font-bold text-center ${
              school.is_top3 ? 'text-primary-blue' : 'text-gray-400'
            }`}
          >
            {school.rank}
          </div>

          {/* School name */}
          <div className="text-sm font-semibold text-brand-navy truncate">
            {school.name}
          </div>

          {/* Stacked bar - outer container for background, inner wrapper for rounding */}
          <div className="bg-off-white rounded-lg h-9 overflow-hidden">
            <div
              className="h-full flex rounded-lg overflow-hidden"
              style={{ width: `${school.edu_width + school.stu_width}%` }}
            >
              {school.edu_width > 0 && (
                <div
                  className="h-full bg-brand-navy"
                  style={{ width: `${(school.edu_width / (school.edu_width + school.stu_width)) * 100}%` }}
                />
              )}
              {school.stu_width > 0 && (
                <div
                  className="h-full bg-primary-blue"
                  style={{ width: `${(school.stu_width / (school.edu_width + school.stu_width)) * 100}%` }}
                />
              )}
            </div>
          </div>

          {/* Reach value */}
          <div
            className={`text-sm font-bold text-right ${
              school.is_top3 ? 'text-primary-blue' : 'text-brand-navy'
            }`}
          >
            {formatNumber(school.reach)}
          </div>
        </div>
      ))}
    </div>
  );
}
