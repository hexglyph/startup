"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, Code, Database, Zap, Users, Search, Cog } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

export default function HomePage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/hexglyph-logo.png" alt="Hexglyph Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-2xl font-bold text-gray-900">Hexglyph</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              {t.nav.services}
            </a>
            <a href="#products" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              {t.nav.products}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              {t.nav.contact}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/hexglyph-logo.png"
              alt="Hexglyph Logo"
              width={120}
              height={120}
              className="mx-auto mb-6 rounded-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {t.hero.title}
            <span className="text-gray-700 block">{t.hero.titleHighlight}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">{t.hero.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
              {t.hero.cta1}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
            >
              {t.hero.cta2}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            {t.services.title} <span className="text-gray-600">{t.services.titleHighlight}</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-gray-200 hover:border-gray-300 transition-colors hover:shadow-lg">
              <CardHeader>
                <Code className="h-10 w-10 text-gray-700 mb-2" />
                <CardTitle className="text-gray-900">{t.services.web.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.services.web.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-gray-300 transition-colors hover:shadow-lg">
              <CardHeader>
                <Database className="h-10 w-10 text-gray-700 mb-2" />
                <CardTitle className="text-gray-900">{t.services.api.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.services.api.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-gray-300 transition-colors hover:shadow-lg">
              <CardHeader>
                <Bot className="h-10 w-10 text-gray-700 mb-2" />
                <CardTitle className="text-gray-900">{t.services.ai.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.services.ai.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-gray-300 transition-colors hover:shadow-lg">
              <CardHeader>
                <Zap className="h-10 w-10 text-gray-700 mb-2" />
                <CardTitle className="text-gray-900">{t.services.automation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.services.automation.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            {t.products.title} <span className="text-gray-600">{t.products.titleHighlight}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Users className="h-12 w-12 text-gray-700" />
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    Destaque
                  </Badge>
                </div>
                <CardTitle className="text-gray-900 text-xl">{t.products.cem.title}</CardTitle>
                <CardDescription className="text-gray-600">{t.products.cem.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t.products.cem.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {t.products.cem.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Search className="h-12 w-12 text-gray-700" />
                <CardTitle className="text-gray-900 text-xl">{t.products.research.title}</CardTitle>
                <CardDescription className="text-gray-600">{t.products.research.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t.products.research.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {t.products.research.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Cog className="h-12 w-12 text-gray-700" />
                <CardTitle className="text-gray-900 text-xl">{t.products.custom.title}</CardTitle>
                <CardDescription className="text-gray-600">{t.products.custom.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t.products.custom.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {t.products.custom.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t.cta.title} <span className="text-gray-700">{t.cta.titleHighlight}</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{t.cta.description}</p>
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
            {t.cta.button}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-200 bg-gray-50 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/hexglyph-logo.png" alt="Hexglyph Logo" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold text-gray-900">Hexglyph</span>
            </div>
            <div className="text-gray-600 text-center md:text-right">
              <p>{t.footer.tagline}</p>
              <p className="text-sm mt-1">{t.footer.copyright.replace("2024", "2025")}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
