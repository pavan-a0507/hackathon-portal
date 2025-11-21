import { NavLink } from "@/components/NavLink";
import { Home, LayoutDashboard, TrendingUp, Award } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl">SapthaHacks Portal</span>
          </div>
          
          <div className="flex gap-1">
            <NavLink
              to="/"
              className="px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors hover:bg-muted"
              activeClassName="bg-muted text-primary"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </NavLink>
            <NavLink
              to="/dashboard"
              className="px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors hover:bg-muted"
              activeClassName="bg-muted text-primary"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </NavLink>
            <NavLink
              to="/stats"
              className="px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors hover:bg-muted"
              activeClassName="bg-muted text-primary"
            >
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Stats</span>
            </NavLink>
            <NavLink
              to="/sponsors"
              className="px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors hover:bg-muted"
              activeClassName="bg-muted text-primary"
            >
              <Award className="h-4 w-4" />
              <span className="hidden sm:inline">Sponsors</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
