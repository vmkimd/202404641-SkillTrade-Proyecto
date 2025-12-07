"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Skill } from "@/app/page"

interface ExchangeModalProps {
  skill: Skill | null
  isOpen: boolean
  onClose: () => void
  onSend: () => void
}

export function ExchangeModal({ skill, isOpen, onClose, onSend }: ExchangeModalProps) {
  const [offeredSkill, setOfferedSkill] = useState("")
  const [message, setMessage] = useState("")

  if (!isOpen || !skill) return null

  const handleSend = () => {
    setOfferedSkill("")
    setMessage("")
    onSend()
  }

  const handleClose = () => {
    setOfferedSkill("")
    setMessage("")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md glow-card neon-border rounded-2xl p-6 bg-card animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-foreground mb-2">Crear solicitud de intercambio</h2>

        {/* Selected Skill */}
        <p className="text-sm text-muted-foreground mb-6">
          Habilidad seleccionada: <span className="text-primary font-medium">{skill.title}</span>
        </p>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Tu habilidad ofrecida</label>
            <Input
              type="text"
              placeholder="Ej: Clases de fotografía"
              value={offeredSkill}
              onChange={(e) => setOfferedSkill(e.target.value)}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Mensaje inicial</label>
            <Textarea
              placeholder="Escribe un mensaje para el usuario..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              className="flex-1 border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors bg-transparent"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-primary-foreground"
              onClick={handleSend}
            >
              Enviar solicitud
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
