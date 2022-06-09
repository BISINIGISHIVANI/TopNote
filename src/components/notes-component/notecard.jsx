import React, { useState } from "react";
import { useNote } from "../../hooks/context/note-context";
import { useArchiveNote } from "../../hooks/context/archive-context";
import parse from "html-react-parser";
import "./style.css";
import { useTrash } from "../../hooks/context/trash-context";
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
    labelTag,
    priorityTag,
  } = props;
  const { notes, setNotes } = useNote();
  const { archiveNote, addArchiveNote, restoreArchiveNote, deleteArchiveNote } =
    useArchiveNote();
  const { setTrashNote } = useTrash();
  const handleEditNote = (data) => {
    setAddNoteEnable(false);
    setEditnoteEnable(true);
    setNotesData(data);
  };
  const handleArchiveNote = () => {
    return archiveNote.some((note) => note._id === _id);
  };
  const moveToTrash = (id, props) => {
    setTrashNote([props]);
    setNotes(notes.filter((note) => note._id !== id));
  };
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
          <div className="note-text text-container label-align">
            <div>{parse(text)}</div>
            <div className="flex-end">
              <span className={`${labelTag === "" ? "" : "tag"}`}>
                {labelTag}
              </span>
              <span className={`${priorityTag === "" ? "" : "tag"} mg-left-sm`}>
                {priorityTag}
              </span>
            </div>
          </div>
        </div>
        <hr className="bd-black" />
        <div className={`note-footer`}>
          <div className="note-footer-left  place-center">
            {handleArchiveNote() ? (
              ""
            ) : (
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
            {handleArchiveNote() ? (
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
            {handleArchiveNote() ? (
              <i
                className="fa-solid fa-trash-can"
                onClick={() => deleteArchiveNote(_id)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-trash"
                onClick={() => moveToTrash(_id, props)}
              ></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
