import './App.css'
import AddNote from './features/notes/AddNote'
import NotesList from './features/notes/NotesList'
import { useNotesPersistence } from "./hooks/useNotesPersistence";

function App() {
  useNotesPersistence();
  return (
    <div className='main-container'>
    <AddNote/>
    <NotesList/>
    </div>
  )
}

export default App
