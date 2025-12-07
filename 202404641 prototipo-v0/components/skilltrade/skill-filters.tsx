"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FiltersState {
  category: string
  level: string
  search: string
}

interface SkillFiltersProps {
  filters: FiltersState
  onFiltersChange: (filters: FiltersState) => void
}

const categories = ["Todas", "Música", "Idiomas", "Tecnología", "Arte"]
const levels = ["Todos", "Básico", "Intermedio", "Avanzado"]

export function SkillFilters({ filters, onFiltersChange }: SkillFiltersProps) {
  return (
    <section id="habilidades" className="container mx-auto px-4 pb-8">
      <div className="glow-card neon-border rounded-2xl p-6 bg-card">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Category Dropdown */}
          <div className="flex-1">
            <label className="text-sm text-muted-foreground mb-2 block">Categoría</label>
            <Select
              value={filters.category}
              onValueChange={(value) => onFiltersChange({ ...filters, category: value })}
            >
              <SelectTrigger className="bg-input border-border text-foreground">
                <SelectValue placeholder="Seleccionar categoría" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat} className="text-popover-foreground hover:bg-muted">
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Level Dropdown */}
          <div className="flex-1">
            <label className="text-sm text-muted-foreground mb-2 block">Nivel</label>
            <Select value={filters.level} onValueChange={(value) => onFiltersChange({ ...filters, level: value })}>
              <SelectTrigger className="bg-input border-border text-foreground">
                <SelectValue placeholder="Seleccionar nivel" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {levels.map((lvl) => (
                  <SelectItem key={lvl} value={lvl} className="text-popover-foreground hover:bg-muted">
                    {lvl}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Search Input */}
          <div className="flex-[2]">
            <label className="text-sm text-muted-foreground mb-2 block">Buscar</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar habilidades…"
                value={filters.search}
                onChange={(e) => onFiltersChange({ ...filters, search: e.target.value })}
                className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
