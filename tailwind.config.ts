/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brittany: ['BrittanySignature', 'sans-serif'],
      },
      backgroundImage: {
        'chairman-bg': "url('/assets/images/slogun.png')",
        'site-banner': "url('/assets/images/site-banner.png')",
        'meditation-left': "url('/assets/images/Meditation.png')",
        'meditation-bg': "url('/assets/images/Meditation-bg.png')",
        'SubscriptionPlan-bg': "url('/assets/images/SubscriptionPlan-bg.png')",
        'membership-bg': "url('/assets/images/membership-bg.jpg')",
        'stats-bg': "url('/assets/images/stats-bg.jpg')",
        'btn-gradient': "linear-gradient(180deg, #1796D8 0%, #4E0670 100%)",
        'btn-gradient-hover': "linear-gradient(180deg, #000000 0%, #4e0670c2 100%)",
        'btn-hover': "#4E0670",
        'blogImg1-bg': "url('/assets/images/event/blogImg1.png')",
        'blogImg2-bg': "url('/assets/images/event/blogImg2.png')",
        'blogImg3-bg': "url('/assets/images/event/blogImg3.png')",
        'shap-bg': "url('/assets/images/event/shap.svg')",
        'yoga': "url('/formyoga.png')",
      },
      colors: {
        'theme-orange': "#ED9C2E",
        'gray-light': "#F7F7F7",
        'info-color': "#1796D8",
        'blue-color': "#002A40",
        'bgBlue': "#B8E7FF",
      },
      fontSize: {
        "40": '40px',
        "32": '32px',
        "50": '50px',
        "1xl": "22px",
      },
      borderRadius: {
        '10': '10px',
        '30': '30px',
      },
      spacing: {
        '4': '15px',
        '2.5': '10px',
        '17': '70px',
      },
      boxShadow: {
        'shadow-color': '0px 0px 16px #00000029',
        'shadow-color3': '0px 0px 20px #0000000F',
        'top': '0px 0px 20px rgb(0 0 0 / 6%)',
        'shadow-color2': '0px 0px 10px #F9F9F9',
        'shadow-color8': ' 0px 0px 8px #00000029',

       
      },
      screens: {
        'small': '360px',    
        'xs': '475px',       
        'md': '991px',        
        'lg': '1280px',       
        'xl': '1367px',      
      },
    },
  },
  plugins: [],
};
