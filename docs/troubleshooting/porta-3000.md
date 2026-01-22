# 🔍 Diagnóstico: Problema da Porta 3000 Ocupada

## 📋 Descrição do Problema

Este projeto apresenta um problema crônico onde, após finalizar o terminal e tentar executar o projeto novamente na porta 3000, sempre aparece um aviso de que a porta está sendo usada. Este problema **não ocorre em outros projetos Next.js**.

## 🔬 Causa Raiz Identificada

Após pesquisa na documentação oficial do Next.js e análise do projeto, identificamos as seguintes causas prováveis:

### 1. **Next.js 15 com Turbopack**
- O Next.js 15 usa **Turbopack por padrão** no modo de desenvolvimento
- O Turbopack pode criar **processos filhos** que não são encerrados corretamente quando o terminal é fechado
- Esses processos órfãos continuam ocupando a porta 3000

### 2. **Windows PowerShell e Gerenciamento de Processos**
- No Windows, especialmente com PowerShell, quando você fecha o terminal abruptamente, os processos Node.js podem **não receber os sinais SIGTERM/SIGINT** corretamente
- O Windows não envia esses sinais da mesma forma que sistemas Unix/Linux
- Isso resulta em processos "zombie" que permanecem em execução em background

### 3. **Configuração `output: 'standalone'`**
- O `next.config.ts` possui `output: 'standalone'` configurado para otimização Docker
- Embora isso não deveria afetar o modo `dev`, pode haver interações não documentadas com o gerenciamento de processos

### 4. **Fechamento Abrupto do Terminal**
- Fechar o terminal sem usar `Ctrl+C` para encerrar o servidor graciosamente
- Fechar a janela do terminal sem parar o processo primeiro
- Isso impede que o Next.js execute sua lógica de cleanup adequadamente

## ✅ Soluções Implementadas

### 1. **Script Melhorado `kill-port-3000.ps1`**
- **Antes**: Matava TODOS os processos Node.js (incluindo outros projetos)
- **Agora**: Identifica e mata **APENAS processos usando a porta 3000**
- Usa `netstat` para encontrar processos específicos na porta
- Mais seguro e preciso

### 2. **Novo Script `dev:safe`**
- Adicionado ao `package.json`: `npm run dev:safe`
- **Automaticamente** libera a porta 3000 antes de iniciar o servidor
- Solução preventiva que evita o problema antes que ocorra

### 3. **Scripts Disponíveis**

| Comando | Descrição | Quando Usar |
|---------|-----------|-------------|
| `npm run dev` | Inicia o servidor normalmente | Uso normal |
| `npm run dev:safe` | ⭐ Libera porta e inicia automaticamente | **Recomendado** - previne o problema |
| `npm run kill:port` | Libera apenas a porta 3000 | Quando a porta estiver ocupada |
| `npm run kill:all` | Mata todos os processos Node.js | Emergência (mata outros projetos também) |

## 🎯 Recomendações de Uso

### Uso Diário Recomendado
```bash
npm run dev:safe
```
Este comando automaticamente:
1. Verifica se há processos na porta 3000
2. Encerra apenas esses processos
3. Inicia o servidor de desenvolvimento

### Se o Problema Persistir
```bash
# 1. Tente o script de kill específico
npm run kill:port

# 2. Se ainda não funcionar, limpe tudo
npm run clean:all

# 3. Inicie o servidor
npm run dev
```

### Encerramento Correto do Servidor
Sempre que possível, use `Ctrl+C` no terminal para encerrar o servidor graciosamente antes de fechar o terminal. Isso permite que o Next.js execute sua lógica de cleanup.

## 🔧 Soluções Alternativas (Futuras)

Se o problema persistir, considere:

### 1. **Usar o pacote `kill-port`**
```bash
npm install --save-dev kill-port
```

E modificar o script:
```json
"dev:safe": "kill-port 3000 && next dev"
```

### 2. **Usar Webpack em vez de Turbopack**
Se o problema for específico do Turbopack, você pode usar:
```bash
npm run dev -- --webpack
```

Ou adicionar um script:
```json
"dev:webpack": "next dev --webpack"
```

### 3. **Configurar Handler de Sinais Manual**
Para produção, você pode configurar handlers de sinal (mas não funciona em `next dev`):
```json
"start": "NEXT_MANUAL_SIG_HANDLE=true next start"
```

## 📊 Comparação com Outros Projetos

### Por que só acontece neste projeto?

Possíveis razões:
1. **Versão do Next.js**: Este projeto usa Next.js 15.5.2 com Turbopack por padrão
2. **Configuração `standalone`**: Pode ter interações não documentadas
3. **Windows Defender**: Pode estar interferindo com o gerenciamento de processos
4. **Terminal específico**: O comportamento pode variar entre terminais (PowerShell, CMD, Git Bash, etc.)

### Outros projetos podem não ter o problema porque:
- Usam versões anteriores do Next.js (sem Turbopack)
- Não têm `output: 'standalone'` configurado
- São executados em ambientes diferentes (Linux/Mac)
- Usam terminais que gerenciam processos melhor

## 🐛 Debugging

Se quiser investigar mais:

### Verificar processos na porta 3000
```powershell
netstat -ano | findstr :3000
```

### Ver todos os processos Node.js
```powershell
Get-Process -Name node
```

### Verificar se há processos órfãos
```powershell
# Lista processos Node.js com detalhes
Get-Process -Name node | Format-Table Id, ProcessName, StartTime, Path
```

## 📚 Referências

- [Next.js Documentation - CLI](https://nextjs.org/docs/app/api-reference/cli)
- [Next.js 15 - Turbopack](https://nextjs.org/docs/app/api-reference/cli#turbopack)
- [Windows Process Management](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/stop-process)

---

**Última atualização**: Baseado em análise do projeto e documentação oficial do Next.js 15.5.2
