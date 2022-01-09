module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'inActive' : '#75757a',
        'orng' : '#ff9900' ,
        'disc': '#f68b1e',
        'text': '#282828'
        
      },
      backgroundColor: {
        'orng' : '#ff9900' ,
        'discbg': '#feefde',
        'purpbg' : '#633186',
        'lightPurpBg': '#E1BEE7'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'hsc': 'repeat(6, calc(50% - 40px))',
      },
      gridTemplateRows: {
        
        'hsr': 'minmax(150px, 1fr)',
      },
      
    },
  },
  plugins: [],
}
