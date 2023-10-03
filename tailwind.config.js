/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/images/hero/bg-no-circles.svg')",
        'service': "url('/images/services/Service_bg.svg')",
        'childHeader': "url('/images/child-pages/headerbgs.svg')",
        'loginBg': "url('/public/images/selection.svg')",
      },
      fontFamily:{
        body:'var(--font-mont-serrat)'
      },
      otherImages: {
         'logo': "url(/public/images/logo.png)",
         'bannerImage': "url(/public/images/banner.png)"
      },
    colors: {
      whiteTheme: {
        pinkAccent: "#EEF0FF",
        purpleAccent: "#abb8ff51",
        greenAccent: "#DDFFE6",
        blackAccent: "#767676",
        orangeAccent: "#B52B00",
        lightBlueAccent: "#A9D4FD",
        greenColor: "#18662D",
        titleColor: "#0D0907",
        subtitleColor: "#28231D",
        linkColor:"#404040",
        primaryColor:"#1E2F97",
        secondaryColor: "#ABB7FF",
        bgGray:"#F1F1F1",
        footerBg:"#EDF0FF",
      },

      
    }
    },
  },
  plugins: [],
}
