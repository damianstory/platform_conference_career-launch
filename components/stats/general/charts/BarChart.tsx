interface BarChartItem {
  rank: number;
  label: string;
  value: number;
  unit?: string;
}

interface BarChartProps {
  data: BarChartItem[];
  maxValue?: number;
  compact?: boolean;
  showTopThree?: boolean;
  valueColor?: string;
}

function getBarTierClass(rank: number, total: number): string {
  if (rank <= 2) return 'from-primary-blue to-[#00C2FF]';
  if (rank <= 3) return 'from-[#0080E6] to-[#00A8E6]';
  if (rank <= 5) return 'from-[#006DCC] to-primary-blue';
  if (rank <= 10) return 'from-brand-navy to-[#3a3a6e]';
  if (rank <= 19) return 'from-[#3a3a6e] to-[#505090]';
  return 'from-[#65738B] to-[#AAB7CB]';
}

export default function BarChart({
  data,
  maxValue,
  compact = false,
  showTopThree = true,
  valueColor,
}: BarChartProps) {
  const max = maxValue || Math.max(...data.map(d => d.value));

  return (
    <div className={`flex flex-col ${compact ? 'gap-1.5' : 'gap-3'}`}>
      {data.map((item) => {
        const widthPercent = (item.value / max) * 100;
        const isTopThree = showTopThree && item.rank <= 3;
        const tierClass = getBarTierClass(item.rank, data.length);

        return (
          <div
            key={item.rank}
            className={`grid items-center gap-3 sm:gap-4 ${
              compact
                ? 'grid-cols-[24px_1fr_50px] sm:grid-cols-[24px_1fr_60px]'
                : 'grid-cols-[32px_1fr_70px]'
            }`}
          >
            {/* Rank */}
            <span
              className={`
                text-right font-bold
                ${compact ? 'text-xs' : 'text-sm'}
                ${isTopThree ? 'text-primary-blue' : 'text-gray-400'}
              `}
            >
              {item.rank}
            </span>

            {/* Bar */}
            <div
              className={`
                relative bg-off-white rounded-lg overflow-hidden
                ${compact ? 'h-7' : 'h-11'}
              `}
            >
              <div
                className={`
                  absolute top-0 left-0 h-full rounded-lg
                  bg-gradient-to-r ${tierClass}
                  flex items-center
                  ${compact ? 'pl-3 min-w-[140px] sm:min-w-[180px]' : 'pl-4 min-w-[180px] sm:min-w-[220px]'}
                `}
                style={{ width: `${Math.max(widthPercent, compact ? 40 : 35)}%` }}
              >
                <span
                  className={`
                    text-white font-semibold whitespace-nowrap overflow-hidden text-ellipsis
                    ${compact ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm'}
                  `}
                  style={{ maxWidth: 'calc(100% - 16px)' }}
                >
                  {item.label}
                </span>
              </div>
            </div>

            {/* Value */}
            <span
              className={`
                text-right font-extrabold text-brand-navy
                ${compact ? 'text-xs sm:text-sm' : 'text-base'}
              `}
              style={valueColor ? { color: valueColor } : undefined}
            >
              {item.value.toLocaleString()}{item.unit ? ` ${item.unit}` : ''}
            </span>
          </div>
        );
      })}
    </div>
  );
}
