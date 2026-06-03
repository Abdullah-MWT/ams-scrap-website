import Link from "next/link";
import Container from "@/components/Container";
import { contactInfo, navLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface py-12">
      <Container className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-display text-2xl font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="text-sm leading-relaxed text-muted">
            {siteConfig.description}
          </p>
          <div className="text-sm text-muted">
            <p>{contactInfo.coverage}</p>
            <p>{contactInfo.locations.join(" · ")}</p>
          </div>
        </div>
        <div className="space-y-3 text-sm text-muted">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
            Navigate
          </p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm text-muted">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
            Contact
          </p>
          <div className="space-y-2">
            <a href={contactInfo.phoneHref} className="block hover:text-foreground">
              {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="block hover:text-foreground">
              {contactInfo.email}
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-foreground"
            >
              WhatsApp Business
            </a>
          </div>
        </div>
      </Container>
      <Container className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Premium industrial scrap solutions for UAE businesses.</p>
      </Container>
    </footer>
  );
}
