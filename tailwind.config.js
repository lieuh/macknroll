/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        customTheme: {
          "primary": "#DEBAC0",
          "secondary": "#2F323A",
          "accent": "#C47AC0",
          "neutral": "#E39EC1",
          "base-100": "#77567A",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}

