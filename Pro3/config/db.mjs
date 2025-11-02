import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://db_user:3FKeg2sTb9xtCDZ1@cluster0.g6b8ndo.mongodb.net/jwtDemo"
    );
    console.log("Connected to Database...");
  } catch (error) {
    console.error("Database Connection Error:", error.message);
  }
};

export default connectDB;
