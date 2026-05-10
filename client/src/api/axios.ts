// This file is used for Axios API setup.
// Here we will connect frontend with backend APIs.
// Later we will add:
// - JWT token handling
// - interceptors
// - auto refresh token logic

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,

  withCredentials: true,
});

export default api;
