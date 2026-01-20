# Script para encerrar processos na porta 3000
# Uso: powershell -ExecutionPolicy Bypass -File scripts/kill-port-3000.ps1
#
# Este script identifica e encerra APENAS processos que estão usando a porta 3000,
# evitando matar outros processos Node.js que possam estar rodando em outras portas.

Write-Host ""
Write-Host "Verificando processos na porta 3000..." -ForegroundColor Cyan

# Busca processos usando a porta 3000 usando netstat
$portProcesses = netstat -ano | findstr ":3000" | findstr "LISTENING"

if ($portProcesses)
{
    $pids = @()
    
    # Extrai os PIDs dos processos
    foreach ($line in $portProcesses)
    {
        $parts = $line -split '\s+'
        $pid = $parts[-1]
        if ($pid -and $pid -notin $pids)
        {
            $pids += $pid
        }
    }
    
    if ($pids.Count -gt 0)
    {
        Write-Host "Encontrados $($pids.Count) processo(s) usando a porta 3000" -ForegroundColor Yellow
        
        # Encerra cada processo específico da porta 3000
        foreach ($pid in $pids)
        {
            try
            {
                $process = Get-Process -Id $pid -ErrorAction SilentlyContinue
                if ($process)
                {
                    Write-Host "  Encerrando processo ID: $pid ($($process.ProcessName))" -ForegroundColor Gray
                    Stop-Process -Id $pid -Force -ErrorAction Stop
                }
            }
            catch
            {
                Write-Host "  Nao foi possivel encerrar processo ID: $pid" -ForegroundColor Red
            }
        }
        
        # Aguarda para garantir que a porta seja liberada
        Write-Host "Aguardando 2 segundos para liberar a porta..." -ForegroundColor Yellow
        Start-Sleep -Seconds 2
        
        # Verifica se a porta foi liberada
        $stillInUse = netstat -ano | findstr ":3000" | findstr "LISTENING"
        if ($stillInUse)
        {
            Write-Host "Aviso: A porta 3000 ainda pode estar em uso. Tente novamente." -ForegroundColor Yellow
        }
        else
        {
            Write-Host "Porta 3000 liberada com sucesso!" -ForegroundColor Green
        }
    }
    else
    {
        Write-Host "Nenhum processo encontrado na porta 3000" -ForegroundColor Green
    }
}
else
{
    Write-Host "Nenhum processo encontrado na porta 3000" -ForegroundColor Green
}

Write-Host ""
Write-Host "Agora execute: npm run dev" -ForegroundColor Cyan
Write-Host ""
