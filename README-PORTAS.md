# 🔧 Guia: Resolvendo Problemas com Porta 3000 em Uso

## ⚠️ O que significa o aviso?

Quando você vê o aviso:
```
⚠ Port 3000 is in use by process 9560, using available port 3001 instead.
```

Isso significa que:
- A porta 3000 já está sendo usada por outro processo (geralmente uma instância anterior do servidor que não foi encerrada)
- O Next.js automaticamente usa a próxima porta disponível (3001)
- Isso não é um erro, mas pode ser inconveniente se você sempre espera que o servidor rode na porta 3000

## 🎯 Soluções

### **Opção 1: Encerrar o processo manualmente (Recomendado)**

#### No Windows (PowerShell):
```powershell
# Ver processos na porta 3000
netstat -ano | findstr :3000

# Encerrar o processo (substitua 9560 pelo PID encontrado)
taskkill /F /PID 9560
```

#### No Windows (CMD):
```cmd
# Ver processos na porta 3000
netstat -ano | findstr :3000

# Encerrar o processo (substitua 9560 pelo PID encontrado)
taskkill /F /PID 9560
```

#### No Linux/Mac:
```bash
# Ver processos na porta 3000
lsof -ti:3000

# Encerrar o processo
kill -9 $(lsof -ti:3000)
```

### **Opção 2: Usar scripts automatizados**

Fornecemos scripts para facilitar o processo:

#### Windows PowerShell:
```powershell
.\kill-port.ps1
```

#### Windows Batch:
```cmd
kill-port.bat
```

#### NPM Script:
```bash
npm run kill:3000
```

### **Opção 3: Especificar uma porta diferente**

Se você quiser sempre usar uma porta específica:

```bash
# Porta 3001
npm run dev:3001

# Ou especificar manualmente
npx next dev -p 3001
```

### **Opção 4: Modificar o script padrão**

Você pode modificar o `package.json` para sempre usar uma porta específica:

```json
{
  "scripts": {
    "dev": "next dev -p 3001"
  }
}
```

## 🔍 Verificar qual porta está sendo usada

Após iniciar o servidor, você verá no terminal:
```
▲ Next.js 15.5.2
- Local:        http://localhost:3001
- Ready in 2.3s
```

## 💡 Dicas

1. **Sempre encerre o servidor corretamente**: Use `Ctrl + C` no terminal onde o servidor está rodando
2. **Verifique processos antes de iniciar**: Use os comandos acima para verificar se há processos na porta
3. **Use scripts automatizados**: Os scripts fornecidos facilitam o processo
4. **Considere usar uma porta fixa**: Se você sempre quer usar a mesma porta, especifique no script

## 🚨 Problemas Comuns

### "Acesso negado" ao tentar encerrar processo
- Execute o terminal como Administrador
- Ou use o Task Manager do Windows para encerrar o processo

### Processo não encerra
- Verifique se você tem permissões de administrador
- Use o Task Manager para forçar o encerramento

### Múltiplas instâncias
- Certifique-se de encerrar todas as instâncias antes de iniciar uma nova
- Verifique se há múltiplos terminais com `npm run dev` rodando
