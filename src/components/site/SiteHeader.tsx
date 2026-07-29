"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { ButtonLink } from "@/components/site/ButtonLink";
import { COMPANY, NAV } from "@/lib/company";
import { SERVICES } from "@/lib/services";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <BrandLogo size={52} priority />
            <span className="min-w-0">
              <span className="block truncate font-serif text-lg font-semibold tracking-wide text-bronze sm:text-xl">
                {COMPANY.legalName}
              </span>
              <span className="mt-0.5 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-white/55 sm:block">
                {COMPANY.licenseFull}
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="text-sm font-medium text-white/85 transition hover:text-bronze"
            >
              {COMPANY.phoneDisplay}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-sm font-medium text-white/85 transition hover:text-bronze"
            >
              {COMPANY.email}
            </a>
            <ButtonLink href="/contact" className="min-h-10 px-4 text-[10px]">
              Request a Free Estimate
            </ButtonLink>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <nav className="mx-auto hidden max-w-6xl items-center gap-8 px-4 py-3 sm:px-6 lg:flex lg:px-8">
        {NAV.map((item) =>
          "children" in item && item.children ? (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href={item.href}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  isActive(item.href) ? "text-bronze" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                <span aria-hidden className="text-[10px]">
                  ▾
                </span>
              </Link>
              {isActive(item.href) ? (
                <span className="absolute -bottom-3 left-0 h-0.5 w-full bg-bronze" />
              ) : null}
              {servicesOpen ? (
                <div className="absolute left-0 top-full z-50 min-w-[280px] border border-bronze/30 bg-charcoal py-2 shadow-2xl">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-4 py-2.5 text-sm text-white/80 transition hover:bg-bronze/15 hover:text-bronze"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-xs font-semibold uppercase tracking-[0.18em] transition ${
                isActive(item.href) ? "text-bronze" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
              {isActive(item.href) ? (
                <span className="absolute -bottom-3 left-0 h-0.5 w-full bg-bronze" />
              ) : null}
            </Link>
          ),
        )}
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-charcoal px-4 py-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-2 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white"
                  onClick={() => {
                    if (!("children" in item && item.children)) setOpen(false);
                  }}
                >
                  {item.label}
                </Link>
                {"children" in item && item.children
                  ? SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block rounded-md px-4 py-2 text-sm text-white/70"
                        onClick={() => setOpen(false)}
                      >
                        {s.title}
                      </Link>
                    ))
                  : null}
              </div>
            ))}
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="mt-3 rounded-md border border-bronze/40 px-3 py-3 text-center text-sm font-semibold text-bronze"
            >
              {COMPANY.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="mt-2 rounded-md bg-bronze px-3 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white"
              onClick={() => setOpen(false)}
            >
              Request a Free Estimate
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
