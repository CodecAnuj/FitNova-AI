import { Request, Response } from "express";

import { groq } from "../ai/groq.js";

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
