# 🚀 Guia de Execução do Servidor - Academia Maestro

## Problema: Porta 3000 ocupada

Este projeto apresenta um problema crônico onde a porta 3000 fica ocupada após fechar o terminal. Isso acontece porque o Next.js 15 com Turbopack pode criar processos filhos que não são encerrados corretamente no Windows.

## Solução Recomendada ⭐ (PREVENTIVA)

**Use o script seguro que automaticamente libera a porta antes de iniciar:**

```bash
npm run dev:safe
```

Este comando:
- ✅ Verifica e libera a porta 3000 automaticamente
- ✅ Inicia o servidor imediatamente após
- ✅ Previne o problema antes que ocorra

## Solução Alternativa (Se a porta já estiver ocupada)

Execute o script de limpeza e depois inicie o servidor:

```bash
npm run kill:port
npm run dev
```

O script `kill:port` agora:
- ✅ Identifica **APENAS processos na porta 3000** (não mata outros projetos)
- ✅ Mostra informações detalhadas de cada processo
- ✅ Verifica se a porta foi realmente liberada

## Scripts Disponíveis

| Comando | Descrição | Quando Usar |
|---------|-----------|-------------|
| `npm run dev` | Inicia o servidor normalmente na porta 3000 | Uso normal |
| `npm run dev:safe` | ⭐ **Libera porta e inicia automaticamente** | **Recomendado** - previne o problema |
| `npm run kill:port` | Encerra apenas processos na porta 3000 | Quando a porta estiver ocupada |
| `npm run kill:all` | Encerra rapidamente todos os processos Node.js | Emergência (mata outros projetos) |
| `npm run clean:cache` | Remove cache do Next.js (.next) | Problemas de cache |
| `npm run clean:all` | Limpa processos + cache do Next.js | Limpeza completa |

## Procedimentos Passo a Passo

### 1. Iniciar o servidor (RECOMENDADO) ⭐
```bash
npm run dev:safe
```
Este é o método mais seguro e previne o problema automaticamente.

### 2. Iniciar o servidor (método tradicional)
```bash
npm run dev
```
Use apenas se tiver certeza de que a porta 3000 está livre.

### 3. Se a porta estiver ocupada
```bash
npm run kill:port
npm run dev
```

Você verá um feedback detalhado como:
```
Verificando processos na porta 3000...
Encontrados 1 processo(s) usando a porta 3000
  Encerrando processo ID: 1234 (node)
Aguardando 2 segundos para liberar a porta...
Porta 3000 liberada com sucesso!

Agora execute: npm run dev
```

### 4. Se as mudanças não aparecerem (limpar cache)
```bash
npm run clean:all
npm run dev:safe
```

### 5. Encerrar rapidamente (sem feedback detalhado)
```bash
npm run kill:all
npm run dev:safe
```

⚠️ **Atenção**: `kill:all` mata TODOS os processos Node.js, incluindo outros projetos que possam estar rodando.

## Diferenças Entre os Comandos de Limpeza

| Comando | Feedback | Velocidade | Quando Usar |
|---------|----------|------------|-------------|
| `dev:safe` | ✅ Automático | Rápido | **Uso diário recomendado** - previne o problema |
| `kill:port` | ✅ Detalhado | Médio | Quando a porta estiver ocupada e quiser ver detalhes |
| `kill:all` | ⚡ Mínimo | Rápido | Emergência (mata outros projetos também) |
| `clean:all` | ✅ Confirmação | Médio | Quando tiver problemas de cache também |

## 🔍 Sobre o Problema

Este projeto usa **Next.js 15.5.2 com Turbopack**, que pode criar processos filhos que não são encerrados corretamente no Windows quando o terminal é fechado. Para mais detalhes técnicos, consulte [`docs/PROBLEMA-PORTA-3000.md`](docs/PROBLEMA-PORTA-3000.md).

## Arquivos de Script

Os scripts PowerShell estão localizados em:
- `scripts/kill-port-3000.ps1` - Script principal de limpeza com feedback

## Verificação Manual da Porta

Para verificar se a porta 3000 está ocupada:

```bash
netstat -ano | findstr :3000
```

Para encerrar um processo específico (substitua PID pelo número do processo):

```bash
Stop-Process -Id PID -Force
```
