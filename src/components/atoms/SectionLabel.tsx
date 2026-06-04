import { cn } from "@/lib/utils"

interface SectionLabelProps {
  children: string
  className?: string
  onDark?: boolean
}

export function SectionLabel({ children, className, onDark }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.12em] uppercase",
        onDark
          ? "bg-white/10 text-brand-100 border border-white/20"
          : "bg-brand-50 text-brand-600 border border-brand-100",
        className
      )}
    >
      {children}
    </span>
  )
}
