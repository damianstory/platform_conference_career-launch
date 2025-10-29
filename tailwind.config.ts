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
        navy: '#22224C',
        blue: '#0092FF',
        'light-blue': '#C6E7FF',
        'off-white': '#F6F6FF',
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
    },
  },
  plugins: [],
}

export default config
