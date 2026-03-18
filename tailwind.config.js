/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|text|border|ring|shadow|from|to|via)-(ocean|turquoise|coral|violet)/,
      variants: ['hover', 'group-hover']
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        beige: {
          DEFAULT: '#FCF8F0',
          dark: '#F0EAD6'
        },
        ocean: '#3366CC',
        turquoise: '#1A99B3',
        coral: '#FF664D',
        violet: '#4D3399',
        brand: {
          text: '#1A1A1A',
          gradientStart: '#B86F52',
          gradientEnd: '#E6A172'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'dash': 'dash 20s linear infinite',
        'highlight': 'highlight 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        dash: {
          to: { strokeDashoffset: -1000 }
        },
        highlight: {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(184, 111, 82, 0)' },
          '30%': { transform: 'scale(1.05)', boxShadow: '0 0 40px 10px rgba(184, 111, 82, 0.4)' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(184, 111, 82, 0)' }
        }
      }
    }
  },
  plugins: [],
}
