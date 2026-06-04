import { SectionLabel } from "@/components/atoms/SectionLabel"
import { FadeUp } from "@/components/animations/FadeUp"
import { CIVILEZY_LINKS } from "@/data/navigation"
import { ArrowRight } from "lucide-react"

/* Minimal brand icon SVGs */
function AndroidIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="7" width="14" height="12" rx="1" />
      <path d="M9 7V5a3 3 0 016 0v2" />
      <line x1="9" y1="12" x2="9" y2="12.01" />
      <line x1="15" y1="12" x2="15" y2="12.01" />
    </svg>
  )
}

function AppleIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function GlobeIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

const PLATFORM_LINKS = [
  {
    icon: GlobeIcon,
    label: "Visit civilezy.in",
    sublabel: "Web platform",
    href: CIVILEZY_LINKS.web,
    primary: true,
  },
  {
    icon: AndroidIcon,
    label: "Download for Android",
    sublabel: "Google Play Store",
    href: CIVILEZY_LINKS.android,
    primary: false,
  },
  {
    icon: AppleIcon,
    label: "Download for iOS",
    sublabel: "Apple App Store",
    href: CIVILEZY_LINKS.ios,
    primary: false,
  },
]

export function CivilezyShowcase() {
  return (
    <section id="civilezy" className="relative bg-[#060D1F] py-24 md:py-32 overflow-hidden">
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative mx-auto max-w-[1120px] px-5 lg:px-10">
        <div className="flex flex-col gap-16 items-start lg:flex-row lg:items-center lg:gap-20">

          {/* Left — text */}
          <div className="flex-1 max-w-[540px]">
            <FadeUp>
              <SectionLabel onDark>Civilezy</SectionLabel>

              <h2
                className="mt-5 font-display font-extrabold text-white text-balance leading-tight tracking-tight"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
              >
                Powered by Civilezy.
              </h2>

              <p
                className="mt-5 text-[15.5px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.52)" }}
              >
                Civilezy is Wincentre&apos;s official digital learning platform for
                Kerala PSC Civil Engineering preparation. Every lesson, quiz, and
                resource on Civilezy is rooted in the same curriculum that has
                produced Wincentre&apos;s rank holders over 16 years.
              </p>

              {/* Feature list */}
              <ul className="mt-8 space-y-3">
                {[
                  "Smart interactive lessons based on Wincentre curriculum",
                  "Video lessons and Malayalam audio narration",
                  "Daily Civil War live classes",
                  "Mock tests and question banks aligned to Kerala PSC patterns",
                  "E-Books and revision series for quick preparation",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className="h-1.5 w-1.5 rounded-full shrink-0 mt-[7px]"
                      style={{ background: "rgba(96,165,250,0.7)" }}
                    />
                    <span
                      className="text-[14px] leading-snug"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Primary web CTA */}
              <div className="mt-10">
                <a
                  href={CIVILEZY_LINKS.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-brand-600 text-white text-[14.5px] font-semibold hover:bg-brand-700 transition-colors"
                >
                  Visit civilezy.in <ArrowRight size={15} />
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right — platform card */}
          <FadeUp delay={0.12} className="w-full lg:w-auto lg:shrink-0 lg:min-w-[320px] xl:min-w-[360px]">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#0a1428",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
              }}
            >
              {/* Civilezy brand header */}
              <div
                className="px-7 py-8 text-center border-b"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="flex justify-center mb-5">
                  <div
                    className="h-[60px] w-[60px] rounded-2xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #1a56db 0%, #2563eb 100%)",
                      boxShadow: "0 8px 28px rgba(26,86,219,0.40)",
                    }}
                  >
                    <span className="font-display font-extrabold text-white text-[1.5rem]">
                      C
                    </span>
                  </div>
                </div>
                <p className="font-display font-bold text-white text-[1.4rem] leading-none">
                  Civilezy
                </p>
                <p
                  className="mt-1.5 text-[12.5px]"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  Official digital platform by Wincentre
                </p>
              </div>

              {/* Platform access links */}
              <div className="p-4 space-y-2">
                {PLATFORM_LINKS.map(({ icon: Icon, label, sublabel, href, primary }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 rounded-xl px-4 py-3.5 transition-all"
                    style={{
                      background: primary
                        ? "rgba(26,86,219,0.15)"
                        : "rgba(255,255,255,0.04)",
                      border: primary
                        ? "1px solid rgba(26,86,219,0.28)"
                        : "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: primary
                          ? "rgba(26,86,219,0.25)"
                          : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <Icon size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[13px] font-semibold leading-none mb-0.5"
                        style={{ color: primary ? "#93c5fd" : "rgba(255,255,255,0.75)" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-[11px]"
                        style={{ color: "rgba(255,255,255,0.28)" }}
                      >
                        {sublabel}
                      </p>
                    </div>
                    <ArrowRight
                      size={13}
                      style={{ color: "rgba(255,255,255,0.22)" }}
                    />
                  </a>
                ))}
              </div>

              {/* Footer */}
              <div
                className="px-7 py-4 border-t text-center"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <p
                  className="text-[11px] font-medium"
                  style={{ color: "rgba(255,255,255,0.22)" }}
                >
                  Kerala PSC Civil Engineering · Android · iOS · Web
                </p>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  )
}
