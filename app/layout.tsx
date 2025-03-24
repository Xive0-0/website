import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Preloader from "@/components/preloader"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AItAir - Siti Web Professionali per Liberi Professionisti",
  description:
    "Agenzia specializzata nella creazione di siti web per liberi professionisti con integrazione di siti web.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Preloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'