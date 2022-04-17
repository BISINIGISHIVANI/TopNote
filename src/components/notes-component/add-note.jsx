import React,{useState} from "react";
import { useNote } from "../../hooks/context/note-context";
export function AddNote({setaddNoteEnable}){
    const {addNote}=useNote();
    const date=new Date();
    const [value,setValue]=useState({title:"",text:"",date:date.toLocaleDateString(),bgColor:"bg-red"});
    const [chooseColor,setChooseColor]=useState(false);
   const handleSubmit=(value)=>{
       addNote(value);
       setValue({title:"",text:"",date:date.toLocaleDateString(),bgColor:""});
       setaddNoteEnable(false);
   }
    return (
        <div className="note-container add-note">
            <div className={`note-text-area ${value.bgColor}`}>
                <textarea
                onChange={(e) => setValue({ ...value, title: e.target.value })}
                value={value.title}
                className={`note-text note-title ${value.bgColor}`}
                placeholder="Note title"
                ></textarea>
                <textarea name="" cols="30" rows="10"
                onChange={(e) => setValue({ ...value, text: e.target.value })}
                value={value.text}
                className={`note-text note-title ${value.bgColor}`}
                placeholder="Note"
                ></textarea>
            </div>
            <div className={`note-footer ${value.bgColor}`}>
                <div className="note-footer-left">
                    <i className="fa-solid fa-edit cursor-pointer"></i>
                    <span className="margin-left-sm fa-solid">{value.date}</span>
                    <i className={`fa-solid fa-palette crursor-pointer`}
                    onClick={() => setChooseColor(!chooseColor)}
                    ></i>
                    <div className={`color-container ${chooseColor ? "show" :""}`}>
                        <span
                        className="colors note-red"
                        onClick={()=>setValue({...value,bgColor:"note-red"})}
                        ></span>
                        <span
                         className="colors note-blue"
                        onClick={()=>setValue({...value,bgColor:"note-blue"})}
                        ></span>
                        <span
                         className="colors note-yellow"
                        onClick={()=>setValue({...value,bgColor:"note-yellow"})}
                        ></span>
                        <span
                         className="colors note-green"
                        onClick={()=>setValue({...value,bgColor:"note-green"})}
                        ></span>
                        <span
                         className="colors note-pink"
                        onClick={()=>setValue({...value,bgColor:"note-pink"})}
                        ></span>
                        <span
                         className="colors note-gray"
                        onClick={()=>setValue({...value,bgColor:"note-gray"})}
                        ></span>
                    </div>
                </div>
                <div className="note-footer-right">
                <i className="fa-solid fa-tag"></i>
                <i className="fa-solid fa-archive"></i> 
                <i className="fa-solid fa-trash"
                onClick={() => setaddNoteEnable(false)}
                ></i> 
                <i className="fa-solid fa-check"
                onClick={() => handleSubmit(value)}
                ></i> 
                </div>
            </div>
        </div>
    )
}