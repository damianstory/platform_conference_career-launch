'use client'

import React from 'react'
import { Mail, Globe, Youtube, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react'
import { SiSpotify, SiTiktok } from 'react-icons/si'
import { ContactDetails } from '@/types/booth'
import SectionLabel from '../shared/SectionLabel'
import { getExternalLinkAriaLabel } from '@/lib/utils/accessibility'

interface ContactInfoProps {
  contact: ContactDetails
}

export default function ContactInfo({ contact }: ContactInfoProps) {
  // Get social media icon
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'youtube':
        return Youtube
      case 'twitter':
        return Twitter
      case 'instagram':
        return Instagram
      case 'facebook':
        return Facebook
      case 'linkedin':
        return Linkedin
      case 'globe':
        return Globe
      case 'tiktok':
        return SiTiktok
      case 'spotify':
        return SiSpotify
      default:
        return null
    }
  }


  return (
    <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(34,34,76,0.04)] border border-gray-200/60 overflow-hidden transition-all duration-200 hover:shadow-[0_4px_16px_rgba(34,34,76,0.06)] hover:border-gray-300/80 col-span-12 lg:col-span-4 h-64">
      <div className="p-4 pb-3 flex flex-col h-full">
        {/* Section Label */}
        <div className="mb-2 -mt-2 flex-shrink-0">
          <SectionLabel text="Get in Touch" />
        </div>

        {/* Contact Methods - Compact Layout */}
        <div className="space-y-0.5 flex-shrink-0">
          {/* Email */}
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Email ${contact.email}`}
              className="flex items-center gap-2 py-1 md:py-2.5 min-h-[24px] md:min-h-[44px] px-2 -ml-2 rounded-md hover:text-primary-blue hover:bg-primary-blue/5 hover:-translate-x-1 transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2"
            >
              <Mail className="w-2 h-2 text-primary-blue flex-shrink-0" />
              <span className="text-xs text-gray-700 group-hover:text-primary-blue transition-colors break-all leading-tight">
                {contact.email}
              </span>
            </a>
          )}

          {/* Social Links with Labels */}
          {contact.socialLinks && contact.socialLinks
            .filter(social => social.label)
            .map((social, index) => {
              const Icon = getSocialIcon(social.platform)
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={getExternalLinkAriaLabel(social.label || social.platform)}
                  className="flex items-center gap-2 py-1 md:py-2.5 min-h-[24px] md:min-h-[44px] px-2 -ml-2 rounded-md hover:text-primary-blue hover:bg-primary-blue/5 hover:-translate-x-1 transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2"
                >
                  {Icon && <Icon className="w-2 h-2 text-primary-blue flex-shrink-0" />}
                  <span className="text-xs text-gray-700 group-hover:text-primary-blue transition-colors leading-tight">
                    {social.label}
                  </span>
                </a>
              )
            })}

          {/* Website */}
          {contact.website && (
            <a
              href={contact.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit website"
              className="flex items-center gap-2 py-1 md:py-2.5 min-h-[24px] md:min-h-[44px] px-2 -ml-2 rounded-md hover:text-primary-blue hover:bg-primary-blue/5 hover:-translate-x-1 transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2"
            >
              <Globe className="w-2 h-2 text-primary-blue flex-shrink-0" />
              <span className="text-xs text-gray-700 group-hover:text-primary-blue transition-colors leading-tight">
                {contact.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </span>
            </a>
          )}
        </div>

        {/* Internship Info (if available) */}
        {contact.internshipInfo && contact.internshipInfo.available && (
          <div className="mt-2 p-2 bg-primary-blue/5 border border-primary-blue/20 rounded-lg flex-shrink-0">
            <p className="text-xs font-semibold text-primary-blue mb-0.5 leading-tight">
              Internships Available
            </p>
            <p className="text-xs text-gray-600 leading-tight">
              {contact.internshipInfo.period}
            </p>
            {contact.internshipInfo.applicationUrl && (
              <a
                href={contact.internshipInfo.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-1 text-xs text-primary-blue font-medium hover:underline focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2 focus-visible:rounded"
              >
                Apply Now →
              </a>
            )}
          </div>
        )}

        {/* Social Media Buttons - Pushed to bottom */}
        {contact.socialLinks && contact.socialLinks.filter(social => !social.label).length > 0 && (
          <div className="mt-auto pt-3 flex-shrink-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              {contact.socialLinks.filter(social => !social.label).map((social, index) => {
                const Icon = getSocialIcon(social.platform)

                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded transition-all duration-200 hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2"
                    aria-label={getExternalLinkAriaLabel(social.platform)}
                  >
                    {Icon ? (
                      <Icon className="w-3 h-3 text-gray-500" />
                    ) : (
                      <span className="text-[0.5rem] font-bold text-gray-500">
                        {social.platform.substring(0, 1).toUpperCase()}
                      </span>
                    )}
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
