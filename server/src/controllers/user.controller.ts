// User routes.
// This file will contain all user-related API routes.

import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";

export const registerUser = async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
