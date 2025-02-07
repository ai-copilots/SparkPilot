// 1. React 和 Next.js 内置模块
import type { NextConfig } from "next";

// 2. 外部依赖
import createNextIntlPlugin from 'next-intl/plugin'
import createMDX from '@next/mdx'
import type { Options } from '@mdx-js/loader'

// 3. 项目内部模块


/**
 * 国际化插件配置
 * 用于处理多语言路由和翻译
 */
const withNextIntl = createNextIntlPlugin(
  './src/locales/requests.ts'  // 国际化配置文件路径
)

/**
 * MDX 配置
 * 用于处理 .mdx 文件的编译和转换
 */
const withMDX = createMDX({
  options: {
  } satisfies Partial<Options>,
})

/**
 * Next.js 主配置
 */
const nextConfig: NextConfig = {
  // 支持的页面文件扩展名
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  // 实验性功能配置
  experimental: {
    // 包导入优化
    optimizePackageImports: [
      '@icons-pack/react-simple-icons'  // 优化图标包的导入
    ],
    // ESM 支持
    esmExternals: true,  // 启用 ES 模块支持
  }
}


// 导出最终配置
// 使用 MDX 和国际化插件包装基础配置
export default withNextIntl(withMDX(nextConfig))
