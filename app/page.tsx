'use client'

import StringMethodsExplorer from "@/components/string-methods-explorer"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { I18nProvider, useI18n } from "@/lib/i18n/context"

function PageContent() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-yellow-50/50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-js-600 md:text-4xl drop-shadow-sm dark:drop-shadow-[0_0_0.3rem_#F7DF1E40]">
              {t.header.title}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">{t.header.subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </header>
        <main>
          <StringMethodsExplorer />
        </main>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <I18nProvider>
      <PageContent />
    </I18nProvider>
  )
}
