import "./note-page.css";
import {NavBar, Sidebar} from "../../components/index";
import { NoteCard } from "../../components/notes-component/notecard";
import { AddNote } from "../../components/notes-component/add-note";
import { useNote } from "../../hooks/context/note-context";
import { useState } from "react";
export default function NotePage() {
    const {notes}=useNote();
    const [addNoteEnable,setAddNoteEnable]=useState(false)
    const handleAddNote=()=>{
        setAddNoteEnable(true);
    }
    return (
        <>
        <NavBar/>
        <div className="flex-row">
            <div className="position-right"><Sidebar/></div>
            <div className="flex-grow">
                <div className="align-md mg-left-sm">
                    <div className="flex-wrap">
                        <div>
                            <input type="text"
                            placeholder="search for a note"
                            className="border-searchbox search-note"
                            />
                            <i className="fa-solid fa-filter search-filter border-searchbox cursor-pointer"></i>
                            <button
                            className="signup-site cursor-pointer mg-left-sm"
                            onClick={handleAddNote}
                            >Create Note</button>
                        </div>
                        {addNoteEnable ? <AddNote setaddNoteEnable={setAddNoteEnable}/>:"" }
                        <div className="note-list">
                            {notes.map ((item)=>(
                                <NoteCard 
                                key={item._id}
                                {...item}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    
    )
}