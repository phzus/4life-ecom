import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container, Heading, Textarea, Button, toast } from "@medusajs/ui"
import { DetailWidgetProps, AdminProduct } from "@medusajs/framework/types"
import { useState, useEffect } from "react"
import { sdk } from "../lib/sdk"

const ProductInfoWidget = ({ data }: DetailWidgetProps<AdminProduct>) => {
  const [nutritionalInfo, setNutritionalInfo] = useState<string>(
    (data.metadata?.nutritional_info as string) || ""
  )
  const [howToUse, setHowToUse] = useState<string>(
    (data.metadata?.how_to_use as string) || ""
  )
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    try {
      await sdk.admin.product.update(data.id, {
        metadata: {
          ...(data.metadata || {}),
          nutritional_info: nutritionalInfo,
          how_to_use: howToUse,
        },
      })
      toast.success("Informações salvas com sucesso")
    } catch (err) {
      toast.error("Erro ao salvar informações")
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Informações do Produto (PDP)</Heading>
      </div>

      <div className="px-6 py-4 space-y-4">
        <div>
          <label className="txt-compact-small-plus text-ui-fg-base block mb-2">
            Como Usar
          </label>
          <p className="txt-small text-ui-fg-subtle mb-2">
            Dosagem, horário, modo de preparo. Aparece na tab "Como Usar" da PDP.
          </p>
          <Textarea
            value={howToUse}
            onChange={(e) => setHowToUse(e.target.value)}
            placeholder="Ex: Tomar 1 scoop (5g) diluído em 200ml de água, 30 minutos antes do treino."
            rows={4}
          />
        </div>

        <div>
          <label className="txt-compact-small-plus text-ui-fg-base block mb-2">
            Tabela Nutricional
          </label>
          <p className="txt-small text-ui-fg-subtle mb-2">
            Composição e ingredientes. Aparece na tab "Tabela Nutricional" da PDP.
          </p>
          <Textarea
            value={nutritionalInfo}
            onChange={(e) => setNutritionalInfo(e.target.value)}
            placeholder="Ex: Porção de 30g contém: Proteínas 24g, Carboidratos 2g, Gorduras 1.5g..."
            rows={6}
          />
        </div>

        <div className="flex justify-end">
          <Button
            size="small"
            variant="primary"
            onClick={handleSave}
            isLoading={saving}
          >
            Salvar Informações
          </Button>
        </div>
      </div>
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "product.details.after",
})

export default ProductInfoWidget
