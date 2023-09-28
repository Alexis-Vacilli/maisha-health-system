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
    colors: {
      whiteTheme: {
        pinkAccent: "#EEF0FF",
        linkColor:"#404040",
        primaryColor:"#1E2F97",
        bgGray:"#F1F1F1",
        footerBg:"#EDF0FF"
      }
    }
    },
  },
  plugins: [],
}
