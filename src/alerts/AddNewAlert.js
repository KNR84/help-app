import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const AddNewAlert = (props) => {

    //creates the variable user with initial state objects userName, email, password, isAdmin and familyId.
    const localhelpAppUser = localStorage.getItem("helpApp_user")
    const helpAppUserObject = JSON.parse(localhelpAppUser)


    const [alert, setAlert] = useState({
        createdBy: 1,
        alertTypesId: 1,
        alertDateTime: "Fri Apr 29 2022 14:02:20 GMT-0500 (Central Daylight Time)",
        familyId: helpAppUserObject.familyId

    })
    //allows page to navigate elsewhere
    let navigate = useNavigate()


    //processes and posts the data to the database
    const addNewAlert = () => {
        return fetch("http://localhost:8088/alerts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(alert)
        })
            .then(res => res.json())
           
    }
    //function updates the user state as the user types in the form fields. It creates a copy of the current state - modidifies it with the new information inputed by the user and then sets the state with the updated copy. 
    const updateAlert = (evt) => {
        const copy = { ...alert }
        copy[evt.target.id] = evt.target.value
        setAlert(copy)
    }

    //this is the render method of the component. It returns the JSX that represents the form with input fields for new alerts.
    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login">
                <h1 className="h3 mb-3 font-weight-normal">Add new alert</h1>
                
                <fieldset>
                    <label htmlFor="userName"> Enter new alert: </label>
                    <input onChange={updateAlert}
                        type="text" id="userName" className="form-control"
                        placeholder="Enter message here" required autoFocus />
                </fieldset>
               
                <fieldset>
               
                    <button  onClick={addNewAlert} type="submit"> Submit new alert </button>
                </fieldset>
            </form>
        </main>
    )
}
