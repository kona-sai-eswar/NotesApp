import { useEffect } from "react";
import { useSelector } from "react-redux";

export function useNotesPersistence() {
  const notes = useSelector(state => state.notes.noteList);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
}
