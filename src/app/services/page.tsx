import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  ClipboardCheck,
  Container,
  Factory,
  Recycle,
  Truck,
} from "lucide-react";
import ContainerWrap from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore AMS Scrap services for industrial scrap pickup, grading, recovery, and ongoing contract support across Dubai & Sharjah.",
};

const services = [
  {
    icon: Truck,
    title: "Scheduled scrap pickup",
    description:
      "Flexible pickup windows with dedicated fleet support across Dubai and Sharjah industrial zones.",
  },
  {
    icon: Container,
    title: "Container placement",
    description:
      "Onsite container solutions for continuous scrap generation and large-scale projects.",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent grading",
    description:
      "Clear grading and valuation with documented weight, material, and pricing visibility.",
  },
  {
    icon: Factory,
    title: "Industrial clearance",
    description:
      "Full warehouse or facility scrap clearance with coordinated site planning.",
  },
  {
    icon: Building2,
    title: "Construction & demolition",
    description:
      "Rapid collection support for construction, demolition, and fit-out projects.",
  },
  {
    icon: Recycle,
    title: "Recycling recovery",
    description:
      "Responsible material recovery with segregation for recycling-ready output.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b border-white/5 bg-surface">
        <ContainerWrap className="grid gap-10 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Services
            </p>
            <h1 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
              Industrial scrap services engineered for reliability.
            </h1>
            <p className="text-lg text-muted">
              AMS Scrap delivers end-to-end scrap recovery, from scheduled pickup
              to transparent grading and documentation. Built for procurement teams,
              site managers, and operations leaders.
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
              alt="Scrap logistics"
              fill
              className="object-cover"
            />
          </div>
        </ContainerWrap>
      </section>

      <section className="py-20">
        <ContainerWrap className="space-y-12">
          <SectionHeading
            kicker="Service Portfolio"
            title="Comprehensive coverage for industrial scrap recovery."
            description="Structured pickups, transparent valuation, and dedicated operational support across every stage."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-surface p-6"
              >
                <service.icon className="h-8 w-8 text-primary" />
                <p className="mt-4 font-display text-lg font-semibold text-foreground">
                  {service.title}
                </p>
                <p className="mt-3 text-sm text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </ContainerWrap>
      </section>

      <section className="bg-surface py-20">
        <ContainerWrap className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
              alt="Industrial logistics"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <SectionHeading
              kicker="Operational Support"
              title="Dedicated coordination for complex pickups."
              description="We align with your site access requirements, loading restrictions, and compliance needs to ensure a smooth collection process."
            />
            <div className="space-y-4 text-sm text-muted">
              <div className="rounded-2xl border border-white/10 bg-surface-2 p-4">
                Onsite visit and safety alignment before bulk pickups.
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface-2 p-4">
                Dedicated account support for recurring collections.
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface-2 p-4">
                Clear documentation and weighbridge visibility.
              </div>
            </div>
          </div>
        </ContainerWrap>
      </section>

      <section className="py-20">
        <ContainerWrap className="grid gap-12 rounded-3xl border border-white/10 bg-surface p-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Request a Quote
            </p>
            <h2 className="font-display text-3xl font-semibold text-foreground">
              Need a tailored scrap recovery plan?
            </h2>
            <p className="text-sm text-muted">
              Share your material mix and pickup requirements. We respond with a
              structured quote and timeline.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-background p-6">
            <QuoteForm />
          </div>
        </ContainerWrap>
      </section>
    </div>
  );
}
