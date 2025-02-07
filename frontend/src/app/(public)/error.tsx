'use client'

// 1. React 和 Next.js 内置模块
import * as React from 'react'

// 2. 外部依赖
import { useTranslations } from 'next-intl'

// 3. 项目内部模块
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle } from 'lucide-react'

/**
 * 公共路由的错误处理组件
 * 使用 error.js 约定来创建错误 UI
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing/error-handling
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations('Error')

  React.useEffect(() => {
    // 可以在这里添加错误日志上报
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
      <Alert variant="destructive" className="max-w-2xl mb-4">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>{t('title')}</AlertTitle>
        <AlertDescription>
          {t('description')}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-2 p-2 bg-destructive/10 rounded text-sm">
              {error.message}
            </div>
          )}
        </AlertDescription>
      </Alert>
      <Button onClick={reset} variant="outline">
        {t('tryAgain')}
      </Button>
    </div>
  )
} 