/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    screens: {
      'lsm': '320px'
    },
    colors: {
      'Primary': '#111921',
      'Secondary': '#2D2D2D',
      'white200': '#F8F8F8',
      'FooterGray': '#F0F0F0',
      'Black': '#000000',
      'transparentDark': 'hsla(0, 0%, 13%, 0.8)',
      'borderHash': '#BABABA',
      'borderCartActions': '#999999'
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      raleway: ['Nunito', 'sans-serif'],
    },
    boxShadow: {
      'shawdowCart': '0px 1px 2px 0px #1018280D'
    }
  },
};
export const plugins = []; 