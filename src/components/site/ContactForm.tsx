"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/site/ButtonLink";
import { COMPANY } from "@/lib/company";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setError(data.error || "Could not send your message. Please try again.");
        return;
      }

      setSent(true);
      form.reset();
    } catch {
      setError("Could not send your message. Please call or email us directly.");
    } finally {
      setPending(false);
    }
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
            disabled={pending}
            className="mt-2 w-full rounded-md border border-white/15 bg-black/40 px-4 py-3.5 text-white outline-none focus:border-bronze disabled:opacity-60"
          />
        </label>
        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
            Phone
          </span>
          <input
            name="phone"
            type="tel"
            disabled={pending}
            className="mt-2 w-full rounded-md border border-white/15 bg-black/40 px-4 py-3.5 text-white outline-none focus:border-bronze disabled:opacity-60"
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
          disabled={pending}
          className="mt-2 w-full rounded-md border border-white/15 bg-black/40 px-4 py-3.5 text-white outline-none focus:border-bronze disabled:opacity-60"
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
          disabled={pending}
          className="mt-2 w-full resize-y rounded-md border border-white/15 bg-black/40 px-4 py-3.5 text-white outline-none focus:border-bronze disabled:opacity-60"
        />
      </label>
      {error ? <p className="mt-4 text-sm text-red-400">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-bronze px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-bronze-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Request a Free Estimate"}
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
