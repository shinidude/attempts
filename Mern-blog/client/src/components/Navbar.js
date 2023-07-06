import { Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';


export const Navbar =()=>{
    return (<Fragment>
     <Nav  >
        <Nav.Item>
            My Blog
        </Nav.Item>
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
     </Nav>
    </Fragment>)
}