"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, getTranslations, type Translations } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("en")
  const [t, setTranslations] = useState<Translations>(getTranslations("en"))
  const [loaded, setLoaded] = useState(false) // tránh flicker

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "vi")) {
      setLanguageState(savedLanguage)
      setTranslations(getTranslations(savedLanguage))
    }
    setLoaded(true)
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    setTranslations(getTranslations(newLanguage))
    localStorage.setItem("language", newLanguage)
  }

  if (!loaded) {
    // 👇 tránh render chữ EN rồi đổi sang VI gây nháy
    return null
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
