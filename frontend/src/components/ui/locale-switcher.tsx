"use client"

// 1. React 和 Next.js 内置模块
import { useTransition } from 'react'

// 2. 外部依赖
import { Globe } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

// 3. 项目内部模块
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { setUserLocale } from '@/services/locale'
import type { Locale } from '@/locales/config'

// 4. 当前目录模块

/**
 * 语言切换器组件
 * 提供一个下拉菜单用于切换应用程序的语言
 * 
 * 功能：
 * 1. 显示当前选中的语言
 * 2. 支持切换到其他可用语言
 * 3. 提供加载状态反馈
 * 4. 保存语言偏好到 Cookie
 * 
 * @example
 * ```tsx
 * <LocaleSwitcher />
 * ```
 */
export function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()

  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      setUserLocale(nextLocale)
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className={isPending ? "opacity-50" : ""}
          disabled={isPending}
        >
          <Globe className="h-4 w-4" />
          <span className="sr-only">{t('label')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(['en', 'zh'] as const).map((key) => (
          <DropdownMenuItem
            key={key}
            onClick={() => onSelectChange(key as Locale)}
            className="flex items-center gap-2"
          >
            {key === locale && (
              <span className="absolute left-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            )}
            <span className={key === locale ? "font-medium ml-4" : "ml-4"}>
              {t(`locales.${key}`)}
            </span>
            <span className="sr-only">
              {t('switchTo', { locale: t(`locales.${key}`) })}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
