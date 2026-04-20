import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { ThemeOverride } from "../lib/theme-override"

const Widget = () => <ThemeOverride />

export const config = defineWidgetConfig({
  zone: "customer.list.before",
})

export default Widget
