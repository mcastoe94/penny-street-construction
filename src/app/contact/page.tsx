import type { Metadata } from "next";
import { ContactAside, ContactForm } from "@/components/site/ContactForm";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a free estimate from Penny Street Construction. Call (727) 871-6357. Serving Naples and Tampa, Florida. License CGC1540787.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a free estimate"
        description="Tell us about your project. Call, text, or send a message—we respond promptly and serve Naples and Tampa."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80"
        imageAlt="Modern interior workspace"
        compact
      />

      <section className="bg-charcoal py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl text-white">Get in touch</h2>
            <p className="mt-3 text-white/70">
              {COMPANY.owner} · {COMPANY.legalName}
            </p>
            <div className="mt-8">
              <ContactAside />
            </div>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">Service Area</p>
          <h2 className="mt-3 font-serif text-3xl text-white">Naples & Tampa, Florida</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/65">
            Including VillageWalk and surrounding communities. Hours: {COMPANY.hours}.
          </p>
        </div>
      </section>

      <CtaBand title="Ready when you are" />
    </>
  );
}
