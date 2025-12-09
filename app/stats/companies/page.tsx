import { StatsPageHeader } from '@/components/stats/StatsPageHeader';
import PlaceholderContent from '@/components/stats/PlaceholderContent';

export default function CompanyStatsPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <StatsPageHeader
        title="Company Statistics"
        description="Sponsor and booth engagement metrics"
      />
      <PlaceholderContent
        title="Company Analytics"
        message="Booth and sponsor metrics coming soon. Data integration in progress."
      />
    </div>
  );
}
