import { FadeUp } from "@/components/animations/FadeUp"
import { CIVILEZY_LINKS } from "@/data/navigation"

const STATS = [
  { value: "16+", label: "Years Experience" },
  { value: "20,000+", label: "Students Guided" },
  { value: "40+", label: "First Rank Holders" },
]

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center bg-[#060D1F] pt-28 pb-20 md:pt-36 md:pb-28 min-h-[88vh]">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-600/60 to-transparent" />

      <div className="container relative mx-auto max-w-[1120px] px-5 lg:px-10">
        <FadeUp>
          {/* Establishment badge */}
          <div className="mb-7">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
              <span className="inline-block h-px w-5 bg-white/20" />
              Established May 12, 2008 &middot; Thrissur, Kerala
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold leading-[1.07] tracking-tight text-white text-balance max-w-[680px] text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem]">
            Kerala&apos;s Trusted Civil Engineering{" "}
            <span className="text-brand-400">PSC Institution.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-[15px] sm:text-[17px] leading-relaxed text-white/50 max-w-[500px]">
            Established in 2008, Wincentre has helped thousands of Civil Engineering
            aspirants across Kerala through structured preparation systems and expert
            guidance.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 max-w-[400px] xs:max-w-none">
            <a
              href={CIVILEZY_LINKS.web}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-brand-600 text-white text-[15px] font-semibold hover:bg-brand-700 active:scale-[0.98] transition-all duration-150"
            >
              Visit Civilezy
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl border border-white/20 text-white text-[15px] font-medium hover:bg-white/10 hover:border-white/35 active:scale-[0.98] transition-all duration-150"
            >
              Contact Us
            </a>
          </div>
        </FadeUp>

        {/* Stats */}
        <FadeUp delay={0.18}>
          <div className="mt-16 md:mt-20 flex flex-col sm:flex-row gap-8 sm:gap-0">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                {i > 0 && (
                  <div className="hidden sm:block w-px h-9 mx-10 lg:mx-14 shrink-0 bg-white/10" />
                )}
                <div>
                  <p className="font-display text-[2rem] sm:text-[2.25rem] font-extrabold text-white leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[12px] font-semibold text-white/40 uppercase tracking-[0.10em]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-12"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(6,13,31,0.25))" }}
      />
    </section>
  )
}
