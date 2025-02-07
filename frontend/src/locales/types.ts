import type { Formats } from 'next-intl';

/**
 * 支持的语言类型定义
 * 用于:
 * 1. 类型检查和自动完成
 * 2. 路由参数验证
 * 3. API 请求参数验证
 */
export type Locale = 'zh' | 'en';

type RecursiveMessages = {
  [key: string]: string | RecursiveMessages;
};

export interface Messages extends RecursiveMessages {
}

/**
 * 全局类型声明
 * 用于:
 * 1. next-intl 类型安全
 * 2. 格式化函数类型检查
 */
declare global {
  // 扩展 next-intl 的全局类型
  interface IntlMessages extends Messages {
    // 允许扩展额外的消息类型
    readonly [K: string]: IntlMessages[keyof IntlMessages];
  }
  
  interface IntlFormats extends Formats {
    // 允许扩展额外的格式化选项
    readonly [K: string]: Formats[keyof Formats];
  }
}

// 重新导出 next-intl 的 Formats 类型
export type { Formats };
