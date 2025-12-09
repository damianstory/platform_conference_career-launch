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
          href="/stats/general"
          icon={BarChart3}
          theme="blue"
        />
        <StatsCard
          title="Board Stats"
          href="/stats/boards"
          icon={Building2}
          theme="navy"
        />
        <StatsCard
          title="Company Stats"
          href="/stats/companies"
          icon={Briefcase}
          theme="slate"
        />
      </StatsCardGrid>
    </div>
  );
}
