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
              {archiveNote.length>0? "":<h2 className="padding-md margin-auto">No archive notes found...</h2>}
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
