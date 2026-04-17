import { useNotes } from './useNotes';

interface NoteItemProps {
  note: {
    id: number;
    text: string;
    important: boolean;
  };
}

export default function NoteItem({ note }: NoteItemProps) {
  const { toggleImportant, deleteNote } = useNotes();
    function handleToggleImportant():void{
        toggleImportant(note.id);
    }
  return (
    <div className="note-item">
      <p>{note.text}</p>
      <div className="note-actions">
        <button 
          className={`star-btn ${note.important ? "active" : ""}`}
          onClick={() => toggleImportant(note.id)}
        >
          {note.important ? '⭐' : '☆'}
        </button>
        <button 
          className="delete-btn"
          onClick={() => deleteNote(note.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}