import "./navbar.css";
import { useState,useEffect } from "react";
import { useAuth } from "../../hooks";
import { Link, useNavigate } from "react-router-dom";
export default function NavBar() {
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();
  const authName = authState.user;
  const checkUserStatus = (authName) => {
    return authName ? "Logout" : "Login";
  };
  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
  };
  const userHandler = (type) => {
    type === "Login" ? navigate("/login") : logoutHandler();
  };
  const themeFromLocal = JSON.parse(localStorage.getItem("darkMode"));

  const [darkMode, setDarkMode] = useState(themeFromLocal || false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);
  return (
    <nav class="navigation container">
      <div class="nav-Name">
        <Link to="/">
          <h1 className="title-firstword cursor-pointer">TopNote</h1>
        </Link>
      </div>
      <div className="nav-buttons">
        <div>
          <Link to="/notes">
          <button className="signup-site cursor-pointer"><i className="fa-solid fa-book"></i>Notes</button>
          </Link>
        </div>
        <div className="nav-buttons">
          <Link to="/signin">
            <button
              className="login-site cursor-pointer"
              onClick={() => userHandler(checkUserStatus(authName))}
            >
              {checkUserStatus(authName)}
            </button>
          </Link>
          {authState.user ? (
            authName.firstName
          ) : (
            <Link to="/signup">
              <button className="signup-site cursor-pointer">SignUp</button>
            </Link>
          )}
          {darkMode ? (
            <i className="fa-solid fa-sun" onClick={() => setDarkMode(false)}></i>
          ) : (
            <i
              className="fa-solid fa-moon cursor-pointer"
              onClick={() => setDarkMode(true)}
            ></i>
          )}
        </div>
      </div>
    </nav>
  );
}
