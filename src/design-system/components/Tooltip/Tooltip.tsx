'use client';

import React, { useId, useState } from 'react';
import { cn } from '../../utils/cn';

type TooltipSide = 'top' | 'bottom' | 'left' | 'right';

type TooltipChildProps = {
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  'aria-describedby'?: string;
};

export type TooltipProps = {
  content: React.ReactNode;
  side?: TooltipSide;
  delayMs?: number;
  children: React.ReactElement<TooltipChildProps>;
};

const sideClasses: Record<TooltipSide, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

export function Tooltip({ content, side = 'top', delayMs = 200, children }: TooltipProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);

  const child = React.cloneElement(children, {
    'aria-describedby': open ? id : undefined,
    onMouseEnter: (e: React.MouseEvent) => {
      children.props.onMouseEnter?.(e);
      const t = window.setTimeout(() => setOpen(true), delayMs);
      setTimer(t);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      children.props.onMouseLeave?.(e);
      if (timer) window.clearTimeout(timer);
      setTimer(null);
      setOpen(false);
    },
    onFocus: (e: React.FocusEvent) => {
      children.props.onFocus?.(e);
      setOpen(true);
    },
    onBlur: (e: React.FocusEvent) => {
      children.props.onBlur?.(e);
      setOpen(false);
    },
  });

  return (
    <span className="relative inline-flex">
      {child}
      {open ? (
        <span
          id={id}
          role="tooltip"
          className={cn(
            'absolute z-50 rounded-md bg-dark-blue px-2 py-1 text-xs text-white shadow-md animate-in fade-in duration-150',
            sideClasses[side]
          )}
        >
          {content}
        </span>
      ) : null}
    </span>
  );
}

