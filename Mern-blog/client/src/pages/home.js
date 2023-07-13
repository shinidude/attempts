import { Fragment, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { Post } from "../components/Post";

export const Home =()=>{
    const [posts,setPosts] = useState([]);
    useEffect(() => {
      fetch('http://localhost:4000/post').then(response => {
        response.json().then(posts => {
          setPosts(posts);
          console.log(posts);
        });
      });
    }, []);
    return (
      <>
        {posts.length > 0 && posts.map(post => (
          <Post {...post} />
        ))}
      </>
    );
}