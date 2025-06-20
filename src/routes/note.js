import Express from "express";
import {
    createNote,
    deleteNote,
    getAllNotes,
    updateNote,
    getNoteById,
} from "../controller/note.js";
import { strictLimiter } from "../../middleware/rateLimiter.js";

const router = Express.Router();

// GET routes - standard rate limiting applied from the main app
router.get("/", getAllNotes);
router.get("/:id", getNoteById);

// Mutation routes - apply stricter rate limiting
router.post("/", strictLimiter, createNote);
router.delete("/:id", strictLimiter, deleteNote);
router.put("/:id", strictLimiter, updateNote);

export default router;