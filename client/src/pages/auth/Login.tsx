// Login page.
// Later we will add:
// - form validation
// - backend API connection
// - JWT authentication

import { useState } from "react";

import api from "../../api/axios";

import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { setUser } = useAuth();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const response =
        await api.post(
          "/users/login",
          formData
        );

      setUser(response.data.user);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[350px]"
      >
        <h1 className="text-3xl font-bold">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="p-3 rounded bg-zinc-900"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="p-3 rounded bg-zinc-900"
        />

        <button
          className="bg-white text-black p-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;