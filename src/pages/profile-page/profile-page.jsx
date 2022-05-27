import { useAuth } from "../../hooks";
import { userVerfied } from "../../assets";
import { NavBar, Sidebar } from "../../components";
export const ProfilePage = () => {
  const {
    authState: { user },
  } = useAuth();
  return (
    <>
      <NavBar />
      <div className="flex-row">
        <div>
          <Sidebar />
        </div>
        <div className="auth-bd auth-container padding-md">
          <div>
            <div className="margin-auto bd-round width-fitcontent padding-md">
              <i className="fa-solid fa-user"></i>
              <img className="" src={userVerfied} alt="user" />
            </div>
            <h3 className="padding-md">
              Name:{user.firstName} {user.lastName}
            </h3>
            <h4>Gmail:{user.email}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
