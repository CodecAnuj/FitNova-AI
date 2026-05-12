import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  addProgress,
  getProgress,
} from "../../services/progress.service";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Progress = () => {
  const [progress, setProgress] =
    useState<any[]>([]);

  const [formData, setFormData] =
    useState({
      weight: "",
      calories: "",
    });

  const fetchProgress =
    async () => {
      try {
        const response =
          await getProgress();

        setProgress(
          response.progress
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchProgress();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        await addProgress(
          formData
        );

        fetchProgress();

        setFormData({
          weight: "",
          calories: "",
        });
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-4xl font-bold mb-8">
          Progress Tracking
        </h1>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4 mb-10"
        >
          <input
            type="number"
            name="weight"
            placeholder="Weight"
            value={formData.weight}
            onChange={handleChange}
            className="p-3 rounded-xl bg-zinc-900"
          />

          <input
            type="number"
            name="calories"
            placeholder="Calories"
            value={
              formData.calories
            }
            onChange={handleChange}
            className="p-3 rounded-xl bg-zinc-900"
          />

          <button className="bg-white text-black p-3 rounded-xl">
            Add Progress
          </button>
        </form>

        {/* CHART */}

        <div className="bg-zinc-900 rounded-2xl p-6 h-[400px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart data={progress}>
              <XAxis
                dataKey="createdAt"
              />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="weight"
                stroke="#ffffff"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Progress;