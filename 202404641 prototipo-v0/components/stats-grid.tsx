import { TrendingUp, Users, Zap, Target } from "lucide-react"
import { GlowCard } from "@/components/glow-card"

const stats = [
  {
    title: "Total Revenue",
    value: "$48,294",
    change: "+12.5%",
    trend: "up",
    icon: TrendingUp,
    gradient: "from-[oklch(0.65_0.25_280)] to-[oklch(0.55_0.2_260)]",
  },
  {
    title: "Active Users",
    value: "24,891",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    gradient: "from-[oklch(0.55_0.2_240)] to-[oklch(0.5_0.18_220)]",
  },
  {
    title: "Energy Score",
    value: "94.2%",
    change: "+3.1%",
    trend: "up",
    icon: Zap,
    gradient: "from-[oklch(0.6_0.22_260)] to-[oklch(0.55_0.2_280)]",
  },
  {
    title: "Goals Met",
    value: "18/20",
    change: "90%",
    trend: "up",
    icon: Target,
    gradient: "from-[oklch(0.5_0.18_220)] to-[oklch(0.6_0.22_260)]",
  },
]

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <GlowCard key={stat.title} className="p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
              <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
              <p className="text-xs text-[oklch(0.7_0.2_150)] mt-1 font-medium">{stat.change} from last month</p>
            </div>
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
              <stat.icon className="w-5 h-5 text-white" />
            </div>
          </div>
        </GlowCard>
      ))}
    </div>
  )
}
