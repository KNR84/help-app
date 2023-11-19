import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"



//exports the links in the Admin navigation bar
export const AdminNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            
             <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/AddNewUser">Add a new user</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/UserList">User List</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/AddNewAlert">Add Alert</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/MessageForm">Add Message</Link>
            </li>
          
           
            {
                localStorage.getItem("helpApp_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("helpApp_user")
                            navigate("/", { replace: true })
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}