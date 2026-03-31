import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        card: {
          DEFAULT: '#141414',
          hover: '#1a1a1a',
        },
        border: '#2a2a2a',
        accent: {
          DEFAULT: '#00ff9d',
          secondary: '#00d4aa',
          glow: 'rgba(0, 255, 157, 0.3)',
        },
        muted: {
          DEFAULT: '#a0a0a0',
          foreground: '#6a6a6a',
        },
      },
      fontFamily: {
        sans: ['Geist Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'infinite-scroll': 'infinite-scroll var(--duration) linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 157, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 157, 0.6)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
