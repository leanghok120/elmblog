import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        gruvbox: {
          DEFAULT: "#ebdbb2", // Gruvbox light foreground
          muted: "#a89984", // Gruvbox muted foreground
          contrast: "#fbf1c7", // Gruvbox high contrast light
          blue: "#458588", // Gruvbox blue
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
      typography: (theme) => ({
        gruvbox: {
          css: {
            color: theme("textColor.gruvbox.DEFAULT"),
            a: {
              color: theme("textColor.gruvbox.blue"),
              "&:hover": {
                color: theme("textColor.gruvbox.muted"),
              },
            },
            h1: {
              color: theme("textColor.gruvbox.contrast"),
              marginBottom: "0.5rem",
            },
            h2: {
              color: theme("textColor.gruvbox.contrast"),
              marginBottom: "0.5rem",
            },
            h3: {
              color: theme("textColor.gruvbox.contrast"),
              marginBottom: "0.5rem",
            },
            p: { marginTop: "0.25rem", marginBottom: "0.25rem" },
            blockquote: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              color: theme("textColor.gruvbox.muted"),
            },
            ul: { marginTop: "0.25rem", marginBottom: "0.25rem" },
            ol: { marginTop: "0.25rem", marginBottom: "0.25rem" },
            // Custom styling for strong and b to ensure they are just bold without color change
            strong: {
              fontWeight: "bold",
              color: "inherit", // Ensures no color inheritance
            },
            b: {
              fontWeight: "bold",
              color: "inherit", // Ensures no color inheritance
            },
          },
        },
      }),
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
  plugins: [typography, daisyui],
} satisfies Config;
