# Frontend Project Layout

## Current Structure
```
.
├── README.md                 # Project documentation
├── bun.lockb                # Bun lockfile
├── components.json          # Components JSON
├── eslint.config.mjs        # ESLint configuration
├── messages
│   ├── en.json
│   └── zh.json
├── next-env.d.ts           # Next.js TypeScript declarations
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── public/                 # Static assets
│   └── logo.svg           # Logo image
├── src/                    # Source code
│   ├── app/               # Next.js 15 App Router
│   │   ├── (public)/      # Public routes
│   │   │   ├── _components
│   │   │   │   └── welcome-toast.tsx
│   │   │   ├── error.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── api/          # API routes
│   │   ├── favicon.ico   # Site favicon
│   │   ├── layout.tsx    # Root layout
│   │   └── not-found.tsx
│   ├── components/       # Reusable components
│   │   ├── common
│   │   │   └── logo.tsx
│   │   ├── layout
│   │   │   └── theme-provider.tsx
│   │   └── ui
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
│   │   └── utils.ts
│   ├── locales/         # Internationalization
│   │   ├── config.ts
│   │   ├── requests.ts
│   │   └── types.ts
│   ├── scripts/         # Utility scripts
│   ├── services/        # API services
│   │   └── locale
│   │       ├── constants.ts
│   │       ├── cookie.ts
│   │       ├── detect.ts
│   │       └── index.ts
│   ├── stores/          # State management
│   ├── styles/          # Styling
│   │   └── globals.css  # Global styles
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration

23 directories, 84 files
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
  - `layout.tsx`: 根布局组件
  - `page.tsx`: 首页组件
  - `globals.css`: 全局样式
  - `favicon.ico`: 网站图标

### Static Assets (`public/`)
- SVG 图标和图片
- 可直接通过 URL 路径访问的静态资源

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
- 使用 `src/` 目录组织所有源代码
- 配置文件保持在根目录
- 静态资源放在 `public/` 目录
- 使用 App Router 的路由组织功能
