/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main_bg: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        primary_color: "#14173E",
        secondary_color: "#1708B7",
        tertiary_color:"#301E74"
      },
      backgroundImage: {
        bg_gradient:"linear-gradient(90deg, rgba(99, 104, 167, 0.8) 50%, rgba(186, 186, 186, 0.6) 130%)",
        second_gradient:"linear-gradient(90deg, rgba(14, 18, 136, 0.3) 50%, rgba(99, 104, 167, 0.6) 130%)",
        third_gradient:"linear-gradient(45deg, rgba(186, 186, 186, 0.9) 50%, rgba(99, 104, 167, 1) 130%)",
     
     
     
      },

      keyframes:{
        grow:{
          '0':{width :'0'},
          '100':{width :'100%'}
        },

        growheight:{
          '0':{height:"0"},
          '100':{height:"100%"}
        }
      },

      animation:{
        grow: 'grow 2s ease-in-out'
      },
      
      
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      backdropFilter: {},
    },
  },
  plugins: [],
};