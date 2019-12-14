const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    minWidth: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%"
    },
    extend: {
      fontFamily: {
        sans: ["Roboto Condensed", "Roboto", ...defaultTheme.fontFamily.sans]
      },
      minHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "100": "100vh",
        "95": "95vh",
        "80": "80vh",
        "70": "70vh",
        "60": "60vh",
        "50": "50vh",
        "40": "40vh",
        "30": "30vh",
        "20": "20vh",
        "10": "10vh",
        "5": "5vh"
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
      },
      opacity: {
        "0": "0",
        "25": ".25",
        "50": ".5",
        "75": ".75",
        "10": ".1",
        "20": ".2",
        "30": ".3",
        "40": ".4",
        "50": ".5",
        "60": ".6",
        "70": ".7",
        "80": ".8",
        "90": ".9",
        "100": "1"
      },
      height: {
        huge: "8000px"
      }
    },
    variants: {},
    plugins: []
  }
};
