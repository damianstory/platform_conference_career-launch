interface DonutChartProps {
  total: number;
  segments: Array<{
    value: number;
    color: string;
  }>;
  label: string;
}

export default function DonutChart({ total, segments, label }: DonutChartProps) {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;

  // Calculate stroke dash arrays for each segment
  let accumulatedOffset = 0;
  const segmentData = segments.map(segment => {
    const percent = segment.value / total;
    const dashArray = percent * circumference;
    const dashOffset = -accumulatedOffset;
    accumulatedOffset += dashArray;
    return {
      ...segment,
      dashArray,
      dashOffset,
    };
  });

  return (
    <div className="relative w-[220px] h-[220px]">
      <svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        className="-rotate-90"
      >
        {/* Background circle */}
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="#F6F6FF"
          strokeWidth="30"
        />

        {/* Segments */}
        {segmentData.map((segment, index) => (
          <circle
            key={index}
            cx="110"
            cy="110"
            r={radius}
            fill="none"
            stroke={segment.color}
            strokeWidth="30"
            strokeDasharray={`${segment.dashArray} ${circumference}`}
            strokeDashoffset={segment.dashOffset}
          />
        ))}
      </svg>

      {/* Center text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-4xl font-extrabold text-brand-navy leading-none">
          {total.toLocaleString()}
        </div>
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {label}
        </div>
      </div>
    </div>
  );
}
