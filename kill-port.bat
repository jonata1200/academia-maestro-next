@echo off
REM Script batch para encerrar processos na porta 3000
REM Uso: kill-port.bat ou kill-port.bat 3001

set PORT=%1
if "%PORT%"=="" set PORT=3000

echo Procurando processos na porta %PORT%...

for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":%PORT%.*LISTENING"') do (
    echo Encerrando processo PID: %%a na porta %PORT%...
    taskkill /F /PID %%a >nul 2>&1
    if errorlevel 1 (
        echo Erro ao encerrar processo %%a
    ) else (
        echo Processo %%a encerrado com sucesso!
    )
)

echo.
echo Porta %PORT% liberada!
