import { renderHook } from '@testing-library/react';
import { useKeyboard } from '@design-system/hooks/useKeyboard';

describe('useKeyboard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('chama callback quando tecla pressionada', () => {
    const onKeyDown = jest.fn();
    renderHook(() => useKeyboard('Escape', onKeyDown));

    const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
    window.dispatchEvent(event);

    expect(onKeyDown).toHaveBeenCalledWith(event);
  });

  it('não chama callback para tecla diferente', () => {
    const onKeyDown = jest.fn();
    renderHook(() => useKeyboard('Escape', onKeyDown));

    const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
    window.dispatchEvent(event);

    expect(onKeyDown).not.toHaveBeenCalled();
  });

  it('funciona com array de teclas', () => {
    const onKeyDown = jest.fn();
    renderHook(() => useKeyboard(['Escape', 'Enter'], onKeyDown));

    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
    window.dispatchEvent(escapeEvent);
    expect(onKeyDown).toHaveBeenCalledWith(escapeEvent);

    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
    window.dispatchEvent(enterEvent);
    expect(onKeyDown).toHaveBeenCalledWith(enterEvent);
  });

  it('não chama callback quando disabled', () => {
    const onKeyDown = jest.fn();
    renderHook(() => useKeyboard('Escape', onKeyDown, false));

    const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
    window.dispatchEvent(event);

    expect(onKeyDown).not.toHaveBeenCalled();
  });

  it('limpa event listener ao desmontar', () => {
    const onKeyDown = jest.fn();
    const { unmount } = renderHook(() => useKeyboard('Escape', onKeyDown));

    unmount();

    const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
    window.dispatchEvent(event);

    expect(onKeyDown).not.toHaveBeenCalled();
  });

  it('atualiza quando keys mudam', () => {
    const onKeyDown = jest.fn();
    const { rerender } = renderHook(({ keys }) => useKeyboard(keys, onKeyDown), {
      initialProps: { keys: 'Escape' },
    });

    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
    window.dispatchEvent(escapeEvent);
    expect(onKeyDown).toHaveBeenCalled();

    onKeyDown.mockClear();

    rerender({ keys: 'Enter' });

    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
    window.dispatchEvent(enterEvent);
    expect(onKeyDown).toHaveBeenCalled();

    window.dispatchEvent(escapeEvent);
    expect(onKeyDown).toHaveBeenCalledTimes(1); // Só Enter foi chamado
  });

  it('atualiza quando enabled muda', () => {
    const onKeyDown = jest.fn();
    const { rerender } = renderHook(({ enabled }) => useKeyboard('Escape', onKeyDown, enabled), {
      initialProps: { enabled: true },
    });

    const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
    window.dispatchEvent(event);
    expect(onKeyDown).toHaveBeenCalled();

    onKeyDown.mockClear();

    rerender({ enabled: false });

    window.dispatchEvent(event);
    expect(onKeyDown).not.toHaveBeenCalled();
  });
});
