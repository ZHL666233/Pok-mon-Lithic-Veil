# Pokémon Lithic Veil — 桌面启动器
# 使用方法：右键 → "使用 PowerShell 运行"

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

# 游戏目录
Set-Location $PSScriptRoot

# 检查 Python
$python = Get-Command python -ErrorAction SilentlyContinue
if (-not $python) {
    [System.Windows.Forms.MessageBox]::Show(
        "未找到 Python，请先安装 Python 3。`n`n下载地址：https://www.python.org/downloads/",
        "Pokémon Lithic Veil — 错误",
        [System.Windows.Forms.MessageBoxButtons]::OK,
        [System.Windows.Forms.MessageBoxIcon]::Error
    )
    exit 1
}

# 启动本地服务器
Write-Host "正在启动游戏服务器..." -ForegroundColor Cyan
Start-Process python -ArgumentList "-m", "http.server", "8080", "--bind", "127.0.0.1" -WindowStyle Hidden

# 等待服务器就绪
Start-Sleep -Seconds 1

# 打开浏览器
Start-Process "http://localhost:8080"

Write-Host "游戏已启动！浏览器地址：http://localhost:8080" -ForegroundColor Green
Write-Host "关闭此窗口将停止服务器。" -ForegroundColor Yellow
Write-Host "按任意键停止服务器并退出..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
