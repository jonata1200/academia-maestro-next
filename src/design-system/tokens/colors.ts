export const colors = {
  brand: {
    primary: {
      500: '#0000FF',
      600: '#0000E6',
      700: '#0000CC',
    },
    secondary: {
      500: '#FFFFFF',
    },
  },
  neutral: {
    50: '#f4f4f4',
    700: '#555555',
    800: '#333333',
    950: '#000033',
  },
  semantic: {
    success: '#16a34a',
    warning: '#f59e0b',
    error: '#dc2626',
    info: '#2563eb',
  },
  state: {
    focusRing: '#2563eb',
    disabled: '#9ca3af',
  },
} as const;

export type Colors = typeof colors;

