/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    screens: {
      'lsm': '320px',
      'xsm': '370px',
      'ssm': '420px',
    },
    colors: {
      'Primary': '#111921',
      'yellow300': '#E2B756',
      'red-primary': '#D12229',
      'light300': '#F4F4F4',
      'ash100': '#7A7A7A',
      'FooterGray': '#F0F0F0',
      'Black': '#000000',
      'transparentDark': 'hsla(0, 0%, 13%, 0.8)',
      'borderHash': '#BABABA',
      'borderCartActions': '#999999'
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      nunito: ['Nunito Sans', 'sans-serif'],
    },
    boxShadow: {
      'shawdowCart': '0px 1px 2px 0px #1018280D'
    }
  },
};
export const plugins = []; 