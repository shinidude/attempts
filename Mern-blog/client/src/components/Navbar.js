
import { Fragment, useContext, useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


export const NavBar =()=>{
    const navigate = useNavigate();
    const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      console.log(response)
      response.json().then(userInfo => {
        setUserInfo(userInfo);
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
    <Navbar >
      <Navbar.Brand href="/"> Blogs</Navbar.Brand>
      <Nav className="me-auto">
          {navElements}
      </Nav>
     </Navbar>
    </Fragment>)
}