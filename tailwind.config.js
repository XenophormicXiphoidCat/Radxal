/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: '#000000',
          900: '#121212',
          800: '#1E1E1E',
          700: '#2C2C2C',
        },
        accent: {
          100: '#F0E6D2',
          200: '#E6D9C0',
          300: '#DCCCAD',
          400: '#D2BF9A',
          500: '#C8B287',
          600: '#BEA574',
          700: '#B49861',
          800: '#AA8B4E',
          900: '#A07E3B',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B0B0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scale-hover': 'scale-hover 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)' },
        },
        'scale-hover': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.03)' },
        },
      },
      letterSpacing: {
        wide: '0.5px',
      },
      textShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.3)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
