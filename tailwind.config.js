/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      spacing:{
        '128':'32rem',
      },
      colors:{
        magenta:'#37003c',
      }
    },
  },
  plugins: [],
}

