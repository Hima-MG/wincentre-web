import { Navbar } from "@/components/organisms/Navbar"
import { Footer } from "@/components/organisms/Footer"
import type { ReactNode } from "react"

interface MarketingPageProps {
  children: ReactNode
}

export function MarketingPage({ children }: MarketingPageProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
