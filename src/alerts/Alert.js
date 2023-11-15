import { Link } from "react-router-dom"

//this export gives the user name, email & familyId of the user
export const Alert = ({ id, createdBy, alertTypesId, alertDateTime }) => {
    return <section className="alerts">
        <div>
            <Link to={`/alerts/${id}`}>Name: {createdBy}</Link>
        </div>
        <div>Alert Type: {alertTypesId}</div>
        <div>Date Stamp: {alertDateTime}</div>
    </section>
}