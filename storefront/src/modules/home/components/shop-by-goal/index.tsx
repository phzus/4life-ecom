import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowUpRight } from "lucide-react"

const goals = [
  {
    title: "Energia & Performance",
    handle: "energia-performance",
    description: "Foco, disposição e rendimento para o dia a dia.",
    accent: "#6A714E",
  },
  {
    title: "Força & Massa Muscular",
    handle: "forca-massa",
    description: "Ganho de massa, recuperação e construção muscular.",
    accent: "#412E28",
  },
  {
    title: "Sono & Recuperação",
    handle: "sono-recuperacao",
    description: "Descanso profundo e reparo do organismo.",
    accent: "#5C443C",
  },
  {
    title: "Saúde & Longevidade",
    handle: "saude-longevidade",
    description: "Bem-estar integral, imunidade e qualidade de vida.",
    accent: "#6A714E",
  },
]

const ShopByGoal = () => {
  return (
    <section className="bg-brand-white py-16 small:py-24">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-12 small:mb-16 gap-3">
          <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-brand-green">
            Por objetivo
          </span>
          <h2 className="font-sans font-semibold text-3xl small:text-4xl text-brand-brown max-w-2xl">
            Escolha seu caminho para o bem-estar
          </h2>
          <p className="font-jakarta text-base text-brand-brown-light max-w-xl mt-2">
            Nossos produtos são organizados por objetivo — selecione o que
            importa pra você agora.
          </p>
        </div>

        <div className="grid grid-cols-1 small:grid-cols-2 gap-4 small:gap-6">
          {goals.map((goal) => (
            <LocalizedClientLink
              key={goal.handle}
              href={`/collections/${goal.handle}`}
              className="group relative bg-brand-beige aspect-[16/10] small:aspect-[16/9] overflow-hidden flex flex-col justify-between p-8 small:p-10 transition-colors hover:bg-brand-beige-dark/60 cursor-pointer"
            >
              {/* Decorative shape */}
              <div
                className="absolute top-0 right-0 w-40 h-40 small:w-56 small:h-56 rounded-full opacity-20 translate-x-1/3 -translate-y-1/3 transition-transform group-hover:scale-110"
                style={{ backgroundColor: goal.accent }}
              />

              <span className="font-jakarta text-xs uppercase tracking-widest text-brand-brown-light relative z-10">
                Objetivo
              </span>

              <div className="relative z-10 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-sans font-semibold text-2xl small:text-3xl text-brand-brown tracking-tight leading-tight mb-2">
                    {goal.title}
                  </h3>
                  <p className="font-jakarta text-sm text-brand-brown-light max-w-xs">
                    {goal.description}
                  </p>
                </div>
                <ArrowUpRight
                  className="w-6 h-6 text-brand-brown shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </div>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopByGoal
