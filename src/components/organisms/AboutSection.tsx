import { SectionLabel } from "@/components/atoms/SectionLabel"
import { FadeUp } from "@/components/animations/FadeUp"

const KEY_FACTS = [
  { label: "Founded", value: "May 12, 2008" },
  { label: "Location", value: "Thrissur, Kerala" },
  { label: "Specialisation", value: "Kerala PSC Civil Engineering" },
  { label: "Experience", value: "16+ Years" },
  { label: "Students Guided", value: "20,000+" },
  { label: "First Rank Holders", value: "40+" },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-[1120px] px-5 lg:px-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20 lg:items-start">

          {/* Left — narrative */}
          <div className="flex-1 max-w-[520px]">
            <FadeUp>
              <SectionLabel>About Wincentre</SectionLabel>

              <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-tight tracking-tight text-neutral-950 text-balance sm:text-[2.4rem]">
                16 years of focused Civil Engineering PSC preparation.
              </h2>

              <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-neutral-500">
                <p>
                  Wincentre was founded on May 12, 2008, in Thrissur, Kerala, with a
                  singular purpose — to create the most structured, Kerala PSC-specific
                  preparation system for Civil Engineering aspirants.
                </p>
                <p>
                  Unlike general coaching centres, Wincentre was purpose-built for one
                  exam ecosystem: Kerala PSC Civil Engineering. Every programme, every
                  resource, and every strategy at Wincentre is designed around the exact
                  qualification levels, target posts, and examination patterns of the
                  Kerala Public Service Commission.
                </p>
                <p>
                  Over 16 years, we have guided more than 20,000 students and produced
                  over 40 first rank holders — a record built on discipline, expertise,
                  and unwavering focus on a single domain.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right — key facts */}
          <FadeUp delay={0.1} className="lg:w-[340px] xl:w-[380px] shrink-0">
            <div className="rounded-2xl border border-neutral-100 overflow-hidden">
              {/* Header */}
              <div className="px-7 py-4 bg-neutral-50 border-b border-neutral-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
                  Institution Profile
                </p>
              </div>

              {/* Fact rows */}
              <div className="divide-y divide-neutral-100">
                {KEY_FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center justify-between px-7 py-4"
                  >
                    <p className="text-[13px] text-neutral-400">{fact.label}</p>
                    <p className="text-[13.5px] font-semibold text-neutral-900">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div className="px-7 py-4 bg-brand-50 border-t border-brand-100">
                <p className="text-[12px] text-brand-700 font-medium leading-snug">
                  Kerala PSC Civil Engineering — ITI · Diploma · B.Tech · Surveyor
                </p>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
