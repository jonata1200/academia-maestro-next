import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, FormField } from '@design-system/components';
import { Input } from '@design-system/components';
import { useForm } from '@design-system/hooks/useForm';

function FormTestWrapper() {
  const form = useForm({
    initialValues: { nome: '' },
    validate: (values) => ({
      nome: values.nome ? '' : 'Nome obrigatório',
    }),
    onSubmit: jest.fn(),
  });

  return (
    <Form onSubmit={form.handleSubmit}>
      <FormField label="Nome" htmlFor="nome" required error={form.errors.nome}>
        <Input
          id="nome"
          name="nome"
          value={form.values.nome}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
      </FormField>
    </Form>
  );
}

describe('Form', () => {
  it('renderiza formulário', () => {
    const { container } = render(
      <Form>
        <Input id="test" />
      </Form>
    );
    expect(container.querySelector('form')).toBeInTheDocument();
  });

  it('chama onSubmit ao submeter', async () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    const user = userEvent.setup();
    render(
      <Form onSubmit={handleSubmit}>
        <button type="submit">Enviar</button>
      </Form>
    );
    
    await user.click(screen.getByRole('button', { name: 'Enviar' }));
    expect(handleSubmit).toHaveBeenCalled();
  });
});

describe('FormField', () => {
  it('renderiza label', () => {
    render(
      <FormField label="Nome" htmlFor="nome">
        <Input id="nome" />
      </FormField>
    );
    expect(screen.getByText('Nome')).toBeInTheDocument();
  });

  it('exibe indicador required', () => {
    render(
      <FormField label="Nome" htmlFor="nome" required>
        <Input id="nome" />
      </FormField>
    );
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('exibe mensagem de erro', () => {
    render(
      <FormField label="Nome" htmlFor="nome" error="Campo obrigatório">
        <Input id="nome" />
      </FormField>
    );
    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
  });

  it('exibe helper text', () => {
    render(
      <FormField label="Nome" htmlFor="nome" helperText="Digite seu nome">
        <Input id="nome" />
      </FormField>
    );
    expect(screen.getByText('Digite seu nome')).toBeInTheDocument();
  });
});
