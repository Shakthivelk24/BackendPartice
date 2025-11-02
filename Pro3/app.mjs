import express from "express";
import connectDB from "./config/db.mjs";
import userRoutes from "./routes/userRoutes.mjs";

const app = express();
app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
