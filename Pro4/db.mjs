import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://db_user:3FKeg2sTb9xtCDZ1@cluster0.g6b8ndo.mongodb.net/pro4");
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("DB connection error", error);
        process.exit(1);
    }
};

export default connectDB;
