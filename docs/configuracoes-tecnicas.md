# 🔧 Configurações Técnicas e Notas Importantes

Este documento contém configurações técnicas recomendadas e notas importantes para a migração para Tailwind CSS.

---

## 📋 Configurações Recomendadas

### `tailwind.config.ts` (Exemplo Completo)

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0000FF',
        secondary: '#FFFFFF',
        'text-color': '#333',
        'text-light': '#555',
        'light-gray': '#f4f4f4',
        'dark-blue': '#000033',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        container: '1100px',
      },
      // Animações customizadas (se necessário)
      keyframes: {
        scroll: {
          'to': { transform: 'translate(calc(-50% - 10px))' }
        }
      },
      animation: {
        scroll: 'scroll 40s linear infinite'
      }
    },
  },
  plugins: [
    // Adicionar plugins se necessário
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}
export default config
```

### `postcss.config.js` (Exemplo)

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### `globals.css` (Estrutura Recomendada)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Manter variáveis CSS se necessário para compatibilidade */
  --primary-color: #0000FF;
  --secondary-color: #FFFFFF;
  --text-color: #333;
  --text-light: #555;
  --light-gray: #f4f4f4;
  --dark-blue: #000033;
  --font-family: 'Poppins', sans-serif;
}

/* Estilos globais que não podem ser substituídos por Tailwind */
body {
  font-family: var(--font-family);
  color: var(--text-color);
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}

main {
  flex-grow: 1;
}

/* Animações customizadas (se necessário) */
@keyframes scroll {
  to {
    transform: translate(calc(-50% - 10px));
  }
}
```

---

## 📝 Notas Importantes

### Animações e Keyframes

- **Animações complexas** podem precisar ser mantidas em CSS customizado
- Tailwind suporta animações customizadas via `tailwind.config.ts`
- Para animações de scroll infinito, considere usar CSS puro ou bibliotecas como `framer-motion`
- Exemplo de animação customizada:
  ```typescript
  // tailwind.config.ts
  theme: {
    extend: {
      keyframes: {
        scroll: {
          'to': { transform: 'translate(calc(-50% - 10px))' }
        }
      },
      animation: {
        scroll: 'scroll 40s linear infinite'
      }
    }
  }
  ```
  ```tsx
  // Uso no componente
  <div className="animate-scroll">...</div>
  ```

### Props Dinâmicas

- **Styled Components** usa props como `$isHomePageTop` e `$isOpen`
- **No Tailwind**, use classes condicionais baseadas no state do React
- Exemplo de conversão:
  ```tsx
  // Antes (Styled Components)
  <StyledHeader $isHomePageTop={isHomePageTop}>
  
  // Depois (Tailwind)
  <header className={isHomePageTop ? 'bg-transparent border-transparent' : 'bg-white border-gray-200'}>
  ```
- Para múltiplas condições, use template literals ou bibliotecas como `clsx` ou `classnames`:
  ```tsx
  import clsx from 'clsx'
  
  <header className={clsx(
    'fixed top-0 left-0 w-full z-50',
    isHomePageTop ? 'bg-transparent' : 'bg-white',
    isMenuOpen && 'overflow-hidden'
  )}>
  ```

### Variáveis CSS

- As variáveis CSS existentes podem ser mantidas para compatibilidade
- Ou migradas para o tema do Tailwind para melhor integração
- Para usar variáveis CSS no Tailwind:
  ```css
  /* globals.css */
  :root {
    --primary-color: #0000FF;
  }
  ```
  ```tsx
  // No componente
  <div className="bg-[var(--primary-color)]">
  ```
- Ou configure no tema do Tailwind:
  ```typescript
  // tailwind.config.ts
  theme: {
    extend: {
      colors: {
        primary: '#0000FF',
      }
    }
  }
  ```
  ```tsx
  // No componente
  <div className="bg-primary">
  ```

### Performance

- Tailwind faz purge automático de classes não utilizadas em produção
- Isso resulta em bundles menores comparado ao Styled Components
- Verifique o tamanho do bundle antes e depois da migração
- Para garantir que todas as classes são detectadas:
  ```typescript
  // tailwind.config.ts
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  ```
- Classes dinâmicas podem não ser detectadas. Use safelist se necessário:
  ```typescript
  safelist: [
    'bg-primary',
    'text-primary',
    // ou padrões
    {
      pattern: /bg-(primary|secondary)/,
    }
  ]
  ```

### Responsividade

- Tailwind usa breakpoints mobile-first por padrão
- Use prefixos: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- O projeto atual usa `@media (max-width: 768px)`, equivalente a `md:` no Tailwind
- Breakpoints padrão do Tailwind:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px
- Exemplo de uso:
  ```tsx
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
  ```

### Background Images

- Background images podem ser mantidas inline ou movidas para CSS
- Tailwind suporta background images via `bg-[url(...)]`:
  ```tsx
  <div className="bg-[url('/image.jpg')] bg-cover bg-center">
  ```
- Ou use classes customizadas no `globals.css`:
  ```css
  .bg-hero {
    background-image: url('/hero.jpg');
    background-size: cover;
    background-position: center;
  }
  ```

### Gradientes

- Tailwind tem suporte nativo para gradientes
- Use `bg-gradient-to-[direction]` e `from-[color]`, `via-[color]`, `to-[color]`:
  ```tsx
  <div className="bg-gradient-to-r from-blue-500 to-purple-500">
  ```
- Para gradientes com opacidade:
  ```tsx
  <div className="bg-gradient-to-b from-black/80 via-black/60 to-black/80">
  ```

### Hover Effects Complexos

- Para hover effects que afetam elementos filhos, use `group` e `group-hover:`:
  ```tsx
  <div className="group">
    <div className="group-hover:scale-110 transition-transform">
      <img src="..." />
    </div>
    <div className="group-hover:text-primary">
      Texto
    </div>
  </div>
  ```

### Plugins Úteis

- **@tailwindcss/forms**: Estiliza formulários automaticamente
  ```bash
  npm install -D @tailwindcss/forms
  ```
  ```typescript
  // tailwind.config.ts
  plugins: [
    require('@tailwindcss/forms'),
  ]
  ```

- **@tailwindcss/typography**: Estiliza conteúdo de markdown/prose
  ```bash
  npm install -D @tailwindcss/typography
  ```
  ```typescript
  // tailwind.config.ts
  plugins: [
    require('@tailwindcss/typography'),
  ]
  ```
  ```tsx
  <article className="prose prose-lg">
    {/* Conteúdo markdown */}
  </article>
  ```

---

## 🔗 Links Úteis

- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Tailwind CSS com Next.js](https://tailwindcss.com/docs/guides/nextjs)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (Extensão VS Code)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

---

**Voltar ao plano principal**: [Plano de Migração](./plano-migracao-tailwind.md)

