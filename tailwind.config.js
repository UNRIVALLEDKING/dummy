/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        primary: '#f37a1f',
        secondary: '#393939',
        tri: '#a4b6c2',
        fourth: '#d0d0c4',
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#f37a1f',

          secondary: '#393939',

          accent: '#a4b6c2',

          neutral: '#fff',

          'base-100': '#ffffff',

          info: '#d0d0c4',

          success: '#00ff00',

          warning: '#00ff00',

          error: '#ff0000',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
