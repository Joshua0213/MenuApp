const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Condensed", "Roboto", ...defaultTheme.fontFamily.sans]
      },
      minHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%"
      },
      colors: {
        "main-primary": "#1c2b85",
        "button-1": "#e53e3e"
      },
      minHeight: {
        "10": "10vh",
        "20": "20vh",
        "30": "30vh",
        "40": "40vh",
        "50": "50vh",
        "60": "60vh",
        "70": "70vh",
        "80": "80vh",
        "90": "90vh"
      }
    },
    variants: {},
    plugins: []
  }
};
