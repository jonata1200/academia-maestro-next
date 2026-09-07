import { animations } from './animations';
import { borders } from './borders';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { shadows } from './shadows';
import { spacing } from './spacing';
import { typography } from './typography';

export { animations, borders, breakpoints, colors, shadows, spacing, typography };

export const tokens = {
  animations,
  borders,
  breakpoints,
  colors,
  shadows,
  spacing,
  typography,
} as const;

export type Tokens = typeof tokens;

