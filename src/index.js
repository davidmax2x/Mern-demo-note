import express from 'express';
import { connectDB } from '../config/db.js';
import dotenv from 'dotenv';
import NoteRoutes from "./routes/note.js";
import { basicLimiter } from '../middleware/rateLimiter.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apply rate limiting to all requests
app.use(basicLimiter);

app.get("/", (req, res) => {
    res.json({
        message: 'API Endpoint is working.'
    });
});

app.use("/notes", NoteRoutes);


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
