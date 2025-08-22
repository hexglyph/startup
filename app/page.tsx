"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Bot, Cpu, Zap, Target } from "lucide-react"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"
import { NewsletterForm } from "@/components/newsletter-form"
import { DemoModal } from "@/components/demo-modal"

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hexglyph_logo-hxPImvsE8h6dHZDHToEfP2qeFmvAn7.png"
                alt="Hexglyph Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </div>
            <span className="text-2xl font-bold text-white">Hexglyph</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#solutions" className="text-slate-300 hover:text-white transition-colors font-medium">
              Soluções
            </a>
            <a href="#cases" className="text-slate-300 hover:text-white transition-colors font-medium">
              Casos
            </a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors font-medium">
              Sobre
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors font-medium">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Soluções de <span className="text-cyan-400">Inteligência Artificial</span> que levam sua empresa para o
                futuro
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Transformamos processos complexos em soluções inteligentes e automatizadas, impulsionando a eficiência e
                inovação do seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  Descobrir Soluções
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                >
                  Agendar Demonstração
                </Button>
              </div>
              <p className="text-slate-300 max-w-3xl mx-auto text-sm">
              Oferecemos tecnologias de IA personalizadas para diferentes setores e necessidades empresariais
              </p>
              </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <Card className="bg-slate-700 border-slate-600 hover:border-cyan-400 transition-colors text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Chatbots IA</h3>
                <p className="text-sm text-slate-300">Atendimento automatizado</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 hover:border-cyan-400 transition-colors text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Processamento</h3>
                <p className="text-sm text-slate-300">Análise de dados</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 hover:border-cyan-400 transition-colors text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Automação</h3>
                <p className="text-sm text-slate-300">Processos inteligentes</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 hover:border-cyan-400 transition-colors text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Predição</h3>
                <p className="text-sm text-slate-300">Análise preditiva</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/ai-dashboard-analytics.png"
                alt="Hexglyph Tecnologia"
                width={500}
                height={400}
                className="rounded-lg"
              />
              
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Hexglyph Tecnologia</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Somos especialistas em desenvolver soluções de Inteligência Artificial que transformam a maneira como as
                empresas operam. Nossa equipe combina expertise técnica com visão estratégica para entregar resultados
                excepcionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Nossos estudos de caso</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 overflow-hidden">
              <div className="relative h-48">
                <Image src="/ai-chatbot-customer-help.png" alt="Chatbot IA" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Chatbot IA para E-commerce</h3>
                <p className="text-slate-300 text-sm">
                  Implementação de assistente virtual que aumentou as vendas em 40% e reduziu o tempo de atendimento em
                  60%.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder-ixe4e.png" alt="Análise Preditiva" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Análise Preditiva de Estoque</h3>
                <p className="text-slate-300 text-sm">
                  Sistema de IA que prevê demanda e otimiza estoque, reduzindo custos em 30% para rede de varejo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 overflow-hidden">
              <div className="relative h-48">
                <Image src="/ai-document-processing.png" alt="Automação de Processos" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Automação de Documentos</h3>
                <p className="text-slate-300 text-sm">
                  Processamento inteligente de documentos que eliminou 80% do trabalho manual em empresa financeira.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Descubra o que a Hexglyph pode fazer pela sua empresa</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Transforme seus processos com soluções de IA personalizadas. Agende uma consulta gratuita e veja como
            podemos ajudar.
          </p>
          <Button
            size="lg"
            onClick={() => setIsDemoModalOpen(true)}
            className="bg-white text-cyan-600 hover:bg-cyan-50"
          >
            Agendar Consulta Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Fique por dentro das Novidades</h3>
          <p className="text-slate-300 mb-8">Receba insights sobre IA e inovação diretamente no seu e-mail</p>
          <NewsletterForm />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-slate-800">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Envie sua mensagem</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="text-white font-semibold">WhatsApp</div>
                    <div className="text-slate-400 text-sm">Fale conosco agora</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📍</span>
                </div>
                <div>
                  <div className="text-white font-semibold">LinkedIn</div>
                  <div className="text-slate-400 text-sm">Conecte-se conosco</div>
                </div>
              </div>
                
                
            </div>
          </div>
            <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Hexglyph</span>
              </div>
              <p className="text-slate-400 text-sm">
                Transformando empresas com soluções de Inteligência Artificial inovadoras e personalizadas.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Soluções</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                
                <li>Chatbots IA</li>
                <li>Automação</li>
                <li>Análise Preditiva</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Sobre nós</li>
                <li>Equipe</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Redes sociais</h4>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                  <span className="text-slate-400 text-xs">Li</span>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                  <span className="text-slate-400 text-xs">Tw</span>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                  <span className="text-slate-400 text-xs">Ig</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">© 2025 Hexglyph Tecnologia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  )
}
