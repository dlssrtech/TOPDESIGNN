import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./apps/web/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d8edff',
          500: '#1479ff',
          600: '#0b5ed7',
          700: '#0849a8',
          950: '#06172f'
        },
        ink: '#08111f'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(20, 121, 255, 0.24)'
      }
    }
  },
  plugins: []
};

export default config;
