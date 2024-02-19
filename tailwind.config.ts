import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        peyda: 'Peyda',
        tanha: 'vazir',
        vazir: 'vazir',
        yekanX: 'IRANYekanX',
        iransans: 'iransans',
        bjn: 'Bahij Nazanin',
      },

      colors: {
        "rasa": {
          "orange": {
            400: "#FF9E00",
            500: "#FF9100",
            600: "#FF8500",
            700: "#FF6D00",
            800: "#FF5400",
          },

          "blue": {
            25: "#F4F9FF",
            50: "#F2FBFF",
            100: "#CAE9F6",
            250: "#5186CA",
            300: "#00B4D8",
            400: "#0096C7",
            500: "#268CAD",
            600: "#0077B6",
            700: "#023E8A",
            800: "#03045E",
          },

          "green": {
            400: "#DCEDF0",
            800: "#1A6372"
          },

          "purple": {
            100: "#C8C8E4",
            400: "#4D4E87",
          }
        },
      },
    },
  },
  plugins: [],
};
export default config;
