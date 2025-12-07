import { GlowCard } from "@/components/glow-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    user: "Sarah Miller",
    action: "deployed new feature",
    time: "2 min ago",
    avatar: "SM",
  },
  {
    user: "James Wilson",
    action: "completed AI training",
    time: "15 min ago",
    avatar: "JW",
  },
  {
    user: "Emma Davis",
    action: "updated dashboard settings",
    time: "1 hour ago",
    avatar: "ED",
  },
  {
    user: "Michael Brown",
    action: "added new integration",
    time: "2 hours ago",
    avatar: "MB",
  },
  {
    user: "Lisa Anderson",
    action: "generated monthly report",
    time: "4 hours ago",
    avatar: "LA",
  },
]

export function RecentActivity() {
  return (
    <GlowCard className="p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/30 transition-colors">
            <Avatar className="w-10 h-10 ring-2 ring-primary/20">
              <AvatarImage src={`/.jpg?height=40&width=40&query=${activity.user} avatar`} />
              <AvatarFallback className="bg-gradient-to-br from-[oklch(0.65_0.25_280)] to-[oklch(0.55_0.2_240)] text-white text-xs">
                {activity.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium">{activity.user}</span>{" "}
                <span className="text-muted-foreground">{activity.action}</span>
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-[oklch(0.65_0.25_280)] animate-pulse" />
          </div>
        ))}
      </div>
    </GlowCard>
  )
}
