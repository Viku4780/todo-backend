import express from "express";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import todoRoutes from "./Routes/todo.routes.js";
import cors from 'cors';

dotenv.config();
connectDb();

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
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