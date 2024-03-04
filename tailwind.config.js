/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      screens: {

      },
      colors: {
        //#region "Portfolio"
        // LIGHT MODE 
        'jt-primary-light': '#F2EFE5',
        'jt-primary-white': '#F0F3FF',
        'jt-primary-dark': '#B4B4B8',
        'jt-primary-neutral': '#C7C8CC',
        'jt-grey': '#E3E1D9',
        'jt-light': '#E3E1D9',
        // DARK MODE
        'jt-dark-primary-light': '#9290C3',
        'jt-dark-primary-dark': '#070F2B',
        'jt-dark-primary-neutral': '#1B1A55',
        'jt-dark-grey': '#535C91',
        'jt-dark-light': '#535C91',
        // NEON FOR DARK TEXT 
        'jt-txt-neon-green': '#15F5BA',
        'jt-txt-neon-purple': '#836FFF',

        // TEXTS
        'jt-txt-dark': '#211951',
        'jt-txt-white': '#ffffff',
        //#endregion
      
        //#region "KyriexAnta Colors"
        'kyrie-white': "#FFFFFF",
        'kyrie-orange': "#E68662",
        'kyrie-bglight-orange': "#F9F7F2",
        'kyrie-bglight-blue': "#F2F3F9",
        'kyrie-grey': "#707070",
        'kyrie-dark-orange': "#E68662",
        'kyrie-dark': "#231E20",
        'kyrie-purple': "#4D5BDA",
        'kyrie-dark-purple': "#242891",
        'kyrie-brown': "#442418",
        //#endregion
      }

    },
  },
  plugins: [],
}

