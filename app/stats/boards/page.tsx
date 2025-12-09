import { StatsPageHeader } from '@/components/stats/StatsPageHeader';
import PlaceholderContent from '@/components/stats/PlaceholderContent';

export default function BoardStatsPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <StatsPageHeader
        title="Board Statistics"
        description="Analytics by Ontario school board"
      />
      <PlaceholderContent
        title="Board Analytics"
        message="School board breakdown coming soon. Data integration in progress."
      />
    </div>
  );
}
