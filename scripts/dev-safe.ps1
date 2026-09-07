# Script para iniciar o servidor de desenvolvimento de forma segura
# Libera a porta 3000 antes de iniciar o servidor
# Uso: powershell -ExecutionPolicy Bypass -File scripts/dev-safe.ps1

Write-Host ""
Write-Host "=== Iniciando servidor de desenvolvimento (modo seguro) ===" -ForegroundColor Cyan
Write-Host ""

# Primeiro, executa o script de kill da porta
& "$PSScriptRoot\kill-port-3000.ps1"

Write-Host ""
Write-Host "Iniciando servidor Next.js..." -ForegroundColor Green
Write-Host ""

# Executa o npm run dev
npm run dev
