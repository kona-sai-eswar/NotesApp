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

        }
        
    }
})

export let {addNotes, removeNotes}=notesSlice.actions;

export default notesSlice.reducer;