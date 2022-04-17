import React,{useState} from "react";
import {useNote} from "../../hooks/context/note-context";
import "./style.css";
export const NoteCard=({_id,title,text,date,bgColor,})=>{
    const {deleteNote}=useNote();
    return (
        <div className={`note-container ${bgColor}`}>
           <div className="note-text-area">
               <h4  className="note-text"> <span>Note Title:</span> {title}</h4>
               <p className="note-text">{text}</p>
           </div>
           <div className="note-footer">
            <div className="note-footer-left">
                <i className="fa-solid fa-edit cursor-pointer"></i>
                <span className="fa-solid">{date}</span>
                <i className="fa-solid fa-palette"></i>
            </div>
            <div className="note-footer-right">
              <i className="fa-solid fa-tag"></i>
              <i className="fa-solid fa-archive"></i> 
              <i className="fa-solid fa-trash"
              onClick={()=>deleteNote(_id)}
              ></i> 
              <i className="fa-solid fa-check"></i> 
            </div>
           </div>
        </div>
    )
}