"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Skill } from "@/app/page"

interface SkillsGridProps {
  skills: Skill[]
  onExchangeRequest: (skill: Skill) => void
}

export function SkillsGrid({ skills, onExchangeRequest }: SkillsGridProps) {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Habilidades disponibles</h2>

      {skills.length === 0 ? (
        <div className="glow-card neon-border rounded-2xl p-12 bg-card text-center">
          <p className="text-muted-foreground">No se encontraron habilidades con los filtros seleccionados.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} onExchangeRequest={onExchangeRequest} />
          ))}
        </div>
      )}
    </section>
  )
}

interface SkillCardProps {
  skill: Skill
  onExchangeRequest: (skill: Skill) => void
}

function SkillCard({ skill, onExchangeRequest }: SkillCardProps) {
  const categoryColors: Record<string, string> = {
    Música: "bg-[oklch(0.5_0.2_280/0.3)] text-[oklch(0.8_0.15_280)]",
    Idiomas: "bg-[oklch(0.5_0.18_200/0.3)] text-[oklch(0.8_0.12_200)]",
    Tecnología: "bg-[oklch(0.5_0.2_240/0.3)] text-[oklch(0.8_0.15_240)]",
    Arte: "bg-[oklch(0.5_0.18_320/0.3)] text-[oklch(0.8_0.12_320)]",
  }

  const levelColors: Record<string, string> = {
    Básico: "bg-[oklch(0.4_0.15_150/0.3)] text-[oklch(0.75_0.12_150)]",
    Intermedio: "bg-[oklch(0.45_0.18_60/0.3)] text-[oklch(0.8_0.15_60)]",
    Avanzado: "bg-[oklch(0.45_0.2_30/0.3)] text-[oklch(0.8_0.15_30)]",
  }

  return (
    <article className="glow-card neon-border rounded-2xl p-6 bg-card hover:scale-[1.02] transition-transform duration-300 flex flex-col">
      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-3">{skill.title}</h3>

      {/* Badges */}
      <div className="flex gap-2 mb-3">
        <Badge variant="secondary" className={categoryColors[skill.category] || "bg-muted text-muted-foreground"}>
          {skill.category}
        </Badge>
        <Badge variant="secondary" className={levelColors[skill.level] || "bg-muted text-muted-foreground"}>
          {skill.level}
        </Badge>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{skill.description}</p>

      {/* User */}
      <p className="text-xs text-muted-foreground mb-4">Por {skill.userName}</p>

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors bg-transparent"
        >
          Ver perfil
        </Button>
        <Button
          size="sm"
          className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-primary-foreground"
          onClick={() => onExchangeRequest(skill)}
        >
          Solicitar intercambio
        </Button>
      </div>
    </article>
  )
}
