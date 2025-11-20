'use client'

import React from 'react'
import { FileText, ExternalLink, Video, File, Mail, Briefcase, Globe, Info } from 'lucide-react'
import { ResourceItem, CTAButton } from '@/types/booth'
import { getDownloadAriaLabel } from '@/lib/utils/accessibility'

interface ResourceCardsProps {
  resources: ResourceItem[]
  colSpan?: string
  layout?: 'grid' | 'vertical'
  secondaryCTA?: CTAButton // Optional secondary CTA to display as special card
}

export default function ResourceCards({ resources, colSpan = 'lg:col-span-6', layout = 'grid', secondaryCTA }: ResourceCardsProps) {
  // Get icon and color based on resource type
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return {
          icon: FileText,
          cardBg: 'bg-resource-pdf',
          iconBg: 'bg-blue/12',
          iconColor: 'text-blue',
          borderColor: 'border-blue/20',
          hoverBorder: 'group-hover:border-blue/40',
          hoverBg: 'group-hover:bg-blue/5'
        }
      case 'link':
        return {
          icon: ExternalLink,
          cardBg: 'bg-resource-link',
          iconBg: 'bg-light-blue/60',
          iconColor: 'text-blue',
          borderColor: 'border-blue/20',
          hoverBorder: 'group-hover:border-blue/40',
          hoverBg: 'group-hover:bg-blue/5'
        }
      case 'video':
        return {
          icon: Video,
          cardBg: 'bg-resource-video',
          iconBg: 'bg-blue/15',
          iconColor: 'text-blue',
          borderColor: 'border-blue/20',
          hoverBorder: 'group-hover:border-blue/40',
          hoverBg: 'group-hover:bg-blue/5'
        }
      case 'document':
      default:
        return {
          icon: File,
          cardBg: 'bg-resource-document',
          iconBg: 'bg-light-blue/50',
          iconColor: 'text-brand-navy',
          borderColor: 'border-blue/20',
          hoverBorder: 'group-hover:border-blue/40',
          hoverBg: 'group-hover:bg-blue/5'
        }
    }
  }

  // Get icon for CTA based on type
  const getCTAIcon = (type?: string) => {
    switch (type) {
      case 'contact':
        return Mail
      case 'careers':
        return Briefcase
      case 'website':
        return Globe
      case 'application':
        return FileText
      case 'learn-more':
        return Info
      default:
        return ExternalLink
    }
  }

  // Merge secondaryCTA into resources array if provided
  const allItems: ResourceItem[] = [...resources]
  if (secondaryCTA) {
    allItems.push({
      title: secondaryCTA.text,
      description: '', // CTAs don't need descriptions in card view
      url: secondaryCTA.url,
      type: 'link',
      isCTA: true
    })
  }

  // Limit resources based on layout: 3 for vertical, 6 for grid (to accommodate CTA)
  const maxItems = layout === 'vertical' ? 3 : 6
  const displayResources = allItems.slice(0, maxItems)

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md col-span-12 ${colSpan}`}>
      {/* Header - matches SessionSlides styling */}
      <div className="px-6 py-2 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 truncate">Resources</h3>
      </div>

      {/* Auto-height container - all cards visible without scrolling */}
      <div className="px-4 pt-4 pb-3">
        <div className={layout === 'vertical' ? 'flex flex-col gap-1' : 'grid grid-cols-1 sm:grid-cols-2 gap-1'}>
          {displayResources.map((resource, index) => {
            // Determine icon and styling based on whether it's a CTA or regular resource
            let Icon
            let cardBg, iconBg, iconColor, borderColor, hoverBorder, hoverBg

            if (resource.isCTA) {
              // CTA cards: Use getCTAIcon for icon, but 'link' styling for colors
              Icon = getCTAIcon(secondaryCTA?.type)
              const linkStyling = getResourceIcon('link')
              cardBg = linkStyling.cardBg
              iconBg = linkStyling.iconBg
              iconColor = linkStyling.iconColor
              borderColor = linkStyling.borderColor
              hoverBorder = linkStyling.hoverBorder
              hoverBg = linkStyling.hoverBg
            } else {
              // Regular resource cards: Use getResourceIcon for everything
              const styling = getResourceIcon(resource.type)
              Icon = styling.icon
              cardBg = styling.cardBg
              iconBg = styling.iconBg
              iconColor = styling.iconColor
              borderColor = styling.borderColor
              hoverBorder = styling.hoverBorder
              hoverBg = styling.hoverBg
            }

            return (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={resource.isCTA ? `${resource.title} (opens in new tab)` : getDownloadAriaLabel(resource.title, resource.fileSize)}
                className={`group relative ${cardBg} border ${borderColor} ${hoverBorder} rounded-lg py-4 px-3 transition-all duration-300 ease-out hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 h-fit shadow-[0_2px_4px_rgba(34,34,76,0.06)] hover:shadow-[0_4px_12px_rgba(0,146,255,0.15),0_2px_4px_rgba(34,34,76,0.08)]`}
              >
                {/* Hover overlay effect */}
                <div className={`absolute inset-0 ${hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none`} />

                {/* Content - Horizontal layout: Icon left, Text right (compact) */}
                <div className="relative flex flex-row gap-3 items-start">
                  {/* Icon - small */}
                  <div className={`p-1.5 ${iconBg} rounded-md flex-shrink-0`}>
                    <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
                  </div>

                  {/* Text Content - compact */}
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    {/* Title - single line */}
                    <h4 className="text-xs font-semibold text-gray-900 line-clamp-1">
                      {resource.title}
                    </h4>

                    {/* Description - single line */}
                    <p className="text-xs text-gray-600 line-clamp-1">
                      {resource.description || (resource.isCTA ? 'Connect with our team' : '')}
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
