import { ArrowRight } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section
      className="relative w-full bg-brand-beige overflow-hidden flex items-center"
      style={{ height: "calc(100vh - var(--header-height))" }}
    >
      <div className="content-container grid grid-cols-1 small:grid-cols-12 gap-8 small:gap-16 items-center py-16 small:py-20 w-full">
        {/* Copy — esquerda */}
        <div className="small:col-span-6 flex flex-col gap-6 small:gap-8">
          <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-brand-green">
            Your Health, Our Mission.
          </span>
          <h1 className="text-display-sm small:text-display font-sans font-bold text-brand-brown tracking-tight leading-[1.05]">
            Suplementação com
            <br />
            <span className="italic font-light">ciência</span> e propósito.
          </h1>
          <p className="font-jakarta text-base small:text-lg text-brand-brown-light leading-relaxed max-w-md">
            Desenvolvido para quem leva saúde a sério. Formulações com padrão
            ISO 9001, rastreabilidade total e conformidade ANVISA.
          </p>
          <div className="flex flex-col xsmall:flex-row gap-3 pt-2">
            <LocalizedClientLink
              href="/store"
              className="group inline-flex items-center justify-center gap-2 bg-brand-brown text-brand-beige px-8 py-4 font-jakarta text-sm tracking-wide hover:bg-brand-brown-light transition-colors cursor-pointer"
            >
              Conheça os produtos
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.8}
              />
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/sobre"
              className="inline-flex items-center justify-center border border-brand-brown/20 text-brand-brown px-8 py-4 font-jakarta text-sm tracking-wide hover:border-brand-brown transition-colors cursor-pointer"
            >
              Nossa história
            </LocalizedClientLink>
          </div>
        </div>

        {/* Imagem — direita (placeholder white-label até ter foto real) */}
        <div className="small:col-span-6 relative">
          <div className="aspect-[4/5] small:aspect-[3/4] w-full relative bg-brand-brown/5 overflow-hidden">
            {/* Placeholder geométrico com tons da marca */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square rounded-full bg-brand-green/15 blur-3xl" />
              <div className="absolute top-[20%] right-[15%] w-32 h-32 rounded-full bg-brand-brown/10" />
              <div className="absolute bottom-[15%] left-[10%] w-40 h-40 rounded-full bg-brand-beige-dark/40" />
              <span className="relative z-10 font-sans font-bold text-display-lg text-brand-brown/10 tracking-tight">
                4Life
              </span>
            </div>
          </div>
          {/* Decorative label */}
          <div className="absolute -bottom-4 -left-4 small:bottom-6 small:-left-6 bg-brand-brown text-brand-beige px-4 py-2 font-jakarta text-xs tracking-widest uppercase">
            Premium · ISO 9001
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
