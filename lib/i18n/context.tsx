"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Language, Translation } from "./types"
import { defaultLanguage } from "./config"
import { getTranslation } from "./translations"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translation
  isLoading: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load saved language from localStorage
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && savedLanguage !== language) {
        setLanguage(savedLanguage)
      }
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    // Save language to localStorage when it changes
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  const translations = getTranslation(language)

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-yellow-600 dark:text-yellow-400">Loading...</div>
      </div>
    )
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t: translations, isLoading }}>
      {children}
    </I18nContext.Provider>
  )
}
