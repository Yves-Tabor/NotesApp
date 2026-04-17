import { useState } from 'react';
import { useNotes } from './useNotes';

export default function AddNote() {
  const [text, setText] = useState('');
  const { addNote } = useNotes();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addNote(text.trim());
      setText('');
    }
  };

  return (
    <form className="add-note-form" onSubmit={handleSubmit}>
      <h2>Add Note</h2>
      <textarea
        placeholder="Enter your note here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit" id="add-note-btn">Add Note</button>
    </form>
  );
}