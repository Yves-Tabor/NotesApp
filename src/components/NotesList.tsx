import { useNotes } from "./useNotes";
import NoteItem from "./NoteItem";
import React from "react";

export default function NotesList() {
  const { notes, search } = useNotes();
  const filtered = React.useMemo(()=>{
    return notes.filter(note =>
        note.text.toLowerCase().includes(search.toLowerCase())
    );
  }, [notes, search]);

  return (
    <div>
      <h2>Notes List</h2>
      {filtered.length === 0 ? (
        <div className="empty-state">
          <h3>No notes found</h3>
          <p>{search ? 'Try a different search term' : 'Add a note!'}</p>
        </div>
      ) : (
        <div className="notes-list">
          {filtered.map((note) => (
            <NoteItem key={note.id} note={note} />  
          ))}
        </div>
      )}
    </div>
  );
}