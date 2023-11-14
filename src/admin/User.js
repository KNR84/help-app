import { Link } from "react-router-dom"

//this export gives the user name, email & familyId of the user
export const User = ({ id, userName, email, familyId }) => {
    return <section className="users">
        <div>
            <Link to={`/users/${id}`}>Name: {userName}</Link>
        </div>
        <div>Email: {email}</div>
        <div>FamilyId: {familyId}</div>
    </section>
}



