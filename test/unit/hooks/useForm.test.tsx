import { renderHook, act } from '@testing-library/react';
import { useForm } from '@design-system/hooks/useForm';

describe('useForm', () => {
  const initialValues = { name: '', email: '' };
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it('inicia com valores iniciais', () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues,
        onSubmit: mockOnSubmit,
      })
    );

    expect(result.current.values).toEqual(initialValues);
    expect(result.current.errors).toEqual({});
    expect(result.current.touched).toEqual({});
    expect(result.current.submitting).toBe(false);
  });

  it('atualiza valores com handleChange', () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues,
        onSubmit: mockOnSubmit,
      })
    );

    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values.name).toBe('John');
  });

  it('marca campo como touched com handleBlur', () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues,
        onSubmit: mockOnSubmit,
      })
    );

    act(() => {
      result.current.handleBlur({
        target: { name: 'name' },
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.touched.name).toBe(true);
  });

  it('valida valores com função validate', () => {
    const validate = jest.fn((values) => ({
      name: values.name ? '' : 'Nome obrigatório',
    }));

    const { result } = renderHook(() =>
      useForm({
        initialValues,
        validate,
        onSubmit: mockOnSubmit,
      })
    );

    act(() => {
      result.current.handleSubmit();
    });

    expect(validate).toHaveBeenCalledWith(initialValues);
    expect(result.current.errors.name).toBe('Nome obrigatório');
  });

  it('não submete se houver erros', async () => {
    const validate = jest.fn((values) => ({
      name: values.name ? '' : 'Nome obrigatório',
    }));

    const { result } = renderHook(() =>
      useForm({
        initialValues,
        validate,
        onSubmit: mockOnSubmit,
      })
    );

    await act(async () => {
      await result.current.handleSubmit();
    });

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('submete se não houver erros', async () => {
    mockOnSubmit.mockResolvedValue(undefined);

    const { result } = renderHook(() =>
      useForm({
        initialValues: { name: 'John', email: 'john@example.com' },
        onSubmit: mockOnSubmit,
      })
    );

    await act(async () => {
      await result.current.handleSubmit();
    });

    expect(mockOnSubmit).toHaveBeenCalledWith({ name: 'John', email: 'john@example.com' });
  });

  it('define submitting durante submit', async () => {
    let resolveSubmit: () => void;
    const promise = new Promise<void>((resolve) => {
      resolveSubmit = resolve;
    });

    mockOnSubmit.mockReturnValue(promise);

    const { result } = renderHook(() =>
      useForm({
        initialValues: { name: 'John' },
        onSubmit: mockOnSubmit,
      })
    );

    act(() => {
      result.current.handleSubmit();
    });

    expect(result.current.submitting).toBe(true);

    await act(async () => {
      resolveSubmit!();
      await promise;
    });

    expect(result.current.submitting).toBe(false);
  });

  it('reseta formulário com reset', () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues,
        onSubmit: mockOnSubmit,
      })
    );

    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John' },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleBlur({
        target: { name: 'name' },
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.values.name).toBe('John');
    expect(result.current.touched.name).toBe(true);

    act(() => {
      result.current.reset();
    });

    expect(result.current.values).toEqual(initialValues);
    expect(result.current.touched).toEqual({});
    expect(result.current.errors).toEqual({});
    expect(result.current.submitting).toBe(false);
  });

  it('atualiza campo com setFieldValue', () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues,
        onSubmit: mockOnSubmit,
      })
    );

    act(() => {
      result.current.setFieldValue('name', 'John');
    });

    expect(result.current.values.name).toBe('John');
  });

  it('marca campo como touched com setFieldTouched', () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues,
        onSubmit: mockOnSubmit,
      })
    );

    act(() => {
      result.current.setFieldTouched('name', true);
    });

    expect(result.current.touched.name).toBe(true);
  });

  it('isValid retorna false quando há erros', () => {
    const validate = jest.fn((values) => ({
      name: values.name ? '' : 'Nome obrigatório',
    }));

    const { result } = renderHook(() =>
      useForm({
        initialValues,
        validate,
        onSubmit: mockOnSubmit,
      })
    );

    act(() => {
      result.current.handleSubmit();
    });

    expect(result.current.isValid).toBe(false);
  });

  it('isValid retorna true quando não há erros', () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues: { name: 'John' },
        onSubmit: mockOnSubmit,
      })
    );

    expect(result.current.isValid).toBe(true);
  });

  it('previne default do evento no handleSubmit', () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues: { name: 'John' },
        onSubmit: mockOnSubmit,
      })
    );

    const event = {
      preventDefault: jest.fn(),
    } as unknown as React.FormEvent;

    act(() => {
      result.current.handleSubmit(event);
    });

    expect(event.preventDefault).toHaveBeenCalled();
  });
});
