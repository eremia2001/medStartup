import type { Config } from 'tailwindcss';

const config: Config = {
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
      colors: {
        primary: '#F4B34B',
        secondary: '#6C63FF',
        subline: '#373737',
        error: '#d63031',
        succsess: '#0F8852',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit,minmax(15rem,1fr))',
      },
    },
  },
  plugins: [],
};
export default config;
