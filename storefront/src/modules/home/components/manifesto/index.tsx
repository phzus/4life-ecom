import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowRight } from "lucide-react"

const Manifesto = () => {
  return (
    <section className="bg-brand-beige py-24 small:py-40 overflow-hidden">
      <div className="content-container flex flex-col items-center text-center gap-8 small:gap-10">
        <span className="font-jakarta text-xs uppercase tracking-[0.3em] text-brand-green">
          Nosso compromisso
        </span>

        <h2 className="font-sans font-bold text-5xl small:text-7xl medium:text-8xl text-brand-brown tracking-tight leading-[0.95] max-w-5xl">
          Your Health,{" "}
          <span className="italic font-light">Our Mission.</span>
        </h2>

        <p className="font-jakarta text-base small:text-lg text-brand-brown-light leading-relaxed max-w-2xl">
          A 4Life Nutrition nasce com uma visão clara: construir uma marca
          sólida, confiável e duradoura no mercado de suplementos — baseada em
          ciência, consistência e relacionamento de longo prazo.
        </p>

        <LocalizedClientLink
          href="/sobre"
          className="group inline-flex items-center gap-2 font-jakarta text-sm tracking-wide text-brand-brown hover:text-brand-green transition-colors cursor-pointer border-b border-brand-brown/30 hover:border-brand-green pb-1"
        >
          Conheça a 4Life
          <ArrowRight
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth={1.5}
          />
        </LocalizedClientLink>
      </div>
    </section>
  )
}

export default Manifesto
