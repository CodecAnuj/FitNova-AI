import { Request, Response } from "express";

import { Workout } from "../models/workout.model.js";

export const createWorkout = async (req: any, res: Response) => {
  try {
    const { title, category, duration, caloriesBurned } = req.body;

    const workout = await Workout.create({
      title,
      category,
      duration,
      caloriesBurned,

      user: req.userId,
    });

    res.status(201).json({
      success: true,
      workout,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getWorkouts = async (req: any, res: Response) => {
  try {
    const workouts = await Workout.find({
      user: req.userId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      workouts,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const deleteWorkout = async (req: Request, res: Response) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Workout deleted",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
