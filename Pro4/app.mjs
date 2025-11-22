import express from "express";
import connectDB from "./db.mjs";
import itemRoutes from "./routes/itemRoutes.mjs";

const app = express();
app.use(express.json());

// DB Connect
connectDB();

// Routes
app.use("/items", itemRoutes);

// Start server
app.listen(3000, () => {
    console.log(`Server running on port http://localhost:${3000}`);
});
