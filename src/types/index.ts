export type Note = {
  id: number;
  text: string;
  important: boolean;
};

export type NotesContextType = {
  notes: Note[];
  search: string;
  addNote: (text: string) => void;
  deleteNote: (id: number) => void;
  toggleImportant: (id: number) => void;
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
