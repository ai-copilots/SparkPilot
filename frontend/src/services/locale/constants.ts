/**
 * 用户语言偏好的 Cookie 名称
 * 
 * 特性:
 * - 用于客户端和服务器端之间持久化语言设置
 * - 遵循 Next.js Cookie 命名约定
 * - 与 next-intl 中间件集成
 * 
 * 使用场景:
 * 1. 首次访问时保存用户语言偏好
 * 2. 后续访问时读取已保存的语言设置
 * 3. 语言切换时更新用户偏好
 * 
 * @constant {string}
 * @see https://nextjs.org/docs/app/api-reference/functions/cookies
 */
export const COOKIE_NAME = 'NEXT_LOCALE'; 