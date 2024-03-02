/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    sans: {gitLab:'Poppins, sans-serif'},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'silver': '#313131',
      'metal': ' #202020',
      'tahiti': '#181818',
      'black': '#171717',
      'blur': '#0369a1',
      'sky':'#53ACFF',
      'white':'#FFFFFF',
      'green':"#118F4B",
      'border':'#474646',
      'writing':'#878787',
      'red':'#EB1F04'
    },
    extend: {},
  },
  plugins: [],
}

