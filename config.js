tailwind.config = {
  theme: {
    screens: {
      'xs': '500px',
      // => @media  (min-width: 500px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        clifford: '#da373d',
        background: '#0f1634',
      },
      fontFamily:{
        'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
        'heading': ['"Bebas Neue", sans-serif'],
        'paragraph' : ['"Montserrat", sans-serif'],
      }
    }
      }
    }