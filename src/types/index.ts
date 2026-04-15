export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  starred: boolean;
  tags: string[];
}

export interface NotesContextType {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  addNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateNote: (id: string, updates: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  toggleStar: (id: string) => void;
  searchNotes: (query: string) => Note[];
}

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
