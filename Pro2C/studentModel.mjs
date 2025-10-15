import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
  },
  age: {
    type: Number,
    required: true,
    min: 5,
    max: 100,
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