import mongoose, { Schema, Document } from "mongoose";

export interface IWorkout extends Document {
  title: string;

  category: string;

  duration: number;

  caloriesBurned: number;

  completed: boolean;

  user: mongoose.Types.ObjectId;
}

const workoutSchema = new Schema<IWorkout>(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    caloriesBurned: {
      type: Number,
      required: true,
    },

    completed: {
      type: Boolean,
      default: false,
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

export const Workout = mongoose.model<IWorkout>("Workout", workoutSchema);
