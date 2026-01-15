export const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  keyframes: {
    // Mantém compatibilidade com o carrossel atual (Tailwind)
    scroll: {
      to: { transform: 'translate(calc(-50% - 10px))' },
    },
    // Referência para documentação (a animação em si hoje existe no CSS global)
    slideUp: {
      from: { transform: 'translateY(100%)', opacity: '0' },
      to: { transform: 'translateY(0)', opacity: '1' },
    },
  },
  animation: {
    scroll: 'scroll 40s linear infinite',
    slideUp: 'slideUp 0.5s ease-out',
  },
} as const;

export type Animations = typeof animations;

