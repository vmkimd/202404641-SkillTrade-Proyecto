import { Button } from "@/components/ui/button"
import { Sparkles, Users, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            <span className="gradient-text">Intercambia habilidades,</span>{" "}
            <span className="text-foreground">aprende sin límites.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg text-pretty">
            Conecta con personas que pueden enseñarte algo nuevo a cambio de lo que tú sabes hacer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-primary-foreground px-8"
            >
              Explorar habilidades
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all bg-transparent"
            >
              Publicar mi habilidad
            </Button>
          </div>
        </div>

        {/* Right Content - Floating Cards */}
        <div className="relative h-80 md:h-96 hidden lg:block">
          {/* Main floating card */}
          <div className="absolute top-0 right-0 w-64 glow-card neon-border rounded-2xl p-5 bg-card transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Diseño UI/UX</p>
                <p className="text-xs text-muted-foreground">Por Ana M.</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Aprende a crear interfaces modernas y atractivas.</p>
          </div>

          {/* Second floating card */}
          <div className="absolute top-24 left-0 w-56 glow-card neon-border rounded-2xl p-4 bg-card transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Users className="w-4 h-4 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Inglés avanzado</p>
                <p className="text-xs text-muted-foreground">Por Carlos R.</p>
              </div>
            </div>
          </div>

          {/* Third floating card */}
          <div className="absolute bottom-8 right-12 w-52 glow-card neon-border rounded-2xl p-4 bg-card transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">React.js</p>
                <p className="text-xs text-muted-foreground">Por Luis G.</p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl pulse-glow" />
        </div>
      </div>
    </section>
  )
}
