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
          50: '#f6f8f5',
          100: '#ebf0ea',
          200: '#d6e1d2',
          300: '#b9cdb2',
          400: '#9cb797',
          500: '#7ca07d',
          600: '#648669',
          700: '#516c52',
          800: '#405540',
          900: '#2d3d2d',
        },
        beige: {
          50: '#fffdf9',
          100: '#f6efe8',
          200: '#efe2d1',
          300: '#e0ceb0',
          400: '#d4b38a',
          500: '#c89f6e',
          600: '#af884d',
          700: '#906d38',
          800: '#785a2e',
          900: '#5a4526',
        },
        ink: '#1d2a2f',
      },
      boxShadow: {
        soft: '0 18px 40px rgba(31, 46, 35, 0.12)',
      },
      fontFamily: {
        display: ['"Trebuchet MS"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
