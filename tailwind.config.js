/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        60: "60",
        999: "999",
      },
      colors: {
        "primary-orange": "#e00909", // Red-Orange Accent
        secondary: "#273d6b", // Blue Secondary Color
        "deep-blue": "#00509D", // Deep Blue Accent
        "golden-yellow": "#FFC107", // Golden Yellow
        "light-orange": "#FF9E57", // Lighter Orange
        "dark-charcoal": "#2E2E2E", // Charcoal for text
        "warm-white": "#FFFFFF", // Background White
        "warm-gray": "#F5F5F5", // Background Gray
        "light-gray": "#D3D3D3", // Dividers/Border Gray
      },
      backgroundborder: {
        oceania: "linear-gradient(to right, #EE1C24, #F65E13, #FFAA00)",
      },

      backgroundImage: {
        elegantDark: "linear-gradient(135deg, #232526, #414345)", // Elegant Dark Gradient
        oceanic: "linear-gradient(to right, #EE1C24, #F65E13, #FFAA00)", // Oceanic Gradient
      },
    },
  },
  plugins: [],
};
