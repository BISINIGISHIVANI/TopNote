import React, { useState } from "react";
import { useNote } from "../../hooks/context/note-context";
import { useArchiveNote } from "../../hooks/context/archive-context";
import parse from "html-react-parser";
import "./style.css";
export const NoteCard = (props) => {
  const {
    _id,
    title,
    text,
    date,
    time,
    bgColor,
    setAddNoteEnable,
    setEditnoteEnable,
    notesData,
    setNotesData,
  } = props;
  const { editNote,deleteNote} = useNote();
  const {
    archiveNote,
    addArchiveNote,
    restoreArchiveNote,
    deleteArchiveNote,
  } = useArchiveNote();
  const handleEditNote = (data) => {
    setAddNoteEnable(false);
    setEditnoteEnable(true);
    setNotesData(data);
  };
  const handleArchiveNote=()=>{
    return archiveNote.some((note) => note._id === _id);
  }
  return (
    <div>
      <div className={`note-container note-card ${bgColor}`}>
        <div className="note-text-area">
          <div>
            <h4 className="note-text">
              {" "}
              <span>Note Title:</span> {title}
            </h4>
          </div>
          <div className="note-text text-container">{parse(text)}</div>
        </div>
        <hr className="bd-black" />
        <div className={`note-footer  ${bgColor}`}>
          <div className="note-footer-left  place-center">
            {handleArchiveNote(_id) ? "":(
              <i
                className="fa-solid fa-edit cursor-pointer"
                onClick={() => handleEditNote(props)}
              ></i>
            )}
            <div className="sidebar-cflex">
              <span className="fa-solid">{date} </span>
              <span className="fa-solid">{time}</span>
            </div>
          </div>
          <div className="note-footer-right  place-center">
            <i className="fa-solid fa-tag"></i>
            {handleArchiveNote(_id) ? (
              <i
                className="fa-solid fa-trash-arrow-up"
                onClick={() => restoreArchiveNote(_id)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-archive"
                onClick={() => addArchiveNote(_id)}
              ></i>
            )}
            {handleArchiveNote(_id) ? (
              <i
                className="fa-solid fa-trash-can"
                onClick={() => deleteArchiveNote(_id)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-trash"
                onClick={() => deleteNote(_id)}
              ></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
