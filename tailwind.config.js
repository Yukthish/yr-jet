/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Audiowide', 'cursive'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        'neon-blue': '#00f3ff',
        'deep-space': '#0a0b1e',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
