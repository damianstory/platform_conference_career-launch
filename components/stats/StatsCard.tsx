'use client'

import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'

export type StatsCardTheme = 'blue' | 'navy' | 'slate';

interface StatsCardProps {
  title: string;
  href: string;
  icon: LucideIcon;
  theme: StatsCardTheme;
}

export default function StatsCard({
  title,
  href,
  icon: Icon,
  theme,
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

  return (
    <Link
      href={href}
      className={`
        group relative block rounded-xl p-6 cursor-pointer
        border-2 transition-all duration-200
        ${styles.card}
        h-[140px]
        shadow-[0_2px_6px_rgba(34,34,76,0.04)]
        hover:shadow-[0_8px_24px_rgba(0,146,255,0.15),0_4px_12px_rgba(34,34,76,0.08)]
        hover:scale-[1.02]
        active:scale-[0.98]
        flex flex-col items-center justify-center
      `}
    >
      {/* Icon */}
      <div className={`
        w-12 h-12 rounded-lg flex items-center justify-center mb-3
        ${styles.icon}
      `}>
        <Icon className="w-6 h-6" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-brand-navy text-center">
        {title}
      </h3>

      {/* Arrow - appears on hover */}
      <div className={`
        absolute bottom-4 right-4
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
