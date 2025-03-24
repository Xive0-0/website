import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "Studio Legale Bianchi",
      category: "Avvocato",
      description: "Sito web professionale per uno studio legale specializzato in diritto civile e commerciale.",
      image: "/images/portfolio1.jpg",
    },
    {
      id: 2,
      title: "Dr. Rossi Consulenza",
      category: "Consulente Finanziario",
      description: "Piattaforma web con area clienti e sistema di prenotazione appuntamenti online.",
      image: "/images/portfolio2.jpg",
    },
    {
      id: 3,
      title: "Arch. Verdi Design",
      category: "Architetto",
      description: "Portfolio online con galleria progetti e form di contatto per preventivi.",
      image: "/images/portfolio3.jpg",
    },
    {
      id: 4,
      title: "Studio Medico Esposito",
      category: "Medico",
      description: "Sito web con sistema di prenotazione visite e area informativa per i pazienti.",
      image: "/images/portfolio4.jpg",
    },
    {
      id: 5,
      title: "Consulenza HR Romano",
      category: "Consulente HR",
      description: "Sito web professionale con blog e area download per risorse gratuite.",
      image: "/images/portfolio5.jpg",
    },
    {
      id: 6,
      title: "Digital Marketing Ferrara",
      category: "Consulente Marketing",
      description: "Sito web con portfolio progetti, testimonianze clienti e form lead generation.",
      image: "/images/portfolio6.jpg",
    },
    {
      id: 7,
      title: "Studio Commercialista Martini",
      category: "Commercialista",
      description: "Sito web con area FAQ, calcolatori fiscali e sistema di prenotazione consulenze.",
      image: "/images/portfolio1.jpg",
    },
    {
      id: 8,
      title: "Psicologo Dr. Ricci",
      category: "Psicologo",
      description: "Sito web con presentazione servizi, blog tematico e sistema di prenotazione sedute.",
      image: "/images/portfolio2.jpg",
    },
    {
      id: 9,
      title: "Fotografo Marino",
      category: "Fotografo",
      description: "Portfolio fotografico con gallerie tematiche e sistema di prenotazione servizi.",
      image: "/images/portfolio3.jpg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-6 w-6" />
            <span>AItAir</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#services" className="text-sm font-medium hover:text-primary">
              Servizi
            </Link>
            <Link href="/#portfolio" className="text-sm font-medium hover:text-primary">
              Portfolio
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary">
              Chi Siamo
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonianze
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary">
              Contatti
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="/#contact">Richiedi Preventivo</Link>
            </Button>
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
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Portfolio
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">I Nostri Progetti</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Esplora alcuni dei siti web che abbiamo creato per liberi professionisti come te.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button variant="outline" className="rounded-full">
                Tutti
              </Button>
              <Button variant="outline" className="rounded-full">
                Avvocati
              </Button>
              <Button variant="outline" className="rounded-full">
                Consulenti
              </Button>
              <Button variant="outline" className="rounded-full">
                Medici
              </Button>
              <Button variant="outline" className="rounded-full">
                Architetti
              </Button>
              <Button variant="outline" className="rounded-full">
                Altri
              </Button>
            </div>

            <div className="mx-auto grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <div key={item.id} className="group overflow-hidden rounded-lg border">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      width={600}
                      height={400}
                      alt={item.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-primary-foreground"
                      >
                        Vedi Dettagli <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline" size="lg">
                Carica Altri Progetti
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Vuoi un Sito Web Come Questi?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Contattaci oggi stesso per un preventivo gratuito e scopri come possiamo aiutarti a creare un sito web
                  professionale per la tua attività.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/#contact">
                    Richiedi Preventivo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/#services">Scopri i Nostri Servizi</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} AItAir. Tutti i diritti riservati.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Termini
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Cookie
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

