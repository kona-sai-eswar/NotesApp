import { addNotes } from "./NotesSlice";
import {useSelector, useDispatch} from "react-redux"
import "./AddNotes.css"

import React from 'react'
import { useState } from "react";

const AddNote = () => {

    let notes=useSelector(notes=>notes.notes.noteList)
    let dispatch =useDispatch()

    let [title, setTitle] = useState("")
    let [note, setNote] = useState("")
    let [noteError, setNoteError] = useState("")
    let [titleError, setTitleError] = useState("")

    function handleAddTodo() {
        const trimmedTitle = title.trim();
        const trimmedNote = note.trim();
      
        let isValid = true;
      
        if (!trimmedTitle) {
          setTitleError("Title cannot be empty");
          isValid = false;
        } else {
          setTitleError("");
        }
      
        if (!trimmedNote) {
          setNoteError("Note cannot be empty");
          isValid = false;
        } else {
          setNoteError("");
        }
      
        if (isValid) {
          dispatch(addNotes({
            id: crypto.randomUUID(),
            title: trimmedTitle,
            note: trimmedNote,
            isFav: false
          }));
      
          setTitle("");
          setNote("");
        }
      }
      

  return (
    <div className="add-notes">
        <p>Enter your Note</p>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter notes title"></input>
        {titleError && <p style={{color:"#D32F2F"}}>{titleError}</p>}
        <textarea value={note}
          onChange={(e)=>setNote(e.target.value)}
          rows="5" 
          cols="30"
          placeholder="Enter your note here..."></textarea>
          {noteError && <p style={{color:"#D32F2F"}}>{noteError}</p>}
        <button onClick={handleAddTodo}>Add Notes</button>
    </div>
  )
}

export default AddNote