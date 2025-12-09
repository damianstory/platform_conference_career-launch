'use client'

import { StatsHero } from '@/components/stats/StatsHero';
import StatsCardGrid from '@/components/stats/StatsCardGrid';
import StatsCard from '@/components/stats/StatsCard';
import { BarChart3, Building2, Briefcase } from 'lucide-react';

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <StatsHero />
      <StatsCardGrid>
        <StatsCard
          title="General Stats"
          description="Platform-wide metrics including total views, registrations, and engagement rates."
          href="/stats/general"
          icon={BarChart3}
          theme="blue"
          status="ready"
        />
        <StatsCard
          title="Board Stats"
          description="View analytics by Ontario school board. See which boards are most engaged."
          href="/stats/boards"
          icon={Building2}
          theme="navy"
          status="coming-soon"
        />
        <StatsCard
          title="Company Stats"
          description="Sponsor and booth engagement metrics. Track resource downloads and views."
          href="/stats/companies"
          icon={Briefcase}
          theme="slate"
          status="coming-soon"
        />
      </StatsCardGrid>
    </div>
  );
}
