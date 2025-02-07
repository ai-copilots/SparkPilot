'use server';

// 1. React 和 Next.js 内置模块
import { headers } from 'next/headers';

// 2. 外部依赖

// 3. 项目内部模块
import { locales } from '@/locales/config';
import type { Locale } from '@/locales/config';

/**
 * 从 Accept-Language 头部获取浏览器语言
 * 
 * 特性:
 * - 服务器端函数 ('use server')
 * - 支持多语言偏好顺序
 * - 自动匹配支持的语言
 * 
 * 处理流程:
 * 1. 获取 Accept-Language 头部
 * 2. 解析语言代码列表
 * 3. 匹配第一个支持的语言
 * 4. 静态生成时返回 undefined
 * 
 * 示例:
 * Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
 * 返回: 'zh' | 'en' | undefined
 * 
 * @returns {Promise<Locale | undefined>} 返回匹配的语言或 undefined
 * @see https://nextjs.org/docs/app/building-your-application/routing/internationalization
 */
export async function getBrowserLocale(): Promise<Locale | undefined> {
  try {
    const headersList = await headers();
    const acceptLanguage = headersList.get('accept-language');
    if (!acceptLanguage) return undefined;

    // 解析 Accept-Language 头部
    // 例如: 'zh-CN,zh;q=0.9,en;q=0.8' => ['zh-CN', 'zh', 'en']
    const browserLocales = acceptLanguage
      .split(',')
      .map(item => item.split(';')[0])
      .map(item => item.split('-')[0]);

    // 返回第一个匹配的语言
    return browserLocales.find(locale => 
      locales.includes(locale as Locale)
    ) as Locale | undefined;
  } catch {
    // 在静态生成时返回 undefined
    return undefined;
  }
}