"use client"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useScrolled } from "@/hooks/useScrolled"
import { NAV_LINKS, CIVILEZY_LINKS } from "@/data/navigation"
import { cn } from "@/lib/utils"

export function Navbar() {
  const scrolled = useScrolled(64)
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-neutral-200/80 shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="container mx-auto flex h-[68px] max-w-[1120px] items-center justify-between px-5 lg:px-10">

          {/* Logo */}
          <Link
            href="/"
            className="font-display text-[17px] font-extrabold tracking-tight transition-opacity hover:opacity-75"
            style={{ color: scrolled ? "#060D1F" : "#ffffff" }}
          >
            Wincentre
          </Link>

          {/* Desktop nav — centered */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-[14px] font-medium rounded-lg transition-colors duration-150",
                    scrolled
                      ? "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right CTA */}
          <div className="hidden md:flex">
            <a
              href={CIVILEZY_LINKS.web}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center h-9 px-5 rounded-lg text-[13px] font-semibold transition-all duration-150",
                scrolled
                  ? "bg-brand-600 text-white hover:bg-brand-700"
                  : "bg-white/10 border border-white/25 text-white hover:bg-white/20"
              )}
            >
              Visit Civilezy
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              "md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg transition-colors",
              scrolled ? "text-neutral-700 hover:bg-neutral-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[280px] p-0 bg-white">
          <SheetHeader className="flex flex-row items-center justify-between px-6 py-5 border-b border-neutral-100">
            <SheetTitle className="font-display text-[16px] font-extrabold text-neutral-950">
              Wincentre
            </SheetTitle>
            <button
              onClick={() => setOpen(false)}
              className="h-8 w-8 inline-flex items-center justify-center rounded-lg hover:bg-neutral-100 text-neutral-500"
              aria-label="Close menu"
            >
              <X size={17} />
            </button>
          </SheetHeader>

          <ul className="px-4 py-5 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center w-full px-4 py-3 text-[15px] font-medium rounded-xl text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-6 pb-8 border-t border-neutral-100 pt-5">
            <a
              href={CIVILEZY_LINKS.web}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full h-11 rounded-xl bg-brand-600 text-white text-[14px] font-semibold hover:bg-brand-700 transition-colors"
            >
              Visit Civilezy
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
