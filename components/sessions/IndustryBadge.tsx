interface IndustryBadgeProps {
  industry: string | null;
  className?: string;
}

const industryColors: Record<string, string> = {
  // All industries use default gray styling for consistency
};

const defaultColors = 'bg-gray-50 text-gray-700 border-gray-200';

export default function IndustryBadge({ industry, className = '' }: IndustryBadgeProps) {
  if (!industry) {
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${defaultColors} ${className}`}>
        General
      </span>
    );
  }

  const colors = industryColors[industry] || defaultColors;

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${colors} ${className}`}>
      {industry}
    </span>
  );
}
