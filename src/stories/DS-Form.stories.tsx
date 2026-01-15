import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Form } from '../design-system/components/Form';
import { FormField } from '../design-system/components/Form/FormField';
import { Input } from '../design-system/components/Input';
import { Textarea } from '../design-system/components/Textarea';
import { Button } from '../design-system/components/Button';
import { useForm } from '../design-system/hooks/useForm';

type Values = { nome: string; mensagem: string };

function FormDemo() {
  const form = useForm<Values>({
    initialValues: { nome: '', mensagem: '' },
    validate: (values) => ({
      nome: values.nome ? '' : 'Informe seu nome',
      mensagem: values.mensagem ? '' : 'Informe uma mensagem',
    }),
    onSubmit: async () => {
      // demo
    },
  });

  return (
    <Form onSubmit={form.handleSubmit} className="max-w-md space-y-4">
      <FormField label="Nome" htmlFor="nome" required error={form.touched.nome ? form.errors.nome : ''}>
        <Input
          id="nome"
          name="nome"
          value={form.values.nome}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          placeholder="Digite seu nome"
        />
      </FormField>

      <FormField label="Mensagem" htmlFor="mensagem" required error={form.touched.mensagem ? form.errors.mensagem : ''}>
        <Textarea
          id="mensagem"
          name="mensagem"
          value={form.values.mensagem}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          placeholder="Digite sua mensagem"
        />
      </FormField>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="ghost" onClick={form.reset}>
          Limpar
        </Button>
        <Button type="submit" disabled={form.submitting}>
          Enviar
        </Button>
      </div>
    </Form>
  );
}

const meta = {
  title: 'Design System/Form',
  component: FormDemo,
} satisfies Meta<typeof FormDemo>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

