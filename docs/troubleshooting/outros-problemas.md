# Outros Problemas Comuns

Este documento lista outros problemas comuns que podem ocorrer durante o desenvolvimento e suas soluções.

## 📋 Problemas Documentados

### Problema: Dependências não instaladas

**Sintoma**: Erros ao executar `npm run dev` ou outros comandos.

**Solução**:
```bash
npm install
```

### Problema: Erros de TypeScript

**Sintoma**: Erros de tipo no editor ou durante o build.

**Solução**:
```bash
# Verificar erros
npm run build

# Limpar cache do TypeScript
rm -rf .next
npm run build
```

### Problema: Cache do Next.js corrompido

**Sintoma**: Comportamento estranho, erros inesperados.

**Solução**:
```bash
# Limpar cache
rm -rf .next
npm run dev
```

### Problema: Porta já em uso (outras portas)

**Sintoma**: Erro ao iniciar servidor em porta diferente de 3000.

**Solução**:
```bash
# Usar outra porta
npm run dev -- -p 3001
```

## 💡 Dicas Gerais

- Sempre verifique os logs do console para mensagens de erro
- Consulte a documentação oficial do Next.js para problemas específicos
- Verifique se todas as dependências estão atualizadas
- Use `npm run lint` para verificar problemas de código

## 📚 Recursos

- [Next.js Troubleshooting](https://nextjs.org/docs/app/building-your-application/troubleshooting)
- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)

---

**Última atualização:** 2024
