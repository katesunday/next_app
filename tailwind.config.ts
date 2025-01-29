import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        neutral: '#ddd6cb',
        beige: '#cfa69b',
        dark_beige: '#6e6464',
        light_beige: '#b3aea5',
        orange: '#f99f2a',
        dark: '#1f252d',

        grey: {
          30: '#b3b9c6',
          50: '#a4abb9',
          100: '#454952',
        },
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        '.header-background': {
          position: 'absolute',
          width: '100%',
          height: 'auto',
          top: '0',
          left: '0',
          zIndex: '-1',
        },
        '.bg-gradient-link': {
          background: 'linear-gradient(90deg, #f9572a, #ff9b05)',
        },
        '.bg-gradient-link:hover': {
          background: 'linear-gradient(90deg, #fd4715, #f9b241)',
        },
        '.slide-show-animation': {
          transform: 'scale(1.1) translateX(-1rem)',
          transition: 'all 0.5s ease-in-out',
        },
        '.slide-show-animation-active': {
          zIndex: '1',
          opacity: '1',
          transform: 'scale(1) translateX(0) rotate(0)',
        },
        '.bg-meal-item': {
          background: 'linear-gradient(90deg, #2c1e19, #25200f)',
        },
      });
    },
  ],
} satisfies Config;
