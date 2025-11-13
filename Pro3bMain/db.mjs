import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://xyz_db_user:password@cluster0.xyz.mongodb.net/pro3bmain"
    );

    console.log("Connected to Database...");
  } catch (error) {
    console.error("Database Connection Error:", error.message);
  }
};

export default connectDB;
