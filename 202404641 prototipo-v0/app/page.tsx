"use client"

import { useState } from "react"
import { Navbar } from "@/components/skilltrade/navbar"
import { HeroSection } from "@/components/skilltrade/hero-section"
import { SkillFilters } from "@/components/skilltrade/skill-filters"
import { SkillsGrid } from "@/components/skilltrade/skills-grid"
import { DashboardPanel } from "@/components/skilltrade/dashboard-panel"
import { ExchangeModal } from "@/components/skilltrade/exchange-modal"
import { Toast } from "@/components/skilltrade/toast"
import { Footer } from "@/components/skilltrade/footer"

export interface Skill {
  id: number
  title: string
  category: string
  level: string
  description: string
  userName: string
}

const skillsData: Skill[] = [
  {
    id: 1,
    title: "Clases de guitarra básica",
    category: "Música",
    level: "Básico",
    description: "Aprende acordes fundamentales y técnicas de rasgueo para empezar tu camino musical.",
    userName: "Juan Pérez",
  },
  {
    id: 2,
    title: "Conversación en inglés",
    category: "Idiomas",
    level: "Intermedio",
    description: "Practica tu inglés conversacional con sesiones dinámicas y temas actuales.",
    userName: "María García",
  },
  {
    id: 3,
    title: "Introducción a Python",
    category: "Tecnología",
    level: "Básico",
    description: "Domina los fundamentos de la programación con Python desde cero.",
    userName: "Carlos López",
  },
  {
    id: 4,
    title: "Dibujo digital",
    category: "Arte",
    level: "Avanzado",
    description: "Técnicas avanzadas de ilustración digital usando Procreate y Photoshop.",
    userName: "Ana Martínez",
  },
  {
    id: 5,
    title: "Piano clásico",
    category: "Música",
    level: "Intermedio",
    description: "Aprende piezas clásicas y mejora tu técnica de lectura de partituras.",
    userName: "Roberto Sánchez",
  },
  {
    id: 6,
    title: "Francés para principiantes",
    category: "Idiomas",
    level: "Básico",
    description: "Inicia tu aprendizaje del francés con pronunciación y gramática básica.",
    userName: "Laura Torres",
  },
]

export default function SkillTrade() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [filters, setFilters] = useState({
    category: "Todas",
    level: "Todos",
    search: "",
  })

  const handleExchangeRequest = (skill: Skill) => {
    setSelectedSkill(skill)
    setIsModalOpen(true)
  }

  const handleSendRequest = () => {
    setIsModalOpen(false)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = filters.category === "Todas" || skill.category === filters.category
    const matchesLevel = filters.level === "Todos" || skill.level === filters.level
    const matchesSearch =
      filters.search === "" ||
      skill.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      skill.description.toLowerCase().includes(filters.search.toLowerCase())
    return matchesCategory && matchesLevel && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Background gradient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[oklch(0.4_0.2_280/0.15)] blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-[oklch(0.4_0.18_240/0.1)] blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 rounded-full bg-[oklch(0.35_0.15_260/0.12)] blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <SkillFilters filters={filters} onFiltersChange={setFilters} />
          <SkillsGrid skills={filteredSkills} onExchangeRequest={handleExchangeRequest} />
          <DashboardPanel />
        </main>
        <Footer />
      </div>

      <ExchangeModal
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSend={handleSendRequest}
      />

      <Toast message="Solicitud enviada con éxito." isVisible={showToast} onClose={() => setShowToast(false)} />
    </div>
  )
}
