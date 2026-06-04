import { SectionLabel } from "@/components/atoms/SectionLabel"
import { FadeUp } from "@/components/animations/FadeUp"
import { CIVILEZY_LINKS } from "@/data/navigation"
import { ArrowRight } from "lucide-react"

type Category = "psc" | "resource"

interface ProvideItem {
  category: Category
  title: string
  description: string
}

const ITEMS: ProvideItem[] = [
  {
    category: "psc",
    title: "Civil PSC – ITI",
    description: "Structured preparation for Overseer, Draftsman, Tradesman, and Tracer posts.",
  },
  {
    category: "psc",
    title: "Civil PSC – Diploma",
    description: "Targeted coaching for Overseer Grade I, Junior Instructor, and related Diploma-level posts.",
  },
  {
    category: "psc",
    title: "Civil PSC – B.Tech",
    description: "Comprehensive preparation for Assistant Engineer and AE-level Kerala PSC posts.",
  },
  {
    category: "psc",
    title: "Surveyor Course",
    description: "Focused preparation for Surveyor Grade, Tradesman Survey, and related surveyor posts.",
  },
  {
    category: "resource",
    title: "E-Books",
    description: "Concise quick-revision materials covering all topics across qualification levels.",
  },
  {
    category: "resource",
    title: "Revision Series",
    description: "Exam-oriented revision programmes aligned to Kerala PSC examination patterns.",
  },
  {
    category: "resource",
    title: "Daily Civil War Live Classes",
    description: "Live learning sessions conducted daily to reinforce concepts and exam readiness.",
  },
  {
    category: "resource",
    title: "Study Circle",
    description: "An offline self-study facility with reference books, quiet workspace, and peer learning.",
  },
]

const PSC_COLOR = "#1a56db"
const RES_COLOR = "#475569"

function ProvideCard({ item, index }: { item: ProvideItem; index: number }) {
  const accentColor = item.category === "psc" ? PSC_COLOR : RES_COLOR

  return (
    <FadeUp delay={index * 0.055} className="h-full">
      <div className="group h-full bg-white rounded-2xl p-6 border border-neutral-100 hover:border-neutral-200 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all duration-200 flex flex-col">

        {/* Category pill */}
        <span
          className="inline-block text-[10px] font-bold uppercase tracking-[0.14em] mb-3.5 self-start"
          style={{ color: accentColor }}
        >
          {item.category === "psc" ? "PSC Preparation" : "Learning Resource"}
        </span>

        {/* Title */}
        <h3 className="font-display font-bold text-neutral-900 text-[15.5px] leading-snug mb-2">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-[13.5px] leading-relaxed text-neutral-500 flex-1">
          {item.description}
        </p>

        {/* CTA — min 44px touch target */}
        <div className="mt-4 pt-4 border-t border-neutral-100">
          <a
            href={CIVILEZY_LINKS.web}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 min-h-[44px] py-2 text-[13px] font-semibold text-brand-600 hover:text-brand-700 transition-colors"
            aria-label={`Explore ${item.title} on Civilezy`}
          >
            Explore on Civilezy
            <ArrowRight size={13} className="transition-transform duration-150 group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </FadeUp>
  )
}

export function ProvidesSection() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#f7f8fa" }}>
      <div className="container mx-auto max-w-[1120px] px-5 lg:px-10">

        <FadeUp>
          <div className="mb-14">
            <SectionLabel>What We Provide</SectionLabel>
            <h2 className="mt-5 font-display text-[1.9rem] sm:text-[2.4rem] font-extrabold leading-tight tracking-tight text-neutral-950 text-balance max-w-[520px]">
              Structured preparation across four categories.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-500 max-w-[460px]">
              Each programme and resource is built specifically for Kerala PSC Civil
              Engineering — not adapted from a general coaching template.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {ITEMS.map((item, i) => (
            <ProvideCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <FadeUp delay={0.4}>
          <p className="mt-10 text-[13px] text-neutral-400 text-center">
            Classroom coaching available in Thrissur &middot; Online access via Civilezy &middot; Malayalam medium available
          </p>
        </FadeUp>

      </div>
    </section>
  )
}
