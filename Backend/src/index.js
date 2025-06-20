import express from "express";
import NoteRoutes from "./routes/NoteRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv";
import rateLimiter from "../middleware/rateLimiter.js";

dotenv.config(); // Load environment variables from .env file

const app = express();
// Connect to MongoDB
const PORT = process.env.PORT || 3000;
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true }));
// Middleware to parse URL-encoded request bodies
app.use(rateLimiter);
app.use("/notes", NoteRoutes);

// MongoDB connection string example (replace <db_password> with your actual password):
// const dbPassword = "your_db_password_here";
// mongodb+srv://davidiyaomolere:eLjjlymuaEdmtblA@cluster0.dtrryoo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
