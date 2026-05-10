// Register page.
// Later we will connect this page with backend register API.

import { useState } from "react";

import api from "../../api/axios";

const Register = () => {
  const [formData, setFormData] =
    useState({
      name: "",
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
          "/users/register",
          formData
        );

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
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="p-3 rounded bg-zinc-900"
        />

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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;