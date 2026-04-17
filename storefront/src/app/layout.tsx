import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Hanken_Grotesk, Plus_Jakarta_Sans } from "next/font/google"
import "styles/globals.css"

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "4Life Nutrition — Your Health, Our Mission.",
  description:
    "Suplementação nutricional brasileira desenvolvida com ciência aplicada e padrão ISO 9001.",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      data-mode="light"
      className={`${hanken.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-brand-beige text-brand-brown font-sans antialiased">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
