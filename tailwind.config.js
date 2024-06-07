/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors : {
        "main": "rgba(var(--color-main) / <alpha-value>)",
        "secondary": "rgba(var(--color-secondary) / <alpha-value>)",
        "hover": "rgba(var(--color-hover) / <alpha-value>)",
        "text-main": "rgba(var(--color-text-main) / <alpha-value>)",
        "text-secondary": "rgba(var(--color-text-secondary) / <alpha-value>)",
        "text-hover": "rgba(var(--color-text-hover) / <alpha-value>)",
        "text-active": "rgba(var(--color-text-active) / <alpha-value>)",
      }
    },
  },
  plugins: [],
}

