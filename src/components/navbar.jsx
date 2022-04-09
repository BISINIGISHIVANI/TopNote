import "./navbar.css";
export default function NavBar() {
  return (
    <nav class="navigation container">
      <div class="nav-Name">
        <h1 className="title-firstword">TopNote</h1>
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
        <button className="login-site cursor-pointer">Login</button>
        <button className="signup-site cursor-pointer">SignUp</button>
        </div>
      </div>
    </nav>
  );
}
