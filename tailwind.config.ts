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
        white:    '#FFFFFF',
        ivory:    '#FAFAF8',
        pearl:    '#F4F3EF',
        midnight: '#0A1628',
        steel: {
          DEFAULT: '#1E3A5F',
          mid:     '#2C5282',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light:   '#E8C98A',
        },
        ink: {
          DEFAULT: '#0A1628',
          muted:   'rgba(10,22,40,0.5)',
          subtle:  'rgba(10,22,40,0.08)',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        luxury:      '0 1px 3px rgba(10,22,40,0.06)',
        'luxury-md': '0 8px 24px rgba(10,22,40,0.10)',
        'luxury-lg': '0 20px 48px rgba(10,22,40,0.14)',
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
