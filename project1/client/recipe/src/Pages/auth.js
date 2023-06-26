import { useState } from "react";
import axios from "axios";
import {useCookies} from "react-cookie"
import { useNavigate } from "react-router-dom";

export const Auth =()=>{
    return (<div>
        <Login/>
        <Register/>
    </div>);
}

const Login =()=>{
    const [password,setPassword ] = useState("");
    const [username,setUsername ] = useState("");
    const [, setCookie] = useCookies(["access_token"]);
    const navigate = useNavigate(); 

    const handleLoginSubmit =async(event)=>{
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/login", {username, password});
            alert("login completed. You can now Login");
            setCookie("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID )
            navigate("/")
        } catch (error) {
            console.error(error);
        }
    }

    return (<div>
        <Form
            password={password}
            username={username}
            setUsername={setUsername}
            setPassword={setPassword}
            onSubmit={handleLoginSubmit}
            label={"Login"}
        />
    </div>)
}

const Register =()=>{
    const [password,setPassword ] = useState("");
    const [username,setUsername ] = useState("");

    const handleRegSubmit = async(event)=>{
        event.preventDefault(); 
        try {
            await axios.post("http://localhost:3001/auth/register", {username, password});
            alert("Registation completed. You can now Login")
        } catch (error) {
            console.error(error);
        }
    }

    return (<div>
        <Form
            password={password}
            username={username}
            setUsername={setUsername}
            setPassword={setPassword}
            onSubmit={handleRegSubmit}
            label={"Register"}
        />
    </div>)
}

const Form =({password, username, setPassword, setUsername, onSubmit, label})=>{
    return(
        <div className="auth-container">
            <form className="auth-form" onSubmit={onSubmit}>
                <label htmlFor="userrname">Username</label>
                <input type="text" id="username" value={username} onChange={(e) =>setUsername(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                <input type="submit" value={label}/>
            </form>
        </div>
    );
}