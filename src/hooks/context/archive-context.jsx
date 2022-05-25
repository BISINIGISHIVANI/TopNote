import {createContext,useContext,useState} from "react";
import {useAuth} from "./auth-context"
import {useNote} from "./note-context"
import axios from "axios";
const ArchiveContext=createContext(null);
const ArchiveNoteProvider=({children})=>{
    const {authState:{token}}=useAuth();
    const encodedToken=token
    const {setNotes}=useNote()
    const [archiveNote,setArchiveNote]=useState([])
    const addArchiveNote=async (id,note)=>{
        try {
            const response = await axios.post(
              `/api/notes/archives/${id}`,
              {
                note,
              },
              { headers: { authorization: encodedToken } }
            );
            if(response.status===201){
                const {
                  data: { archives, notes },
                } = response;
                setNotes(notes);
                setArchiveNote(archives);
            }
        } catch (error) {
            console.error(error)
        }
    }
    const restoreArchiveNote=async (id)=>{
        try {
        const response=await axios.post (`/api/archives/restore/${id}`,{},
            {
              headers: { authorization: encodedToken },
            });
        if (response.status === 200) {
          const {
            data: { archives, notes },
          } = response;
          setNotes(notes);
          setArchiveNote(archives);
        }
        } catch (error) {
            console.error(error)
        }
    }
    const deleteArchiveNote=async (id)=>{
        try {
            const response = await axios.delete(
        `/api/archives/delete/${id}`,
        {
          headers: { authorization: encodedToken },
        }
      );
      if (response.status === 200) {
        const {
          data: { archives },
        } = response;
        setArchiveNote(archives);
      }
        } catch (error) {
            console.error(error);
        }
    }
    return <ArchiveContext.Provider value={{archiveNote,addArchiveNote,restoreArchiveNote,deleteArchiveNote}}>
        {children}
    </ArchiveContext.Provider>
}
const useArchiveNote=()=>useContext(ArchiveContext)
export {ArchiveNoteProvider,useArchiveNote}