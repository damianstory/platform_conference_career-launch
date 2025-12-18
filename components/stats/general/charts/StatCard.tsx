interface StatCardProps {
  value: string | number;
  label: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

const accentColors = {
  blue: 'bg-primary-blue',
  green: 'bg-emerald-500',
  purple: 'bg-violet-600',
  orange: 'bg-amber-500',
};

export default function StatCard({ value, label, color }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-gradient-to-b from-off-white to-white rounded-2xl border border-neutral-2 relative min-h-[140px]">
      {/* Value */}
      <div className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-none mb-3">
        {value}
      </div>

      {/* Label */}
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide leading-tight">
        {label}
      </div>

      {/* Bottom accent */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 ${accentColors[color]} rounded-t`} />
    </div>
  );
}
