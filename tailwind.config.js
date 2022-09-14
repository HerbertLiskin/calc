/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      ms: '320px',
      mm: '410px',
      ml: '600px',
      t: '768px',
      dxs: '1024px',
      ds: '1280px',
      dm: '1440px',
      dl: '1680px',
      dxl: '1900px',
    },
    extend: {
      colors: {},
      backgroundImage: {},
      opacity: {},
      backgroundSize: {},
      backgroundPosition: {},
      dropShadow: {},
      scale: {},
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.3, 1) infinite',
      },
    },
    fontFamily: {
      neue: ['NeueHaasDisplay'],
      roboto: ['Roboto Mono'],
      rpb: ['RPBrawl'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
