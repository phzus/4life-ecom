import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { ThemeOverride } from "../lib/theme-override"

const Widget = () => <ThemeOverride />

export const config = defineWidgetConfig({
  zone: "login.before",
})

export default Widget
