
import { Fragment, useContext, useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import Navbar from 'react-bootstrap/Navbar';
import {TbWritingSign} from 'react-icons/tb';
import {MdNoteAdd} from 'react-icons/md';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



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
                   <MdNoteAdd size={25}/>
                </Nav.Link>
            </Nav.Item>
              <Nav.Item> 
                  <Nav.Link href={`/own/${userInfo?.id}`}>
                      My posts
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link onClick={logout}> Logout</Nav.Link>
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
      <Navbar.Brand href="/"> <TbWritingSign size={40}/>Blogs</Navbar.Brand>
      <Nav className="me-auto">
          {navElements}
      </Nav>
     </Navbar>
    </Fragment>)
}