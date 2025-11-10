interface IndustryBadgeProps {
  industry: string | null;
  className?: string;
}

const industryColors: Record<string, string> = {
  'Healthcare': 'bg-blue-50 text-blue-700 border-blue-200',
  'Technology': 'bg-green-50 text-green-700 border-green-200',
  'Skilled Trades': 'bg-amber-50 text-amber-700 border-amber-200',
  'Business': 'bg-purple-50 text-purple-700 border-purple-200',
  'Public Service': 'bg-indigo-50 text-indigo-700 border-indigo-200',
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
