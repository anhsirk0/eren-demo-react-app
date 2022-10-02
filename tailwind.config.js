const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Open Sans"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#664de4",
          "primary-focus": "#7d69e2",
          "primary-content": colors.white,
          secondary: colors.emerald[400],
          "secondary-focus": colors.emerald[500],
          "secondary-content": colors.white,
          accent: colors.slate[500],
          "accent-focus": colors.slate[700],
          "accent-content": colors.white,
          neutral: colors.slate[500],
          "neutral-focus": colors.slate[600],
          "neutral-content": colors.white,
          "base-100": colors.white,
          "base-200": colors.slate[100],
          "base-300": colors.slate[200],
          "base-content": colors.slate[800],
          info: colors.sky[300],
          success: colors.emerald[500],
          warning: colors.rose[200],
          error: colors.rose[500],
        },
      },
    ],
  },
};
