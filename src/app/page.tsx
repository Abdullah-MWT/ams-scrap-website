import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Globe2,
  Handshake,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Container from "@/components/Container";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo, siteConfig } from "@/lib/site";

const materials = [
  "Ferrous metals",
  "Non-ferrous metals",
  "Copper & cable",
  "Aluminum",
  "Brass & alloys",
  "Stainless steel",
  "Machinery scrap",
  "Construction scrap",
  "Warehouse clearance",
  "Vehicle scrap",
  "Industrial equipment",
  "E-waste",
];

const whyChoose = [
  {
    title: "Transparent grading",
    description:
      "We separate and grade materials clearly so you understand the value behind every ton.",
  },
  {
    title: "Rapid pickup windows",
    description:
      "Dedicated fleet coverage across Dubai & Sharjah industrial zones for predictable collection.",
  },
  {
    title: "Compliance-ready documentation",
    description:
      "Structured records, weighbridge data, and clear reporting for your internal audit trails.",
  },
  {
    title: "Industrial scale handling",
    description:
      "Bulk volumes, heavy machinery, and multi-grade loads handled with safety-first execution.",
  },
];

const processSteps = [
  {
    title: "Submit inquiry",
    description:
      "Share material type, location, and quantity to receive an informed preliminary quote.",
  },
  {
    title: "Site assessment",
    description:
      "We align on access, safety, and loading requirements to plan the right pickup method.",
  },
  {
    title: "Pickup & weighing",
    description:
      "Our team collects, sorts, and weighs your scrap with visible, transparent metrics.",
  },
  {
    title: "Payment & documentation",
    description:
      "Receive prompt settlement alongside clear documentation for your operations records.",
  },
];

const industries = [
  "Construction & demolition",
  "Manufacturing plants",
  "Shipyards & marine services",
  "Oil & gas support",
  "Facilities management",
  "Warehousing & logistics",
  "Hospitality fit-out",
  "Industrial contractors",
];

const testimonials = [
  {
    quote:
      "AMS Scrap handled a complex warehouse clearance with zero downtime. Clear communication and reliable pickup.",
    name: "Operations Manager",
    company: "UAE Manufacturing Group",
  },
  {
    quote:
      "The grading transparency and documentation made our internal audit seamless. Highly professional service.",
    name: "Procurement Lead",
    company: "Regional Construction Firm",
  },
  {
    quote:
      "Fast response, fair valuation, and a fleet that can handle heavy loads without delays.",
    name: "Facility Director",
    company: "Logistics & Storage Operator",
  },
];

const faqs = [
  {
    question: "Do you provide pickup across both Dubai and Sharjah?",
    answer:
      "Yes. Our fleet serves industrial zones across Dubai and Sharjah with structured pickup planning.",
  },
  {
    question: "How is scrap valued and graded?",
    answer:
      "We use transparent weighing and grading practices, sharing the grade breakdown before final settlement.",
  },
  {
    question: "Can you handle mixed or bulk loads?",
    answer:
      "Yes. We handle mixed loads and provide guidance on separating high-value materials for optimal pricing.",
  },
  {
    question: "What documentation do you provide?",
    answer:
      "We provide clear pickup documentation and weighbridge data suitable for operational reporting.",
  },
  {
    question: "Do you offer container placement or onsite collection?",
    answer:
      "We offer flexible pickup options including scheduled collection and container support.",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504306668053-7a30ed652d6b?auto=format&fit=crop&w=2400&q=80"
          alt="Industrial recycling facility"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        <Container className="relative z-10 flex min-h-[80vh] items-center py-24 lg:py-32">
          <div className="max-w-2xl space-y-8">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                Dubai & Sharjah · Industrial Scrap Specialists
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Premium scrap recycling for UAE industrial leaders.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
                {siteConfig.description} Fast valuation, professional logistics, and
                documentation-ready reporting for serious industrial partners.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#quote"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90"
                >
                  Request Instant Quote
                </a>
                <a
                  href="#process"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Schedule Pickup
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Compliance-ready reporting
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  Dedicated fleet coverage
                </div>
                <div className="flex items-center gap-2">
                  <Handshake className="h-5 w-5 text-primary" />
                  Trusted B2B partner
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-surface py-14">
        <Container className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "2 Emirates Served",
              description: "Focused coverage across Dubai and Sharjah industrial zones.",
            },
            {
              title: "12+ Material Categories",
              description: "Specialized handling for ferrous, non-ferrous, and complex loads.",
            },
            {
              title: "B2B-First Operations",
              description: "Built around industrial schedules, safety, and compliance needs.",
            },
          ].map((metric) => (
            <div
              key={metric.title}
              className="rounded-3xl border border-white/5 bg-surface-2 px-6 py-8"
            >
              <p className="font-display text-2xl font-semibold text-foreground">
                {metric.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {metric.description}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section id="materials" className="py-20">
        <Container className="space-y-12">
          <SectionHeading
            kicker="Materials We Handle"
            title="Scrap categories built for industrial volume."
            description="From high-grade ferrous metals to complex machinery scrap, AMS Scrap processes a full spectrum of materials with traceable grading."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((material) => (
              <div
                key={material}
                className="group rounded-3xl border border-white/10 bg-surface p-6 transition hover:-translate-y-1 hover:border-primary/50"
              >
                <p className="font-display text-lg font-semibold text-foreground">
                  {material}
                </p>
                <p className="mt-3 text-sm text-muted">
                  Structured intake, clear grading, and value recovery across every load.
                </p>
                <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <SectionHeading
              kicker="Why AMS Scrap"
              title="Built to deliver confidence for industrial partners."
              description="We combine logistics precision, transparent pricing, and professional documentation to keep your operations moving."
            />
            <div className="grid gap-6">
              {whyChoose.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1581091215367-59ab6bfb8f06?auto=format&fit=crop&w=1600&q=80"
              alt="Industrial operations"
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section id="process" className="py-20">
        <Container className="space-y-12">
          <SectionHeading
            kicker="How It Works"
            title="A refined process from inquiry to payout."
            description="Every step is engineered to reduce downtime and provide clear operational visibility."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-surface p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Step {index + 1}
                </p>
                <p className="mt-4 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </p>
                <p className="mt-3 text-sm text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
              alt="Fleet and logistics"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <SectionHeading
              kicker="Logistics & Fleet"
              title="Engineered pickup and handling capacity."
              description="AMS Scrap deploys trained teams and specialized equipment for secure loading, transport, and yard processing."
            />
            <div className="grid gap-4 text-sm text-muted">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                Dedicated pickup fleet with industrial-grade lifting support.
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Safety-focused crews aligned with UAE industrial standards.
              </div>
              <div className="flex items-center gap-3">
                <Factory className="h-5 w-5 text-primary" />
                Facility-grade sorting for clean grade separation.
              </div>
              <div className="flex items-center gap-3">
                <Globe2 className="h-5 w-5 text-primary" />
                Scalable capacity for recurring industrial contracts.
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-12">
          <SectionHeading
            kicker="Industries Served"
            title="Supporting critical UAE sectors."
            description="We partner with industrial operators who require consistent, compliant scrap recovery."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-3xl border border-white/10 bg-surface px-6 py-8 text-sm font-semibold text-foreground"
              >
                {industry}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container className="space-y-12">
          <SectionHeading
            kicker="Client Feedback"
            title="Trusted by operations leaders."
            description="Our industrial partners value clarity, speed, and consistency."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-3xl border border-white/10 bg-surface-2 p-6"
              >
                <p className="text-sm leading-relaxed text-muted">
                  “{testimonial.quote}”
                </p>
                <p className="mt-6 text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-12">
          <SectionHeading
            kicker="FAQ"
            title="Common questions from industrial partners."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-surface p-6"
              >
                <p className="font-display text-lg font-semibold text-foreground">
                  {faq.question}
                </p>
                <p className="mt-3 text-sm text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="quote" className="bg-surface py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <SectionHeading
              kicker="Instant Quote"
              title="Request a tailored scrap valuation."
              description="Share your details and material mix. Our team responds with a pickup plan and pricing guidance."
            />
            <div className="rounded-3xl border border-white/10 bg-surface-2 p-6 text-sm text-muted">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Direct Contact
              </p>
              <p className="mt-4 text-base font-semibold text-foreground">
                {contactInfo.coverage}
              </p>
              <p className="mt-2">{contactInfo.locations.join(" · ")}</p>
              <div className="mt-4 space-y-2">
                <a
                  href={contactInfo.phoneHref}
                  className="block text-sm font-semibold text-foreground"
                >
                  {contactInfo.phone}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="block text-sm text-muted">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-background p-8">
            <QuoteForm />
          </div>
        </Container>
      </section>

      <section id="contact" className="py-20">
        <Container className="grid gap-8 rounded-3xl border border-white/10 bg-surface p-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Contact AMS Scrap
            </p>
            <h3 className="font-display text-3xl font-semibold text-foreground">
              Let&apos;s build a reliable scrap recovery plan.
            </h3>
            <p className="text-sm text-muted">
              Our team is ready to evaluate your material mix, schedule pickup,
              and provide a clear valuation timeline.
            </p>
          </div>
          <div className="space-y-4 text-sm text-muted">
            <div className="rounded-2xl border border-white/10 bg-surface-2 p-4">
              <p className="font-semibold text-foreground">Coverage</p>
              <p>{contactInfo.coverage}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface-2 p-4">
              <p className="font-semibold text-foreground">Contact</p>
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
