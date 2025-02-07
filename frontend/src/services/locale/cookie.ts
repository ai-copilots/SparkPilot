'use server';

// 1. React 和 Next.js 内置模块
import { cookies } from 'next/headers';

// 2. 外部依赖

// 3. 项目内部模块
import { defaultLocale, locales } from '@/locales/config';
import type { Locale } from '@/locales/config';

// 4. 当前目录模块
import { COOKIE_NAME } from './constants';
import { getBrowserLocale } from './detect';

/**
 * 获取用户的语言偏好
 * 按以下优先级:
 * 1. Cookie 中存储的语言设置
 * 2. 浏览器的 Accept-Language 头
 * 3. 默认语言设置
 * 
 * @returns {Promise<Locale>} 返回用户的语言偏好
 * @see https://nextjs.org/docs/app/building-your-application/routing/internationalization
 */
export async function getUserLocale(): Promise<Locale> {
  try {
    // 1. 尝试从 Cookie 获取语言设置
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get(COOKIE_NAME)?.value;
    
    if (cookieLocale && locales.includes(cookieLocale as Locale)) {
      return cookieLocale as Locale;
    }

    // 2. 尝试获取浏览器语言
    const browserLocale = await getBrowserLocale();
    if (browserLocale) {
      return browserLocale;
    }
  } catch {
    // 3. 出错时返回默认语言
    return defaultLocale;
  }

  // 4. 都失败时返回默认语言
  return defaultLocale;
}

/**
 * 设置用户的语言偏好到 Cookie
 * 
 * 特性:
 * - 服务器端函数 ('use server')
 * - 类型安全的语言参数
 * - 自动处理 Cookie 设置
 * 
 * Cookie 配置:
 * - path: '/' - 适用于所有路径
 * - secure: true (生产环境) - 仅通过 HTTPS 发送
 * - sameSite: 'lax' - 防止 CSRF 攻击
 * - maxAge: 30 天 - Cookie 有效期
 * 
 * @param {Locale} locale - 要设置的语言
 * @returns {Promise<void>}
 * @see https://nextjs.org/docs/app/api-reference/functions/cookies
 */
export async function setUserLocale(locale: Locale): Promise<void> {
  try {
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, locale, {
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60 // 30 days
    });
  } catch (error) {
    console.warn('Failed to set user locale:', error);
  }
}