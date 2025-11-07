import React from 'react'
import { render } from '@testing-library/react'
import BoothLayout from '../BoothLayout'
import { PlatinumBoothData } from '@/types/booth'
import BoothHeader from '../sections/BoothHeader'
import VideoSection from '../sections/VideoSection'
import EngagementActivity from '../sections/EngagementActivity'
import ResourceCards from '../sections/ResourceCards'
import SessionSlides from '../sections/SessionSlides'
import CompanyStory from '../sections/CompanyStory'
import ContactInfo from '../sections/ContactInfo'

// Sample test data
const mockPlatinumBooth: PlatinumBoothData = {
  tier: 'platinum',
  id: 'test-platinum',
  name: 'Test Platinum Booth',
  logo: '/test-logo.png',
  tagline: 'Test tagline for spacing',
  description: 'Test description with enough content to verify spacing patterns are applied correctly throughout the component.',
  primaryCTA: { text: 'Learn More', url: 'https://example.com' },
  secondaryCTA: { text: 'Contact Us', url: 'https://example.com/contact' },
  website: 'https://example.com',
  video: {
    title: 'Test Video',
    url: 'https://youtube.com/watch?v=test',
    type: 'youtube',
    thumbnail: '/test-thumbnail.jpg',
  },
  resources: [
    {
      title: 'Test Resource 1',
      url: 'https://example.com/resource1.pdf',
      type: 'pdf',
      fileSize: '1.2 MB',
      description: 'Test description',
    },
    {
      title: 'Test Resource 2',
      url: 'https://example.com/resource2.pdf',
      type: 'pdf',
      fileSize: '2.4 MB',
      description: 'Test description',
    },
  ],
  contact: {
    email: 'test@example.com',
    phone: '555-1234',
  },
  engagementActivity: {
    title: 'Test Quiz',
    description: 'Test quiz description',
    embedUrl: 'https://example.com/quiz',
    embedType: 'google-form',
    duration: '10 minutes',
  },
  sessionSlides: {
    title: 'Test Slides',
    embedUrl: 'https://example.com/slides',
  },
  quickFacts: [
    {
      label: 'Founded',
      value: '2020',
      icon: 'building',
    },
    {
      label: 'Employees',
      value: '500+',
      icon: 'users',
    },
  ],
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C',
  },
}

describe('BoothLayout Spacing System', () => {
  describe('Consistent Padding', () => {
    it('BoothHeader should use p-6 padding', () => {
      const { container } = render(
        <BoothHeader
          name="Test"
          logo="/logo.png"
          tagline="Test tagline"
          primaryCTA={{ text: 'Test', url: '#' }}
          secondaryCTA={{ text: 'Test', url: '#' }}
        />
      )

      const innerContainer = container.querySelector('.p-6')
      expect(innerContainer).toBeInTheDocument()
    })

    it('CompanyStory should use p-8 padding', () => {
      const { container } = render(
        <CompanyStory description="Test description" />
      )

      const innerContainer = container.querySelector('.p-8')
      expect(innerContainer).toBeInTheDocument()
    })

    it('ContactInfo should use p-8 padding', () => {
      const { container } = render(
        <ContactInfo contact={{ email: 'test@example.com' }} />
      )

      const innerContainer = container.querySelector('.p-8')
      expect(innerContainer).toBeInTheDocument()
    })

    it('EngagementActivity should use p-8 padding (featured card)', () => {
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

      const innerContainer = container.querySelector('.p-8')
      expect(innerContainer).toBeInTheDocument()
    })

    it('ResourceCards should use p-6 for header and grid container', () => {
      const { container } = render(
        <ResourceCards
          resources={[
            {
              title: 'Test',
              url: '#',
              type: 'pdf',
              fileSize: '1 MB',
            },
          ]}
        />
      )

      const headerWithPadding = container.querySelector('.px-6.py-6')
      const gridWithPadding = container.querySelector('.p-6.min-h-\\[300px\\]')

      expect(headerWithPadding).toBeInTheDocument()
      expect(gridWithPadding).toBeInTheDocument()
    })

    it('SessionSlides should use px-6 py-4 for header', () => {
      const { container } = render(
        <SessionSlides slides={{ title: 'Test', embedUrl: '#' }} />
      )

      const header = container.querySelector('.px-6.py-4')
      expect(header).toBeInTheDocument()
    })
  })

  describe('Internal Spacing Patterns', () => {
    it('BoothHeader should have space-y-2 for name and tagline', () => {
      const { container } = render(
        <BoothHeader
          name="Test Company"
          logo="/logo.png"
          tagline="Test tagline"
          primaryCTA={{ text: 'Test', url: '#' }}
          secondaryCTA={{ text: 'Test', url: '#' }}
        />
      )

      const companyInfo = container.querySelector('.space-y-2')
      expect(companyInfo).toBeInTheDocument()
    })

    it('CompanyStory should have space-y-4 for major sections', () => {
      const { container } = render(
        <CompanyStory description="Test description" />
      )

      const contentContainer = container.querySelector('.space-y-4')
      expect(contentContainer).toBeInTheDocument()
    })

    it('CompanyStory quick facts should have space-y-3', () => {
      const { container } = render(
        <CompanyStory
          description="Test description"
          quickFacts={[
            { label: 'Test', value: '123', icon: 'building' },
          ]}
        />
      )

      const factsContainer = container.querySelector('.space-y-3')
      expect(factsContainer).toBeInTheDocument()
    })

    it('ContactInfo should have space-y-6 for major section groups', () => {
      const { container } = render(
        <ContactInfo contact={{ email: 'test@example.com' }} />
      )

      const mainContainer = container.querySelector('.space-y-6')
      expect(mainContainer).toBeInTheDocument()
    })

    it('ContactInfo contact methods should have space-y-3', () => {
      const { container } = render(
        <ContactInfo
          contact={{ email: 'test@example.com', phone: '555-1234' }}
        />
      )

      const contactMethods = Array.from(container.querySelectorAll('.space-y-3'))
      expect(contactMethods.length).toBeGreaterThan(0)
    })

    it('EngagementActivity should have space-y-3 for title and description', () => {
      const { container } = render(
        <EngagementActivity
          activity={{
            title: 'Test Quiz',
            description: 'Test description',
            embedUrl: '#',
            embedType: 'google-form',
          }}
        />
      )

      const titleDescriptionContainer = container.querySelector('.space-y-3')
      expect(titleDescriptionContainer).toBeInTheDocument()
    })
  })

  describe('No Fixed Heights', () => {
    it('BoothHeader should not have fixed height classes', () => {
      const { container } = render(
        <BoothHeader
          name="Test"
          logo="/logo.png"
          tagline="Test tagline"
          primaryCTA={{ text: 'Test', url: '#' }}
          secondaryCTA={{ text: 'Test', url: '#' }}
        />
      )

      const outerDiv = container.firstChild
      expect(outerDiv).not.toHaveClass(/h-\[/)
    })

    it('CompanyStory should not have fixed height classes', () => {
      const { container } = render(
        <CompanyStory description="Test description" />
      )

      const outerDiv = container.firstChild
      expect(outerDiv).not.toHaveClass(/h-\[/)
    })

    it('ContactInfo should not have fixed height classes', () => {
      const { container } = render(
        <ContactInfo contact={{ email: 'test@example.com' }} />
      )

      const outerDiv = container.firstChild
      expect(outerDiv).not.toHaveClass(/h-\[/)
    })

    it('EngagementActivity should not have fixed height classes', () => {
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

      const outerDiv = container.firstChild
      expect(outerDiv).not.toHaveClass(/h-\[/)
    })
  })

  describe('Aspect Ratios (Instead of Fixed Heights)', () => {
    it('VideoSection should use aspect-video for 16:9 ratio', () => {
      const { container } = render(
        <VideoSection
          video={{
            title: 'Test',
            url: 'https://youtube.com/watch?v=test',
            type: 'youtube',
          }}
        />
      )

      const videoContainer = container.querySelector('.aspect-video')
      expect(videoContainer).toBeInTheDocument()
    })

    it('SessionSlides should use aspect-[16/10] for slide ratio', () => {
      const { container } = render(
        <SessionSlides slides={{ title: 'Test', embedUrl: '#' }} />
      )

      // Check for the aspect ratio class
      const slidesContainer = container.querySelector('.aspect-\\[16\\/10\\]')
      expect(slidesContainer).toBeInTheDocument()
    })
  })

  describe('Minimum Heights (Where Necessary)', () => {
    it('ResourceCards grid should have min-h-[300px]', () => {
      const { container } = render(
        <ResourceCards
          resources={[
            {
              title: 'Test',
              url: '#',
              type: 'pdf',
              fileSize: '1 MB',
            },
          ]}
        />
      )

      const gridContainer = container.querySelector('.min-h-\\[300px\\]')
      expect(gridContainer).toBeInTheDocument()
    })
  })

  describe('Spacing Consistency Across Layout', () => {
    it('should not have arbitrary margin/padding values', () => {
      const { container } = render(<BoothLayout booth={mockPlatinumBooth} />)

      // Check that there are no arbitrary spacing values like mb-7, p-5, etc.
      const allElements = container.querySelectorAll('*')
      allElements.forEach((element) => {
        const classList = Array.from(element.classList)

        // Check for non-standard margin/padding values
        const hasArbitrarySpacing = classList.some((className) =>
          /^(m|p|space)-\d+$/.test(className) &&
          !['2', '3', '4', '6', '8'].includes(className.slice(-1))
        )

        expect(hasArbitrarySpacing).toBe(false)
      })
    })
  })
})
