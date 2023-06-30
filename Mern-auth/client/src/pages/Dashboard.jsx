import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Dashboard(){
    const {user}  = useContext(UserContext);
    console.log(user);

    return (
        <div>
             <h1>Hello</h1>
            {!!user && (<h2>{user.name} !</h2>) }
        </div>
    )
}