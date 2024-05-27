import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        blink: "blink 0.7s infinite",
      },
      outline: {
        none: ["0px", "transparent"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      aspectRatio: {
        "1333/265": "1333 / 265",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#fff",
        black: "#000",
        whitesmoke: {
          100: "#f3f3f3",
          200: "#eaeaea",
        },
        darkslategray: {
          100: "#474747",
          200: "#343434",
        },
        darkslateblue: "#272761",
        orange: {
          100: "#f7a70d",
          200: "#f7a600",
          300: "rgba(247, 166, 0, 0.12)",
        },
        lightgray: "#d5d5d5",
        blanchedalmond: "#fff0d1",
        dimgray: "#5a5a5a",
        chocolate: "#c47500",
        papayawhip: "#fff1d2",
        indianred: "#dc6a6a",
        graylighter: "rgba(0, 0, 0, 0.05)",
        darkgray: "#666666",
        lightBlue: "#3D3D97",
      },
      spacing: {},
      fontFamily: {
        "red-hat-display": "'Red Hat Display'",
        "red-hat-text": "'Red Hat Text'",
        "libre-baskerville": "'Libre Baskerville'",
        inter: "Inter",
      },
      borderRadius: {
        "113xl-7": "132.7px",
        "8xs": "5px",
        "3xs": "10px",
        "10xs-5": "2.5px",
        "31xl": "50px",
      },
    },
    fontSize: {
      "xl-9": "20.9px",
      mid: "17px",
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "8xl-3": "27.3px",
      "xl-4": "20.4px",
      "36xl": "55px",
      "14xl": "33px",
      "25xl": "44px",
      "base-2": "16.2px",
      "lg-4": "18.4px",
      "17xl-7": "36.7px",
      "3xl": "22px",
      "10xl": "29px",
      "lgi-2": "19.2px",
      "smi-6": "12.6px",
      "mid-1": "17.1px",
      lg: "18px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      "55xl": "74px",
      "40xl": "59px",
      "11xl": "30px",
      "4xl": "23px",
      "13xl": "32px",
      "7xl": "26px",
      mini: "15px",
      sm: "14px",
      xs: "10px",
      inherit: "inherit",
    },
    screens: {
      "2xl": {
        raw: "screen and (min-width: 1600px)",
      },
      xl: {
        raw: "screen and (min-width: 1440px)",
      },
      lg: {
        raw: "screen and (min-width: 1300px)",
      },
      md: {
        raw: "screen and (min-width: 1100px)",
      },
      sm: {
        raw: "screen and (min-width: 850px)",
      },
      xs: {
        raw: "screen and (min-width: 450px)",
      },
      "2xlm": {
        raw: "screen and (max-width: 1600px)",
      },
      xlm: {
        raw: "screen and (max-width: 1440px)",
      },
      lgm: {
        raw: "screen and (max-width: 1300px)",
      },
      mdm: {
        raw: "screen and (max-width: 1100px)",
      },
      smm: {
        raw: "screen and (max-width: 850px)",
      },
      xsm: {
        raw: "screen and (max-width: 450px)",
      },
      mq1600: {
        raw: "screen and (max-width: 1600px)",
      },
      mq1440: {
        raw: "screen and (max-width: 1440px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },

      xs1: {
        raw: "screen and (min-width: 650px)",
      },
      maxsc: {
        raw: "screen and (min-width: 1920px)",
      },
    },
  },

  plugins: [],
});
// export default config;
