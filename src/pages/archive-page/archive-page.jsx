import { NavBar, Sidebar } from "../../components";
import { NoteCard } from "../../components/notes-component/notecard";
import { useArchiveNote } from "../../hooks/context/archive-context";
export default function ArchivePage() {
  const { archiveNote } = useArchiveNote();
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
              </div>
              <div className="note-list">
                {archiveNote.map((item) => (
                  <NoteCard key={item._id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
