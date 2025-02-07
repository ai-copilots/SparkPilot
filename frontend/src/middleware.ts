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
     * - /(protected)/* - 所有protected路由组下的页面
     * 
     * 自动排除:
     * - /(public)/* - 所有public路由组下的页面
     * - /api/* - API路由
     * - /_next/* - Next.js系统文件
     * - /favicon.ico等静态文件
     */
    '/(protected)/:path*'
  ]
}