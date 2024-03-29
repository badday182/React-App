/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  conteiner:{
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

