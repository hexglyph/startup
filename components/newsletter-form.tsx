"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitMessage("Inscrição realizada com sucesso!")
        setEmail("")
      } else {
        setSubmitMessage(result.message || "Erro ao processar inscrição")
      }
    } catch (error) {
      setSubmitMessage("Erro ao processar inscrição. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex max-w-md mx-auto gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor e-mail"
          required
          className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400"
        />
        <Button type="submit" disabled={isSubmitting} className="bg-cyan-500 hover:bg-cyan-600 text-white">
          {isSubmitting ? "Enviando..." : "Inscrever"}
        </Button>
      </form>
      {submitMessage && (
        <p
          className={`text-sm mt-2 text-center ${submitMessage.includes("sucesso") ? "text-green-400" : "text-red-400"}`}
        >
          {submitMessage}
        </p>
      )}
    </div>
  )
}
