import { Instagram } from "lucide-react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Logo from "@modules/layout/components/logo"
import NewsletterForm from "@modules/layout/components/newsletter-form"

const footerSections = {
  objetivos: {
    title: "Objetivos",
    links: [
      { label: "Energia & Performance", href: "/collections/energia-performance" },
      { label: "Força & Massa Muscular", href: "/collections/forca-massa" },
      { label: "Sono & Recuperação", href: "/collections/sono-recuperacao" },
      { label: "Saúde & Longevidade", href: "/collections/saude-longevidade" },
    ],
  },
  categorias: {
    title: "Categorias",
    links: [
      { label: "Proteínas", href: "/categories/proteinas" },
      { label: "Creatina", href: "/categories/creatina" },
      { label: "Vitaminas e Minerais", href: "/categories/vitaminas-minerais" },
      { label: "Pré-treinos", href: "/categories/pre-treinos" },
      { label: "Essenciais 4Life", href: "/categories/essenciais-4life" },
    ],
  },
  institucional: {
    title: "Institucional",
    links: [
      { label: "Sobre a 4Life", href: "/sobre" },
      { label: "Blog", href: "/blog" },
      { label: "Contato", href: "/contato" },
      { label: "Seja Revendedor", href: "/revendedor" },
    ],
  },
  atendimento: {
    title: "Atendimento",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Trocas e Devoluções", href: "/politicas/trocas" },
      { label: "Frete e Entrega", href: "/politicas/frete" },
      { label: "Política de Privacidade", href: "/politicas/privacidade" },
      { label: "Termos de Uso", href: "/politicas/termos" },
    ],
  },
}

export default async function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-beige relative overflow-hidden">
      {/* Camada 1 — Institucional + Newsletter */}
      <div className="content-container pt-20 pb-16">
        <div className="grid grid-cols-1 small:grid-cols-12 gap-12">
          {/* Brand block */}
          <div className="small:col-span-4 flex flex-col gap-6">
            <LocalizedClientLink href="/" className="inline-block">
              <Logo variant="bege" type="completa" width={140} height={56} />
            </LocalizedClientLink>
            <p className="font-jakarta text-sm text-brand-beige/70 leading-relaxed max-w-xs">
              Suplementação nutricional brasileira desenvolvida com ciência
              aplicada e padrão ISO 9001.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com/4lifenutrition_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da 4Life"
                className="text-brand-beige/70 hover:text-brand-beige transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="small:col-span-5 grid grid-cols-2 small:grid-cols-4 gap-8">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key} className="flex flex-col gap-3">
                <h4 className="font-jakarta text-xs uppercase tracking-wider text-brand-beige/60">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <LocalizedClientLink
                        href={link.href}
                        className="font-jakarta text-sm text-brand-beige/80 hover:text-brand-beige transition-colors"
                      >
                        {link.label}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="small:col-span-3 flex flex-col gap-4">
            <h4 className="font-jakarta text-xs uppercase tracking-wider text-brand-beige/60">
              Newsletter
            </h4>
            <p className="font-sans text-base leading-snug text-brand-beige">
              Receba ofertas exclusivas e novidades.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Camada 2 — Assinatura Tipográfica (efeito fade) */}
      <div className="relative overflow-hidden select-none pointer-events-none">
        <div
          aria-hidden="true"
          className="text-signature font-sans font-extrabold text-brand-beige whitespace-nowrap text-center leading-[0.85]"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.15) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.15) 100%)",
          }}
        >
          4Life Nutrition
        </div>
      </div>

      {/* Camada 3 — Legal/Bottom Bar */}
      <div className="border-t border-brand-beige/10">
        <div className="content-container py-6 flex flex-col small:flex-row items-start small:items-center justify-between gap-4 font-jakarta text-xs text-brand-beige/60">
          <div className="flex flex-col small:flex-row gap-2 small:gap-4">
            <span>© {new Date().getFullYear()} 4Life Nutrition</span>
            <span className="hidden small:inline">·</span>
            <span>CNPJ: 27.699.666/0001-36</span>
            <span className="hidden small:inline">·</span>
            <span>
              Av. Davino Mattos, 417 - 2º Andar, Centro · Guarapari-ES ·
              29200-480
            </span>
          </div>
          <div className="flex gap-4">
            <LocalizedClientLink
              href="/politicas/privacidade"
              className="hover:text-brand-beige transition-colors"
            >
              Privacidade
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/politicas/termos"
              className="hover:text-brand-beige transition-colors"
            >
              Termos
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/politicas/cookies"
              className="hover:text-brand-beige transition-colors"
            >
              Cookies
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
