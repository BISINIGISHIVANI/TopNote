import { Navigate,useLocation,Outlet } from "react-router-dom";
import { useAuth } from "../hooks";
export const PrivateRoute=({children})=>{
    const location=useLocation()
    const { authState :{token}} = useAuth();
	return token ? children : <Navigate to="/signin" state={{from:location}} replace/> ;
}
