# Security Testing Report & Strategy
**Career Launch Platform - Security Vulnerability Analysis**

Date: 2025-11-24
Status: CRITICAL - Immediate Action Required

---

## EXECUTIVE SUMMARY

### Root Cause Analysis

Based on comprehensive codebase analysis, the security warnings are likely caused by:

1. **Third-Party CDN Script (HIGH RISK - CONFIRMED)**
   - `filter-mockup.html` loads Tailwind CSS from `https://cdn.tailwindcss.com`
   - `design-comparison.html` contains inline styles only (low risk)
   - Both files are static mockups in project root (NOT served by Next.js app)
   - **CRITICAL**: These files may be accidentally deployed to production

2. **Dependency Vulnerabilities (CONFIRMED)**
   - 33 total vulnerabilities: 22 moderate, 11 high
   - Key issues in: `glob`, `js-yaml`, `eslint`, `jest`, `tailwindcss`
   - Most are in dev dependencies but could be exploited if deployed

3. **Missing Security Headers (LIKELY)**
   - No Content Security Policy (CSP) configured
   - No security headers in Next.js config
   - Allows execution of any external scripts

4. **Unvalidated External Content (CONFIRMED)**
   - Booth VideoSection accepts YouTube, Vimeo, Google Drive, Instagram embeds
   - URLs converted to iframe embeds without strict validation
   - Instagram embed URLs could be manipulated

5. **Public PDF Resources (FLAGGED)**
   - Multiple PDFs in `/public/resources/` with military/government content
   - May be flagged by security software as suspicious downloads
   - No MIME type validation or integrity checks

### False Positive Triggers Identified

1. **Design Mockup Files**: `filter-mockup.html` and `design-comparison.html` in project root
2. **PDF Resources**: Military brochures flagged by pattern matching
3. **CDN Script**: Tailwind CSS CDN in mockup file

---

## IMMEDIATE ACTION ITEMS

### 1. Remove Problematic Files from Deployment

**CRITICAL: Execute immediately before next deployment**

```bash
# Move mockup files out of deployment directory
mkdir -p design-mockups
mv filter-mockup.html design-mockups/
mv design-comparison.html design-mockups/

# Add to .gitignore and .vercelignore
echo "design-mockups/" >> .gitignore
echo "*.html" >> .vercelignore  # Prevent HTML files from deploying

# Remove from version control if already committed
git rm --cached filter-mockup.html design-comparison.html
```

### 2. Verify No Malicious Code

Run these checks immediately:

```bash
# 1. Check for suspicious scripts
grep -r "dangerouslySetInnerHTML" app/ components/

# 2. Check for eval or Function constructor
grep -r "eval\|new Function" app/ components/ lib/

# 3. Check for base64 encoded content (obfuscation)
grep -r "atob\|btoa\|eval.*base64" app/ components/

# 4. Scan all external URLs
grep -r "http://" app/ components/ data/

# 5. Check for unauthorized script tags
grep -r "&lt;script" app/ components/
```

### 3. Update Dependencies

```bash
# Update all dependencies to patch vulnerabilities
npm audit fix

# If auto-fix fails, update manually
npm update eslint glob js-yaml

# Re-run audit
npm audit --json > security-audit.json
```

### 4. Scan PDFs

```bash
# Install ClamAV (macOS)
brew install clamav
freshclam  # Update virus definitions

# Scan all PDFs
clamscan -r public/resources/

# Check PDF metadata
exiftool public/resources/*.pdf
```

---

## MANUAL SECURITY TESTING CHECKLIST

### Phase 1: Immediate Verification (15 minutes)

- [ ] **Verify deployed files**
  - Inspect production build output
  - Confirm no `.html` mockup files in build
  - Check `public/` folder contents

- [ ] **Test external script blocking**
  - Open browser DevTools → Network tab
  - Load homepage and all pages
  - Verify NO requests to `cdn.tailwindcss.com`
  - Verify NO requests to unknown domains

- [ ] **Check security headers**
  - Use https://securityheaders.com
  - Test staging URL
  - Verify CSP, X-Frame-Options, etc.

- [ ] **Scan with antivirus**
  - Visit site with Malwarebytes enabled
  - Download each PDF resource individually
  - Verify no warnings triggered

### Phase 2: Cross-Browser Testing (30 minutes)

Test in each browser with security extensions:

- [ ] **Chrome + Malwarebytes**
  - Homepage
  - Sessions page
  - Session detail page
  - Booths page
  - Booth detail page with video

- [ ] **Edge + Windows Defender**
  - Repeat all pages
  - Test PDF downloads

- [ ] **Firefox + Enhanced Tracking Protection (Strict)**
  - Repeat all pages
  - Verify no tracking warnings

- [ ] **Safari + Intelligent Tracking Prevention**
  - Repeat all pages
  - Check cookie functionality

### Phase 3: Network Analysis (20 minutes)

- [ ] **Capture network traffic**
  - Use Charles Proxy or Wireshark
  - Load homepage
  - Verify all requests to expected domains only:
    - `*.vercel.app` or production domain
    - `*.vimeo.com` (video embeds only)
    - `*.youtube.com` (video embeds only)
    - `i.vimeocdn.com` (thumbnails)
    - `*.supabase.co` (API calls)

- [ ] **Check for suspicious requests**
  - No requests to unknown CDNs
  - No base64-encoded URLs
  - No requests to IP addresses
  - No WebSocket connections to unknown hosts

### Phase 4: Content Validation (15 minutes)

- [ ] **Inspect HTML source**
  - View page source on homepage
  - Verify no inline scripts except Next.js
  - No external script tags
  - No iframes except for videos

- [ ] **Check video embeds**
  - Load booth with YouTube video
  - Load booth with Vimeo video
  - Verify iframe src matches expected pattern
  - Check iframe sandbox attributes

- [ ] **Test PDF downloads**
  - Download each PDF
  - Verify correct MIME type (`application/pdf`)
  - Scan with VirusTotal: https://www.virustotal.com
  - Check Content-Disposition header

---

## AUTOMATED SECURITY TEST SUITE

### Test Framework Setup

Create `/tests/security/` directory with comprehensive security tests:

#### 1. CSP Header Tests

```typescript
// tests/security/csp.test.ts
import { NextRequest } from 'next/server'

describe('Content Security Policy', () => {
  it('should have strict CSP headers', async () => {
    const response = await fetch('http://localhost:3000')
    const csp = response.headers.get('content-security-policy')

    expect(csp).toContain("default-src 'self'")
    expect(csp).toContain("script-src 'self' 'unsafe-inline' 'unsafe-eval'")
    expect(csp).toContain("style-src 'self' 'unsafe-inline' https://fonts.googleapis.com")
    expect(csp).toContain("img-src 'self' data: https://i.vimeocdn.com")
    expect(csp).toContain("frame-src https://player.vimeo.com https://www.youtube.com")
    expect(csp).not.toContain('cdn.tailwindcss.com')
  })

  it('should block unauthorized iframe embedding', async () => {
    const response = await fetch('http://localhost:3000')
    const xFrameOptions = response.headers.get('x-frame-options')

    expect(xFrameOptions).toBe('DENY')
  })

  it('should prevent MIME type sniffing', async () => {
    const response = await fetch('http://localhost:3000')
    const noSniff = response.headers.get('x-content-type-options')

    expect(noSniff).toBe('nosniff')
  })
})
```

#### 2. Dependency Vulnerability Scanner

```typescript
// tests/security/dependencies.test.ts
import { execSync } from 'child_process'

describe('Dependency Security', () => {
  it('should have no high or critical vulnerabilities', () => {
    const audit = JSON.parse(
      execSync('npm audit --json').toString()
    )

    const criticalCount = audit.metadata.vulnerabilities.critical || 0
    const highCount = audit.metadata.vulnerabilities.high || 0

    expect(criticalCount).toBe(0)
    expect(highCount).toBe(0)
  })

  it('should not use vulnerable packages in production', () => {
    const prodDeps = require('../../package.json').dependencies
    const vulnerablePackages = ['lodash', 'moment', 'request']

    vulnerablePackages.forEach(pkg => {
      expect(prodDeps[pkg]).toBeUndefined()
    })
  })
})
```

#### 3. External Script Detection

```typescript
// tests/security/external-scripts.test.ts
import { render } from '@testing-library/react'
import HomePage from '@/app/page'

describe('External Script Detection', () => {
  it('should not load external CDN scripts', () => {
    const { container } = render(<HomePage />)
    const scripts = container.querySelectorAll('script')

    scripts.forEach(script => {
      const src = script.getAttribute('src')
      if (src) {
        expect(src).not.toContain('cdn.tailwindcss.com')
        expect(src).not.toContain('unpkg.com')
        expect(src).not.toContain('jsdelivr.net')
      }
    })
  })

  it('should not have dangerouslySetInnerHTML', () => {
    const allFiles = execSync(
      'grep -r "dangerouslySetInnerHTML" app/ components/ || true'
    ).toString()

    expect(allFiles.trim()).toBe('')
  })
})
```

#### 4. Video Embed Validation

```typescript
// tests/security/video-embeds.test.ts
import { render } from '@testing-library/react'
import VideoSection from '@/components/booths/sections/VideoSection'

describe('Video Embed Security', () => {
  const testVideos = [
    {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      expectedPattern: /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+$/
    },
    {
      type: 'vimeo',
      url: 'https://vimeo.com/123456789',
      expectedPattern: /^https:\/\/player\.vimeo\.com\/video\/\d+/
    }
  ]

  testVideos.forEach(({ type, url, expectedPattern }) => {
    it(`should sanitize ${type} URLs`, () => {
      const { container } = render(
        <VideoSection video={{ type, url, title: 'Test' }} />
      )

      const iframe = container.querySelector('iframe')
      expect(iframe).toBeTruthy()

      const src = iframe?.getAttribute('src')
      expect(src).toMatch(expectedPattern)
    })
  })

  it('should reject malicious URLs', () => {
    const maliciousUrls = [
      'javascript:alert(1)',
      'data:text/html,<script>alert(1)</script>',
      'http://evil.com/video.mp4',
      'file:///etc/passwd'
    ]

    maliciousUrls.forEach(url => {
      const { container } = render(
        <VideoSection video={{ type: 'custom', url, title: 'Test' }} />
      )

      const iframe = container.querySelector('iframe')
      const src = iframe?.getAttribute('src')

      expect(src).not.toContain('javascript:')
      expect(src).not.toContain('data:')
      expect(src).not.toContain('file:')
    })
  })

  it('should include sandbox attributes', () => {
    const { container } = render(
      <VideoSection video={{
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=test',
        title: 'Test'
      }} />
    )

    const iframe = container.querySelector('iframe')
    const allow = iframe?.getAttribute('allow')

    expect(allow).toContain('accelerometer')
    expect(allow).toContain('encrypted-media')
    expect(iframe?.hasAttribute('allowFullScreen')).toBe(true)
  })
})
```

#### 5. File Upload/Download Security

```typescript
// tests/security/file-downloads.test.ts
describe('PDF Resource Security', () => {
  const pdfResources = [
    '/resources/oswca-trading-cards.pdf',
    '/resources/be-there-poster.pdf'
  ]

  pdfResources.forEach(path => {
    it(`should serve ${path} with correct headers`, async () => {
      const response = await fetch(`http://localhost:3000${path}`)

      expect(response.headers.get('content-type')).toBe('application/pdf')
      expect(response.headers.get('x-content-type-options')).toBe('nosniff')
      expect(response.headers.get('content-disposition')).toContain('inline')
    })

    it(`should not auto-download ${path}`, async () => {
      const response = await fetch(`http://localhost:3000${path}`)
      const contentDisposition = response.headers.get('content-disposition')

      expect(contentDisposition).not.toContain('attachment')
      expect(contentDisposition).toContain('inline')
    })
  })
})
```

#### 6. XSS Protection Tests

```typescript
// tests/security/xss.test.ts
import { render } from '@testing-library/react'
import SessionTableRow from '@/components/sessions/SessionTableRow'

describe('XSS Protection', () => {
  const xssPayloads = [
    '<script>alert("XSS")</script>',
    '<img src=x onerror=alert("XSS")>',
    'javascript:alert("XSS")',
    '"><script>alert("XSS")</script>',
    '\'; DROP TABLE sessions; --'
  ]

  xssPayloads.forEach(payload => {
    it(`should escape XSS payload: ${payload.substring(0, 30)}`, () => {
      const session = {
        id: 1,
        title: payload,
        description: payload,
        presenter: payload,
        industry: payload
      }

      const { container } = render(<SessionTableRow session={session} />)
      const html = container.innerHTML

      expect(html).not.toContain('<script>')
      expect(html).not.toContain('onerror=')
      expect(html).not.toContain('javascript:')
    })
  })
})
```

---

## AUTOMATED SECURITY SCANNING TOOLS

### 1. OWASP ZAP Integration

```bash
# Install OWASP ZAP
brew install --cask owasp-zap

# Run automated baseline scan
docker run -t owasp/zap2docker-stable zap-baseline.py \
  -t https://staging.careerlaunch.myblueprint.ca \
  -r zap-report.html
```

### 2. Snyk Vulnerability Scanner

```bash
# Install Snyk CLI
npm install -g snyk

# Authenticate
snyk auth

# Scan for vulnerabilities
snyk test --severity-threshold=high

# Monitor project
snyk monitor
```

### 3. npm audit

```bash
# Generate detailed audit report
npm audit --json > security-audit-$(date +%Y%m%d).json

# Fix automatically
npm audit fix --force

# View production-only vulnerabilities
npm audit --production
```

### 4. Lighthouse Security Audit

```bash
# Install Lighthouse CLI
npm install -g @lhci/cli

# Run security audit
lhci autorun --url=https://staging.careerlaunch.myblueprint.ca
```

### 5. Retire.js (JavaScript Library Scanner)

```bash
# Install retire.js
npm install -g retire

# Scan for vulnerable JS libraries
retire --path public/ --outputformat json
```

---

## CI/CD SECURITY INTEGRATION

### GitHub Actions Workflow

Create `.github/workflows/security.yml`:

```yaml
name: Security Audit

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
  schedule:
    - cron: '0 0 * * 1'  # Weekly on Mondays

jobs:
  dependency-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run npm audit
        run: npm audit --audit-level=high
        continue-on-error: true

      - name: Generate audit report
        run: npm audit --json > audit-report.json

      - name: Upload audit report
        uses: actions/upload-artifact@v4
        with:
          name: npm-audit-report
          path: audit-report.json

  snyk-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run Snyk to check for vulnerabilities
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          args: --severity-threshold=high

  csp-validation:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

      - name: Start server
        run: npm start &
        env:
          PORT: 3000

      - name: Wait for server
        run: sleep 10

      - name: Test CSP headers
        run: |
          curl -I http://localhost:3000 | grep -i "content-security-policy"

      - name: Validate no external CDN scripts
        run: |
          ! grep -r "cdn.tailwindcss.com" .next/

  malware-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: ClamAV Scan
        uses: djdefi/clamav-action@v1
        with:
          scan-directory: ./public

      - name: Scan for suspicious patterns
        run: |
          # Check for obfuscated code
          ! grep -r "eval.*atob" app/ components/

          # Check for data URIs in scripts
          ! grep -r "data:text/javascript" app/ components/

          # Check for suspicious iframes
          ! grep -r "sandbox.*allow-scripts.*allow-same-origin" app/ components/

  security-headers:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Deploy to staging
        run: vercel deploy --token=${{ secrets.VERCEL_TOKEN }} --scope=myblueprint

      - name: Test security headers
        run: |
          curl -I https://staging-careerlaunch.vercel.app | tee headers.txt

          grep -q "x-frame-options: DENY" headers.txt
          grep -q "x-content-type-options: nosniff" headers.txt
          grep -q "content-security-policy:" headers.txt
```

### Pre-commit Hook

Create `.husky/pre-commit`:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "Running security checks..."

# Check for hardcoded secrets
if grep -r "NEXT_PUBLIC_" .env.local 2>/dev/null | grep -v "EXAMPLE"; then
  echo "❌ Potential secrets in .env.local"
  exit 1
fi

# Check for dangerous patterns
if grep -r "dangerouslySetInnerHTML" app/ components/ 2>/dev/null; then
  echo "❌ Found dangerouslySetInnerHTML usage"
  exit 1
fi

# Run security linter
npm run lint:security || exit 1

echo "✅ Security checks passed"
```

---

## PRODUCTION DEPLOYMENT CHECKLIST

Before every production deployment:

- [ ] **Build Verification**
  - [ ] Run `npm run build`
  - [ ] Inspect `.next/` output
  - [ ] Verify no `.html` files in build
  - [ ] Check bundle size for anomalies

- [ ] **Dependency Check**
  - [ ] Run `npm audit`
  - [ ] Update vulnerable packages
  - [ ] Re-run tests after updates

- [ ] **Security Headers**
  - [ ] Verify CSP configured
  - [ ] Test with securityheaders.com
  - [ ] Check HSTS enabled

- [ ] **Content Validation**
  - [ ] Scan all PDFs with antivirus
  - [ ] Verify video embed URLs
  - [ ] Test all external links

- [ ] **Monitoring Setup**
  - [ ] Enable Vercel Analytics
  - [ ] Set up error tracking (Sentry)
  - [ ] Configure uptime monitoring

---

## ONGOING SECURITY MONITORING

### Weekly Tasks
- Review npm audit reports
- Check Snyk dashboard
- Review Vercel logs for anomalies
- Test one random page with multiple browsers

### Monthly Tasks
- Full OWASP ZAP scan
- Review and update CSP
- Audit all dependencies
- Test with latest browser versions

### Quarterly Tasks
- Professional penetration testing
- Third-party security audit
- Review and update security policies
- Security training for team

---

## INCIDENT RESPONSE PLAN

If security warning appears again:

1. **Immediate (< 1 hour)**
   - Take site offline or add maintenance page
   - Notify stakeholders
   - Capture all logs and reports

2. **Investigation (< 4 hours)**
   - Identify affected pages/files
   - Review recent deployments
   - Check for unauthorized changes
   - Scan with multiple antivirus tools

3. **Remediation (< 24 hours)**
   - Remove malicious code if found
   - Update all dependencies
   - Deploy clean version
   - Verify with multiple tools

4. **Communication (< 48 hours)**
   - Notify government partner
   - Provide detailed incident report
   - Share remediation steps
   - Schedule follow-up review

---

## RECOMMENDED SECURITY TOOLS

### Development
- **ESLint Security Plugin**: `eslint-plugin-security`
- **Snyk VS Code Extension**: Real-time vulnerability detection
- **Git Secrets**: Prevent committing secrets

### Testing
- **OWASP ZAP**: Automated penetration testing
- **Burp Suite Community**: Manual security testing
- **VirusTotal**: File/URL scanning

### Monitoring
- **Snyk**: Continuous dependency monitoring
- **Sentry**: Error tracking with security context
- **Vercel Analytics**: Traffic anomaly detection

### CI/CD
- **GitHub Security Scanning**: Automated code analysis
- **Dependabot**: Automatic dependency updates
- **Trivy**: Container security scanning

---

## CONTACT & ESCALATION

**Security Lead**: Damian Matheson (damian.matheson@myblueprint.ca)
**Development Team**: platform-team@myblueprint.ca
**Emergency Contact**: security@myblueprint.ca

**Escalation Path**:
1. Development Team (0-1 hour)
2. Security Lead (1-4 hours)
3. CTO (4-24 hours)
4. Government Partner (24-48 hours)

---

## NEXT STEPS

1. **Immediate**: Remove mockup HTML files from deployment
2. **Today**: Run all manual tests in checklist
3. **This Week**: Implement automated security test suite
4. **This Month**: Set up CI/CD security pipeline
5. **Ongoing**: Weekly security monitoring
