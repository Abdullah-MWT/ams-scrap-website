import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how AMS Scrap delivers premium scrap and metal recycling services for industrial operators in Dubai & Sharjah.",
};

const values = [
  {
    title: "Operational transparency",
    description:
      "Every collection is measured, documented, and communicated clearly for procurement teams.",
  },
  {
    title: "Industrial-grade safety",
    description:
      "We prioritize safe handling, secure loading, and adherence to industrial site requirements.",
  },
  {
    title: "Reliable partnerships",
    description:
      "Long-term contracts supported by predictable logistics and responsive account management.",
  },
  {
    title: "Sustainability focus",
    description:
      "Responsible recycling practices that support UAE circular economy ambitions.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b border-white/5 bg-surface">
        <Container className="grid gap-10 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              About AMS Scrap
            </p>
            <h1 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
              Built for high-volume industrial recycling in the UAE.
            </h1>
            <p className="text-lg text-muted">
              {siteConfig.description} Our team aligns logistics, grading, and
              documentation to support procurement teams and operations managers.
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
              alt="Industrial team at work"
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <SectionHeading
              kicker="Our Story"
              title="A premium partner for scrap recovery."
              description="AMS Scrap was built around the needs of industrial operators who require consistency, safety, and trusted valuation. We provide the structure and professionalism of a corporate logistics partner, with the agility needed for scrap recovery."
            />
            <p className="text-sm leading-relaxed text-muted">
              From site visits and on-location assessments to clear grading and
              documentation, our team prioritizes clarity at every step. We focus on
              building long-term partnerships with manufacturers, contractors, and
              logistics operators across Dubai and Sharjah.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-surface p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Truck className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    Fleet-ready logistics
                  </p>
                  <p className="text-sm text-muted">
                    Structured pickups aligned to industrial schedules and access requirements.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    Safety-first execution
                  </p>
                  <p className="text-sm text-muted">
                    Trained teams and site coordination to maintain operational continuity.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    Documentation clarity
                  </p>
                  <p className="text-sm text-muted">
                    Clear reporting and valuation alignment for procurement and audit needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container className="space-y-12">
          <SectionHeading
            kicker="Core Values"
            title="What defines the AMS Scrap approach."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-white/10 bg-surface-2 p-6"
              >
                <p className="font-display text-lg font-semibold text-foreground">
                  {value.title}
                </p>
                <p className="mt-3 text-sm text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
              alt="Industrial facility"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <SectionHeading
              kicker="Infrastructure"
              title="Operational depth for complex scrap projects."
              description="We support multi-grade scrap loads, large-scale yard clearances, and ongoing industrial contracts with structured planning and logistics readiness."
            />
            <p className="text-sm leading-relaxed text-muted">
              Our teams coordinate with site managers to align pickup windows,
              access requirements, and safety checks. The result is a seamless
              recovery workflow that protects productivity and ensures accurate
              valuation.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container className="grid gap-10 rounded-3xl border border-white/10 bg-surface-2 p-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Sustainability & Compliance
            </p>
            <h2 className="font-display text-3xl font-semibold text-foreground">
              Responsible recycling aligned with UAE priorities.
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              AMS Scrap supports the circular economy by ensuring responsible
              handling, proper segregation, and professional documentation for every
              pickup. We work with industrial partners who prioritize environmental
              and operational accountability.
            </p>
          </div>
          <div className="space-y-4 text-sm text-muted">
            <div className="rounded-2xl border border-white/10 bg-surface p-4">
              Clear chain-of-custody documentation.
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface p-4">
              Structured material segregation for recovery efficiency.
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface p-4">
              Reporting support for procurement and ESG teams.
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
