/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'bg-blob-a': 'bgBlobFloat 32s ease-in-out infinite',
        'bg-blob-b': 'bgBlobFloat 40s ease-in-out -6s infinite',
        'bg-blob-c': 'bgBlobFloat 36s ease-in-out -12s infinite',
        'bg-blob-d': 'bgBlobFloat 44s ease-in-out -3s infinite',
        'bg-light-a': 'bgLightDrift 48s ease-in-out infinite',
        'bg-light-b': 'bgLightDrift 56s ease-in-out -10s infinite',
        'bg-grid-pulse': 'bgGridPulse 60s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bgBlobFloat: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(1.5%, -2%) scale(1.02)' },
          '66%': { transform: 'translate(-1%, 1.5%) scale(0.99)' },
        },
        bgLightDrift: {
          '0%, 100%': { opacity: '0.35', transform: 'translate(0, 0)' },
          '50%': { opacity: '0.5', transform: 'translate(-1.2%, 0.8%)' },
        },
        bgGridPulse: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.62' },
        },
      },
    },
  },
  plugins: [],
};
