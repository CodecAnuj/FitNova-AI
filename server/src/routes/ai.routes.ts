import { Router } from "express";

import { verifyJWT } from "../middleware/auth.middleware.js";

import { askAiCoach } from "../controllers/ai.controller.js";

import { generateWorkoutPlan } from "../controllers/ai.controller.js";

const router = Router();

router.post("/chat", verifyJWT, askAiCoach);
router.post("/generate-workout", verifyJWT, generateWorkoutPlan);

export default router;
