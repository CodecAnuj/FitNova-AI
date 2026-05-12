import mongoose, { Schema, Document } from "mongoose";

export interface IAiWorkout extends Document {
  goal: string;

  experience: string;

  daysPerWeek: number;

  plan: any;

  user: mongoose.Types.ObjectId;
}

const aiWorkoutSchema = new Schema<IAiWorkout>(
  {
    goal: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    daysPerWeek: {
      type: Number,
      required: true,
    },

    plan: {
      type: Object,
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",

      required: true,
    },
  },

  {
    timestamps: true,
  },
);

export const AiWorkout = mongoose.model<IAiWorkout>(
  "AiWorkout",
  aiWorkoutSchema,
);
