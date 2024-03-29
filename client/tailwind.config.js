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
    }
  },
};
export const plugins = [require('@tailwindcss/forms'),];

