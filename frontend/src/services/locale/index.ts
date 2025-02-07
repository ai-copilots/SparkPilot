/**
 * Locale Service Module
 * 
 * 功能说明:
 * 此模块集中管理应用的国际化(i18n)相关功能，包括：
 * 1. Cookie 管理 - 用户语言偏好的存取
 * 2. 语言检测 - 自动检测用户浏览器语言
 * 
 * 主要导出:
 * - cookie.ts: 
 *   - getUserLocale: 获取用户语言偏好
 *   - setUserLocale: 设置用户语言偏好
 * - detect.ts:
 *   - getBrowserLocale: 检测浏览器语言设置
 * 
 * 使用场景:
 * 1. 应用初始化时确定显示语言
 * 2. 用户手动切换语言时保存偏好
 * 3. 多语言路由和内容切换
 * 
 * @module locale
 */

export * from './cookie';
export * from './detect';
