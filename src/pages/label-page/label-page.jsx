import "./style.css";
import { useState, useReducer } from "react";
import { NavBar, Sidebar } from "../../components";
import { useNote } from "../../hooks/context/note-context";
import { LabelReducer } from "../../helpers/label-reducer";
import { NoteCard } from "../../components/notes-component/notecard";
export default function LabelPage() {
  const { notes } = useNote();
  const [labelTag, setLabelTag] = useState();
  const getLabelTagData = notes.filter((item) => item.labelTag);
  const [labelFilter, labelFilterDispatch] = useReducer(LabelReducer, {
    labelledArr: getLabelTagData,
  });
  const { labelledArr } = labelFilter;
  return (
    <div>
      <>
        <NavBar />
        <div className="flex-row">
          <div className="position-right">
            <Sidebar />
          </div>
          <div className="flex-grow">
            <div className="align-md mg-left-sm">
              <div className="flex-wrap">
                <div>
                  <div className="label-menu">
                    <ul className="label-ul">
                      <li
                        className={`tag cursor-pointer ${
                          labelTag === "" ? "label-active" : ""
                        }`}
                        onClick={() => {
                          setLabelTag("");
                          labelFilterDispatch({ type: "ALL" });
                        }}
                      >
                        ALL
                      </li>
                      <li
                        className={`tag cursor-pointer ${
                          labelTag === "Work" ? "label-active" : ""
                        }`}
                        onClick={() => {
                          setLabelTag("Work");
                          labelFilterDispatch({ type: "WORK" });
                        }}
                      >
                        Work
                      </li>
                      <li
                        className={`tag cursor-pointer ${
                          labelTag === "ClassNotes" ? "label-active" : ""
                        }`}
                        onClick={() => {
                          setLabelTag("ClassNotes");
                          labelFilterDispatch({ type: "CLASS_NOTES" });
                        }}
                      >
                        ClassNotes
                      </li>
                      <li
                        className={`tag cursor-pointer ${
                          labelTag === "RoughtNotes" ? "label-active" : ""
                        }`}
                        onClick={() => {
                          setLabelTag("RoughtNotes");
                          labelFilterDispatch({ type: "ROUGH_NOTES" });
                        }}
                      >
                        RoughNotes
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="note-list">
                  {labelledArr.length > 0 ? (
                    ""
                  ) : (
                    <div className="margin-auto">
                      <h2 className="padding-md">
                        No label notes.add label to your note
                      </h2>
                    </div>
                  )}
                  {labelledArr.map((item) => (
                    <NoteCard key={item._id} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
