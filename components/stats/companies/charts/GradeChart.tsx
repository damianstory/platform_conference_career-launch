import { GradeDistribution } from '../data/companiesData';

interface GradeChartProps {
  distribution: GradeDistribution;
}

const gradeColors = {
  grade7: '#0092FF',
  grade8: '#00A3FF',
  grade9: '#00B4FF',
  grade10: '#00C5FF',
  grade11: '#22224C',
  grade12: '#3D3D7A',
  mixed: '#65738B',
};

const gradeLabels = {
  grade7: 'Grade 7',
  grade8: 'Grade 8',
  grade9: 'Grade 9',
  grade10: 'Grade 10',
  grade11: 'Grade 11',
  grade12: 'Grade 12',
  mixed: 'Mixed/Other',
};

export default function GradeChart({ distribution }: GradeChartProps) {
  // Filter out grades with 0 or undefined values and sort by grade order
  const gradeOrder = ['grade7', 'grade8', 'grade9', 'grade10', 'grade11', 'grade12', 'mixed'] as const;
  const grades = gradeOrder.filter(grade => distribution[grade] && distribution[grade]! > 0);

  if (grades.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No grade distribution data available
      </div>
    );
  }

  const maxPercent = Math.max(...grades.map(g => distribution[g] || 0));

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-brand-navy mb-4">Grade Distribution</h3>
      {grades.map((grade) => {
        const percent = distribution[grade]!;
        const widthPercent = (percent / maxPercent) * 100;
        const color = gradeColors[grade];

        return (
          <div key={grade} className="space-y-1">
            {/* Label row */}
            <div className="flex justify-between items-center text-xs font-semibold text-gray-500">
              <span>{gradeLabels[grade]}</span>
              <span>{percent}%</span>
            </div>

            {/* Bar background */}
            <div className="bg-neutral-2 rounded-lg h-9 overflow-hidden">
              <div
                className="h-full rounded-lg flex items-center pl-3 transition-all duration-500 ease-out"
                style={{
                  width: `${widthPercent}%`,
                  backgroundColor: color,
                }}
              >
                {/* Show percentage inside bar if wide enough */}
                {widthPercent > 15 && (
                  <span className="text-xs font-bold text-white">
                    {percent}%
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
