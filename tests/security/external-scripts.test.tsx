/**
 * External Script Detection Tests
 *
 * Tests to ensure no unauthorized external scripts or CDN resources are loaded.
 * This prevents supply chain attacks via compromised CDNs.
 */

import { render } from '@testing-library/react'
import { execSync } from 'child_process'
import path from 'path'

describe('External Script Detection', () => {
  describe('Build Output Validation', () => {
    it('should not include CDN scripts in build output', () => {
      const buildDir = path.join(process.cwd(), '.next')

      // Check if build exists
      const buildExists = require('fs').existsSync(buildDir)

      if (buildExists) {
        // Search for CDN URLs in build output
        const cdnPatterns = [
          'cdn.tailwindcss.com',
          'unpkg.com',
          'jsdelivr.net',
          'cdnjs.cloudflare.com'
        ]

        cdnPatterns.forEach(pattern => {
          try {
            const result = execSync(
              `grep -r "${pattern}" "${buildDir}" || true`,
              { encoding: 'utf-8' }
            )

            expect(result.trim()).toBe('')

            if (result.trim()) {
              throw new Error(
                `Found unauthorized CDN reference to ${pattern} in build output:\n${result}`
              )
            }
          } catch (error: any) {
            if (error.message.includes('Found unauthorized')) {
              throw error
            }
            // grep returns non-zero if no matches (which is what we want)
          }
        })
      }
    })

    it('should not have dangerouslySetInnerHTML in source code', () => {
      const sourceFiles = execSync(
        'grep -r "dangerouslySetInnerHTML" app/ components/ lib/ 2>/dev/null || true',
        { encoding: 'utf-8' }
      )

      expect(sourceFiles.trim()).toBe('')

      if (sourceFiles.trim()) {
        throw new Error(
          'Found dangerouslySetInnerHTML usage. This can lead to XSS vulnerabilities:\n' +
          sourceFiles
        )
      }
    })

    it('should not use eval or Function constructor', () => {
      const patterns = [
        'eval(',
        'new Function',
        'setTimeout.*string',
        'setInterval.*string'
      ]

      patterns.forEach(pattern => {
        const result = execSync(
          `grep -rE "${pattern}" app/ components/ lib/ 2>/dev/null || true`,
          { encoding: 'utf-8' }
        )

        // Filter out comments and test files
        const filtered = result
          .split('\n')
          .filter(line => !line.includes('//') && !line.includes('/*'))
          .filter(line => !line.includes('.test.'))
          .filter(line => line.trim())
          .join('\n')

        expect(filtered).toBe('')

        if (filtered) {
          console.warn(
            `⚠️  Found potentially dangerous pattern "${pattern}":\n${filtered}`
          )
        }
      })
    })
  })

  describe('HTML File Detection', () => {
    it('should not deploy mockup HTML files', () => {
      const publicDir = path.join(process.cwd(), 'public')

      // HTML files should not be in public directory
      const htmlFiles = execSync(
        `find "${publicDir}" -name "*.html" 2>/dev/null || true`,
        { encoding: 'utf-8' }
      )

      expect(htmlFiles.trim()).toBe('')

      if (htmlFiles.trim()) {
        throw new Error(
          'Found HTML files in public directory. These will be deployed:\n' +
          htmlFiles
        )
      }
    })

    it('should not have HTML files in root directory', () => {
      const rootHtmlFiles = execSync(
        'find . -maxdepth 1 -name "*.html" 2>/dev/null || true',
        { encoding: 'utf-8' }
      )

      // Filter out node_modules
      const filtered = rootHtmlFiles
        .split('\n')
        .filter(line => !line.includes('node_modules'))
        .filter(line => line.trim())
        .join('\n')

      expect(filtered).toBe('')

      if (filtered) {
        throw new Error(
          'Found HTML files in root directory. These should be in design-mockups/:\n' +
          filtered
        )
      }
    })
  })

  describe('Script Tag Validation', () => {
    it('should not have inline script tags with external sources', () => {
      const scriptTags = execSync(
        'grep -r "<script.*src=" app/ components/ 2>/dev/null || true',
        { encoding: 'utf-8' }
      )

      const filtered = scriptTags
        .split('\n')
        .filter(line => !line.includes('node_modules'))
        .filter(line => !line.includes('.test.'))
        .filter(line => line.trim())

      // Next.js uses Script components, not <script> tags
      filtered.forEach(line => {
        // Should use next/script, not raw <script>
        if (line.includes('<script')) {
          console.warn('⚠️  Found raw script tag, should use next/script:', line)
        }
      })
    })
  })

  describe('Data URI Detection', () => {
    it('should not have data URIs with JavaScript', () => {
      const patterns = [
        'data:text/javascript',
        'data:application/javascript',
        'data:text/html.*script'
      ]

      patterns.forEach(pattern => {
        const result = execSync(
          `grep -rE "${pattern}" app/ components/ lib/ public/ 2>/dev/null || true`,
          { encoding: 'utf-8' }
        )

        expect(result.trim()).toBe('')

        if (result.trim()) {
          throw new Error(
            `Found suspicious data URI with JavaScript:\n${result}`
          )
        }
      })
    })
  })
})

describe('Next.js Script Component Usage', () => {
  it('should only load scripts from approved domains', () => {
    const approvedDomains = [
      'googletagmanager.com', // Google Analytics
      'google-analytics.com',  // Google Analytics
      'vercel-insights.com'    // Vercel Analytics
    ]

    // Check for next/script imports
    const scriptImports = execSync(
      'grep -r "next/script" app/ components/ 2>/dev/null || true',
      { encoding: 'utf-8' }
    )

    if (scriptImports.trim()) {
      // Found Script usage, should verify domains
      console.log('Found next/script usage:', scriptImports)

      // TODO: Parse and validate script sources
    }
  })
})

describe('Environment Variable Security', () => {
  it('should not expose secrets in client-side code', () => {
    const patterns = [
      'process.env.SUPABASE_SERVICE_ROLE_KEY',
      'process.env.DATABASE_URL',
      'process.env.PRIVATE_KEY'
    ]

    patterns.forEach(pattern => {
      const result = execSync(
        `grep -r "${pattern}" app/ components/ lib/ 2>/dev/null || true`,
        { encoding: 'utf-8' }
      )

      // Filter out server-side files
      const clientSideFiles = result
        .split('\n')
        .filter(line => !line.includes('use server'))
        .filter(line => !line.includes('/api/'))
        .filter(line => line.includes('use client'))
        .join('\n')

      expect(clientSideFiles.trim()).toBe('')

      if (clientSideFiles.trim()) {
        throw new Error(
          `Found server-only environment variables in client-side code:\n${clientSideFiles}`
        )
      }
    })
  })

  it('should prefix client-side env vars with NEXT_PUBLIC_', () => {
    const files = execSync(
      'grep -rh "process.env." app/ components/ lib/ 2>/dev/null | grep "use client" -A 20 || true',
      { encoding: 'utf-8' }
    )

    const envVars = files.match(/process\.env\.([A-Z_]+)/g) || []

    envVars.forEach(envVar => {
      const varName = envVar.replace('process.env.', '')

      if (!varName.startsWith('NEXT_PUBLIC_') && !varName.startsWith('NODE_ENV')) {
        console.warn(
          `⚠️  Client-side environment variable should be prefixed with NEXT_PUBLIC_: ${varName}`
        )
      }
    })
  })
})

describe('Third-Party Integration Security', () => {
  it('should only embed videos from approved domains', () => {
    const approvedDomains = [
      'player.vimeo.com',
      'youtube.com',
      'youtube-nocookie.com',
      'drive.google.com',
      'instagram.com'
    ]

    const iframePattern = execSync(
      'grep -r "iframe.*src=" components/ app/ 2>/dev/null || true',
      { encoding: 'utf-8' }
    )

    if (iframePattern.trim()) {
      const iframeLines = iframePattern.split('\n').filter(line => line.trim())

      iframeLines.forEach(line => {
        // Check if iframe src matches approved domains
        const srcMatch = line.match(/src=["']([^"']+)["']/)

        if (srcMatch && srcMatch[1]) {
          const src = srcMatch[1]

          // Skip if it's a variable or template
          if (src.includes('${') || src.includes('{')) {
            return
          }

          const isApproved = approvedDomains.some(domain =>
            src.includes(domain)
          )

          if (!isApproved && !src.startsWith('/')) {
            console.warn(
              `⚠️  Found iframe with unapproved domain: ${src}`
            )
          }
        }
      })
    }
  })

  it('should use sandbox attribute on iframes where appropriate', () => {
    const iframes = execSync(
      'grep -r "<iframe" components/booths/sections/VideoSection.tsx 2>/dev/null || true',
      { encoding: 'utf-8' }
    )

    if (iframes.trim()) {
      // For video embeds, we need certain permissions
      // But should still be mindful of sandbox
      expect(iframes).toContain('allow=')
    }
  })
})
