"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const NewsletterForm = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    // TODO: integrar com N8N webhook ou endpoint Medusa
    await new Promise((r) => setTimeout(r, 600))
    setStatus("success")
    setEmail("")
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
        required
        disabled={status === "loading"}
        className="flex-1 bg-transparent border-b border-brand-beige/30 pb-2 text-brand-beige placeholder:text-brand-beige/40 font-jakarta text-sm focus:outline-none focus:border-brand-beige transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        aria-label="Inscrever na newsletter"
        className="text-brand-beige hover:text-brand-green transition-colors pb-2 cursor-pointer disabled:opacity-50"
      >
        <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
      </button>
      {status === "success" && (
        <span className="text-xs font-jakarta text-brand-green ml-2">
          Inscrito!
        </span>
      )}
    </form>
  )
}

export default NewsletterForm
