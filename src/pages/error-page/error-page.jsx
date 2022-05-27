import { error } from "../../assets"
import { NavBar } from "../../components"

export const ErrorPage=()=>{
    return <div>
        <NavBar/>
        <img className="width-error-page"src={error}alt="404-page"/>
    </div>
}