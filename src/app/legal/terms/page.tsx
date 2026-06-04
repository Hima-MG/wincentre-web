import type { Metadata } from "next"
import { MarketingPage } from "@/components/templates/MarketingPage"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Wincentre's Terms & Conditions — the terms governing your use of wincentre.in.",
  alternates: { canonical: "https://wincentre.in/legal/terms" },
}

const LAST_UPDATED = "June 2025"

export default function TermsPage() {
  return (
    <MarketingPage>
      <div className="bg-white pt-32 pb-24">
        <div className="container mx-auto max-w-[760px] px-5 lg:px-10">

          {/* Header */}
          <div className="mb-12 pb-8 border-b border-neutral-100">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-600 mb-3">
              Legal
            </p>
            <h1 className="font-display text-[2rem] sm:text-[2.6rem] font-extrabold leading-tight tracking-tight text-neutral-950">
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-[14px] text-neutral-400">
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          {/* Body */}
          <div className="space-y-10 text-[15px] leading-[1.8] text-neutral-600">

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using <strong className="text-neutral-800">wincentre.in</strong>,
                you agree to be bound by these Terms &amp; Conditions. If you do not agree, please
                discontinue use of the website immediately.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                2. About This Website
              </h2>
              <p>
                wincentre.in is the institutional website of Wincentre, a Civil Engineering PSC
                preparation institution based in Thrissur, Kerala. This website provides
                information about Wincentre and redirects users to Civilezy (civilezy.in), which
                is Wincentre&apos;s official digital learning platform.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                3. Intellectual Property
              </h2>
              <p>
                All content on this website — including text, design, and layout — is the property
                of Wincentre and is protected under applicable copyright laws. You may not
                reproduce, distribute, or use any content from this website without prior written
                permission from Wincentre.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                4. Third-Party Links
              </h2>
              <p>
                This website contains links to external platforms, including Civilezy (civilezy.in),
                Google Play Store, and Apple App Store. These links are provided for your
                convenience. Wincentre does not control, endorse, or assume responsibility for the
                content or practices of any third-party websites.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                5. Disclaimer of Warranties
              </h2>
              <p>
                This website is provided on an &ldquo;as is&rdquo; basis without warranties of any kind,
                either express or implied. Wincentre does not guarantee the accuracy, completeness,
                or timeliness of any information on this website. Information is subject to change
                without notice.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Wincentre shall not be liable for any
                direct, indirect, incidental, or consequential damages arising from your use of
                or inability to use this website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                7. Governing Law
              </h2>
              <p>
                These Terms &amp; Conditions are governed by the laws of India. Any disputes arising
                from the use of this website shall be subject to the jurisdiction of courts in
                Thrissur, Kerala.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                8. Changes to Terms
              </h2>
              <p>
                Wincentre reserves the right to update these Terms &amp; Conditions at any time.
                The &ldquo;Last updated&rdquo; date reflects the most recent revision. Continued use of
                the website after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                9. Contact
              </h2>
              <p>
                For questions about these Terms &amp; Conditions, contact us:
              </p>
              <div className="mt-4 rounded-xl border border-neutral-100 bg-neutral-50 px-6 py-5 text-[14.5px] space-y-1">
                <p className="font-semibold text-neutral-900">Wincentre</p>
                <p>First Floor, Friends Trade Centre, Kaalvary Junction,</p>
                <p>Vanchikulam, Aranattukara Road, Poothole, Thrissur, Kerala</p>
                <p className="mt-2">
                  <a href="mailto:wincentre@civilezy.in" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
                    wincentre@civilezy.in
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </MarketingPage>
  )
}
