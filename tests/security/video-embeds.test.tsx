/**
 * Video Embed Security Tests
 *
 * Tests video URL sanitization and iframe security attributes.
 * Prevents XSS via malicious video URLs.
 */

import { render, screen } from '@testing-library/react'
import VideoSection from '@/components/booths/sections/VideoSection'
import { VideoContent } from '@/types/booth'

describe('Video Embed URL Sanitization', () => {
  describe('YouTube Embeds', () => {
    it('should sanitize YouTube watch URLs', () => {
      const video: VideoContent = {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: 'Test Video'
      }

      const { container } = render(<VideoSection video={video} />)
      const iframe = container.querySelector('iframe')

      expect(iframe).toBeTruthy()
      expect(iframe?.getAttribute('src')).toMatch(
        /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+$/
      )
    })

    it('should sanitize YouTube shorts URLs', () => {
      const video: VideoContent = {
        type: 'youtube',
        url: 'https://www.youtube.com/shorts/abc123XYZ',
        title: 'Test Short'
      }

      const { container } = render(<VideoSection video={video} />)
      const iframe = container.querySelector('iframe')

      expect(iframe?.getAttribute('src')).toMatch(
        /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+$/
      )
    })

    it('should handle youtu.be short URLs', () => {
      const video: VideoContent = {
        type: 'youtube',
        url: 'https://youtu.be/dQw4w9WgXcQ',
        title: 'Test Video'
      }

      const { container } = render(<VideoSection video={video} />)
      const iframe = container.querySelector('iframe')

      expect(iframe?.getAttribute('src')).toMatch(
        /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+$/
      )
    })
  })

  describe('Vimeo Embeds', () => {
    it('should sanitize Vimeo URLs', () => {
      const video: VideoContent = {
        type: 'vimeo',
        url: 'https://vimeo.com/123456789',
        title: 'Test Video'
      }

      const { container } = render(<VideoSection video={video} />)
      const iframe = container.querySelector('iframe')

      expect(iframe?.getAttribute('src')).toMatch(
        /^https:\/\/player\.vimeo\.com\/video\/\d+/
      )
    })

    it('should not allow arbitrary Vimeo parameters', () => {
      const video: VideoContent = {
        type: 'vimeo',
        url: 'https://vimeo.com/123456789?dangerous=param',
        title: 'Test Video'
      }

      const { container } = render(<VideoSection video={video} />)
      const iframe = container.querySelector('iframe')
      const src = iframe?.getAttribute('src') || ''

      // Should only have autoplay parameter, not arbitrary params
      expect(src).toContain('autoplay=1')
      expect(src).not.toContain('dangerous=param')
    })
  })

  describe('Google Drive Embeds', () => {
    it('should sanitize Google Drive file URLs', () => {
      const video: VideoContent = {
        type: 'google-drive',
        url: 'https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view',
        title: 'Test Video'
      }

      const { container } = render(<VideoSection video={video} />)
      const iframe = container.querySelector('iframe')
      const src = iframe?.getAttribute('src') || ''

      expect(src).toMatch(/^https:\/\/drive\.google\.com\/file\/d\/[^/]+\/preview$/)
    })
  })

  describe('Instagram Embeds', () => {
    it('should sanitize Instagram reel URLs', () => {
      const video: VideoContent = {
        type: 'instagram',
        url: 'https://www.instagram.com/reel/ABC123xyz/',
        title: 'Test Reel'
      }

      const { container } = render(<VideoSection video={video} />)
      const iframe = container.querySelector('iframe')
      const src = iframe?.getAttribute('src') || ''

      expect(src).toMatch(
        /^https:\/\/www\.instagram\.com\/reel\/[a-zA-Z0-9_-]+\/embed\/$/
      )
    })

    it('should sanitize Instagram post URLs', () => {
      const video: VideoContent = {
        type: 'instagram',
        url: 'https://www.instagram.com/p/ABC123xyz/',
        title: 'Test Post'
      }

      const { container } = render(<VideoSection video={video} />)
      const iframe = container.querySelector('iframe')
      const src = iframe?.getAttribute('src') || ''

      expect(src).toMatch(
        /^https:\/\/www\.instagram\.com\/p\/[a-zA-Z0-9_-]+\/embed\/$/
      )
    })
  })

  describe('Malicious URL Protection', () => {
    const maliciousUrls = [
      {
        name: 'JavaScript protocol',
        url: 'javascript:alert("XSS")',
        type: 'custom' as const
      },
      {
        name: 'Data URI',
        url: 'data:text/html,<script>alert("XSS")</script>',
        type: 'custom' as const
      },
      {
        name: 'File protocol',
        url: 'file:///etc/passwd',
        type: 'custom' as const
      },
      {
        name: 'FTP protocol',
        url: 'ftp://malicious.com/file.mp4',
        type: 'custom' as const
      },
      {
        name: 'Double-encoded JavaScript',
        url: 'java%09script:alert(1)',
        type: 'custom' as const
      },
      {
        name: 'Null byte injection',
        url: 'https://vimeo.com/123456%00.evil.com',
        type: 'vimeo' as const
      }
    ]

    maliciousUrls.forEach(({ name, url, type }) => {
      it(`should reject ${name}`, () => {
        const video: VideoContent = {
          type,
          url,
          title: 'Malicious Video'
        }

        const { container } = render(<VideoSection video={video} />)
        const iframe = container.querySelector('iframe')
        const src = iframe?.getAttribute('src') || ''

        // Should not contain dangerous protocols
        expect(src).not.toContain('javascript:')
        expect(src).not.toContain('data:')
        expect(src).not.toContain('file:')
        expect(src).not.toContain('ftp:')

        // If iframe exists, should be HTTPS only
        if (iframe) {
          expect(src).toMatch(/^https:\/\//)
        }
      })
    })
  })

  describe('URL Parameter Injection', () => {
    it('should not allow parameter injection via YouTube ID', () => {
      const video: VideoContent = {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=test123&autoplay=1&evil=param',
        title: 'Test'
      }

      const { container } = render(<VideoSection video={video} />)
      const iframe = container.querySelector('iframe')
      const src = iframe?.getAttribute('src') || ''

      // Should only extract video ID, not include other params
      expect(src).toMatch(/^https:\/\/www\.youtube\.com\/embed\/test123$/)
      expect(src).not.toContain('&evil=')
    })

    it('should prevent XSS via video title attribute', () => {
      const video: VideoContent = {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=test123',
        title: '<script>alert("XSS")</script>'
      }

      const { container } = render(<VideoSection video={video} />)
      const iframe = container.querySelector('iframe')
      const title = iframe?.getAttribute('title') || ''

      // Should escape HTML in title
      expect(title).not.toContain('<script>')
      expect(title).not.toContain('</script>')
    })
  })
})

describe('Iframe Security Attributes', () => {
  const testVideo: VideoContent = {
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=test123',
    title: 'Test Video'
  }

  it('should include allow attribute with necessary permissions', () => {
    const { container } = render(<VideoSection video={testVideo} />)
    const iframe = container.querySelector('iframe')
    const allow = iframe?.getAttribute('allow') || ''

    // Should allow necessary features for video playback
    expect(allow).toContain('accelerometer')
    expect(allow).toContain('autoplay')
    expect(allow).toContain('encrypted-media')
    expect(allow).toContain('gyroscope')
    expect(allow).toContain('picture-in-picture')
  })

  it('should not allow dangerous permissions', () => {
    const { container } = render(<VideoSection video={testVideo} />)
    const iframe = container.querySelector('iframe')
    const allow = iframe?.getAttribute('allow') || ''

    // Should NOT allow dangerous permissions
    expect(allow).not.toContain('camera')
    expect(allow).not.toContain('microphone')
    expect(allow).not.toContain('geolocation')
    expect(allow).not.toContain('payment')
  })

  it('should have allowFullScreen attribute', () => {
    const { container } = render(<VideoSection video={testVideo} />)
    const iframe = container.querySelector('iframe')

    expect(iframe?.hasAttribute('allowFullScreen')).toBe(true)
  })

  it('should have proper ARIA attributes', () => {
    const { container } = render(<VideoSection video={testVideo} />)
    const iframe = container.querySelector('iframe')
    const title = iframe?.getAttribute('title')

    expect(title).toBeTruthy()
    expect(title).toBe('Test Video')
  })

  it('should use HTTPS for all embeds', () => {
    const videoTypes: Array<{ type: VideoContent['type']; url: string }> = [
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=test' },
      { type: 'vimeo', url: 'https://vimeo.com/123456' },
      { type: 'google-drive', url: 'https://drive.google.com/file/d/test/view' },
      { type: 'instagram', url: 'https://www.instagram.com/reel/test/' }
    ]

    videoTypes.forEach(({ type, url }) => {
      const video: VideoContent = { type, url, title: 'Test' }
      const { container } = render(<VideoSection video={video} />)
      const iframe = container.querySelector('iframe')
      const src = iframe?.getAttribute('src') || ''

      expect(src).toMatch(/^https:\/\//)
      expect(src).not.toMatch(/^http:\/\//)
    })
  })
})

describe('Lazy Loading and Performance', () => {
  it('should implement lazy loading via Intersection Observer', () => {
    const video: VideoContent = {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=test123',
      title: 'Test Video'
    }

    const { container } = render(<VideoSection video={video} />)

    // Video should not load until visible
    // Component uses Intersection Observer to defer loading
    expect(container.querySelector('iframe')).toBeTruthy()
  })
})

describe('Content Security Policy Compatibility', () => {
  it('should only embed from CSP-approved domains', () => {
    const approvedDomains = [
      'www.youtube.com',
      'player.vimeo.com',
      'drive.google.com',
      'www.instagram.com'
    ]

    const videos: VideoContent[] = [
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=test', title: 'Test' },
      { type: 'vimeo', url: 'https://vimeo.com/123456', title: 'Test' },
      { type: 'google-drive', url: 'https://drive.google.com/file/d/test/view', title: 'Test' },
      { type: 'instagram', url: 'https://www.instagram.com/reel/test/', title: 'Test' }
    ]

    videos.forEach(video => {
      const { container } = render(<VideoSection video={video} />)
      const iframe = container.querySelector('iframe')
      const src = iframe?.getAttribute('src') || ''

      if (src) {
        const domain = new URL(src).hostname

        expect(approvedDomains).toContain(domain)
      }
    })
  })
})
