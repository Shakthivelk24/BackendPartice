import express from "express";
import cors from "cors";
import { body, validationResult } from "express-validator";
import { connectDB } from "./db.mjs";
import Student from "./studentModel.mjs";

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
connectDB();

// =================== CRUD ROUTES ===================

// CREATE student
app.post(
  "/students",
  [
    body("name").trim().isLength({ min: 2 }).escape(),
    body("email").isEmail().normalizeEmail(),
    body("age").isInt({ min: 5, max: 100 }),
    body("course").isIn(["Computer Science", "Math", "Physics", "Biology", "Chemistry"]),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const student = new Student(req.body);
      await student.save();
      res.status(201).json(student);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

// READ all students
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// READ single student by ID
app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch {
    res.status(400).json({ message: "Invalid student ID" });
  }
});

// UPDATE student
app.put(
  "/students/:id",
  [
    body("name").optional().trim().isLength({ min: 2 }).escape(),
    body("email").optional().isEmail().normalizeEmail(),
    body("age").optional().isInt({ min: 5, max: 100 }),
    body("course").optional().isIn(["Computer Science", "Math", "Physics", "Biology", "Chemistry"]),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!student) return res.status(404).json({ message: "Student not found" });
      res.json(student);
    } catch {
      res.status(400).json({ message: "Error updating student" });
    }
  }
);

// DELETE student
app.delete("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted successfully" });
  } catch {
    res.status(400).json({ message: "Invalid student ID" });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
