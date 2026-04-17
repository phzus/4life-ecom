import { Star } from "lucide-react"

// Depoimentos estáticos na Fase 1 (ver Decisão #10)
const testimonials = [
  {
    rating: 5,
    text: "Qualidade excelente. Uso há 6 meses e a diferença no treino é real. Chega rápido e o atendimento é impecável.",
    author: "Marina S.",
    role: "Cliente desde 2025",
  },
  {
    rating: 5,
    text: "Finalmente um suplemento brasileiro que comunica com clareza. A rastreabilidade e os selos me dão tranquilidade.",
    author: "Rodrigo T.",
    role: "Cliente desde 2025",
  },
  {
    rating: 5,
    text: "Recomendo para os meus pacientes. Formulação séria, sem promessas milagrosas, com embasamento técnico.",
    author: "Dra. Carolina M.",
    role: "Nutricionista parceira",
  },
]

const SocialProof = () => {
  return (
    <section className="bg-brand-white py-16 small:py-24">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-12 small:mb-16 gap-3">
          <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-brand-green">
            Confiança real
          </span>
          <h2 className="font-sans font-semibold text-3xl small:text-4xl text-brand-brown max-w-2xl">
            Quem usa, volta.
          </h2>
        </div>

        <div className="grid grid-cols-1 small:grid-cols-3 gap-6 small:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-brand-beige p-8 flex flex-col gap-5 border border-brand-beige-dark/30"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-brand-green text-brand-green"
                  />
                ))}
              </div>
              <p className="font-sans text-base small:text-lg text-brand-brown leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="flex flex-col gap-0.5 pt-2 border-t border-brand-beige-dark/30">
                <span className="font-jakarta text-sm font-medium text-brand-brown">
                  {t.author}
                </span>
                <span className="font-jakarta text-xs text-brand-brown-light">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
