'use client'

import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'

export type StatsCardTheme = 'blue' | 'navy' | 'slate';
export type StatsCardStatus = 'ready' | 'coming-soon';

interface StatsCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  theme: StatsCardTheme;
  status?: StatsCardStatus;
}

export default function StatsCard({
  title,
  description,
  href,
  icon: Icon,
  theme,
  status = 'ready'
}: StatsCardProps) {
  const getThemeStyles = () => {
    switch (theme) {
      case 'blue':
        return {
          card: 'bg-gradient-to-br from-primary-blue/10 via-primary-blue/5 to-primary-blue/15 border-primary-blue/20 hover:border-primary-blue',
          icon: 'text-primary-blue bg-primary-blue/10',
          arrow: 'text-primary-blue'
        }
      case 'navy':
        return {
          card: 'bg-gradient-to-br from-brand-navy/10 via-brand-navy/5 to-brand-navy/15 border-brand-navy/20 hover:border-brand-navy',
          icon: 'text-brand-navy bg-brand-navy/10',
          arrow: 'text-brand-navy'
        }
      case 'slate':
        return {
          card: 'bg-gradient-to-br from-brand-navy/5 via-transparent to-primary-blue/10 border-brand-navy/15 hover:border-primary-blue/50',
          icon: 'text-brand-navy bg-brand-navy/10',
          arrow: 'text-brand-navy'
        }
      default:
        return {
          card: 'bg-white border-neutral-2',
          icon: 'text-neutral-5 bg-neutral-1',
          arrow: 'text-neutral-5'
        }
    }
  }

  const styles = getThemeStyles()
  const isComingSoon = status === 'coming-soon'

  return (
    <Link
      href={href}
      className={`
        group relative block rounded-xl p-6 cursor-pointer
        border-2 transition-all duration-200
        ${styles.card}
        ${isComingSoon ? 'opacity-75' : ''}
        h-[220px]
        shadow-[0_2px_6px_rgba(34,34,76,0.04)]
        hover:shadow-[0_8px_24px_rgba(0,146,255,0.15),0_4px_12px_rgba(34,34,76,0.08)]
        hover:scale-[1.02]
        active:scale-[0.98]
      `}
    >
      {/* Icon */}
      <div className={`
        w-12 h-12 rounded-lg flex items-center justify-center mb-4
        ${styles.icon}
      `}>
        <Icon className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-brand-navy">
            {title}
          </h3>
          {isComingSoon && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-2 text-neutral-5">
              Soon
            </span>
          )}
        </div>
        <p className="text-body-2 text-neutral-5 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Arrow - appears on hover */}
      <div className={`
        absolute bottom-6 right-6
        opacity-0 translate-x-0
        group-hover:opacity-100 group-hover:translate-x-1
        transition-all duration-200
        ${styles.arrow}
      `}>
        <ArrowRight className="w-5 h-5" />
      </div>
    </Link>
  )
}
