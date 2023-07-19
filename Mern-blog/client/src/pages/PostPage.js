import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


export const PostPage =()=>{
    const {id }= useParams(); 
    const navigate = useNavigate();
    const [postInfo,setPostInfo] = useState(null)
    useEffect(()=>{
        console.log(id)  
        fetch(`http://localhost:4000/post/${id}`)
        .then(res =>{
            res.json().then(postInfo => {
                setPostInfo(postInfo);
                console.log(postInfo);
            })
        }) 
    }, [])

  
    if(!postInfo){
        return "";
    } 
    return <>
        <Image src={`http://localhost:4000/${postInfo.cover}`} fluid/>
        <h1>{postInfo.title}</h1>
        <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>
    </>;
}
