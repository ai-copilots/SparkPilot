// 1. React 和 Next.js 内置模块
import type { Metadata } from "next";

// 2. 外部依赖
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';

// 3. 项目内部模块
import { formats } from '@/locales/config';
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { initializeNeo4j } from '@/services/neo4j/init'

// 4. 当前目录模块


/**
 * 生成动态元数据
 * 使用 next-intl 的服务器端翻译函数获取元数据
 * 
 * @see https://next-intl.dev/docs/getting-started/app-router#metadata
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export async function generateMetadata(): Promise<Metadata> {
  // 从 'Metadata' 命名空间获取翻译函数
  const t = await getTranslations('Metadata');
 
  return {
    title: t('title'),
    description: t('description')
  };
}

// 初始化 Neo4j
initializeNeo4j()
    .catch(console.error)

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 获取当前语言环境
  const locale = await getLocale();

  // 获取所有翻译消息
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* head 内容由 Next.js 自动管理 */}
      </head>
      <body>
        {/* 
          NextIntlClientProvider 配置:
          - messages: 翻译消息对象，用于所有子组件
          - locale: 当前语言环境
          - formats: 日期、数字等格式化配置
          
          提供了国际化上下文，使子组件可以使用:
          - useTranslations: 获取翻译
          - useFormatter: 格式化日期和数字
          - useNow: 获取当前时间
          - useTimeZone: 获取时区信息
        */}
        <NextIntlClientProvider messages={messages} locale={locale} formats={formats}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
