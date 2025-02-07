import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { neo4jAdapter } from "./neo4j-adapter"

/**
 * Auth.js 配置
 * 
 * 包含：
 * 1. GitHub OAuth 提供商
 * 2. Neo4j 适配器
 * 3. 认证处理程序
 * 4. 登录/登出方法
 */
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      authorization: {
        params: {
          prompt: "consent",
          scope: "read:user user:email"
        }
      }
    })
  ],
  adapter: neo4jAdapter,
  pages: {
    signIn: "/login",
    error: "/error",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      // 已登录用户已认证，否则重定向到登录页
      return !!auth
    },
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },
  debug: process.env.NODE_ENV === "development",
  trustHost: true,
  session: { 
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
}) 