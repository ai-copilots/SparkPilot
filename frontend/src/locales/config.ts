/**
 * 国际化配置文件
 * 定义支持的语言、默认语言、时区和格式化选项
 */

// 导入 next-intl 的格式化类型定义
import type { Formats } from 'next-intl';

/**
 * 支持的语言列表
 * 用于:
 * 1. 路由匹配
 * 2. 语言切换
 * 3. 类型推导
 */
export const locales = ['zh', 'en'] as const;  // as const 确保类型推导为字面量联合类型
export type Locale = typeof locales[number];  // 提取语言代码类型: 'zh' | 'en'

/**
 * 默认语言设置
 * 用于:
 * 1. 首次访问重定向
 * 2. 语言检测失败时的回退
 */
export const defaultLocale: Locale = 'en';

/**
 * 时区映射配置
 * 根据语言选择合适的时区
 */
export const timeZones: Record<Locale, string> = {
  zh: 'Asia/Shanghai',  // 东八区 (UTC+8)
  en: 'UTC'            // 协调世界时
} as const;

/**
 * 获取当前时区
 * @param locale - 当前语言
 * @returns 对应的时区
 */
export const getTimeZone = (locale: Locale = defaultLocale): string => {
  return timeZones[locale];
};

/**
 * 全局格式化配置
 * 提供统一的日期、数字和列表格式化选项
 */
export const formats: Formats = {
  dateTime: {
    short: {
      day: 'numeric',      // 数字格式的日期
      month: 'short',      // 月份缩写 (如: Jan)
      year: 'numeric',     // 数字格式的年份
      hour: 'numeric',     // 数字格式的小时
      minute: 'numeric'    // 数字格式的分钟
    },
    long: {
      day: 'numeric',          // 数字格式的日期
      month: 'long',          // 月份全称 (如: January)
      year: 'numeric',        // 数字格式的年份
      weekday: 'long',        // 星期全称 (如: Monday)
      hour: 'numeric',        // 数字格式的小时
      minute: 'numeric',      // 数字格式的分钟
      timeZoneName: 'short'   // 时区缩写 (如: GMT)
    }
  },
  number: {
    precise: {
      maximumFractionDigits: 5  // 最多显示 5 位小数
    }
  },
  list: {
    enumeration: {
      style: 'long',           // 使用完整格式
      type: 'conjunction'      // 使用连接词 (如: "和"、"and")
    }
  }
};