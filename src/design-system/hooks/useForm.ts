'use client';

import { useCallback, useMemo, useState } from 'react';

export type Validator<TValues> = (values: TValues) => Partial<Record<keyof TValues, string>>;

export function useForm<TValues extends Record<string, unknown>>(options: {
  initialValues: TValues;
  validate?: Validator<TValues>;
  onSubmit: (values: TValues) => void | Promise<void>;
}) {
  const { initialValues, validate, onSubmit } = options;

  const [values, setValues] = useState<TValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof TValues, boolean>>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof TValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const runValidate = useCallback(
    (nextValues: TValues) => {
      const nextErrors = validate ? validate(nextValues) : {};
      setErrors(nextErrors);
      return nextErrors;
    },
    [validate]
  );

  const setFieldValue = useCallback(<K extends keyof TValues>(name: K, value: TValues[K]) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const setFieldTouched = useCallback(<K extends keyof TValues>(name: K, isTouched = true) => {
    setTouched((prev) => ({ ...prev, [name]: isTouched }));
  }, []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = event.target;
      const nextValue = type === 'checkbox' ? (event.target as HTMLInputElement).checked : value;
      setValues((prev) => ({ ...prev, [name]: nextValue }));
    },
    []
  );

  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name } = event.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (event?: React.FormEvent) => {
      event?.preventDefault();
      const nextErrors = runValidate(values);
      const hasErrors = Object.values(nextErrors).some(Boolean);
      if (hasErrors) return;

      setSubmitting(true);
      try {
        await onSubmit(values);
      } finally {
        setSubmitting(false);
      }
    },
    [onSubmit, runValidate, values]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setTouched({});
    setErrors({});
    setSubmitting(false);
  }, [initialValues]);

  const isValid = useMemo(() => !Object.values(errors).some(Boolean), [errors]);

  return {
    values,
    setValues,
    touched,
    errors,
    submitting,
    isValid,
    setFieldValue,
    setFieldTouched,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    validate: runValidate,
  } as const;
}

