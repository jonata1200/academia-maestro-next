import { renderHook, act, waitFor } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ToastProvider, useToast } from '@design-system/hooks/useToast';

function TestComponent() {
  const toast = useToast();
  return (
    <div>
      <button onClick={() => toast.push({ title: 'Test', description: 'Message' })}>Add Toast</button>
      <button onClick={() => toast.clear()}>Clear</button>
    </div>
  );
}

describe('useToast', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('lança erro se usado fora do provider', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => {
      renderHook(() => useToast());
    }).toThrow('useToast deve ser usado dentro de <ToastProvider />');
    consoleError.mockRestore();
  });

  it('adiciona toast com push', () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ({ children }) => <ToastProvider>{children}</ToastProvider>,
    });

    act(() => {
      result.current.push({ title: 'Test', description: 'Message' });
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].title).toBe('Test');
    expect(result.current.toasts[0].description).toBe('Message');
  });

  it('remove toast com remove', () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ({ children }) => <ToastProvider>{children}</ToastProvider>,
    });

    let toastId: string;
    act(() => {
      toastId = result.current.push({ title: 'Test' });
    });

    expect(result.current.toasts).toHaveLength(1);

    act(() => {
      result.current.remove(toastId!);
    });

    expect(result.current.toasts).toHaveLength(0);
  });

  it('limpa todos os toasts com clear', () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ({ children }) => <ToastProvider>{children}</ToastProvider>,
    });

    act(() => {
      result.current.push({ title: 'Test 1' });
      result.current.push({ title: 'Test 2' });
      result.current.push({ title: 'Test 3' });
    });

    expect(result.current.toasts).toHaveLength(3);

    act(() => {
      result.current.clear();
    });

    expect(result.current.toasts).toHaveLength(0);
  });

  it('remove toast automaticamente após durationMs', async () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ({ children }) => <ToastProvider>{children}</ToastProvider>,
    });

    act(() => {
      result.current.push({ title: 'Test', durationMs: 1000 });
    });

    expect(result.current.toasts).toHaveLength(1);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      expect(result.current.toasts).toHaveLength(0);
    });
  });

  it('não remove toast se durationMs for 0', () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ({ children }) => <ToastProvider>{children}</ToastProvider>,
    });

    act(() => {
      result.current.push({ title: 'Test', durationMs: 0 });
    });

    expect(result.current.toasts).toHaveLength(1);

    act(() => {
      jest.advanceTimersByTime(10000);
    });

    expect(result.current.toasts).toHaveLength(1);
  });

  it('usa durationMs padrão de 4000ms', () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ({ children }) => <ToastProvider>{children}</ToastProvider>,
    });

    act(() => {
      result.current.push({ title: 'Test' });
    });

    expect(result.current.toasts).toHaveLength(1);

    act(() => {
      jest.advanceTimersByTime(4000);
    });

    expect(result.current.toasts).toHaveLength(0);
  });

  it('gera IDs únicos para cada toast', () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ({ children }) => <ToastProvider>{children}</ToastProvider>,
    });

    let id1: string;
    let id2: string;

    act(() => {
      id1 = result.current.push({ title: 'Test 1' });
      id2 = result.current.push({ title: 'Test 2' });
    });

    expect(id1!).not.toBe(id2!);
  });
});
