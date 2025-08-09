import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const dbConfig = async () => {
  try {
    const mongoURL = process.env.MONGO_URI || "mongodb://localhost:27017/fallback_db";
    await mongoose.connect(mongoURL);
    console.log("Connected to db");
  } catch (error: unknown) {
    console.log("Error connecting to db", error);
  }
};

export default dbConfig;
