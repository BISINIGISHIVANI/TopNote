import React, { useState } from "react";
import { useNote } from "../../hooks/context/note-context";
import dayjs from "dayjs";
import { RichTextEditor } from "./edit-note/richtext-editor";
export function AddNote({ setaddNoteEnable }) {
  const { addNote } = useNote();
  const addDate = () => dayjs().format("DD-MM-YYYY");
  const addTime = () => dayjs().format("hh-mm A");
  const date = addDate();
  const time = addTime();
  const [value, setValue] = useState({
    title: "",
    text: "",
    date,
    time,
    labelTag: "",
    priorityTag: "",
    bgColor: "default",
  });
  const [chooseColor, setChooseColor] = useState(false);
  const handleSubmit = (e, value) => {
    e.preventDefault();
    addNote(value);
    setaddNoteEnable(false);
  };
  return (
    <form className={`note-container add-note padding-md `}>
      <div className={`note-text-area`}>
        <input
          onChange={(e) => setValue({ ...value, title: e.target.value })}
          value={value.title}
          className={`note-text note-title  ${value.bgColor}`}
          placeholder="Note title "
          required
        />
        <div className={`text-edit note-card  ${value.bgColor}`}>
          <RichTextEditor
            value={value.text}
            setValue={(text) => setValue((value) => ({ ...value, text }))}
            className={`text-edit ql-editor ${value.bgColor}`}
          />
        </div>
      </div>
      <div className={`note-footer note-card  ${value.bgColor}`}>
        <div className="note-footer-left">
          <i
            className={`fa-solid fa-palette crursor-pointer`}
            onClick={() => setChooseColor(!chooseColor)}
          ></i>
          <div className={`color-container ${chooseColor ? "show" : ""}`}>
            <span
              className="colors note-red"
              onClick={() => setValue({ ...value, bgColor: "note-red" })}
            ></span>
            <span
              className="colors note-blue"
              onClick={() => setValue({ ...value, bgColor: "note-blue" })}
            ></span>
            <span
              className="colors note-yellow"
              onClick={() => setValue({ ...value, bgColor: "note-yellow" })}
            ></span>
            <span
              className="colors note-green"
              onClick={() => setValue({ ...value, bgColor: "note-green" })}
            ></span>
            <span
              className="colors note-pink"
              onClick={() => setValue({ ...value, bgColor: "note-pink" })}
            ></span>
            <span
              className="colors note-gray"
              onClick={() => setValue({ ...value, bgColor: "note-gray" })}
            ></span>
          </div>
          <div className="labels-container">
            <div>
              <label htmlFor="label-tag">
                <i className={`fa-solid fa-tag`}></i>Label
              </label>
              <select
                className="margin-left"
                name="label-tag"
                id="label-tag"
                onChange={(e) =>
                  setValue({ ...value, labelTag: e.target.value })
                }
              >
                <optgroup label="Notes">
                  <option value="">None</option>
                  <option value="Work">Work</option>
                  <option value="ClassNotes">ClassNotes</option>
                  <option value="RoughNotes">RoughNotes</option>
                </optgroup>
              </select>
            </div>
            <div>
              <label htmlFor="priority-tag">
                <i className={`fa-solid fa-calendar`}></i>
                Priority
              </label>
              <select
                name="priority-tag"
                id="priority-tag"
                onChange={(e) =>
                  setValue({ ...value, priorityTag: e.target.value })
                }
              >
                <optgroup label="Important">
                  <option value="">None</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
        <div className="note-footer-right">
          <i
            className="fa-solid fa-trash"
            onClick={() => setaddNoteEnable(false)}
          ></i>
          <i
            className="fa-solid fa-check"
            onClick={(e) => handleSubmit(e, value)}
          ></i>
        </div>
      </div>
    </form>
  );
}
