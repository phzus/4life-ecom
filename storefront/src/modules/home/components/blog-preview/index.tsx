import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowUpRight } from "lucide-react"

// TODO: substituir por fetch do blog quando a extensão Medusa estiver pronta
const posts = [
  {
    slug: "como-escolher-o-melhor-whey",
    category: "Nutrição",
    title: "Como escolher o melhor whey protein para seu objetivo",
    excerpt:
      "Concentrado, isolado, hidrolisado — entenda as diferenças e saiba qual escolher.",
    date: "12 Abr 2026",
    readTime: "5 min",
  },
  {
    slug: "creatina-dose-diaria",
    category: "Performance",
    title: "Creatina: a dose correta e por que ela funciona",
    excerpt:
      "A ciência por trás de um dos suplementos mais estudados e seguros do mundo.",
    date: "08 Abr 2026",
    readTime: "6 min",
  },
  {
    slug: "sono-recuperacao",
    category: "Saúde",
    title: "A importância do sono para a recuperação muscular",
    excerpt:
      "Treinar bem é metade do caminho. A outra metade acontece enquanto você dorme.",
    date: "02 Abr 2026",
    readTime: "4 min",
  },
]

const BlogPreview = () => {
  return (
    <section className="bg-brand-beige py-16 small:py-24">
      <div className="content-container">
        <div className="flex items-end justify-between mb-10 small:mb-14 gap-4">
          <div>
            <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-brand-green block mb-2">
              Blog 4Life
            </span>
            <h2 className="font-sans font-semibold text-3xl small:text-4xl text-brand-brown max-w-xl">
              Conteúdo para quem leva saúde a sério
            </h2>
          </div>
          <LocalizedClientLink
            href="/blog"
            className="font-jakarta text-sm text-brand-brown-light hover:text-brand-green transition-colors cursor-pointer whitespace-nowrap"
          >
            Ver todos os posts →
          </LocalizedClientLink>
        </div>

        <div className="grid grid-cols-1 small:grid-cols-3 gap-6 small:gap-8">
          {posts.map((post) => (
            <LocalizedClientLink
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4"
            >
              <div className="relative aspect-[4/3] bg-brand-brown/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-sans font-bold text-6xl text-brand-brown/10">
                    {post.category.charAt(0)}
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-brand-beige px-3 py-1 font-jakarta text-[10px] uppercase tracking-widest text-brand-brown">
                  {post.category}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 font-jakarta text-xs text-brand-brown-light">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} de leitura</span>
                </div>
                <h3 className="font-sans text-xl font-medium text-brand-brown leading-snug group-hover:text-brand-brown-light transition-colors">
                  {post.title}
                </h3>
                <p className="font-jakarta text-sm text-brand-brown-light leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 font-jakarta text-sm text-brand-green mt-2">
                  Leia mais
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.8}
                  />
                </span>
              </div>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
