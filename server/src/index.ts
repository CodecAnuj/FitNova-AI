// Backend entry point.
// This file starts the server.
// Later we will:
// - connect database
// - setup environment variables
// - start Express server

import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./db/index.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`FitNova-AI Backend Running on ${PORT}`);
});