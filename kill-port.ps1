# Script PowerShell para encerrar processos na porta 3000
# Uso: .\kill-port.ps1 ou .\kill-port.ps1 -Port 3001

param(
    [int]$Port = 3000
)

Write-Host "Procurando processos na porta $Port..." -ForegroundColor Yellow

try {
    $connections = netstat -ano | Select-String ":$Port.*LISTENING"
    
    if ($connections) {
        $processedIds = @{}
        
        foreach ($connection in $connections) {
            $parts = $connection -split '\s+'
            $processId = $parts[-1]
            
            if ($processId -match '^\d+$' -and -not $processedIds.ContainsKey($processId)) {
                $processedIds[$processId] = $true
                
                Write-Host "Encerrando processo ID: $processId na porta $Port..." -ForegroundColor Red
                
                $result = taskkill /F /PID $processId 2>&1
                
                if ($LASTEXITCODE -eq 0) {
                    Write-Host "[OK] Processo $processId encerrado com sucesso!" -ForegroundColor Green
                } else {
                    Write-Host "[AVISO] Processo $processId nao pode ser encerrado ou ja foi encerrado" -ForegroundColor Yellow
                }
            }
        }
        Write-Host "Porta $Port liberada!" -ForegroundColor Green
    } else {
        Write-Host "Nenhum processo encontrado na porta $Port" -ForegroundColor Green
    }
} catch {
    Write-Host "Erro ao executar script: $_" -ForegroundColor Red
}
