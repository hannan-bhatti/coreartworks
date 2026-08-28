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
        background: "#09090b",
        surface: {
          50: "#18181b",
          100: "#121215",
          200: "#1c1c21",
          300: "#27272e",
          400: "#3f3f46",
          500: "#52525b",
          600: "#71717a",
          700: "#a1a1aa",
          800: "#d4d4d8",
          900: "#f4f4f5",
        },
        monochrome: {
          pureBlack: "#000000",
          deep: "#070709",
          card: "#0f0f12",
          cardBorder: "#23232a",
          silver: "#e4e4e7",
          pureWhite: "#ffffff",
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Syne"', 'sans-serif'],
        serif: ['"Cinzel"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(255, 255, 255, 0.1)',
        'glow-md': '0 0 30px -5px rgba(255, 255, 255, 0.15)',
        'glow-lg': '0 0 50px -10px rgba(255, 255, 255, 0.25)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
