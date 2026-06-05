"use client"

import { useState, useEffect } from "react"
import type { Language } from "@/lib/translations"

const DEFAULT_LANGUAGE: Language = "en"
const COUNTRY_COOKIE = "hexglyph-country"

function getCookie(name: string) {
  return document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split("=")[1]
}

function detectLanguage(): Language {
  const languages = [navigator.language, ...(navigator.languages ?? [])]
    .filter(Boolean)
    .map((language) => language.toLowerCase())
  const country = getCookie(COUNTRY_COOKIE)?.toUpperCase()
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const isJapan =
    country === "JP" ||
    timeZone === "Asia/Tokyo" ||
    languages.some((language) => language.startsWith("ja") || language.endsWith("-jp"))

  return isJapan ? "ja" : DEFAULT_LANGUAGE
}

function applyDocumentLanguage(language: Language) {
  document.documentElement.lang = language === "ja" ? "ja" : "en"
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)

  useEffect(() => {
    const detectedLanguage = detectLanguage()
    setLanguageState(detectedLanguage)
    applyDocumentLanguage(detectedLanguage)
  }, [])

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage)
    applyDocumentLanguage(nextLanguage)
  }

  return { language, setLanguage }
}
