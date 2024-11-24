/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gruvbox: {
          bg: "#282828",
          bg2: "#504945",
          fg: "#fbf1c7",
          gray: "#928374",
        },
      },
    },
  },
  plugins: [],
};
