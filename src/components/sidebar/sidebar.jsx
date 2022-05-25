import "./sidebar.css";
import {Link} from "react-router-dom";
export function Sidebar(){
    return (
      <>
        <div className="sidebar-cflex flex-wrap margin-top">
          <label>
            <Link to="/notes">
              <i class="fa-solid fa-book"></i> Notes
            </Link>
          </label>
          <label>
            <i className="fa-solid fa-tag"></i> Label
          </label>
          <label>
            <Link to="/archive">
              <i className="fa-solid fa-box-archive"></i> Archive
            </Link>
          </label>
          <label>
            <i className="fa-solid fa-trash"></i> Trash
          </label>
          <label>
            <i className="fa-solid fa-user"></i> Profile
          </label>
        </div>
      </>
    );
}