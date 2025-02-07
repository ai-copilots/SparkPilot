import { redirect } from "next/navigation"
import { auth } from "@/lib/auth/config"
import { AuthError } from "next-auth"
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
 * 工作流程：
 * 1. 组件作为服务端组件运行（async function）
 * 2. 使用 auth() 检查当前会话状态
 * 3. 如果用户已登录，重定向到回调 URL 或仪表盘
 * 4. 如果未登录，渲染登录表单
 * 
 * 安全特性：
 * - 服务端会话验证
 * - 自动重定向已登录用户
 * - 公开路由组 (public) 中的页面
 * - 验证回调 URL 的合法性
 * 
 * 相关组件：
 * - LoginForm：客户端登录表单组件
 * - OAuthButton：GitHub OAuth 登录按钮
 * 
 * @param props.searchParams.callbackUrl - 登录成功后的重定向 URL
 * @param props.searchParams.error - 认证错误类型
 * @returns {JSX.Element} 登录表单或重定向
 */
export default async function Login({
  searchParams: { callbackUrl, error }
}: {
  searchParams: { 
    callbackUrl?: string
    error?: string 
  }
}) {
  // 获取当前会话状态
  const session = await auth()

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