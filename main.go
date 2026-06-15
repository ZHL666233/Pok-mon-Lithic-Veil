package main

import (
	"embed"
	"fmt"
	"io/fs"
	"net/http"
	"os/exec"
	"runtime"
	"time"
)

//go:embed pokemon-lithic-veil
var gameFiles embed.FS

func main() {
	fmt.Println("Pokémon Lithic Veil — 启动中...")

	// 去掉 pokemon-lithic-veil 前缀，直接提供文件
	sub, _ := fs.Sub(gameFiles, "pokemon-lithic-veil")

	// 启动 HTTP 服务器
	go func() {
		http.Handle("/", http.FileServer(http.FS(sub)))
		err := http.ListenAndServe("127.0.0.1:8080", nil)
		if err != nil {
			fmt.Println("服务器启动失败:", err)
		}
	}()

	// 等待服务器就绪
	time.Sleep(200 * time.Millisecond)

	// 打开浏览器
	url := "http://localhost:8080"
	fmt.Println("游戏地址:", url)
	openBrowser(url)

	fmt.Println("关闭此窗口停止游戏。")
	fmt.Println("按 Enter 退出...")
	fmt.Scanln()
}

func openBrowser(url string) {
	var cmd string
	var args []string

	switch runtime.GOOS {
	case "windows":
		cmd = "cmd"
		args = []string{"/c", "start", url}
	case "darwin":
		cmd = "open"
		args = []string{url}
	default:
		cmd = "xdg-open"
		args = []string{url}
	}

	exec.Command(cmd, args...).Start()
}
