/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        surface: {
          DEFAULT: 'var(--surface)',
          hover: '#1e293b',
          subtle: '#131c31',
          border: 'var(--surface-border)',
        },
        terminal: {
          green: '#10B981',
          amber: '#F59E0B',
          red: '#EF4444',
          cyan: '#06B6D4',
          purple: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
