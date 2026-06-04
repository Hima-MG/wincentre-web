"use client"
import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface FadeUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeUp({ children, delay = 0, duration = 0.4, className }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
