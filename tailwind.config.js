/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#ff4548", // Red-Orange Accent
        secondary: "#273d6b", // Red-Orange Accent

        "deep-blue": "#00509D", // Deep Blue Accent
        "golden-yellow": "#FFC107", // Golden Yellow
        "light-orange": "#FF9E57", // Lighter Orange
        "dark-charcoal": "#2E2E2E", // Charcoal for text
        "warm-white": "#FFFFFF", // Background White
        "warm-gray": "#F5F5F5", // Background Gray
        "light-gray": "#D3D3D3", // Dividers/Border Gray
      },
    },
  },
  plugins: [],
};
