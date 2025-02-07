import { auth } from "@/lib/auth/config"

export { auth as middleware } from "@/lib/auth/config"

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/auth/login") {
    const newUrl = new URL("/auth/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})

export const config = {
  matcher: [
    /*
     * 只匹配需要保护的路由:
     * 1. /dashboard/* - 仪表板路由
     * 2. /blogs/* - 博客路由
     * 3. 其他protected组下的路由
     * 
     * 自动排除:
     * - /auth/* - 认证相关页面
     * - /legal/* - 法律页面
     * - / - 首页
     * - 其他public路由
     */
    '/dashboard/:path*',
    '/blogs/:path*',
    '/(protected)/:path*'
  ]
}