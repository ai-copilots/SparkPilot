# Frontend Architecture

## Project Structure

```
frontend/
├── src/                   # Application source code
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout (必需)
│   │   ├── page.tsx      # Home page
│   │   ├── error.tsx     # Error handling
│   │   ├── loading.tsx   # Loading UI
│   │   └── globals.css   # Global styles
│   ├── components/       # Shared components
│   │   ├── ui/          # UI components
│   │   └── features/    # Feature-specific components
│   ├── lib/             # Utility functions
│   ├── types/           # TypeScript definitions
│   └── styles/          # Component styles
├── public/              # Static assets
├── tests/              # Test files
└── config/             # Configuration files
```

## Core Technologies

- **Framework**: Next.js 15.1.6 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS
- **Package Manager**: Bun
- **Bundler**: Turbopack (开发环境)
- **Linting**: ESLint with Next.js config

## Key Features

### Server Components
- 默认使用 React Server Components
- 减少客户端 JavaScript bundle
- 直接在服务端访问数据源
- 使用 `'use client'` 指令标记客户端组件

### Routing & Layouts
- 基于文件系统的路由
- 嵌套布局支持
- 平行路由和拦截路由
- 动态路由段
- 路由组和私有文件夹

### Data Fetching
- Server Components 中使用 async/await
- 扩展的 fetch API 支持
  - 请求去重
  - 数据缓存
  - 数据重新验证
- 流式渲染支持

### Styling
- CSS Modules
- Tailwind CSS
- CSS-in-JS (客户端组件)
- Sass 支持

### Optimization
- 图片优化 (next/image)
- 字体优化 (next/font)
- 脚本优化 (next/script)
- 元数据 API
- 静态资源处理

## Development Guidelines

### Component Patterns
```tsx
// Server Component (默认)
export default function ServerComponent() {
  // 可以直接使用 async/await
  return <div>Server Component</div>
}

// Client Component
'use client'
export default function ClientComponent() {
  // 客户端交互逻辑
  return <div>Client Component</div>
}
```

### Data Fetching
```tsx
// Server Component 中获取数据
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { 
      revalidate: 3600 // 选项性缓存控制
    }
  })
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* 使用数据 */}</main>
}
```

### Metadata
```tsx
// app/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Site Name',
    default: 'Site Name',
  },
  description: 'Site description',
}
```

### Best Practices
- 优先使用 Server Components
- 实现渐进式增强
- 遵循 React Server Components 设计模式
- 使用 TypeScript 严格模式
- 实现可访问性最佳实践
- 优化核心 Web 指标

## Performance
- 服务端组件默认启用
- 自动代码分割
- 图片自动优化
- 字体优化与子集化
- 静态和动态渲染混合
- 增量静态再生成 (ISR)

## Deployment
- Vercel 部署
- 环境变量管理
- 构建优化配置
- 监控与分析
- Edge Runtime 支持

## Testing
- Jest 单元测试
- React Testing Library
- Cypress E2E 测试
- Playwright 集成测试

## Version Control
- 功能分支工作流
- 语义化提交信息
- PR 模板
- 代码审查指南
