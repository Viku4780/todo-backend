import dotenv from "dotenv";
dotenv.config();

import { connectDb } from "./config/db.js";
import express from "express";
import todoRoutes from "./Routes/todo.routes.js";
import cors from 'cors';

console.log("🔍 MONGO_URI from env:", process.env.MONGO_URI);

connectDb();

const app = express();
app.use(express.json());
app.use(cors({
    origin: "https://your-frontend-url.up.railway.app",
    credentials: true
}));

// routes
app.use("/api/todos",todoRoutes);

app.use((err,req,res ) => {
    res.status(500).json({error: err.message});
})

app.listen(process.env.PORT,() => {
    console.log(`Server are running on http://localhost:${process.env.PORT}`);
});
