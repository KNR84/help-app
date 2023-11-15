import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const AddNewUser = (props) => {


    const localhelpAppUser = localStorage.getItem("helpApp_user")
    const helpAppUserObject = JSON.parse(localhelpAppUser)

    //creates the variable user with initial state objects userName, email, password, isAdmin and familyId.
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
        isAdmin: false,
        familyId: helpAppUserObject.familyId
    })
    //allows page to navigate elsewhere
    let navigate = useNavigate()

    //processes and posts the data to the database
    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("helpApp_user", JSON.stringify({
                        id: createdUser.id,
                        userName: "",
                        email: "",
                        password: "",
                        admin: createdUser.isAdmin,
                        familyId: ""
                    }))
                    navigate("/")
                }
            })
    }

    //function is called when the form is submitted it checks to see if the provided email exists and then alerts the user if it does or registers the user if it doesn't. 
    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    //function updates the user state as the user types in the form fields. It creates a copy of the current state - modidifies it with the new information inputed by the user and then sets the state with the updated copy. 
    const updateUser = (evt) => {
        const copy = { ...user }
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    //this is the render method of the component. It returns the JSX that represents the form with input fields for user registration.
    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Add new user to your family</h1>
                <fieldset>
                    <label htmlFor="userName"> User Name: </label>
                    <input onChange={updateUser}
                        type="text" id="userName" className="form-control"
                        placeholder="Enter user name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email </label>
                    <input onChange={updateUser}
                        type="email" id="email" className="form-control"
                        placeholder="user email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="password"> Password </label>
                    <input onChange={updateUser}
                        type="password" id="password" className="form-control"
                        placeholder="user password" required />
                </fieldset>
                <fieldset>
                    <button type="submit"> Register New User </button>
                </fieldset>
            </form>
        </main>
    )
}