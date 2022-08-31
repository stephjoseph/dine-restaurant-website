/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        beaver: '#9e7f66',
        'cod-gray': '#111111',
        mirage: '#17192b',
        'ebony-clay': '#242b37',
        'shuttle-gray': '#5c6779',
        error: '#B54949',
      },
    },
  },
  plugins: [],
};
