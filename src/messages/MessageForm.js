import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const MessageForm = () => {

    const localhelpAppUser = localStorage.getItem("helpApp_user")
    const helpAppUserObject = JSON.parse(localhelpAppUser)

    const navigate = useNavigate()


    const [messageState, updatemessageState] = useState({
        userId: "",
        userName: "",
        alertTypesId: 0,
        alertDateTime: "2023-11-17T15:03:12.618Z",
        familyId: helpAppUserObject.familyId,
        msg: ""
    })

  
 const handleSaveButtonClick = (event) => {
        event.preventDefault()


        // TODO: Create the object to be saved to the API

        const messageToSendToAPI = {
            userId: helpAppUserObject.id,
            userName: "",
            alertDateTime: "2023-11-17T15:03:12.618Z",
            familyId: helpAppUserObject.familyId,
            msg: messageState.msg,
        }





        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/messages?_expand=user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageToSendToAPI)
        })
            .then(response => {
                if (response.ok) {
                    navigate("/MessageList")
                } else {
                    // Handle errors from the API if necessary
                    console.error('Error:', response.status);
                }
            })
            
    };

    return (
        <form className="messageForm">
            <h2 className="messageForm__title">Messages</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="msg">Enter Message here:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={messageState.msg}
                        onChange={
                            (evt) => {
                                // TODO: Update message property
                                const copy = { ...messageState }
                                copy.msg = evt.target.value
                                updatemessageState(copy)
                                
                            }
                            
                        } />
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Message
            </button>
        </form>
    )
}
