import { renderHook, act } from '@testing-library/react';
import { useModal } from '@design-system/hooks/useModal';

describe('useModal', () => {
  it('inicia fechado por padrão', () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.open).toBe(false);
  });

  it('inicia com estado inicial especificado', () => {
    const { result } = renderHook(() => useModal(true));
    expect(result.current.open).toBe(true);
  });

  it('abre com onOpen', () => {
    const { result } = renderHook(() => useModal(false));
    expect(result.current.open).toBe(false);

    act(() => result.current.onOpen());
    expect(result.current.open).toBe(true);
  });

  it('fecha com onClose', () => {
    const { result } = renderHook(() => useModal(true));
    expect(result.current.open).toBe(true);

    act(() => result.current.onClose());
    expect(result.current.open).toBe(false);
  });

  it('alterna com onToggle', () => {
    const { result } = renderHook(() => useModal(false));
    expect(result.current.open).toBe(false);

    act(() => result.current.onToggle());
    expect(result.current.open).toBe(true);

    act(() => result.current.onToggle());
    expect(result.current.open).toBe(false);
  });

  it('permite setOpen direto', () => {
    const { result } = renderHook(() => useModal(false));
    expect(result.current.open).toBe(false);

    act(() => result.current.setOpen(true));
    expect(result.current.open).toBe(true);

    act(() => result.current.setOpen(false));
    expect(result.current.open).toBe(false);
  });
});
