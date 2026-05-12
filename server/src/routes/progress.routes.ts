import { Router } from "express";

import {
  addProgress,
  getProgress,
} from "../controllers/progress.controller.js";

import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", verifyJWT, addProgress);

router.get("/", verifyJWT, getProgress);

export default router;
