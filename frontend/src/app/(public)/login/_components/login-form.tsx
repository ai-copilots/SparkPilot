"use client"

import { useTranslations } from 'next-intl'
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { OAuthButton } from "./oauth-button"
import Link from 'next/link'

/**
 * 登录表单组件
 * 
 * 功能：
 * - GitHub OAuth 登录
 * - 错误提示
 * - 服务条款链接
 * 
 * Props:
 * @param className - 自定义样式类名
 * @param callbackUrl - 登录成功后的重定向 URL
 * @param error - 认证错误类型
 */
export function LoginForm({
  className,
  callbackUrl,
  error,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  callbackUrl?: string
  error?: string
}) {
  const t = useTranslations('Login')

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t('title')}</CardTitle>
          <CardDescription>
            {t('description')}
            {error && (
              <p className="mt-2 text-sm text-destructive">
                {t(`error.${error}`)}
              </p>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OAuthButton callbackUrl={callbackUrl} />
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
        {t('terms.agreement')}{' '}
        <Link href="/terms">{t('terms.service')}</Link>{' '}
        {t('terms.and')}{' '}
        <Link href="/privacy">{t('terms.privacy')}</Link>
      </div>
    </div>
  )
}
