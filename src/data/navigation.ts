import type { NavLink } from "@/types/navigation"

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Civilezy", href: "#civilezy" },
  { label: "Contact", href: "#contact" },
]

export const FOOTER_NAV: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms & Conditions", href: "/legal/terms" },
]

export const CIVILEZY_LINKS = {
  web: "https://civilezy.in",
  android: "https://play.google.com/store/apps/details?id=in.civilezy",
  ios: "https://apps.apple.com/app/civilezy",
}
