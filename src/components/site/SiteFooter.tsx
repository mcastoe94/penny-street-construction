import Link from "next/link";
import { BrandLogo } from "@/components/site/BrandLogo";
import { COMPANY, NAV } from "@/lib/company";
import { SERVICES } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="flex items-start gap-4">
            <BrandLogo size={64} />
            <div>
              <p className="font-serif text-xl text-bronze">{COMPANY.legalName}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/50">
                {COMPANY.licenseFull}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            Proudly serving Naples and Tampa with luxury residential and commercial
            construction, renovations, impact windows, and premium exterior doors.
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Quick Links</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/75 transition hover:text-bronze">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Our Services</p>
          <ul className="mt-4 space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-white/75 transition hover:text-bronze"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <a href={`tel:${COMPANY.phoneTel}`} className="hover:text-bronze">
                {COMPANY.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-bronze">
                {COMPANY.email}
              </a>
            </li>
            <li>{COMPANY.serviceArea}</li>
            <li className="pt-2 text-xs uppercase tracking-[0.14em] text-white/45">
              License {COMPANY.license}
            </li>
          </ul>
          <div className="mt-6 flex gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
            <a href={COMPANY.facebook} className="hover:text-bronze">
              Facebook
            </a>
            <a href={COMPANY.instagram} className="hover:text-bronze">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <p>Licensed & Insured · Serving Naples & Tampa</p>
        </div>
      </div>
    </footer>
  );
}
