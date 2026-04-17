import Header from './components/Header'
import AddNote from './components/AddNote'
import NotesList from './components/NotesList'

export default function App(){
  return (
    <div className="app">
      <Header />
      <AddNote />
      <NotesList />
    </div>
  )
}