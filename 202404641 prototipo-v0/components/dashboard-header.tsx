import { Bell, Search, Sparkles, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[oklch(0.65_0.25_280)] to-[oklch(0.55_0.2_240)] flex items-center justify-center pulse-glow">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold gradient-text">NexusAI</span>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 text-xs bg-background rounded border border-border text-muted-foreground">
                ⌘K
              </kbd>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative rounded-xl hover:bg-muted/50">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[oklch(0.65_0.25_280)] rounded-full animate-pulse" />
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden rounded-xl hover:bg-muted/50">
              <Menu className="w-5 h-5" />
            </Button>

            <div className="hidden md:flex items-center gap-3 ml-2 pl-4 border-l border-border/50">
              <div className="text-right">
                <p className="text-sm font-medium">Alex Chen</p>
                <p className="text-xs text-muted-foreground">Pro Member</p>
              </div>
              <Avatar className="w-10 h-10 ring-2 ring-primary/30">
                <AvatarImage src="/professional-avatar-futuristic.jpg" />
                <AvatarFallback className="bg-gradient-to-br from-[oklch(0.65_0.25_280)] to-[oklch(0.55_0.2_240)] text-white">
                  AC
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
