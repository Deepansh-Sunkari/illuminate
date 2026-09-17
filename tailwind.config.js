/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#04020a',
          900: '#070314',
          850: '#0b061e',
          800: '#120b2e',
          700: '#1b1142',
          600: '#271a5c',
        },
        surface: {
          base: '#070314',
          card: '#0c0721',
          elevated: '#130c33',
          border: 'rgba(168, 85, 247, 0.15)',
          'border-hover': 'rgba(168, 85, 247, 0.4)',
        },
        electric: {
          purple: '#9333ea',
          violet: '#a855f7',
          neon: '#c084fc',
          glow: '#e9d5ff',
        },
        accent: {
          amber: '#f59e0b',
          emerald: '#10b981',
          rose: '#f43f5e',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 16px -2px rgba(168, 85, 247, 0.25)',
        'glow-md': '0 0 28px -4px rgba(168, 85, 247, 0.35)',
        'glow-lg': '0 0 50px -8px rgba(168, 85, 247, 0.45)',
        'glow-amber': '0 0 25px -4px rgba(245, 158, 11, 0.35)',
        'glow-emerald': '0 0 25px -4px rgba(16, 185, 129, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
      },
      keyframes: {
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
