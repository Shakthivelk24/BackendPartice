import mongoose from "mongoose";

// Replace with your MongoDB Atlas URI
const MONGO_URI = "mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/studentDB";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};
