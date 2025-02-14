> [!tip]- `npx create-next-app@latest --use-bun`
> ```
> simonxing@MacbookPro32 ~ % npx create-next-app@latest --use-bun
> ✔ What is your project named? … frontend
> ✔ Would you like to use TypeScript? … No / Yes
> ✔ Would you like to use ESLint? … No / Yes
> ✔ Would you like to use Tailwind CSS? … No / Yes
> ✔ Would you like your code inside a `src/` directory? … No / Yes
> ✔ Would you like to use App Router? (recommended) … No / Yes
> ✔ Would you like to use Turbopack for `next dev`? … No / Yes
> ✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
> Creating a new Next.js app in /Users/simonxing/frontend.
> 
> Using bun.
> 
> Initializing project with template: app-tw
> 
> 
> Installing dependencies:
> - react
> - react-dom
> - next
> 
> Installing devDependencies:
> - typescript
> - @types/node
> - @types/react
> - @types/react-dom
> - postcss
> - tailwindcss
> - eslint
> - eslint-config-next
> - @eslint/eslintrc
> 
> bun install v1.1.45 (196621f2)
> 
> + @eslint/eslintrc@3.2.0
> + @types/node@20.17.17 (v22.13.1 available)
> + @types/react@19.0.8
> + @types/react-dom@19.0.3
> + eslint@9.19.0
> + eslint-config-next@15.1.6
> + postcss@8.5.1
> + tailwindcss@3.4.17 (v4.0.4 available)
> + typescript@5.7.3
> + next@15.1.6
> + react@19.0.0
> + react-dom@19.0.0
> 
> 359 packages installed [12.74s]
> Initialized a git repository.
> 
> Success! Created frontend at /Users/simonxing/frontend
> ```


> [!tip]- `bun run next telemetry --disable`
> ```
> simonxing@MacbookPro32 frontend % bun run next telemetry --disable
> Next.js' telemetry collection is already disabled.
> 
> Status: Disabled
> 
> You have opted-out of Next.js' anonymous telemetry program.
> No data will be collected from your machine.
> 
> Learn more: https://nextjs.org/telemetry
> ```

> [!tip]- frontend commands
> ```
> bun dev
> bun lint
> 
> bun run build
> bun start
>
>tree -I "node_modules|.git"
> ```

> [!tip]- `bunx --bun shadcn@latest init`
> ```
> simonxing@MacbookPro32 frontend % bunx --bun shadcn@latest init
> ✔ Preflight checks.
> ✔ Verifying framework. Found Next.js.
> ✔ Validating Tailwind CSS.
> ✔ Validating import alias.
> ✔ Which style would you like to use? › New York
> ✔ Which color would you like to use as the base color? › Zinc
> ✔ Would you like to use CSS variables for theming? … no / yes
> ✔ Writing components.json.
> ✔ Checking registry.
> ✔ Updating tailwind.config.ts
> ✔ Updating src/styles/globals.css
> ✔ Installing dependencies.
> ✔ Created 1 file:
>   - src/lib/utils.ts
> 
> Success! Project initialization completed.
> You may now add components.
> ```

> [!tip]- `bunx --bun shadcn@latest add`
> ```
> simonxing@MacbookPro32 frontend % bunx --bun shadcn@latest add
> ✔ Which components would you like to add? › accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toast, toggle, toggle-group, tooltip
> ✔ Checking registry.
> ✔ Updating tailwind.config.ts
> ✔ Updating src/styles/globals.css
> ✔ Installing dependencies.
> ✔ Created 50 files:
>   - src/components/ui/accordion.tsx
>   - src/components/ui/alert.tsx
>   - src/components/ui/alert-dialog.tsx
>   - src/components/ui/button.tsx
>   - src/components/ui/aspect-ratio.tsx
>   - src/components/ui/avatar.tsx
>   - src/components/ui/badge.tsx
>   - src/components/ui/breadcrumb.tsx
>   - src/components/ui/calendar.tsx
>   - src/components/ui/card.tsx
>   - src/components/ui/carousel.tsx
>   - src/components/ui/chart.tsx
>   - src/components/ui/checkbox.tsx
>   - src/components/ui/collapsible.tsx
>   - src/components/ui/command.tsx
>   - src/components/ui/dialog.tsx
>   - src/components/ui/context-menu.tsx
>   - src/components/ui/drawer.tsx
>   - src/components/ui/dropdown-menu.tsx
>   - src/components/ui/form.tsx
>   - src/components/ui/label.tsx
>   - src/components/ui/hover-card.tsx
>   - src/components/ui/input.tsx
>   - src/components/ui/input-otp.tsx
>   - src/components/ui/menubar.tsx
>   - src/components/ui/navigation-menu.tsx
>   - src/components/ui/pagination.tsx
>   - src/components/ui/popover.tsx
>   - src/components/ui/progress.tsx
>   - src/components/ui/radio-group.tsx
>   - src/components/ui/resizable.tsx
>   - src/components/ui/scroll-area.tsx
>   - src/components/ui/select.tsx
>   - src/components/ui/separator.tsx
>   - src/components/ui/sheet.tsx
>   - src/components/ui/sidebar.tsx
>   - src/components/ui/tooltip.tsx
>   - src/hooks/use-mobile.tsx
>   - src/components/ui/skeleton.tsx
>   - src/components/ui/slider.tsx
>   - src/components/ui/sonner.tsx
>   - src/components/ui/switch.tsx
>   - src/components/ui/table.tsx
>   - src/components/ui/tabs.tsx
>   - src/components/ui/textarea.tsx
>   - src/components/ui/toast.tsx
>   - src/hooks/use-toast.ts
>   - src/components/ui/toaster.tsx
>   - src/components/ui/toggle.tsx
>   - src/components/ui/toggle-group.tsx
> ```

> [!tips]- `bun add @icons-pack/react-simple-icons`
> ```
> simonxing@MacbookPro32 frontend % bun add @icons-pack/react-simple-icons
> bun add v1.1.45 (196621f2)
> 
> installed @icons-pack/react-simple-icons@11.2.0
> 
> 1 package installed [2.26s]
> ```

> [!tip]- `bun add next-themes`
> ```
> simonxing@MacbookPro32 frontend % bun add next-themes
> bun add v1.1.45 (196621f2)
> 
> installed next-themes@0.4.4
> 
> [5.29s] done
> ```

> [!tips]- `bun add next-intl`
> ```
> simonxing@MacbookPro32 frontend % bun add next-intl
> bun add v1.1.45 (196621f2)
> 
> installed next-intl@3.26.3
> 
> 10 packages installed [3.98s]
> ```


> [!tip]- `bun add -d eslint-plugin-next-intl eslint-plugin-react`
> ```
> simonxing@MacbookPro32 frontend % bun add -d eslint-plugin-next-intl eslint-plugin-react
> bun add v1.1.45 (196621f2)
> warn: incorrect peer dependency "eslint@9.19.0"
> 
> installed eslint-plugin-next-intl@1.3.1
> installed eslint-plugin-react@7.37.4
> 
> 3 packages installed [2.23s]
> ```