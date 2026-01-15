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
- [ ] Listar todas as funções utilitárias no projeto
- [ ] Listar todos os hooks customizados
- [ ] Identificar funções utilitárias em componentes (extrair se necessário)
- [ ] Identificar lógica de negócio que pode ser testada isoladamente

### 2. Testes de Funções Utilitárias de Formatação
- [ ] Criar arquivo `src/__tests__/utils/formatting.test.ts`
- [ ] Testar funções de formatação de data (se houver)
- [ ] Testar funções de formatação de telefone (se houver)
- [ ] Testar funções de formatação de moeda (se houver)
- [ ] Testar funções de formatação de texto
- [ ] Testar edge cases (valores nulos, undefined, strings vazias)
- [ ] Testar valores inválidos

### 3. Testes de Funções Utilitárias de Validação
- [ ] Criar arquivo `src/__tests__/utils/validation.test.ts`
- [ ] Testar validação de email (se houver)
- [ ] Testar validação de telefone (se houver)
- [ ] Testar validação de CPF/CNPJ (se houver)
- [ ] Testar outras validações específicas do domínio
- [ ] Testar casos válidos e inválidos
- [ ] Testar edge cases

### 4. Testes de Funções Utilitárias de Manipulação de Dados
- [ ] Criar arquivo `src/__tests__/utils/data.test.ts`
- [ ] Testar funções de transformação de dados
- [ ] Testar funções de filtro
- [ ] Testar funções de ordenação
- [ ] Testar funções de agrupamento
- [ ] Testar funções de busca
- [ ] Testar arrays vazios, null, undefined

### 5. Testes de Funções Utilitárias de Strings
- [ ] Criar arquivo `src/__tests__/utils/strings.test.ts`
- [ ] Testar funções de capitalização
- [ ] Testar funções de truncate
- [ ] Testar funções de slugify (se houver)
- [ ] Testar funções de sanitização
- [ ] Testar edge cases

### 6. Testes de Funções Utilitárias de URLs
- [ ] Criar arquivo `src/__tests__/utils/urls.test.ts`
- [ ] Testar construção de URLs do WhatsApp
- [ ] Testar construção de URLs do Google Maps
- [ ] Testar parsing de URLs (se houver)
- [ ] Testar validação de URLs
- [ ] Testar edge cases

### 7. Testes de Funções Utilitárias de LocalStorage
- [ ] Criar arquivo `src/__tests__/utils/storage.test.ts`
- [ ] Testar funções de get/set do localStorage
- [ ] Testar funções de remove/clear
- [ ] Testar tratamento de erros (quota exceeded, etc.)
- [ ] Mockar localStorage para testes
- [ ] Testar serialização/deserialização de objetos

### 8. Testes de Hooks Customizados - useScroll
- [ ] Criar arquivo `src/__tests__/hooks/useScroll.test.ts`
- [ ] Testar detecção de scroll
- [ ] Testar threshold de scroll
- [ ] Testar cleanup do event listener
- [ ] Usar `@testing-library/react-hooks` ou `renderHook`

### 9. Testes de Hooks Customizados - useMenu
- [ ] Criar arquivo `src/__tests__/hooks/useMenu.test.ts`
- [ ] Testar abertura/fechamento do menu
- [ ] Testar controle de scroll do body
- [ ] Testar cleanup

### 10. Testes de Hooks do Design System
- [ ] Testar `useModal` hook
  - [ ] Testar abertura/fechamento
  - [ ] Testar estado
  - [ ] Testar callbacks
- [ ] Testar `useToast` hook
  - [ ] Testar adicionar toast
  - [ ] Testar remover toast
  - [ ] Testar auto-dismiss
- [ ] Testar `useForm` hook
  - [ ] Testar valores iniciais
  - [ ] Testar onChange
  - [ ] Testar validação
  - [ ] Testar submit
  - [ ] Testar reset
- [ ] Testar `useClickOutside` hook
  - [ ] Testar detecção de clique fora
  - [ ] Testar callback
  - [ ] Testar cleanup
- [ ] Testar `useKeyboard` hook
  - [ ] Testar detecção de teclas
  - [ ] Testar callbacks
  - [ ] Testar cleanup

### 11. Testes de Helpers de Teste
- [ ] Se houver helpers de teste, testá-los também
- [ ] Garantir que helpers funcionam corretamente
- [ ] Documentar uso dos helpers

### 12. Testes de Constantes e Configurações
- [ ] Testar constantes de configuração
- [ ] Testar que valores estão corretos
- [ ] Testar tipos TypeScript

### 13. Padrões de Teste para Utilitários
- [ ] Usar testes descritivos (describe/it)
- [ ] Agrupar testes relacionados
- [ ] Testar casos felizes e casos de erro
- [ ] Testar edge cases
- [ ] Usar tabelas de teste (test.each) quando apropriado

### 14. Padrões de Teste para Hooks
- [ ] Usar `renderHook` do React Testing Library
- [ ] Testar estado inicial
- [ ] Testar mudanças de estado
- [ ] Testar efeitos colaterais
- [ ] Testar cleanup
- [ ] Testar dependências de hooks

### 15. Mocking para Testes de Utilitários
- [ ] Mockar APIs do browser (localStorage, window, etc.)
- [ ] Mockar dependências externas
- [ ] Usar spies quando necessário
- [ ] Limpar mocks após cada teste

### 16. Testes de Performance (Opcional)
- [ ] Identificar funções críticas de performance
- [ ] Adicionar testes de performance básicos
- [ ] Documentar benchmarks

### 17. Cobertura de Código
- [ ] Alcançar pelo menos 90% de cobertura para utilitários
- [ ] Identificar branches não cobertos
- [ ] Adicionar testes para todos os caminhos de código
- [ ] Testar tratamento de erros

### 18. Documentação
- [ ] Documentar padrões de teste para utilitários
- [ ] Documentar padrões de teste para hooks
- [ ] Adicionar exemplos de testes complexos
- [ ] Documentar como mockar dependências

### 19. Validação
- [ ] Executar todos os testes e garantir que passam
- [ ] Verificar relatório de cobertura
- [ ] Validar que testes são rápidos
- [ ] Validar que testes são determinísticos

### 20. Refatoração e Melhorias
- [ ] Identificar código duplicado nos testes
- [ ] Extrair helpers comuns
- [ ] Melhorar legibilidade dos testes
- [ ] Adicionar comentários quando necessário

## 📝 Notas
- Utilitários devem ter alta cobertura de testes (90%+)
- Testar edge cases é crucial para utilitários
- Hooks devem testar comportamento, não implementação
- Tempo estimado: 1-2 semanas

## 🔗 Próxima Fase
Após completar esta fase, seguir para: [Fase 8: Setup e Configuração de Testes de Integração](./fase-08-setup-testes-integracao.md)
