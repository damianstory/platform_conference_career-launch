'use client'

import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'
import { ContactDetails } from '@/types/booth'

interface ContactInfoProps {
  contact: ContactDetails
}

export default function ContactInfo({ contact }: ContactInfoProps) {
  // Get social media icon
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return Linkedin
      case 'twitter':
        return Twitter
      case 'instagram':
        return Instagram
      case 'facebook':
        return Facebook
      case 'tiktok':
        return null // Will use emoji/text
      case 'youtube':
        return null // Will use emoji/text
      default:
        return null
    }
  }

  // Get platform-specific hover colors
  const getSocialHoverColor = (platform: string): string => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return 'hover:bg-blue-600'
      case 'twitter':
        return 'hover:bg-sky-500'
      case 'instagram':
        return 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600'
      case 'facebook':
        return 'hover:bg-blue-700'
      case 'tiktok':
        return 'hover:bg-black'
      case 'youtube':
        return 'hover:bg-red-600'
      default:
        return 'hover:bg-neutral-5'
    }
  }

  const hasLocation = contact.headquarters

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl col-span-12 sm:col-span-12 lg:col-span-4 h-[220px]">
      <div className="p-6">
        {/* Header */}
        <h3 className="text-header-3 font-bold text-brand-navy mb-4">Get in Touch</h3>

        {/* Contact Methods */}
        <div className="space-y-3 mb-6">
          {/* Email */}
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 p-3 bg-neutral-1 rounded-lg hover:bg-primary-blue/10 transition-colors group focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2"
            >
              <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                <Mail className="w-3 h-3 text-primary-blue" />
              </div>
              <span className="text-compact text-neutral-5 group-hover:text-primary-blue transition-colors break-all">
                {contact.email}
              </span>
            </a>
          )}

          {/* Phone */}
          {contact.phone && (
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-3 p-3 bg-neutral-1 rounded-lg hover:bg-primary-blue/10 transition-colors group focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2"
            >
              <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                <Phone className="w-3 h-3 text-primary-blue" />
              </div>
              <span className="text-compact text-neutral-5 group-hover:text-primary-blue transition-colors">
                {contact.phone}
              </span>
            </a>
          )}

          {/* Location */}
          {hasLocation && contact.headquarters && (
            <div className="flex items-start gap-3 p-3 bg-neutral-1 rounded-lg">
              <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                <MapPin className="w-3 h-3 text-primary-blue" />
              </div>
              <div className="text-compact text-neutral-5">
                <p>{contact.headquarters.address}</p>
                <p>
                  {contact.headquarters.city}, {contact.headquarters.province}{' '}
                  {contact.headquarters.postalCode}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Internship Info (if available) */}
        {contact.internshipInfo && contact.internshipInfo.available && (
          <div className="mb-6 p-3 bg-primary-blue/5 border border-primary-blue/20 rounded-lg">
            <p className="text-compact font-semibold text-primary-blue mb-1">
              Internships Available
            </p>
            <p className="text-subtitle-1 text-neutral-5">
              {contact.internshipInfo.period}
            </p>
            {contact.internshipInfo.applicationUrl && (
              <a
                href={contact.internshipInfo.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-subtitle-1 text-primary-blue font-semibold hover:underline"
              >
                Apply Now →
              </a>
            )}
          </div>
        )}

        {/* Social Links */}
        {contact.socialLinks && contact.socialLinks.length > 0 && (
          <>
            <div className="border-t border-neutral-2 my-4" />

            <div className="flex items-center gap-2 flex-wrap">
              {contact.socialLinks.map((social, index) => {
                const Icon = getSocialIcon(social.platform)
                const hoverColor = getSocialHoverColor(social.platform)

                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-6 h-6 flex items-center justify-center bg-neutral-4 text-white rounded transition-all duration-200 hover:scale-110 ${hoverColor} focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2`}
                    aria-label={`Visit ${social.platform}`}
                  >
                    {Icon ? (
                      <Icon className="w-3 h-3" />
                    ) : (
                      <span className="text-subtitle-2 font-bold">
                        {social.platform.substring(0, 1).toUpperCase()}
                      </span>
                    )}
                  </a>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
