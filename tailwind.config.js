/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ["Inter", 'sans-serif'],
      },
      backgroundImage: {
        'rad-grad': 'radial-gradient(50% 53% at 52% 50%, #A01EFE 0%, rgba(78, 0, 255, 0) 92.71%)',
        'rad-grad-new': 'radial-gradient(60% 60% at 55% 50%, #5C1EFE 0%, rgba(1, 0, 255, 0) 92.71%)',
      },
      keyframes: {
        crossfade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        crossfade: 'crossfade 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
