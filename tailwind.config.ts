import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Aeonik'],
      },
      colors: {
        primary: {
          50: '#e3e5ed',
          100: '#b9bfd3',
          200: '#8e97b7',
          300: '#636f9c',
          400: '#2A4D81',
          500: '#070E28', // base
          600: '#060c22',
          700: '#050a1b',
          800: '#040715',
          900: '#02040e',
        },
        secondary: {
          50: '#fdffe5',
          100: '#faffb3',
          200: '#f8ff80',
          300: '#f5ff4d',
          400: '#f2ff1a',
          500: '#DCFF01', // Base
          600: '#b2cc01',
          700: '#899901',
          800: '#5f6600',
          900: '#363300',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}
export default config
