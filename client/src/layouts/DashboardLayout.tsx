// Dashboard layout.
// Later this layout will contain:
// - sidebar
// - navbar
// - dashboard structure

import {
  Dumbbell,
  LayoutDashboard,
  Brain,
  LineChart,
  Settings,
  BicepsFlexed
} from "lucide-react";

import { Link } from "react-router-dom";

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* SIDEBAR */}

      <aside className="w-[260px] border-r border-zinc-800 p-6 hidden md:block">
        <h1 className="text-3xl font-bold mb-10">
          FitNova-AI
        </h1>

        <nav className="flex flex-col gap-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-900 transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/workouts"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-900 transition"
          >
            <Dumbbell size={20} />
            Workouts
          </Link>

          <Link
            to="/progress"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-900 transition"
          >
            <LineChart size={20} />
            Progress
          </Link>

          <Link
            to="/ai-coach"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-900 transition"
          >
            <Brain size={20} />
            AI Coach
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-900 transition"
          >
            <Settings size={20} />
            Settings
          </Link>

          <Link
            to="/ai-workout"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-900 transition"
          >
            <BicepsFlexed size={20} />
            AI Workout
            </Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;