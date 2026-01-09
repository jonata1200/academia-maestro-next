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
        primary: '#0000FF',
        secondary: '#FFFFFF',
        'text-color': '#333',
        'text-light': '#555',
        'light-gray': '#f4f4f4',
        'dark-blue': '#000033',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        container: '1100px',
      },
      // Animações customizadas (para o carrossel de instrumentos)
      keyframes: {
        scroll: {
          'to': { transform: 'translate(calc(-50% - 10px))' }
        }
      },
      animation: {
        scroll: 'scroll 40s linear infinite'
      }
    },
  },
  plugins: [],
}
export default config

