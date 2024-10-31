/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDA214", // orange
        secondary: "#BCCED9", // light blue-gray
        darkBlue: "#304859", // dark blue-gray
        navy: "#152938", // navy blue
        lightGray: "#F2F2F2", // light gray
        blueGray: "#7191A5", // blue-gray
        mediumBlue: "#6395B8", // medium blue
        white: "#FCFCFC", // white
        lightOrange: "#FFB84A",
        lightGray: "#DFE7EC",
      },
      fontFamily: {
        atkinson: ["Atkinson Hyperlegible", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1.2" }],
        h2: ["32px", { lineHeight: "1.3" }],
        h3: ["29px", { lineHeight: "1.3" }],
        body: ["18px", { lineHeight: "1.5" }],
        gameNumber6x6: ["44px", { lineHeight: "1" }],
        gameNumber4x4: ["56px", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
