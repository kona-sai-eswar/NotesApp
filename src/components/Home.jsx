import React from 'react'
import AddNote from '../features/notes/AddNote'
import NotesList from '../features/notes/NotesList'

const Home = () => {

  return (
    <div>
        <AddNote/>
        <NotesList/>
    </div>
  )
}

export default Home