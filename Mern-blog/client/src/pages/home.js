import { Fragment, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { Post } from "../components/Post";
import Row from 'react-bootstrap/Row';

export const Home =()=>{
    const [posts,setPosts] = useState([]);
    useEffect(() => {
      fetch('http://localhost:4000/post').then(response => {
        response.json().then(posts => {
          setPosts(posts);
        });
      });
    }, []);
    return (
      <div className="home-body">
          <Row md={2} className="g-1">
            {posts.length > 0 && posts.map(post => (
              <Post {...post} />
            ))}
          </Row>
      </div>
    );
}