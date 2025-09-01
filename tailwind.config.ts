/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', './assets/**/*.{js,ts,jsx,tsx,mdx,modules,css}'],
  theme: {
    extend: {
      backgroundImage:{
        'powering-the-future': "url('/images/home/powering-the-future.webp')",
        'ready-to-build': "url('/images/home/ready-to-build.webp')",
        'our-focus.webp': "url('/images/about/our-focus.webp.webp')",
        'our-partners': "url('/images/partners/our-partners.webp')",
        'gears': "url('/images/solutions/gears.webp')",
        'technology-provider': "url('/images/usxp/technology-provider.webp')",
        
      },
      colors: {
        black: '#283138',
        background: '#E9EEF1',
        stroke: '#525151',
        error: '#FF0505',
        success: '#00E969',
        primary: {
          50: '#d3f4f8',
          100: '#a8e8f0',
          200: '#E4FDFF',
          300: '#51d1e1',
          400: '#25C6DA',
          500: '#1e9eae',
          600: '#167783',
          700: '#093136',
          800: '#0f4f57',
          900: '#051c1f',
        },
        secondary: {
          50: "#111618",
          100: "#222c30",
          200: "#324348",
          300: "#435960",
          400: "#546F78",
          500: "#435960",
          600: "#324348",
          700: "#222c30",
          800: "#151c1e",
          900: "#111618",
        },
        'on-secondary': '#FFFFFF',
        'on-primary': '#283138',
      },
    },
  },
}
