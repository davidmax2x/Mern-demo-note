import Note from "../models/Note.js";

// This function retrieves all notes from the database
// It sends the notes as a JSON response with a 200 status code
export async function getAllNotes(req, res) {
  try {
    const note = await Note.find();

    res.status(200).json(note);
  } catch (error) {
    console.error("Error fetching notes:", error.message);
    res.status(500).json({ message: "Error fetching notes" });
  }
}
// This function creates a new note
// It expects the note title and content in the request body and saves it to the database
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({
      title,
      content,
    });
    const savedNote = await note.save();
    res.status(201).json({
      message: "Note created successfully",
      note: savedNote,
    });
  } catch (error) {
    console.error("Error creating note:", error.message);
    res.status(500).json({ message: "Error creating note" });
  }
}
// This function deletes a note by its ID
// It expects the note ID in the request parameters and sends a success message

export async function deleteNote(req, res) {
  try {
    const noteId = req.params.id;
    const deleteNote = await Note.findByIdAndDelete(noteId);
    if (!deleteNote) {
      return res.status(404).json({ message: "Note not found" });
    } 
  } catch (error) {
    console.error("Error deleting note:", error.message);
    res.status(500).json({ message: "Error deleting note" });
  }
}

// This function updates a note by its ID
// It expects the note ID in the request parameters and the updated title and content in the request
export async function updateNote(req, res) {
  try {
    const noteId = req.params.id;
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { title, content },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Here you would typically find the note by ID and update it
    // For now, we will just send a success message
    res.status(200).json({
      message: `Note with ID ${noteId} updated successfully`,
      updatedNote: { id: noteId, title, content },
    });
  } catch (error) {
    console.error("Error updating note:", error.message);
    res.status(500).json({ message: "Error updating note" });
  }
}
