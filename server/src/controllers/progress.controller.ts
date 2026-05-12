import { Request, Response } from "express";

import { Progress } from "../models/progress.model.js";

export const addProgress = async (req: any, res: Response) => {
  try {
    const { weight, calories } = req.body;

    const progress = await Progress.create({
      weight,
      calories,

      streak: 1,

      user: req.userId,
    });

    res.status(201).json({
      success: true,
      progress,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getProgress = async (req: any, res: Response) => {
  try {
    const progress = await Progress.find({
      user: req.userId,
    }).sort({
      createdAt: 1,
    });

    res.status(200).json({
      success: true,
      progress,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
