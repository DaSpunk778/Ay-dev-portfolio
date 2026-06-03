/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#000319',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        spotlight: 'spotlight 2s ease 0.75s 1 forwards',
        scroll: 'scroll var(--animation-duration, 15s) linear infinite',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["winter"],
  },
};