import LocalizedClientLink from "@modules/common/components/localized-client-link"

const categories = [
  { name: "Proteínas", handle: "proteinas" },
  { name: "Creatina", handle: "creatina" },
  { name: "Vitaminas", handle: "vitaminas-minerais" },
  { name: "Pré-treinos", handle: "pre-treinos" },
  { name: "Glutamina", handle: "glutamina" },
  { name: "Sono & Reparo", handle: "sono-reparo" },
  { name: "Termogênicos", handle: "termogenicos" },
  { name: "Kits", handle: "kits" },
]

const CategoryNav = () => {
  return (
    <section className="bg-brand-white py-16 small:py-24">
      <div className="content-container">
        <div className="flex items-end justify-between mb-10 small:mb-14">
          <div>
            <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-brand-green block mb-2">
              Navegue
            </span>
            <h2 className="font-sans font-semibold text-3xl small:text-4xl text-brand-brown">
              Por categoria
            </h2>
          </div>
          <LocalizedClientLink
            href="/store"
            className="hidden small:inline-flex items-center font-jakarta text-sm text-brand-brown-light hover:text-brand-green transition-colors cursor-pointer"
          >
            Ver todos os produtos →
          </LocalizedClientLink>
        </div>

        {/* Grid — scroll horizontal mobile, grid desktop */}
        <div className="flex small:grid small:grid-cols-4 medium:grid-cols-8 gap-4 small:gap-3 overflow-x-auto small:overflow-visible no-scrollbar -mx-6 px-6 small:mx-0 small:px-0">
          {categories.map((cat) => (
            <LocalizedClientLink
              key={cat.handle}
              href={`/categories/${cat.handle}`}
              className="group flex-shrink-0 flex flex-col items-center gap-3 min-w-[120px] small:min-w-0"
            >
              {/* Placeholder circular — imagem real do produto entra aqui depois */}
              <div className="aspect-square w-full bg-brand-beige rounded-full overflow-hidden relative flex items-center justify-center group-hover:bg-brand-beige-dark/50 transition-colors">
                <span className="font-sans font-bold text-3xl small:text-4xl text-brand-brown/20 tracking-tight">
                  {cat.name.charAt(0)}
                </span>
              </div>
              <span className="font-jakarta text-xs small:text-sm text-center text-brand-brown group-hover:text-brand-green transition-colors whitespace-nowrap">
                {cat.name}
              </span>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryNav
