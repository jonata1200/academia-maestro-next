# Script para encerrar processos na porta 3000
# Uso: powershell -ExecutionPolicy Bypass -File scripts/kill-port-3000.ps1

Write-Host ""
Write-Host "Verificando processos Node.js..." -ForegroundColor Cyan

# Busca todos os processos Node.js
$nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue

if ($nodeProcesses)
{
    Write-Host "Encontrados $($nodeProcesses.Count) processo(s) Node.js" -ForegroundColor Yellow
    
    # Encerra cada processo
    foreach ($process in $nodeProcesses)
    {
        try
        {
            Write-Host "  Encerrando processo ID: $($process.Id)" -ForegroundColor Gray
            Stop-Process -Id $process.Id -Force -ErrorAction Stop
        }
        catch
        {
            Write-Host "  Nao foi possivel encerrar processo ID: $($process.Id)" -ForegroundColor Red
        }
    }
    
    # Aguarda para garantir que a porta seja liberada
    Write-Host "Aguardando 2 segundos para liberar a porta..." -ForegroundColor Yellow
    Start-Sleep -Seconds 2
    
    Write-Host "Porta 3000 liberada com sucesso!" -ForegroundColor Green
}
else
{
    Write-Host "Nenhum processo Node.js em execucao" -ForegroundColor Green
}

Write-Host ""
Write-Host "Agora execute: npm run dev" -ForegroundColor Cyan
Write-Host ""
