import React from 'react'
import { render, screen } from '@testing-library/react'
import SectionLabel from '../shared/SectionLabel'
import BoothHeader from '../sections/BoothHeader'
import EngagementActivity from '../sections/EngagementActivity'
import ResourceCards from '../sections/ResourceCards'
import SessionSlides from '../sections/SessionSlides'
import CompanyStory from '../sections/CompanyStory'
import ContactInfo from '../sections/ContactInfo'
import { Sparkles } from 'lucide-react'

describe('Typography System', () => {
  describe('SectionLabel Component', () => {
    it('should render with correct base typography classes', () => {
      const { container } = render(<SectionLabel text="Test Label" />)
      const label = container.querySelector('span')

      expect(label).toHaveClass('text-xs')
      expect(label).toHaveClass('font-semibold')
      expect(label).toHaveClass('uppercase')
      expect(label).toHaveClass('tracking-wider')
      expect(label).toHaveClass('text-gray-500')
    })

    it('should render with icon when provided', () => {
      const { container } = render(<SectionLabel text="Test Label" icon={Sparkles} />)
      const icon = container.querySelector('svg')

      expect(icon).toBeInTheDocument()
      expect(icon).toHaveClass('w-4')
      expect(icon).toHaveClass('h-4')
    })

    it('should render text content', () => {
      render(<SectionLabel text="Interactive Activity" />)
      expect(screen.getByText('Interactive Activity')).toBeInTheDocument()
    })

    it('should support custom className', () => {
      const { container } = render(<SectionLabel text="Test" className="custom-class" />)
      const label = container.querySelector('span')

      expect(label).toHaveClass('custom-class')
    })
  })

  describe('BoothHeader Typography', () => {
    it('should have correct company name typography (text-3xl font-bold text-gray-900)', () => {
      const { container } = render(
        <BoothHeader
          name="Test Company"
          logo="/logo.png"
          tagline="Test tagline"
          primaryCTA={{ text: 'Test', url: '#' }}
          secondaryCTA={{ text: 'Test', url: '#' }}
        />
      )

      const companyName = container.querySelector('h1')
      expect(companyName).toHaveClass('text-3xl')
      expect(companyName).toHaveClass('font-bold')
      expect(companyName).toHaveClass('text-gray-900')
    })

    it('should have correct tagline typography (text-base text-gray-600)', () => {
      render(
        <BoothHeader
          name="Test Company"
          logo="/logo.png"
          tagline="Innovative solutions"
          primaryCTA={{ text: 'Test', url: '#' }}
          secondaryCTA={{ text: 'Test', url: '#' }}
        />
      )

      const tagline = screen.getByText('Innovative solutions')
      expect(tagline).toHaveClass('text-base')
      expect(tagline).toHaveClass('text-gray-600')
    })
  })

  describe('EngagementActivity Typography', () => {
    it('should use SectionLabel for section header', () => {
      render(
        <EngagementActivity
          activity={{
            title: 'Test Quiz',
            description: 'Test description',
            embedUrl: '#',
            embedType: 'google-form',
          }}
        />
      )

      expect(screen.getByText('Interactive Activity')).toBeInTheDocument()
    })

    it('should have correct title typography (text-2xl font-semibold text-gray-900)', () => {
      const { container } = render(
        <EngagementActivity
          activity={{
            title: 'Tech Career Quiz',
            description: 'Test description',
            embedUrl: '#',
            embedType: 'google-form',
          }}
        />
      )

      const title = screen.getByText('Tech Career Quiz')
      expect(title).toHaveClass('text-2xl')
      expect(title).toHaveClass('font-semibold')
      expect(title).toHaveClass('text-gray-900')
      expect(title.tagName).toBe('H2')
    })

    it('should have correct description typography (text-base leading-relaxed text-gray-600)', () => {
      const { container } = render(
        <EngagementActivity
          activity={{
            title: 'Test Quiz',
            description: 'Test your knowledge',
            embedUrl: '#',
            embedType: 'google-form',
          }}
        />
      )

      const description = screen.getByText('Test your knowledge')
      expect(description).toHaveClass('text-base')
      expect(description).toHaveClass('leading-relaxed')
      expect(description).toHaveClass('text-gray-600')
    })

    it('should have correct metadata typography (text-sm text-gray-500)', () => {
      render(
        <EngagementActivity
          activity={{
            title: 'Test Quiz',
            description: 'Test description',
            embedUrl: '#',
            embedType: 'google-form',
            duration: '10 minutes',
          }}
        />
      )

      const duration = screen.getByText(/Duration: 10 minutes/)
      expect(duration).toHaveClass('text-sm')
      expect(duration).toHaveClass('text-gray-500')
    })
  })

  describe('ResourceCards Typography', () => {
    const mockResources = [
      {
        title: 'Career Pathways Guide',
        description: 'Explore different career options',
        url: '#',
        type: 'pdf' as const,
        fileSize: '2.4 MB',
      },
      {
        title: 'Resume Template',
        url: '#',
        type: 'pdf' as const,
        fileSize: '1.2 MB',
      },
    ]

    it('should use SectionLabel for header', () => {
      render(<ResourceCards resources={mockResources} />)
      expect(screen.getByText('Resources')).toBeInTheDocument()
    })

    it('should have correct large card title typography (text-lg font-medium text-gray-900)', () => {
      render(<ResourceCards resources={mockResources} />)

      const largeCardTitle = screen.getByText('Career Pathways Guide')
      expect(largeCardTitle).toHaveClass('text-lg')
      expect(largeCardTitle).toHaveClass('font-medium')
      expect(largeCardTitle).toHaveClass('text-gray-900')
      expect(largeCardTitle.tagName).toBe('H4')
    })

    it('should have correct small card title typography (text-sm font-medium text-gray-900)', () => {
      render(<ResourceCards resources={mockResources} />)

      const smallCardTitle = screen.getByText('Resume Template')
      expect(smallCardTitle).toHaveClass('text-sm')
      expect(smallCardTitle).toHaveClass('font-medium')
      expect(smallCardTitle).toHaveClass('text-gray-900')
    })

    it('should have correct description typography (text-sm text-gray-600)', () => {
      render(<ResourceCards resources={mockResources} />)

      const description = screen.getByText('Explore different career options')
      expect(description).toHaveClass('text-sm')
      expect(description).toHaveClass('text-gray-600')
    })

    it('should have correct file size typography (text-xs text-gray-500)', () => {
      const { container } = render(<ResourceCards resources={mockResources} />)

      const fileSizes = container.querySelectorAll('.text-xs.text-gray-500')
      expect(fileSizes.length).toBeGreaterThan(0)
    })
  })

  describe('SessionSlides Typography', () => {
    it('should use SectionLabel for header', () => {
      render(<SessionSlides slides={{ title: 'Test Slides', embedUrl: '#' }} />)
      expect(screen.getByText('Your Session Deck')).toBeInTheDocument()
    })

    it('should have correct description typography (text-sm text-gray-500)', () => {
      render(
        <SessionSlides
          slides={{
            title: 'Test Slides',
            description: 'Presentation slides',
            embedUrl: '#',
          }}
        />
      )

      const description = screen.getByText('Presentation slides')
      expect(description).toHaveClass('text-sm')
      expect(description).toHaveClass('text-gray-500')
    })
  })

  describe('CompanyStory Typography', () => {
    it('should use SectionLabel for header', () => {
      render(<CompanyStory description="Test description" />)
      expect(screen.getByText('About Us')).toBeInTheDocument()
    })

    it('should have correct description typography (text-base leading-relaxed text-gray-600)', () => {
      render(<CompanyStory description="We are a leading tech company" />)

      const description = screen.getByText('We are a leading tech company')
      expect(description).toHaveClass('text-base')
      expect(description).toHaveClass('leading-relaxed')
      expect(description).toHaveClass('text-gray-600')
    })

    it('should have correct Quick Facts heading typography (text-lg font-semibold text-gray-900)', () => {
      render(
        <CompanyStory
          description="Test"
          quickFacts={[{ label: 'Founded', value: '2020', icon: 'building' }]}
        />
      )

      const heading = screen.getByText('Quick Facts')
      expect(heading).toHaveClass('text-lg')
      expect(heading).toHaveClass('font-semibold')
      expect(heading).toHaveClass('text-gray-900')
      expect(heading.tagName).toBe('H4')
    })

    it('should have correct fact label typography (text-xs font-medium uppercase tracking-wide text-gray-500)', () => {
      const { container } = render(
        <CompanyStory
          description="Test"
          quickFacts={[{ label: 'Founded', value: '2020', icon: 'building' }]}
        />
      )

      const label = screen.getByText('Founded')
      expect(label).toHaveClass('text-xs')
      expect(label).toHaveClass('font-medium')
      expect(label).toHaveClass('uppercase')
      expect(label).toHaveClass('tracking-wide')
      expect(label).toHaveClass('text-gray-500')
    })

    it('should have correct fact value typography (text-lg font-semibold text-gray-900)', () => {
      render(
        <CompanyStory
          description="Test"
          quickFacts={[{ label: 'Founded', value: '2020', icon: 'building' }]}
        />
      )

      const value = screen.getByText('2020')
      expect(value).toHaveClass('text-lg')
      expect(value).toHaveClass('font-semibold')
      expect(value).toHaveClass('text-gray-900')
    })
  })

  describe('ContactInfo Typography', () => {
    it('should use SectionLabel for header', () => {
      render(<ContactInfo contact={{ email: 'test@example.com' }} />)
      expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    })

    it('should have correct contact method typography (text-sm text-gray-700)', () => {
      render(<ContactInfo contact={{ email: 'test@example.com' }} />)

      const email = screen.getByText('test@example.com')
      expect(email).toHaveClass('text-sm')
      expect(email).toHaveClass('text-gray-700')
    })

    it('should have correct internship info typography', () => {
      render(
        <ContactInfo
          contact={{
            email: 'test@example.com',
            internshipInfo: {
              available: true,
              period: 'Summer 2024',
              applicationUrl: '#',
            },
          }}
        />
      )

      const heading = screen.getByText('Internships Available')
      expect(heading).toHaveClass('text-sm')
      expect(heading).toHaveClass('font-semibold')

      const period = screen.getByText('Summer 2024')
      expect(period).toHaveClass('text-sm')
      expect(period).toHaveClass('text-gray-600')
    })
  })

  describe('Typography Hierarchy', () => {
    it('should have clear visual hierarchy from labels to titles to body text', () => {
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

      // Section label should be smallest
      const label = screen.getByText('Interactive Activity')
      expect(label).toHaveClass('text-xs')

      // Title should be largest
      const title = screen.getByText('Test Quiz')
      expect(title).toHaveClass('text-2xl')

      // Body should be medium
      const body = screen.getByText('Test description')
      expect(body).toHaveClass('text-base')
    })
  })

  describe('Color Contrast (WCAG AA)', () => {
    it('should use text-gray-900 for primary text (high contrast)', () => {
      render(
        <EngagementActivity
          activity={{
            title: 'Test Quiz',
            description: 'Test description',
            embedUrl: '#',
            embedType: 'google-form',
          }}
        />
      )

      const title = screen.getByText('Test Quiz')
      expect(title).toHaveClass('text-gray-900')
    })

    it('should use text-gray-600 for body text (sufficient contrast)', () => {
      render(<CompanyStory description="Test company description" />)

      const description = screen.getByText('Test company description')
      expect(description).toHaveClass('text-gray-600')
    })

    it('should use text-gray-500 for metadata (lighter, still readable)', () => {
      render(
        <EngagementActivity
          activity={{
            title: 'Test',
            description: 'Test',
            embedUrl: '#',
            embedType: 'google-form',
            duration: '5 minutes',
          }}
        />
      )

      const duration = screen.getByText(/Duration: 5 minutes/)
      expect(duration).toHaveClass('text-gray-500')
    })
  })
})
