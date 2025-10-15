import express from "express";
import cors from "cors";
import { connectDB } from "./db.mjs";
import studentRoutes from "./studentRoutes.mjs";

const app = express();
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use("/students", studentRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
