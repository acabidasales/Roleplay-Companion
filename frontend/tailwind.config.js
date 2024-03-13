/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dorado': {
          '50': '#fbf9eb',
          '100': '#f5f2cc',
          '200': '#ece39c',
          '300': '#e1cf63',
          '400': '#d7ba38',
          '500': '#c7a42b',
          '600': '#ab8123',
          '700': '#89601f',
          '800': '#754f21', //default
          '900': '#624121',
          '950': '#39220f',
        },
        'madera1': {
          '50': '#f5f4f1',
          '100': '#e5e4dc',
          '200': '#cec9ba',
          '300': '#b1a993',
          '400': '#9b8f74',
          '500': '#8c7f66',
          '600': '#776a57',
          '700': '#615347',
          '800': '#534840',
          '900': '#493f3a',
          '950': '#251f1c', // default
      },
        'madera2': {
          '50': '#f6f4ef',
          '100': '#ebe8dc',
          '200': '#d9d5bd',
          '300': '#c0ba96',
          '400': '#a8a173',
          '500': '#918b59', // default
          '600': '#6e6a42',
          '700': '#565335',
          '800': '#46452e',
          '900': '#3d3c2a',
          '950': '#201f13',
      },
        'bg': {
          '50': '#f3f8f8',
          '100': '#e1ebec',
          '200': '#c6d9db',
          '300': '#9fbdc1',
          '400': '#709aa0',
          '500': '#547e86',
          '600': '#496971',
          '700': '#3f585f',
          '800': '#394b51',
          '900': '#334146',
          '950': '#0f1416', //default
      },
        'blanco': {
          '50': '#f8f8f8',
          '100': '#eaeaea', //default
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
      },
        'white': '#EAEAEA',
        'negro': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#151515', //default
      },
        'black': '#151515',
        'sky': colors.sky,
      },
    },
  },
  plugins: [],
};
