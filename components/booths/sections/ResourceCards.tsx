'use client'

import React from 'react'
import { FileText, ExternalLink, Video, File } from 'lucide-react'
import { ResourceItem } from '@/types/booth'
import { getDownloadAriaLabel } from '@/lib/utils/accessibility'

interface ResourceCardsProps {
  resources: ResourceItem[]
}

export default function ResourceCards({ resources }: ResourceCardsProps) {
  // Get icon and color based on resource type
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return { icon: FileText, bgColor: 'bg-red-50', textColor: 'text-red-600', borderColor: 'border-red-200', hoverBorder: 'group-hover:border-red-400' }
      case 'link':
        return { icon: ExternalLink, bgColor: 'bg-blue-50', textColor: 'text-blue-600', borderColor: 'border-blue-200', hoverBorder: 'group-hover:border-blue-400' }
      case 'video':
        return { icon: Video, bgColor: 'bg-orange-50', textColor: 'text-orange-600', borderColor: 'border-orange-200', hoverBorder: 'group-hover:border-orange-400' }
      case 'document':
      default:
        return { icon: File, bgColor: 'bg-purple-50', textColor: 'text-purple-600', borderColor: 'border-purple-200', hoverBorder: 'group-hover:border-purple-400' }
    }
  }

  // Limit to first 5 resources for grid layout
  const displayResources = resources.slice(0, 5)

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md col-span-12 lg:col-span-6">
      {/* Header - matches SessionSlides styling */}
      <div className="px-6 py-2 border-b border-neutral-2">
        <h3 className="text-lg font-bold text-gray-900 truncate">Resources</h3>
      </div>

      {/* Constrained aspect ratio to match SessionSlides */}
      <div className="relative aspect-[16/10]">
        {/* Scrollable container for 5 cards in compact 2-column grid */}
        <div className="absolute inset-0 px-4 pt-4 pb-3 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 h-full">
            {displayResources.map((resource, index) => {
              const { icon: Icon, bgColor, textColor, borderColor, hoverBorder } = getResourceIcon(resource.type)

              return (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={getDownloadAriaLabel(resource.title, resource.fileSize)}
                  className={`group relative bg-white border ${borderColor} ${hoverBorder} rounded-lg p-3 hover:shadow-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 h-fit`}
                >
                  {/* Background tint on hover */}
                  <div className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg`} />

                  {/* Content - Horizontal layout: Icon left, Text right (compact) */}
                  <div className="relative flex flex-row gap-3 items-start">
                    {/* Icon - small */}
                    <div className={`p-1.5 ${bgColor} rounded-md flex-shrink-0`}>
                      <Icon className={`w-3.5 h-3.5 ${textColor}`} />
                    </div>

                    {/* Text Content - compact */}
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      {/* Title - single line */}
                      <h4 className="text-xs font-semibold text-gray-900 line-clamp-1">
                        {resource.title}
                      </h4>

                      {/* Description - single line */}
                      <p className="text-xs text-gray-600 line-clamp-1">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
