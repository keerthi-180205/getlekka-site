import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003423',
          container: '#174b37',
          fixed: '#b9eed3',
          'fixed-dim': '#9dd2b7',
        },
        'on-primary': '#ffffff',
        'on-primary-container': '#86baa0',
        'brand-green': '#1F7A4D',
        'brand-green-dark': '#165C3A',
        'brand-amber': '#F2A93B',
        gold: '#C99A45',
        sage: '#E8EEE8',
        secondary: {
          DEFAULT: '#3d6655',
          container: '#bfedd6',
          'fixed-dim': '#a4d0bb',
        },
        'on-secondary': '#ffffff',
        'on-secondary-container': '#436d5b',
        surface: {
          DEFAULT: '#fbf9f2',
          dim: '#dcdad3',
          bright: '#fbf9f2',
          'container-lowest': '#ffffff',
          'container-low': '#f5f4ed',
          container: '#f0eee7',
          'container-high': '#eae8e1',
          'container-highest': '#e4e2dc',
          variant: '#e4e2dc',
        },
        'on-surface': '#1b1c18',
        'on-surface-variant': '#404944',
        outline: '#717973',
        'outline-variant': '#c0c9c2',
        tertiary: {
          DEFAULT: '#3d2800',
          container: '#593d00',
          fixed: '#ffdeaa',
          'fixed-dim': '#f1be65',
        },
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#d7a750',
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
        },
        'on-error': '#ffffff',
        'on-error-container': '#93000a',
        ink: '#1D2320',
        muted: '#5B625E',
        cream: '#FBF7EF',
        line: '#E6E0D4',
        'whatsapp-bubble-out': '#D9FDD3',
        wa: {
          bubble: '#D9FDD3',
          border: '#BEE3B8',
          wall: '#EFE7DB',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-kannada)', 'system-ui', 'sans-serif'],
        display: [
          'var(--font-display)',
          'var(--font-noto-kannada)',
          'var(--font-inter)',
          'system-ui',
          'sans-serif',
        ],
        kannada: ['var(--font-noto-kannada)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        resting: '0 2px 8px rgba(16, 59, 44, 0.04), 0 1px 2px rgba(16, 59, 44, 0.02)',
        float: '0 8px 24px rgba(16, 59, 44, 0.08), 0 2px 6px rgba(16, 59, 44, 0.04)',
        lift: '0 24px 48px -16px rgba(16, 59, 44, 0.22), 0 6px 16px -6px rgba(16, 59, 44, 0.1)',
        phone: '0 48px 90px -24px rgba(0, 52, 35, 0.45), 0 16px 32px -12px rgba(0, 52, 35, 0.25)',
        btn: '0 10px 24px -8px rgba(0, 52, 35, 0.55)',
      },
      spacing: {
        margin: '1rem',
        'margin-desktop': '2.5rem',
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2rem',
        'space-2xl': '3rem',
      },
      maxWidth: {
        content: '1120px',
      },
      keyframes: {
        'fade-up': {
          '0%': { transform: 'translateY(16px)' },
          '100%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(31, 122, 77, 0.45)' },
          '100%': { boxShadow: '0 0 0 12px rgba(31, 122, 77, 0)' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(0.45)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-ring': 'pulse-ring 1.8s ease-out infinite',
        wave: 'wave 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
