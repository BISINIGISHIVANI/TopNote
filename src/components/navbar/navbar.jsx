import "./navbar.css";
import { useAuth } from "../../hooks";
import { Link, useNavigate } from "react-router-dom";
export default function NavBar() {
  const {authState,authDispatch}=useAuth();
  const navigate=useNavigate()
  const authName=authState.user;
  const checkUserStatus=(authName)=>{
    return authName ?"Logout" :"Login";
  }
  const logoutHandler=()=>{
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({type:"LOGOUT"})
  }
  const userHandler=(type)=>{
    type==="Login" ? navigate("/login"):logoutHandler();
  }
  return (
    <nav class="navigation container">
      <div class="nav-Name">
        <Link to="/">
        <h1 className="title-firstword cursor-pointer">TopNote</h1>
        </Link>
      </div>
      <div className="nav-buttons">
        <div>
          <input
            type="search"
            placeholder="search here..."
            className="border-searchbox search-input"
          />
          <button className="search-go border-searchbox cursor-pointer">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="nav-buttons">
          <Link to="/signin">
        <button 
        className="login-site cursor-pointer"
        onClick={()=>userHandler(checkUserStatus(authName))}
        >
          {checkUserStatus(authName)}
        </button>
        </Link>
        { authState.user ? authName.firstName :
        <Link to="/signup">
        <button className="signup-site cursor-pointer">SignUp</button>
        </Link>
        }
        </div>
      </div>
    </nav>
  );
}
