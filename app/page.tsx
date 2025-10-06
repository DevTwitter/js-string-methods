'use client'

import StringMethodsExplorer from "@/components/string-methods-explorer"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { I18nProvider, useI18n } from "@/lib/i18n/context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

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
            {/* No Language implemented yet */}
            {/* <LanguageSwitcher /> */}
            {/* github button */}
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/DevTwitter/js-string-methods">
                <Github className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </header>
        <main>
          <StringMethodsExplorer />
        </main>
        
        {/* Related Projects Section */}
        <section className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-js-600 mb-4">{t.relatedProjects.title}</h2>
            <div className="max-w-md mx-auto">
              <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {t.relatedProjects.stringMethods.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  {t.relatedProjects.stringMethods.description}
                </p>
                <div className="flex gap-2">
                  <Button asChild variant="default" className="flex-1">
                    <Link href="https://js-array-methods-theta.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t.relatedProjects.stringMethods.demoButton}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="https://github.com/DevTwitter/js-array-methods" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      {t.relatedProjects.stringMethods.githubButton}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
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
