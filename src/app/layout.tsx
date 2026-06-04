import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const SITE_URL = "https://wincentre.in"
const SITE_NAME = "Wincentre"
const DEFAULT_TITLE = "Wincentre — Kerala's Trusted Civil Engineering PSC Institution"
const DEFAULT_DESCRIPTION =
  "Established on May 12, 2008 in Thrissur, Kerala, Wincentre is a dedicated Civil Engineering PSC preparation institution. 16+ years of experience, 20,000+ students guided, 40+ first rank holders in Kerala PSC."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    template: `%s | ${SITE_NAME}`,
    default: DEFAULT_TITLE,
  },

  description: DEFAULT_DESCRIPTION,

  keywords: [
    "Kerala PSC Civil Engineering",
    "Wincentre",
    "Civil Engineering PSC coaching Thrissur",
    "Kerala PSC preparation",
    "Assistant Engineer Kerala PSC",
    "ITI PSC preparation Kerala",
    "Diploma Civil Engineering PSC",
    "Surveyor PSC Kerala",
    "B.Tech Civil PSC coaching",
    "Civilezy",
  ],

  authors: [{ name: "Wincentre", url: SITE_URL }],
  creator: "Wincentre",
  publisher: "Wincentre",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wincentre — Kerala's Trusted Civil Engineering PSC Institution",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description:
      "Established 2008 · Thrissur, Kerala · 16+ years · 20,000+ students · 40+ first ranks in Kerala PSC Civil Engineering.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: SITE_URL,
  },
}

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Wincentre",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  description:
    "Kerala's trusted Civil Engineering PSC preparation institution, established in 2008 in Thrissur, Kerala.",
  foundingDate: "2008-05-12",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "First Floor, Friends Trade Centre, Kaalvary Junction, Vanchikulam, Aranattukara Road, Poothole",
    addressLocality: "Thrissur",
    addressRegion: "Kerala",
    postalCode: "680004",
    addressCountry: "IN",
  },
  telephone: "+919072345630",
  email: "wincentre@civilezy.in",
  sameAs: ["https://civilezy.in"],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="bg-white text-neutral-900 antialiased">{children}</body>
    </html>
  )
}
