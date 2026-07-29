"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/site/ButtonLink";
import { COMPANY } from "@/lib/company";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-bronze/30 bg-charcoal p-10 text-center">
        <p className="font-serif text-2xl text-white">Thank you — we will be in touch shortly.</p>
        <button
          type="button"
          className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-bronze"
          onClick={() => setSent(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-bronze/30 bg-charcoal p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
            Name
          </span>
          <input
            required
            name="name"
            className="mt-2 w-full rounded-md border border-white/15 bg-black/40 px-4 py-3.5 text-white outline-none focus:border-bronze"
          />
        </label>
        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
            Phone
          </span>
          <input
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-md border border-white/15 bg-black/40 px-4 py-3.5 text-white outline-none focus:border-bronze"
          />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
          Email
        </span>
        <input
          required
          name="email"
          type="email"
          className="mt-2 w-full rounded-md border border-white/15 bg-black/40 px-4 py-3.5 text-white outline-none focus:border-bronze"
        />
      </label>
      <label className="mt-5 block">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
          Project details
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full resize-y rounded-md border border-white/15 bg-black/40 px-4 py-3.5 text-white outline-none focus:border-bronze"
        />
      </label>
      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-bronze px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-bronze-dark sm:w-auto"
      >
        Request a Free Estimate
      </button>
      <p className="mt-4 text-sm text-white/55">
        Prefer to talk?{" "}
        <a href={`tel:${COMPANY.phoneTel}`} className="text-bronze hover:underline">
          Call {COMPANY.phoneDisplay}
        </a>
      </p>
    </form>
  );
}

export function ContactAside() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Call or text</p>
        <a
          href={`tel:${COMPANY.phoneTel}`}
          className="mt-2 block font-serif text-3xl text-white transition hover:text-bronze"
        >
          {COMPANY.phoneDisplay}
        </a>
      </div>
      <dl className="space-y-6 border border-bronze/25 bg-charcoal p-6">
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">Owner</dt>
          <dd className="mt-1 text-white">{COMPANY.owner}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">Company</dt>
          <dd className="mt-1 text-white">{COMPANY.legalName}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">Email</dt>
          <dd className="mt-1">
            <a href={`mailto:${COMPANY.email}`} className="text-white hover:text-bronze">
              {COMPANY.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
            Service area
          </dt>
          <dd className="mt-1 text-white">{COMPANY.serviceArea}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">Hours</dt>
          <dd className="mt-1 text-white">{COMPANY.hours}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">License</dt>
          <dd className="mt-1 text-white">{COMPANY.license}</dd>
        </div>
      </dl>
      <ButtonLink href={`tel:${COMPANY.phoneTel}`} className="w-full">
        Call Now
      </ButtonLink>
    </div>
  );
}
