export type Note = {
  id: string;
  text: string;
  important: boolean;
};

export type State = {
  notes: Note[];
};

export type Action =
  | { type: "ADD_NOTE"; payload: string }
  | { type: "DELETE_NOTE"; payload: string }
  | { type: "TOGGLE_IMPORTANT"; payload: string }

export type NotesContextType = {
  notes: Note[];
  search: string;
  addNote: (text: string) => void;
  deleteNote: (id: string) => void;
  toggleImportant: (id: string) => void;
  setSearch: (value: string) => void;
};

export interface NoteItemProps {
  note: Note;
  onUpdate: (id: string, updates: Partial<Note>) => void;
  onDelete: (id: string) => void;
  onToggleStar: (id: string) => void;
}

export interface AddNoteProps {
  onAddNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
}

export interface NotesListProps {
  notes: Note[];
  onUpdate: (id: string, updates: Partial<Note>) => void;
  onDelete: (id: string) => void;
  onToggleStar: (id: string) => void;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export interface HeaderProps {
  title?: string;
  noteCount?: number;
}

export type FilterType = 'all' | 'starred' | 'recent';

export interface FilterBarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export interface NotesProviderProps {
  children: React.ReactNode;
}
