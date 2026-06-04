import { SectionLabel } from "@/components/atoms/SectionLabel"
import { FadeUp } from "@/components/animations/FadeUp"
import { MapPin, Phone, Mail } from "lucide-react"

const PHONE_DISPLAY = "907 23456 30"
const PHONE_HREF = "tel:+919072345630"
const EMAIL = "wincentre@civilezy.in"
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Friends+Trade+Centre+Kaalvary+Junction+Poothole+Thrissur+Kerala"

const ADDRESS_LINES = [
  "First Floor, Friends Trade Centre,",
  "Kaalvary Junction, Vanchikulam,",
  "Aranattukara Road, Poothole,",
  "Thrissur, Kerala",
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24 md:py-32 border-t border-neutral-100">
      <div className="container mx-auto max-w-[1120px] px-5 lg:px-10">
        <div className="flex flex-col gap-14 lg:flex-row lg:gap-20 lg:items-start">

          {/* ── Left: heading + map ─────────────────────── */}
          <div className="lg:w-[360px] xl:w-[400px] shrink-0">
            <FadeUp>
              <SectionLabel>Contact</SectionLabel>

              <h2 className="mt-5 font-display text-[1.9rem] sm:text-[2.4rem] font-extrabold leading-tight tracking-tight text-neutral-950 text-balance">
                Get in touch with Wincentre.
              </h2>

              <p className="mt-5 text-[15px] leading-relaxed text-neutral-500 max-w-[340px]">
                For enquiries about programmes, admissions, or Civilezy, reach
                out to us directly. We are based in Thrissur, Kerala.
              </p>

              {/* Map tile */}
              <div className="mt-8">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Wincentre on Google Maps"
                  className="group flex flex-col items-center justify-center gap-3 h-[172px] rounded-2xl border border-neutral-100 bg-neutral-50 hover:bg-neutral-100 hover:border-neutral-200 transition-all duration-200"
                >
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center group-hover:bg-brand-200 transition-colors">
                    <MapPin size={18} className="text-brand-600" />
                  </div>
                  <div className="text-center px-4">
                    <p className="text-[13.5px] font-semibold text-neutral-700">
                      Friends Trade Centre, Poothole
                    </p>
                    <p className="mt-0.5 text-[12px] text-neutral-400">
                      Thrissur, Kerala · Open in Google Maps
                    </p>
                  </div>
                </a>
              </div>
            </FadeUp>
          </div>

          {/* ── Right: contact details ───────────────────── */}
          <div className="flex-1">
            <FadeUp delay={0.1}>
              <div className="space-y-4">

                {/* Phone */}
                <div className="flex items-start gap-5 rounded-2xl border border-neutral-100 px-5 py-5 hover:border-neutral-200 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={17} className="text-brand-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400 mb-1">
                      Phone
                    </p>
                    <p className="text-[15px] font-medium text-neutral-900 mb-2">
                      {PHONE_DISPLAY}
                    </p>
                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center justify-center h-9 px-5 rounded-lg bg-brand-600 text-white text-[13px] font-semibold hover:bg-brand-700 active:scale-[0.98] transition-all duration-150"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 rounded-2xl border border-neutral-100 px-5 py-5 hover:border-neutral-200 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={17} className="text-brand-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400 mb-1">
                      Email
                    </p>
                    <p className="text-[15px] font-medium text-neutral-900 mb-2 break-all">
                      {EMAIL}
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex items-center justify-center h-9 px-5 rounded-lg border border-neutral-200 text-neutral-700 text-[13px] font-semibold hover:bg-neutral-50 hover:border-neutral-300 active:scale-[0.98] transition-all duration-150"
                    >
                      Send Email
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5 rounded-2xl border border-neutral-100 px-5 py-5 hover:border-neutral-200 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={17} className="text-brand-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400 mb-1">
                      Office Address
                    </p>
                    <address className="not-italic mb-2">
                      {ADDRESS_LINES.map((line) => (
                        <span key={line} className="block text-[14.5px] leading-[1.65] text-neutral-800">
                          {line}
                        </span>
                      ))}
                    </address>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-9 px-5 rounded-lg border border-neutral-200 text-neutral-700 text-[13px] font-semibold hover:bg-neutral-50 hover:border-neutral-300 active:scale-[0.98] transition-all duration-150"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>

              </div>

              {/* Office hours */}
              <div className="mt-4 rounded-2xl px-5 py-5 border border-neutral-100 bg-neutral-50">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400 mb-1.5">
                  Office Hours
                </p>
                <p className="text-[14.5px] font-medium text-neutral-700">
                  Monday – Saturday &nbsp;·&nbsp; 9:00 AM – 6:00 PM IST
                </p>
                <p className="mt-1 text-[13px] text-neutral-400">
                  Closed on Sundays and public holidays
                </p>
              </div>

            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  )
}
