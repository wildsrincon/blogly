import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"

export const fontSans = FontSans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
