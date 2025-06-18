import mongoose from "mongoose";
// Define the schema for a Note
// This schema includes fields for title, content, and timestamps
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields}
);


// Create a model for the Note schema
// This model will be used to interact with the notes collection in MongoDB
const Note = mongoose.model("Note", noteSchema);

// Export the Note model for use in other parts of the application
export default Note; 
// This code defines a Mongoose schema and model for a Note in a MongoDB database.
// The schema includes fields for the title and content of the note, both of which are required