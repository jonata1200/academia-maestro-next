# 🔧 FASE 1: Preparação e Configuração Inicial

## 📋 Objetivo

Configurar o Tailwind CSS no projeto sem quebrar a aplicação atual.

**Estimativa de tempo**: 2-4 horas  
**Status**: ✅ Concluída

---

## ✅ Checklist

- [x] **1.1** Instalar dependências do Tailwind CSS
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  ```

- [x] **1.2** Inicializar configuração do Tailwind
  ```bash
  npx tailwindcss init -p
  ```
  Isso criará os arquivos `tailwind.config.ts` e `postcss.config.js`

- [x] **1.3** Configurar `tailwind.config.ts`
  - Definir content paths para escanear arquivos TypeScript/TSX:
    ```typescript
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ]
    ```
  - Configurar tema customizado com as cores do projeto:
    - `primary-color: #0000FF`
    - `secondary-color: #FFFFFF`
    - `text-color: #333`
    - `text-light: #555`
    - `light-gray: #f4f4f4`
    - `dark-blue: #000033`
  - Configurar font-family: 'Poppins', sans-serif
  - Adicionar breakpoints customizados se necessário
  - Ver exemplo completo em [configuracoes-tecnicas.md](./configuracoes-tecnicas.md)

- [x] **1.4** Configurar `postcss.config.js`
  - Adicionar plugins: tailwindcss e autoprefixer
  - Ver exemplo completo em [configuracoes-tecnicas.md](./configuracoes-tecnicas.md)

- [x] **1.5** Atualizar `src/app/globals.css`
  - Adicionar diretivas do Tailwind no topo do arquivo:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
  - Manter variáveis CSS existentes (ou migrar para tema do Tailwind)
  - Manter estilos globais que não podem ser substituídos por Tailwind
  - Ver exemplo completo em [configuracoes-tecnicas.md](./configuracoes-tecnicas.md)

- [x] **1.6** Verificar que o projeto ainda compila sem erros
  ```bash
  npm run build
  ```
  - Verificar que não há erros de compilação
  - Verificar que não há warnings críticos

- [ ] **1.7** Testar visualmente que nada quebrou
  - Executar `npm run dev`
  - Verificar todas as páginas:
    - [ ] Home page
    - [ ] Página Sobre Nós
    - [ ] Página Instrumentos
    - [ ] Página Contato
    - [ ] Página Manutenção
    - [ ] Páginas de Políticas
  - Verificar que os estilos atuais (Styled Components) ainda estão funcionando
  - Verificar que não há conflitos visuais

---

## 📝 Notas Importantes

- Esta fase **não remove** o Styled Components, apenas adiciona o Tailwind CSS
- O projeto deve continuar funcionando normalmente com ambos os sistemas coexistindo
- Se houver conflitos, verifique a ordem de importação no `layout.tsx`
- As variáveis CSS podem ser mantidas para compatibilidade durante a migração

---

## ✅ Critérios de Conclusão

Esta fase está completa quando:

- ✅ Tailwind CSS está instalado e configurado
- ✅ Projeto compila sem erros
- ✅ Todas as páginas funcionam visualmente como antes
- ✅ Não há conflitos entre Styled Components e Tailwind CSS

---

**Próxima fase**: [FASE 2: Migração de Componentes Base](./fase-2-componentes-base.md)

