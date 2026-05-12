import { Router } from "express";

import { askAiCoach } from "../controllers/ai.controller.js";

import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/chat", verifyJWT, askAiCoach);

export default router;
