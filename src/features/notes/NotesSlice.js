import {createSlice} from "@reduxjs/toolkit"
const savedNotes = JSON.parse(localStorage.getItem("notes")) || []
let notesSlice = createSlice({
    name:"notes",
    initialState:{noteList: savedNotes},
    reducers:{
        addNotes:(state,action)=>{
            state.noteList.push(action.payload)
        },

        removeNotes:(state,action)=>{
            state.noteList=state.noteList.filter((note)=>note.id!==action.payload)

        },

        toggleFav:(state,action)=>{
            let noteItem=state.noteList.find(note=>note.id===action.payload)
            noteItem.isFav=!noteItem.isFav
            // state.noteList=state.noteList.map((note)=>
            //     note.id===action.payload?{...note,isFav:!note.isFav}:note
            // )
        }
        
    }
})

export let {addNotes, removeNotes, toggleFav}=notesSlice.actions;

export default notesSlice.reducer;