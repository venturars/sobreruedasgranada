const { fontFamily } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      Poppins: ["'Poppins", ...fontFamily.sans],
    },
    screens: {
      "3xs": { min: "320px" },
      "2xs": { min: "380px" },
      xs: { min: "475px" },
      ...defaultTheme.screens,
      "max-xl": { max: "1279px" },
      "max-lg": { max: "1023px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "639px" },
      "max-xs": { max: "474px" },
      "max-2xs": { max: "379px" },
      "max-3xs": { max: "319px" },
    },
  },
  extend: {
    containers: {
      "2xs": "16rem",
    },
  },
  aspectRatio: {
    "1/1": "1 / 1",
    "3/4": "3 / 4",
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
  ],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        remolquesenalquilergranada: {
          primary: "#63abf8",
          "primary-content": "#ffffff",
          secondary: "#a1c2f7",
          "secondary-content": "#000000",
          accent: "#f8e5aa",
          "accent-content": "#000000",
          neutral: "#ffffff",
          "base-100": "#ffffff",
          info: "#ffffff",
          success: "#00ffff",
          warning: "#ffffff",
          error: "#ffffff",
        },
      },
    ],
    darkTheme: false,
  },
};
