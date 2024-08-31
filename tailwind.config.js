/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#fbfbff",
        white: "#fff",
        dimgray: {
          "100": "#696969",
          "200": "#5a5a5a",
          "300": "#555",
        },
        deepskyblue: "#00aaff",
        lightskyblue: "#b0d9ff",
        black: "#000",
        darkorange: "#f7881f",
        gray: {
          "100": "#fcfcfc",
          "200": "#222",
        },
        "dark-black": "#303030",
      },
      spacing: {},
      fontFamily: {
        "satoshi-variable": "'Satoshi Variable'",
        inherit: "inherit",
      },
      borderRadius: {
        "3xs": "10px",
        "sm-2": "13.2px",
        "83xl-5": "102.5px",
        "74xl-3": "93.3px",
        "86xl-8": "105.8px",
        "11xl": "30px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
