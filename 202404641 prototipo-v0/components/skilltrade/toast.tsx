"use client"

import { CheckCircle, X } from "lucide-react"

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="glow-card neon-border rounded-xl px-4 py-3 bg-card flex items-center gap-3">
        <CheckCircle className="w-5 h-5 text-[oklch(0.7_0.18_150)]" />
        <p className="text-sm text-foreground">{message}</p>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors ml-2"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
