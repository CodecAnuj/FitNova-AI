// This file is used to connect MongoDB database.
// Later we will:
// - connect MongoDB Atlas
// - handle database connection errors
// - improve logging

import mongoose from "mongoose";
import { env } from "../config/env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI);

    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed");

    process.exit(1);
  }
};
