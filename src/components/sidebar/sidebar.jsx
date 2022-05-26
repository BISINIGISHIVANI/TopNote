import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
export function Sidebar() {
  const location = useLocation();
  return (
    <>
      <div className="sidebar-cflex flex-wrap margin-top">
        <label className={`${location.pathname === "/notes" ? "active" : ""}`}>
          <Link to="/notes">
            <i class="fa-solid fa-book"></i> Notes
          </Link>
        </label>
        <label className={`${location.pathname === "/label" ? "active" : ""}`}>
          <Link to="/label">
            <i className="fa-solid fa-tag"></i> Label
          </Link>
        </label>
        <label
          className={`${location.pathname === "/archive" ? "active" : ""}`}
        >
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
