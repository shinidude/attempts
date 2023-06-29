//Use to link different routes in the navbar 
import {Link} from "react-router-dom"

/**
 * A navbar component with links used for navigating the application 
 */
export default function Navbar () {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </nav>
    )
 }