import type { Metadata } from "next"
import { MarketingPage } from "@/components/templates/MarketingPage"
import { Hero } from "@/components/organisms/Hero"
import { AboutSection } from "@/components/organisms/AboutSection"
import { ProvidesSection } from "@/components/organisms/ProvidesSection"
import { DirectorSection } from "@/components/organisms/DirectorSection"
import { WhyWincentreSection } from "@/components/organisms/WhyWincentreSection"
import { CivilezyShowcase } from "@/components/organisms/CivilezyShowcase"
import { ContactSection } from "@/components/organisms/ContactSection"

export const metadata: Metadata = {
  title: "Wincentre — Kerala's Trusted Civil Engineering PSC Institution",
  description:
    "Established in 2008 in Thrissur, Kerala, Wincentre specialises in Kerala PSC Civil Engineering preparation — ITI, Diploma, B.Tech, and Surveyor levels. 16+ years of experience, 20,000+ students guided, 40+ first rank holders.",
  alternates: { canonical: "https://wincentre.in" },
}

export default function HomePage() {
  return (
    <MarketingPage>
      <Hero />
      <AboutSection />
      <ProvidesSection />
      <DirectorSection />
      <WhyWincentreSection />
      <CivilezyShowcase />
      <ContactSection />
    </MarketingPage>
  )
}
