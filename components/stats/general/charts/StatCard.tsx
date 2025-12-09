import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

const colorClasses = {
  blue: {
    icon: 'bg-primary-blue',
    accent: 'bg-primary-blue',
  },
  green: {
    icon: 'bg-emerald-500',
    accent: 'bg-emerald-500',
  },
  purple: {
    icon: 'bg-violet-600',
    accent: 'bg-violet-600',
  },
  orange: {
    icon: 'bg-amber-500',
    accent: 'bg-amber-500',
  },
};

export default function StatCard({ icon: Icon, value, label, color }: StatCardProps) {
  const colors = colorClasses[color];

  return (
    <div className="text-center p-5 sm:p-7 bg-gradient-to-b from-off-white to-white rounded-2xl border border-neutral-2 relative">
      {/* Icon */}
      <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center mx-auto mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Value */}
      <div className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-none mb-2">
        {value}
      </div>

      {/* Label */}
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        {label}
      </div>

      {/* Bottom accent */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 ${colors.accent} rounded-t`} />
    </div>
  );
}
