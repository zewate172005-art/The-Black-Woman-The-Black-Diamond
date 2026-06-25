/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#f5c518',
          500: '#D4AF37',
          600: '#C8962E',
          700: '#a37520',
          800: '#7c5c1a',
          900: '#5a4215',
        },
        'black-diamond': {
          DEFAULT: '#1a1a1a',
          50: '#2d2d2d',
          100: '#252525',
          200: '#1f1f1f',
          300: '#1a1a1a',
          400: '#151515',
          500: '#0f0f0f',
          600: '#0a0a0a',
        },
        onyx: {
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#c8c8c8',
          300: '#a0a0a0',
          400: '#6b6b6b',
          500: '#3d3d3d',
          600: '#262626',
          700: '#1a1a1a',
          800: '#111111',
          900: '#0a0a0a',
          950: '#050505',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};
