import {Link, useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar =()=>{
    const [cookies, setCookies] = useCookies(["access_token"]); 
    const navigate = useNavigate(); 
    const logOut =()=>{
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth");
    }
    return (
        <div className="navbar">
            <Link to="/"> Home </Link>
            <Link to="/create-recipe"> Create Recipes</Link>
            <Link to="/saved-recipe">Saved Recipes</Link>
            {!cookies.access_token ?  <Link to="/auth">Login/Register</Link> : <input type="button"  value="Log Out" onClick={logOut}/>}
           
        </div>
    );
}