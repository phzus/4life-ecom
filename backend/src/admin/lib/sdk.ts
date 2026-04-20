import Medusa from "@medusajs/js-sdk"

export const sdk = new Medusa({
  baseUrl: typeof window !== "undefined" ? window.location.origin : "",
  debug: process.env.NODE_ENV === "development",
  auth: {
    type: "session",
  },
})
