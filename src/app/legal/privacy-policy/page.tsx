import type { Metadata } from "next"
import { MarketingPage } from "@/components/templates/MarketingPage"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Wincentre's Privacy Policy — how we collect, use, and protect your information.",
  alternates: { canonical: "https://wincentre.in/legal/privacy-policy" },
}

const LAST_UPDATED = "June 2025"

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-3 text-[14px] text-neutral-400">
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          {/* Body */}
          <div className="prose-custom space-y-10 text-[15px] leading-[1.8] text-neutral-600">

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                1. Introduction
              </h2>
              <p>
                Wincentre (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the website{" "}
                <strong className="text-neutral-800">wincentre.in</strong>. This Privacy Policy
                explains how we collect, use, and protect information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                2. Information We Collect
              </h2>
              <p>
                This website is an informational website. We do not require you to create an
                account or provide personal information to browse its contents. We may collect:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-outside pl-5 text-neutral-600">
                <li>Standard server logs (IP address, browser type, pages visited) for analytics purposes.</li>
                <li>Information you voluntarily provide when contacting us via phone or email.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                3. How We Use Information
              </h2>
              <p>
                Any information collected is used solely to:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-outside pl-5 text-neutral-600">
                <li>Respond to your enquiries.</li>
                <li>Improve the website experience.</li>
                <li>Understand how our website is used in aggregate, anonymised form.</li>
              </ul>
              <p className="mt-4">
                We do not sell, rent, or share your personal information with third parties for
                marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                4. Third-Party Links
              </h2>
              <p>
                Our website contains links to Civilezy (civilezy.in), Google Maps, and app
                stores. These are external services governed by their own privacy policies.
                We are not responsible for the privacy practices of third-party websites.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                5. Cookies
              </h2>
              <p>
                This website may use essential cookies for basic site functionality. We do not
                use tracking cookies or advertising cookies. No personal data is stored in
                cookies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                6. Data Security
              </h2>
              <p>
                We take reasonable measures to protect any information submitted to us. However,
                no transmission over the internet is 100% secure. Please exercise caution when
                submitting personal information online.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at
                the top of this page will reflect any changes. Continued use of the website
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.1rem] font-bold text-neutral-900 mb-3">
                8. Contact
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact us:
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
