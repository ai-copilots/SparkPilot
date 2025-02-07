"use client"

// 1. React 和 Next.js 内置模块
"use client"
import * as React from "react"

// 2. 外部依赖
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useTranslations } from 'next-intl'

// 3. 项目内部模块
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// 4. 当前目录模块


/**
 * 支持的主题配置
 * 键: 主题值
 * 值: 图标组件
 */
const THEMES = {
  light: Sun,
  dark: Moon,
  system: Sun,
} as const

type Theme = keyof typeof THEMES

/**
 * 主题切换器组件
 * 提供一个下拉菜单用于切换应用程序的主题
 * 
 * 功能：
 * 1. 显示当前选中的主题
 * 2. 支持切换到其他可用主题
 * 3. 提供图标指示
 * 4. 保存主题偏好
 * 
 * @example
 * ```tsx
 * <ThemeSwitcher />
 * ```
 */
export function ThemeSwitcher() {
  const t = useTranslations('ThemeSwitcher')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // 在组件挂载后再显示，避免服务端渲染不匹配
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = (theme ?? 'system') as Theme
  const ThemeIcon = THEMES[currentTheme]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <ThemeIcon className="h-4 w-4" />
          <span className="sr-only">{t('label')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(Object.keys(THEMES) as Theme[]).map((key) => (
          <DropdownMenuItem
            key={key}
            onClick={() => setTheme(key)}
            className="flex items-center gap-2"
          >
            {key === theme && (
              <span className="absolute left-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            )}
            <span className={key === theme ? "font-medium ml-4" : "ml-4"}>
              {t(`theme.${key}`)}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 