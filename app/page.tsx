"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Code, Laptop, Mail, MessageSquare, Phone, Users, Globe, Brain, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Logo } from "@/components/logo"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Siti Web Professionali per Liberi Professionisti
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Trasformiamo la tua presenza online con siti web moderni, responsive e ottimizzati per convertire i
                    visitatori in clienti.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    onClick={() => {
                      const contactSection = document.getElementById("contact")
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Inizia Ora <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      const portfolioSection = document.getElementById("portfolio")
                      if (portfolioSection) {
                        portfolioSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Vedi i Nostri Lavori
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/hero.jpg"
                  width={550}
                  height={550}
                  alt="Hero Image"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  I Nostri Servizi
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Soluzioni Web Complete per Liberi Professionisti
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Offriamo servizi personalizzati per aiutarti a costruire una presenza online efficace e professionale.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Laptop className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Design Responsive</CardTitle>
                  <CardDescription>
                    Siti web ottimizzati per tutti i dispositivi, dal desktop allo smartphone.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Layout adattivi</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Esperienza utente ottimizzata</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Caricamento veloce</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Sviluppo Web</CardTitle>
                  <CardDescription>Codice pulito e ottimizzato per prestazioni eccellenti.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Tecnologie moderne</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>SEO integrato</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Sicurezza avanzata</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Logo size={40} className="text-primary mb-4" />
                  <CardTitle>Integrazione Web</CardTitle>
                  <CardDescription>Connessione con strumenti e piattaforme esterne.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>API e servizi esterni</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>CRM e strumenti di marketing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Sistemi di pagamento</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Prezzi
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">I Nostri Pacchetti</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Scegli il pacchetto più adatto alle tue esigenze
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Globe className="h-10 w-10 text-primary" />
                    <div className="text-2xl font-bold">€999</div>
                  </div>
                  <CardTitle>Landing Page</CardTitle>
                  <CardDescription>
                    Design sito web professionale e moderno
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Design responsive</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Ottimizzazione SEO</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Form di contatto</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Integrazione social</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full">Richiedi Preventivo</Button>
                </div>
              </Card>

              <Card className="flex flex-col border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Brain className="h-10 w-10 text-primary" />
                    <div className="text-2xl font-bold">€1499</div>
                  </div>
                  <CardTitle>AI Implementation</CardTitle>
                  <CardDescription>
                    Integrazione soluzioni AI personalizzate
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Chatbot personalizzato</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Analisi predittiva</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Automazione processi</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Integrazione API AI</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full">Richiedi Preventivo</Button>
                </div>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Package className="h-10 w-10 text-primary" />
                    <div className="text-2xl font-bold">€1999</div>
                  </div>
                  <CardTitle>Complete Package</CardTitle>
                  <CardDescription>
                    La soluzione completa per il tuo business
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Tutto incluso</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Supporto prioritario</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Formazione team</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Manutenzione annuale</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full">Richiedi Preventivo</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">I Nostri Progetti Recenti</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Esplora alcuni dei siti web che abbiamo creato per liberi professionisti come te.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={`/images/portfolio${item}.jpg`}
                    width={600}
                    height={400}
                    alt={`Progetto ${item}`}
                    className="aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">Progetto {item}</h3>
                      <p className="text-white/80 mb-4">Sito web per libero professionista</p>
                      <Button
                        variant="outline"
                        className="bg-transparent text-white border-white hover:bg-white hover:text-black"
                        onClick={() => {
                          window.location.href = "/portfolio"
                        }}
                      >
                        Vedi Dettagli
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Chi Siamo
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">La Nostra Storia</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    AItAir è un'agenzia specializzata nella creazione di siti web per liberi professionisti. Fondata nel
                    2018, abbiamo aiutato centinaia di professionisti a migliorare la loro presenza online e ad
                    acquisire nuovi clienti.
                  </p>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Il nostro team è composto da esperti di design, sviluppo e marketing digitale, tutti dedicati a
                    creare soluzioni web che non solo sembrano fantastiche, ma che generano risultati concreti per i
                    nostri clienti.
                  </p>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Crediamo che ogni libero professionista meriti un sito web che rifletta la qualità del suo lavoro e
                    che lo aiuti a crescere professionalmente.
                  </p>
                </div>
                <div>
                  <Button
                    onClick={() => {
                      const contactSection = document.getElementById("contact")
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Contattaci
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/team.jpg"
                  width={500}
                  height={500}
                  alt="Team AItAir"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonianze
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Cosa Dicono i Nostri Clienti</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Scopri le esperienze di chi ha già scelto AItAir per il proprio sito web professionale.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  name: "Marco Bianchi",
                  role: "Avvocato",
                  quote:
                    "Grazie ad AItAir ho finalmente un sito web professionale che mi ha permesso di acquisire nuovi clienti. Il processo è stato semplice e il risultato eccezionale.",
                },
                {
                  name: "Laura Rossi",
                  role: "Consulente Finanziario",
                  quote:
                    "Ho apprezzato molto la professionalità e l'attenzione ai dettagli. Il mio sito web è esattamente come lo volevo e funziona perfettamente su tutti i dispositivi.",
                },
                {
                  name: "Giovanni Verdi",
                  role: "Architetto",
                  quote:
                    "AItAir ha compreso perfettamente le mie esigenze e ha creato un sito web che riflette il mio stile e la mia professionalità. Consigliatissimo!",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto rounded-full bg-muted p-6 w-16 h-16 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mt-4">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Contatti
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Parliamo del Tuo Progetto</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Compila il modulo sottostante per richiedere un preventivo gratuito o per qualsiasi informazione.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@aitair.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Telefono</h3>
                    <p className="text-muted-foreground">+39 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Social</h3>
                    <div className="flex space-x-2 mt-1">
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                        Facebook
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                        Instagram
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nome
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="La tua email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Oggetto
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Oggetto del messaggio"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Il tuo messaggio"
                  />
                </div>
                <Button className="w-full">Invia Messaggio</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Pronto a Migliorare la Tua Presenza Online?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Contattaci oggi stesso per un preventivo gratuito e scopri come possiamo aiutarti a crescere
                  professionalmente.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  onClick={() => {
                    const contactSection = document.getElementById("contact")
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Richiedi Preventivo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const servicesSection = document.getElementById("services")
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Scopri i Nostri Servizi
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

