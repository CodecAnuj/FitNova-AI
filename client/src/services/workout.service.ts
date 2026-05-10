import api from "../api/axios";

export const createWorkout = async (data: any) => {
  const response = await api.post("/workouts", data);

  return response.data;
};

export const getWorkouts = async () => {
  const response = await api.get("/workouts");

  return response.data;
};

export const deleteWorkout = async (id: string) => {
  const response = await api.delete(`/workouts/${id}`);

  return response.data;
};
