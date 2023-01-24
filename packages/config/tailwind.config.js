/** @type {import('tailwindcss').Config} */
const { zIndex, fontSize, spacing } = require('./tailwind.custom')
module.exports = {
  content: ['../../packages/ui/components/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    padding: () => spacing(),
    margin: () => spacing(),
    colors: {
      transparent: 'transparent',
      orange: '#FF5C00',
      yellow: '#FFD754',
      blue: '#4E85FF',
      navy: '#190F4A',
    },
    extend: {
      fontFamily: {
        zou: ['var(--font-zou)'],
      },
    },
  },
}
