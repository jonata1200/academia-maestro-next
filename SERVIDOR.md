# 🚀 Guia de Execução do Servidor - Academia Maestro

## Problema: Porta 3000 ocupada

Se você receber o erro de que a porta 3000 está em uso, siga os passos abaixo.

## Solução Recomendada ⭐

Execute o script de limpeza e depois inicie o servidor:

```bash
npm run kill:port
npm run dev
```

O script `kill:port` agora mostra informações detalhadas:
- ✅ Quantos processos Node.js foram encontrados
- ✅ ID de cada processo sendo encerrado
- ✅ Confirmação de sucesso
- ✅ Feedback se algum processo não pôde ser encerrado

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor normalmente na porta 3000 |
| `npm run kill:port` | ⭐ Encerra processos Node.js com feedback detalhado |
| `npm run kill:all` | Encerra rapidamente todos os processos Node.js |
| `npm run clean:cache` | Remove cache do Next.js (.next) |
| `npm run clean:all` | Limpa processos + cache do Next.js |

## Procedimentos Passo a Passo

### 1. Iniciar o servidor (primeira vez)
```bash
npm run dev
```

### 2. Se a porta estiver ocupada (RECOMENDADO) ⭐
```bash
npm run kill:port
npm run dev
```

Você verá um feedback detalhado como:
```
Verificando processos Node.js...
Encontrados 3 processo(s) Node.js
  Encerrando processo ID: 1234
  Encerrando processo ID: 5678
  Encerrando processo ID: 9012
Aguardando 2 segundos para liberar a porta...
Porta 3000 liberada com sucesso!

Agora execute: npm run dev
```

### 3. Se as mudanças não aparecerem (limpar cache)
```bash
npm run clean:all
npm run dev
```

### 4. Encerrar rapidamente (sem feedback detalhado)
```bash
npm run kill:all
npm run dev
```

## Diferenças Entre os Comandos de Limpeza

| Comando | Feedback | Velocidade | Quando Usar |
|---------|----------|------------|-------------|
| `kill:port` | ✅ Detalhado | Médio | Quando quiser ver o que está acontecendo |
| `kill:all` | ⚡ Mínimo | Rápido | Quando quiser apenas limpar rapidamente |
| `clean:all` | ✅ Confirmação | Médio | Quando tiver problemas de cache também |

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
