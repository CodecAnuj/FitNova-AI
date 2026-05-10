import { Router } from "express";

import { registerUser, loginUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/me", verifyJWT, (req, res) => {
  res.json({
    message: "Protected route working",
  });
});

export default router;
