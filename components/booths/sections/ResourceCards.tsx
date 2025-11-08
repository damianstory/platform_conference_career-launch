'use client'

import React from 'react'
import { FileText, ExternalLink, Video, File, FileStack } from 'lucide-react'
import { ResourceItem } from '@/types/booth'
import EmptyState from '../shared/EmptyState'
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
      {/* Header */}
      <div className="px-6 pt-4 pb-4 border-b border-neutral-2">
        <h3 className="text-lg font-bold text-gray-900 truncate">Resources</h3>
      </div>

      {/* Mosaic Grid Layout - 6x6 internal grid */}
      <div className="p-6 aspect-video">
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
                aria-label={getDownloadAriaLabel(resource.title, resource.fileSize)}
                className={`group relative ${gridClass} bg-white border ${borderColor} ${hoverBorder} rounded-lg p-3 hover:shadow-md transition-all duration-200 overflow-hidden focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2`}
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
                      <span className="text-xs text-gray-500 font-medium">
                        {resource.fileSize}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className={`${index === 0 ? 'text-lg' : 'text-sm'} font-medium text-gray-900 mb-1 line-clamp-2`}>
                    {resource.title}
                  </h4>

                  {/* Description (only show on large card) */}
                  {index === 0 && (
                    <p className="text-sm text-gray-600 line-clamp-3 mb-2">
                      {resource.description}
                    </p>
                  )}

                  {/* Download/View icon (appears on hover) */}
                  <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className={`inline-flex items-center gap-1 text-sm ${textColor} font-medium`}>
                      {resource.type === 'pdf' ? 'Download' : 'View'}
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </a>
            )
          })}

          {/* Empty state if less than 5 resources */}
          {displayResources.length < 5 && (
            <div className={`${displayResources.length === 1 ? 'col-span-3 row-span-2' : displayResources.length === 2 ? 'col-span-6 row-span-2' : displayResources.length === 3 ? 'col-span-3 row-span-2' : 'col-span-3 row-span-2'} flex items-center justify-center`}>
              <EmptyState
                icon={FileStack}
                message="More resources coming soon"
                className="h-full flex flex-col items-center justify-center"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
