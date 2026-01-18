import { renderHook } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import React, { useRef } from 'react';
import { useClickOutside } from '@design-system/hooks/useClickOutside';

function TestComponent({ onOutside, enabled = true }: { onOutside: () => void; enabled?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onOutside, enabled);
  return <div ref={ref} data-testid="inside">Inside</div>;
}

describe('useClickOutside', () => {
  it('chama callback quando clica fora do elemento', () => {
    const onOutside = jest.fn();
    render(<TestComponent onOutside={onOutside} />);
    const inside = screen.getByTestId('inside');

    const outside = document.createElement('div');
    document.body.appendChild(outside);

    const event = new MouseEvent('mousedown', { bubbles: true });
    outside.dispatchEvent(event);

    expect(onOutside).toHaveBeenCalled();

    document.body.removeChild(outside);
  });

  it('não chama callback quando clica dentro do elemento', () => {
    const onOutside = jest.fn();
    render(<TestComponent onOutside={onOutside} />);
    const inside = screen.getByTestId('inside');

    const event = new MouseEvent('mousedown', { bubbles: true });
    inside.dispatchEvent(event);

    expect(onOutside).not.toHaveBeenCalled();
  });

  it('não chama callback quando disabled', () => {
    const onOutside = jest.fn();
    render(<TestComponent onOutside={onOutside} enabled={false} />);

    const outside = document.createElement('div');
    document.body.appendChild(outside);

    const event = new MouseEvent('mousedown', { bubbles: true });
    outside.dispatchEvent(event);

    expect(onOutside).not.toHaveBeenCalled();

    document.body.removeChild(outside);
  });

  it('funciona com touchstart', () => {
    const onOutside = jest.fn();
    render(<TestComponent onOutside={onOutside} />);

    const outside = document.createElement('div');
    document.body.appendChild(outside);

    const event = new TouchEvent('touchstart', { bubbles: true });
    outside.dispatchEvent(event);

    expect(onOutside).toHaveBeenCalled();

    document.body.removeChild(outside);
  });

  it('limpa event listeners ao desmontar', () => {
    const onOutside = jest.fn();
    const { unmount } = render(<TestComponent onOutside={onOutside} />);

    unmount();

    const outside = document.createElement('div');
    document.body.appendChild(outside);

    const event = new MouseEvent('mousedown', { bubbles: true });
    outside.dispatchEvent(event);

    expect(onOutside).not.toHaveBeenCalled();

    document.body.removeChild(outside);
  });

  it('não chama callback se ref.current é null', () => {
    const onOutside = jest.fn();
    const { container } = render(<div />);
    const ref = { current: null };

    // Simular hook com ref null
    const TestNullRef = () => {
      useClickOutside(ref, onOutside);
      return null;
    };

    render(<TestNullRef />);

    const outside = document.createElement('div');
    document.body.appendChild(outside);

    const event = new MouseEvent('mousedown', { bubbles: true });
    outside.dispatchEvent(event);

    expect(onOutside).not.toHaveBeenCalled();

    document.body.removeChild(outside);
  });
});
