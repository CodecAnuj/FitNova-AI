import {
  useState,
} from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  generateWorkoutPlan,
} from "../../services/ai.service";

const AiWorkout = () => {
  const [formData, setFormData] =
    useState({
      goal: "",
      experience: "",
      daysPerWeek: "",
    });

  const [plan, setPlan] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleGenerate =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        setLoading(true);

        const response =
          await generateWorkoutPlan(
            formData
          );

        setPlan(
          response.workoutPlan
            .plan
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          AI Workout Generator
        </h1>

        {/* FORM */}

        <form
          onSubmit={handleGenerate}
          className="grid md:grid-cols-3 gap-4 mb-10"
        >
          <input
            type="text"
            name="goal"
            placeholder="Goal"
            onChange={handleChange}
            className="p-3 rounded-xl bg-zinc-900"
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience"
            onChange={handleChange}
            className="p-3 rounded-xl bg-zinc-900"
          />

          <input
            type="number"
            name="daysPerWeek"
            placeholder="Days Per Week"
            onChange={handleChange}
            className="p-3 rounded-xl bg-zinc-900"
          />

          <button className="bg-white text-black p-3 rounded-xl">
            {loading
              ? "Generating..."
              : "Generate Plan"}
          </button>
        </form>

        {/* PLAN */}

        {plan && (
          <div className="space-y-6">
            {plan.days.map(
              (
                day: any,
                index: number
              ) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
                >
                  <h2 className="text-2xl font-bold mb-2">
                    {day.day}
                  </h2>

                  <p className="text-zinc-400 mb-4">
                    {day.focus}
                  </p>

                  <div className="space-y-3">
                    {day.exercises.map(
                      (
                        exercise: any,
                        i: number
                      ) => (
                        <div
                          key={i}
                          className="bg-black rounded-xl p-4"
                        >
                          <h3 className="font-bold">
                            {
                              exercise.name
                            }
                          </h3>

                          <p>
                            Sets:
                            {
                              exercise.sets
                            }
                          </p>

                          <p>
                            Reps:
                            {
                              exercise.reps
                            }
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AiWorkout;