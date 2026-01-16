# Fase 7: Implementação de Testes Unitários - Utilitários e Hooks

## 📋 Objetivo
Escrever testes unitários para funções utilitárias, helpers e hooks customizados do projeto.

## 🎯 Entregáveis
- Testes unitários para todas as funções utilitárias
- Testes unitários para todos os hooks customizados
- Cobertura de código mínima de 90% para utilitários
- Documentação de padrões de teste

## ✅ Checklist de Ações

### 1. Identificação de Utilitários e Hooks
- [x] Listar todas as funções utilitárias no projeto
- [x] Listar todos os hooks customizados
- [x] Identificar funções utilitárias em componentes (extrair se necessário)
- [x] Identificar lógica de negócio que pode ser testada isoladamente

### 2. Testes de Funções Utilitárias de Formatação
- [x] Criar arquivo `src/__tests__/utils/formatting.test.ts` (N/A - não há funções de formatação no projeto)
- [x] Testar funções de formatação de data (se houver) (N/A)
- [x] Testar funções de formatação de telefone (se houver) (N/A)
- [x] Testar funções de formatação de moeda (se houver) (N/A)
- [x] Testar funções de formatação de texto (N/A)
- [x] Testar edge cases (valores nulos, undefined, strings vazias) (N/A)
- [x] Testar valores inválidos (N/A)

### 3. Testes de Funções Utilitárias de Validação
- [x] Criar arquivo `src/__tests__/utils/validation.test.ts` (N/A - não há funções de validação no projeto)
- [x] Testar validação de email (se houver) (N/A)
- [x] Testar validação de telefone (se houver) (N/A)
- [x] Testar validação de CPF/CNPJ (se houver) (N/A)
- [x] Testar outras validações específicas do domínio (N/A)
- [x] Testar casos válidos e inválidos (N/A)
- [x] Testar edge cases (N/A)

### 4. Testes de Funções Utilitárias de Manipulação de Dados
- [x] Criar arquivo `src/__tests__/utils/data.test.ts` (N/A - não há funções de manipulação de dados no projeto)
- [x] Testar funções de transformação de dados (N/A)
- [x] Testar funções de filtro (N/A)
- [x] Testar funções de ordenação (N/A)
- [x] Testar funções de agrupamento (N/A)
- [x] Testar funções de busca (N/A)
- [x] Testar arrays vazios, null, undefined (N/A)

### 5. Testes de Funções Utilitárias de Strings
- [x] Criar arquivo `src/__tests__/utils/strings.test.ts` (N/A - não há funções de strings no projeto)
- [x] Testar funções de capitalização (N/A)
- [x] Testar funções de truncate (N/A)
- [x] Testar funções de slugify (se houver) (N/A)
- [x] Testar funções de sanitização (N/A)
- [x] Testar edge cases (N/A)

### 6. Testes de Funções Utilitárias de URLs
- [x] Criar arquivo `src/__tests__/utils/urls.test.ts` (N/A - URLs são construídas inline nos componentes)
- [x] Testar construção de URLs do WhatsApp (N/A - feito inline)
- [x] Testar construção de URLs do Google Maps (N/A - feito inline)
- [x] Testar parsing de URLs (se houver) (N/A)
- [x] Testar validação de URLs (N/A)
- [x] Testar edge cases (N/A)

### 7. Testes de Funções Utilitárias de LocalStorage
- [x] Criar arquivo `src/__tests__/utils/storage.test.ts` (N/A - localStorage usado diretamente no CookieBanner)
- [x] Testar funções de get/set do localStorage (N/A - usado diretamente)
- [x] Testar funções de remove/clear (N/A)
- [x] Testar tratamento de erros (quota exceeded, etc.) (N/A)
- [x] Mockar localStorage para testes (já mockado nos testes do CookieBanner)
- [x] Testar serialização/deserialização de objetos (N/A)

### 8. Testes de Hooks Customizados - useScroll
- [x] Criar arquivo `src/__tests__/hooks/useScroll.test.ts` (N/A - não existe hook useScroll no projeto)
- [x] Testar detecção de scroll (N/A)
- [x] Testar threshold de scroll (N/A)
- [x] Testar cleanup do event listener (N/A)
- [x] Usar `@testing-library/react-hooks` ou `renderHook` (N/A)

### 9. Testes de Hooks Customizados - useMenu
- [x] Criar arquivo `src/__tests__/hooks/useMenu.test.ts` (N/A - não existe hook useMenu no projeto)
- [x] Testar abertura/fechamento do menu (N/A)
- [x] Testar controle de scroll do body (N/A)
- [x] Testar cleanup (N/A)

### 10. Testes de Hooks do Design System
- [x] Testar `useModal` hook
  - [x] Testar abertura/fechamento
  - [x] Testar estado
  - [x] Testar callbacks
- [x] Testar `useToast` hook
  - [x] Testar adicionar toast
  - [x] Testar remover toast
  - [x] Testar auto-dismiss
- [x] Testar `useForm` hook
  - [x] Testar valores iniciais
  - [x] Testar onChange
  - [x] Testar validação
  - [x] Testar submit
  - [x] Testar reset
- [x] Testar `useClickOutside` hook
  - [x] Testar detecção de clique fora
  - [x] Testar callback
  - [x] Testar cleanup
- [x] Testar `useKeyboard` hook
  - [x] Testar detecção de teclas
  - [x] Testar callbacks
  - [x] Testar cleanup

### 11. Testes de Helpers de Teste
- [x] Se houver helpers de teste, testá-los também
- [x] Garantir que helpers funcionam corretamente
- [x] Documentar uso dos helpers

### 12. Testes de Constantes e Configurações
- [x] Testar constantes de configuração (N/A - tokens são constantes, não precisam de testes unitários)
- [x] Testar que valores estão corretos (N/A)
- [x] Testar tipos TypeScript (validado pelo TypeScript compiler)

### 13. Padrões de Teste para Utilitários
- [x] Usar testes descritivos (describe/it)
- [x] Agrupar testes relacionados
- [x] Testar casos felizes e casos de erro
- [x] Testar edge cases
- [x] Usar tabelas de teste (test.each) quando apropriado

### 14. Padrões de Teste para Hooks
- [x] Usar `renderHook` do React Testing Library
- [x] Testar estado inicial
- [x] Testar mudanças de estado
- [x] Testar efeitos colaterais
- [x] Testar cleanup
- [x] Testar dependências de hooks

### 15. Mocking para Testes de Utilitários
- [x] Mockar APIs do browser (localStorage, window, etc.) (feito no jest.setup.ts)
- [x] Mockar dependências externas (Swiper, next/script, etc.)
- [x] Usar spies quando necessário (usado nos testes de hooks)
- [x] Limpar mocks após cada teste (feito automaticamente pelo Jest)

### 16. Testes de Performance (Opcional)
- [x] Identificar funções críticas de performance (N/A - não há funções críticas identificadas)
- [x] Adicionar testes de performance básicos (N/A)
- [x] Documentar benchmarks (N/A)

### 17. Cobertura de Código
- [x] Alcançar pelo menos 90% de cobertura para utilitários (cn tem cobertura completa)
- [x] Identificar branches não cobertos (todos os branches cobertos)
- [x] Adicionar testes para todos os caminhos de código (completo)
- [x] Testar tratamento de erros (testado nos hooks)

### 18. Documentação
- [x] Documentar padrões de teste para utilitários (documentado nos testes)
- [x] Documentar padrões de teste para hooks (documentado nos testes)
- [x] Adicionar exemplos de testes complexos (exemplos nos testes de hooks)
- [x] Documentar como mockar dependências (feito no jest.setup.ts)

### 19. Validação
- [x] Executar todos os testes e garantir que passam (119 testes passando)
- [x] Verificar relatório de cobertura (todos os utilitários e hooks cobertos)
- [x] Validar que testes são rápidos (execução rápida)
- [x] Validar que testes são determinísticos (todos determinísticos)

### 20. Refatoração e Melhorias
- [x] Identificar código duplicado nos testes (sem duplicação significativa)
- [x] Extrair helpers comuns (renderWithProviders criado)
- [x] Melhorar legibilidade dos testes (testes bem organizados)
- [x] Adicionar comentários quando necessário (comentários adicionados onde necessário)

## 📝 Notas
- Utilitários devem ter alta cobertura de testes (90%+) ✅
- Testar edge cases é crucial para utilitários ✅
- Hooks devem testar comportamento, não implementação ✅
- Tempo estimado: 1-2 semanas

## ✅ Status da Implementação

### Implementado:
- ✅ Testes completos para função utilitária `cn` (com test.each)
- ✅ Testes completos para todos os hooks do Design System:
  - `useModal` - 7 testes
  - `useToast` - 8 testes
  - `useForm` - 12 testes
  - `useClickOutside` - 6 testes
  - `useKeyboard` - 7 testes
- ✅ Testes para helpers de teste:
  - `renderWithProviders` - 3 testes
  - `createMockRouter` - 3 testes

### Total: 119 testes passando

### Não Aplicável ao Projeto:
- Funções de formatação (data, telefone, moeda) - não existem
- Funções de validação - não existem
- Funções de manipulação de dados - não existem
- Funções de strings - não existem
- Funções utilitárias de URLs - URLs construídas inline
- Funções utilitárias de localStorage - usado diretamente
- Hooks customizados (useScroll, useMenu) - não existem

## 🔗 Próxima Fase
Após completar esta fase, seguir para: [Fase 8: Setup e Configuração de Testes de Integração](./fase-08-setup-testes-integracao.md)
