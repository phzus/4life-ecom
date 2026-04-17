import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({ product })

  // Badges: extraídos de tags do produto
  const badges = product.tags?.slice(0, 1).map((t) => t.value) || []

  return (
    <LocalizedClientLink
      href={`/products/${product.handle}`}
      className="group block"
      data-testid="product-wrapper"
    >
      <div className="relative aspect-square w-full bg-brand-beige overflow-hidden mb-4">
        {/* Badges */}
        {badges.length > 0 && (
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
            {badges.map((badge) => (
              <span
                key={badge}
                className="font-jakarta text-[10px] uppercase tracking-wider bg-brand-green text-brand-beige px-2 py-1"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        {/* Collection tag (Objetivo) */}
        {product.collection?.title && (
          <span className="font-jakarta text-[10px] uppercase tracking-[0.15em] text-brand-green">
            {product.collection.title}
          </span>
        )}

        {/* Title */}
        <h3
          className="font-sans text-base small:text-lg font-medium text-brand-brown group-hover:text-brand-brown-light transition-colors"
          data-testid="product-title"
        >
          {product.title}
        </h3>

        {/* Price + parcelamento */}
        {cheapestPrice && (
          <div className="flex flex-col mt-1">
            <PreviewPrice price={cheapestPrice} />
          </div>
        )}
      </div>
    </LocalizedClientLink>
  )
}
