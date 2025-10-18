import mongoose from "mongoose";

export async function connectDb() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    }catch(err){
        console.error("mongodb connection failed", err.message);
        process.exit(1);
    }
}