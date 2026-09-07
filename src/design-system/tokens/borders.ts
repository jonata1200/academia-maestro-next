export const borders = {
  radius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },
  width: {
    hairline: '1px',
    thin: '2px',
  },
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
  },
} as const;

export type Borders = typeof borders;

