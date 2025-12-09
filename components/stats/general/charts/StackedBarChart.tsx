interface StackedBarItem {
  rank: number;
  label: string;
  value: number;
  educatorPercent: number;
  studentPercent: number;
}

interface StackedBarChartProps {
  data: StackedBarItem[];
  maxValue?: number;
  showBoardName?: boolean;
  valueColor?: string;
}

export default function StackedBarChart({
  data,
  maxValue,
  showBoardName = false,
  valueColor,
}: StackedBarChartProps) {
  const max = maxValue || Math.max(...data.map(d => d.value));

  return (
    <div className="flex flex-col gap-2.5">
      {data.map((item) => {
        const totalWidth = (item.value / max) * 100;
        const isTopThree = item.rank <= 3;

        return (
          <div
            key={item.rank}
            className={`grid items-center gap-3 sm:gap-4 ${
              showBoardName
                ? 'grid-cols-[28px_100px_1fr_70px] sm:grid-cols-[32px_140px_1fr_90px]'
                : 'grid-cols-[28px_1fr_70px] sm:grid-cols-[32px_1fr_80px]'
            }`}
          >
            {/* Rank */}
            <span
              className={`
                text-right text-sm font-bold
                ${isTopThree ? (valueColor ? '' : 'text-primary-blue') : 'text-gray-400'}
              `}
              style={isTopThree && valueColor ? { color: valueColor } : undefined}
            >
              {item.rank}
            </span>

            {/* Board Name (optional) */}
            {showBoardName && (
              <span className="text-xs sm:text-sm font-semibold text-brand-navy truncate">
                {item.label}
              </span>
            )}

            {/* Stacked Bar */}
            <div className="relative h-11 bg-off-white rounded-lg overflow-hidden flex">
              {/* Educator segment */}
              <div
                className="h-full bg-gradient-to-r from-brand-navy to-[#3a3a6e] flex items-center"
                style={{ width: `${(item.educatorPercent / 100) * totalWidth}%` }}
              >
                {!showBoardName && (item.educatorPercent / 100) * totalWidth > 30 && (
                  <span className="text-white text-xs font-semibold pl-3 whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.label}
                  </span>
                )}
              </div>

              {/* Student segment */}
              <div
                className="h-full bg-gradient-to-r from-primary-blue to-[#00C2FF]"
                style={{ width: `${(item.studentPercent / 100) * totalWidth}%` }}
              />
            </div>

            {/* Value */}
            <span
              className="text-right text-base font-extrabold text-brand-navy"
              style={valueColor && isTopThree ? { color: valueColor } : undefined}
            >
              {item.value.toLocaleString()}
            </span>
          </div>
        );
      })}
    </div>
  );
}
