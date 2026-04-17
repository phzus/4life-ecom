import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import CategoryNav from "@modules/home/components/category-nav"
import BestSellers from "@modules/home/components/best-sellers"
import ShopByGoal from "@modules/home/components/shop-by-goal"
import ProductHighlight from "@modules/home/components/product-highlight"
import SocialProof from "@modules/home/components/social-proof"
import BlogPreview from "@modules/home/components/blog-preview"
import ResellerCTA from "@modules/home/components/reseller-cta"
import Manifesto from "@modules/home/components/manifesto"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "4Life Nutrition — Your Health, Our Mission.",
  description:
    "Suplementação nutricional brasileira desenvolvida com ciência aplicada e padrão ISO 9001. Energia, força, sono e saúde.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  return (
    <>
      {/* Seção 3: Hero */}
      <Hero />

      {/* Seção 4: Navegação por Categorias */}
      <CategoryNav />

      {/* Seção 5: Mais Vendidos */}
      <BestSellers region={region} />

      {/* Seção 6: Shop by Goal */}
      <ShopByGoal />

      {/* Seção 7: Product Highlight */}
      <ProductHighlight />

      {/* Seção 8: Social Proof */}
      <SocialProof />

      {/* Seção 9: Blog Preview */}
      <BlogPreview />

      {/* Seção 10: CTA Revendedor */}
      <ResellerCTA />

      {/* Seção 11: Manifesto Final */}
      <Manifesto />
    </>
  )
}
