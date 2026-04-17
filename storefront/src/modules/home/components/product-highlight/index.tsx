import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowRight, Check } from "lucide-react"

// TODO: tornar este bloco dinâmico via metadata/admin no futuro
const highlight = {
  eyebrow: "Destaque",
  title: "Lifewhey",
  subtitle: "Whey Protein Concentrate",
  description:
    "24g de proteína por dose. Desenvolvido para recuperação muscular com absorção rápida e sabor limpo.",
  benefits: [
    "24g de proteína por porção",
    "Rastreabilidade total de matéria-prima",
    "4 sabores premium",
    "Padrão ISO 9001 Internacional",
  ],
  productHandle: "lifewhey",
}

const ProductHighlight = () => {
  return (
    <section className="bg-brand-beige py-16 small:py-24">
      <div className="content-container">
        <div className="grid grid-cols-1 small:grid-cols-2 gap-10 small:gap-16 items-center">
          {/* Imagem */}
          <div className="relative aspect-[4/5] small:aspect-square bg-brand-white overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full bg-brand-green/10" />
              <span className="relative z-10 font-sans font-bold text-display-lg text-brand-brown/10 tracking-tight">
                {highlight.title}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 bg-brand-brown text-brand-beige px-3 py-1.5 font-jakarta text-xs uppercase tracking-wider">
              {highlight.subtitle}
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col gap-6">
            <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-brand-green">
              {highlight.eyebrow}
            </span>
            <h2 className="font-sans font-semibold text-4xl small:text-5xl text-brand-brown tracking-tight leading-[1.05]">
              {highlight.title}
            </h2>
            <p className="font-jakarta text-base small:text-lg text-brand-brown-light leading-relaxed">
              {highlight.description}
            </p>

            <ul className="flex flex-col gap-3 pt-2">
              {highlight.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 font-jakarta text-sm text-brand-brown"
                >
                  <Check
                    className="w-4 h-4 text-brand-green mt-1 shrink-0"
                    strokeWidth={2}
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <LocalizedClientLink
              href={`/products/${highlight.productHandle}`}
              className="group inline-flex items-center gap-2 bg-brand-brown text-brand-beige px-8 py-4 mt-4 self-start font-jakarta text-sm tracking-wide hover:bg-brand-brown-light transition-colors cursor-pointer"
            >
              Conhecer o produto
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.8}
              />
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductHighlight
