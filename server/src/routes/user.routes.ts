import { Router } from "express";

import {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/me", verifyJWT, getCurrentUser, (req, res) => {
  res.json({
    message: "Protected route working",
  });
});

router.post("/logout", logoutUser);

export default router;
