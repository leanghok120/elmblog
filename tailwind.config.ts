import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        gruvbox: {
          DEFAULT: "#ebdbb2", // Gruvbox light foreground
          muted: "#a89984", // Gruvbox muted foreground
          contrast: "#fbf1c7", // Gruvbox high contrast light
        },
      },
      fontFamily: {
        sans: [
          "Jetbrains Mono",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  daisyui: {
    themes: [
      {
        gruvbox: {
          primary: "#fabd2f", // Gruvbox yellow
          secondary: "#d3869b", // Gruvbox bright purple
          accent: "#8ec07c", // Gruvbox bright aqua
          neutral: "#282828", // Gruvbox dark background
          "base-100": "#1d2021", // Gruvbox darkest background
          "base-200": "#3c3836", // Gruvbox medium-dark background
          "base-300": "#504945", // Gruvbox light-dark background
          info: "#83a598", // Gruvbox bright blue
          success: "#b8bb26", // Gruvbox bright green
          warning: "#fe8019", // Gruvbox bright orange
          error: "#fb4934", // Gruvbox bright red
        },
      },
    ],
  },
  plugins: [daisyui],
} satisfies Config;
