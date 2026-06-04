import { SectionLabel } from "@/components/atoms/SectionLabel"
import { FadeUp } from "@/components/animations/FadeUp"

const TRUST_ITEMS = [
  {
    stat: "16+",
    label: "Years Experience",
    description: "Continuously refining preparation methods since 2008.",
  },
  {
    stat: "20,000+",
    label: "Students Guided",
    description: "Thousands of Civil Engineering aspirants trained across Kerala.",
  },
  {
    stat: "40+",
    label: "First Rank Holders",
    description: "Over 40 students achieved Rank 1 in Kerala PSC Civil Engineering.",
  },
  {
    stat: "100%",
    label: "Kerala PSC Focused",
    description: "Every resource, lesson, and test is designed exclusively for Kerala PSC.",
  },
  {
    stat: "4",
    label: "Structured Programmes",
    description: "Separate programmes for ITI, Diploma, B.Tech, and Surveyor levels.",
  },
  {
    stat: "Est. 2008",
    label: "Trusted Across Kerala",
    description: "A name that Civil Engineering aspirants across Kerala rely on.",
  },
]

export function WhyWincentreSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-[1120px] px-5 lg:px-10">

        <FadeUp>
          <div className="mb-14 max-w-[540px]">
            <SectionLabel>Why Wincentre</SectionLabel>
            <h2 className="mt-5 font-display text-[1.9rem] sm:text-[2.4rem] font-extrabold leading-tight tracking-tight text-neutral-950 text-balance">
              Why students choose Wincentre.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
              Not a feature. Not a tagline. A proven track record built on 16 years
              of single-focus expertise.
            </p>
          </div>
        </FadeUp>

        {/*
          Desktop / tablet: gap-px grid-lines effect using bg-neutral-100 backdrop.
          Mobile: standard gap so cells don't bleed into each other at 1-col.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-px sm:bg-neutral-100 sm:rounded-2xl sm:overflow-hidden sm:border sm:border-neutral-100">
          {TRUST_ITEMS.map(({ stat, label, description }, i) => (
            <FadeUp key={label} delay={i * 0.05} className="h-full">
              <div className="h-full bg-white p-7 sm:p-8 flex flex-col rounded-2xl sm:rounded-none border border-neutral-100 sm:border-0">
                {/* Stat */}
                <p className="font-display text-[2.2rem] font-extrabold text-brand-600 leading-none mb-3">
                  {stat}
                </p>
                {/* Label */}
                <h3 className="font-semibold text-neutral-900 text-[14px] mb-2 leading-snug">
                  {label}
                </h3>
                {/* Description */}
                <p className="text-neutral-500 text-[13.5px] leading-relaxed">
                  {description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
