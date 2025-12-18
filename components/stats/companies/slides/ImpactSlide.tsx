import { CompanyData } from '../data/companiesData';
import StatCard from '@/components/stats/general/charts/StatCard';
import GradeChart from '../charts/GradeChart';
import SlideCard from '@/components/stats/general/SlideCard';

interface ImpactSlideProps {
  company: CompanyData;
}

export default function ImpactSlide({ company }: ImpactSlideProps) {
  return (
    <SlideCard>
      {/* Header */}
      <div className="mb-8">
        <div className="inline-block px-4 py-1.5 bg-primary-blue text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
          Impact Overview
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-2 leading-tight">
          {company.title}
        </h1>
        <p className="text-base text-gray-500">Presented by {company.presenter}</p>
        <p className="text-sm text-gray-400 mt-1">Career Launch 2025 Report</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <StatCard value={company.views} label="Session Views" color="blue" />
        <StatCard value={company.reach.toLocaleString()} label="Est. Student Reach" color="purple" />
      </div>

      {/* Grade Distribution */}
      {Object.keys(company.gradeDistribution).length > 0 && (
        <GradeChart distribution={company.gradeDistribution} />
      )}

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-neutral-2 text-center">
        <p className="text-xs text-gray-400">
          Career Launch 2025 • Powered by myBlueprint
        </p>
      </div>
    </SlideCard>
  );
}
