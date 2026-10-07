import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f0f5ed',
          100: '#d9e5d0',
          200: '#b8d4a8',
          300: '#96c380',
          400: '#7ab365',
          500: '#5a9d4a',
          600: '#4a8c3a',
          700: '#3a7b2a',
          800: '#2a6a1a',
          900: '#1a5910',
        },
        rose: {
          50: '#fdf2f0',
          100: '#f9e0dc',
          200: '#f4c5b9',
          300: '#eeaa96',
          400: '#e89073',
          500: '#e07550',
          600: '#d96640',
          700: '#d25730',
          800: '#cb4820',
          900: '#c43910',
        },
        navy: '#1a2a3a',
        cream: '#faf8f3',
        gold: '#d4a574',
      },
      fontFamily: {
        display: ['"Trebuchet MS"', 'sans-serif'],
        body: ['Arial', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
};
export default config;
