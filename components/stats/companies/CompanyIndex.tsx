'use client';

import { useState } from 'react';
import { CompanyData } from './data/companiesData';
import SlideCard from '@/components/stats/general/SlideCard';

interface CompanyIndexProps {
  companies: CompanyData[];
  onSelectCompany: (companyId: string) => void;
  sortBy: 'reach' | 'alphabetical';
}

export default function CompanyIndex({ companies, onSelectCompany, sortBy }: CompanyIndexProps) {
  // Sort companies based on the sortBy prop
  const sortedCompanies = [...companies].sort((a, b) => {
    if (sortBy === 'reach') {
      return b.reach - a.reach; // Descending by reach
    } else {
      return a.title.localeCompare(b.title); // Alphabetical by title
    }
  });

  const indexTitle = sortBy === 'reach' ? 'Sessions by Reach' : 'Sessions A–Z';

  return (
    <SlideCard>
      {/* Header */}
      <div className="mb-8">
        <div className="inline-block px-4 py-1.5 bg-primary-blue text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
          Session Index
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-2 leading-tight">
          {indexTitle}
        </h1>
        <p className="text-base text-gray-500">Click any session to view detailed report</p>
      </div>

      {/* Index Header */}
      <div className="grid grid-cols-[40px_1fr_100px_100px] gap-3 px-4 py-2 text-[11px] font-bold text-gray-500 uppercase tracking-wide">
        <span className="text-center">#</span>
        <span>Session</span>
        <span className="text-right">Views</span>
        <span className="text-right">Reach</span>
      </div>

      {/* Index Grid */}
      <div className="space-y-2">
        {sortedCompanies.map((company, index) => (
          <button
            key={company.id}
            onClick={() => onSelectCompany(company.id)}
            className="w-full grid grid-cols-[40px_1fr_100px_100px] gap-3 px-4 py-3 bg-off-white hover:bg-[#E6F4FF] rounded-lg items-center transition-all duration-200 hover:translate-x-1 cursor-pointer group"
          >
            <span className="text-sm font-bold text-primary-blue text-center">
              {index + 1}
            </span>
            <span className="text-sm font-semibold text-brand-navy text-left group-hover:text-primary-blue transition-colors">
              {company.title}
            </span>
            <span className="text-sm font-bold text-primary-blue text-right">
              {company.views}
            </span>
            <span className="text-sm font-bold text-brand-navy text-right">
              {company.reach.toLocaleString()}
            </span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-neutral-2 text-center">
        <p className="text-xs text-gray-400">
          Career Launch 2025 • 27 Sessions • Powered by myBlueprint
        </p>
      </div>
    </SlideCard>
  );
}
