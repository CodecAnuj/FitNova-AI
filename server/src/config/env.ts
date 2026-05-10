import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,

  MONGODB_URI: process.env.MONGODB_URI as string,

  ACCESS_TOKEN_SECRET:
    process.env.ACCESS_TOKEN_SECRET as string,

  REFRESH_TOKEN_SECRET:
    process.env.REFRESH_TOKEN_SECRET as string,

  ACCESS_TOKEN_EXPIRY:
    process.env.ACCESS_TOKEN_EXPIRY || "1d",

  REFRESH_TOKEN_EXPIRY:
    process.env.REFRESH_TOKEN_EXPIRY || "10d",

  GROQ_API_KEY:
    process.env.GROQ_API_KEY as string,
};