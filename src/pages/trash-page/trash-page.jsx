import "./trash-page.css";
import { NavBar, Sidebar } from "../../components";
import { useTrash } from "../../hooks/context/trash-context";
import { TrashNoteCard } from "../../components/notes-component/trashNote-card";
export default function TrashPage() {
  const { trashNote } = useTrash();
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
              {trashNote.length > 0 ? (
                <div className="note-list">
                  {trashNote.map((item) => (
                    <TrashNoteCard key={item._id} {...item} />
                  ))}
                </div>
              ) : (
                <div className="margin-auto">
                  <h2 className="padding-md margin-top">No Trash Notes</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
