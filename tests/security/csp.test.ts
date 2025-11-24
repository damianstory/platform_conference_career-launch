/**
 * Content Security Policy (CSP) Security Tests
 *
 * Tests security headers to prevent XSS, clickjacking, and other attacks.
 * These tests should run in CI/CD and fail the build if security headers are missing.
 */

describe('Content Security Policy Headers', () => {
  const testUrl = process.env.TEST_URL || 'http://localhost:3000'

  beforeAll(async () => {
    // Ensure test server is running
    try {
      await fetch(testUrl)
    } catch (error) {
      throw new Error(`Test server not available at ${testUrl}. Run 'npm run dev' first.`)
    }
  })

  describe('CSP Header Validation', () => {
    it('should have Content-Security-Policy header', async () => {
      const response = await fetch(testUrl)
      const csp = response.headers.get('content-security-policy')

      expect(csp).toBeTruthy()
      expect(csp).not.toBe('')
    })

    it('should restrict default-src to self', async () => {
      const response = await fetch(testUrl)
      const csp = response.headers.get('content-security-policy') || ''

      expect(csp).toContain("default-src 'self'")
    })

    it('should allow necessary script sources only', async () => {
      const response = await fetch(testUrl)
      const csp = response.headers.get('content-security-policy') || ''

      // Next.js requires unsafe-inline and unsafe-eval in dev mode
      // In production, should use nonces instead
      expect(csp).toContain('script-src')

      // Should NOT allow arbitrary CDNs
      expect(csp).not.toContain('cdn.tailwindcss.com')
      expect(csp).not.toContain('unpkg.com')
      expect(csp).not.toContain('jsdelivr.net')
    })

    it('should allow only trusted video embed sources', async () => {
      const response = await fetch(testUrl)
      const csp = response.headers.get('content-security-policy') || ''

      // Should allow Vimeo and YouTube
      expect(csp).toMatch(/frame-src.*vimeo\.com/)
      expect(csp).toMatch(/frame-src.*youtube\.com/)

      // Should not allow arbitrary domains
      expect(csp).not.toContain('frame-src *')
    })

    it('should allow only necessary image sources', async () => {
      const response = await fetch(testUrl)
      const csp = response.headers.get('content-security-policy') || ''

      expect(csp).toContain('img-src')
      expect(csp).toMatch(/img-src.*'self'/)
      expect(csp).toMatch(/img-src.*data:/)
      expect(csp).toMatch(/img-src.*i\.vimeocdn\.com/)
    })

    it('should have upgrade-insecure-requests directive', async () => {
      const response = await fetch(testUrl)
      const csp = response.headers.get('content-security-policy') || ''

      // In production, should upgrade HTTP to HTTPS
      if (process.env.NODE_ENV === 'production') {
        expect(csp).toContain('upgrade-insecure-requests')
      }
    })
  })

  describe('Clickjacking Protection', () => {
    it('should have X-Frame-Options header', async () => {
      const response = await fetch(testUrl)
      const xFrameOptions = response.headers.get('x-frame-options')

      expect(xFrameOptions).toBeTruthy()
      expect(['DENY', 'SAMEORIGIN']).toContain(xFrameOptions)
    })

    it('should prevent embedding in iframes via CSP', async () => {
      const response = await fetch(testUrl)
      const csp = response.headers.get('content-security-policy') || ''

      // frame-ancestors should be 'none' or 'self'
      expect(csp).toMatch(/frame-ancestors\s+'(none|self)'/)
    })
  })

  describe('MIME Type Protection', () => {
    it('should prevent MIME type sniffing', async () => {
      const response = await fetch(testUrl)
      const noSniff = response.headers.get('x-content-type-options')

      expect(noSniff).toBe('nosniff')
    })
  })

  describe('XSS Protection Headers', () => {
    it('should have X-XSS-Protection header', async () => {
      const response = await fetch(testUrl)
      const xssProtection = response.headers.get('x-xss-protection')

      // Should be '1; mode=block' or absent (if CSP is strong enough)
      if (xssProtection) {
        expect(xssProtection).toBe('1; mode=block')
      }
    })
  })

  describe('Referrer Policy', () => {
    it('should have secure Referrer-Policy', async () => {
      const response = await fetch(testUrl)
      const referrerPolicy = response.headers.get('referrer-policy')

      expect(referrerPolicy).toBeTruthy()

      const secureValues = [
        'no-referrer',
        'no-referrer-when-downgrade',
        'strict-origin',
        'strict-origin-when-cross-origin'
      ]

      expect(secureValues).toContain(referrerPolicy)
    })
  })

  describe('HSTS Header (Production Only)', () => {
    it('should have Strict-Transport-Security in production', async () => {
      if (process.env.NODE_ENV !== 'production') {
        return // Skip in development
      }

      const response = await fetch(testUrl)
      const hsts = response.headers.get('strict-transport-security')

      expect(hsts).toBeTruthy()
      expect(hsts).toContain('max-age=')
      expect(parseInt(hsts?.match(/max-age=(\d+)/)?.[1] || '0')).toBeGreaterThan(31536000) // 1 year
    })
  })

  describe('Permissions Policy', () => {
    it('should restrict dangerous features', async () => {
      const response = await fetch(testUrl)
      const permissionsPolicy = response.headers.get('permissions-policy')

      if (permissionsPolicy) {
        // Should restrict geolocation
        expect(permissionsPolicy).toMatch(/geolocation=\(\)/)

        // Should restrict microphone
        expect(permissionsPolicy).toMatch(/microphone=\(\)/)

        // Should restrict camera
        expect(permissionsPolicy).toMatch(/camera=\(\)/)
      }
    })
  })
})

describe('Security Header Consistency', () => {
  const testUrl = process.env.TEST_URL || 'http://localhost:3000'

  const testPaths = [
    '/',
    '/sessions',
    '/sessions/pharmacy-in-action',
    '/booths',
    '/booths/conestoga'
  ]

  testPaths.forEach(path => {
    it(`should have security headers on ${path}`, async () => {
      const response = await fetch(`${testUrl}${path}`)

      expect(response.headers.get('x-frame-options')).toBeTruthy()
      expect(response.headers.get('x-content-type-options')).toBe('nosniff')
      expect(response.headers.get('content-security-policy')).toBeTruthy()
    })
  })
})
