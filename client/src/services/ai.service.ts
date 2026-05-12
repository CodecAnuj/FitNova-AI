import api from "../api/axios";

export const askAiCoach = async (message: string) => {
  const response = await api.post("/ai/chat", { message });

  return response.data;
};
