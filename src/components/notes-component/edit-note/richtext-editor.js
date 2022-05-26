import ReactQuill, { Quill, Mixin, Toolbar }  from "react-quill";
import 'react-quill/dist/quill.snow.css';

const formats=[
    "bold",
    "italic",
    "underline",
    "strike",
    "image",
    "header",
    "font",
    "list",
    "clean",
    "video",
  ];
  
  
  const modules = {
    toolbar: [
      [{ 'header': [1, 2,3,4, false] }],
      [],
      [{ 'font': [] }],
      [],
      ["bold", "italic", "underline", "strike"],
      [],
      [{ list: "ordered" }, { list: "bullet" }],
      [],
      ["image"],
    ],
}
export function RichTextEditor({ value, setValue }) {
    return (
      <>
      <ReactQuill
       formats={formats}
       modules={modules}
       value={value}
       placeholder="Add note text here....."
       onChange={setValue}
      />
      </>
    );
  }