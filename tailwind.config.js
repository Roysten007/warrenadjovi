/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#000000',
          900: '#000000',
          800: '#09090b',
          700: '#111114',
          600: '#18181b',
          500: '#27272a',
          card: '#0d0d10',
          cardBorder: '#1f1f23',
        },
        chartreuse: {
          DEFAULT: '#84cc16',
          light: '#a3e635',
          dark: '#65a30d',
          dim: 'rgba(132, 204, 22, 0.12)',
          border: 'rgba(132, 204, 22, 0.3)',
        },
        neonGreen: {
          DEFAULT: '#84cc16',
          light: '#99f116',
          dark: '#65a30d',
          dim: 'rgba(132, 204, 22, 0.12)',
        },
        textLight: '#FFFFFF',
        textMuted: '#9ca3af',
      },
      fontFamily: {
        display: ['Satoshi', 'system-ui', 'sans-serif'],
        heading: ['Satoshi', 'system-ui', 'sans-serif'],
        satoshi: ['Satoshi', 'system-ui', 'sans-serif'],
        body: ['"Inter Tight"', 'Outfit', 'sans-serif'],
        sans: ['"Inter Tight"', 'Outfit', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        inter: ['"Inter Tight"', 'sans-serif'],
      },
      boxShadow: {
        'glow-cta': '0 0 20px rgba(195, 216, 9, 0.4), 0 0 40px rgba(195, 216, 9, 0.15)',
        'glow-cta-hover': '0 0 30px rgba(195, 216, 9, 0.65), 0 0 60px rgba(195, 216, 9, 0.3)',
        'glow-card': '0 0 25px rgba(195, 216, 9, 0.18)',
        'glow-halo': '0 0 35px rgba(195, 216, 9, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
