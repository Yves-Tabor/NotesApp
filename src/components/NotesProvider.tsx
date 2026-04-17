import React from 'react'
import App from '../App'
import { nanoid } from 'nanoid'
import type { Note, NotesContextType } from '../types';

export const NotesContext = React.createContext<NotesContextType | undefined>(undefined);

function NotesProvider() {
    const [notes, setNotes] = React.useState<Note[]>([]);
    const [search, setSearch] = React.useState('');

    const addNote = (text: string) => {
        if (!text.trim()) return;

        const newNote: Note = {
            id: Number(nanoid()),
            text,
            important: false,
        };

        setNotes(prev => [...prev, newNote]);
    };

    const deleteNote = (id: number) => {
        setNotes(prev => prev.filter(note => note.id !== id));
    };

    const toggleImportant = (id: number) => {
        setNotes(prev =>
            prev.map(note =>
            note.id === id ? { ...note, important: !note.important } : note
            )
        );
    };

    const value: NotesContextType = {
        notes,
        search,
        addNote,
        deleteNote,
        toggleImportant,
        setSearch,
    }; 
    
    return (
        <NotesContext.Provider value={value}>
            <App/>
        </NotesContext.Provider>
    );
}

export default NotesProvider;