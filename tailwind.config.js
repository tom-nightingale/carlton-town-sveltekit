export default {
  content: ["./index.html", "./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "2000px",
    },
    fontFamily: {
      sans: ["Inter", "arial", "sans-serif"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        accent: {
          light: "#104a83",
          DEFAULT: "#00305c",
          dark: "#002240",
        },
        background: {
          DEFAULT: "#f9f7f3",
        },
        "on-background": {
          DEFAULT: "#212529",
        },
        surface: {
          DEFAULT: "#ffffff",
        },
        "surface-variant": {
          DEFAULT: "#f8f9fa",
        },
        "on-surface": {
          DEFAULT: "#333",
        },
        "inverse-surface": {
          DEFAULT: "#212529",
        },
        "inverse-on-surface": {
          DEFAULT: "#ffffff",
        },
        highlight: {
          light: "#fde681",
          DEFAULT: "#fcd116",
          dark: "#e3b903",
        },
        confirmation: {
          DEFAULT: "#6a994e",
        },
        error: {
          DEFAULT: "#bc4749",
        },
        npl: {
          DEFAULT: "#f01e29",
        },
      },
      screens: {
        landscape: { raw: "(orientation: landscape)" },
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
