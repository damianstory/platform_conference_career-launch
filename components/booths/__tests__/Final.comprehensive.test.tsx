import React from 'react'
import { render, screen } from '@testing-library/react'
import EmptyState from '../shared/EmptyState'
import PrizeBox from '../shared/PrizeBox'
import SkeletonCard from '../shared/SkeletonCard'
import EngagementActivity from '../sections/EngagementActivity'
import ResourceCards from '../sections/ResourceCards'
import VideoSection from '../sections/VideoSection'
import ContactInfo from '../sections/ContactInfo'
import BoothHeader from '../sections/BoothHeader'
import { File, Trophy } from 'lucide-react'
import * as accessibility from '@/lib/utils/accessibility'

describe('Comprehensive Final Test Suite', () => {
  describe('EmptyState Component', () => {
    it('should render with icon and message', () => {
      render(<EmptyState icon={File} message="No items found" />)

      expect(screen.getByText('No items found')).toBeInTheDocument()
    })

    it('should render with optional description', () => {
      render(
        <EmptyState
          icon={File}
          message="No items"
          description="Check back later"
        />
      )

      expect(screen.getByText('Check back later')).toBeInTheDocument()
    })

    it('should have dashed border styling', () => {
      const { container } = render(<EmptyState icon={File} message="Empty" />)

      const emptyState = container.firstChild
      expect(emptyState).toHaveClass('border-dashed')
      expect(emptyState).toHaveClass('border-gray-200')
      expect(emptyState).toHaveClass('rounded-xl')
    })
  })

  describe('PrizeBox Component', () => {
    it('should render with title and description', () => {
      render(
        <PrizeBox
          title="Win a Prize"
          description="Complete the activity"
        />
      )

      expect(screen.getByText('Win a Prize')).toBeInTheDocument()
      expect(screen.getByText('Complete the activity')).toBeInTheDocument()
    })

    it('should render with optional value', () => {
      render(
        <PrizeBox
          title="Prize"
          description="Description"
          value="Worth $500"
        />
      )

      expect(screen.getByText('Worth $500')).toBeInTheDocument()
    })

    it('should have trophy icon', () => {
      const { container } = render(
        <PrizeBox title="Prize" description="Description" />
      )

      const icon = container.querySelector('svg')
      expect(icon).toBeInTheDocument()
    })

    it('should have correct styling', () => {
      const { container } = render(
        <PrizeBox title="Prize" description="Description" />
      )

      const prizeBox = container.firstChild
      expect(prizeBox).toHaveClass('bg-blue-100')
      expect(prizeBox).toHaveClass('border-blue-300')
    })
  })

  describe('SkeletonCard Component', () => {
    it('should render default skeleton', () => {
      const { container } = render(<SkeletonCard />)

      const skeleton = container.firstChild
      expect(skeleton).toHaveClass('animate-pulse')
      expect(skeleton).toHaveClass('rounded-xl')
    })

    it('should render featured variant', () => {
      const { container } = render(<SkeletonCard variant="featured" />)

      const skeleton = container.firstChild
      expect(skeleton).toHaveClass('from-blue-50')
      expect(skeleton).toHaveClass('to-blue-100')
    })

    it('should render correct number of lines', () => {
      const { container } = render(<SkeletonCard lines={4} />)

      const lines = container.querySelectorAll('.h-4')
      expect(lines.length).toBe(4)
    })

    it('should show title when showTitle is true', () => {
      const { container } = render(<SkeletonCard showTitle />)

      const title = container.querySelector('.h-6')
      expect(title).toBeInTheDocument()
    })
  })

  describe('Component Details Integration', () => {
    it('EngagementActivity should render PrizeBox when prize exists', () => {
      render(
        <EngagementActivity
          activity={{
            title: 'Quiz',
            description: 'Test',
            embedUrl: '#',
            embedType: 'google-form',
            prize: {
              title: 'Win a Prize',
              description: 'Complete to win',
            },
          }}
        />
      )

      expect(screen.getByText('Win a Prize')).toBeInTheDocument()
      expect(screen.getByText('Complete to win')).toBeInTheDocument()
    })

    it('ResourceCards should render EmptyState when less than 5 resources', () => {
      render(
        <ResourceCards
          resources={[
            {
              title: 'Resource 1',
              url: '#',
              type: 'pdf',
              fileSize: '1MB',
            },
          ]}
        />
      )

      expect(screen.getByText('More resources coming soon')).toBeInTheDocument()
    })
  })

  describe('Accessibility Features', () => {
    describe('ARIA Labels', () => {
      it('VideoSection should have descriptive play button aria-label', () => {
        render(
          <VideoSection
            video={{
              title: 'Career Video',
              url: 'https://youtube.com/watch?v=test',
              type: 'youtube',
            }}
          />
        )

        const playButton = screen.getByRole('button')
        expect(playButton).toHaveAttribute('aria-label', 'Play video: Career Video')
      })

      it('ResourceCards should have descriptive aria-labels for downloads', () => {
        const { container } = render(
          <ResourceCards
            resources={[
              {
                title: 'Career Guide',
                url: '#',
                type: 'pdf',
                fileSize: '2.4 MB',
              },
            ]}
          />
        )

        const link = container.querySelector('a')
        expect(link).toHaveAttribute('aria-label', 'Download Career Guide (2.4 MB)')
      })

      it('ContactInfo email should have aria-label', () => {
        const { container } = render(
          <ContactInfo contact={{ email: 'test@example.com' }} />
        )

        const emailLink = container.querySelector('a[href^="mailto:"]')
        expect(emailLink).toHaveAttribute('aria-label', 'Email test@example.com')
      })

      it('BoothHeader CTAs should have descriptive aria-labels', () => {
        const { container } = render(
          <BoothHeader
            name="Company"
            logo="/logo.png"
            tagline="Tagline"
            primaryCTA={{ text: 'Visit Website', url: '#' }}
            secondaryCTA={{ text: 'Contact', url: '#' }}
          />
        )

        const links = container.querySelectorAll('a[target="_blank"]')
        expect(links[0]).toHaveAttribute('aria-label', 'Visit Website (opens in new window)')
        expect(links[1]).toHaveAttribute('aria-label', 'Contact (opens in new window)')
      })
    })

    describe('Focus States', () => {
      it('all interactive elements should have focus-visible classes', () => {
        const { container } = render(
          <VideoSection
            video={{
              title: 'Test',
              url: 'https://youtube.com/watch?v=test',
              type: 'youtube',
            }}
          />
        )

        const button = screen.getByRole('button')
        expect(button).toHaveClass('focus-visible:outline-2')
        expect(button).toHaveClass('focus-visible:outline-blue-500')
        expect(button).toHaveClass('focus-visible:outline-offset-4')
      })

      it('Card component should have focus styles when clickable', () => {
        const Card = require('../shared/Card').default
        const { container } = render(
          <Card variant="interactive" onClick={() => {}}>
            Content
          </Card>
        )

        const button = container.querySelector('button')
        expect(button).toHaveClass('focus:outline-none')
        expect(button).toHaveClass('focus:ring-2')
        expect(button).toHaveClass('focus:ring-blue-500')
      })
    })

    describe('Keyboard Navigation', () => {
      it('all links should be keyboard accessible', () => {
        render(
          <BoothHeader
            name="Company"
            logo="/logo.png"
            tagline="Tagline"
            primaryCTA={{ text: 'Primary', url: '#' }}
            secondaryCTA={{ text: 'Secondary', url: '#' }}
          />
        )

        const links = screen.getAllByRole('link')
        links.forEach(link => {
          expect(link).toBeVisible()
          expect(link).not.toHaveAttribute('tabindex', '-1')
        })
      })

      it('buttons should be keyboard accessible', () => {
        render(
          <VideoSection
            video={{
              title: 'Test',
              url: 'https://youtube.com/watch?v=test',
              type: 'youtube',
            }}
          />
        )

        const button = screen.getByRole('button')
        expect(button).toBeVisible()
        expect(button).not.toHaveAttribute('tabindex', '-1')
      })
    })
  })

  describe('Accessibility Utility Functions', () => {
    it('getExternalLinkAriaLabel should format correctly', () => {
      const label = accessibility.getExternalLinkAriaLabel('Visit Website')
      expect(label).toBe('Visit Website (opens in new window)')
    })

    it('getDownloadAriaLabel should include file size', () => {
      const label = accessibility.getDownloadAriaLabel('Document.pdf', '2.4 MB')
      expect(label).toBe('Download Document.pdf (2.4 MB)')
    })

    it('getDownloadAriaLabel should work without file size', () => {
      const label = accessibility.getDownloadAriaLabel('Document.pdf')
      expect(label).toBe('Download Document.pdf')
    })

    it('getVideoPlayAriaLabel should format correctly', () => {
      const label = accessibility.getVideoPlayAriaLabel('Career Introduction')
      expect(label).toBe('Play video: Career Introduction')
    })
  })

  describe('Responsive Behavior', () => {
    it('all cards should stack on mobile (col-span-12)', () => {
      const { container } = render(
        <ResourceCards
          resources={[
            {
              title: 'Test',
              url: '#',
              type: 'pdf',
              fileSize: '1MB',
            },
          ]}
        />
      )

      const card = container.firstChild
      expect(card).toHaveClass('col-span-12')
    })

    it('BoothHeader should be full width on all breakpoints', () => {
      const { container } = render(
        <BoothHeader
          name="Company"
          logo="/logo.png"
          tagline="Tagline"
          primaryCTA={{ text: 'Primary', url: '#' }}
          secondaryCTA={{ text: 'Secondary', url: '#' }}
        />
      )

      const header = container.firstChild
      expect(header).toHaveClass('col-span-12')
    })
  })

  describe('Visual Consistency', () => {
    it('all standard cards should have consistent border and shadow', () => {
      const components = [
        <ResourceCards key="resources" resources={[]} />,
        <ContactInfo key="contact" contact={{ email: 'test@test.com' }} />,
      ]

      components.forEach(component => {
        const { container } = render(component)
        const card = container.firstChild

        expect(card).toHaveClass('border-gray-200')
        expect(card).toHaveClass('shadow-sm')
        expect(card).toHaveClass('rounded-xl')
      })
    })

    it('all cards should have hover shadow effect', () => {
      const { container } = render(<ResourceCards resources={[]} />)
      const card = container.firstChild

      expect(card).toHaveClass('hover:shadow-md')
    })
  })
})
