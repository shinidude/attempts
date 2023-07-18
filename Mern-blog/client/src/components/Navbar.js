
import { Fragment, useContext, useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';


export const Navbar =()=>{
    const navigate = useNavigate();
    const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      console.log(response)
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        console.log(userInfo)
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
    navigate('/login')
  }

  let navElements = {};
  const name = userInfo?.username;
    console.log("This is the :" + userInfo?.id);
    if(!!name){
        navElements =
        <>
            <Nav.Item> 
                <Nav.Link href="/create">
                    Create new post
                </Nav.Link>
            </Nav.Item>
            <Nav.Item> 
                <Nav.Link href={`/own/${userInfo?.id}`}>
                    My posts
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <a onClick={logout}> Logout</a>
            
             </Nav.Item>
        </>
    }else 
    {
        navElements =
        <>
        <Nav.Item>
        <Nav.Link href="/login">
            Login
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="/register">
            Register
        </Nav.Link>
    </Nav.Item>
</>
    }
    return (<Fragment>
     <Nav>
        <Nav.Item>
            <Nav.Link href="/">
                Blogs
            </Nav.Link>
        </Nav.Item>
        {navElements}
     </Nav>
    </Fragment>)
}