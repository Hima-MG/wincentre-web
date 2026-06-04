import { SectionLabel } from "@/components/atoms/SectionLabel"
import { FadeUp } from "@/components/animations/FadeUp"

export function DirectorSection() {
  return (
    <section className="relative bg-[#060D1F] py-24 md:py-32 overflow-hidden">
      {/* Decorative rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative mx-auto max-w-[1120px] px-5 lg:px-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">

          {/* Left — profile */}
          <FadeUp className="shrink-0 lg:w-[260px] xl:w-[300px]">
            <div className="mb-2">
              <SectionLabel onDark>From the Founder</SectionLabel>
            </div>

            {/* Director photo placeholder */}
            <div className="mt-8">
              <div
                className="h-24 w-24 rounded-2xl flex items-center justify-center overflow-hidden"
                style={{
                  background: "rgba(26,86,219,0.15)",
                  border: "1px solid rgba(26,86,219,0.25)",
                }}
              >
                {/* Replace this div with an <Image> when photo is available */}
                <span
                  className="font-display font-extrabold leading-none select-none"
                  style={{ fontSize: "2.4rem", color: "#60a5fa" }}
                >
                  S
                </span>
              </div>

              <div className="mt-5">
                <h3 className="font-display font-bold text-white text-[19px] leading-tight">
                  Santhosh Chittalappilly
                </h3>
                <p
                  className="mt-1 text-[13px] font-medium"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  Founder &amp; Director
                </p>
                <p
                  className="text-[13px]"
                  style={{ color: "rgba(255,255,255,0.30)" }}
                >
                  Wincentre · Est. 2008
                </p>
              </div>

              {/* Brief credentials */}
              <div
                className="mt-8 rounded-xl px-5 py-5 space-y-3"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {[
                  "16+ years in Kerala PSC Civil Engineering preparation",
                  "Founded Wincentre, Thrissur, in 2008",
                  "Pioneered category-wise PSC preparation structure",
                ].map((credential) => (
                  <div key={credential} className="flex items-start gap-2.5">
                    <div
                      className="h-1.5 w-1.5 rounded-full shrink-0 mt-[6px]"
                      style={{ background: "rgba(96,165,250,0.6)" }}
                    />
                    <p
                      className="text-[12.5px] leading-snug"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                      {credential}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right — quote & message */}
          <FadeUp delay={0.12} className="flex-1">
            {/* Large opening quote */}
            <p
              className="font-display font-extrabold select-none leading-none mb-3"
              style={{
                fontSize: "4.5rem",
                lineHeight: 1,
                color: "rgba(26,86,219,0.25)",
              }}
            >
              &ldquo;
            </p>

            {/* Quote */}
            <blockquote
              className="font-display font-semibold text-white text-balance"
              style={{ fontSize: "clamp(1.35rem, 2.4vw, 1.75rem)", lineHeight: 1.35 }}
            >
              Climb every mountain, ford every stream, follow every rainbow, till you
              find your dream.
            </blockquote>

            {/* Attribution line */}
            <p
              className="mt-6 text-[13px] font-medium uppercase tracking-[0.12em]"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              — Santhosh Chittalappilly
            </p>

            {/* Horizontal rule */}
            <div
              className="my-8 h-px"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />

            {/* Director's message */}
            <p
              className="text-[15.5px] leading-[1.75]"
              style={{ color: "rgba(255,255,255,0.52)" }}
            >
              When Wincentre was founded in 2008, most coaching centres treated Kerala
              PSC Civil Engineering as a single, uniform examination. We saw it
              differently. An ITI candidate and a B.Tech candidate have completely
              different syllabi, different target posts, and fundamentally different
              preparation needs. Wincentre was built to address each of them with the
              precision they deserve.
            </p>

            <p
              className="mt-5 text-[15.5px] leading-[1.75]"
              style={{ color: "rgba(255,255,255,0.52)" }}
            >
              Sixteen years later, that conviction has guided over 20,000 students and
              produced more than 40 first rank holders in Kerala PSC Civil Engineering
              examinations.
            </p>
          </FadeUp>

        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  )
}
