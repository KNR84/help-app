import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

//check the img path on line 35 with Barry on Monday

export const Login = () => {
    const [email, setEmail] = useState("me@me.com");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    
    const handleLogin = (e) => {
        e.preventDefault()
      return fetch(`http://localhost:8088/users?email=${email}&password=${password}`)
       .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("honey_user", JSON.stringify({
                        id: user.id,
                        parent: user.isParent,
                        admin: user.isAdmin
                    }))
                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }
    
    
    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Welcome</h1>
                    <img src="src/auth/images/Help!.png" alt="Help!" /> 
                    <fieldset>
                        <label htmlFor="inputEmail">Email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={evt => setEmail(evt.target.value)} 
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)} 
                            className="form-control"
                            placeholder="Password" 
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Create an account</Link>
            </section>
        </main>
    )}