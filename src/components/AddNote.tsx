import { useState, useRef, useEffect  } from 'react';
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
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(()=>{
    inputRef.current?.focus();
  }, []);

  return (
    <form className="add-note-form" onSubmit={handleSubmit}>
      <h2>Add Note</h2>
      <textarea
        placeholder="Enter your note here..."
        value={text}
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit" id="add-note-btn">Add Note</button>
    </form>
  );
}