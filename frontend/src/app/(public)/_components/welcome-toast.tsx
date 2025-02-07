"use client"  // 声明这是一个客户端组件

// 1. React 和 Next.js 内置模块
import { useEffect, useState } from "react"

// 2. 外部依赖

// 3. 项目内部模块
import { useToast } from "@/hooks/use-toast"

/**
 * WelcomeToast 组件
 * 用于显示一次性的欢迎提示信息
 * 使用 localStorage 确保提示只显示一次
 */
export function WelcomeToast() {
  // 获取 toast 通知函数
  const { toast } = useToast()

  // 用于确保组件已在客户端挂载的状态
  const [mounted, setMounted] = useState(false)

  // 组件挂载后将 mounted 设置为 true
  useEffect(() => {
    setMounted(true)
  }, [])

  // 处理欢迎提示的显示逻辑
  useEffect(() => {
    // 确保组件已挂载后再执行
    if (!mounted) return

    try {
      // 检查是否已经显示过欢迎提示
      const hasShownWelcome = localStorage.getItem('hasShownWelcome')
      
      // 如果没有显示过，则显示欢迎提示
      if (!hasShownWelcome) {
        toast({
          title: 'Welcome to the app',
          description: 'This is a welcome message',
          duration: 5000, // 显示时长（毫秒）
        })
        
        // 标记已显示过欢迎提示
        localStorage.setItem('hasShownWelcome', 'true')
      }
    } catch (error) {
      // 处理 localStorage 访问失败的情况
      console.warn('Failed to access localStorage:', error)
    }
  }, [mounted, toast])  // 依赖项：mounted 状态和 toast 函数

  // 该组件不需要渲染任何 UI
  return null
}