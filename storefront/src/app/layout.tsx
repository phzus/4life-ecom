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
  title: {
    default: "4Life Nutrition — Your Health, Our Mission.",
    template: "%s · 4Life Nutrition",
  },
  description:
    "Suplementação nutricional brasileira desenvolvida com ciência aplicada, rastreabilidade total e padrão ISO 9001. Whey, creatina, pré-treinos, vitaminas e mais.",
  keywords: [
    "suplementação",
    "suplementos",
    "whey protein",
    "creatina",
    "vitaminas",
    "pré-treino",
    "4Life Nutrition",
    "ISO 9001",
    "ANVISA",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "4Life Nutrition",
    title: "4Life Nutrition — Your Health, Our Mission.",
    description:
      "Suplementação nutricional brasileira com ciência aplicada e padrão ISO 9001.",
  },
  twitter: {
    card: "summary_large_image",
    title: "4Life Nutrition",
    description: "Your Health, Our Mission.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
