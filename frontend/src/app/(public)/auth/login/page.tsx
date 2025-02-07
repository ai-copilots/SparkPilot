import { redirect } from "next/navigation"

import { auth } from "@/lib/auth/config"

import { LoginForm } from "./_components/login-form"

/**
 * 登录页面组件
 * 
 * 功能：
 * 1. 服务端会话检查
 * 2. 已登录用户重定向
 * 3. 处理回调 URL
 * 4. 错误处理
 * 5. 渲染登录表单
 * 
 * URL 参数：
 * - callbackUrl: 登录成功后重定向的 URL
 * - error: 认证错误类型
 * 
 * @param props.searchParams - URL 查询参数
 * @returns {Promise<JSX.Element>} 登录表单或重定向
 */
export default async function Login({
  searchParams,
}: {
  searchParams: Promise<{ 
    callbackUrl?: string
    error?: string 
  }>
}) {
  // 获取当前会话状态和查询参数
  const [session, params] = await Promise.all([
    auth(),
    searchParams
  ])
  
  const { callbackUrl, error } = params

  // 如果用户已登录，重定向到回调 URL 或仪表盘
  if (session) {
    // 验证回调 URL 是否为相对路径或同源 URL
    const isValidCallbackUrl = callbackUrl && (
      callbackUrl.startsWith('/') || 
      callbackUrl.startsWith(process.env.NEXTAUTH_URL || '')
    )
    
    redirect(isValidCallbackUrl ? callbackUrl : '/dashboard')
  }
  
  // 未登录用户显示登录表单
  return <LoginForm callbackUrl={callbackUrl} error={error} />
} 