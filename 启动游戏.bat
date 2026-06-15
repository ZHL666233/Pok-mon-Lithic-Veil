@echo off
chcp 65001 >nul
title Pokémon Lithic Veil

:: 进入游戏目录
cd /d "%~dp0"

:: 检查 Python 是否可用
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 未找到 Python，请安装 Python 3 后再试。
    echo 下载地址：https://www.python.org/downloads/
    pause
    exit /b 1
)

:: 启动本地服务器
echo ====================================
echo   Pokémon Lithic Veil — 本地启动器
echo ====================================
echo.
echo 正在启动本地服务器...
start "" http://localhost:8080
python -m http.server 8080 --bind 127.0.0.1

pause
