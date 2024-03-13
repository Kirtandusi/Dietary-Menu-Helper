module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        back: "#7bb3cc",
        "back-dark": "#3F82A2",
        "back-light": "#C4DDE8",
        text: "#FFFFFF",
        "text-dark": "#000000",
        primary: "#10B083",
        "primary-dark": "#0C8361",
        "primary-light": "#32ECB7",
        secondary: "#8D3B72",
        "secondary-dark": "#652A51",
        "secondary-light": "#BD619E",
        accent: "#FFA940",
        "accent-dark": "#E07B00",
        "accent-light": "#FFC885",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
