'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface BoothCardSkeletonProps {
  tier?: 'platinum' | 'standard'
  index?: number
}

export default function BoothCardSkeleton({ tier = 'standard', index = 0 }: BoothCardSkeletonProps) {
  // Tier-specific styles to match real cards
  const getTierStyles = () => {
    switch (tier) {
      case 'platinum':
        return {
          wrapper: 'col-span-2',
          height: 'h-[280px]',
          logoSize: 'w-20 h-20'
        }
      case 'standard':
        return {
          wrapper: 'col-span-1',
          height: 'h-[280px]',
          logoSize: 'w-20 h-20'
        }
    }
  }

  const styles = getTierStyles()
  const animationDelay = index * 0.05

  return (
    <motion.div
      className={`${styles.wrapper} booth-card-skeleton-wrapper`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: animationDelay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <div className={`
        relative rounded-xl pt-3 pb-4 px-5 flex flex-col bg-off-white border-2 border-neutral-2
        ${styles.height}
      `}>
        {/* Logo Skeleton */}
        <div className="mb-2 flex-shrink-0">
          <div className={`
            skeleton rounded-lg
            ${styles.logoSize}
          `}></div>
        </div>

        {/* Company Info Skeleton */}
        <div className="flex-grow flex flex-col space-y-2">
          {/* Company Name */}
          <div className="skeleton h-6 w-3/4 rounded"></div>

          {/* Tagline Lines */}
          <div className="skeleton h-4 w-full rounded"></div>
          <div className="skeleton h-4 w-2/3 rounded"></div>
        </div>
      </div>
    </motion.div>
  )
}
