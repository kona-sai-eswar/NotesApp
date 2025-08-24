import { useEffect } from "react";
import { useSelector } from "react-redux";

export function useNotesPersistence() {
  const notes = useSelector(state => state.notes.noteList);

  useEffect(() => {
    const clean = notes.filter(n => n !== null && n !== undefined);
    localStorage.setItem("notes", JSON.stringify(clean));
  }, [notes]);
}
