"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search } from "lucide-react"
import { stringMethods } from "@/lib/string-methods"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n/context"
import CodePlayground from "./code-playground"
import hljs from "highlight.js"

const categoryIcons = {
  searchAndTest: "🔍",
  transform: "🔄",
  extract: "✂️",
  modify: "✏️",
}

export default function StringMethodsExplorer() {
  const { t } = useI18n()
  const [selectedMethod, setSelectedMethod] = useState(stringMethods[0])
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMethods = stringMethods.filter((method) =>
    method.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const categories = [
    { key: "searchAndTest", ...t.categories.searchAndTest },
    { key: "transform", ...t.categories.transform },
    { key: "extract", ...t.categories.extract },
    { key: "modify", ...t.categories.modify },
  ]

  const groupedMethods = categories.map((category) => ({
    ...category,
    methods: filteredMethods.filter((method) => method.category === category.key),
  }))

  const hasResults = filteredMethods.length > 0

  return (
    <div className="grid gap-8 md:grid-cols-[350px_1fr] lg:grid-cols-[400px_1fr]">
      <div className="space-y-4">
        <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="mb-4 text-lg font-semibold text-js-600">{t.playground.title}</h2>

          <div className="relative mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
            <Input
              type="text"
              placeholder={t.common.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
            />
          </div>

          {hasResults ? (
            <div className="max-h-[65vh] overflow-y-auto pr-1">
              <Accordion type="multiple" defaultValue={categories.map((cat) => cat.key)} className="w-full">
                {groupedMethods.map(
                  (category) =>
                    category.methods.length > 0 && (
                      <AccordionItem
                        key={category.key}
                        value={category.key}
                        className="border-zinc-200 dark:border-zinc-800"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{categoryIcons[category.key as keyof typeof categoryIcons]}</span>
                            <div>
                              <div className="font-bold">{category.name}</div>
                              <div className="text-xs text-zinc-500 dark:text-zinc-400">{category.description}</div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-2">
                          <div className="grid gap-1 pl-2">
                            {category.methods.map((method) => (
                              <Button
                                key={method.name}
                                variant="ghost"
                                size="sm"
                                className={cn(
                                  "justify-start text-left font-mono h-8",
                                  selectedMethod.name === method.name
                                    ? "bg-js-100 text-js-900 hover:bg-js-200 dark:bg-js-600/20 dark:text-js-400 dark:hover:bg-js-600/30"
                                    : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
                                )}
                                onClick={() => setSelectedMethod(method)}
                              >
                                {method.name}()
                              </Button>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ),
                )}
              </Accordion>
            </div>
          ) : (
            <div className="py-8 text-center text-zinc-500 dark:text-zinc-400">
              <Search className="mx-auto mb-2 h-8 w-8 opacity-50" />
              <p>{t.common.noMethodsFound}</p>
              <p className="text-xs">{t.common.tryDifferentSearch}</p>
            </div>
          )}
        </div>
        <footer className="hidden md:block mt-16 border-zinc-200 pt-6 text-center text-sm text-zinc-500 dark:border-zinc-800">
          <p>{t.footer.createdWith} 
            <a 
              href={t.footer.creatorLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center py-1 px-2 mx-2 relative group"
            >
              <span className="absolute inset-0 bg-js-600 transition-all duration-300 skew-x-3 skew-y-3"></span>
              <span className="relative z-10 font-medium text-black">
                {t.footer.creatorLinkText}
              </span>
            </a>
          </p>


          {/* Donation Section */}
          <div className="text-center mt-7">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{t.donation.description}</p>
            <div className="flex gap-3 justify-center">
              <Button asChild variant="default" size="sm" className="bg-js-600 hover:bg-js-700 text-black">
                <a
                  href="https://buymeacoffee.com/devtwitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  ☕ {t.donation.buyMeCoffee}
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://hamibash.com/devtwitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  💖 {t.donation.supportOnHamiBash}
                </a>
              </Button>
            </div>
          </div>
        </footer>
      </div>

      <div className="space-y-6">
        <Card className="border-zinc-200 p-6 dark:border-zinc-800">
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <h2 className="text-2xl font-bold font-mono text-js-600">
              {selectedMethod.name}()
            </h2>
            <span className="rounded-full bg-js-100 px-2 py-1 text-xs font-medium text-js-900 dark:bg-js-600/20 dark:text-js-400">
              {selectedMethod.type}
            </span>
            <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {t.categories[selectedMethod.category as keyof typeof t.categories]?.name}
            </span>
          </div>

          <p className="mb-4 text-zinc-700 dark:text-zinc-300">{t.methods[selectedMethod.name]?.description}</p>

          <div className="mb-4">
            <h3 className="mb-2 font-semibold text-js-600">{t.common.syntax}</h3>
            <div className="rounded-md bg-zinc-100 p-3 font-mono text-sm text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              <pre className="language-javascript">
                <code dangerouslySetInnerHTML={{ 
                  __html: hljs.highlight(selectedMethod.syntax, { language: 'javascript' }).value 
                }} />
              </pre>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-js-600">{t.common.example}</h3>
            <div className="rounded-md bg-zinc-100 p-4 font-mono text-sm text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              <pre className="language-javascript whitespace-pre-wrap">
                <code dangerouslySetInnerHTML={{ 
                  __html: hljs.highlight(selectedMethod.example, { language: 'javascript' }).value 
                }} />
              </pre>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="mb-2 font-semibold text-js-600">{t.common.result}</h3>
            <div className="rounded-md bg-js-100 p-4 font-mono text-sm text-js-900 dark:bg-js-600/10 dark:text-js-400">
              <pre className="whitespace-pre-wrap">{selectedMethod.result}</pre>
            </div>
          </div>
        </Card>

        <Card className="border-zinc-200 p-6 dark:border-zinc-800">
          <CodePlayground method={selectedMethod} />
        </Card>

        {/* Mobile Footer - Hidden on desktop, shown on mobile */}
        <footer className="md:hidden mt-8 border-zinc-200 pt-6 text-center text-sm text-zinc-500 dark:border-zinc-800">
          <p>{t.footer.createdWith} 
            <a 
              href={t.footer.creatorLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center py-1 px-2 mx-2 relative group"
            >
              <span className="absolute inset-0 bg-js-600 transition-all duration-300 skew-x-3 skew-y-3"></span>
              <span className="relative z-10 font-medium text-black">
                {t.footer.creatorLinkText}
              </span>
            </a>
          </p>

          {/* Donation Section */}
          <div className="text-center mt-7">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{t.donation.description}</p>
            <div className="flex gap-3 justify-center">
              <Button asChild variant="default" size="sm" className="bg-js-600 hover:bg-js-700 text-black">
                <a
                  href="https://buymeacoffee.com/devtwitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  ☕ {t.donation.buyMeCoffee}
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://hamibash.com/devtwitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  💖 {t.donation.supportOnHamiBash}
                </a>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
