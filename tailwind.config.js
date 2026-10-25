/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        accent: {
          emerald: '#10b981',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
        },
        dark: {
          bg: '#0a0a0a',
          surface: '#111111',
          elevated: '#1a1a1a',
          border: '#262626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.15) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 0.15) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 0.15) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 0.15) 0px, transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}

