/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    screens: {
      'sm': {'min': '320px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
  
      'md': {'min': '768px', 'max': '1024px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
  
      'lg': {'min': '1025px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
      'xl': {'min': '1280px', 'max': '1440px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
      '2xl': {'min': '1441px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}


