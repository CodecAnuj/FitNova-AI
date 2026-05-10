// Main Express app configuration.
// Here we will setup:
// - middleware
// - routes
// - cookies
// - CORS
// - JSON parsing

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/", (_, res) => {
  res.send("FitNova-AI Backend Running");
});

export default app;
