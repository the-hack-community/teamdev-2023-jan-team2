/** @type {import('tailwindcss').Config} */
const { pxConverter } = require('./tailwind.custom')
module.exports = {
  content: ['../../packages/ui/components/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      padding: () => pxConverter(),
      margin: () => pxConverter(),
      colors: {
        transparent: 'transparent',
        orange: '#FF5C00',
        yellow: '#FFD754',
        blue: '#4E85FF',
        navy: '#190F4A',
        gray: '#D9D9D9',
      },
      fontFamily: {
        zou: ['var(--font-zou)'],
        sans: ['Hiragino Sans'],
      },
    },
  },
}
