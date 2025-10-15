import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Student name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
  },
  age: {
    type: Number,
    required: true,
    min: [5, "Age must be at least 5"],
    max: [100, "Age must be below 100"],
  },
  course: {
    type: String,
    required: true,
    enum: ["Computer Science", "Math", "Physics", "Biology", "Chemistry"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;