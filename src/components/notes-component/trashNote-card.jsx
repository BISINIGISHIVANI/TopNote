import { useTrash } from "../../hooks/context/trash-context";
import { useNote } from "../../hooks/context/note-context";
import parse from "html-react-parser";
export const TrashNoteCard = (props) => {
  const { _id, title, text, date, time, bgColor, labelTag, priorityTag } =
    props;
  const { notes, setNotes, deleteNote } = useNote();
  const { trashNote, setTrashNote } = useTrash();
  const moveToNote = (id, note) => {
    setTrashNote(trashNote.filter((note) => note._id !== id));
    setNotes([...notes, note]);
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
        <div className={`note-footer  ${bgColor}`}>
          <div className="note-footer-left  place-center">
            <div className="sidebar-cflex">
              <span className="fa-solid">{date} </span>
              <span className="fa-solid">{time}</span>
            </div>
          </div>
          <div className="note-footer-right  place-center">
            <i
              className="fa-solid fa-trash-arrow-up"
              onClick={() => moveToNote(_id, props)}
            ></i>
            <i
              className="fa-solid fa-trash"
              onClick={() => {
                deleteNote(_id);
                setTrashNote(trashNote.filter((note) => note._id !== _id));
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
