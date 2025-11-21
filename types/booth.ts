export interface VideoContent {
  url: string
  type: 'youtube' | 'vimeo' | 'google-drive' | 'instagram' | 'custom'
  title: string
  description?: string
  thumbnail?: string
}

export interface ResourceItem {
  title: string
  description?: string
  url: string
  type: 'pdf' | 'link' | 'document' | 'video'
  fileSize?: string
  isCTA?: boolean // Flag to style as a special CTA card (taller, button-like)
}

export interface CTAButton {
  text: string
  url: string
  type?: 'website' | 'careers' | 'contact' | 'application' | 'learn-more'
}

export interface BrandColors {
  primary: string
  secondary?: string
  accent?: string
}

export interface QuickFact {
  icon?: string
  label: string
  value: string
}

export interface ContactDetails {
  email?: string
  phone?: string
  website?: string
  headquarters?: {
    address: string
    city: string
    province: string
    postalCode: string
  }
  internshipInfo?: {
    available: boolean
    period: string
    applicationUrl?: string
  }
  socialLinks?: Array<{
    platform: 'linkedin' | 'twitter' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'spotify' | 'pinterest' | 'snapchat' | 'email' | 'linktree' | 'globe'
    url: string
    label?: string
  }>
}

export interface SessionSlidesData {
  embedUrl: string
  title: string
  description: string
  type?: 'google-slides' | 'google-drive-pdf'
  metadata?: {
    date: string
    duration: string
    attendeeCount?: number
  }
  status?: 'live' | 'recorded' | 'upcoming'
}

export interface EngagementActivityData {
  embedUrl: string
  title: string
  description: string
  prize?: {
    title: string
    description: string
  }
  duration?: string
  embedType?: 'iframe' | 'skills-gap-quiz' | 'google-form'
}

export type BoothTier = 'platinum' | 'standard'

export type OrganizationType = 'employer' | 'post-secondary' | 'gap-year' | 'activities'

export type Industry =
  | 'Agriculture'
  | 'Arts/Culture'
  | 'Aviation/Aerospace'
  | 'Business'
  | 'Construction'
  | 'Energy'
  | 'Environment'
  | 'Food Processing'
  | 'Forestry'
  | 'Health/Wellness'
  | 'Horticulture'
  | 'Hospitality/Tourism'
  | 'ICT'
  | 'Justice/Emergency'
  | 'Life Skills'
  | 'Manufacturing'
  | 'Mining'
  | 'Non-Profit/Education'
  | 'Sports'
  | 'Transportation'

export type Pathway =
  | 'direct-to-workplace'
  | 'apprenticeship'
  | 'college'
  | 'university'
  | 'gap-year'
  | 'general'

export interface PlatinumBoothData {
  id: string
  name: string
  slug: string
  tier: 'platinum'
  industries: Industry[]
  organizationType: OrganizationType
  pathway: Pathway
  logo: string
  imageScale?: number // Optional: Scale factor for logo (e.g., 0.9 = 90% size, adds breathing room)
  tagline: string
  description: string
  website: string
  quickFacts?: QuickFact[]
  video: VideoContent
  resources: ResourceItem[]
  sessionSlides?: SessionSlidesData
  engagementActivity?: EngagementActivityData
  primaryCTA: CTAButton
  secondaryCTA?: CTAButton
  contact: ContactDetails
  brandColors: BrandColors
}

export interface StandardBoothData {
  id: string
  name: string
  slug: string
  tier: 'standard'
  industries: Industry[]
  organizationType: OrganizationType
  pathway: Pathway
  logo: string
  imageScale?: number // Optional: Scale factor for logo (e.g., 0.9 = 90% size, adds breathing room)
  tagline: string
  description: string
  website: string
  video: VideoContent
  resources: ResourceItem[]
  googleFormUrl?: string
  externalUrl?: string
  primaryCTA: CTAButton
  secondaryCTA?: CTAButton
  contact: ContactDetails
  brandColors: BrandColors
}

export type BoothData = PlatinumBoothData | StandardBoothData

export interface PlatinumBoothProps {
  booth: PlatinumBoothData
}

export interface StandardBoothProps {
  booth: StandardBoothData
}
