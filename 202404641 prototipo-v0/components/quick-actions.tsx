import { Rocket, Brain, Shield, Layers } from "lucide-react"
import { GlowCard } from "@/components/glow-card"
import { Button } from "@/components/ui/button"

const actions = [
  {
    title: "Launch Campaign",
    description: "Start new marketing",
    icon: Rocket,
    gradient: "from-[oklch(0.65_0.25_280)] to-[oklch(0.55_0.2_260)]",
  },
  {
    title: "AI Analysis",
    description: "Generate insights",
    icon: Brain,
    gradient: "from-[oklch(0.55_0.2_240)] to-[oklch(0.5_0.18_220)]",
  },
  {
    title: "Security Scan",
    description: "Check vulnerabilities",
    icon: Shield,
    gradient: "from-[oklch(0.6_0.22_260)] to-[oklch(0.55_0.2_280)]",
  },
  {
    title: "Deploy Update",
    description: "Push to production",
    icon: Layers,
    gradient: "from-[oklch(0.5_0.18_220)] to-[oklch(0.6_0.22_260)]",
  },
]

export function QuickActions() {
  return (
    <GlowCard className="p-6 h-full">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="space-y-3">
        {actions.map((action) => (
          <Button
            key={action.title}
            variant="ghost"
            className="w-full justify-start h-auto p-3 rounded-xl hover:bg-muted/50 group transition-all"
          >
            <div
              className={`p-2 rounded-lg bg-gradient-to-br ${action.gradient} mr-3 group-hover:scale-110 transition-transform`}
            >
              <action.icon className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">{action.title}</p>
              <p className="text-xs text-muted-foreground">{action.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </GlowCard>
  )
}
