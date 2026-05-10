import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

import { env } from "../config/env.js";

export interface AuthRequest extends Request {
  userId?: string;
}

export const verifyJWT = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, env.ACCESS_TOKEN_SECRET) as {
      userId: string;
    };

    req.userId = decoded.userId;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};
