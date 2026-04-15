import {useState, createContext, useContext} from 'react'
import App from '../App'
import type { NotesProviderProps } from '../types';

function NotesProvider({children}: NotesProviderProps) {
    const NotesContext = createContext();
    
    return (
        <NotesContext.Provider value={useState([])}>
            <App/>
        </NotesContext.Provider>
    );
}

export default NotesProvider;