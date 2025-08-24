import React from 'react';
import { useSelector } from 'react-redux';
import AddNote from '../features/notes/AddNote'
import NotesList from '../features/notes/NotesList'

const Home = () => {

    const notes = useSelector(s=>s.notes.noteList)

  return (
    <div className="container">
        <AddNote/>
        {
            notes.length>0 && <NotesList />
        }
        
    </div>
  )
}

export default Home