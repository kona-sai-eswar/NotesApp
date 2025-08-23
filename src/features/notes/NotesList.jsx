import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import NoteItem from './NoteItem'

const NotesList = () => {

    let notes=useSelector(state=>state.notes.noteList)
    let dispatch =useDispatch()

    return (
    <div className='notes-display'>
        <div className="notes-header">Notes</div>
        <div className='notes-list'>
            {
                notes.map((note)=>
                     <NoteItem note={note}/>
                )
            }
        </div>
    </div>
  )
}

export default NotesList