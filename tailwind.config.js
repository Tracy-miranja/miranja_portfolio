/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#050816",
      secondary: "#aaa6c3",
      tertiary: "#151030",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
    },
    keyframes: {
      "underline-grow": {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
    },
    animation: {
      "underline-grow": "underline-grow 0.3s ease-in-out forwards",
    },
  },
};
export const plugins = [];
