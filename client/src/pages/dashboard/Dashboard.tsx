import DashboardLayout from "../../layouts/DashboardLayout";

import StatsCard from "../../components/dashboard/StatsCard";

import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-4xl font-bold mb-2">
          Welcome back,
          {user?.name}
        </h1>

        <p className="text-zinc-400 mb-10">
          Here's your fitness overview.
        </p>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatsCard
            title="Calories Burned"
            value="1240"
          />

          <StatsCard
            title="Workout Streak"
            value="12 Days"
          />

          <StatsCard
            title="Weight"
            value="72 KG"
          />

          <StatsCard
            title="Workouts"
            value="28"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;