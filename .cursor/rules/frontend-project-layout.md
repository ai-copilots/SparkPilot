# Frontend Project Layout

## Current Structure
```
frontend/
├── README.md                 # Project documentation
├── bun.lockb                # Bun lockfile
├── components.json          # Components JSON
├── eslint.config.mjs        # ESLint configuration
├── messages
│   ├── en.json             # English translations
│   └── zh.json             # Chinese translations
├── next-env.d.ts           # Next.js TypeScript declarations
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── public/                 # Static assets
│   └── logo.svg           # Logo image
├── src/                    # Source code
│   ├── app/                # Next.js App Router
│   │   ├── (protected)    # Protected routes (require auth)
│   │   │   ├── blogs
│   │   │   │   └── page.tsx
│   │   │   ├── dashboard
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (public)       # Public routes
│   │   │   ├── _components
│   │   │   │   └── welcome-toast.tsx
│   │   │   ├── auth      # Authentication pages
│   │   │   │   ├── error
│   │   │   │   │   └── page.tsx
│   │   │   │   └── login
│   │   │   │       ├── _components
│   │   │   │       │   ├── login-form.tsx
│   │   │   │       │   └── oauth-button.tsx
│   │   │   │       └── page.tsx
│   │   │   ├── error.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── legal     # Legal pages
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── privacy
│   │   │   │   │   ├── contents
│   │   │   │   │   │   ├── en.privacy.mdx
│   │   │   │   │   │   └── zh.privacy.mdx
│   │   │   │   │   └── page.tsx
│   │   │   │   └── terms
│   │   │   │       ├── contents
│   │   │   │       │   ├── en.terms.mdx
│   │   │   │       │   └── zh.terms.mdx
│   │   │   │       └── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── api           # API routes
│   │   │   └── auth
│   │   │       └── [...nextauth]
│   │   │           └── route.ts
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   └── not-found.tsx
│   ├── components/        # Reusable components
│   │   ├── common        # Common components
│   │   │   └── logo.tsx
│   │   ├── layout       # Layout components
│   │   │   └── theme-provider.tsx
│   │   └── ui          # UI components (shadcn/ui)
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── locale-switcher.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── theme-switcher.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       └── tooltip.tsx
│   ├── config/          # Configuration files
│   │   └── neo4j.ts    # Neo4j database config
│   ├── constants/       # Constants and enums
│   ├── hooks/          # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/            # Core libraries
│   │   ├── auth       # Authentication
│   │   │   ├── config.ts
│   │   │   ├── index.ts
│   │   │   └── neo4j-adapter.ts
│   │   └── utils.ts
│   ├── locales/        # Internationalization
│   │   ├── config.ts
│   │   ├── requests.ts
│   │   └── types.ts
│   ├── mdx-components.tsx  # MDX components
│   ├── middleware.ts    # Next.js middleware
│   ├── scripts/        # Utility scripts
│   ├── services/       # External services
│   │   ├── locale     # Locale service
│   │   │   ├── constants.ts
│   │   │   ├── cookie.ts
│   │   │   ├── detect.ts
│   │   │   └── index.ts
│   │   └── neo4j      # Neo4j service
│   │       ├── index.ts
│   │       ├── init.ts
│   │       └── query.ts
│   ├── stores/         # State management
│   ├── styles/         # Global styles
│   │   └── globals.css
│   ├── types/         # TypeScript types
│   │   └── next-auth.d.ts  # Next.js Auth type definitions
│   └── utils/         # Utility functions
├── tailwind.config.ts  # Tailwind CSS config
└── tsconfig.json      # TypeScript config

## Directory Structure Details

### Root Configuration Files
- `package.json`: 项目依赖和脚本配置
- `bun.lockb`: Bun 包管理器的依赖锁定文件
- `*.config.*`: 各种工具的配置文件
  - `next.config.ts`: Next.js 配置
  - `tailwind.config.ts`: Tailwind CSS 配置
  - `postcss.config.mjs`: PostCSS 配置
  - `eslint.config.mjs`: ESLint 配置
- `tsconfig.json`: TypeScript 配置

### Source Code (`src/`)
- `app/`: Next.js App Router 目录
  - `(protected)/`: 需要认证的路由
    - `blogs/`: 博客页面
    - `dashboard/`: 仪表盘页面
  - `(public)/`: 公开路由
    - `auth/`: 认证相关页面
    - `legal/`: 法律相关页面
  - `api/`: API 路由
    - `auth/`: 认证相关 API
  - `layout.tsx`: 根布局组件
  - `not-found.tsx`: 404 页面

### 认证相关 (`src/lib/auth/`)
- `config.ts`: Auth.js 配置
- `index.ts`: 认证模块导出
- `neo4j-adapter.ts`: Neo4j 适配器实现

### 国际化支持
- `messages/`: 翻译文件
  - `en.json`: 英文翻译
  - `zh.json`: 中文翻译
- `src/locales/`: 国际化工具
- `*.mdx`: 多语言内容文件

### 组件库 (`src/components/`)
- `common/`: 通用组件
- `layout/`: 布局组件
- `ui/`: UI 组件 (shadcn/ui)

### 数据库服务 (`src/services/neo4j/`)
- `index.ts`: 导出和初始化
- `init.ts`: 数据库连接初始化
- `query.ts`: 查询工具函数

## Update Command
使用以下命令更新项目结构：
```bash
tree -I "node_modules|.git"
```

## Notes
- 使用路由组 (`(protected)`, `(public)`) 组织路由和访问控制
- 认证相关代码集中在 `lib/auth` 目录
- 使用 MDX 支持多语言内容
- 完整的组件库支持
- Neo4j 数据库集成
