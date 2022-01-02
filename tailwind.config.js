module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D202B",
        border: "#17313A",
        secondary: "#1A2F3E",
        tertiary: "#3E78A9",
        highlight: "#C77A5F",
      },
      fontFamily: {
        display: ["Eina", "Roboto", "Open Sans", "Arial"],
        body: ["Open Sans"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
