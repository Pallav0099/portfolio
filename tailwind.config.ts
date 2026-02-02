import type { Config } from "tailwindcss"

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        emerald: {
          DEFAULT: "#10b981",
          dark: "#059669",
          light: "#34d399",
        },
      },
      fontFamily: {
        mono: ['Courier New', 'Monaco', 'Menlo', 'monospace'],
      },
      borderWidth: {
        '1': '1px',
      },
      keyframes: {
        "pulse-emerald": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.7)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 0 8px rgba(16, 185, 129, 0)",
          },
        },
      },
      animation: {
        "pulse-emerald": "pulse-emerald 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
