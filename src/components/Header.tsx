import Link from "next/link";
import Container from "@/components/Container";
import { contactInfo, navLinks, siteConfig } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            AMS
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="text-xs uppercase tracking-[0.32em] text-muted">
              Scrap & Metal
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={contactInfo.phoneHref}
            className="hidden text-sm font-semibold text-foreground/80 hover:text-foreground md:inline-flex"
          >
            {contactInfo.phone}
          </a>
          <Link
            href="/#quote"
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
          >
            Request Quote
          </Link>
        </div>
      </Container>
    </header>
  );
}
