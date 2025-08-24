import {createSlice} from "@reduxjs/toolkit"
const savedNotes = JSON.parse(localStorage.getItem("notes")) || []
const validNotes = savedNotes.filter(n => n !== null && n !== undefined)
let notesSlice = createSlice({
    name:"notes",
    initialState:{noteList: validNotes},
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
        },

        // updateNote:(state,action)=>{
        //     // state.noteList = state.noteList.map((n)=>{
        //     //     if(n.id===action.payload.id){
        //     //     return {...n, 
        //     //         title: action.payload.title!==n.title?action.payload.title:n.title,
        //     //         note: action.payload.note!==n.note?action.payload.note:n.note
        //     //     }}
        //     //     else{
        //     //     return n
        //     //     }

        //     // let editItem = state.noteList.find(n=>n.id===action.payload.id)
        //     // if (!editItem) return
        //     // if(editItem.title!==action.payload.title)
        //     //     editItem.title=action.payload.title
        //     // if(editItem.note!==action.payload.note)
        //     //     editItem.note=action.payload.note
                
        //     // }

        updateNote: (state, action) => {
            const { id, title, note } = action.payload;
            const editItem = state.noteList.find(n => n.id === id);
        
            if (!editItem) return;
        
            if (title !== undefined && title !== null) {
                editItem.title = title;
            }
            if (note !== undefined && note !== null) {
                editItem.note = note;
            }
        }
        }
        
})

export let {addNotes, removeNotes, toggleFav, updateNote}=notesSlice.actions;

export default notesSlice.reducer;