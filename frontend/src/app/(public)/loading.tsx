// 1. React 和 Next.js 内置模块
import * as React from 'react'

// 2. 外部依赖
import { getTranslations } from 'next-intl/server'

// 3. 项目内部模块
import { Skeleton } from "@/components/ui/skeleton"

/**
 * 公共路由的加载状态组件
 * 使用 loading.js 约定来创建有意义的加载 UI
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
 */
export default function Loading() {
  return (
    <div className="flex flex-col space-y-4 p-8">
      <Skeleton className="h-12 w-3/4" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[80%]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
} 