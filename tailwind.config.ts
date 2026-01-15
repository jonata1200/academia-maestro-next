import type { Config } from 'tailwindcss'
import { animations, colors, spacing, typography, shadows } from './src/design-system/tokens'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.brand.primary[500],
        secondary: colors.brand.secondary[500],
        'text-color': colors.neutral[800],
        'text-light': colors.neutral[700],
        'light-gray': colors.neutral[50],
        'dark-blue': colors.neutral[950],
        success: colors.semantic.success,
        warning: colors.semantic.warning,
        error: colors.semantic.error,
        info: colors.semantic.info,
      },
      fontFamily: {
        sans: [...typography.fontFamily.sans],
      },
      maxWidth: {
        container: '1100px',
      },
      spacing,
      boxShadow: {
        ...shadows,
      },
      // Animações customizadas (para o carrossel de instrumentos)
      keyframes: {
        scroll: animations.keyframes.scroll,
        slideUp: animations.keyframes.slideUp,
      },
      animation: {
        scroll: animations.animation.scroll,
        slideUp: animations.animation.slideUp,
      }
    },
  },
  plugins: [],
}
export default config

