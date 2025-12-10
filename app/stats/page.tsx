'use client'

import { StatsHero } from '@/components/stats/StatsHero';
import StatsCard from '@/components/stats/StatsCard';
import { BarChart3, Building2, Briefcase } from 'lucide-react';

export default function StatsPage() {
  return (
    <div className="bg-off-white flex-1">
      <StatsHero />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Featured Card - General Stats */}
        <div className="mb-6">
          <StatsCard
            title="General Stats"
            description="Overview of key metrics including student reach, school board participation, and educator engagement across all sessions."
            href="/stats/general"
            icon={BarChart3}
            theme="blue"
            featured
            badge="START HERE"
          />
        </div>

        {/* Section Label */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-neutral-4 uppercase tracking-wider">
            Dive Deeper
          </h2>
        </div>

        {/* Secondary Cards - Board & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </div>
    </div>
  );
}
