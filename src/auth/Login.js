import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import HelpLogo from '../Images/HelpLogo.png';





export const Login = () => {
    const [email, setEmail] = useState("kari@me.com");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    
    const handleLogin = (e) => {
        e.preventDefault()
      return fetch(`http://localhost:8088/users?email=${email}&password=${password}`)
       .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("helpApp_user", JSON.stringify({
                        id: user.id,
                        admin: user.isAdmin,
                        familyId: user.familyId
                    }))
                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }
    
    
    return (
        <main>
           

            
        <section className="container--login">
            <form className="form--login" onSubmit={handleLogin}>
             
             <div className= "login-logo">
            <img src={HelpLogo} alt="My Logo" className="logo" />
            </div>

            <fieldset>
                <label htmlFor="inputEmail">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                  className="form-control"
                  placeholder="Email address"
                  required
                  autoFocus
                />
              </fieldset>
              <fieldset>
                <label htmlFor="inputPassword">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(evt) => setPassword(evt.target.value)}
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </fieldset>
              <fieldset>
                <button type="submit">Sign in</button>
              </fieldset>
            </form>
          </section>
          <section className="link--register">
            
            <Link to="/register"><strong>New to Help! Create an account</strong></Link>
          </section>
        </main>
      );
      }