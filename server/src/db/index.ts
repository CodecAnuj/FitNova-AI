// This file is used to connect MongoDB database.
// Later we will:
// - connect MongoDB Atlas
// - handle database connection errors
// - improve logging

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
