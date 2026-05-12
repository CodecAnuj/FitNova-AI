import mongoose, { Schema, Document } from "mongoose";

export interface IProgress extends Document {
  weight: number;

  calories: number;

  streak: number;

  user: mongoose.Types.ObjectId;
}

const progressSchema = new Schema<IProgress>(
  {
    weight: {
      type: Number,
      required: true,
    },

    calories: {
      type: Number,
      required: true,
    },

    streak: {
      type: Number,
      default: 0,
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

export const Progress = mongoose.model<IProgress>("Progress", progressSchema);
