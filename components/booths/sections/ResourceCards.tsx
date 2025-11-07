'use client'

import React from 'react'
import { FileText, ExternalLink, Video, File } from 'lucide-react'
import { ResourceItem } from '@/types/booth'

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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl col-span-12 sm:col-span-6 lg:col-span-6 h-[400px] sm:h-[450px]">
      {/* Header */}
      <div className="px-6 py-4 border-b border-neutral-2">
        <h3 className="text-header-4 font-bold text-brand-navy">Resources</h3>
      </div>

      {/* Mosaic Grid Layout - 6x6 internal grid */}
      <div className="p-4 h-[calc(100%-72px)]">
        <div className="grid grid-cols-6 grid-rows-6 gap-2 h-full">
          {displayResources.map((resource, index) => {
            const { icon: Icon, bgColor, textColor, borderColor, hoverBorder } = getResourceIcon(resource.type)

            // First item: 3 cols × 4 rows (large)
            // Items 2-5: 3 cols × 2 rows (medium)
            const gridClass = index === 0
              ? 'col-span-3 row-span-4'
              : index === 1
              ? 'col-span-3 row-span-2'
              : index === 2
              ? 'col-span-3 row-span-2'
              : index === 3
              ? 'col-span-3 row-span-2'
              : 'col-span-3 row-span-2'

            return (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative ${gridClass} bg-white border-2 ${borderColor} ${hoverBorder} rounded-lg p-3 hover:scale-[1.02] hover:rotate-1 transition-all duration-300 overflow-hidden focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2`}
              >
                {/* Background tint on hover */}
                <div className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative h-full flex flex-col">
                  {/* Icon and type badge */}
                  <div className="flex items-start justify-between mb-2">
                    <div className={`p-2 ${bgColor} rounded-lg`}>
                      <Icon className={`w-4 h-4 ${textColor}`} />
                    </div>
                    {resource.fileSize && (
                      <span className="text-subtitle-2 text-neutral-4 font-medium">
                        {resource.fileSize}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className={`${index === 0 ? 'text-body-2' : 'text-compact'} font-bold text-brand-navy mb-1 line-clamp-2`}>
                    {resource.title}
                  </h4>

                  {/* Description (only show on large card) */}
                  {index === 0 && (
                    <p className="text-subtitle-1 text-neutral-5 line-clamp-3 mb-2">
                      {resource.description}
                    </p>
                  )}

                  {/* Download/View icon (appears on hover) */}
                  <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className={`inline-flex items-center gap-1 text-subtitle-1 ${textColor} font-semibold`}>
                      {resource.type === 'pdf' ? 'Download' : 'View'}
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </a>
            )
          })}

          {/* Fill empty spaces if less than 5 resources */}
          {displayResources.length < 5 && (
            <div className={`${displayResources.length === 1 ? 'col-span-3 row-span-2' : displayResources.length === 2 ? 'col-span-6 row-span-2' : displayResources.length === 3 ? 'col-span-3 row-span-2' : 'col-span-3 row-span-2'} bg-neutral-1 border-2 border-dashed border-neutral-3 rounded-lg flex items-center justify-center`}>
              <div className="text-center px-4">
                <File className="w-8 h-8 text-neutral-3 mx-auto mb-2" />
                <p className="text-subtitle-1 text-neutral-4">More resources coming soon</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
