import { Clock, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const recentRequests = [
  {
    id: 1,
    from: "María García",
    skill: "Conversación en inglés",
    offered: "Diseño de logos",
    time: "Hace 2 horas",
  },
  {
    id: 2,
    from: "Carlos López",
    skill: "Introducción a Python",
    offered: "Fotografía básica",
    time: "Hace 5 horas",
  },
  {
    id: 3,
    from: "Ana Martínez",
    skill: "Dibujo digital",
    offered: "Marketing digital",
    time: "Hace 1 día",
  },
]

const mySkills = [
  { id: 1, title: "Desarrollo web con React", exchanges: 12, status: "Activa" },
  { id: 2, title: "Edición de video", exchanges: 8, status: "Activa" },
  { id: 3, title: "Clases de español", exchanges: 5, status: "Pausada" },
]

export function DashboardPanel() {
  return (
    <section id="panel" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">Panel de actividad</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Gestiona tus solicitudes de intercambio y administra las habilidades que ofreces.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Recent Requests Panel */}
          <div className="glow-card p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Solicitudes recientes</h3>
            </div>

            <div className="space-y-4">
              {recentRequests.map((request) => (
                <div
                  key={request.id}
                  className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-medium text-foreground">{request.from}</span>
                    <span className="text-xs text-muted-foreground">{request.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Quiere: <span className="text-secondary">{request.skill}</span>
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ofrece: <span className="text-primary">{request.offered}</span>
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs border-border/50 hover:border-primary/50 hover:bg-primary/10 bg-transparent"
                    >
                      Rechazar
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 text-xs bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
                    >
                      Aceptar
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="ghost" className="w-full mt-4 text-muted-foreground hover:text-foreground">
              Ver todas las solicitudes
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* My Skills Panel */}
          <div className="glow-card p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Habilidades que ofreces</h3>
            </div>

            <div className="space-y-4">
              {mySkills.map((skill) => (
                <div
                  key={skill.id}
                  className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-secondary/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.title}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        skill.status === "Activa"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {skill.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{skill.exchanges} intercambios realizados</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs border-border/50 hover:border-secondary/50 hover:bg-secondary/10 bg-transparent"
                    >
                      Editar
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs border-border/50 hover:border-primary/50 hover:bg-primary/10 bg-transparent"
                    >
                      {skill.status === "Activa" ? "Pausar" : "Activar"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full mt-4 bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-primary-foreground">
              Agregar nueva habilidad
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
