import SlideCard from '../SlideCard';
import StatCard from '../charts/StatCard';
import { heroStats } from '../data/statsData';

export default function ImpactOverview() {
  return (
    <SlideCard>
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <span className="inline-block bg-gradient-to-r from-primary-blue to-[#00C2FF] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
          Impact Overview
        </span>
        <h1 className="text-2xl sm:text-[32px] font-extrabold text-brand-navy mb-1">
          myBlueprint Career Launch 2025
        </h1>
        <p className="text-sm text-gray-500">
          December 1–5, 2025 • Ontario School Boards
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard
          value={heroStats.studentsReached}
          label="Students Reached"
          color="blue"
        />
        <StatCard
          value={heroStats.schoolBoards}
          label="School Boards"
          color="green"
        />
        <StatCard
          value={heroStats.schools}
          label="Participating Schools"
          color="purple"
        />
        <StatCard
          value={heroStats.educators}
          label="Unique Educators"
          color="orange"
        />
      </div>

      {/* Footer */}
      <div className="mt-8 pt-5 border-t border-neutral-2 text-center">
        <p className="text-sm text-gray-400">
          27 Career Sessions • 5 Days • <span className="text-primary-blue font-semibold">All Sessions Viewed</span>
        </p>
      </div>
    </SlideCard>
  );
}
