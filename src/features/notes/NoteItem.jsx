import React from 'react'
import { removeNotes, toggleFav } from './NotesSlice'
import {useSelector, useDispatch} from "react-redux"
import "./NotesList.css"

const NoteItem = ({note}) => {
    let dispatch =useDispatch()
  return (
    <div key={note.id} className="note-card">
        <button className="fav-button" onClick={() => dispatch(toggleFav(note.id))}>
            {note.isFav ? "★" : "☆"}
        </button>
        <div className='note-title'>{note.title}</div>
        <div className='note-text'>{note.note}</div>
        <button onClick={()=>dispatch(removeNotes(note.id))} className="delete-button">Delete</button>
    </div>
  )
}

export default NoteItem