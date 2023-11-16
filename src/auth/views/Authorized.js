//this component is a simple authorization wrapper. If a user is authenticated (as determined by the presence of "helpApp_user" in localStorage), it renders the provided content; otherwise, it redirects the user to a login page, passing the current location as state to facilitate a redirect back to the original location after successful login.



import { Navigate, useLocation } from "react-router-dom"

export const Authorized = ({ children }) => {
    const location = useLocation()

    if (localStorage.getItem("helpApp_user")) {
        return children
    }
    else {
        return <Navigate
            to={`/login/${location.search}`}
            replace
            state={{ location }} />
    }
}

