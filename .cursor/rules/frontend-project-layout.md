# Frontend Project Layout

## Current Structure
```
.
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
│   │   ├── (protected)
│   │   │   ├── blogs
│   │   │   │   └── page.tsx
│   │   │   ├── dashboard
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (public)
│   │   │   ├── _components
│   │   │   │   └── welcome-toast.tsx
│   │   │   ├── error.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── legal
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
│   │   │   ├── login
│   │   │   │   ├── _components
│   │   │   │   │   ├── login-form.tsx
│   │   │   │   │   └── oauth-button.tsx
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── api
│   │   │   └── auth
│   │   │       └── [...nextauth]
│   │   │           └── route.ts
│   │   ├── favicon.ico   # Site favicon
│   │   ├── layout.tsx    # Root layout
│   │   └── not-found.tsx
│   ├── components/       # Reusable components
│   │   ├── common
│   │   │   └── logo.tsx
│   │   ├── layout
│   │   │   └── theme-provider.tsx
│   │   └── ui           # UI components (shadcn/ui)
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
│   ├── constants/        # Constants and configurations
│   ├── hooks/           # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/             # Utility library
│   │   ├── auth
│   │   │   ├── config.ts
│   │   │   ├── index.ts
│   │   │   └── neo4j-adapter.ts
│   │   └── utils.ts
│   ├── locales/         # Internationalization
│   │   ├── config.ts
│   │   ├── requests.ts
│   │   └── types.ts
│   ├── mdx-components.tsx  # MDX components configuration
│   ├── middleware.ts
│   ├── scripts/         # Utility scripts
│   ├── services/        # API services
│   │   ├── locale
│   │   │   ├── constants.ts
│   │   │   ├── cookie.ts
│   │   │   ├── detect.ts
│   │   │   └── index.ts
│   │   └── neo4j
│   │       ├── index.ts
│   │       ├── init.ts
│   │       └── query.ts
│   ├── stores/          # State management
│   ├── styles/          # Styling
│   │   └── globals.css  # Global styles
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration

38 directories, 107 files
```

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
    - `login/`: 登录页面
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

## Planned Structure
```
frontend/
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── (auth)/        # Auth related routes
│   │   ├── (dashboard)/   # Dashboard routes
│   │   └── (marketing)/   # Marketing pages
│   ├── components/        # Shared components
│   │   ├── ui/           # UI components
│   │   └── features/     # Feature components
│   ├── lib/              # Utility functions
│   ├── types/            # TypeScript types
│   └── styles/           # Component styles
├── public/               # Static assets
├── tests/               # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
└── config/              # Configuration files
```

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
