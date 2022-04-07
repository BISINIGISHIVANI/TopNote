import "./sidebar.css";
export function Sidebar(){
    return <>
    <div className="sidebar-cflex">
    <label><i class="fa-solid fa-book"></i>Notes</label>
    <label><i className="fa-solid fa-tag"></i> Label</label>
    <label><i className="fa-solid fa-box-archive"></i> Archive</label>
    <label><i className="fa-solid fa-trash"></i> Trash</label>
    <label><i className="fa-solid fa-user"></i> Profile</label>
    </div>
    <div className="border-right"></div>
    </>
}