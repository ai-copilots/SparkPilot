// 1. React 和 Next.js 内置模块

// 2. 外部依赖
import { getRequestConfig } from 'next-intl/server';

// 3. 项目内部模块
import { getUserLocale } from '@/services/locale';

// 4. 当前目录模块
import { defaultLocale, getTimeZone, formats } from './config';
import type { Locale } from './config';

/**
 * next-intl 请求配置
 * 为应用程序提供国际化支持
 * 
 * @see https://next-intl.dev/docs/configuration
 */
export default getRequestConfig(async () => {
  // 尝试从 cookie 获取用户语言设置
  let locale: Locale;
  try {
    const userLocale = await getUserLocale();
    locale = userLocale as Locale;
  } catch (error) {
    console.warn('Failed to get user locale:', error);
    locale = defaultLocale;
  }

  return {
    // 当前语言设置，必须返回
    locale,
    
    // 动态导入对应语言的翻译文件
    messages: (await import(`../../messages/${locale}.json`)).default,
    
    // 时区设置，用于日期时间格式化
    timeZone: getTimeZone(locale),

    // 默认翻译值，可在所有翻译中使用
    defaultTranslationValues: {
      brand: 'Copilots'
    },

    // 格式化配置
    formats,

    // 错误处理
    onError(error) {
      if (process.env.NODE_ENV === 'development') {
        console.error(error);
      }
    },

    // 翻译缺失时的回退处理
    getMessageFallback({ key, namespace }) {
      return `${namespace}.${key}`;
    }
  };
});

// 重新导出格式化配置和工具函数
export { formats };
