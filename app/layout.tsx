import type { Metadata } from "next"
import { Geist, Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pondok Pesantren Darussalam Bacan",
  description:
    "Pondok Pesantren Darussalam Bacan — Mencetak generasi Qur'ani yang mandiri secara ekonomi dan spiritual di Pulau Bacan, Halmahera Selatan. Dukung pendidikan 26 santri yatim kami.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={cn("h-full antialiased", geistSans.variable, inter.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
