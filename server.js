import dotenv from "dotenv";
dotenv.config();

import { connectDb } from "./config/db.js";
import express from "express";
import todoRoutes from "./Routes/todo.routes.js";
import cors from "cors";

console.log("🔍 MONGO_URI from env:", process.env.MONGO_URI);

connectDb();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://your-frontend-url.up.railway.app", // ✅ change this to your actual frontend URL or "*" for now
    credentials: true,
  })
);

// routes
app.use("/api/todos", todoRoutes);

// add a simple root route so you can test deployment
app.get("/", (req, res) => {
  res.send("✅ Server is running and connected to MongoDB!");
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000; // ✅ important fix
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
