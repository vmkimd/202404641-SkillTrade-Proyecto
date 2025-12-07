import type React from "react"
import { cn } from "@/lib/utils"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-card/80 backdrop-blur-sm neon-border glow-card transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  )
}
