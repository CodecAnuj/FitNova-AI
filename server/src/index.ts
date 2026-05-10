// Backend entry point.
// This file starts the server.
// Later we will:
// - connect database
// - setup environment variables
// - start Express server

import app from "./app.js";
import { connectDB } from "./db/index.js";
import { env } from "./config/env.js";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(env.PORT, () => {
      console.log(
        `Server running on port ${env.PORT}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();