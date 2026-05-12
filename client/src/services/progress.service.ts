import api from "../api/axios";

export const addProgress = async (data: any) => {
  const response = await api.post("/progress", data);

  return response.data;
};

export const getProgress = async () => {
  const response = await api.get("/progress");

  return response.data;
};
