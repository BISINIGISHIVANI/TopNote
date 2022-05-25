import react, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useAuth } from "./auth-context";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const {authState:{token}}=useAuth()
  const addNote = async (noteText) => {
    try {
      const response = await axios.post(
        "/api/notes",
        { note: noteText },
        { headers: { authorization: token } }
      );
      const {
        data: { notes },
      } = response;
      setNotes(notes);
    } catch (error) {
      console.log(error);
    }
  };
  
  const deleteNote = async (id) => {
    const response = await axios.delete(`/api/notes/${id}`, {
      headers: { authorization: token },
    });
    const {
      data: { notes },
    } = response;
    setNotes(notes);
  };
  const editNote = async (id, noteText) => {
    try {
      const response = await axios.post(
        `/api/notes/${id}`,
        { note: noteText },
        {
          headers: { authorization: token },
        }
      );
      if (response.status === 201) {
        const {
          data: { notes },
        } = response;
        setNotes(notes);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote,editNote }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };