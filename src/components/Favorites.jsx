import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import NoteItem from '../features/notes/NoteItem'

const Favorites = () => {

    let dispatch =useDispatch()
    let favNotes = useSelector((state) =>
    state.notes.noteList.filter((note) => note.isFav)
  );


    return (
    <div className='notes-display'>
        <div className="notes-header">Favorites</div>
        {favNotes.length === 0 && <p>No favorite notes yet.</p>}
        <div className='notes-list'>
            {
                favNotes.map((fav)=>
                    <NoteItem note={fav}/>
                )

            }
        </div>
    </div>
  )
  
}

export default Favorites