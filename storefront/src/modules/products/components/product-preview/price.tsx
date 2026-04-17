import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) return null

  const isSale = price.price_type === "sale"

  // Parcelamento 12x (primeira sem juros, conforme regra da 4Life)
  const parcela = price.calculated_price_number
    ? (price.calculated_price_number / 12).toFixed(2).replace(".", ",")
    : null

  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-baseline gap-2">
        {isSale && price.original_price && (
          <span
            className="font-jakarta text-xs line-through text-brand-brown-light/60"
            data-testid="original-price"
          >
            {price.original_price}
          </span>
        )}
        <span
          className={`font-sans font-semibold text-base ${
            isSale ? "text-brand-green" : "text-brand-brown"
          }`}
          data-testid="price"
        >
          {price.calculated_price}
        </span>
      </div>
      {parcela && (
        <span className="font-jakarta text-xs text-brand-brown-light">
          12x de R$ {parcela}
        </span>
      )}
    </div>
  )
}
