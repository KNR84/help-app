import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"



//exports the links in the NonAdmin navigation bar
export const NonAdminNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            
            <li className="navbar__item active">
                <Link className="navbar__link" to="/UserList">User List</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/AddNewAlert">Add Alert</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/AlertList">Alert List</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/AddNewMessage">Add Message</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/MessageList">Message List</Link>
            </li>
            {
                localStorage.getItem("helpApp_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("helpApp_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}