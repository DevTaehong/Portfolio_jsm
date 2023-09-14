import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['var(--font-righteous)'],
        poppins: ['var(--font-poppins)'],
      },
      dropShadow: {
        'skill': '0px 7px 10px rgba(0, 0, 0, 0.10)',
      },
      boxShadow: {
        'darkServiceCard': '0px 1px 20px 0px #1F2E48',
        'darkServiceCardHover': '32px 32px 71px 0px rgba(2, 82, 205, 0.28)',
        'jobCardHover': '-25px 47px 66px 0px rgba(0, 0, 0, 0.08)'
      }
    },
    colors: {
      jobit: "#0BAB7C",
      hipnode: "#FF6934",
      morrentLight: "#5CAFFC",
      morrentDark: "#416CEA",
      filmpire: "#DB202C",
      primaryLight: "#0252CD",
      primaryDark: "#428DFF",
      accentSecondary: "#FFBE62",
      white900: "#FFFFFF",
      white800: "#F3F8FF",
      white500: "#6F74A7",
      black200: "#151E2C",
      black300: "#192333",
      black400: "#778295",
      conicGradient: "conic-gradient(from 180deg at 50% 75.56%, #0252CD 0deg, rgba(2, 82, 205, 0.33) 360deg)"
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
