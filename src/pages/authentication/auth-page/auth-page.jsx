import "./auth.css";
import { NavBar } from "../../../components";
export function ForgotPage() {
  return (
    <>
      <NavBar />
      <form className="auth-bd auth-container padding-md">
        <h2 className="auth-h2">ForgotPassword</h2>

        <div className="flex-col flex-justify">
          <p className="padding-sm input-email">
            Enter your email address to reset your password.
          </p>
          <label>Email</label>
          <input type="email" className="input-field" />
        </div>
        <div className="flex-col flex-justify">
          <button className="login-site cursor-pointer">Send</button>
        </div>
      </form>
    </>
  );
}
