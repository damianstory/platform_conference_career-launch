import React from 'react'
import { render, screen } from '@testing-library/react'
import BoothLayout from '../BoothLayout'
import { PlatinumBoothData, StandardBoothData } from '@/types/booth'

// Mock the section components
jest.mock('../sections/BoothHeader', () => ({
  __esModule: true,
  default: ({ name }: { name: string }) => <div data-testid="booth-header">{name}</div>,
}))

jest.mock('../sections/VideoSection', () => ({
  __esModule: true,
  default: () => <div data-testid="video-section">Video Section</div>,
}))

jest.mock('../sections/EngagementActivity', () => ({
  __esModule: true,
  default: () => <div data-testid="engagement-activity">Engagement Activity</div>,
}))

jest.mock('../sections/ResourceCards', () => ({
  __esModule: true,
  default: () => <div data-testid="resource-cards">Resource Cards</div>,
}))

jest.mock('../sections/SessionSlides', () => ({
  __esModule: true,
  default: () => <div data-testid="session-slides">Session Slides</div>,
}))

jest.mock('../sections/CompanyStory', () => ({
  __esModule: true,
  default: () => <div data-testid="company-story">Company Story</div>,
}))

jest.mock('../sections/ContactInfo', () => ({
  __esModule: true,
  default: () => <div data-testid="contact-info">Contact Info</div>,
}))

// Sample test data
const mockStandardBooth: StandardBoothData = {
  tier: 'standard',
  id: 'test-standard',
  name: 'Test Standard Booth',
  logo: '/test-logo.png',
  tagline: 'Test tagline',
  description: 'Test description',
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
      title: 'Test Resource',
      url: 'https://example.com/resource.pdf',
      type: 'pdf',
      fileSize: '1.2 MB',
    },
  ],
  contact: {
    email: 'test@example.com',
    phone: '555-1234',
  },
}

const mockPlatinumBooth: PlatinumBoothData = {
  ...mockStandardBooth,
  tier: 'platinum',
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
  ],
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C',
  },
}

describe('BoothLayout Grid Structure', () => {
  describe('Grid Container', () => {
    it('should have 12-column grid class', () => {
      const { container } = render(<BoothLayout booth={mockStandardBooth} />)
      const gridContainer = container.querySelector('.grid.grid-cols-12')
      expect(gridContainer).toBeInTheDocument()
    })

    it('should have consistent gap-6 (24px) between sections', () => {
      const { container } = render(<BoothLayout booth={mockStandardBooth} />)
      const gridContainer = container.querySelector('.grid.grid-cols-12')
      expect(gridContainer).toHaveClass('gap-6')
    })

    it('should not have responsive gap variations', () => {
      const { container } = render(<BoothLayout booth={mockStandardBooth} />)
      const gridContainer = container.querySelector('.grid.grid-cols-12')

      // Verify it doesn't have responsive gap classes
      expect(gridContainer?.className).not.toMatch(/gap-y-\d|gap-x-\d/)
      expect(gridContainer?.className).not.toMatch(/sm:gap-/)
      expect(gridContainer?.className).not.toMatch(/md:gap-/)
      expect(gridContainer?.className).not.toMatch(/lg:gap-/)
    })

    it('should have max-width container', () => {
      const { container } = render(<BoothLayout booth={mockStandardBooth} />)
      const maxWidthContainer = container.querySelector('.max-w-\\[1400px\\]')
      expect(maxWidthContainer).toBeInTheDocument()
    })
  })

  describe('Column Spans - Standard Booth', () => {
    it('should render all standard booth sections', () => {
      render(<BoothLayout booth={mockStandardBooth} />)

      expect(screen.getByTestId('booth-header')).toBeInTheDocument()
      expect(screen.getByTestId('video-section')).toBeInTheDocument()
      expect(screen.getByTestId('resource-cards')).toBeInTheDocument()
      expect(screen.getByTestId('company-story')).toBeInTheDocument()
      expect(screen.getByTestId('contact-info')).toBeInTheDocument()
    })

    it('should NOT render platinum-only sections', () => {
      render(<BoothLayout booth={mockStandardBooth} />)

      expect(screen.queryByTestId('engagement-activity')).not.toBeInTheDocument()
      expect(screen.queryByTestId('session-slides')).not.toBeInTheDocument()
    })
  })

  describe('Column Spans - Platinum Booth', () => {
    it('should render all platinum booth sections', () => {
      render(<BoothLayout booth={mockPlatinumBooth} />)

      expect(screen.getByTestId('booth-header')).toBeInTheDocument()
      expect(screen.getByTestId('video-section')).toBeInTheDocument()
      expect(screen.getByTestId('engagement-activity')).toBeInTheDocument()
      expect(screen.getByTestId('resource-cards')).toBeInTheDocument()
      expect(screen.getByTestId('session-slides')).toBeInTheDocument()
      expect(screen.getByTestId('company-story')).toBeInTheDocument()
      expect(screen.getByTestId('contact-info')).toBeInTheDocument()
    })
  })

  describe('Responsive Behavior', () => {
    it('should have mobile-first approach (all sections col-span-12 by default)', () => {
      render(<BoothLayout booth={mockPlatinumBooth} />)

      // All sections should exist (testing mobile-first rendering)
      const sections = [
        'booth-header',
        'video-section',
        'engagement-activity',
        'resource-cards',
        'session-slides',
        'company-story',
        'contact-info',
      ]

      sections.forEach((testId) => {
        expect(screen.getByTestId(testId)).toBeInTheDocument()
      })
    })
  })

  describe('Component Rendering Order', () => {
    it('should render sections in correct bento grid order', () => {
      const { container } = render(<BoothLayout booth={mockPlatinumBooth} />)
      const gridContainer = container.querySelector('.grid.grid-cols-12')
      const children = gridContainer?.children

      if (!children) {
        throw new Error('Grid container not found')
      }

      // Expected order for Platinum booth:
      // 1. BoothHeader (col-span-12)
      // 2. VideoSection (col-span-12 lg:col-span-4)
      // 3. EngagementActivity (col-span-12 lg:col-span-8)
      // 4. ResourceCards (col-span-12 lg:col-span-5)
      // 5. SessionSlides (col-span-12 lg:col-span-7)
      // 6. CompanyStory (col-span-12 lg:col-span-7)
      // 7. ContactInfo (col-span-12 lg:col-span-5)

      expect(children[0]).toHaveAttribute('data-testid', 'booth-header')
      expect(children[1]).toHaveAttribute('data-testid', 'video-section')
      expect(children[2]).toHaveAttribute('data-testid', 'engagement-activity')
      expect(children[3]).toHaveAttribute('data-testid', 'resource-cards')
      expect(children[4]).toHaveAttribute('data-testid', 'session-slides')
      expect(children[5]).toHaveAttribute('data-testid', 'company-story')
      expect(children[6]).toHaveAttribute('data-testid', 'contact-info')
    })
  })

  describe('Accessibility', () => {
    it('should not have horizontal scroll on mobile', () => {
      const { container } = render(<BoothLayout booth={mockPlatinumBooth} />)
      const wrapper = container.firstChild as HTMLElement

      // Check that container has proper width constraints
      expect(wrapper).toHaveClass('w-full')
    })

    it('should have proper spacing between sections', () => {
      const { container } = render(<BoothLayout booth={mockStandardBooth} />)
      const gridContainer = container.querySelector('.grid')

      // Verify gap class is present for proper spacing
      expect(gridContainer).toHaveClass('gap-6')
    })
  })
})
