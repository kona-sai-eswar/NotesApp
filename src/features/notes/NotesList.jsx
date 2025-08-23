import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { removeNotes } from './NotesSlice'
import "./NotesList.css"

const NotesList = () => {

    let notes=useSelector(state=>state.notes.noteList)
    let dispatch =useDispatch()

    return (
    <div className='notes-display'>
        <div className="notes-header">Notes</div>
        <div className='notes-list'>
            {
                notes.map((note)=>
                     <div key={note.id} className="note-card">
                        <div className='note-title'>{note.title}</div>
                        <div className='note-text'>{note.note}</div>
                        <button onClick={()=>dispatch(removeNotes(note.id))} className="delete-button">Delete</button>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default NotesList