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
      });
    },
  ],
} satisfies Config;
