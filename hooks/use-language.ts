"use client"

import { useState, useEffect } from "react"

export type Language = "en" | "pt"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()
    const detectedLang: Language = browserLang.startsWith("pt") ? "pt" : "en"
    setLanguage(detectedLang)
  }, [])

  return { language, setLanguage }
}
