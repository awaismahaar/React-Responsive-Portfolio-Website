const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        gumela : ['Gumela'],
        Prociono : ["Prociono"],
        RussoOne : ["Russo One"],
        Roboto : ["Roboto"],
        LibreBaskerville : ["Libre Baskerville"]
      },
      colors: {
        yellow: '#DFFF00',
        orange: '#FF5733',
        black: '#06265b',
        gray: 'gray',
        blueCard: '#b0c2df',
        purple: '#b573b5',
        orangeCard: 'rgba(252, 166, 31, 0.45)',
        blue: '#3f5efb',
        pink : "#fc46ec",
        white: '#fff',
        red: '#ff0000',
        green: '#008000',
        lightblue: '#00bfff',
        lightgray: '#d3d3d3',
      },
      boxShadow: {
        box: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        smbox: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      },
      backgroundImage : {
        'gradient-light': 'linear-gradient(to right, #ff7e5f, #feb47b)', 
        'gradient-dark': "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%);",

      }
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode based on a CSS class
});
