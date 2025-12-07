"use client"

import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { GlowCard } from "@/components/glow-card"

const data = [
  { name: "Mon", value: 2400, revenue: 1800 },
  { name: "Tue", value: 1398, revenue: 2200 },
  { name: "Wed", value: 4800, revenue: 3100 },
  { name: "Thu", value: 3908, revenue: 2800 },
  { name: "Fri", value: 4800, revenue: 4200 },
  { name: "Sat", value: 3800, revenue: 3500 },
  { name: "Sun", value: 4300, revenue: 4000 },
]

export function ActivityChart() {
  return (
    <GlowCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Activity Overview</h3>
          <p className="text-sm text-muted-foreground">Weekly performance metrics</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[oklch(0.65_0.25_280)]" />
            <span className="text-muted-foreground">Users</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[oklch(0.55_0.2_240)]" />
            <span className="text-muted-foreground">Revenue</span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#a855f7" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#888", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#888", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                background: "rgba(20, 15, 35, 0.9)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                borderRadius: "12px",
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
              }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#a78bfa" }}
            />
            <Area type="monotone" dataKey="value" stroke="#a855f7" strokeWidth={2} fill="url(#purpleGradient)" />
            <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} fill="url(#blueGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlowCard>
  )
}
