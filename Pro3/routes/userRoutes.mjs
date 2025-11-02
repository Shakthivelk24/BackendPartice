import express from "express";
import usermodel from "../models/usermodel.mjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// ✅ Register route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await usermodel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new usermodel({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "Registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await usermodel.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      "shakthisecretkey",
      { expiresIn: "10m" }
    );

    console.log("Generated Token:", token);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
