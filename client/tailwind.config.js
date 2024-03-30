/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  container:{
    padding:'2rem',
    center: true,
  },
  extend: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    flexBasis: {
      '1/2': '48%',
      '1/3': '31%',
      '1/4': '23%',
      '1/5': '18%',
      
    }
  },
};
export const plugins = [require('@tailwindcss/forms'),];

