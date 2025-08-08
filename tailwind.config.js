/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['"Satoshi"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',      // Indigo 600
        secondary: '#6366F1',    // Indigo 500
        accent: '#22D3EE',       // Cyan 400
        muted: '#E0E7FF',        // Indigo 100
        dark: '#111827',         // Gray 900
        text: '#374151',         // Gray 700
      },
    },
  },
  plugins: [],
};