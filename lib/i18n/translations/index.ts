import type { Language, Translation } from "../types"
import { en } from "./en"

export const translations: Record<Language, Translation> = {
  en,
  // Future translations can be added here:
  // es: spanish,
  // fr: french,
}

export function getTranslation(language: Language): Translation {
  return translations[language] || translations.en
}
