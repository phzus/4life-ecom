import { Suspense } from "react"
import { Search, User } from "lucide-react"

import { listRegions } from "@lib/data/regions"
import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import AnnouncementBar from "@modules/layout/components/announcement-bar"
import Logo from "@modules/layout/components/logo"

const mainLinks = [
  { label: "Produtos", href: "/store" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/sobre" },
  { label: "Seja Revendedor", href: "/revendedor" },
]

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <>
      <AnnouncementBar />
      <div className="sticky top-0 inset-x-0 z-50 group">
        <header className="relative bg-brand-beige border-b border-brand-beige-dark">
          <nav className="content-container flex items-center justify-between w-full h-16">
            {/* Left — Mobile menu + Logo + Nav links */}
            <div className="flex items-center gap-x-8 small:gap-x-10">
              <div className="small:hidden">
                <SideMenu
                  regions={regions}
                  locales={locales}
                  currentLocale={currentLocale}
                />
              </div>
              <LocalizedClientLink
                href="/"
                className="flex items-center"
                data-testid="nav-store-link"
              >
                <Logo
                  variant="marrom"
                  type="completa"
                  width={67}
                  height={28}
                  priority
                />
              </LocalizedClientLink>
              <div className="hidden small:flex items-center gap-x-7 font-jakarta text-sm">
                {mainLinks.map((link) => (
                  <LocalizedClientLink
                    key={link.href}
                    href={link.href}
                    className="text-brand-brown hover:text-brand-green transition-colors"
                  >
                    {link.label}
                  </LocalizedClientLink>
                ))}
              </div>
            </div>

            {/* Right — Utilities */}
            <div className="flex items-center gap-x-5">
              <button
                aria-label="Buscar"
                className="text-brand-brown hover:text-brand-green transition-colors cursor-pointer"
              >
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <LocalizedClientLink
                href="/account"
                aria-label="Minha conta"
                className="text-brand-brown hover:text-brand-green transition-colors"
                data-testid="nav-account-link"
              >
                <User className="w-5 h-5" strokeWidth={1.5} />
              </LocalizedClientLink>
              <Suspense
                fallback={
                  <LocalizedClientLink
                    href="/cart"
                    className="text-brand-brown hover:text-brand-green transition-colors font-jakarta text-sm"
                    data-testid="nav-cart-link"
                  >
                    Carrinho (0)
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}
