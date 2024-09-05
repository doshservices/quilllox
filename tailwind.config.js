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
      'light400': '#F8F8F8',
      'ash100': '#7A7A7A',
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