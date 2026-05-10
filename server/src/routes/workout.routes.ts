import { Router } from "express";

import {
  createWorkout,
  getWorkouts,
  deleteWorkout,
} from "../controllers/workout.controller.js";

import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", verifyJWT, createWorkout);

router.get("/", verifyJWT, getWorkouts);

router.delete("/:id", verifyJWT, deleteWorkout);

export default router;
