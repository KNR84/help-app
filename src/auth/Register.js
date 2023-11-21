import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"



export const Register = (props) => {
    const [user, setUser] = useState({
        userId:"",
        userName: "",
        email: "",
        password: "",
        isAdmin: true,
        familyId: crypto.randomUUID()                                     
    })
    let navigate = useNavigate()






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
                    localStorage.setItem("helpApp_user", JSON.stringify({ //changed this
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
    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }
    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Create your account</h1>
                <fieldset>
                    <label htmlFor="userName"> Parent/Guardian name: </label>
                    <input onChange={updateUser}
                           type="text" id="userName" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Parent/Guardian email </label>
                    <input onChange={updateUser}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="password"> Password </label>
                    <input onChange={updateUser}
                        type="password" id="password" className="form-control"
                        placeholder="Password" required />
                </fieldset>
                
               
                
                
                <fieldset>
                    <input onChange={(evt) => {
                        const copy = {...user}
                        copy.isAdmin = evt.target.checked
                        setUser(copy)
                    }} 
                        type="checkbox" id="isAdmin" /> 
                    <label htmlFor="email"> Account Administrator </label>
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}