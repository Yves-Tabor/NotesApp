import React from 'react'
import App from '../App'
import { nanoid } from 'nanoid'
import type { NotesContextType, Action, State } from '../types';

export const NotesContext = React.createContext<NotesContextType | undefined>(undefined);

function NotesProvider() {
    const initialState: State = {
        notes: []
    };

    function reducer(state: State, action: Action): State {
        switch (action.type) {
            case "ADD_NOTE":
                return {
                    notes: [
                        ...state.notes,
                        {
                            id: nanoid(),
                            text: action.payload,
                            important: false,
                        },
                    ],
                };
            case 'DELETE_NOTE':
                return {
                    ...state,
                    notes: state.notes.filter(note => note.id !== action.payload)
                };
            case 'TOGGLE_IMPORTANT':
                return {
                    ...state,
                    notes: state.notes.map(note => 
                        note.id === action.payload 
                            ? { ...note, important: !note.important }
                            : note
                    )
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = React.useReducer(reducer, initialState);
    const [search, setSearch] = React.useState('');

    const addNote = React.useCallback((text: string) => {
        if (!text.trim()) return;
        dispatch({
            type: "ADD_NOTE",
            payload: text.trim(),
        });
    }, []);

    const deleteNote = React.useCallback((id: string) => {
        dispatch({
            type: "DELETE_NOTE",
            payload: id,
        });
    }, []);

    const toggleImportant = React.useCallback((id: string) => {
        dispatch({
            type: "TOGGLE_IMPORTANT",
            payload: id,
        });
    }, []);

    const value: NotesContextType = {
        notes: state.notes,
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