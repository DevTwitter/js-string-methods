import type { LanguageConfig, Language } from "./types"

export const languages: LanguageConfig[] = [
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
  },
  // Future languages can be added here:
  // {
  //   code: 'es',
  //   name: 'Español',
  //   flag: '🇪🇸'
  // },
  // {
  //   code: 'fr',
  //   name: 'Français',
  //   flag: '🇫🇷'
  // }
]

export const defaultLanguage: Language = "en"
