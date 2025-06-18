export function getAllNotes(req, res) {
  res.status(200).send("Welcome to the Notes API");
}
export function createNote(req, res) {
  res.status(201).send("Note created successfully");
}
export function deleteNote(req, res) {
  const noteId = req.params.id;
  res.status(200).send(`Note with ID ${noteId} deleted successfully`);
}
export function updateNote(req, res) {
  const noteId = req.params.id;
  res.status(200).send(`Note with ID ${noteId} updated successfully`);
}
