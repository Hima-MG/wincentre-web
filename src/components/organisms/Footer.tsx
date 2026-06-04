import Link from "next/link"
import { FOOTER_NAV, CIVILEZY_LINKS } from "@/data/navigation"

function AndroidIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="7" width="14" height="12" rx="1" />
      <path d="M9 7V5a3 3 0 016 0v2" />
      <line x1="9" y1="12" x2="9" y2="12.01" />
      <line x1="15" y1="12" x2="15" y2="12.01" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#030810] border-t border-white/[0.07]">
      <div className="container mx-auto max-w-[1120px] px-5 lg:px-10 pt-14 pb-10">

        {/* Top row */}
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">

          {/* Brand */}
          <div className="max-w-[240px]">
            <Link
              href="/"
              className="font-display text-[17px] font-extrabold text-white tracking-tight hover:opacity-80 transition-opacity"
            >
              Wincentre
            </Link>
            <p className="mt-2 text-[13px] text-white/40 leading-relaxed">
              Kerala&apos;s trusted Civil Engineering PSC preparation institution.
              Est. May 12, 2008 · Thrissur, Kerala.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-2.5">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/30 mb-1">
              Navigation
            </p>
            {FOOTER_NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13.5px] text-white/50 hover:text-white/85 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Civilezy links */}
          <div className="flex flex-col gap-2.5">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/30 mb-1">
              Civilezy
            </p>
            <a
              href={CIVILEZY_LINKS.web}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13.5px] text-white/50 hover:text-white/85 transition-colors duration-150"
            >
              civilezy.in
            </a>
            <a
              href={CIVILEZY_LINKS.android}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13.5px] text-white/50 hover:text-white/85 transition-colors duration-150"
            >
              <AndroidIcon /> Android App
            </a>
            <a
              href={CIVILEZY_LINKS.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13.5px] text-white/50 hover:text-white/85 transition-colors duration-150"
            >
              <AppleIcon /> iOS App
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 mb-7 h-px bg-white/[0.07]" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px] text-white/30">
            &copy; Wincentre. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/legal/privacy-policy"
              className="text-[12.5px] text-white/30 hover:text-white/55 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="text-[12.5px] text-white/30 hover:text-white/55 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
