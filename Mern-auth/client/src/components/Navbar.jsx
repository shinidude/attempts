//Use to link different routes in the navbar 
import {Link} from "react-router-dom"
import Nav from 'react-bootstrap/Nav';

/**
 * A navbar component with links used for navigating the application 
 */
export default function Navbar () {
    return (
        <Nav>
        <Nav.Item>
            <Nav.Link> <Link to='/'>Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link><Link to='/register'>Register</Link></Nav.Link>
        </Nav.Item>
        </Nav>
    )
 }