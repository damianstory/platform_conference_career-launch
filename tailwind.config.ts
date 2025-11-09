import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        'primary-blue': '#0092FF',
        'brand-navy': '#22224C',
        'background-light': '#F9FAFB',
        'secondary-blue-pale': '#E6F4FF',
        'light-blue': '#C6E7FF',
        'off-white': '#F6F6FF',
        // Neutral palette (matches design-tokens.css)
        'neutral-1': '#E5E9F1',
        'neutral-2': '#D9DFEA',
        'neutral-3': '#AAB7CB',
        'neutral-4': '#65738B',
        'neutral-5': '#485163',
        'neutral-6': '#252A33',
        // Block colors (keep existing)
        'block1': '#0066CC',
        'block2': '#0092FF',
        'block3': '#33AAFF',
        'block4': '#66C2FF',
        // Legacy aliases (for compatibility)
        navy: '#22224C',
        blue: '#0092FF',
      },
      fontSize: {
        'header-1': ['4rem', { lineHeight: '5rem' }],
        'header-2': ['2.5rem', { lineHeight: '3.5rem' }],
        'header-3': ['2rem', { lineHeight: '3rem' }],
        'header-4': ['1.5rem', { lineHeight: '2.25rem' }],
        'subheader': ['1.375rem', { lineHeight: '2rem' }],
        'body-1': ['1.25rem', { lineHeight: '2rem' }],
        'body-2': ['1rem', { lineHeight: '1.75rem' }],
        'compact': ['0.875rem', { lineHeight: '1.25rem' }],
        'subtitle-1': ['0.75rem', { lineHeight: '1.25rem' }],
        'subtitle-2': ['0.625rem', { lineHeight: '1rem' }],
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(34, 34, 76, 0.05)',
        'md': '0 4px 6px rgba(34, 34, 76, 0.1)',
        'lg': '0 10px 15px rgba(34, 34, 76, 0.15)',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'Open Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'resource-pdf': 'linear-gradient(135deg, #C6E7FF 0%, #E6F4FF 100%)',
        'resource-link': 'linear-gradient(135deg, rgba(0, 146, 255, 0.08) 0%, rgba(198, 231, 255, 0.25) 100%)',
        'resource-video': 'linear-gradient(135deg, #F6F6FF 0%, #C6E7FF 100%)',
        'resource-document': 'linear-gradient(135deg, #E6F4FF 0%, #F6F6FF 100%)',
      },
    },
  },
  plugins: [],
}

export default config
