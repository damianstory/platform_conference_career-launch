import { GradeData } from '../data/boardsData';

interface BoardGradeChartProps {
  grades: GradeData[];
}

// Map tier names to gradient colors
const tierColors: Record<string, string> = {
  peak: 'from-emerald-500 to-emerald-400',
  'tier-1': 'from-primary-blue to-light-blue',
  'tier-2': 'from-blue-500 to-blue-400',
  'tier-3': 'from-brand-navy to-brand-navy/80',
  'tier-4': 'from-gray-600 to-gray-500',
  'tier-5': 'from-gray-500 to-gray-400',
};

export default function BoardGradeChart({ grades }: BoardGradeChartProps) {
  if (grades.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No grade distribution data available
      </div>
    );
  }

  // Find max sessions for bar width calculation
  const maxSessions = Math.max(...grades.map(g => g.sessions));

  return (
    <div className="space-y-3.5">
      {grades.map((grade) => {
        const widthPercent = (grade.sessions / maxSessions) * 100;
        const gradientClass = tierColors[grade.tier] || tierColors['tier-3'];
        const isPeak = grade.is_top;

        return (
          <div
            key={grade.grade}
            className="grid grid-cols-[100px_1fr_60px] gap-4 items-center"
          >
            {/* Grade label */}
            <div className="text-sm font-semibold text-brand-navy">
              {grade.grade}
            </div>

            {/* Bar container - ROUNDED on container */}
            <div className="bg-off-white rounded-lg h-9 overflow-hidden">
              <div
                className={`h-full rounded-lg flex items-center px-4 bg-gradient-to-r ${gradientClass}`}
                style={{ width: `${widthPercent}%` }}
              >
                {widthPercent > 20 && (
                  <span className="text-xs font-semibold text-white">
                    {grade.sessions} sessions {isPeak && '⭐ Most Active'}
                  </span>
                )}
              </div>
            </div>

            {/* Sessions count */}
            <div className="text-sm font-bold text-brand-navy text-right">
              {grade.sessions}
            </div>
          </div>
        );
      })}
    </div>
  );
}
