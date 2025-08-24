import React from 'react'
import { removeNotes, toggleFav, updateNote } from './NotesSlice'
import {useSelector, useDispatch} from "react-redux"
import "./NotesList.css"
import { useState, useEffect } from 'react'
import { FaEdit, FaCheck, FaTimes } from 'react-icons/fa';

const NoteItem = ({note}) => {
    let[isEditing, setIsEditing]=useState(false)
    let[newTitle, setNewTitle]=useState(note.title)
    let[newNote, setNewNote]=useState(note.note)
    let dispatch =useDispatch()

    useEffect(() => {
        if (!isEditing) {
            setNewTitle(note.title);
            setNewNote(note.note);
        }
    }, [note.title, note.note, isEditing]);
    
    
      const handleSave = () => {
        dispatch(updateNote({ id: note.id, title: newTitle, note: newNote  }));
        setIsEditing(false);
      };
    
      const handleCancel = () => {
        setNewTitle(note.title);
        setNewNote(note.note);
        setIsEditing(false);
      };

  return (
    <div key={note.id} className="note-card" style={{backgroundColor:note.isFav ?"#FFF9C4": "#FFFFFF"}}>
       
       {
        isEditing ? (
                <>

                <div className="note-header search-container">
                    <input className='note-title' value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}/>

                    <button onClick={handleSave} title="Save" className='save-btn'><FaCheck /></button>
                    <button onClick={handleCancel} title="Cancel" className='cancel-btn'><FaTimes /></button>

                    <button className="fav-button" onClick={() => dispatch(toggleFav(note.id))}>
                        {note.isFav ? "★" : "☆"}
                    </button>
                </div>
                
                <textarea className='edit-textarea'
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
                
                </>
        ) : (
            <>
                <div className="note-header">
                    <h3 className='note-title'>{note.title}</h3>
                    <button onClick={() => setIsEditing(true)} title="Edit" className='edit-btn'><FaEdit /></button>
                    <button className="fav-button" onClick={() => dispatch(toggleFav(note.id))}>
                        {note.isFav ? "★" : "☆"}
                    </button>
                </div>
                <p className='note-text'>{note.note}</p>
            </>
        )
       }
       
        
        <div className="note-footer">
            <button onClick={()=>dispatch(removeNotes(note.id))} className="delete-button">Delete</button>
        </div>
    </div>
  )
}

export default NoteItem