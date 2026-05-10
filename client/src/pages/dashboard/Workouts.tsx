import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  createWorkout,
  getWorkouts,
  deleteWorkout,
} from "../../services/workout.service";

const Workouts = () => {
  const [workouts, setWorkouts] =
    useState<any[]>([]);

  const [formData, setFormData] =
    useState({
      title: "",
      category: "",
      duration: "",
      caloriesBurned: "",
    });

  const fetchWorkouts =
    async () => {
      try {
        const response =
          await getWorkouts();

        setWorkouts(
          response.workouts
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchWorkouts();
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
        await createWorkout(
          formData
        );

        fetchWorkouts();

        setFormData({
          title: "",
          category: "",
          duration: "",
          caloriesBurned: "",
        });
      } catch (error) {
        console.log(error);
      }
    };

  const handleDelete =
    async (id: string) => {
      try {
        await deleteWorkout(id);

        fetchWorkouts();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-4xl font-bold mb-8">
          Workouts
        </h1>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4 mb-10"
        >
          <input
            type="text"
            name="title"
            placeholder="Workout Title"
            value={formData.title}
            onChange={handleChange}
            className="p-3 rounded-xl bg-zinc-900"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="p-3 rounded-xl bg-zinc-900"
          />

          <input
            type="number"
            name="duration"
            placeholder="Duration"
            value={formData.duration}
            onChange={handleChange}
            className="p-3 rounded-xl bg-zinc-900"
          />

          <input
            type="number"
            name="caloriesBurned"
            placeholder="Calories Burned"
            value={
              formData.caloriesBurned
            }
            onChange={handleChange}
            className="p-3 rounded-xl bg-zinc-900"
          />

          <button className="bg-white text-black p-3 rounded-xl">
            Add Workout
          </button>
        </form>

        {/* WORKOUTS */}

        <div className="grid gap-4">
          {workouts.map(
            (workout) => (
              <div
                key={workout._id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
              >
                <h2 className="text-2xl font-bold">
                  {workout.title}
                </h2>

                <p className="text-zinc-400">
                  {
                    workout.category
                  }
                </p>

                <p>
                  Duration:
                  {
                    workout.duration
                  }
                  mins
                </p>

                <p>
                  Calories:
                  {
                    workout.caloriesBurned
                  }
                </p>

                <button
                  onClick={() =>
                    handleDelete(
                      workout._id
                    )
                  }
                  className="mt-4 px-4 py-2 bg-red-500 rounded-lg"
                >
                  Delete
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Workouts;