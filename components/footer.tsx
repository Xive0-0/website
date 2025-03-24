import Link from "next/link"

export function Footer() {
  return (
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
  )
}

