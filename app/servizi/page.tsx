import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServiziPage() {
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
                  Servizi
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">I Nostri Servizi Completi</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Offriamo soluzioni web complete per liberi professionisti, dalla progettazione alla realizzazione e
                  manutenzione del sito web.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Design e Sviluppo Web</h2>
                <p className="text-muted-foreground">
                  Creiamo siti web professionali, moderni e responsive che si adattano perfettamente a qualsiasi
                  dispositivo.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Design personalizzato e unico</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Ottimizzazione per dispositivi mobili</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Interfaccia utente intuitiva</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Tempi di caricamento rapidi</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/design.jpg"
                  width={600}
                  height={400}
                  alt="Design Web"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2">
              <div className="flex items-center justify-center order-last lg:order-first">
                <Image src="/images/seo.jpg" width={600} height={400} alt="SEO" className="rounded-lg object-cover" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Ottimizzazione SEO</h2>
                <p className="text-muted-foreground">
                  Miglioriamo la visibilità del tuo sito web sui motori di ricerca per attirare più visitatori
                  qualificati.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Analisi delle parole chiave</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Ottimizzazione on-page</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Ottimizzazione tecnica</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Monitoraggio e reportistica</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Integrazione Web</h2>
                <p className="text-muted-foreground">
                  Colleghiamo il tuo sito web con strumenti e piattaforme esterne per migliorare la funzionalità e
                  l'efficienza.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Integrazione con CRM</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Sistemi di prenotazione online</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Gateway di pagamento</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Automazione del marketing</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/integration.jpg"
                  width={600}
                  height={400}
                  alt="Integrazione Web"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2">
              <div className="flex items-center justify-center order-last lg:order-first">
                <Image
                  src="/images/maintenance.jpg"
                  width={600}
                  height={400}
                  alt="Manutenzione"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Manutenzione e Supporto</h2>
                <p className="text-muted-foreground">
                  Offriamo servizi di manutenzione continua e supporto tecnico per garantire che il tuo sito web
                  funzioni sempre al meglio.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Aggiornamenti di sicurezza</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Backup regolari</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Monitoraggio delle prestazioni</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Supporto tecnico dedicato</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/#contact">
                  Richiedi un Preventivo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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

