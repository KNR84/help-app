import { Link } from "react-router-dom"

//this export gives the user name, email & familyId of the user
export const Alert = ({ id, userId, userName, alertDateTime, alertText}) => {
    return <section className="alerts">
        <div>
            <Link to={`/alerts/${id}`}>User Id: {userId}</Link>
        </div>
        <div>User Name: {userName}</div>
        <div>Date & Time: {alertDateTime}</div>
        <div>Text: {alertText}</div>
    </section>
}