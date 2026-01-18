# Fase 1: Limpeza e Organização do Projeto

## Objetivo
Remover arquivos padrão do Storybook que não pertencem ao projeto e identificar/remover arquivos e pastas vazias ou desnecessárias.

## Checklist de Ações

### 1. Remover arquivos padrão do Storybook
- [x] Remover `src/stories/Button.tsx` (componente padrão do Storybook)
- [x] Remover `src/stories/Button.stories.ts` (story padrão)
- [x] Remover `src/stories/button.css` (estilo padrão)
- [x] Remover `src/stories/Page.tsx` (componente padrão)
- [x] Remover `src/stories/Page.stories.ts` (story padrão)
- [x] Remover `src/stories/page.css` (estilo padrão)
- [x] Remover `src/stories/Header.tsx` (componente padrão)
- [x] Remover `src/stories/Header.stories.ts` (story padrão)
- [x] Remover `src/stories/header.css` (estilo padrão)
- [x] Remover `src/stories/Configure.mdx` (página de configuração padrão do Storybook)
- [x] Remover pasta `src/stories/assets/` inteira (assets padrão do Storybook)

### 2. Verificar e remover pastas vazias
- [x] Verificar se `src/design-system/docs/` está vazia e remover se necessário
- [x] Verificar outras pastas vazias no projeto
- [x] Documentar pastas removidas

### 3. Verificar arquivos de assets padrão do Storybook
- [x] Verificar quais assets em `src/stories/assets/` são necessários (se houver)
- [x] Remover assets não utilizados:
  - [x] `github.svg` (se não usado) - removido com pasta assets/
  - [x] `discord.svg` (se não usado) - removido com pasta assets/
  - [x] `youtube.svg` (se não usado) - removido com pasta assets/
  - [x] `tutorials.svg` (se não usado) - removido com pasta assets/
  - [x] `styling.png` (se não usado) - removido com pasta assets/
  - [x] `context.png` (se não usado) - removido com pasta assets/
  - [x] `assets.png` (se não usado) - removido com pasta assets/
  - [x] `docs.png` (se não usado) - removido com pasta assets/
  - [x] `share.png` (se não usado) - removido com pasta assets/
  - [x] `figma-plugin.png` (se não usado) - removido com pasta assets/
  - [x] `testing.png` (se não usado) - removido com pasta assets/
  - [x] `accessibility.png` (se não usado) - removido com pasta assets/
  - [x] `theming.png` (se não usado) - removido com pasta assets/
  - [x] `addon-library.png` (se não usado) - removido com pasta assets/
  - [x] `avif-test-image.avif` (se não usado) - removido com pasta assets/

### 4. Limpar arquivos de build/test gerados
- [x] Verificar se pasta `coverage/` deve ser mantida (geralmente no .gitignore) - pasta coverage/ está no .gitignore, não precisa remover
- [x] Verificar outros arquivos temporários gerados - sem outros arquivos temporários para remover

### 5. Verificar arquivos de configuração
- [x] Confirmar que todos os arquivos de configuração são necessários - todos são necessários
- [x] Verificar se há duplicação de configurações - sem duplicações encontradas

## Arquivos a Remover

### Storybook Padrão
- `src/stories/Button.tsx`
- `src/stories/Button.stories.ts`
- `src/stories/button.css`
- `src/stories/Page.tsx`
- `src/stories/Page.stories.ts`
- `src/stories/page.css`
- `src/stories/Header.tsx`
- `src/stories/Header.stories.ts`
- `src/stories/header.css`
- `src/stories/Configure.mdx`
- `src/stories/assets/` (pasta inteira)

### Pastas Vazias
- `src/design-system/docs/` (verificar se está vazia)

## Notas
- Antes de remover, fazer backup ou commit no git
- Verificar se algum dos arquivos padrão foi modificado para uso no projeto
- Manter apenas stories que documentam componentes do design system (DS-*.stories.tsx)
- Manter `GettingStarted.mdx` e `Tokens.mdx` que são documentação personalizada

## Resultado Esperado
Após esta fase, o diretório `src/stories/` deve conter apenas:
- Stories do design system (DS-*.stories.tsx)
- Documentação personalizada (GettingStarted.mdx, Tokens.mdx)
- Sem arquivos padrão do Storybook
- Sem pastas vazias
