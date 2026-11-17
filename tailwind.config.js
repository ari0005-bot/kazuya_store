/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: '#F8C8DA',
        cherryPink: '#E95D96',
        darkRose: '#A52E5D',
        softWhite: '#FFF5F7',
        cozyBrown: '#795348',
        cream: '#F2DCC9',
        kawaii: {
          50: '#FFF5F7',
          100: '#FEEBF1',
          200: '#F8C8DA',
          300: '#F4A6C4',
          400: '#EE7CA9',
          500: '#E95D96',
          600: '#D13B76',
          700: '#A52E5D',
          800: '#795348',
          900: '#4E2436',
        },
        blush: '#FFC8DD',
        petal: '#FFE4F0',
        mochi: '#FFFDF5',
        latte: '#F5E6D3',
        espresso: '#3E2723',
      },
      fontFamily: {
        heading: ['"Fredoka"', '"Baloo 2"', 'cursive', 'sans-serif'],
        body: ['"Nunito"', '"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'kawaii': '0 8px 30px -4px rgba(233, 93, 150, 0.2)',
        'kawaii-lg': '0 14px 40px -4px rgba(233, 93, 150, 0.3)',
        'kawaii-sm': '0 4px 15px -2px rgba(233, 93, 150, 0.15)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow-pink': '0 0 20px rgba(233, 93, 150, 0.35)',
        'glow-rose': '0 0 25px rgba(165, 46, 93, 0.25)',
        'inner-pink': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.6)',
      },
      backgroundImage: {
        'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(233, 93, 150, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(248, 200, 218, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(165, 46, 93, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(248, 200, 218, 0.1) 0px, transparent 50%)',
        'gradient-pink': 'linear-gradient(135deg, #FFF5F7 0%, #FEEBF1 50%, #F8C8DA 100%)',
        'gradient-cherry': 'linear-gradient(135deg, #E95D96 0%, #A52E5D 100%)',
        'gradient-mochi': 'linear-gradient(135deg, #FFFDF5 0%, #FFF5F7 100%)',
        'gradient-cream': 'linear-gradient(135deg, #F5E6D3 0%, #FFFDF5 100%)',
        'gradient-hero': 'linear-gradient(180deg, #FFF5F7 0%, #FDF8F5 50%, #FFF5F7 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(233, 93, 150, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(233, 93, 150, 0.6)' },
        },
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4.5s ease-in-out 1.5s infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'shimmer': 'shimmer 3s infinite linear',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'blob': 'blob 8s ease-in-out infinite',
        'slide-in-from-top': 'slide-in-from-top 0.4s ease-out forwards',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        'xl-2xl': '1rem 1rem 2rem 2xl',
      },
    },
  },
  plugins: [],
}
