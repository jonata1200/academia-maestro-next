import { renderHook, act } from '@testing-library/react';
import { useModal } from '@design-system/hooks/useModal';

describe('useModal', () => {
  it('abre e fecha', () => {
    const { result } = renderHook(() => useModal(false));

    expect(result.current.open).toBe(false);

    act(() => result.current.onOpen());
    expect(result.current.open).toBe(true);

    act(() => result.current.onClose());
    expect(result.current.open).toBe(false);
  });
});

