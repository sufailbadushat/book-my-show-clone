module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sufail: {
          50: "#ede4ff",
          100: "#c7b3ff",
          200: "#a180fd",
          300: "#7c4efc",
          400: "#581dfb",
          500: "#3f06e2",
          600: "#3103b0",
          700: "#22017e",
          800: "#14004d",
          900: "#07001d",
        },
        navCol: {
          50: "#e5f4ff",
          100: "#c0dbf1",
          200: "#2B3148",
          300: "#72aadb",
          400: "#4d92d1",
          500: "#3578b7",
          600: "#295e8e",
          700: "#1c4367",
          800: "#0e283f",
          900: "#010d19",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
