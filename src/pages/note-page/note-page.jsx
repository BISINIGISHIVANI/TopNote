import "./note-page.css";
import { NavBar, Sidebar } from "../../components/index";
import { NoteCard } from "../../components/notes-component/notecard";
import { AddNote } from "../../components/notes-component/add-note";
import { useNote } from "../../hooks/context/note-context";
import { EditNote } from "../../components/notes-component/edit-note/edit-note";
import { useState } from "react";
import { NoteFilter } from "../../components/filter/filter";
import { useFilter } from "../../hooks/context/filter-context";
import { SortFunc, SortTime, SearchNote } from "../../helpers/filter-function";
export default function NotePage() {
  const { notes } = useNote();
  const [addNoteEnable, setAddNoteEnable] = useState(false);
  const [editNoteEnable, setEditnoteEnable] = useState(false);
  const [notesData, setNotesData] = useState({});
  const handleAddNote = () => {
    setAddNoteEnable(true);
    setEditnoteEnable(false);
  };
  const [filterOpen, setFilterOpen] = useState(false);
  const { filter, filterDispatch } = useFilter();
  const { sortByPriority, sortByTime } = filter;
  const Priorities = { Low: 1, Medium: 2, High: 3 };
  const [searchByTitle, setSearchByTitle] = useState("");
  const handleSearchNote = (e) => {
    filterDispatch({ type: "FILTER_CLEAR", payload: {} });
    setSearchByTitle(e.target.value);
  };
  const filterByPriority = SortFunc(notes, sortByPriority, Priorities);
  const sortedData = SearchNote(filterByPriority, searchByTitle);
  const filterdData = SortTime(sortedData, sortByTime);
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
              <div className="margin-auto  flex-row flex-wrap align-baseline">
                <div>
                  <input
                    type="search"
                    placeholder="search for a note"
                    className="border-searchbox search-note"
                    value={searchByTitle}
                    onChange={handleSearchNote}
                  />
                  <i className="fa-solid fa-search search-filter border-searchbox  cursor-pointer"></i>
                </div>
                <div>
                  <div>
                    <button
                      className="position-relative login-site cursor-pointer mg-left-sm margin-top cursor-pointer"
                      onClick={() => setFilterOpen(!filterOpen)}
                    >
                      <i className="fa-solid fa-book"></i>
                      Filter
                    </button>
                    <button
                      className="signup-site cursor-pointer mg-left-sm margin-top cursor-pointer"
                      onClick={handleAddNote}
                    >
                      Create Note
                    </button>
                  </div>
                  <div className="position-absolute">
                    {filterOpen ? <NoteFilter /> : ""}
                  </div>
                </div>
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
                {filterdData.map((item) => (
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
              <div className="margin-auto">
                {notes.length > 0 ? (
                  ""
                ) : (
                  <h2 className="padding-md margin-auto">
                    Start taking notes...
                  </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
