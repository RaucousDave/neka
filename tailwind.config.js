/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "Italiana",
      },

      // Tailwind (extend this in your tailwind.config.js if needed)
      colors: {
        purpleDark: "#3b0a59",
        purpleSoft: "#6d28d9",
        purpleGlow: "#a855f7",
        bgNight: "#1a1a2e",
        textGlow: "#c084fc",
      },
    },
  },
  plugins: [],
};
