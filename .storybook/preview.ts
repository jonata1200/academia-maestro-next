import type { Preview } from '@storybook/nextjs-vite'

const preview: Preview = {
  parameters: {
    // Configuração de controles
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true, // Expandir controles por padrão
    },

    // Configuração de backgrounds
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1a1a1a',
        },
        {
          name: 'gray',
          value: '#f4f4f4',
        },
      ],
    },

    // Layout padrão
    layout: 'centered',

    // Configuração de acessibilidade
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },

    // Configuração de viewports
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '800px',
          },
        },
      },
    },
  },
};

export default preview;