import { useNotes } from './useNotes';

export default function SearchBar() {
    const { search, setSearch } = useNotes();

  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="Search notes..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
    </div>
  );
}