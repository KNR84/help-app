import { Link } from "react-router-dom"

//this export gives the user name, email & familyId of the user
export const Alert = ({ id, userId, userName, alertDateTime, alertText}) => {
    return <section className="alerts">
        {/* <div>
            <Link to={`/alerts/${id}`}>User Id: {userId}</Link>
        </div> */}
        <strong>{userName}: </strong>
        <em>{new Date(alertDateTime).toLocaleString()}</em>

        <div>Text: {alertText}</div>
    </section>
}