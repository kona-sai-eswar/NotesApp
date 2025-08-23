import { combineReducers } from "@reduxjs/toolkit";
import notesReducer from "../features/notes/NotesSlice"

const rootReducer = combineReducers({
    notes:notesReducer
})

export default rootReducer