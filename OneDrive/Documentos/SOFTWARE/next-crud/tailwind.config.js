module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    
  ],
  variants:{
    extend:{
      opacity:['disabled'],
    }
  },
  theme: {
    extend: {
      opacity:['disabled'],
    },
  },
  plugins: [],
}
