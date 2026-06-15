# ============================================================
# Pokémon Lithic Veil — 一键部署脚本
# 使用方法：在 PowerShell 中运行此脚本，或右键 "使用 PowerShell 运行"
# ============================================================

$repoOwner = "ZHL666233"
$repoName  = "Pok-mon-Lithic-Veil"
$branch    = "master"

Write-Host "=== Pokémon Lithic Veil 部署 ===" -ForegroundColor Cyan

# 1. 推送到 GitHub
Write-Host "`n[1/3] 推送代码到 GitHub..." -ForegroundColor Yellow
git push -u origin $branch
if ($LASTEXITCODE -ne 0) {
    Write-Host "推送失败！请检查网络或 GitHub 认证。" -ForegroundColor Red
    Write-Host "如果提示认证，用 GitHub 用户名 + Personal Access Token 登录。"
    Write-Host "Token 获取: https://github.com/settings/tokens"
    exit 1
}
Write-Host "推送成功！" -ForegroundColor Green

# 2. 获取或输入 GitHub Token
$token = $env:GITHUB_TOKEN
if (-not $token) {
    $token = Read-Host "`n请输入 GitHub Personal Access Token (或设置 GITHUB_TOKEN 环境变量)"
}
$headers = @{
    "Authorization" = "Bearer $token"
    "Accept"        = "application/vnd.github+json"
}

# 3. 启用 GitHub Pages
Write-Host "`n[2/3] 启用 GitHub Pages..." -ForegroundColor Yellow
$pagesBody = @{
    source = @{
        branch = $branch
        path   = "/"
    }
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://api.github.com/repos/$repoOwner/$repoName/pages" `
                                   -Method Post `
                                   -Headers $headers `
                                   -Body $pagesBody `
                                   -ContentType "application/json"
    Write-Host "GitHub Pages 已启用！" -ForegroundColor Green
    Write-Host "部署中，通常需要 1-3 分钟生效。"
} catch {
    if ($_.Exception.Response.StatusCode.value__ -eq 409) {
        Write-Host "GitHub Pages 可能已启用，尝试更新配置..." -ForegroundColor Yellow
        try {
            $response = Invoke-RestMethod -Uri "https://api.github.com/repos/$repoOwner/$repoName/pages" `
                                           -Method Put `
                                           -Headers $headers `
                                           -Body $pagesBody `
                                           -ContentType "application/json"
            Write-Host "GitHub Pages 配置已更新！" -ForegroundColor Green
        } catch {
            Write-Host "更新 Pages 配置失败: $_" -ForegroundColor Red
        }
    } else {
        Write-Host "启用 Pages 失败: $_" -ForegroundColor Red
        Write-Host "手动启用: https://github.com/$repoOwner/$repoName/settings/pages"
    }
}

# 4. 输出访问地址
Write-Host "`n[3/3] 完成！" -ForegroundColor Cyan
Write-Host "游戏地址: https://$repoOwner.github.io/$repoName/" -ForegroundColor Green
Write-Host "仓库地址: https://github.com/$repoOwner/$repoName" -ForegroundColor Green

Write-Host "`n按任意键退出..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
