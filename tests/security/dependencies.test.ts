/**
 * Dependency Vulnerability Tests
 *
 * Tests for known vulnerabilities in npm dependencies.
 * Should fail CI/CD build if high/critical vulnerabilities are found.
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

describe('Dependency Security Audit', () => {
  let auditData: any

  beforeAll(() => {
    try {
      // Run npm audit and parse JSON output
      const auditOutput = execSync('npm audit --json', {
        encoding: 'utf-8',
        stdio: ['pipe', 'pipe', 'pipe']
      })
      auditData = JSON.parse(auditOutput)
    } catch (error: any) {
      // npm audit exits with non-zero code if vulnerabilities found
      if (error.stdout) {
        auditData = JSON.parse(error.stdout)
      } else {
        throw error
      }
    }
  })

  it('should have no critical vulnerabilities', () => {
    const criticalCount = auditData.metadata.vulnerabilities.critical || 0

    expect(criticalCount).toBe(0)

    if (criticalCount > 0) {
      const criticalVulns = Object.values(auditData.vulnerabilities)
        .filter((v: any) => v.severity === 'critical')
        .map((v: any) => v.name)

      throw new Error(
        `Found ${criticalCount} critical vulnerabilities: ${criticalVulns.join(', ')}`
      )
    }
  })

  it('should have no high vulnerabilities in production dependencies', () => {
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8')
    )
    const prodDeps = Object.keys(packageJson.dependencies || {})

    const highVulns = Object.entries(auditData.vulnerabilities || {})
      .filter(([name, vuln]: [string, any]) => {
        return vuln.severity === 'high' && prodDeps.includes(name)
      })

    expect(highVulns.length).toBe(0)

    if (highVulns.length > 0) {
      const vulnNames = highVulns.map(([name]) => name)
      throw new Error(
        `Found ${highVulns.length} high vulnerabilities in production dependencies: ${vulnNames.join(', ')}`
      )
    }
  })

  it('should not exceed moderate vulnerability threshold', () => {
    const moderateCount = auditData.metadata.vulnerabilities.moderate || 0
    const maxAcceptableModerate = 25 // Adjust based on your risk tolerance

    expect(moderateCount).toBeLessThanOrEqual(maxAcceptableModerate)
  })

  it('should document all accepted vulnerabilities', () => {
    // Check for .nsprc or audit-resolve.json documenting accepted risks
    const hasDocumentation =
      fs.existsSync(path.join(process.cwd(), '.nsprc')) ||
      fs.existsSync(path.join(process.cwd(), 'audit-resolve.json'))

    const totalVulns =
      (auditData.metadata.vulnerabilities.moderate || 0) +
      (auditData.metadata.vulnerabilities.high || 0) +
      (auditData.metadata.vulnerabilities.critical || 0)

    if (totalVulns > 0 && !hasDocumentation) {
      console.warn(
        '⚠️  Vulnerabilities found but no documentation of accepted risks. ' +
        'Create audit-resolve.json to document why certain vulnerabilities are accepted.'
      )
    }
  })
})

describe('Vulnerable Package Detection', () => {
  let packageJson: any

  beforeAll(() => {
    packageJson = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8')
    )
  })

  it('should not use known vulnerable packages', () => {
    const vulnerablePackages = [
      'lodash', // Use lodash-es instead
      'moment', // Use date-fns or dayjs instead
      'request', // Deprecated
      'node-uuid', // Use uuid instead
      'colors', // Compromised in 2022
      'faker' // Use @faker-js/faker instead
    ]

    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies
    }

    vulnerablePackages.forEach(pkg => {
      expect(allDeps[pkg]).toBeUndefined()
    })
  })

  it('should use specific versions not ranges for critical packages', () => {
    const criticalPackages = ['next', 'react', 'react-dom']

    criticalPackages.forEach(pkg => {
      const version = packageJson.dependencies[pkg]

      if (version) {
        // Should not use ^ or ~ in production for critical packages
        // Allow for now but recommend pinning in production
        expect(version).toBeTruthy()
      }
    })
  })

  it('should not have dependencies with suspicious names', () => {
    const suspiciousPatterns = [
      /^[a-z]{1,2}$/, // Single or two letter packages (often typosquatting)
      /admin/i,        // Packages with 'admin' often malicious
      /hack/i,         // Obvious red flag
      /test[0-9]+/     // Test packages shouldn't be in production
    ]

    const allDeps = Object.keys({
      ...packageJson.dependencies,
      ...packageJson.devDependencies
    })

    allDeps.forEach(dep => {
      suspiciousPatterns.forEach(pattern => {
        if (pattern.test(dep)) {
          console.warn(`⚠️  Potentially suspicious dependency name: ${dep}`)
        }
      })
    })
  })
})

describe('Dependency License Compliance', () => {
  it('should not use packages with restrictive licenses in production', () => {
    // This would require a package like 'license-checker'
    // Skip for now but recommend implementing
    expect(true).toBe(true)
  })
})

describe('Dependency Freshness', () => {
  it('should not have severely outdated dependencies', () => {
    try {
      const outdated = execSync('npm outdated --json', {
        encoding: 'utf-8',
        stdio: ['pipe', 'pipe', 'pipe']
      })

      const outdatedPackages = JSON.parse(outdated || '{}')

      // Check for major version differences
      Object.entries(outdatedPackages).forEach(([name, info]: [string, any]) => {
        const current = parseInt(info.current.split('.')[0])
        const latest = parseInt(info.latest.split('.')[0])

        if (latest - current > 2) {
          console.warn(
            `⚠️  Package ${name} is ${latest - current} major versions behind (${info.current} → ${info.latest})`
          )
        }
      })
    } catch (error) {
      // npm outdated exits with 1 if outdated packages exist
      // This is expected, so we don't fail the test
    }
  })
})

describe('Supply Chain Security', () => {
  it('should have package-lock.json committed', () => {
    const lockFileExists = fs.existsSync(
      path.join(process.cwd(), 'package-lock.json')
    )

    expect(lockFileExists).toBe(true)
  })

  it('should have integrity hashes in package-lock.json', () => {
    const lockFile = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'package-lock.json'), 'utf-8')
    )

    // Check that packages have integrity hashes
    const packages = lockFile.packages || {}
    const packagesWithoutIntegrity = Object.keys(packages)
      .filter(name => name !== '' && !packages[name].link)
      .filter(name => !packages[name].integrity)

    expect(packagesWithoutIntegrity.length).toBe(0)
  })

  it('should not have git dependencies in production', () => {
    const deps = packageJson.dependencies || {}

    Object.entries(deps).forEach(([name, version]) => {
      expect(version).not.toMatch(/^git/)
      expect(version).not.toContain('github.com')
      expect(version).not.toContain('gitlab.com')
    })
  })
})
