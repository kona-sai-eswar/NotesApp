import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import NoteItem from './NoteItem'
import "./NotesList.css"

const NotesList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    let notes=useSelector(state=>state.notes.noteList)
    console.log("notes",notes)

    const filteredNotes = notes.filter(
        (n) =>
          n.title && n.note &&
          n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          n.note.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

    return (
      <div className='notes-display'>
        <div className="notes-header">Notes</div>
        <div className="search-container">
            <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            name="searchTerm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
            </div>
        
        
        
        <div className='notes-list'>
        {searchTerm 
          ? (filteredNotes.length === 0 
              ? <p>No notes found.</p> 
              : filteredNotes.map(note => <NoteItem key={note.id} note={note} />))
          : notes.map(note => <NoteItem key={note.id} note={note} />)
        }
      </div>


    </div>
  )
}

export default NotesList