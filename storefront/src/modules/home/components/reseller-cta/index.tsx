import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowRight } from "lucide-react"

const ResellerCTA = () => {
  return (
    <section className="bg-brand-brown text-brand-beige py-16 small:py-24 overflow-hidden relative">
      <div className="content-container">
        <div className="grid grid-cols-1 small:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-brand-beige/60">
              Para Lojistas & Profissionais
            </span>
            <h2 className="font-sans font-semibold text-4xl small:text-5xl text-brand-beige tracking-tight leading-[1.05]">
              Construa com
              <br />
              a gente.
            </h2>
            <p className="font-jakarta text-base small:text-lg text-brand-beige/80 leading-relaxed max-w-lg">
              Margem saudável, giro real, logística eficiente e suporte
              institucional. A 4Life foi estruturada desde o início para escalar
              ao lado de parceiros estratégicos.
            </p>
            <LocalizedClientLink
              href="/revendedor"
              className="group inline-flex items-center gap-2 bg-brand-beige text-brand-brown px-8 py-4 mt-2 self-start font-jakarta text-sm tracking-wide hover:bg-brand-beige-dark transition-colors cursor-pointer"
            >
              Seja um revendedor
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.8}
              />
            </LocalizedClientLink>
          </div>

          {/* Bloco de diferenciais — lista tipográfica */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 font-jakarta">
            {[
              { label: "Margem", value: "Saudável" },
              { label: "Logística", value: "Eficiente" },
              { label: "Consistência", value: "ISO 9001" },
              { label: "Suporte", value: "Institucional" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1 border-t border-brand-beige/20 pt-4">
                <span className="text-xs uppercase tracking-widest text-brand-beige/50">
                  {item.label}
                </span>
                <span className="font-sans text-2xl small:text-3xl font-medium text-brand-beige">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResellerCTA
