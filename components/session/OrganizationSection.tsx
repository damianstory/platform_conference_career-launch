'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PlatinumBoothData, StandardBoothData } from '@/data/sample-booths';

interface OrganizationSectionProps {
  name: string;
  title: string;
  company: string;
  logo?: string | null;
  booth?: PlatinumBoothData | StandardBoothData;
}

export default function OrganizationSection({
  name,
  title,
  company,
  logo,
  booth,
}: OrganizationSectionProps) {
  // Extract company initials for fallback (first letter of each word, max 2)
  const getCompanyInitials = (companyName: string) => {
    if (!companyName) return 'OR';
    const words = companyName.split(' ');
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  const initials = getCompanyInitials(company || name);

  return (
    <div className={`grid grid-cols-1 ${booth ? 'lg:grid-cols-2' : ''} gap-6 mb-6`}>
      {/* Left Card: Organization Info */}
      <div className="bg-white rounded-xl border border-[#E5E9F1] p-6 shadow-[0_4px_24px_rgba(34,34,76,0.08)] transition-all duration-200 hover:border-primary-blue/30 hover:shadow-[0_8px_24px_rgba(34,34,76,0.12)]">
        {/* Header */}
        <h3 className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-4">
          Organization
        </h3>

        {/* Content */}
        <div className="flex items-center gap-4">
          {/* Organization Logo */}
          <div className="flex-shrink-0">
            {logo ? (
              <div className="w-20 h-20 bg-white rounded-lg border border-primary-blue/20 shadow-sm flex items-center justify-center overflow-hidden p-1">
                <Image
                  src={logo}
                  alt={`${name} logo`}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
            ) : (
              <div className="w-20 h-20 rounded-lg bg-light-blue flex items-center justify-center border border-primary-blue/20">
                <span className="text-lg font-bold text-navy">{initials}</span>
              </div>
            )}
          </div>

          {/* Organization Info */}
          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-bold text-navy mb-1">{name}</h4>
            {title && <p className="text-sm text-navy/80 mb-1">{title}</p>}
            {company && <p className="text-sm text-navy/60">{company}</p>}
          </div>
        </div>
      </div>

      {/* Right Card: Booth Discovery CTA (only shown if booth exists) */}
      {booth && (
        <div className="bg-gradient-to-br from-light-blue/20 to-blue/10 rounded-xl border border-primary-blue/20 p-6 shadow-[0_4px_24px_rgba(34,34,76,0.08)] transition-all duration-300 hover:border-primary-blue hover:shadow-[0_8px_32px_rgba(0,146,255,0.2)] hover:-translate-y-0.5">
          {/* Header */}
          <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-blue mb-4">
            Explore Their Booth
          </h3>

          {/* Content */}
          <div className="flex flex-col gap-4">
            {/* Value Proposition */}
            <p className="text-sm leading-relaxed text-navy/80">
              Visit their expo booth to explore additional videos, career resources, and downloadable materials from {name}.
            </p>

            {/* CTA Button */}
            <Link
              href={`/booths/${booth.slug}`}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 h-[56px] bg-primary-blue text-white rounded-lg font-semibold text-base shadow-md hover:bg-brand-navy hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,146,255,0.35)] transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
            >
              <span>Visit Booth</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
