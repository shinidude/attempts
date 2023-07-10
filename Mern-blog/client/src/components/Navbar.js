
import { Fragment, useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';


export const Navbar =()=>{
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
          credentials: 'include',
        }).then(response => {
            console.log(response); console.log(response);
          response.json().then(userInfo => {
            setUsername(userInfo.username);
          });
        });
      }, []);

    function handleLogOut(){
            fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST'
        })
    
        setUsername(null);
        navigate('/login');
    }
    let navElements;
    if(!!username){
        navElements =
        <>
            <Nav.Item> 
                <Nav.Link href="/create">
                    Create new post
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <a onClick={handleLogOut}> Logout</a>
            
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
                MyBlog
            </Nav.Link>
        </Nav.Item>
        {navElements}
     </Nav>
    </Fragment>)
}