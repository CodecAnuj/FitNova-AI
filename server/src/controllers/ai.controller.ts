import { Request, Response } from "express";

import { groq } from "../ai/groq.js";
import { AiWorkout } from "../models/aiWorkout.model.js";

export const askAiCoach = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",

          content: `
You are FitNova-AI,
an expert fitness and nutrition coach.

You help users with:
- workouts
- muscle gain
- fat loss
- diet plans
- beginner fitness
- motivation
- gym advice

Keep responses:
- beginner friendly
- short
- practical
- encouraging
                `,
        },

        {
          role: "user",
          content: message,
        },
      ],

      model: "llama-3.3-70b-versatile",
    });

    const reply = completion.choices[0]?.message?.content;

    res.status(200).json({
      success: true,
      reply,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "AI Error",
    });
  }
};

export const generateWorkoutPlan = async (req: any, res: Response) => {
  try {
    const { goal, experience, daysPerWeek } = req.body;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",

          content: `
You are an expert fitness coach.

Generate a workout plan in valid JSON format only.

Return ONLY raw JSON.
Do NOT wrap response in markdown.

Return format:

{
  "days": [
    {
      "day": "Monday",
      "focus": "Chest",
      "exercises": [
        {
          "name": "Bench Press",
          "sets": 4,
          "reps": 10
        }
      ]
    }
  ]
}
                `,
        },

        {
          role: "user",

          content: `
Goal: ${goal}

Experience: ${experience}

Workout Days:
${daysPerWeek}
                `,
        },
      ],

      model: "llama-3.3-70b-versatile",
    });

    const aiResponse = completion.choices[0]?.message?.content;

    if (!aiResponse) {
      return res.status(500).json({
        message: "No AI response",
      });
    }

    const cleanedResponse = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsedPlan = JSON.parse(cleanedResponse);

    const workoutPlan = await AiWorkout.create({
      goal,
      experience,
      daysPerWeek,

      plan: parsedPlan,

      user: req.userId,
    });

    res.status(200).json({
      success: true,
      workoutPlan,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Workout generation failed",
    });
  }
};
