import React , {useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import NoteItem from '../features/notes/NoteItem'
import "../features/notes/NotesList.css"

const Favorites = () => {
    const [searchTerm, setSearchTerm] = useState("");

    let favNotes = useSelector((state) =>
    state.notes.noteList.filter((note) => note.isFav)
  );

    const filteredNotes = favNotes.filter(
        (n) =>
          n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          n.note.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return (
    <div className='notes-display' style={{borderRadius:"10px"}}>
        <div className="notes-header">Favorites</div>
        {
            filteredNotes.length>0 && <div className='search-container'>
            <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            name="searchTerm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
            </div>
        }
        
        
{favNotes.length === 0 && <p>No favorite notes yet.</p>}
<div className='notes-list'>
        {searchTerm 
          ? (filteredNotes.length === 0 
              ? <p>No notes found.</p> 
              : filteredNotes.map(note => <NoteItem key={note.id} note={note} />))
          : favNotes.map((fav)=>
          <NoteItem note={fav}/>
      )
        }
      </div>

    </div>
  )
  
}

export default Favorites