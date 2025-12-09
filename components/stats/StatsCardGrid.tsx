interface StatsCardGridProps {
  children: React.ReactNode;
}

export default function StatsCardGrid({ children }: StatsCardGridProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}
