import { GlowCard } from "@/components/glow-card"
import { CheckCircle2, AlertCircle, Clock } from "lucide-react"

const systems = [
  { name: "API Gateway", status: "operational", latency: "12ms" },
  { name: "Database Cluster", status: "operational", latency: "8ms" },
  { name: "CDN Network", status: "operational", latency: "3ms" },
  { name: "ML Pipeline", status: "degraded", latency: "245ms" },
  { name: "Auth Service", status: "operational", latency: "15ms" },
]

export function SystemStatus() {
  return (
    <GlowCard className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">System Status</h3>
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-[oklch(0.4_0.15_150/0.2)] text-[oklch(0.7_0.2_150)]">
          4/5 Operational
        </span>
      </div>
      <div className="space-y-3">
        {systems.map((system) => (
          <div
            key={system.name}
            className="flex items-center justify-between p-3 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              {system.status === "operational" ? (
                <CheckCircle2 className="w-5 h-5 text-[oklch(0.7_0.2_150)]" />
              ) : (
                <AlertCircle className="w-5 h-5 text-[oklch(0.75_0.2_60)]" />
              )}
              <span className="text-sm font-medium">{system.name}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {system.latency}
            </div>
          </div>
        ))}
      </div>

      {/* Uptime indicator */}
      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">30-day uptime</span>
          <span className="font-semibold text-[oklch(0.7_0.2_150)]">99.97%</span>
        </div>
        <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_280)] to-[oklch(0.55_0.2_240)]"
            style={{ width: "99.97%" }}
          />
        </div>
      </div>
    </GlowCard>
  )
}
