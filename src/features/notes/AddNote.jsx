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

  return (
    <div className="add-notes">
        <p>Enter your Note</p>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter notes title"></input>
        <textarea value={note}
          onChange={(e)=>setNote(e.target.value)}
          rows="5" 
          cols="30"
          placeholder="Enter your note here..."></textarea>
        <button onClick={()=>{
    dispatch(addNotes({id: crypto.randomUUID(), title, note, isFav:false}))
    setTitle("")
    setNote("")
}}>Add Notes</button>
    </div>
  )
}

export default AddNote