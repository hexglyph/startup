"use client"

import { useState } from "react"
import type { Language } from "@/lib/translations"

const DEFAULT_LANGUAGE: Language = "en"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE)

  return { language, setLanguage }
}
