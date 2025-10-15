import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://shakthivelk1124_db_user:NG4sgMm63wBDEs6x@cluster0.vdqcy1f.mongodb.net/StudentDB";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};
