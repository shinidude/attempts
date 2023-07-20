import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Post } from "../components/Post"



export const MyBlogs =()=>{
    const user = useParams()
    const [myblogs, setMyblogs] = useState(""); 
    console.log(user.id)
    useEffect(()=>{
        fetch(`http://localhost:4000/own/${user.id}`)
        .then(response =>{
            response.json().then(myblogs => {
                setMyblogs(myblogs);
                console.log(myblogs);
            });
        } )
    }, [myblogs])

    if(!myblogs){
        return "";
    } 
    return (<div className="home-body">
        {myblogs.length > 0 && myblogs.map(post => (
          <Post {...post} myPost={true} />
        ))}
    </div>)
}