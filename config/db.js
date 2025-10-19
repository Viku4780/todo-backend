import mongoose from "mongoose";

export async function connectDb() {
  try {
    console.log("🔍 MONGO_URI from env:", process.env.MONGO_URI); // <-- debug line

    if (!process.env.MONGO_URI) {
      throw new Error("❌ MONGO_URI is undefined. Check Railway Variables.");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ mongodb connection failed", err.message);
    process.exit(1);
  }
}
