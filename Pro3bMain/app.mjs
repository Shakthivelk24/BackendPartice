import express from "express";
import cors from "cors";
import connectDB from "./db.mjs";
import userRoutes from "./routes/userRoutes.mjs";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use('/api/users', userRoutes);

app.listen(4000, () => console.log(`Server running at http://localhost:${4000}`));
