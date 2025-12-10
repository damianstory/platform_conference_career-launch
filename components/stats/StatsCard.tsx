'use client'

import Link from 'next/link'
import { LucideIcon, ArrowRight, Sparkles } from 'lucide-react'

export type StatsCardTheme = 'blue' | 'navy' | 'slate';

interface StatsCardProps {
  title: string;
  href: string;
  icon: LucideIcon;
  theme: StatsCardTheme;
  featured?: boolean;
  description?: string;
  badge?: string;
}

export default function StatsCard({
  title,
  href,
  icon: Icon,
  theme,
  featured = false,
  description,
  badge,
}: StatsCardProps) {
  const getThemeStyles = () => {
    if (featured) {
      return {
        card: 'bg-gradient-to-br from-light-blue via-light-blue/80 to-primary-blue/20 border-primary-blue/30 hover:border-primary-blue',
        icon: 'text-primary-blue bg-white',
        arrow: 'text-primary-blue'
      }
    }

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

  if (featured) {
    return (
      <Link
        href={href}
        className={`
          group relative block rounded-2xl p-6 cursor-pointer
          border-2 transition-all duration-300
          ${styles.card}
          shadow-[0_4px_12px_rgba(0,146,255,0.1)]
          hover:shadow-[0_12px_32px_rgba(0,146,255,0.2),0_4px_12px_rgba(34,34,76,0.08)]
          hover:scale-[1.01]
          active:scale-[0.99]
        `}
      >
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-blue text-white text-sm font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {badge}
          </div>
        )}

        <div className="flex items-center gap-5">
          {/* Icon */}
          <div className={`
            w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0
            ${styles.icon}
            shadow-md
          `}>
            <Icon className="w-7 h-7" />
          </div>

          <div className="flex-1 min-w-0">
            {/* Title */}
            <h3 className="text-xl font-bold text-brand-navy mb-1">
              {title}
            </h3>

            {/* Description */}
            {description && (
              <p className="text-neutral-5 text-sm leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Arrow */}
          <div className={`
            flex-shrink-0 self-center
            opacity-60 translate-x-0
            group-hover:opacity-100 group-hover:translate-x-2
            transition-all duration-300
            ${styles.arrow}
          `}>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={`
        group relative block rounded-2xl p-6 cursor-pointer
        transition-all duration-200
        bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/90
        shadow-[0_4px_12px_rgba(34,34,76,0.15)]
        hover:shadow-[0_8px_24px_rgba(34,34,76,0.25),0_4px_12px_rgba(0,146,255,0.1)]
        hover:scale-[1.01]
        active:scale-[0.99]
        flex items-center justify-between
      `}
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      {/* Arrow */}
      <div className="opacity-60 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-light-blue">
        <ArrowRight className="w-5 h-5" />
      </div>
    </Link>
  )
}
