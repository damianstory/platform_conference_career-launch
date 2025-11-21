import React from 'react'
import { render } from '@testing-library/react'
import Card from '../shared/Card'
import IconBox from '../shared/IconBox'
import BoothHeader from '../sections/BoothHeader'
import VideoSection from '../sections/VideoSection'
import EngagementActivity from '../sections/EngagementActivity'
import ResourceCards from '../sections/ResourceCards'
import SessionSlides from '../sections/SessionSlides'
import CompanyStory from '../sections/CompanyStory'
import ContactInfo from '../sections/ContactInfo'
import { FileText, Sparkles } from 'lucide-react'

describe('Visual Treatment System', () => {
  describe('Card Component', () => {
    it('should render default variant with correct classes', () => {
      const { container } = render(<Card>Content</Card>)
      const card = container.firstChild

      expect(card).toHaveClass('bg-white')
      expect(card).toHaveClass('rounded-xl')
      expect(card).toHaveClass('border-gray-200')
      expect(card).toHaveClass('shadow-sm')
    })

    it('should render featured variant with gradient background', () => {
      const { container } = render(<Card variant="featured">Content</Card>)
      const card = container.firstChild

      expect(card).toHaveClass('bg-gradient-to-br')
      expect(card).toHaveClass('from-blue-50')
      expect(card).toHaveClass('to-blue-100')
      expect(card).toHaveClass('border-blue-200')
      expect(card).toHaveClass('shadow-md')
    })

    it('should render interactive variant with hover effects', () => {
      const { container } = render(<Card variant="interactive">Content</Card>)
      const card = container.firstChild

      expect(card).toHaveClass('hover:shadow-lg')
      expect(card).toHaveClass('hover:border-gray-300')
      expect(card).toHaveClass('cursor-pointer')
    })
  })

  describe('IconBox Component', () => {
    it('should render with default blue color scheme', () => {
      const { container } = render(<IconBox icon={FileText} />)
      const iconBox = container.firstChild

      expect(iconBox).toHaveClass('bg-blue-50')
      const icon = container.querySelector('svg')
      expect(icon).toHaveClass('text-blue-600')
    })

    it('should render with red color scheme', () => {
      const { container} = render(<IconBox icon={FileText} colorScheme="red" />)
      const iconBox = container.firstChild

      expect(iconBox).toHaveClass('bg-red-50')
      const icon = container.querySelector('svg')
      expect(icon).toHaveClass('text-red-600')
    })

    it('should render with correct size classes', () => {
      const { container } = render(<IconBox icon={FileText} size="lg" />)
      const iconBox = container.firstChild

      expect(iconBox).toHaveClass('w-12')
      expect(iconBox).toHaveClass('h-12')
    })

    it('should have rounded corners', () => {
      const { container } = render(<IconBox icon={FileText} />)
      const iconBox = container.firstChild

      expect(iconBox).toHaveClass('rounded-lg')
    })
  })

  describe('Standard Card Visual Treatment', () => {
    it('BoothHeader should have standard card styling', () => {
      const { container } = render(
        <BoothHeader
          name="Test"
          logo="/logo.png"
          tagline="Test"
          primaryCTA={{ text: 'Test', url: '#' }}
          secondaryCTA={{ text: 'Test', url: '#' }}
        />
      )

      const card = container.firstChild
      expect(card).toHaveClass('bg-white')
      expect(card).toHaveClass('border-gray-200')
      expect(card).toHaveClass('shadow-sm')
      expect(card).toHaveClass('rounded-xl')
    })

    it('ResourceCards should have standard card styling', () => {
      const { container } = render(<ResourceCards resources={[]} />)

      const card = container.firstChild
      expect(card).toHaveClass('bg-white')
      expect(card).toHaveClass('border-gray-200')
      expect(card).toHaveClass('shadow-sm')
      expect(card).toHaveClass('rounded-xl')
    })

    it('SessionSlides should have standard card styling', () => {
      const { container } = render(<SessionSlides slides={{ title: 'Test', description: 'Test description', embedUrl: '#' }} />)

      const card = container.firstChild
      expect(card).toHaveClass('bg-white')
      expect(card).toHaveClass('border-gray-200')
      expect(card).toHaveClass('shadow-sm')
    })

    it('CompanyStory should have standard card styling', () => {
      const { container } = render(<CompanyStory description="Test" />)

      const card = container.firstChild
      expect(card).toHaveClass('bg-white')
      expect(card).toHaveClass('border-gray-200')
      expect(card).toHaveClass('shadow-sm')
    })

    it('ContactInfo should have standard card styling', () => {
      const { container } = render(<ContactInfo contact={{ email: 'test@test.com' }} />)

      const card = container.firstChild
      expect(card).toHaveClass('bg-white')
      expect(card).toHaveClass('border-gray-200')
      expect(card).toHaveClass('shadow-sm')
    })
  })

  describe('Featured Card Visual Treatment', () => {
    it('EngagementActivity should have featured styling with gradient', () => {
      const { container } = render(
        <EngagementActivity
          activity={{
            title: 'Test',
            description: 'Test',
            embedUrl: '#',
            embedType: 'google-form',
          }}
        />
      )

      const card = container.firstChild
      expect(card).toHaveClass('bg-gradient-to-br')
      expect(card).toHaveClass('from-blue-50')
      expect(card).toHaveClass('to-blue-100')
      expect(card).toHaveClass('border-blue-200')
      expect(card).toHaveClass('shadow-md')
    })
  })

  describe('Video Section Visual Treatment', () => {
    it('should have dark background for video container', () => {
      const { container } = render(
        <VideoSection
          video={{
            title: 'Test',
            url: 'https://youtube.com/watch?v=test',
            type: 'youtube',
          }}
        />
      )

      const videoContainer = container.firstChild
      expect(videoContainer).toHaveClass('bg-gray-800')
      expect(videoContainer).toHaveClass('rounded-xl')
    })
  })

  describe('Transitions', () => {
    it('standard cards should have 200ms transition', () => {
      const { container } = render(<CompanyStory description="Test" />)

      const card = container.firstChild
      expect(card).toHaveClass('transition-all')
      expect(card).toHaveClass('duration-200')
    })

    it('featured card should have 200ms transition', () => {
      const { container } = render(
        <EngagementActivity
          activity={{
            title: 'Test',
            description: 'Test',
            embedUrl: '#',
            embedType: 'google-form',
          }}
        />
      )

      const card = container.firstChild
      expect(card).toHaveClass('transition-all')
      expect(card).toHaveClass('duration-200')
    })
  })

  describe('Hover States', () => {
    it('standard cards should have hover shadow effect', () => {
      const { container } = render(<CompanyStory description="Test" />)

      const card = container.firstChild
      expect(card).toHaveClass('hover:shadow-md')
    })
  })
})
