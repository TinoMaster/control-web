import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#027483',
          light: '#00abc2',
          dark: '#015c68',
        },
        secondary: {
          DEFAULT: '#b100d4',
        },
        accent: {
          DEFAULT: '#03dac6',
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // Importante: deshabilitar preflight para que no interfiera con Material-UI
  corePlugins: {
    preflight: false,
  },
}

export default config
