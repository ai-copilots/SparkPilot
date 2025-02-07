// 1. React 和 Next.js 内置模块
import Link from "next/link"

// 2. 外部依赖
import { getTranslations } from 'next-intl/server'

// 3. 项目内部模块
import { Logo } from "@/components/common/logo"
import { ThemeSwitcher } from "@/components/ui/theme-switcher"
import { LocaleSwitcher } from "@/components/ui/locale-switcher"

// 4. 当前目录模块


export default async function PublicLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    // const t = await getTranslations('Layout')

    return (
        <div className="flex min-h-screen flex-col">
          <header className="border-b bg-background">
            <div className="container flex h-16 items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <Logo />
              </div>
              <div className="flex items-center gap-4">
                <LocaleSwitcher />
                <ThemeSwitcher />
              </div>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t bg-background">
            <div className="container flex h-16 items-center justify-between px-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {/* <Link 
                  href="/legal/terms"
                  className="hover:text-foreground transition-colors"
                >
                  {t('footer.terms')}
                </Link>
                <Link 
                  href="/legal/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  {t('footer.privacy')}
                </Link> */}
              </div>
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} AI Copilots
              </div>
            </div>
          </footer>
        </div>
    )
  }