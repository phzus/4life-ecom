import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function BestSellers({
  region,
}: {
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      limit: 4,
      fields: "*variants.calculated_price,+collection,+tags",
    },
  })

  if (!products || products.length === 0) {
    return null
  }

  return (
    <section className="bg-brand-beige py-16 small:py-24">
      <div className="content-container">
        <div className="flex items-end justify-between mb-10 small:mb-14">
          <div>
            <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-brand-green block mb-2">
              Destaques
            </span>
            <h2 className="font-sans font-semibold text-3xl small:text-4xl text-brand-brown">
              Mais vendidos
            </h2>
          </div>
          <LocalizedClientLink
            href="/store"
            className="font-jakarta text-sm text-brand-brown-light hover:text-brand-green transition-colors cursor-pointer whitespace-nowrap"
          >
            Ver todos →
          </LocalizedClientLink>
        </div>

        <div className="grid grid-cols-2 small:grid-cols-4 gap-x-4 small:gap-x-6 gap-y-10 small:gap-y-14">
          {products.map((product) => (
            <ProductPreview key={product.id} product={product} region={region} />
          ))}
        </div>
      </div>
    </section>
  )
}
