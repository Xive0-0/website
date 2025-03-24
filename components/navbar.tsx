"use client"

import Link from "next/link"
import { useState } from "react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Logo size={28} className="text-primary" />
          <span>AItAir</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary">
            Servizi
          </button>
          <button onClick={() => scrollToSection("portfolio")} className="text-sm font-medium hover:text-primary">
            Portfolio
          </button>
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary">
            Chi Siamo
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium hover:text-primary">
            Testimonianze
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary">
            Contatti
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <Button onClick={() => scrollToSection("contact")} className="hidden md:flex">
            Richiedi Preventivo
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-lg font-medium hover:text-primary text-left"
                >
                  Servizi
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-lg font-medium hover:text-primary text-left"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-lg font-medium hover:text-primary text-left"
                >
                  Chi Siamo
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-lg font-medium hover:text-primary text-left"
                >
                  Testimonianze
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-lg font-medium hover:text-primary text-left"
                >
                  Contatti
                </button>
                <Button onClick={() => scrollToSection("contact")} className="mt-4">
                  Richiedi Preventivo
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

