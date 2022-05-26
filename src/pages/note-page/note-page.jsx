import "./note-page.css";
import { NavBar, Sidebar } from "../../components/index";
import { NoteCard } from "../../components/notes-component/notecard";
import { AddNote } from "../../components/notes-component/add-note";
import { useNote } from "../../hooks/context/note-context";
import { EditNote } from "../../components/notes-component/edit-note/edit-note";
import { useState } from "react";
export default function NotePage() {
  const { notes } = useNote();
  const [addNoteEnable, setAddNoteEnable] = useState(false);
  const [editNoteEnable, setEditnoteEnable] = useState(false);
  const [notesData, setNotesData] = useState({});
  const handleAddNote = () => {
    setAddNoteEnable(true);
    setEditnoteEnable(false);
  };
  return (
    <>
      <NavBar />
      <div className="flex-row">
        <div className="position-right">
          <Sidebar />
        </div>
        <div className="flex-grow">
          <div className="align-md mg-left-sm">
            <div className="flex-wrap">
              <div className="margin-auto">
                <input
                  type="text"
                  placeholder="search for a note"
                  className="border-searchbox search-note"
                />
                <i className="fa-solid fa-filter search-filter border-searchbox cursor-pointer"></i>
                <button
                  className="signup-site cursor-pointer mg-left-sm margin-top"
                  onClick={handleAddNote}
                >
                  Create Note
                </button>
              </div>
              {addNoteEnable ? (
                <AddNote setaddNoteEnable={setAddNoteEnable} />
              ) : (
                ""
              )}
              {editNoteEnable ? (
                <EditNote
                  setEditnoteEnable={setEditnoteEnable}
                  {...notesData}
                />
              ) : (
                ""
              )}
              <div className="note-list">
                {notes.map((item) => (
                  <NoteCard
                    notesData={notesData}
                    setNotesData={setNotesData}
                    setAddNoteEnable={setAddNoteEnable}
                    setEditnoteEnable={setEditnoteEnable}
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
  );
}
