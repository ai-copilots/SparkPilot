"use client"

import { SiGithub } from '@icons-pack/react-simple-icons'
import { useTranslations } from 'next-intl'
import { signIn } from 'next-auth/react'

import { Button } from "@/components/ui/button"

/**
 * OAuth 登录按钮组件
 * 
 * 功能：
 * - GitHub OAuth 登录
 * - 支持回调 URL
 * - 国际化支持
 * 
 * Props:
 * @param callbackUrl - 登录成功后的重定向 URL
 */
export function OAuthButton({ callbackUrl }: { callbackUrl?: string }) {
  const t = useTranslations('Login')
  
  const handleGithubSignIn = async () => {
    try {
      await signIn('github', { 
        callbackUrl: callbackUrl || '/dashboard',
        redirect: true
      })
    } catch (error) {
      console.error('GitHub 登录失败:', error)
    }
  }
  
  return (
    <Button 
      type="button"
      variant="outline" 
      className="w-full gap-2"
      onClick={handleGithubSignIn}
    >
      <SiGithub className="h-4 w-4" />
      {t('githubLogin')}
    </Button>
  )
} 