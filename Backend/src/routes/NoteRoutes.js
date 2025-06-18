import Express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controller/NoteController.js";

const router = Express.Router();

router.get("/", getAllNotes);

router.post("/", createNote);

router.delete("/:id", deleteNote);

router.put("/:id", updateNote);

export default router;
// This code defines a set of routes for handling notes in an Express application.
// It includes routes for getting all notes, creating a new note, deleting a note by ID,
// and updating a note by ID. Each route sends a simple response message indicating the action taken.
// The routes are defined using the Express Router, which allows for modular route handling.
